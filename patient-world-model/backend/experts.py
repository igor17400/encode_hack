"""How surgeons judged visually similar views: READ-ONLY queries to Igor's Endoscapes expert library.

Igor's Atlas cluster holds `second_look.expert_frames`: 3,437 Endoscapes TRAINING frames, each with the average
CVS score of three surgeons (C1 two structures, C2 triangle cleared, C3 cystic plate), the majority verdict, and a
gemini-embedding-2 image embedding, indexed as `frame_vectors` (filters: video, met.C1/C2/C3).

This module never writes to that database: it only exposes `$vectorSearch` aggregations through a wrapper with no
write methods. Configure with EXPERT_MONGODB_URI (ideally a read-only Atlas user).
"""
from __future__ import annotations

import os
from functools import lru_cache

from backend import config

INDEX = "frame_vectors"
CRITERIA = ("C1", "C2", "C3")
# CAMMA numbering -> our CVS keys (same mapping as backend/endoscapes.py).
NAMES = {"C1": "two structures", "C2": "triangle cleared", "C3": "cystic plate"}


class _ReadOnly:
    """Only aggregate() reaches the collection: no insert / update / delete / index changes are possible here."""

    def __init__(self, col):
        self._col = col

    def aggregate(self, pipeline: list[dict]) -> list[dict]:
        for stage in pipeline:
            if any(k in stage for k in ("$out", "$merge")):
                raise PermissionError("write stages are not allowed on the expert library")
        return list(self._col.aggregate(pipeline))


@lru_cache(maxsize=1)
def library() -> _ReadOnly:
    uri = os.getenv("EXPERT_MONGODB_URI", "")
    if not uri:
        raise RuntimeError("EXPERT_MONGODB_URI is not set (Igor's expert library)")
    from pymongo import MongoClient

    return _ReadOnly(MongoClient(uri, serverSelectionTimeoutMS=15000, appname="second-look-readonly")
                     ["second_look"]["expert_frames"])


def similar_expert_views(image_vector: list[float], per_side: int = 1) -> list[dict]:
    """Contrastive retrieval: for each criterion, the nearest training view where surgeons said it WAS met and
    the nearest where they said it was NOT. Duplicates dropped. Errors propagate (nothing is substituted)."""
    q = [float(x) for x in image_vector]
    out: dict[str, dict] = {}
    for c in CRITERIA:
        for met in (True, False):
            pipe = [{"$vectorSearch": {"index": INDEX, "path": "embedding", "queryVector": q, "numCandidates": 100,
                                       "limit": per_side, "filter": {f"met.{c}": met}}},
                    {"$project": {"embedding": 0, "annotators": 0, "score": {"$meta": "vectorSearchScore"}}}]
            for d in library().aggregate(pipe):
                d = out.setdefault(str(d["_id"]), {**d, "_id": str(d["_id"]), "retrieved_for": []})
                d["retrieved_for"].append(f"{c} {'met' if met else 'not met'}")
    rows = sorted(out.values(), key=lambda d: -d["score"])
    for r in rows:
        r["verdict"] = {NAMES[c]: {"score": round(r["cvs"][c], 2), "met": r["met"][c]} for c in CRITERIA}
        r["source"] = f"Endoscapes training video {r['video']}, frame {r['frame']} (3 surgeons)"
    return rows
