"""Cached Gemini wrapper: generate_json() and embed().

Every response is cached on disk (sqlite, keyed by a hash of the full input), so reruns are free and
the demo never depends on a cold call. Uncached calls count against GEMINI_MAX_CALLS and are logged
to the Atlas `usage` collection (best effort).
"""
from __future__ import annotations

import asyncio
import hashlib
import json
import sqlite3
import threading
import time
from pathlib import Path
from typing import TypeVar

import numpy as np
from pydantic import BaseModel, ValidationError

from backend import config

T = TypeVar("T", bound=BaseModel)

QUERY_PREFIX = "task: search result | query: "
DOC_PREFIX = "title: none | text: "
EMBED_BATCH = 100


class GeminiError(RuntimeError):
    pass


class BudgetExceeded(GeminiError):
    pass


_client = None
_lock = threading.Lock()
_calls = 0
_embed_model: str | None = None


def set_client(client) -> None:
    """Inject a client (tests use a fake)."""
    global _client
    _client = client


def client():
    global _client
    if _client is None:
        if not config.GEMINI_API_KEY:
            raise GeminiError("GEMINI_API_KEY is not set (see README: Setup)")
        from google import genai

        _client = genai.Client(api_key=config.GEMINI_API_KEY)
    return _client


def reset_counter() -> None:
    global _calls
    _calls = 0


def calls_made() -> int:
    return _calls


# --- disk cache ---------------------------------------------------------------
class _Cache:
    def __init__(self, path: Path):
        self.path = path
        self._local = threading.local()

    def _db(self) -> sqlite3.Connection:
        con = getattr(self._local, "con", None)
        if con is None:
            self.path.parent.mkdir(parents=True, exist_ok=True)
            con = sqlite3.connect(self.path, timeout=30)
            con.execute("CREATE TABLE IF NOT EXISTS kv (k TEXT PRIMARY KEY, v BLOB)")
            self._local.con = con
        return con

    def get(self, k: str):
        row = self._db().execute("SELECT v FROM kv WHERE k = ?", (k,)).fetchone()
        return row[0] if row else None

    def put(self, k: str, v) -> None:
        con = self._db()
        con.execute("INSERT OR REPLACE INTO kv VALUES (?, ?)", (k, v))
        con.commit()


cache = _Cache(config.CACHE / "gemini.sqlite")


def _hash(*parts) -> str:
    h = hashlib.sha256()
    for p in parts:
        h.update(p if isinstance(p, bytes) else str(p).encode())
        h.update(b"\x00")
    return h.hexdigest()


def _count_call() -> None:
    global _calls
    with _lock:
        if _calls >= config.GEMINI_MAX_CALLS:
            raise BudgetExceeded(f"GEMINI_MAX_CALLS={config.GEMINI_MAX_CALLS} reached")
        _calls += 1


def _log_usage(model: str, kind: str, in_tok: int, out_tok: int, cached: bool) -> None:
    price = config.PRICES.get(model, {"input": 0, "output": 0})
    cost = (in_tok * price["input"] + out_tok * price["output"]) / 1e6
    try:
        from backend import db

        db.log_usage({"model": model, "kind": kind, "input_tokens": in_tok, "output_tokens": out_tok,
                      "cached": cached, "est_cost_usd": 0.0 if cached else cost, "ts": time.time()})
    except Exception:
        pass


def _with_retries(fn, tries: int = 4):
    """Retry the SAME call on transient failures (rate limit, 5xx, timeouts, dropped connections).
    A spending-cap 429 is not transient and is raised immediately. Never substitutes a result."""
    import httpx
    from google.genai import errors

    for i in range(tries):
        try:
            return fn()
        except errors.APIError as e:
            transient = getattr(e, "code", None) in (429, 500, 502, 503, 504) and "spending cap" not in str(e)
            if transient and i < tries - 1:
                time.sleep(2 ** i)
                continue
            raise
        except (httpx.TimeoutException, httpx.NetworkError):
            if i < tries - 1:
                time.sleep(2 ** i)
                continue
            raise


# --- generate_json ------------------------------------------------------------
def generate_json(
    model: str,
    prompt: str,
    schema: type[T],
    images: list[str | Path] | None = None,
    thinking_level: str = "low",
    cache_salt: str = "",
) -> T:
    """Structured JSON call validated by `schema`. Retries once on a validation failure.

    cache_salt: part of the cache key only (never sent). Use it when repeated identical prompts must be
    independent samples, e.g. one salt per simulator episode, so a cache hit never stands in for a new sample.
    """
    from google.genai import types

    image_bytes = [Path(p).read_bytes() for p in images or []]
    schema_json = json.dumps(schema.model_json_schema(), sort_keys=True)
    last_err: Exception | None = None
    for attempt in range(2):
        salt = (cache_salt,) if cache_salt else ()  # empty salt keeps keys identical to unsalted calls
        key = _hash("gen", model, prompt, schema_json, thinking_level, attempt, *salt,
                    *[_hash(b) for b in image_bytes])
        hit = cache.get(key)
        if hit is not None:
            _log_usage(model, "generate", 0, 0, cached=True)
            text = hit if isinstance(hit, str) else hit.decode()
        else:
            _count_call()
            parts = [types.Part.from_bytes(data=b, mime_type="image/png") for b in image_bytes]
            parts.append(types.Part(text=prompt))
            cfg = types.GenerateContentConfig(
                response_mime_type="application/json",
                response_schema=schema,
                thinking_config=types.ThinkingConfig(thinking_level=thinking_level.upper()),
            )
            resp = _with_retries(
                lambda: client().models.generate_content(
                    model=model, contents=[types.Content(role="user", parts=parts)], config=cfg
                )
            )
            text = resp.text or ""
            um = getattr(resp, "usage_metadata", None)
            _log_usage(model, "generate",
                       getattr(um, "prompt_token_count", 0) or 0,
                       (getattr(um, "candidates_token_count", 0) or 0) + (getattr(um, "thoughts_token_count", 0) or 0),
                       cached=False)
        try:
            out = schema.model_validate_json(text)
            if hit is None:
                cache.put(key, text)
            return out
        except ValidationError as e:
            last_err = e
    raise GeminiError(f"schema validation failed twice: {last_err}")


async def agenerate_json(*args, **kwargs):
    return await asyncio.to_thread(generate_json, *args, **kwargs)


# --- embeddings ---------------------------------------------------------------
def _embed_batch(texts: list[str]) -> list[list[float]]:
    from google.genai import errors, types

    global _embed_model
    # One Content per string: several strings in a single Content return ONE aggregated embedding.
    contents = [types.Content(parts=[types.Part(text=t)]) for t in texts]
    cfg = types.EmbedContentConfig(output_dimensionality=config.EMBED_DIM)
    models = [_embed_model] if _embed_model else [config.EMBED_MODEL, config.EMBED_MODEL_FALLBACK]
    for i, m in enumerate(models):
        try:
            _count_call()
            resp = _with_retries(lambda: client().models.embed_content(model=m, contents=contents, config=cfg))
            _embed_model = m
            break
        except errors.APIError as e:
            if getattr(e, "code", None) == 404 and i < len(models) - 1:
                continue
            raise
    embs = [e.values for e in resp.embeddings]
    if len(embs) != len(texts):
        raise GeminiError(f"expected {len(texts)} embeddings, got {len(embs)}")
    _log_usage(_embed_model, "embed", sum(len(t) // 4 for t in texts), 0, cached=False)
    return embs


def embed(texts: list[str], kind: str = "document") -> list[list[float]]:
    """Embed texts with the task prefix for `kind` ('query' | 'document'). Cached per text."""
    prefix = QUERY_PREFIX if kind == "query" else DOC_PREFIX
    full = [prefix + t for t in texts]
    keys = [_hash("emb", config.EMBED_MODEL, config.EMBED_DIM, t) for t in full]
    out: list[list[float] | None] = []
    for k in keys:
        hit = cache.get(k)
        out.append(np.frombuffer(hit, dtype=np.float32).tolist() if hit is not None else None)
    missing = [i for i, v in enumerate(out) if v is None]
    for start in range(0, len(missing), EMBED_BATCH):
        idx = missing[start:start + EMBED_BATCH]
        vecs = _embed_batch([full[i] for i in idx])
        for i, v in zip(idx, vecs):
            a = np.asarray(v, dtype=np.float32)
            a /= np.linalg.norm(a) or 1.0
            cache.put(keys[i], a.tobytes())
            out[i] = a.tolist()
    return out  # type: ignore[return-value]


def embed_one(text: str, kind: str = "query") -> list[float]:
    return embed([text], kind)[0]


def embed_model_in_use() -> str | None:
    return _embed_model
