"""Four hand-written synthetic patients. No real patient data.

Usage: python pipeline/05_patients.py   (writes data/patients.json and, if MONGODB_URI is set, Atlas)
"""
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from backend import config  # noqa: E402

PATIENTS = [
    {"patient_id": "P1", "name": "Routine", "story": "Elective cholecystectomy for uncomplicated gallstones.",
     "modifiers": {}, "risk_factors": []},
    {"patient_id": "P2", "name": "Acute cholecystitis",
     "story": "Inflamed, thickened gallbladder; tissue planes are oedematous and bleed easily.",
     "modifiers": {"skeletonise_factor": 1.8, "bleed_factor": 2.0}, "risk_factors": ["inflammation"]},
    {"patient_id": "P3", "name": "Prior surgery",
     "story": "Adhesions from an old abdominal operation obscure Calot's triangle at the start.",
     "modifiers": {"adhesions_at_start": True}, "risk_factors": ["adhesions"]},
    {"patient_id": "P4", "name": "Short cystic duct",
     "story": "Short cystic duct; the common bile duct lies close to the clip site.",
     "modifiers": {"cvs_violation_is_injury": True}, "risk_factors": ["short_cystic_duct"]},
]


def load() -> dict[str, dict]:
    return {p["patient_id"]: p for p in PATIENTS}


def main() -> None:
    (config.DATA / "patients.json").write_text(json.dumps(PATIENTS, indent=1))
    if config.MONGODB_URI:
        from backend import db

        for p in PATIENTS:
            db.col("patients").replace_one({"patient_id": p["patient_id"]}, p, upsert=True)
        print(f"upserted {len(PATIENTS)} patients")
    else:
        print("MONGODB_URI not set; wrote data/patients.json only")


if __name__ == "__main__":
    main()
