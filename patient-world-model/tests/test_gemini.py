"""Cache + schema behaviour of the Gemini wrapper with a fake client."""
from types import SimpleNamespace

import pytest
from pydantic import BaseModel

from backend import config, gemini


class Out(BaseModel):
    answer: str


class FakeModels:
    def __init__(self, texts):
        self.texts = list(texts)
        self.gen_calls = 0
        self.embed_calls = 0

    def generate_content(self, model, contents, config):
        self.gen_calls += 1
        return SimpleNamespace(text=self.texts.pop(0), usage_metadata=None)

    def embed_content(self, model, contents, config):
        self.embed_calls += 1
        return SimpleNamespace(embeddings=[SimpleNamespace(values=[1.0] * 768) for _ in contents])


@pytest.fixture
def fake(tmp_path, monkeypatch):
    monkeypatch.setattr(gemini, "cache", gemini._Cache(tmp_path / "c.sqlite"))
    monkeypatch.setattr(gemini, "_log_usage", lambda *a, **k: None)
    gemini.reset_counter()
    models = FakeModels(['{"answer": "a"}', '{"answer": "b"}'])
    gemini.set_client(SimpleNamespace(models=models))
    yield models
    gemini.set_client(None)


def test_second_identical_call_is_cached(fake):
    a = gemini.generate_json("m", "p", Out)
    b = gemini.generate_json("m", "p", Out)
    assert a.answer == b.answer == "a"
    assert fake.gen_calls == 1


def test_invalid_json_retries_once(fake):
    fake.texts = ["not json", '{"answer": "ok"}']
    assert gemini.generate_json("m", "p2", Out).answer == "ok"
    assert fake.gen_calls == 2


def test_budget(fake, monkeypatch):
    monkeypatch.setattr(config, "GEMINI_MAX_CALLS", 1)
    gemini.generate_json("m", "x", Out)
    with pytest.raises(gemini.BudgetExceeded):
        gemini.generate_json("m", "y", Out)


def test_embed_one_vector_per_text_and_cache(fake):
    v = gemini.embed(["a", "b", "a"])
    assert len(v) == 3 and len(v[0]) == 768
    assert abs(sum(x * x for x in v[0]) - 1.0) < 1e-5  # normalised
    gemini.embed(["a", "b"])
    assert fake.embed_calls == 1


def test_cache_salt_gives_independent_samples(fake):
    a = gemini.generate_json("m", "same prompt", Out, cache_salt="ep1")
    b = gemini.generate_json("m", "same prompt", Out, cache_salt="ep2")
    c = gemini.generate_json("m", "same prompt", Out, cache_salt="ep1")
    assert fake.gen_calls == 2          # ep2 was a new call, not a cache hit
    assert (a.answer, b.answer, c.answer) == ("a", "b", "a")
