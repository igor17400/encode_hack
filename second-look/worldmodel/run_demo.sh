#!/bin/bash
# Generate two synthetic continuations from real Endoscapes2023 frames with Wan 2.2 TI2V-5B.
# Uses the Endora venv (torch 2.11 cu128, diffusers 0.41), which already has everything needed.
set -e
cd "$(dirname "$0")"
PY=/home/pain/Programming/Hackathons/Endora/.venv/bin/python
export CUDA_VISIBLE_DEVICES=${CUDA_VISIBLE_DEVICES:-0}
EXTRA="$@"   # e.g. --width 1280 --height 704 --frames 121 --steps 50

$PY generate.py --image frames/endo166_t040.png --out out/endo166_t040_wan.mp4 $EXTRA --prompt \
"Laparoscopic cholecystectomy seen through the endoscope, circular field of view. Early dissection of the hepatocystic triangle: a grasper on the left holds the gallbladder neck taut while an electrocautery hook on the right gently strips fat and connective tissue away from the gallbladder, exposing the cystic duct. The liver sits dark red at the top right. Moist glistening tissue with specular highlights, slow steady camera, small realistic instrument movements, light smoke from the hook."

$PY generate.py --image frames/endo198_t139.png --out out/endo198_t139_wan.mp4 $EXTRA --prompt \
"Laparoscopic cholecystectomy seen through the endoscope, circular field of view, fixed camera. The critical view of safety is reached: the cystic duct and cystic artery are isolated as two pale tubular structures entering the gallbladder neck, with clear windows through the hepatocystic triangle and the cystic plate exposed on the liver bed. A metallic grasper at the bottom holds the gallbladder steady and makes only tiny movements. The organs stay in place; subtle breathing motion, moist glistening tissue with specular highlights, consistent lighting and framing throughout."

# Your 10-second "probing" prompt (prompts/probe_10s.txt): two chained 5 s segments at the model's native length.
# Takes about 3 minutes.
$PY generate.py --image frames/endo166_t040.png --out out/endo166_t040_probe10s.mp4 --frames 121 --chain 2 $EXTRA \
    --prompt "$(cat prompts/probe_10s.txt)"
