"""Expert-labelled frame library for retrieval (MongoDB Atlas Vector Search).

  python library.py build              # pick training-split keyframes, extract, embed -> ../data/library/
  python library.py upload             # insert into Atlas (MONGODB_URI) and create the vector index
  python library.py query FRAME.jpg    # nearest expert-labelled frames for one image
  python library.py --selftest

Only TRAINING-split videos go in the library, so retrieval never sees the test operations we score on.
"""
import argparse
import csv
import json
import os
import random
import zipfile
from concurrent.futures import ThreadPoolExecutor

import label  # loads .env

HERE = os.path.dirname(os.path.abspath(__file__))
DATA = os.path.join(HERE, "..", "data")
LIB = os.path.join(DATA, "library")
EMBED_MODEL = "gemini-embedding-2"
DIM = 768
DB, COLL, INDEX = "second_look", "expert_frames", "frame_vectors"
CRITS = ("C1", "C2", "C3")


def pick(rows, train, n_neg, seed=0):
    """All training keyframes where any criterion is met, plus n_neg random ones where none is."""
    kf = [r for r in rows if r["is_ds_keyframe"] == "True" and r["vid"] in train]
    pos = [r for r in kf if any(float(r[c]) >= 0.5 for c in CRITS)]
    neg = [r for r in kf if all(float(r[c]) < 0.5 for c in CRITS)]
    return pos + random.Random(seed).sample(neg, min(n_neg, len(neg)))


def embed(client, image):
    from google.genai import types
    r = client.models.embed_content(model=EMBED_MODEL, contents=[types.Part.from_bytes(data=image, mime_type="image/jpeg")],
                                    config=types.EmbedContentConfig(output_dimensionality=DIM))
    return r.embeddings[0].values


def build(n_neg):
    from google import genai
    z = zipfile.ZipFile(os.path.join(DATA, "endoscapes.zip"))
    names = set(z.namelist())
    train = set(z.read("endoscapes/train_vids.txt").decode().split())
    train = {str(int(float(v))) for v in train}
    rows = list(csv.DictReader(z.open("endoscapes/all_metadata.csv").read().decode().splitlines()))
    for r in rows:
        r["vid"] = str(int(float(r["vid"])))
    chosen = pick(rows, train, n_neg)
    os.makedirs(os.path.join(LIB, "frames"), exist_ok=True)
    client = genai.Client()
    # zipfile handles are not thread-safe: read every image first, then embed in parallel
    work = []
    for r in chosen:
        name = f"{r['vid']}_{int(float(r['frame']))}.jpg"
        if f"endoscapes/train/{name}" in names:
            work.append((r, name, z.read(f"endoscapes/train/{name}")))

    def one(item):
        r, name, img = item
        with open(os.path.join(LIB, "frames", name), "wb") as f:
            f.write(img)
        err = None
        for _ in range(3):
            try:
                vec = embed(client, img)
                break
            except Exception as e:  # transient API errors: retry, then skip the frame
                err = e
        else:
            print("skip", name, str(err)[:120])
            return None
        return {"_id": name, "video": int(r["vid"]), "frame": int(float(r["frame"])), "split": "train",
                "cvs": {c: float(r[c]) for c in CRITS},
                "met": {c: float(r[c]) >= 0.5 for c in CRITS},
                "annotators": {f"annotator_{i}": r.get(f"cvs_annotator_{i}") for i in (1, 2, 3)},
                "embedding": vec}

    print(f"embedding {len(work)} training keyframes with {EMBED_MODEL}...")
    with ThreadPoolExecutor(16) as ex:
        docs = [d for d in ex.map(one, work) if d]
    with open(os.path.join(LIB, "library.jsonl"), "w") as f:
        for d in docs:
            f.write(json.dumps(d) + "\n")
    met = {c: sum(d["met"][c] for d in docs) for c in CRITS}
    print(f"wrote {len(docs)} frames to {LIB}/library.jsonl  met: {met}")


def mongo_uri():
    """MONGODB_URI if set, else built from MONGODB_HOST + MONGODB_USER + DB_PASSWORD (password URL-escaped)."""
    if os.environ.get("MONGODB_URI"):
        return os.environ["MONGODB_URI"]
    from urllib.parse import quote_plus
    user, pw, host = os.environ.get("MONGODB_USER", "igor"), os.environ["DB_PASSWORD"], os.environ["MONGODB_HOST"]
    return f"mongodb+srv://{quote_plus(user)}:{quote_plus(pw)}@{host}/?retryWrites=true&w=majority&appName=cluster-encode"


def collection():
    from pymongo import MongoClient
    return MongoClient(mongo_uri())[DB][COLL]


def upload():
    from pymongo.operations import SearchIndexModel
    coll = collection()
    docs = [json.loads(line) for line in open(os.path.join(LIB, "library.jsonl"))]
    coll.delete_many({})
    for i in range(0, len(docs), 500):
        coll.insert_many(docs[i:i + 500])
    if INDEX not in [ix["name"] for ix in coll.list_search_indexes()]:
        coll.create_search_index(SearchIndexModel(name=INDEX, type="vectorSearch", definition={"fields": [
            {"type": "vector", "path": "embedding", "numDimensions": DIM, "similarity": "cosine"},
            {"type": "filter", "path": "video"},
            {"type": "filter", "path": "met.C1"},
            {"type": "filter", "path": "met.C2"},
            {"type": "filter", "path": "met.C3"},
        ]}))
    print(f"uploaded {len(docs)} docs to {DB}.{COLL}; vector index '{INDEX}' (takes a minute to build)")


def similar(vec, k=4, exclude_video=None, filt=None):
    """Nearest expert-labelled frames. Returns docs without the embedding, plus a similarity score."""
    f = dict(filt or {})
    if exclude_video is not None:
        f["video"] = {"$ne": exclude_video}
    stage = {"index": INDEX, "path": "embedding", "queryVector": list(vec), "numCandidates": 20 * k, "limit": k}
    if f:
        stage["filter"] = f
    return list(collection().aggregate([
        {"$vectorSearch": stage},
        {"$project": {"embedding": 0, "score": {"$meta": "vectorSearchScore"}}},
    ]))


def selftest():
    rows = [{"vid": "1", "is_ds_keyframe": "True", "C1": "1", "C2": "0", "C3": "0"},
            {"vid": "1", "is_ds_keyframe": "True", "C1": "0", "C2": "0", "C3": "0"},
            {"vid": "2", "is_ds_keyframe": "True", "C1": "1", "C2": "1", "C3": "1"},   # not in train
            {"vid": "1", "is_ds_keyframe": "False", "C1": "1", "C2": "1", "C3": "1"}]  # not a keyframe
    got = pick(rows, {"1"}, n_neg=5)
    assert len(got) == 2 and got[0]["C1"] == "1", got
    print("selftest ok")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("cmd", nargs="?", choices=["build", "upload", "query"])
    ap.add_argument("image", nargs="?")
    ap.add_argument("--negatives", type=int, default=1500, help="frames with no criterion met to include")
    ap.add_argument("--selftest", action="store_true")
    a = ap.parse_args()
    if a.selftest:
        return selftest()
    if a.cmd == "build":
        return build(a.negatives)
    if a.cmd == "upload":
        return upload()
    if a.cmd == "query":
        from google import genai
        for d in similar(embed(genai.Client(), open(a.image, "rb").read())):
            print(f"{d['_id']:>16}  score {d['score']:.3f}  met {d['met']}")
        return
    ap.error("give build, upload, query or --selftest")


if __name__ == "__main__":
    main()
