window.TIMELINE = {
 "video": "videos/endo198.mp4",
 "model": "gemini-4-argon",
 "prompt": "v2.txt",
 "every": 1.0,
 "frames": [
  {
   "t": 29.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.08,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct along the inferior edge) is beginning to be delineated, while a second distinct tubular structure is not yet isolated. C2: A single small full-thickness window is opening above the inferior structure, but the upper part of the hepatocystic triangle remains covered in fat and connective tissue. C3: Initial scoring is visible along the liver bed, day-lighting a small window, but the lower third of the gallbladder is not yet separated to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.98
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "blood",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; only one small window is created and two distinct tubular structures are not yet clearly isolated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 1
    },
    "liver": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.98,
     "hits": 1
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.75,
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
     "best": 0.9,
     "hits": 1
    },
    "gi_tract": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.85,
     "hits": 1
    },
    "blood": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.6,
     "hits": 0
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
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder yet. C2: The hepatocystic triangle is still covered in fat and peritoneum with only a small initial window starting to open, not two full-thickness windows. C3: The lower gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "confidence": 0.4
     },
     {
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and neither the cystic duct nor the cystic artery is clearly skeletonized."
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
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.75,
     "hits": 1
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
    "gi_tract": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.85,
     "hits": 1
    },
    "blood": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 34.0,
     "best": 0.9,
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one whitish tubular structure (likely the cystic duct) is partially visible on the right; a second tubular structure is not identified, and a large grasper shaft occludes much of the field. C2: The hook is actively dissecting into a small recess in the hepatocystic triangle, and no full-thickness windows are established yet. C3: The lower gallbladder is not separated from the liver bed to expose the cystic plate.",
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
      "name": "cystic_duct",
      "confidence": 0.65
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
      "name": "blood",
      "confidence": 0.75
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and prominent occlusion of the view by the grasper shaft."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.98,
     "hits": 2
    },
    "liver": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.98,
     "hits": 2
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.75,
     "hits": 1
    },
    "fat": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 2
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 2
    },
    "gi_tract": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.85,
     "hits": 1
    },
    "blood": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.75,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 34.0,
     "best": 0.9,
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
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: The camera is zoomed out on the liver and lower abdomen, and two distinct tubular structures entering the gallbladder are not clearly visible. C2: A partial dissection gap is visible at the top right, but two full-thickness windows through the hepatocystic triangle are not demonstrated in this view. C3: The lower gallbladder is mostly out of view at the top right, so separation along the entire inferior margin from the cystic plate cannot be verified.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "gallbladder",
      "confidence": 0.7
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is mostly at the top edge of the frame and occluded by the liver and instruments."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.98,
     "hits": 2
    },
    "liver": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.99,
     "hits": 2
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.75,
     "hits": 1
    },
    "fat": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 2
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 2
    },
    "gi_tract": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.9,
     "hits": 1
    },
    "blood": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.75,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 44.0,
     "best": 0.9,
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
    "cvs_evidence": "C1: Only a small initial incision is made in the peritoneum; the cystic duct and artery are not yet isolated as distinct tubular structures. C2: A single small window is starting to open, but the hepatocystic triangle remains mostly covered by peritoneum and fat. C3: The gallbladder infundibulum is still completely attached to the liver bed with no exposed cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
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
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are not yet dissected out."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.98,
     "hits": 3
    },
    "liver": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 3
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.75,
     "hits": 1
    },
    "fat": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 3
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 3
    },
    "gi_tract": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.9,
     "hits": 1
    },
    "blood": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.75,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 2
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
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the cystic duct appears partially mobilized, while a second distinct tubular structure (cystic artery) is not clearly isolated entering the gallbladder. C2: A single small window is opened in the lower hepatocystic triangle, but the upper triangle remains covered in connective tissue without a second full-thickness window. C3: Only a small initial incision along the peritoneal reflection is visible, and the lower gallbladder is not yet separated from the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
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
      "name": "hepatocystic_window",
      "confidence": 0.85
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
      "name": "blood",
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic artery and cystic plate are not yet isolated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.98,
     "hits": 4
    },
    "liver": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.99,
     "hits": 4
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 2
    },
    "fat": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 4
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 4
    },
    "gi_tract": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.9,
     "hits": 1
    },
    "blood": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 3
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 59.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a single anterior peritoneal/tubular band is being dissected; two distinct tubular structures entering the gallbladder are not yet isolated. C2: A small initial opening has been made in the peritoneum of the hepatocystic triangle, but full-thickness windows clearing the triangle of fat and connective tissue are not achieved. C3: The lower part of the gallbladder remains completely attached to the liver bed with no exposed cystic plate along the inferior margin.",
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
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.5
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; neither the cystic duct nor the cystic artery is clearly skeletonized or confirmed."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.98,
     "hits": 5
    },
    "liver": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 5
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.85,
     "hits": 2
    },
    "fat": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 5
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 5
    },
    "gi_tract": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 2
    },
    "blood": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 4
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 64.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet skeletonized, as the electrocautery hook is only beginning to incise the peritoneum over the hepatocystic triangle. C2: The hepatocystic triangle is still covered in fat and connective tissue with only a small initial window opened, lacking two full-thickness windows. C3: The lower third of the gallbladder remains attached to the liver bed and the cystic plate is not fully exposed.",
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
      "name": "abdominal_wall",
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; cystic duct and artery are not yet isolated from surrounding connective tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.98,
     "hits": 6
    },
    "liver": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 6
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.85,
     "hits": 2
    },
    "fat": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 6
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 6
    },
    "gi_tract": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.9,
     "hits": 3
    },
    "blood": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 5
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
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Early dissection in the hepatocystic triangle; neither the cystic duct nor the cystic artery is skeletonized as a distinct tubular structure yet. C2: A small initial opening is being made with the electrocautery hook, but no full-thickness windows clearing the hepatocystic triangle are present. C3: The peritoneum along the lower gallbladder margin is only initially scored, and the gallbladder is not yet mobilized off the cystic plate.",
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
      "name": "abdominal_wall",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "blood",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; ductal and arterial structures are still encased in fat and peritoneum."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.98,
     "hits": 7
    },
    "liver": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 7
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.85,
     "hits": 2
    },
    "fat": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 7
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 7
    },
    "gi_tract": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.9,
     "hits": 3
    },
    "blood": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 6
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 74.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet dissected out from the surrounding peritoneum and fat. C2: Only a small initial peritoneal scoring/opening is present, without full-thickness windows clearing the hepatocystic triangle. C3: The lower portion of the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; tubular structures and the cystic plate are still covered by peritoneum and adipose tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.98,
     "hits": 8
    },
    "liver": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.99,
     "hits": 8
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.85,
     "hits": 2
    },
    "fat": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 8
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 8
    },
    "gi_tract": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.9,
     "hits": 4
    },
    "blood": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 7
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 79.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are clearly dissected and visible entering the gallbladder yet. C2: The hepatocystic triangle is still covered by peritoneum and fatty connective tissue, with the hook just beginning the dissection and no full-thickness windows present. C3: Only a small vertical strip of the peritoneum along the liver bed has been scored, and the lower gallbladder is not yet separated to expose the cystic plate.",
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
      "name": "abdominal_wall",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still concealed by peritoneum and fibroadipose tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.98,
     "hits": 9
    },
    "liver": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.99,
     "hits": 9
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.85,
     "hits": 2
    },
    "fat": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 9
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 9
    },
    "gi_tract": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.9,
     "hits": 5
    },
    "blood": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 8
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 84.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are still encased in fat and peritoneum and are not clearly visible as two separate tubular structures entering the gallbladder. C2: A single small window is being opened with the hook, not two full-thickness windows clearing the hepatocystic triangle. C3: Only a small initial scoring of the peritoneum near the liver bed is present, and the lower gallbladder is not separated to expose the full cystic plate.",
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
      "confidence": 0.75
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; tubular structures are still covered by fat and peritoneum."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.98,
     "hits": 10
    },
    "liver": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.99,
     "hits": 10
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.85,
     "hits": 3
    },
    "fat": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 10
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 10
    },
    "gi_tract": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.9,
     "hits": 6
    },
    "blood": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 9
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 89.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one partial tubular band is visible at the lower border of the opened peritoneum, with no distinct cystic artery and cystic duct clearly delineated entering the gallbladder. C2: A single small full-thickness window is being opened with the hook, but the rest of the hepatocystic triangle remains covered by connective tissue and peritoneum. C3: The lower third of the gallbladder remains attached to the liver bed with no exposed cystic plate below the inferior margin.",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
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
      "name": "abdominal_wall",
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct and cystic artery are not yet skeletonized or clearly separated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 11
    },
    "liver": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.99,
     "hits": 11
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.85,
     "hits": 4
    },
    "fat": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 11
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 11
    },
    "gi_tract": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.8,
     "hits": 4
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 10
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 94.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet dissected out as distinct tubular structures; the peritoneum is only starting to be incised. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: Only a superficial vertical incision has been made near the liver bed, and the lower gallbladder is not yet separated to expose the cystic plate.",
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
      "name": "abdominal_wall",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; only the peritoneum is incised and no biliary or vascular structures are isolated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.98,
     "hits": 12
    },
    "liver": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.99,
     "hits": 12
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.85,
     "hits": 4
    },
    "fat": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 12
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 12
    },
    "gi_tract": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.8,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 11
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
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet fully dissected out from the surrounding connective tissue. C2: One full-thickness window is opening up where the hook is working, but the hepatocystic triangle is not completely cleared to show two distinct windows. C3: While some dissection along the liver bed is visible superiorly, the lower third of the gallbladder is not yet elevated off the cystic plate.",
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
      "confidence": 0.85
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
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and tubular structures are not yet clearly isolated."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.98,
     "hits": 13
    },
    "liver": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.99,
     "hits": 13
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 5
    },
    "fat": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 13
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 13
    },
    "gi_tract": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.8,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 12
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 104.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder cannot be seen as the hepatocystic triangle is mostly out of view at the top and occluded by the hook. C2: Full-thickness windows are not visible due to the camera framing and instrument occlusion. C3: The lower gallbladder remains attached to the liver bed with no exposed cystic plate along the inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
     },
     {
      "name": "blood",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is at the upper edge of the frame and occluded by the hook instrument, preventing clear identification of the cystic duct and artery."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.98,
     "hits": 13
    },
    "liver": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.99,
     "hits": 13
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 5
    },
    "fat": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 13
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 13
    },
    "gi_tract": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.8,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 12
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 109.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: One broad vertical band is visible on the left, and a potential second structure is still embedded in tissue on the right, so two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: One full-thickness window is visible at the bottom, while the upper space near the liver bed is only partially dissected without a clear through-and-through window. C3: The gallbladder remains attached to the liver bed superiorly, and the cystic plate is not exposed along the whole inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.9
     },
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "cystic_duct",
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "blood",
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and cystic plate; only one clear window is open and structures are still covered by peritoneum and connective tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.98,
     "hits": 14
    },
    "liver": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.99,
     "hits": 14
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.85,
     "hits": 6
    },
    "fat": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 14
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 14
    },
    "gi_tract": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.8,
     "hits": 7
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 13
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 114.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.12,
     "c3": 0.08
    },
    "cvs_evidence": "C1: Only one vertical tissue band/tubular structure is partially outlined on the left, while the cystic artery is not yet dissected out as a distinct tubular structure. C2: One full-thickness window is visible at the bottom of the hepatocystic triangle, but the upper triangle is still being incised with the hook and lacks a second clear window. C3: The hook is actively opening the peritoneal attachment along the liver bed, so the lower gallbladder is not yet separated to expose the full cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.96
     },
     {
      "name": "liver",
      "confidence": 0.94
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.92
     },
     {
      "name": "fat",
      "confidence": 0.91
     },
     {
      "name": "blood",
      "confidence": 0.85
     },
     {
      "name": "cystic_duct",
      "confidence": 0.55
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.88
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with only one window opened and tubular structures still covered by peritoneum and fat."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.98,
     "hits": 15
    },
    "liver": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.99,
     "hits": 15
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.9,
     "hits": 7
    },
    "fat": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 15
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 15
    },
    "gi_tract": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.85,
     "hits": 8
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 14
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 119.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are dissected and seen running toward the gallbladder. C2: Two windows have been dissected between the duct, artery, and gallbladder wall/plate, with the hook dissecting the upper window. C3: The gallbladder remains largely attached to the liver bed with no clearly exposed cystic plate beneath the inferior margin.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
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
    "reason_if_not": "The lower third of the gallbladder is not yet separated from the cystic plate (C3 not achieved)."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.98,
     "hits": 16
    },
    "liver": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.99,
     "hits": 16
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.9,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.9,
     "hits": 8
    },
    "fat": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 16
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 16
    },
    "gi_tract": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.85,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_artery": {
     "first": 119.0,
     "last": 119.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 124.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: One small window is forming at the bottom of the hepatocystic triangle, but the upper portion remains covered in connective tissue and is currently being dissected by the hook. C3: The lower part of the gallbladder is not yet mobilized from the liver bed to expose the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "blood",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and the cystic structures are still obscured by peritoneum and fibrofatty tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.98,
     "hits": 17
    },
    "liver": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.99,
     "hits": 17
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.9,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.9,
     "hits": 9
    },
    "fat": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 17
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 17
    },
    "gi_tract": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_artery": {
     "first": 119.0,
     "last": 119.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 129.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are dissected and seen running toward the gallbladder, separated by two distinct windows. C2: Two full-thickness windows are clearly dissected through the hepatocystic triangle with the background liver visible through both, and the hook is positioned in the upper window. C3: The lower gallbladder remains largely attached to the liver bed above the upper window, so the cystic plate is not fully exposed along the entire inferior margin.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.95
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
    "can_confirm_anatomy": true,
    "reason_if_not": ""
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.98,
     "hits": 18
    },
    "liver": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.99,
     "hits": 18
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.9,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 10
    },
    "fat": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 18
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 18
    },
    "gi_tract": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_artery": {
     "first": 119.0,
     "last": 129.0,
     "best": 0.9,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 134.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.75,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two tubular structures (likely cystic duct and artery) are outlined by the dissected windows, though the upper structure is somewhat thick and not completely skeletonized. C2: Two full-thickness windows have been dissected through the hepatocystic triangle with dark liver tissue clearly visible in the background through both gaps. C3: The gallbladder remains largely attached to the liver bed superiorly without a fully exposed cystic plate creating a hanging gallbladder appearance.",
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
      "confidence": 0.85
     },
     {
      "name": "cystic_artery",
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
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
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.95
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate is not fully exposed (C3 not achieved) and the upper tubular structure is still surrounded by connective tissue."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.98,
     "hits": 19
    },
    "liver": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.99,
     "hits": 19
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.9,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 11
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
     "hits": 19
    },
    "gi_tract": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.85,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_artery": {
     "first": 119.0,
     "last": 134.0,
     "best": 0.9,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 139.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.3
    },
    "cvs_evidence": "C1: Two band-like structures are emerging at the base of the hepatocystic triangle, with one clear window below, though the upper structure is still broad and fused with tissue. C2: A single full-thickness window is visible inferiorly between the two emerging structures, while the upper space toward the cystic plate remains only partially incised and not perforated. C3: A superficial incision runs along the hepatocystic junction, leaving the lower part of the gallbladder largely attached to the liver bed without an exposed cystic plate.",
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
      "confidence": 0.8
     },
     {
      "name": "cystic_artery",
      "confidence": 0.65
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "blood",
      "confidence": 0.7
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.95
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is only partially dissected with one inferior window opened, and the lower gallbladder has not been elevated off the cystic plate."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.98,
     "hits": 20
    },
    "liver": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.99,
     "hits": 20
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.9,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 12
    },
    "fat": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 20
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 20
    },
    "gi_tract": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.85,
     "hits": 10
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_artery": {
     "first": 119.0,
     "last": 139.0,
     "best": 0.9,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 144.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two band-like structures (likely cystic duct and artery) can be seen flanking a dissected window as they approach the retracted infundibulum. C2: One clear full-thickness window is visible between the lower structure and the upper band, while the upper dissection toward the liver bed is only superficial cauterization without a second window. C3: The inferior margin of the gallbladder remains completely attached to the liver bed with no detachment or exposure of the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "cystic_duct",
      "confidence": 0.8
     },
     {
      "name": "cystic_artery",
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.7
     },
     {
      "name": "gi_tract",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete, preventing full confirmation of the critical view of safety."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.98,
     "hits": 21
    },
    "liver": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.99,
     "hits": 21
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.9,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 13
    },
    "fat": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 21
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 21
    },
    "gi_tract": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.85,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_artery": {
     "first": 119.0,
     "last": 144.0,
     "best": 0.9,
     "hits": 4
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
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (the cystic duct) is clearly isolated, while the cystic artery is not yet dissected out as a distinct tubular structure. C2: The hepatocystic triangle is still filled with undissected fat and connective tissue, with an instrument actively dissecting rather than showing full-thickness windows. C3: Dissection along the liver bed has begun, exposing a small patch of the cystic plate, but the lower part of the gallbladder is not fully separated along its entire inferior margin.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.75
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
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not yet isolated and full-thickness windows are not established."
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.98,
     "hits": 22
    },
    "liver": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.99,
     "hits": 22
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.9,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 13
    },
    "fat": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 22
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 22
    },
    "gi_tract": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.9,
     "hits": 8
    },
    "blood": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.85,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_artery": {
     "first": 119.0,
     "last": 144.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_plate": {
     "first": 149.0,
     "last": 149.0,
     "best": 0.75,
     "hits": 1
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
  "C1": 0.92,
  "C1_caught": [
   4,
   6
  ],
  "C2": 0.88,
  "C2_caught": [
   3,
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
