# Encode London 2026: Second Look

Two complementary halves of one idea, combined on this branch.

| Folder | What it does | Question it answers |
| --- | --- | --- |
| [`second-look/`](second-look/README.md) | **The eyes.** Gemini Argon judges the critical view of safety (CVS) straight from Endoscapes video, Flash draws structure boxes, an expert-labelled frame library in MongoDB Atlas calibrates it. Scored against surgeons. | *Is it safe to clip now?* |
| [`second-look/worldmodel/`](second-look/worldmodel/README.md) | **Pixel world model preview.** Wan 2.2 image-to-video continues an Endoscapes frame (AI-generated). | *What would the camera show next?* |
| [`patient-world-model/`](patient-world-model/README.md) | **Patient world model.** A rule engine plus Gemini Argon grounded in real CholecT50 transitions (Atlas vector search) predicts what each action does to the patient; a 3D patient model builds itself as the video plays; a robot simulator safety-checks policies. | *What happens to the patient if we act?* |

**How they connect.**
- **Perception feeds the world model.** The patient world model replays the eyes' recorded Endoscapes runs (ops 166 and 198, with the surgeons' truth) as its perception. The held CVS criteria become the patient state.
- **The world model plays the decision forward.** Endoscapes footage ends at the first clip, exactly the decision the world model imagines.
  - At 1:00 on op 166 (CVS not yet seen): "clip now" is high risk, and an injury for a short-duct patient.
  - At 1:33 (CVS held; surgeons said safe from 1:04): the same action is low risk.
- **Shared Atlas library.** The world model shows "how surgeons judged similar views" by querying the eyes' expert library read-only (vector search only, never writes).

Pixel world models show the camera; a patient world model shows the patient.

- `endoscopy.html`: upper GI endoscopy teaching walkthrough (Three.js, open in a browser).

Data: Endoscapes2023 and CholecT50 (CAMMA, University of Strasbourg), CC BY-NC-SA 4.0, non-commercial use only.
Research simulation, not a medical device, not clinical advice.
