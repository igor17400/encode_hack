"""Image-to-video with Wan 2.2 TI2V-5B: continue a real endoscope frame into a short synthetic clip.

  python generate.py --image frames/endo166_t040.png --prompt "..." --out out/endo166_t040.mp4

Defaults are tuned for a 32 GB RTX 5090: 832x480, 81 frames at 24 fps (about 3.4 s), 40 steps.
Pass --width 1280 --height 704 --frames 121 for the model's native 720p / 5 s setting (slower).

Everything this produces is AI-generated and must be labelled as such. It is a teaching / simulation
preview, not real anatomy, and must not feed the safety pipeline as if it were real footage.
"""

import argparse
import os
import time

import torch
from PIL import Image

MODEL_ID = "Wan-AI/Wan2.2-TI2V-5B-Diffusers"

# Wan's recommended negative prompt (translated from the official Chinese one) plus surgery-specific failure modes.
NEGATIVE = (
    "bright colors, overexposed, static, blurred details, subtitles, text, watermark, logo, style, artwork, "
    "painting, picture, still, overall gray, worst quality, low quality, JPEG compression residue, ugly, "
    "incomplete, extra fingers, poorly drawn hands, poorly drawn face, deformed, disfigured, malformed limbs, "
    "fused fingers, still picture, messy background, three legs, many people in the background, walking backwards, "
    "cartoon, animation, instruments melting into tissue, duplicated instruments, flickering"
)

_PIPES = {}


def load_pipe(kind="i2v"):
    """Load once per process. bf16 transformer, fp32 VAE (as recommended for Wan 2.2), CPU offload for headroom.
    kind: "i2v" continues a seed frame, "t2v" generates from the prompt alone (TI2V-5B supports both)."""
    if kind not in _PIPES:
        from diffusers import AutoencoderKLWan, WanImageToVideoPipeline, WanPipeline

        vae = AutoencoderKLWan.from_pretrained(MODEL_ID, subfolder="vae", torch_dtype=torch.float32)
        cls = WanImageToVideoPipeline if kind == "i2v" else WanPipeline
        pipe = cls.from_pretrained(MODEL_ID, vae=vae, torch_dtype=torch.bfloat16)
        pipe.enable_model_cpu_offload()
        _PIPES[kind] = pipe
    return _PIPES[kind]


def fit_image(path, width, height):
    """Resize to cover width x height, then centre-crop, so the aspect ratio is never distorted."""
    img = Image.open(path).convert("RGB")
    scale = max(width / img.width, height / img.height)
    img = img.resize((round(img.width * scale), round(img.height * scale)), Image.LANCZOS)
    left = (img.width - width) // 2
    top = (img.height - height) // 2
    return img.crop((left, top, left + width, top + height))


def generate(image_path, prompt, out_path, width=832, height=480, frames=81, steps=40, guidance=5.0, fps=24, seed=0,
             chain=1, negative_extra=""):
    """Generate one clip, or `chain` clips back to back, each starting from the last frame of the previous one.
    image_path=None makes the first segment text-to-video (no seed frame)."""
    from diffusers.utils import export_to_video

    pipe = load_pipe("i2v" if image_path else "t2v")
    mod = pipe.vae_scale_factor_spatial * pipe.transformer.config.patch_size[1]  # 32 for TI2V-5B
    width, height = width // mod * mod, height // mod * mod
    frames = (frames - 1) // 4 * 4 + 1  # Wan needs 4k+1 frames
    image = fit_image(image_path, width, height) if image_path else None

    t0 = time.time()
    video = []
    for seg in range(chain):
        if seg == 1 and image_path is None:
            pipe = load_pipe("i2v")  # continuations always need the image-to-video pipeline
        clip = pipe(
            **({"image": image} if image is not None else {}),
            prompt=prompt,
            negative_prompt=NEGATIVE + (", " + negative_extra if negative_extra else ""),
            height=height,
            width=width,
            num_frames=frames,
            num_inference_steps=steps,
            guidance_scale=guidance,
            generator=torch.Generator("cuda").manual_seed(seed + seg),
        ).frames[0]
        video.extend(clip if seg == 0 else clip[1:])  # first frame of a continuation repeats the seed frame
        image = Image.fromarray((clip[-1] * 255).round().astype("uint8"))  # seed the next segment
    os.makedirs(os.path.dirname(os.path.abspath(out_path)), exist_ok=True)
    export_to_video(video, out_path, fps=fps)
    print(f"wrote {out_path}  ({len(video)} frames, {width}x{height}, {time.time() - t0:.0f}s, "
          f"peak VRAM {torch.cuda.max_memory_allocated() / 2**30:.1f} GB)")
    return out_path


def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--image", default=None, help="starting frame (png/jpg); omit for pure text-to-video")
    ap.add_argument("--prompt", required=True, help="what happens next")
    ap.add_argument("--out", required=True, help="output .mp4")
    ap.add_argument("--width", type=int, default=832)
    ap.add_argument("--height", type=int, default=480)
    ap.add_argument("--frames", type=int, default=81, help="4k+1; 81 = 3.4 s, 121 = 5 s at 24 fps")
    ap.add_argument("--steps", type=int, default=40)
    ap.add_argument("--guidance", type=float, default=5.0)
    ap.add_argument("--fps", type=int, default=24)
    ap.add_argument("--seed", type=int, default=0)
    ap.add_argument("--chain", type=int, default=1, help="number of clips to chain; 2 x 121 frames = 10 s")
    ap.add_argument("--negative-extra", default="", help="appended to the built-in negative prompt")
    a = ap.parse_args()
    generate(a.image, a.prompt, a.out, a.width, a.height, a.frames, a.steps, a.guidance, a.fps, a.seed, a.chain,
             a.negative_extra)


if __name__ == "__main__":
    main()
