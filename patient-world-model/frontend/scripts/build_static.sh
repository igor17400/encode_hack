#!/usr/bin/env bash
# Build the static demo (recorded live runs, no backend, no keys) for publishing as a claude.ai Artifact.
# Output: frontend/dist-static/ with page.html (Artifact page, no <html>/<head>/<body> wrapper),
# assets/, data/*.json (from demo/precomputed) and frames/**.jpg (from demo/clips/frames).
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT=..
rm -rf public/data public/frames public/clips dist-static
mkdir -p public/data public/frames
for f in "$ROOT"/demo/precomputed/*.json; do
  case "$(basename "$f")" in _*) continue ;; esac   # skip private scratch files
  cp "$f" public/data/
done
# Frames referenced by the recordings -> JPEG (much smaller than PNG; same image).
( cd "$ROOT/demo/clips/frames" && find . -name '*.jpg' ) | while read -r rel; do
  mkdir -p "public/frames/$(dirname "$rel")"; cp "$ROOT/demo/clips/frames/$rel" "public/frames/$rel"
done
# Real-time clip videos for the Watch player.
mkdir -p public/clips && cp "$ROOT"/demo/clips/*.mp4 "$ROOT"/demo/endoscapes/*.mp4 public/clips/ 2>/dev/null || true
VITE_STATIC=1 npx vite build --base ./ --outDir dist-static >/dev/null
# Artifact page: the publisher adds the document skeleton, so keep only head/body contents.
python3 - <<'PY'
import re, pathlib
src = pathlib.Path("dist-static/index.html").read_text()
head = re.search(r"<head>(.*?)</head>", src, re.S).group(1)
body = re.search(r"<body[^>]*>(.*?)</body>", src, re.S).group(1)
head = re.sub(r'<meta charset[^>]*>\s*|<meta name="viewport"[^>]*>\s*', "", head)
page = head.strip() + "\n<style>body{background:#121211;color:#f0efec}:root{color-scheme:dark}</style>\n" + body.strip() + "\n"
pathlib.Path("dist-static/page.html").write_text(page)
PY
echo "built: $(find dist-static -type f | wc -l | tr -d ' ') files, $(du -sh dist-static | cut -f1)"
