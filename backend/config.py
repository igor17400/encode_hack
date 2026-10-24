"""Central configuration: model names, thresholds, paths. Tuned values are noted in DECISIONS.md."""
import os
from pathlib import Path

from dotenv import load_dotenv

ROOT = Path(__file__).resolve().parent.parent
load_dotenv(ROOT / ".env")

# --- Credentials / runtime -------------------------------------------------
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY", "")
MONGODB_URI = os.getenv("MONGODB_URI", "")
DB_NAME = os.getenv("DB_NAME", "second_look")
DEMO_MODE = os.getenv("DEMO_MODE", "live")  # live | precomputed
GEMINI_MAX_CALLS = int(os.getenv("GEMINI_MAX_CALLS", "500"))

# --- Models ----------------------------------------------------------------
MODEL_ARGON = "gemini-4-argon"      # world-model step, verification, lessons
MODEL_FLASH = "gemini-3.8-flash"    # perception, robot agent
EMBED_MODEL = "gemini-embedding-2"
EMBED_MODEL_FALLBACK = "gemini-embedding-2-preview"
EMBED_DIM = 768

# USD per 1M tokens. Fill in from AI Studio before running big jobs.
PRICES = {
    MODEL_ARGON: {"input": 0.0, "output": 0.0},
    MODEL_FLASH: {"input": 0.0, "output": 0.0},
    EMBED_MODEL: {"input": 0.0, "output": 0.0},
    EMBED_MODEL_FALLBACK: {"input": 0.0, "output": 0.0},
}

# --- Paths -----------------------------------------------------------------
DATA = ROOT / "data"
RAW = DATA / "raw"
HF_SAMPLES = RAW / "samples.json"
CHALLENGE_VAL = RAW / "cholect50-challenge-val"
LABELS = DATA / "labels.json"        # compact {video_id: {second: [triplet, ...]}}
VOCAB = DATA / "vocab.json"
SPLIT = DATA / "split.json"
STATES = DATA / "states"             # per-video per-second states
TRANSITIONS = DATA / "transitions.jsonl"
FRAMES_DIR = DATA / "frames"
FRAMES_INDEX = DATA / "frames.jsonl"
CACHE = ROOT / ".cache"
PRECOMPUTED = ROOT / "demo" / "precomputed"

# --- Rule engine thresholds (tuned in M2 against E4) ------------------------
# Dissection seconds on a target until it counts as skeletonised / fully exposed.
SKELETONISE_SECONDS = 10      # tuned from 20 so E4 <= 20% (see DECISIONS.md)
# Dissecting the gallbladder near its bed also exposes the cystic plate, at this rate.
PLATE_FROM_GB_DISSECT = 0.5
# Seconds of continuous clipping that count as one additional clip.
CLIP_SECONDS = 4
BLEED_CLEAR_S = 30
ADHESION_WINDOW_S = 60
ADHESION_CLEAR_SECONDS = 20          # P3: dissection seconds to clear starting adhesions
GB_DETACH_SECONDS = 20               # gallbladder dissection after both cuts to free it from the liver bed
ACTION_SECONDS = 10                  # simulated seconds per agent / imagine action
PERCEPTION_MIN_CONF = 0.6

# Base per-action bleeding probability used when Argon is unavailable.
BASE_BLEED_RISK = {"dissect": 0.05, "cut": 0.08, "coagulate": 0.02, "default": 0.01}

# --- Retrieval --------------------------------------------------------------
VECTOR_K = 5
VECTOR_CANDIDATES = 200
