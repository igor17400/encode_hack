window.TIMELINE = {
 "video": "videos/endo198.mp4",
 "model": "gemini-3.8-flash",
 "prompt": "v2.txt",
 "every": 1.0,
 "frames": [
  {
   "t": 29.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet clearly dissected or isolated. C2: Only an initial small window is being opened by the hook, but the hepatocystic triangle is not fully cleared of fat and fibrous tissue. C3: The gallbladder remains attached to the liver bed, with the lower third not separated and the cystic plate not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.6
     },
     {
      "name": "gi_tract",
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress and key structures are not yet fully isolated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.98,
     "hits": 1
    },
    "liver": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.98,
     "hits": 1
    },
    "fat": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 1
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.9,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 34.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet dissected or isolated. C2: The hepatocystic triangle is not fully cleared, with only an initial small window opened in the connective tissue. C3: The gallbladder remains attached to the liver bed, and the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.6
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper",
     "irrigator"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in early stages; cystic duct and artery have not been isolated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.98,
     "hits": 2
    },
    "liver": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.98,
     "hits": 2
    },
    "fat": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 2
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.9,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 39.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identified entering the gallbladder. C2: The hepatocystic triangle is filled with fatty and connective tissue with active dissection and no full-thickness windows. C3: The gallbladder has not been dissected off the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "gallbladder",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.92
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.95
     },
     {
      "name": "blood",
      "confidence": 0.75
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Active dissection of the hepatocystic triangle; tubular structures and cystic plate are not yet skeletonized or exposed."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.98,
     "hits": 3
    },
    "liver": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.98,
     "hits": 3
    },
    "fat": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 3
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 39.0,
     "best": 0.85,
     "hits": 2
    },
    "blood": {
     "first": 39.0,
     "last": 39.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 44.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not clearly skeletonized or identified entering the gallbladder. C2: The hepatocystic triangle is not dissected free of fat and no full-thickness windows are visible. C3: The cystic plate has not been exposed by detaching the lower part of the gallbladder from the liver bed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.9
     },
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.9
     }
    ],
    "instruments": [
     "irrigator",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The critical view of safety has not been achieved as dissection of the hepatocystic triangle is incomplete."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.98,
     "hits": 4
    },
    "liver": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.98,
     "hits": 4
    },
    "fat": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 4
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 44.0,
     "best": 0.9,
     "hits": 3
    },
    "blood": {
     "first": 39.0,
     "last": 39.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 49.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and artery are still encased in peritoneum and connective tissue and are not cleanly skeletonized or seen entering the gallbladder. C2: The hepatocystic triangle is actively being dissected with only an initial small defect created, lacking clear full-thickness windows. C3: The lower third of the gallbladder remains attached to the liver bed, and the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle is incompletely dissected, and the cystic structures have not been isolated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.98,
     "hits": 5
    },
    "liver": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.98,
     "hits": 5
    },
    "fat": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 5
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 4
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 49.0,
     "best": 0.9,
     "hits": 4
    },
    "blood": {
     "first": 39.0,
     "last": 39.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 54.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.15,
     "c3": 0.0
    },
    "cvs_evidence": "C1: The cystic duct and artery are not yet clearly dissected or isolated as two distinct tubular structures entering the gallbladder. C2: Only an initial small fenestration has been made, with significant connective tissue still filling the hepatocystic triangle. C3: The gallbladder remains attached to the liver bed without exposure of the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in early stages and structures are not yet skeletonized."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.98,
     "hits": 6
    },
    "liver": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.98,
     "hits": 6
    },
    "fat": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 6
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 4
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 49.0,
     "best": 0.9,
     "hits": 4
    },
    "blood": {
     "first": 39.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 59.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and artery are not yet clearly skeletonized and isolated as two distinct tubular structures entering the gallbladder. C2: A small opening has been started, but the hepatocystic triangle is not fully cleared of connective tissue and fat to form the required windows. C3: The lower third of the gallbladder remains attached to the liver bed with no broad exposure of the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "cystic_duct",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection in the hepatocystic triangle with critical structures still obscured by connective tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.98,
     "hits": 7
    },
    "liver": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.98,
     "hits": 7
    },
    "fat": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 7
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 49.0,
     "best": 0.9,
     "hits": 4
    },
    "blood": {
     "first": 39.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 2
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 59.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 64.0,
   "label": {
    "cvs": {
     "c1": 0.08,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1 is not achieved because the cystic duct and artery are not yet skeletonized or definitively identified as two tubular structures entering the gallbladder. C2 is not achieved as the hepatocystic triangle is actively being dissected and remains uncleared of connective tissue. C3 is not achieved because the lower part of the gallbladder has not been dissected off the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "cystic_duct",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is incomplete; cystic structures are obscured by overlying peritoneum and connective tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.98,
     "hits": 8
    },
    "liver": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.98,
     "hits": 8
    },
    "fat": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 8
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 49.0,
     "best": 0.9,
     "hits": 4
    },
    "blood": {
     "first": 39.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 2
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 69.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Neither the cystic duct nor the cystic artery has been cleanly skeletonized or visualized entering the gallbladder. C2: Only a small focal fenestration has been started by the hook, with the hepatocystic triangle remaining largely uncleared of peritoneal and connective tissue. C3: The gallbladder remains attached to the liver bed with no broad exposure of the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Early dissection stage; cystic duct and artery are not yet skeletonized or definitively identifiable."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.98,
     "hits": 9
    },
    "liver": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.98,
     "hits": 9
    },
    "fat": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 9
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 69.0,
     "best": 0.9,
     "hits": 5
    },
    "blood": {
     "first": 39.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 2
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 74.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.2,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one window has been partially created and the two tubular structures are not distinctly skeletonized and entering the gallbladder. C2: While an initial fenestration is visible, the hepatocystic triangle remains largely uncleared of connective tissue. C3: The lower third of the gallbladder remains attached to the liver bed without cystic plate exposure.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "cystic_duct",
      "confidence": 0.6
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is incomplete; the cystic duct and cystic artery are not sufficiently exposed or separated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.98,
     "hits": 10
    },
    "liver": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.98,
     "hits": 10
    },
    "fat": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 10
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.75,
     "hits": 1
    },
    "gi_tract": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 69.0,
     "best": 0.9,
     "hits": 5
    },
    "blood": {
     "first": 39.0,
     "last": 74.0,
     "best": 0.75,
     "hits": 3
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 74.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 79.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because neither the cystic duct nor artery are skeletonized or clearly identified entering the gallbladder. C2 is not achieved because the hepatocystic triangle is still covered by peritoneum and connective tissue without clear full-thickness windows. C3 is not achieved because the lower third of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in early stages; cystic duct and artery are not yet isolated from surrounding connective tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.98,
     "hits": 11
    },
    "liver": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.98,
     "hits": 11
    },
    "fat": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 11
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.75,
     "hits": 1
    },
    "gi_tract": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 7
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 69.0,
     "best": 0.9,
     "hits": 5
    },
    "blood": {
     "first": 39.0,
     "last": 74.0,
     "best": 0.75,
     "hits": 3
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 74.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 84.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because neither the cystic duct nor the cystic artery have been isolated as tubular structures. C2 is not achieved because the hepatocystic triangle is still covered by connective tissue with only a small preliminary defect created. C3 is not achieved because the gallbladder has not been separated from the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in early stages with structures still obscured by overlying peritoneal and connective tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.98,
     "hits": 12
    },
    "liver": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.98,
     "hits": 12
    },
    "fat": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 12
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.75,
     "hits": 1
    },
    "gi_tract": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 8
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 84.0,
     "best": 0.9,
     "hits": 6
    },
    "blood": {
     "first": 39.0,
     "last": 74.0,
     "best": 0.75,
     "hits": 3
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 74.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 89.0,
   "label": {
    "cvs": {
     "c1": 0.2,
     "c2": 0.35,
     "c3": 0.15
    },
    "cvs_evidence": "C1 is not achieved because two distinct tubular structures entering the gallbladder have not yet been clearly isolated. C2 is partially underway with a window opened behind the putative cystic duct, but the triangle is not fully cleared of connective tissue. C3 is not achieved as the gallbladder is not yet separated from the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete and structures are not yet fully skeletonized."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 13
    },
    "liver": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 13
    },
    "fat": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 13
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.75,
     "hits": 2
    },
    "gi_tract": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 8
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 39.0,
     "last": 74.0,
     "best": 0.75,
     "hits": 3
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 89.0,
     "best": 0.65,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 94.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because neither the cystic duct nor the cystic artery are yet skeletonized or clearly identified entering the gallbladder. C2 is not achieved as the hepatocystic triangle is not cleared and no full-thickness windows are visible. C3 is not achieved as the gallbladder has not been dissected off the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.8
     },
     {
      "name": "blood",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in early stages; the cystic duct and artery are not yet skeletonized or definitively identified."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.98,
     "hits": 14
    },
    "liver": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.98,
     "hits": 14
    },
    "fat": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 14
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.75,
     "hits": 2
    },
    "gi_tract": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 8
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 94.0,
     "best": 0.9,
     "hits": 8
    },
    "blood": {
     "first": 39.0,
     "last": 94.0,
     "best": 0.75,
     "hits": 4
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 89.0,
     "best": 0.65,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 99.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet clearly skeletonized or identified. C2: Only an initial small fenestration has been created with substantial connective tissue remaining in the hepatocystic triangle. C3: The lower third of the gallbladder is still attached to the liver bed without exposure of the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.6
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages; cystic duct and artery are not yet fully isolated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.98,
     "hits": 15
    },
    "liver": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.98,
     "hits": 15
    },
    "fat": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 14
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.75,
     "hits": 2
    },
    "gi_tract": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 94.0,
     "best": 0.9,
     "hits": 8
    },
    "blood": {
     "first": 39.0,
     "last": 94.0,
     "best": 0.75,
     "hits": 4
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 89.0,
     "best": 0.65,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 104.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: Neither the cystic duct nor the cystic artery are clearly dissected and isolated as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is not cleared and no full-thickness windows are visible. C3: The gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "gallbladder",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper",
     "irrigator"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in early stages; critical structures in the hepatocystic triangle are not yet identified or separated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.98,
     "hits": 16
    },
    "liver": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.98,
     "hits": 16
    },
    "fat": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 15
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.75,
     "hits": 2
    },
    "gi_tract": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 10
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 9
    },
    "blood": {
     "first": 39.0,
     "last": 94.0,
     "best": 0.75,
     "hits": 4
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 89.0,
     "best": 0.65,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 109.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.25,
     "c3": 0.1
    },
    "cvs_evidence": "C1 is not achieved as two distinct tubular structures entering the gallbladder are not yet cleanly skeletonized. C2 is not achieved because although a dissection window is visible, the hepatocystic triangle remains largely filled with connective tissue and peritoneum. C3 is not achieved because the lower third of the gallbladder has not been separated from the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.8
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle obscures the definitive course of the cystic duct and artery."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.98,
     "hits": 17
    },
    "liver": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.98,
     "hits": 17
    },
    "fat": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 16
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.8,
     "hits": 3
    },
    "gi_tract": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 10
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 9
    },
    "blood": {
     "first": 39.0,
     "last": 109.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 89.0,
     "best": 0.65,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 114.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.1,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because two distinct tubular structures entering the gallbladder have not yet been isolated. C2 is not achieved because only an initial window has been created and the hepatocystic triangle is not fully cleared of tissue. C3 is not achieved as the lower third of the gallbladder remains attached to the liver bed without exposure of the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "cystic_duct",
      "confidence": 0.7
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.8
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.6
     },
     {
      "name": "gi_tract",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete and the cystic artery is not yet clearly identified."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.98,
     "hits": 18
    },
    "liver": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.98,
     "hits": 18
    },
    "fat": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 16
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.8,
     "hits": 4
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 9
    },
    "blood": {
     "first": 39.0,
     "last": 114.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 114.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 119.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and artery are not yet skeletonized into two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle remains largely covered by peritoneal and connective tissue with only an initial fenestration made. C3: The gallbladder is not yet separated from the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.65
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is incomplete; cystic structures and the cystic plate are still covered by peritoneum and connective tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.98,
     "hits": 19
    },
    "liver": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.98,
     "hits": 19
    },
    "fat": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 17
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.8,
     "hits": 4
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 119.0,
     "best": 0.9,
     "hits": 10
    },
    "blood": {
     "first": 39.0,
     "last": 114.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 114.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 124.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.2,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet cleanly isolated. C2: One full-thickness window has been started, but the hepatocystic triangle is not adequately cleared of tissue. C3: The gallbladder has not been separated from the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "cystic_duct",
      "confidence": 0.6
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is incomplete; cystic duct and artery are not yet clearly delineated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.98,
     "hits": 20
    },
    "liver": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.98,
     "hits": 20
    },
    "fat": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 18
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 20
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.8,
     "hits": 5
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 119.0,
     "best": 0.9,
     "hits": 10
    },
    "blood": {
     "first": 39.0,
     "last": 114.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 124.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 129.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.25,
     "c3": 0.1
    },
    "cvs_evidence": "C1 is not achieved because neither the cystic duct nor the cystic artery are clearly skeletonized and seen entering the gallbladder. C2 is not achieved because although a dissection opening has been initiated, the hepatocystic triangle remains largely covered by fibrous and fatty tissue. C3 is not achieved as the lower third of the gallbladder has not been mobilized from the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.6
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is incomplete; key tubular structures and the cystic plate are still obscured by overlying tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.98,
     "hits": 21
    },
    "liver": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.98,
     "hits": 21
    },
    "fat": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 21
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.8,
     "hits": 5
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 129.0,
     "best": 0.9,
     "hits": 11
    },
    "blood": {
     "first": 39.0,
     "last": 114.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 124.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 134.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.0
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet clearly dissected or isolated. C2: The hepatocystic triangle is partially dissected with some openings, but it is not cleared of overlying connective tissue and fat. C3: The gallbladder remains attached to the liver bed without exposure of the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "smoke",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in progress and critical structures remain obscured by peritoneum and connective tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.98,
     "hits": 21
    },
    "liver": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.98,
     "hits": 21
    },
    "fat": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 21
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.8,
     "hits": 5
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 129.0,
     "best": 0.9,
     "hits": 11
    },
    "blood": {
     "first": 39.0,
     "last": 134.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 124.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 139.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.2,
     "c3": 0.05
    },
    "cvs_evidence": "C1 is not achieved because only one tubular structure (presumed cystic duct) is partially isolated, with overlying connective tissue obscuring the cystic artery. C2 is not achieved because although an initial window has been opened, the hepatocystic triangle is not fully cleared of fibrous tissue and vessels are not skeletonized. C3 is not achieved as the lower portion of the gallbladder remains broadly attached to the liver bed without exposure of the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "cystic_duct",
      "confidence": 0.75
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.7
     },
     {
      "name": "blood",
      "confidence": 0.6
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is incomplete; the cystic artery is not yet isolated and the gallbladder remains attached to the liver bed."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.98,
     "hits": 22
    },
    "liver": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.98,
     "hits": 22
    },
    "fat": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 22
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 139.0,
     "best": 0.9,
     "hits": 12
    },
    "blood": {
     "first": 39.0,
     "last": 139.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 139.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 144.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder have not yet been clearly skeletonized. C2: Only an early, small fenestration has been made, leaving significant fibrous tissue within the hepatocystic triangle. C3: The gallbladder has not been separated from the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.99
     },
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "connective_tissue",
      "confidence": 0.92
     },
     {
      "name": "fat",
      "confidence": 0.88
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.65
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Early dissection; cystic duct and artery are obscured by overlying connective tissue and not clearly identified."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.99,
     "hits": 23
    },
    "liver": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.98,
     "hits": 23
    },
    "fat": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 20
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 23
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 144.0,
     "best": 0.9,
     "hits": 13
    },
    "blood": {
     "first": 39.0,
     "last": 139.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 139.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 149.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1 is not achieved because two distinct tubular structures entering the gallbladder have not yet been isolated. C2 is not achieved as the hepatocystic triangle is still obscured by fatty and connective tissue with no full-thickness windows. C3 is not achieved because the lower gallbladder has not been separated from the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.99
     },
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.75
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper",
     "irrigator"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle dissection is in an early stage; the cystic duct, artery, and cystic plate are not yet sufficiently cleared or delineated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.99,
     "hits": 24
    },
    "liver": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.99,
     "hits": 24
    },
    "fat": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 21
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 149.0,
     "best": 0.9,
     "hits": 14
    },
    "blood": {
     "first": 39.0,
     "last": 149.0,
     "best": 0.75,
     "hits": 6
    },
    "cystic_duct": {
     "first": 59.0,
     "last": 149.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  }
 ],
 "truth": [
  {
   "t": 29,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 34,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 39,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 44,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 49,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 54,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 59,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 64,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 69,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 74,
   "C1": 0.3333333333333333,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 79,
   "C1": 0.3333333333333333,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 84,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 89,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 94,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 99,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 104,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 109,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 114,
   "C1": 0.3333333333333333,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 119,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
  },
  {
   "t": 124,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
  },
  {
   "t": 129,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
  },
  {
   "t": 134,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.3333333333333333
  },
  {
   "t": 139,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 144,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 149,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.3333333333333333
  }
 ],
 "agreement": {
  "keyframes": 25,
  "C1": 0.76,
  "C1_caught": [
   0,
   6
  ],
  "C2": 0.76,
  "C2_caught": [
   0,
   6
  ],
  "C3": 0.92,
  "C3_caught": [
   0,
   2
  ]
 },
 "rules": {
  "confirm_conf": 0.7,
  "confirm_frames": 2
 }
};
