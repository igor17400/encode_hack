# World model preview: synthetic continuations of real frames

Image-to-video with **Wan 2.2 TI2V-5B** (Apache 2.0, Alibaba) running locally on the RTX 5090. Give it one real
frame from an Endoscapes2023 operation and a plain-language description of what happens next; it writes a short
mp4 that continues the scene.

> Everything here is **AI-generated**. It is a teaching / simulation preview, not real anatomy, and it must not be
> fed to the safety pipeline as if it were real footage. The models were never trained on surgery and can invent
> structures or merge instruments into tissue.

## Run

```bash
./run_demo.sh                                   # two 3.4 s clips at 832x480, ~40 steps
./run_demo.sh --width 1280 --height 704 --frames 121 --steps 50   # native 720p / 5 s (slower)
```

Or one clip by hand:

```bash
PY=/home/pain/Programming/Hackathons/Endora/.venv/bin/python
$PY generate.py --image frames/endo166_t040.png --prompt "..." --out out/test.mp4 [--frames 121] [--chain 2]
```

`--chain 2` makes a 10 s clip from two 5 s segments, seeding the second from the last frame of the first.

## Files

- `generate.py`: the generator (diffusers `WanImageToVideoPipeline`, bf16 transformer, fp32 VAE, CPU offload).
- `run_demo.sh`: the two demo frames with frame-matched prompts, plus the 10 s probing prompt commented out.
- `frames/`: seed frames extracted with ffmpeg (`endo166` at 0:40 = early dissection, `endo198` at 2:19 = CVS reached).
- `prompts/probe_10s.txt`: the hand-written 10 s instrument-probing prompt.
- `out/`: generated mp4s.

## Prompting tips

Describe what the camera sees, not the surgery: colours, shapes, where instruments enter from, how they move.
Match the prompt to the seed frame's actual layout. Second-by-second timing in the prompt is mostly ignored; the
model follows the overall motion.

## Environment

Uses the Endora venv at `/home/pain/Programming/Hackathons/Endora/.venv` (Python 3.10, torch 2.11 + CUDA 12.8,
diffusers 0.41). Weights are cached under `~/.cache/huggingface` (32 GB).
