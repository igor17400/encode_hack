"""MongoDB Atlas: client, collection handles, idempotent index setup, vector search helpers.

Usage: python -m backend.db --ping | --indexes
"""
from __future__ import annotations

import argparse
import time
from functools import lru_cache

from backend import config

VECTOR_INDEXES = {
    # collection: (index name, extra filter paths)
    "transitions": ("transitions_vec", ["split", "phase"]),
    "frames": ("frames_vec", ["split", "phase"]),
    "lessons": ("lessons_vec", ["violation_type", "patient_id", "risk_factors", "scope"]),
    "reports": ("reports_vec", ["patient_id", "kind"]),
    "dream_clips": ("dream_clips_vec", ["kind", "accepted", "patient_id"]),
}
# Second vector field on frames: image embeddings (multimodal search), separate index.
IMAGE_INDEX = ("frames", "frames_img_vec", "image_embedding", ["split", "video_id"])
TEXT_INDEXES = {"reports": "reports_text", "lessons": "lessons_text", "dream_clips": "dream_clips_text"}
REGULAR_INDEXES = {
    "world_state": [("session_id", 1), ("t", 1)],
    "transitions": [("video_id", 1), ("t_start", 1)],
    "frames": [("video_id", 1), ("t", 1)],
    "episodes": [("patient_id", 1), ("created_at", 1)],
    "predictions": [("session_id", 1)],
    "alerts": [("session_id", 1)],
    "observations": [("session_id", 1), ("t", 1)],
    "episode_steps": [("session_id", 1)],
    "eval_runs": [("name", 1), ("created_at", -1)],
    "dream_events": [("session_id", 1), ("created_at", 1)],
}


def escaped_uri(uri: str) -> str:
    """Percent-encode the username and password (RFC 3986), so a raw password with @ : / % etc. works.
    Decoding first makes this idempotent for already-encoded credentials."""
    from urllib.parse import quote_plus, unquote_plus

    scheme, sep, rest = uri.partition("://")
    if not sep or "@" not in rest.split("/")[0] and "@" not in rest:
        return uri
    creds, _, host = rest.rpartition("@")  # last '@' separates credentials from host
    user, colon, pw = creds.partition(":")
    enc = quote_plus(unquote_plus(user)) + (colon + quote_plus(unquote_plus(pw)) if colon else "")
    return f"{scheme}://{enc}@{host}"


@lru_cache(maxsize=1)
def client():
    from pymongo import MongoClient

    if not config.MONGODB_URI:
        raise RuntimeError("MONGODB_URI is not set (see README: Setup)")
    return MongoClient(escaped_uri(config.MONGODB_URI), appname="second-look", serverSelectionTimeoutMS=8000)


def db():
    return client()[config.DB_NAME]


def col(name: str):
    return db()[name]


def ping() -> dict:
    t0 = time.time()
    client().admin.command("ping")
    info = client().server_info()
    return {"ok": True, "version": info.get("version"), "ms": round((time.time() - t0) * 1000)}


# --- vectors ------------------------------------------------------------------
def to_bin(vec):
    """Store embeddings as float32 binary vectors (smaller than BSON doubles)."""
    from bson.binary import Binary, BinaryVectorDtype

    return Binary.from_vector([float(x) for x in vec], BinaryVectorDtype.FLOAT32)


def _vector_def(filters: list[str], path: str = "embedding") -> dict:
    return {"fields": [
        {"type": "vector", "path": path, "numDimensions": config.EMBED_DIM, "similarity": "cosine"},
        *[{"type": "filter", "path": f} for f in filters],
    ]}


def ensure_indexes(wait: bool = False) -> list[str]:
    """Create every index if missing. Safe to call on each startup."""
    from pymongo.errors import OperationFailure
    from pymongo.operations import SearchIndexModel

    created = []
    existing_cols = set(db().list_collection_names())
    for name in set(VECTOR_INDEXES) | set(TEXT_INDEXES) | set(REGULAR_INDEXES):
        if name not in existing_cols:
            db().create_collection(name)
    for name, keys in REGULAR_INDEXES.items():
        col(name).create_index(keys)

    wanted: dict[str, list] = {}
    for name, (idx, filters) in VECTOR_INDEXES.items():
        wanted.setdefault(name, []).append(SearchIndexModel(definition=_vector_def(filters), name=idx, type="vectorSearch"))
    for name, idx in TEXT_INDEXES.items():
        wanted.setdefault(name, []).append(SearchIndexModel(definition={"mappings": {"dynamic": True}}, name=idx, type="search"))
    c, idx, path, filters = IMAGE_INDEX
    wanted.setdefault(c, []).append(SearchIndexModel(definition=_vector_def(filters, path), name=idx, type="vectorSearch"))

    for name, models in wanted.items():
        have = {i["name"] for i in col(name).list_search_indexes()}
        for m in models:
            if m.document["name"] in have:
                continue
            try:
                col(name).create_search_index(m)
                created.append(f"{name}.{m.document['name']}")
            except OperationFailure as e:
                print(f"  could not create {name}.{m.document['name']}: {e}")
    if wait:
        wait_for_search_indexes()
    return created


def wait_for_search_indexes(timeout_s: int = 300) -> None:
    deadline = time.time() + timeout_s
    targets = [(c, i) for c, (i, _) in VECTOR_INDEXES.items()] + list(TEXT_INDEXES.items()) + [IMAGE_INDEX[:2]]
    while time.time() < deadline:
        pending = []
        for c, i in targets:
            info = next(iter(col(c).list_search_indexes(i)), None)
            if not info or not info.get("queryable"):
                pending.append(f"{c}.{i}")
        if not pending:
            return
        print("  waiting for indexes:", ", ".join(pending))
        time.sleep(5)
    raise TimeoutError("search indexes not queryable in time")


def vector_search(collection: str, query_vector: list[float], filter: dict | None = None,
                  k: int = config.VECTOR_K, project: dict | None = None) -> list[dict]:
    idx = VECTOR_INDEXES[collection][0]
    stage = {"index": idx, "path": "embedding", "queryVector": [float(x) for x in query_vector],
             "numCandidates": config.VECTOR_CANDIDATES, "limit": k}
    if filter:
        stage["filter"] = filter
    proj = {"embedding": 0, "score": {"$meta": "vectorSearchScore"}}
    if project:
        proj.update(project)
    return _retry(lambda: list(col(collection).aggregate([{"$vectorSearch": stage}, {"$project": proj}])))


TRANSIENT_CODES = {407, 6, 7, 89, 91, 189, 262, 9001}  # pool acquisition timeout, host/network errors


def _retry(fn, tries: int = 5):
    """Retry the same Atlas query on transient server/network errors (e.g. connection-pool timeouts on
    small tiers). Non-transient errors raise immediately; nothing is substituted."""
    from pymongo.errors import AutoReconnect, NetworkTimeout, OperationFailure

    for i in range(tries):
        try:
            return fn()
        except (AutoReconnect, NetworkTimeout):
            if i == tries - 1:
                raise
        except OperationFailure as e:
            if e.code not in TRANSIENT_CODES or i == tries - 1:
                raise
        time.sleep(1.5 * (2 ** i))


def hybrid_search(query: str, query_vector: list[float], limit: int = 10,
                  collections: tuple[str, ...] = ("lessons", "reports")) -> list[dict]:
    """Atlas $rankFusion of full-text ($search) and semantic ($vectorSearch) results, per collection, merged by
    fused score. Each hit carries which pipelines matched it (scoreDetails). Errors propagate to the caller."""
    out = []
    for name in collections:
        pipe = [
            {"$rankFusion": {"input": {"pipelines": {
                "text": [{"$search": {"index": TEXT_INDEXES[name], "text": {"query": query, "path": "text"}}},
                         {"$limit": limit}],
                "vector": [{"$vectorSearch": {"index": VECTOR_INDEXES[name][0], "path": "embedding",
                                              "queryVector": [float(x) for x in query_vector],
                                              "numCandidates": 100, "limit": limit}}]}},
                "scoreDetails": True}},
            {"$limit": limit},
            {"$project": {"embedding": 0, "state_before": 0, "state_after_predicted": 0, "attempts": 0,
                          "score": {"$meta": "score"}, "details": {"$meta": "scoreDetails"}}},
        ]
        for d in _retry(lambda: list(col(name).aggregate(pipe))):
            matched = [x.get("inputPipelineName") for x in (d.pop("details", {}) or {}).get("details", [])
                       if x.get("rank") is not None]
            d.update(_collection=name, _id=str(d["_id"]), matched=matched)
            out.append(d)
    return sorted(out, key=lambda d: -d.get("score", 0))[:limit]


def similar_frames(image_vector: list[float], exclude_video: str | None = None, k: int = 5) -> list[dict]:
    c, idx, path, _ = IMAGE_INDEX
    flt = {"split": "train"} | ({"video_id": {"$ne": exclude_video}} if exclude_video else {})
    stage = {"index": idx, "path": path, "queryVector": [float(x) for x in image_vector],
             "numCandidates": 200, "limit": k, "filter": flt}
    proj = {"embedding": 0, "image_embedding": 0, "state": 0, "score": {"$meta": "vectorSearchScore"}}
    return _retry(lambda: list(col(c).aggregate([{"$vectorSearch": stage}, {"$project": proj}])))


def text_search(query: str, limit: int = 10) -> list[dict]:
    out = []
    for name, idx in TEXT_INDEXES.items():
        pipe = [{"$search": {"index": idx, "text": {"query": query, "path": {"wildcard": "*"}}}},
                {"$limit": limit},
                {"$project": {"embedding": 0, "score": {"$meta": "searchScore"}}}]
        for d in col(name).aggregate(pipe):
            d["_collection"] = name
            out.append(d)
    return sorted(out, key=lambda d: -d.get("score", 0))[:limit]


# --- usage --------------------------------------------------------------------
def log_usage(doc: dict) -> None:
    if not config.MONGODB_URI:
        return
    col("usage").insert_one(doc)


def usage_totals() -> dict:
    pipe = [{"$group": {"_id": None, "calls": {"$sum": {"$cond": ["$cached", 0, 1]}},
                        "cached": {"$sum": {"$cond": ["$cached", 1, 0]}},
                        "input_tokens": {"$sum": "$input_tokens"}, "output_tokens": {"$sum": "$output_tokens"},
                        "est_cost_usd": {"$sum": "$est_cost_usd"}}}]
    rows = list(col("usage").aggregate(pipe))
    r = rows[0] if rows else {}
    r.pop("_id", None)
    return r


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--ping", action="store_true")
    ap.add_argument("--indexes", action="store_true")
    a = ap.parse_args()
    if a.ping:
        print(ping())
    if a.indexes:
        print("created:", ensure_indexes(wait=True))
