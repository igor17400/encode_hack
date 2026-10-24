# Encode London 2026

- `endoscopy.html`: upper GI endoscopy walkthrough (Three.js, open in a browser).
- `second-look/`: Second Look, a Gemini copilot for laparoscopic cholecystectomy. Open `second-look/index.html`.

```
cd second-look
python -m venv .venv && .venv/bin/pip install -r requirements.txt
.venv/bin/python label.py --mock                       # scripted demo, no key
.venv/bin/python label.py videos/endo198.mp4 --every 2 # real labels, needs GEMINI_API_KEY
```

## Data

Clips in `second-look/videos/` are built from Endoscapes2023 (CAMMA, University of Strasbourg),
licensed CC BY-NC-SA 4.0: https://github.com/CAMMA-public/Endoscapes. Non-commercial use only.
