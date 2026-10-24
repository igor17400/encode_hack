window.TIMELINE = {
 "video": "videos/endo198.mp4",
 "model": "gemini-4-argon",
 "prompt": "v2.txt",
 "detect_model": "gemini-3.8-flash",
 "every": 1.0,
 "frames": [
  {
   "t": 0.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the initial peritoneal incision has been made, and no distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder. C2: The hepatocystic triangle is still filled with connective tissue and fat, with no full-thickness windows cleared. C3: The gallbladder remains largely attached to the liver bed with only a superficial peritoneal score along the margin, so the cystic plate is not sufficiently exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages; the cystic duct, cystic artery, and cystic plate have not yet been isolated from the surrounding fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       161,
       958,
       601
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       506,
       736,
       985
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       330,
       414,
       702,
       507
      ],
      "confidence": 0.72
     },
     {
      "label": "grasper",
      "box_2d": [
       766,
       120,
       935,
       229
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       535,
       717,
       942,
       947
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.95,
     "hits": 1
    },
    "liver": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.98,
     "hits": 1
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.95,
     "hits": 1
    },
    "fat": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.9,
     "hits": 1
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 1.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: Only superficial peritoneal scoring and initial dissection are visible, with no full-thickness windows created through the hepatocystic triangle. C3: The lower gallbladder remains largely attached to the liver bed with only a small initial separation, not exposing the full cystic plate.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages and the biliary/vascular structures are still covered by peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       185,
       985,
       978
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       804,
       132,
       977,
       239
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.99,
     "hits": 2
    },
    "liver": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.99,
     "hits": 2
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.95,
     "hits": 2
    },
    "fat": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.9,
     "hits": 2
    },
    "blood": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.75,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 2.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Only the peritoneum over the hepatocystic triangle has been incised; neither the cystic duct nor the cystic artery is skeletonized as a distinct tubular structure. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows opened. C3: The gallbladder remains completely attached to the liver bed with no mobilization of the lower third to expose the cystic plate.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage with only a superficial peritoneal incision.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       396,
       856,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       168,
       998,
       625
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       292,
       104,
       411
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       821,
       137,
       980,
       242
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       387,
       439,
       786,
       534
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.99,
     "hits": 3
    },
    "liver": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.99,
     "hits": 3
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.95,
     "hits": 3
    },
    "fat": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.9,
     "hits": 3
    },
    "blood": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.75,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 3.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are delineated yet, as the peritoneum over the hepatocystic triangle has only just been scored. C2: There are no full-thickness windows through the hepatocystic triangle, only a superficial peritoneal incision with underlying fat and connective tissue intact. C3: The lower gallbladder remains largely attached to the liver bed with only minimal initial scoring along the peritoneal reflection.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in the very early stages; only the superficial peritoneum is incised and the cystic duct and artery remain completely buried in fibrofatty tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       68,
       665,
       382
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       210,
       960,
       983
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       370,
       107,
       513
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       735,
       126,
       949,
       276
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.99,
     "hits": 4
    },
    "liver": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.99,
     "hits": 4
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.95,
     "hits": 4
    },
    "fat": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.9,
     "hits": 4
    },
    "blood": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.85,
     "hits": 4
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 4.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1 is not achieved because the hepatocystic triangle is still covered by peritoneum and fat, with no distinct tubular structures isolated. C2 is not achieved as only superficial scoring of the peritoneum has begun and no full-thickness windows are dissected. C3 is not achieved because the lower gallbladder remains completely attached to the liver bed.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
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
    "reason_if_not": "Dissection is in the very early stages with only superficial peritoneal incision; the cystic duct and artery are not yet exposed.",
    "boxes": [
     {
      "box_2d": [
       0,
       323,
       938,
       705
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       609,
       640,
       985
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       757,
       211,
       998,
       382
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       373,
       108,
       462
      ],
      "label": "grasper",
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.99,
     "hits": 5
    },
    "liver": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.99,
     "hits": 5
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.95,
     "hits": 5
    },
    "fat": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.9,
     "hits": 5
    },
    "blood": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.85,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 5.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder yet. C2: The hepatocystic triangle only has a superficial peritoneal incision and is still filled with undissected fat and connective tissue, with no full-thickness windows. C3: Only the initial peritoneum near the liver bed is scored; the lower part of the gallbladder remains attached to the liver bed without an exposed cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
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
    "reason_if_not": "Dissection is in a very early stage with only the peritoneum opened; the cystic duct and artery are still buried within fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       480,
       652,
       977
      ],
      "label": "liver",
      "confidence": 0.99
     },
     {
      "box_2d": [
       0,
       136,
       835,
       525
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       617,
       81,
       796,
       202
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       183,
       385,
       552,
       471
      ],
      "label": "cystic_artery",
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.99,
     "hits": 6
    },
    "liver": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.99,
     "hits": 6
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.95,
     "hits": 6
    },
    "fat": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.95,
     "hits": 6
    },
    "blood": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.85,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 6.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder. C2: The hepatocystic triangle is still covered with fat and connective tissue, with only superficial peritoneal scoring and no full-thickness windows. C3: Only the very beginning of the peritoneal dissection along the gallbladder margin is visible, without separating the lower gallbladder from the cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages, and the cystic duct and artery are still completely obscured by fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       114,
       592,
       477
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       439,
       726,
       984
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       348,
       68,
       485,
       177
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       360,
       444,
       507
      ],
      "label": "cystic_plate",
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.99,
     "hits": 7
    },
    "liver": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.99,
     "hits": 7
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.95,
     "hits": 7
    },
    "fat": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.95,
     "hits": 7
    },
    "blood": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.85,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 7.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No tubular structures (cystic duct or artery) are dissected out or visible entering the gallbladder yet. C2: The hepatocystic triangle only has a small superficial peritoneal incision with charred tissue and no full-thickness windows. C3: Only the very beginning of the peritoneal incision along the gallbladder-liver junction is made, so the lower gallbladder is not separated from the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "gallbladder",
      "confidence": 0.95
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in the very early stage with only the peritoneum scored; the cystic duct and artery remain completely covered by fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       427,
       786,
       990
      ],
      "confidence": 0.99
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       622,
       447
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       456,
       73,
       587,
       179
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       146,
       359,
       521,
       465
      ],
      "confidence": 0.58
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.99,
     "hits": 8
    },
    "liver": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.99,
     "hits": 8
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.95,
     "hits": 8
    },
    "fat": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.95,
     "hits": 8
    },
    "blood": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.85,
     "hits": 7
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 8.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are delineated yet, as only a small superficial incision has been made in the peritoneum. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: The gallbladder remains completely attached to the liver bed with no separation to expose the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is at a very early stage; the cystic duct, cystic artery, and cystic plate are still completely covered by peritoneum and fat.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       426,
       73,
       561,
       301
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       77,
       757,
       439
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       557,
       989,
       994
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       248,
       594,
       646
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       272,
       456,
       526,
       559
      ],
      "confidence": 0.75
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       416,
       354,
       657,
       489
      ],
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.99,
     "hits": 9
    },
    "liver": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.99,
     "hits": 9
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.95,
     "hits": 9
    },
    "fat": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.95,
     "hits": 9
    },
    "blood": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.85,
     "hits": 8
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 9.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are delineated yet as dissection of the peritoneum is just beginning. C2: The hepatocystic triangle is still covered by intact peritoneum and fat, with no windows created. C3: The lower gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle has not been dissected yet; the cystic duct and artery remain buried within the peritoneum and adipose tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       639,
       685,
       992
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       80,
       563,
       459
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       489,
       90,
       689,
       391
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.99,
     "hits": 10
    },
    "liver": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.99,
     "hits": 10
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 10
    },
    "fat": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 10
    },
    "blood": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.85,
     "hits": 8
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 10.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct and artery) are isolated or seen entering the gallbladder yet, as dissection has just begun. C2: The hepatocystic triangle is still covered with fat and peritoneum, with only a superficial peritoneal incision visible and no full-thickness windows. C3: The lower gallbladder remains attached to the liver bed with only a small initial area of dissection along the peritoneal reflection.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages; the cystic duct and artery are still buried within fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       277,
       529,
       680
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       582,
       619,
       977
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       361,
       69,
       517,
       329
      ],
      "label": "grasper",
      "confidence": 0.99
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.99,
     "hits": 11
    },
    "liver": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.99,
     "hits": 11
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 11
    },
    "fat": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 11
    },
    "blood": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.85,
     "hits": 8
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 11.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or seen entering the gallbladder yet. C2: Only a superficial peritoneal incision has been made, with no full-thickness windows cleared through the hepatocystic triangle. C3: The lower gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and cystic artery are still embedded in fat and connective tissue.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       517,
       88,
       735,
       381
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       326,
       765,
       743
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       625,
       785,
       999
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       472,
       443,
       730,
       582
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       276,
       537,
       620,
       664
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.99,
     "hits": 12
    },
    "liver": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.99,
     "hits": 12
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.95,
     "hits": 12
    },
    "fat": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.95,
     "hits": 12
    },
    "blood": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.85,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    },
    "gi_tract": {
     "first": 11.0,
     "last": 11.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 12.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: Only the initial peritoneal incision has been made, with neither the cystic duct nor the cystic artery dissected into distinct tubular structures. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows created. C3: The inferior part of the gallbladder is still completely attached to the liver bed, so the cystic plate is not exposed.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.8
     },
     {
      "name": "gi_tract",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages and no biliary or vascular structures have been isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       276,
       698,
       691
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       629,
       699,
       989
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       491,
       78,
       706,
       336
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       223,
       525,
       597,
       650
      ],
      "confidence": 0.54
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.99,
     "hits": 13
    },
    "liver": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.99,
     "hits": 13
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 13
    },
    "fat": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 13
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.85,
     "hits": 10
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    },
    "gi_tract": {
     "first": 11.0,
     "last": 12.0,
     "best": 0.85,
     "hits": 2
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 13.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or skeletonized yet; only a small peritoneal incision is seen. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows created. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate remain buried in fat and peritoneum.",
    "boxes": [
     {
      "box_2d": [
       426,
       73,
       626,
       345
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       287,
       662,
       688
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       562,
       599,
       978
      ],
      "label": "liver",
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.99,
     "hits": 14
    },
    "liver": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.99,
     "hits": 14
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 14
    },
    "fat": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 14
    },
    "blood": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.85,
     "hits": 10
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    },
    "gi_tract": {
     "first": 11.0,
     "last": 13.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 14.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or clearly visible entering the gallbladder yet. C2: Only a superficial peritoneal incision has been made, with no full-thickness windows cleared through the hepatocystic triangle. C3: The lower portion of the gallbladder remains largely attached to the liver bed, with only minimal initial scoring along the cystic plate.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and cystic artery are still embedded in fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       584,
       546,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       310,
       623,
       645
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       438,
       77,
       686,
       368
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       99,
       536,
       439,
       647
      ],
      "confidence": 0.73
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       363,
       445,
       582,
       579
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.99,
     "hits": 15
    },
    "liver": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.99,
     "hits": 15
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 15
    },
    "fat": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 15
    },
    "blood": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.85,
     "hits": 10
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    },
    "gi_tract": {
     "first": 11.0,
     "last": 14.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 15.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are defined yet as dissection has just begun. C2: Only a superficial peritoneal incision is visible with fat and connective tissue completely filling the hepatocystic triangle, and no full-thickness windows are present. C3: The gallbladder remains largely attached to the liver bed with only minimal initial scoring along the peritoneal reflection.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; the cystic duct and cystic artery are still embedded in fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       622,
       592,
       990
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       322,
       681,
       682
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       516,
       92,
       795,
       385
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       74,
       501,
       437
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.99,
     "hits": 16
    },
    "liver": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.99,
     "hits": 16
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 16
    },
    "fat": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 16
    },
    "blood": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.85,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    },
    "gi_tract": {
     "first": 11.0,
     "last": 14.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 16.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection has just started with a small peritoneal opening, so neither the cystic duct nor the cystic artery are isolated as tubular structures. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: The gallbladder remains fully attached to the liver bed and the cystic plate is not exposed.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "blood",
      "confidence": 0.8
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; only the peritoneum has been incised and the underlying biliary and vascular structures are still obscured by fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       597,
       613,
       989
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       277,
       721,
       655
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       534,
       91,
       768,
       337
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.99,
     "hits": 17
    },
    "liver": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.99,
     "hits": 17
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 17
    },
    "fat": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 17
    },
    "blood": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.85,
     "hits": 12
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    },
    "gi_tract": {
     "first": 11.0,
     "last": 16.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 17.0,
   "label": {
    "cvs": {
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1: No tubular structures (cystic duct or artery) are dissected or visible entering the gallbladder yet. C2: Only a superficial peritoneal incision has been made in the hepatocystic triangle, with no full-thickness windows cleared. C3: The lower gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "blood",
      "confidence": 0.75
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
    "reason_if_not": "Dissection is in the very early stage (peritoneal scoring only); neither the cystic duct nor the cystic artery has been isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       279,
       772,
       634
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       598,
       646,
       985
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       150,
       562,
       421
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       270,
       504,
       576,
       597
      ],
      "confidence": 0.77
     },
     {
      "label": "grasper",
      "box_2d": [
       597,
       112,
       850,
       345
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.99,
     "hits": 18
    },
    "liver": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.99,
     "hits": 18
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 18
    },
    "fat": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 18
    },
    "blood": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 1
    },
    "gi_tract": {
     "first": 11.0,
     "last": 17.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 18.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No tubular structures (cystic duct or artery) are clearly dissected or distinguishable yet, as only initial peritoneal incision is seen. C2: The hepatocystic triangle is still filled with fat and connective tissue with no full-thickness windows cleared. C3: The lower part of the gallbladder remains attached to the liver bed with the cystic plate unexposed.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; cystic duct and artery are not yet isolated from surrounding fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       319,
       779,
       666
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       629,
       660,
       980
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       90,
       486,
       415
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       606,
       117,
       882,
       381
      ],
      "confidence": 0.97
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       256,
       541,
       719,
       626
      ],
      "confidence": 0.75
     },
     {
      "label": "hook",
      "box_2d": [
       802,
       671,
       999,
       792
      ],
      "confidence": 0.6
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.99,
     "hits": 19
    },
    "liver": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.99,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 19
    },
    "fat": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 19
    },
    "blood": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 18.0,
     "best": 0.85,
     "hits": 2
    },
    "gi_tract": {
     "first": 11.0,
     "last": 18.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 19.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No skeletonized tubular structures (cystic duct or artery) are clearly defined entering the gallbladder, as dissection has just begun. C2: The hepatocystic triangle is still covered in peritoneum, fat, and connective tissue with no full-thickness windows visible. C3: The lower gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
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
    "reason_if_not": "Initial stages of hepatocystic triangle dissection; the cystic duct and artery are still encased in fat and peritoneum, and the cystic plate is not dissected.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       643,
       615,
       987
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       329,
       752,
       639
      ],
      "confidence": 0.91
     },
     {
      "label": "grasper",
      "box_2d": [
       597,
       115,
       904,
       393
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       515,
       542,
       998,
       935
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.99,
     "hits": 20
    },
    "liver": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.99,
     "hits": 20
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 20
    },
    "fat": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 20
    },
    "blood": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 18.0,
     "best": 0.85,
     "hits": 2
    },
    "gi_tract": {
     "first": 11.0,
     "last": 19.0,
     "best": 0.85,
     "hits": 7
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 20.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: The peritoneum over the hepatocystic triangle is just being incised and no distinct tubular structures are skeletonized yet. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows created. C3: The lower part of the gallbladder is still fully attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "blood",
      "confidence": 0.8
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are still covered by peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       83,
       624,
       981
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       332,
       984,
       832
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       516,
       542,
       999,
       921
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       602,
       118,
       919,
       396
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       235,
       552,
       547,
       638
      ],
      "label": "cystic_plate",
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.99,
     "hits": 21
    },
    "liver": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.99,
     "hits": 21
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 21
    },
    "fat": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 21
    },
    "blood": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 14
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 20.0,
     "best": 0.9,
     "hits": 3
    },
    "gi_tract": {
     "first": 11.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 21.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures are visible yet as the peritoneum over the hepatocystic triangle is just being incised. C2: The hepatocystic triangle remains covered in fat and connective tissue with no cleared windows. C3: The inferior part of the gallbladder is still attached to the liver bed and the cystic plate is not exposed.",
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
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the cystic duct and artery are still embedded in tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       349,
       839,
       692
      ],
      "confidence": 0.95,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       646,
       638,
       988
      ],
      "confidence": 0.95,
      "label": "liver"
     },
     {
      "box_2d": [
       616,
       128,
       947,
       409
      ],
      "confidence": 0.98,
      "label": "grasper"
     },
     {
      "box_2d": [
       613,
       538,
       1000,
       875
      ],
      "confidence": 0.98,
      "label": "hook"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.99,
     "hits": 22
    },
    "liver": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.99,
     "hits": 22
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 22
    },
    "fat": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 22
    },
    "blood": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.85,
     "hits": 15
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 20.0,
     "best": 0.9,
     "hits": 3
    },
    "gi_tract": {
     "first": 11.0,
     "last": 21.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 22.0,
   "label": {
    "cvs": {
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Dissection is at an early stage and no distinct tubular structures (cystic duct or artery) are isolated yet. C2: The hepatocystic triangle is still covered by peritoneum and fat with only a small initial cautery opening, and no full-thickness windows are visible. C3: The lower gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "name": "gi_tract",
      "confidence": 0.85
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
    "reason_if_not": "The hepatocystic triangle is largely undissected, so the cystic duct and cystic artery are still obscured by peritoneum and adipose tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       352,
       750,
       677
      ],
      "confidence": 0.95,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       646,
       574,
       982
      ],
      "confidence": 0.95,
      "label": "liver"
     },
     {
      "box_2d": [
       580,
       127,
       922,
       409
      ],
      "confidence": 0.97,
      "label": "grasper"
     },
     {
      "box_2d": [
       576,
       550,
       1000,
       893
      ],
      "confidence": 0.96,
      "label": "hook"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.99,
     "hits": 23
    },
    "liver": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.99,
     "hits": 23
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 23
    },
    "fat": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 23
    },
    "blood": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.85,
     "hits": 15
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 22.0,
     "best": 0.9,
     "hits": 4
    },
    "gi_tract": {
     "first": 11.0,
     "last": 22.0,
     "best": 0.85,
     "hits": 9
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 23.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder yet. C2: The hepatocystic triangle is just beginning to be opened by the hook, with no full-thickness windows cleared of fat and connective tissue. C3: The peritoneum along the inferior margin of the gallbladder is only partially incised, and the lower gallbladder is not separated from the cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "blood",
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
    "reason_if_not": "Dissection is in an early stage; the hepatocystic triangle has not been cleared to expose the cystic duct, cystic artery, or cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       361,
       755,
       659
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       632,
       598,
       984
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       557,
       117,
       915,
       421
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       568,
       595,
       995,
       933
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       183,
       575,
       564,
       676
      ],
      "confidence": 0.63
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.99,
     "hits": 24
    },
    "liver": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.99,
     "hits": 24
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 24
    },
    "fat": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 24
    },
    "blood": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 16
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "gi_tract": {
     "first": 11.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 10
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 24.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the inferior border (likely cystic duct region) is partially outlined, while the artery and second structure are still completely covered in fat and connective tissue. C2: A shallow pocket is being created by the hook, but there are no full-thickness windows through the hepatocystic triangle. C3: The peritoneum along the liver bed has just been scored, so the lower gallbladder is not separated from the cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; tubular structures and windows are not yet isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       353,
       690,
       667
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       629,
       521,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       71,
       827,
       440
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       516,
       109,
       897,
       417
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       499,
       560,
       995,
       946
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.99,
     "hits": 25
    },
    "liver": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.99,
     "hits": 25
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 25
    },
    "fat": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 25
    },
    "blood": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 17
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "gi_tract": {
     "first": 11.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 11
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 24.0,
     "best": 0.65,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 25.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or seen entering the gallbladder yet. C2: The hepatocystic triangle has only a small initial peritoneal incision with no full-thickness windows cleared. C3: The lower gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "blood",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and cystic artery are still covered by fat and peritoneum.",
    "boxes": [
     {
      "box_2d": [
       0,
       365,
       737,
       609
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       640,
       575,
       989
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       68,
       839,
       444
      ],
      "label": "liver",
      "confidence": 0.93
     },
     {
      "box_2d": [
       515,
       114,
       904,
       442
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       587,
       576,
       997,
       918
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       496,
       523,
       622,
       600
      ],
      "label": "hepatocystic_window",
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.99,
     "hits": 26
    },
    "liver": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.99,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 26
    },
    "fat": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 26
    },
    "blood": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 18
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "gi_tract": {
     "first": 11.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 24.0,
     "best": 0.65,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 26.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder yet. C2: The hepatocystic triangle is just beginning to be opened with the hook and remains filled with fat and connective tissue without full-thickness windows. C3: Only a small initial incision along the peritoneal attachment is visible, and the lower gallbladder is not separated from the cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in an early stage and critical biliary/vascular structures are still embedded in tissue.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       498,
       115,
       888,
       439
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       545,
       579,
       995,
       943
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       368,
       726,
       639
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       642,
       542,
       989
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.99,
     "hits": 27
    },
    "liver": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.99,
     "hits": 27
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 27
    },
    "fat": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 27
    },
    "blood": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.85,
     "hits": 19
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "gi_tract": {
     "first": 11.0,
     "last": 26.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 24.0,
     "best": 0.65,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 27.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) is partially delineated, while a second distinct tubular structure (cystic artery) is not yet clearly isolated entering the gallbladder. C2: The hepatocystic triangle is still largely covered by peritoneum, fat, and connective tissue, with the electrocautery hook only beginning to create an opening. C3: The lower part of the gallbladder remains attached to the liver bed, and the cystic plate is not exposed.",
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
      "name": "fat",
      "confidence": 0.95
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
      "name": "gi_tract",
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic artery and cystic plate are not yet isolated or exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       627,
       544,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       361,
       683,
       674
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       524,
       118,
       917,
       423
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       498,
       598,
       945,
       963
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       162,
       582,
       488,
       662
      ],
      "confidence": 0.64
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.99,
     "hits": 28
    },
    "liver": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.99,
     "hits": 28
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 28
    },
    "fat": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 28
    },
    "blood": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.85,
     "hits": 20
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 27.0,
     "best": 0.9,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 27.0,
     "best": 0.85,
     "hits": 14
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 27.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null
  },
  {
   "t": 28.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the cystic duct is partially visible at the lower edge of the hepatocystic triangle, while the cystic artery is not yet skeletonized or clearly identifiable as a tubular structure. C2: The hepatocystic triangle is still filled with connective tissue and fat being dissected by the hook, with no full-thickness windows established. C3: The gallbladder remains largely attached to the liver bed with only superficial peritoneal incision and no clear exposure of the cystic plate along the inferior margin.",
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
      "confidence": 0.75
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
      "name": "gi_tract",
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; tubular structures and windows are not yet cleared.",
    "boxes": [
     {
      "box_2d": [
       468,
       112,
       899,
       440
      ],
      "label": "grasper",
      "confidence": 0.99
     },
     {
      "box_2d": [
       506,
       610,
       913,
       960
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       374,
       663,
       719
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       656,
       530,
       977
      ],
      "label": "liver",
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.99,
     "hits": 29
    },
    "liver": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.99,
     "hits": 29
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 29
    },
    "fat": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 29
    },
    "blood": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.85,
     "hits": 20
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 28.0,
     "best": 0.9,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 29.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct along the inferior edge) is starting to be defined, while the cystic artery is not yet isolated. C2: One full-thickness window is visible above the lower tubular structure, but the rest of the hepatocystic triangle remains covered in undissected tissue. C3: The lower gallbladder is still attached to the liver bed with only a superficial scoring line, so the cystic plate is not exposed.",
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
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic artery is not isolated and the cystic plate is not exposed.",
    "boxes": [
     {
      "box_2d": [
       0,
       397,
       665,
       687
      ],
      "confidence": 0.95,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       660,
       529,
       981
      ],
      "confidence": 0.95,
      "label": "liver"
     },
     {
      "box_2d": [
       468,
       116,
       912,
       467
      ],
      "confidence": 0.98,
      "label": "grasper"
     },
     {
      "box_2d": [
       580,
       634,
       985,
       942
      ],
      "confidence": 0.96,
      "label": "hook"
     },
     {
      "box_2d": [
       499,
       562,
       606,
       640
      ],
      "confidence": 0.72,
      "label": "hepatocystic_window"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.99,
     "hits": 30
    },
    "liver": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.99,
     "hits": 30
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 30
    },
    "fat": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 30
    },
    "blood": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.85,
     "hits": 20
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 28.0,
     "best": 0.9,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 29.0,
     "best": 0.85,
     "hits": 16
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 29.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 30.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the early outline of a single structure is being dissected with the hook, and two distinct tubular structures are not visible entering the gallbladder. C2: The hepatocystic triangle is still largely covered in fat and connective tissue with only a small shallow window beginning to open. C3: The inferior margin of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are not yet isolated from surrounding fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       399,
       673,
       695
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       79,
       837,
       969
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       438,
       111,
       890,
       467
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       542,
       606,
       988,
       946
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.99,
     "hits": 31
    },
    "liver": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.99,
     "hits": 31
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 31
    },
    "fat": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 31
    },
    "blood": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.85,
     "hits": 21
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 8
    },
    "gi_tract": {
     "first": 11.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 29.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 31.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the peritoneum and early tissue are being opened, with no distinct tubular structures isolated yet. C2: The hepatocystic triangle is just beginning to be incised and has no full-thickness windows. C3: The gallbladder remains completely attached to the liver bed with no cystic plate exposure.",
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
      "confidence": 0.8
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
    "reason_if_not": "Dissection is in the very early stages and critical structures have not yet been exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       319,
       798,
       977
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       81,
       842,
       714
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       304,
       723,
       528,
       986
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       7,
       641,
       358,
       807
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.99,
     "hits": 32
    },
    "liver": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.99,
     "hits": 32
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 32
    },
    "fat": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 32
    },
    "blood": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.85,
     "hits": 21
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 8
    },
    "gi_tract": {
     "first": 11.0,
     "last": 31.0,
     "best": 0.9,
     "hits": 18
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 29.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 32.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct) is clearly outlined near the gallbladder neck, while a second structure (cystic artery) is not distinctly skeletonized. C2: There is a small dissected gap behind the first structure, but a complete, unimpeded two-window view of the hepatocystic triangle is not achieved. C3: The lower portion of the gallbladder remains largely attached to the liver bed, and the cystic plate is not fully exposed.",
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
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.55
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
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet isolated or exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       656,
       491,
       985
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       474,
       142,
       988,
       542
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       371,
       651,
       657
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.99,
     "hits": 33
    },
    "liver": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.99,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 33
    },
    "fat": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 33
    },
    "blood": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.85,
     "hits": 22
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 9
    },
    "gi_tract": {
     "first": 11.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 32.0,
     "best": 0.75,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 32.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 33.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is in the very early stages and no distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder. C2: The hepatocystic triangle is still filled with peritoneum, fat, and connective tissue, with only a superficial opening made by the hook. C3: The lower gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still obscured by peritoneum and fibroadipose tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       646,
       461,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       378,
       816,
       660
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       500,
       653,
       814,
       972
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       677,
       188,
       1000,
       441
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.99,
     "hits": 34
    },
    "liver": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.99,
     "hits": 34
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 34
    },
    "fat": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 34
    },
    "blood": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.85,
     "hits": 23
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 33.0,
     "best": 0.9,
     "hits": 10
    },
    "gi_tract": {
     "first": 11.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 32.0,
     "best": 0.75,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 32.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
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
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: Dissection of the hepatocystic triangle has only just begun, with a small initial peritoneal opening and no full-thickness windows cleared. C3: The inferior margin of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
    "reason_if_not": "Early stage of hepatocystic triangle dissection; tubular structures and cystic plate remain covered by peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       657,
       522,
       980
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       386,
       803,
       638
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       549,
       528,
       706,
       615
      ],
      "confidence": 0.82
     },
     {
      "label": "grasper",
      "box_2d": [
       671,
       175,
       998,
       450
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       509,
       623,
       874,
       963
      ],
      "confidence": 0.89
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.99,
     "hits": 35
    },
    "liver": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.99,
     "hits": 35
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 35
    },
    "fat": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 35
    },
    "blood": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 24
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 11
    },
    "gi_tract": {
     "first": 11.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 32.0,
     "best": 0.75,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 32.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 35.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: Dissection of the hepatocystic triangle has only just begun with an initial peritoneal incision, so no full-thickness windows are present. C3: The lower portion of the gallbladder remains attached to the liver bed, with only superficial scoring of the peritoneum along the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; the peritoneum is just being opened and critical tubular structures are still encased in fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       684,
       185,
       1000,
       434
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       443,
       580,
       832,
       977
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       372,
       808,
       674
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       651,
       477,
       982
      ],
      "label": "liver",
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.99,
     "hits": 36
    },
    "liver": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.99,
     "hits": 36
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 36
    },
    "fat": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.85,
     "hits": 25
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 12
    },
    "gi_tract": {
     "first": 11.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 32.0,
     "best": 0.75,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 32.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 36.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Early dissection of the peritoneum over the hepatocystic triangle; neither the cystic duct nor the cystic artery is skeletonized into a distinct tubular structure. C2: The hepatocystic triangle is still filled with connective tissue and fat, with only a superficial opening in the peritoneum and no full-thickness windows. C3: The lower gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Initial peritoneal incision stage; cystic duct, cystic artery, and cystic plate are still covered by fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       648,
       449,
       986
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       365,
       837,
       689
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       712,
       184,
       998,
       439
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       388,
       88,
       459
      ],
      "confidence": 0.85
     },
     {
      "label": "irrigator",
      "box_2d": [
       386,
       683,
       634,
       984
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       555,
       513,
       738,
       643
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.99,
     "hits": 37
    },
    "liver": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.99,
     "hits": 37
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 37
    },
    "fat": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 25
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 12
    },
    "gi_tract": {
     "first": 11.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 32.0,
     "best": 0.75,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 32.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 37.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Peritoneum and fat still cover the hepatocystic triangle, so two distinct tubular structures entering the gallbladder are not yet visible. C2: The hepatocystic triangle is only partially opened with a small initial window, and fat/connective tissue has not been cleared to create two full-thickness windows. C3: The lower part of the gallbladder remains attached to the liver bed with no significant exposure of the cystic plate.",
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
      "name": "blood",
      "confidence": 0.7
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; the cystic duct and cystic artery are still covered by fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       646,
       543,
       985
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       365,
       874,
       708
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       387,
       103,
       473
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       738,
       221,
       1000,
       432
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       530,
       621,
       885,
       963
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       588,
       514,
       755,
       610
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.99,
     "hits": 38
    },
    "liver": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.99,
     "hits": 38
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 38
    },
    "fat": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 38
    },
    "blood": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.85,
     "hits": 26
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 13
    },
    "gi_tract": {
     "first": 11.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 32.0,
     "best": 0.75,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 37.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 38.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a single broad structure at the bottom of the hepatocystic area is partially isolated; two distinct tubular structures are not yet visible. C2: Dissection of the hepatocystic triangle has just begun, with a small recess behind the lower structure, not full-thickness cleared windows. C3: The gallbladder remains largely attached to the liver bed with only a superficial peritoneal incision along the medial border.",
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
      "confidence": 0.65
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not yet isolated and the cystic plate is not exposed.",
    "boxes": [
     {
      "box_2d": [
       0,
       645,
       552,
       984
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       372,
       744,
       712
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       573,
       157,
       997,
       493
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       431,
       844,
       574,
       984
      ],
      "label": "irrigator",
      "confidence": 0.54
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.99,
     "hits": 39
    },
    "liver": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.99,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 39
    },
    "fat": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 39
    },
    "blood": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.85,
     "hits": 27
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 14
    },
    "gi_tract": {
     "first": 11.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 38.0,
     "best": 0.75,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 37.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
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
    "cvs_evidence": "C1: Only a single tubular structure is partially visible on the right, and a second structure is not delineated. C2: The hook is actively dissecting into raw tissue in the triangle, with no full-thickness windows cleared through to the background. C3: The lower gallbladder is not separated from the liver bed and the grasper shaft occludes much of the area.",
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
      "confidence": 0.65
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
      "name": "blood",
      "confidence": 0.8
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete and the grasper shaft partially obstructs the view.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       297,
       314,
       822,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       381,
       238,
       882
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       83,
       890,
       799
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       227,
       759,
       382,
       982
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.99,
     "hits": 39
    },
    "liver": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.99,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 39
    },
    "fat": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 39
    },
    "blood": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.85,
     "hits": 27
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 14
    },
    "gi_tract": {
     "first": 11.0,
     "last": 39.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 39.0,
     "best": 0.75,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 37.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 40.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Only a single tubular structure is partially visible on the right, and no second distinct tubular structure entering the gallbladder is seen. C2: The hepatocystic triangle is still covered in connective tissue with the hook actively dissecting, and no full-thickness windows are open. C3: The gallbladder remains largely attached to the liver bed and the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.9
     },
     {
      "name": "liver",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.75
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
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
    "reason_if_not": "Critical View of Safety is not achieved; dissection of the hepatocystic triangle is still in early stages and the grasper shaft partially occludes the view.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       0,
       463,
       200,
       768
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       194,
       672,
       357,
       976
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       283,
       316,
       836,
       919
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       756,
       205,
       856
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.99,
     "hits": 40
    },
    "liver": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.99,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 40
    },
    "fat": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.85,
     "hits": 28
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 15
    },
    "gi_tract": {
     "first": 11.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 20
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 40.0,
     "best": 0.75,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 37.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 41.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible entering the gallbladder; the dissection is at a very early stage. C2: The hepatocystic triangle is not cleared, and no full-thickness windows are visible. C3: The lower gallbladder is not separated from the liver bed, and the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.98
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
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.8
     },
     {
      "name": "gallbladder",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not yet dissected and the view of the gallbladder neck is largely occluded by instruments and undissected tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       229,
       313,
       829,
       884
      ],
      "confidence": 0.98
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       68,
       808,
       735
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       50,
       624,
       268,
       970
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 40
    },
    "liver": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 40
    },
    "fat": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.85,
     "hits": 28
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 15
    },
    "gi_tract": {
     "first": 11.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 20
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 40.0,
     "best": 0.75,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 37.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 42.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible entering the gallbladder as dissection is just beginning on the serosa. C2: The hepatocystic triangle is completely covered in peritoneal tissue and fat with no windows formed. C3: The lower gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "name": "connective_tissue",
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
    "reason_if_not": "The hepatocystic triangle is still undissected and covered by peritoneum and fat, so the cystic duct and artery cannot be identified.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       223,
       314,
       857,
       941
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       151,
       564,
       417,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       69,
       823,
       710
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       381,
       115,
       484
      ],
      "confidence": 0.8
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       566,
       187,
       868
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 41
    },
    "liver": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 41
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 41
    },
    "fat": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.85,
     "hits": 28
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 16
    },
    "gi_tract": {
     "first": 11.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 21
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 40.0,
     "best": 0.75,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 37.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 43.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible entering the gallbladder; dissection is still at the peritoneal/serosal level. C2: The hepatocystic triangle is still covered by intact peritoneum and fat with no dissected windows. C3: The gallbladder remains attached to the liver bed with no exposed cystic plate along its inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.9
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
    "reason_if_not": "Early dissection phase; the cystic duct and cystic artery are not yet exposed from the surrounding peritoneum and fat.",
    "boxes": [
     {
      "box_2d": [
       78,
       631,
       246,
       967
      ],
      "confidence": 0.96,
      "label": "hook"
     },
     {
      "box_2d": [
       0,
       71,
       795,
       706
      ],
      "confidence": 0.95,
      "label": "irrigator"
     },
     {
      "box_2d": [
       270,
       318,
       835,
       915
      ],
      "confidence": 0.93,
      "label": "liver"
     },
     {
      "box_2d": [
       0,
       584,
       298,
       855
      ],
      "confidence": 0.77,
      "label": "gallbladder"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 42
    },
    "liver": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 42
    },
    "blood": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.85,
     "hits": 29
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 16
    },
    "gi_tract": {
     "first": 11.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 40.0,
     "best": 0.75,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 37.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 44.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.25,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (likely cystic duct) is partially visible on the right, while the upper part of the triangle is obscured by instruments. C2: One window is opened and an instrument (hook) is entering it, but a second window is not clearly exposed. C3: The lower gallbladder is not separated from the liver bed along its whole inferior margin to expose the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "cystic_duct",
      "confidence": 0.8
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The camera is positioned looking mostly at the liver and omentum, with instruments occluding the upper hepatocystic triangle and incomplete dissection of the cystic artery and cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       321,
       790,
       936
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       116,
       788,
       752,
       984
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       69,
       729,
       650
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       617,
       143,
       942
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 42
    },
    "liver": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.99,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 42
    },
    "blood": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.85,
     "hits": 29
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 16
    },
    "gi_tract": {
     "first": 11.0,
     "last": 44.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 44.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 45.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.03
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly visible entering the gallbladder as dissection is just beginning at the peritoneal attachment. C2: The hepatocystic triangle is not dissected and no full-thickness windows are visible. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate along the inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.99
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
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.75
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
    "reason_if_not": "The hepatocystic triangle has not been dissected yet; only initial peritoneal incision is being performed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       140,
       317,
       858,
       948
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       560,
       762,
       987
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       49,
       574,
       280,
       974
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       69,
       783,
       680
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.99,
     "hits": 43
    },
    "liver": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.99,
     "hits": 43
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 43
    },
    "fat": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 43
    },
    "blood": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 30
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 16
    },
    "gi_tract": {
     "first": 11.0,
     "last": 45.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 44.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 46.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure is visible near the top right, and a second tubular structure is not identified. C2: The hepatocystic triangle is largely obscured by the gallbladder body and instruments, without two clear full-thickness windows visible. C3: The gallbladder remains largely attached to the liver bed and is not hanging off a dissected cystic plate.",
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
      "name": "cystic_duct",
      "confidence": 0.75
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
    "reason_if_not": "The hepatocystic triangle is not sufficiently dissected and only one tubular structure is visible, with instruments and the gallbladder body blocking the view.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       232,
       313,
       869,
       938
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       72,
       770,
       687
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       217,
       563,
       578,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       0,
       769,
       226,
       878
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       566,
       290,
       840
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.99,
     "hits": 44
    },
    "liver": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.99,
     "hits": 44
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 44
    },
    "fat": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 44
    },
    "blood": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 30
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 16
    },
    "gi_tract": {
     "first": 11.0,
     "last": 46.0,
     "best": 0.9,
     "hits": 24
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 46.0,
     "best": 0.8,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 47.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (likely cystic duct or artery) is partially skeletonized on the right, and two distinct tubular structures entering the gallbladder are not yet visible. C2: A dissection pocket is being created in the hepatocystic triangle with the hook, but no full-thickness window is cleared yet. C3: The gallbladder remains largely attached to the liver bed with no exposed cystic plate giving a hanging gallbladder appearance.",
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
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "cystic_duct",
      "confidence": 0.55
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Hepatocystic triangle dissection is incomplete; only one tubular structure is partially visible and no through-and-through windows or cystic plate exposure have been achieved.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       303,
       856,
       922
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       267,
       796,
       798,
       984
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       140,
       728,
       285,
       971
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       71,
       755,
       678
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.99,
     "hits": 45
    },
    "liver": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.99,
     "hits": 45
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 45
    },
    "fat": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 45
    },
    "blood": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.85,
     "hits": 31
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 16
    },
    "gi_tract": {
     "first": 11.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 25
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 47.0,
     "best": 0.8,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 48.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one thick peritonealized band/structure is grasped and lifted, while a second distinct tubular structure entering the gallbladder is not yet isolated. C2: One small full-thickness window is opened at the base, but the upper part of the hepatocystic triangle remains covered in undissected tissue. C3: The lower portion of the gallbladder remains attached to the liver bed with no exposed cystic plate beneath its inferior margin.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not yet isolated and the cystic plate is not exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       657,
       592,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       373,
       849,
       718
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       478,
       608,
       843,
       967
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       718,
       180,
       999,
       434
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       580,
       513,
       741,
       605
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       406,
       81,
       477
      ],
      "confidence": 0.65
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       636,
       574,
       998,
       929
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 46
    },
    "liver": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 46
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 46
    },
    "fat": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 46
    },
    "blood": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.85,
     "hits": 32
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 17
    },
    "gi_tract": {
     "first": 11.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 25
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 48.0,
     "best": 0.8,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 48.0,
     "best": 0.85,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 49.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Early dissection in the hepatocystic triangle with only one developing opening; two distinct tubular structures entering the gallbladder are not yet isolated. C2: One small window is opening below the hook, but the rest of the hepatocystic triangle remains covered in peritoneum and connective tissue. C3: The lower gallbladder remains entirely attached to the liver bed with no cystic plate exposed.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.65
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; tubular structures and the cystic plate are still covered by peritoneum and fat.",
    "boxes": [
     {
      "box_2d": [
       0,
       393,
       833,
       646
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       665,
       512,
       986
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       79,
       792,
       451
      ],
      "label": "liver",
      "confidence": 0.88
     },
     {
      "box_2d": [
       555,
       593,
       959,
       943
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       705,
       214,
       999,
       449
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       407,
       78,
       478
      ],
      "label": "grasper",
      "confidence": 0.75
     },
     {
      "box_2d": [
       595,
       520,
       736,
       605
      ],
      "label": "hepatocystic_window",
      "confidence": 0.83
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 47
    },
    "liver": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 47
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 17
    },
    "gi_tract": {
     "first": 11.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 25
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 48.0,
     "best": 0.8,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 50.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is in an early stage and two distinct tubular structures entering the gallbladder are not yet isolated. C2: The hepatocystic triangle is mostly covered by peritoneum and fat, with only a small initial window opened near the hook. C3: The lower part of the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; the cystic duct, cystic artery, and cystic plate are not yet isolated or clearly visible.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       665,
       588,
       987
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       394,
       836,
       732
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       619,
       599,
       998,
       918
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       704,
       218,
       997,
       453
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       410,
       77,
       478
      ],
      "confidence": 0.75
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       611,
       518,
       757,
       617
      ],
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.99,
     "hits": 48
    },
    "liver": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.99,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 48
    },
    "fat": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 48
    },
    "blood": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 34
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 18
    },
    "gi_tract": {
     "first": 11.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 25
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 48.0,
     "best": 0.8,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 51.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the inferior border/cystic duct region is partially outlined by a small window; two distinct tubular structures entering the gallbladder are not yet dissected. C2: One small window is opened in the lower triangle, but the upper hepatocystic triangle remains covered in peritoneum and connective tissue. C3: The hook is just beginning to score the peritoneum near the liver bed, so the lower gallbladder is not separated from the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
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
      "confidence": 0.7
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet exposed.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       678,
       204,
       999,
       461
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       404,
       614,
       710,
       982
      ],
      "confidence": 0.97
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       403,
       807,
       732
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       663,
       490,
       986
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       81,
       794,
       450
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       516,
       524,
       723,
       638
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.99,
     "hits": 49
    },
    "liver": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.99,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 49
    },
    "fat": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 49
    },
    "blood": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.85,
     "hits": 35
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 19
    },
    "gi_tract": {
     "first": 11.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 25
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 48.0,
     "best": 0.8,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 51.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 52.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Only one possible tubular structure or a partially dissected area is seen, not two clear tubular structures entering the gallbladder. C2: There is one small window being created in the lower triangle, not full clearance with two distinct windows. C3: The gallbladder remains largely attached to the liver bed with only a superficial peritoneal scoring along the medial edge.",
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
      "confidence": 0.75
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; tubular structures (cystic duct and artery) are still obscured by peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       381,
       836,
       696
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       659,
       532,
       989
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       69,
       995,
       443
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       573,
       514,
       736,
       609
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       708,
       178,
       999,
       445
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       478,
       646,
       781,
       974
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.99,
     "hits": 50
    },
    "liver": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.99,
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 50
    },
    "fat": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 50
    },
    "blood": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.85,
     "hits": 35
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 20
    },
    "gi_tract": {
     "first": 11.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 25
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 48.0,
     "best": 0.8,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 52.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 53.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The peritoneum and fatty tissue covering the hepatocystic triangle are only starting to be incised, so two distinct tubular structures are not yet isolated. C2: A small initial opening is visible in the triangle tissue, but full-thickness cleared windows are not established. C3: The inferior margin of the gallbladder remains attached to the liver bed with the peritoneum only minimally scored.",
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
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.4
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and cystic artery are still covered by peritoneum and fibroadipose tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       384,
       835,
       682
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       654,
       532,
       976
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       706,
       187,
       998,
       445
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       521,
       621,
       889,
       959
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       566,
       517,
       728,
       607
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.99,
     "hits": 51
    },
    "liver": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.99,
     "hits": 51
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 51
    },
    "fat": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 51
    },
    "blood": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.85,
     "hits": 35
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 21
    },
    "gi_tract": {
     "first": 11.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 25
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 48.0,
     "best": 0.8,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 53.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 54.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.08,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the cystic duct or a single peritoneal fold is partially dissected, and two distinct tubular structures entering the gallbladder are not yet visible. C2: One small window is being opened near the hook tip, but the hepatocystic triangle remains largely covered by connective tissue and fat. C3: The lower gallbladder remains attached to the liver bed with only superficial peritoneal scoring above, so the cystic plate is not exposed.",
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
      "confidence": 0.75
     },
     {
      "name": "cystic_duct",
      "confidence": 0.55
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct and cystic artery are still encased in fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       649,
       520,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       367,
       829,
       672
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       701,
       185,
       999,
       448
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       580,
       597,
       996,
       932
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       581,
       509,
       735,
       601
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.99,
     "hits": 52
    },
    "liver": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.99,
     "hits": 52
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 52
    },
    "fat": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 52
    },
    "blood": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 36
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 22
    },
    "gi_tract": {
     "first": 11.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 25
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 54.0,
     "best": 0.8,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 55.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not yet clearly skeletonized and isolated entering the gallbladder. C2: The hepatocystic triangle is only partially opened with a single window beginning to form, and significant tissue remains. C3: The lower third of the gallbladder remains attached to the liver bed without full exposure of the cystic plate.",
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
      "name": "cystic_duct",
      "confidence": 0.5
     },
     {
      "name": "cystic_artery",
      "confidence": 0.5
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; tubular structures and the cystic plate are not yet fully isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       67,
       827,
       445
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       657,
       499,
       982
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       396,
       810,
       702
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       683,
       185,
       1000,
       448
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       431,
       593,
       762,
       981
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       510,
       521,
       717,
       613
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.99,
     "hits": 53
    },
    "liver": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.99,
     "hits": 53
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 53
    },
    "fat": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 53
    },
    "blood": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 36
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 23
    },
    "gi_tract": {
     "first": 11.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 25
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 55.0,
     "best": 0.8,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 55.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 55.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 56.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the cystic duct is partially outlined along the lower border of the window; the cystic artery is not yet dissected as a distinct tubular structure. C2: A single partial window is opened in the hepatocystic triangle, not the two full-thickness windows required. C3: The lower third of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "cystic_duct",
      "confidence": 0.75
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
      "confidence": 0.7
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not yet isolated and the cystic plate is not exposed.",
    "boxes": [
     {
      "box_2d": [
       661,
       178,
       1000,
       466
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       347,
       650,
       584,
       984
      ],
      "label": "hook",
      "confidence": 0.92
     },
     {
      "box_2d": [
       483,
       532,
       725,
       680
      ],
      "label": "hepatocystic_window",
      "confidence": 0.72
     },
     {
      "box_2d": [
       0,
       403,
       786,
       735
      ],
      "label": "gallbladder",
      "confidence": 0.85
     },
     {
      "box_2d": [
       0,
       694,
       385,
       982
      ],
      "label": "liver",
      "confidence": 0.88
     },
     {
      "box_2d": [
       0,
       71,
       990,
       461
      ],
      "label": "liver",
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.99,
     "hits": 54
    },
    "liver": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.99,
     "hits": 54
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 54
    },
    "fat": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 54
    },
    "blood": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.85,
     "hits": 37
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 24
    },
    "gi_tract": {
     "first": 11.0,
     "last": 56.0,
     "best": 0.9,
     "hits": 26
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 56.0,
     "best": 0.8,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 56.0,
     "best": 0.85,
     "hits": 7
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 55.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 57.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.1
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and an upper structure (likely cystic artery being dissected by the hook) are visible entering the gallbladder, though the upper structure is not fully skeletonized. C2: A full-thickness window is visible between the lower and upper structures showing the background, but the upper window towards the cystic plate is still being dissected. C3: The lower gallbladder is not separated from the liver bed, and the cystic plate is not exposed.",
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
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete; only one clear window is fully formed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       411,
       783,
       737
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       688,
       556,
       982
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       643,
       172,
       1000,
       471
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       326,
       666,
       548,
       986
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       461,
       542,
       682,
       684
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.99,
     "hits": 55
    },
    "liver": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.99,
     "hits": 55
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 55
    },
    "fat": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 55
    },
    "blood": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.85,
     "hits": 37
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 25
    },
    "gi_tract": {
     "first": 11.0,
     "last": 57.0,
     "best": 0.9,
     "hits": 27
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 57.0,
     "best": 0.8,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 57.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 58.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures entering the gallbladder are not yet fully skeletonized. C2: One full-thickness window is beginning to form in the hepatocystic triangle, but the upper triangle is still covered in connective tissue and being dissected by the hook. C3: The lower third of the gallbladder has not been elevated off the cystic plate yet.",
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
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.8
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
    "reason_if_not": "The hepatocystic triangle is still partially covered by connective tissue and the lower gallbladder is not mobilized from the cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       417,
       801,
       764
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       688,
       591,
       979
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       474,
       546,
       706,
       686
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       602,
       694,
       989,
       972
      ],
      "confidence": 0.77
     },
     {
      "label": "grasper",
      "box_2d": [
       662,
       190,
       999,
       474
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       326,
       674,
       539,
       986
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.99,
     "hits": 56
    },
    "liver": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.99,
     "hits": 56
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 56
    },
    "fat": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 56
    },
    "blood": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.85,
     "hits": 38
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 26
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 28
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 58.0,
     "best": 0.8,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 58.0,
     "best": 0.85,
     "hits": 9
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 58.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 59.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and a putative upper band are emerging, but dissection is incomplete and two distinct tubular structures entering the gallbladder are not yet skeletonized. C2: A single small window is opened in the hepatocystic triangle, while the upper space toward the cystic plate remains obscured by tissue and the hook. C3: The lower gallbladder remains attached to the liver bed with no cleared cystic plate visible.",
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
      "name": "cystic_duct",
      "confidence": 0.65
     },
     {
      "name": "cystic_artery",
      "confidence": 0.45
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
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, so the two tubular structures and their entry into the gallbladder cannot be confirmed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       410,
       789,
       747
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       686,
       325,
       975
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       72,
       1000,
       473
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       658,
       184,
       998,
       467
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       304,
       680,
       523,
       981
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       463,
       544,
       706,
       656
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 57
    },
    "liver": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 57
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 57
    },
    "blood": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.85,
     "hits": 38
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 27
    },
    "gi_tract": {
     "first": 11.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 29
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 59.0,
     "best": 0.8,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 59.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 60.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Early dissection in the hepatocystic triangle; neither the cystic duct nor the cystic artery is skeletonized as a distinct tubular structure connected to the gallbladder. C2: Only a small initial opening has been made in the peritoneal and connective tissue, without two full-thickness windows clearing the hepatocystic triangle. C3: The lower portion of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
    "view_quality": "smoke",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and tubular biliary/vascular structures are still encased in fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       68,
       997,
       495
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       368,
       872,
       727
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       743,
       222,
       1000,
       428
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       461,
       706,
       726,
       980
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       580,
       502,
       767,
       609
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       617,
       632,
       995,
       958
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.99,
     "hits": 57
    },
    "liver": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.99,
     "hits": 57
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 57
    },
    "blood": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 38
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 27
    },
    "gi_tract": {
     "first": 11.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 29
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 59.0,
     "best": 0.8,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 59.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 61.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a small initial opening in the peritoneum is visible; the cystic duct and cystic artery are not yet skeletonized as distinct tubular structures connected to the gallbladder. C2: One small partial window is beginning to form below the hook, but the hepatocystic triangle remains largely covered in fat and peritoneum. C3: The gallbladder has not been elevated off the liver bed, so the cystic plate is not exposed.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.55
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the cystic duct, cystic artery, and cystic plate are still concealed by peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       370,
       874,
       737
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       663,
       531,
       976
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       740,
       226,
       998,
       429
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       422,
       100,
       495
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       544,
       617,
       896,
       957
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       604,
       503,
       759,
       588
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.99,
     "hits": 58
    },
    "liver": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.99,
     "hits": 58
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 58
    },
    "fat": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 58
    },
    "blood": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 39
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 27
    },
    "gi_tract": {
     "first": 11.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 29
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 59.0,
     "best": 0.8,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 59.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 62.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "Two tubular-like bands are visible around the window, though the upper one is still attached to the liver bed and being dissected. One full-thickness window is visible between the lower structure and the upper tissue, while the upper space near the cystic plate is currently being cauterized by the hook. The lower part of the gallbladder is only partially separated from the liver bed, with the hook actively dissecting the superior portion of the triangle.",
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
      "confidence": 0.75
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
      "name": "connective_tissue",
      "confidence": 0.8
     },
     {
      "name": "fat",
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is still in progress.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       395,
       853,
       711
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       66,
       1000,
       454
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       679,
       417,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       576,
       522,
       753,
       627
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       360,
       628,
       622,
       984
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       731,
       246,
       1000,
       446
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       429,
       90,
       505
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 59
    },
    "liver": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 59
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 59
    },
    "fat": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 59
    },
    "blood": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 39
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 28
    },
    "gi_tract": {
     "first": 11.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 29
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 62.0,
     "best": 0.8,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 62.0,
     "best": 0.85,
     "hits": 11
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 62.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 63.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the inferior border (likely cystic duct) is starting to be defined, while the cystic artery is still embedded in connective tissue. C2: One small window is partially opened at the bottom of the triangle, but the upper triangle remains undissected. C3: The lower part of the gallbladder is still fully attached to the liver bed with no cystic plate exposed.",
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
      "name": "cystic_duct",
      "confidence": 0.5
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.8
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; tubular structures and the cystic plate are not yet isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       400,
       856,
       726
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       686,
       608,
       980
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       334,
       754,
       526,
       980
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       735,
       259,
       998,
       455
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       430,
       90,
       508
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       573,
       523,
       763,
       623
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       744,
       433,
       858,
       613
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.99,
     "hits": 60
    },
    "liver": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.99,
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 60
    },
    "fat": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 60
    },
    "blood": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.85,
     "hits": 39
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 29
    },
    "gi_tract": {
     "first": 11.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 29
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 63.0,
     "best": 0.8,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 63.0,
     "best": 0.85,
     "hits": 11
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 62.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 64.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still largely covered by peritoneum and fat, with only initial superficial incisions made by the hook. C3: The lower gallbladder has not been fully lifted off the liver bed to expose the cystic plate along the entire inferior margin.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and the cystic duct and artery remain obscured by overlying tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       71,
       992,
       471
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       687,
       529,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       395,
       833,
       706
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       706,
       222,
       1000,
       458
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       507,
       620,
       838,
       966
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       564,
       531,
       742,
       646
      ],
      "confidence": 0.75
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       437,
       79,
       502
      ],
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 61
    },
    "liver": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 61
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 61
    },
    "fat": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 61
    },
    "blood": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.85,
     "hits": 40
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 30
    },
    "gi_tract": {
     "first": 11.0,
     "last": 64.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 63.0,
     "best": 0.8,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 63.0,
     "best": 0.85,
     "hits": 11
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 62.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 65.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are still covered by peritoneum and fat, so two distinct tubular structures are not yet visible. C2: The hepatocystic triangle is just starting to be incised with the hook and no full-thickness windows have been cleared. C3: The lower gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "blood",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are not yet isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       686,
       565,
       983
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       412,
       862,
       752
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       735,
       273,
       998,
       467
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       447,
       119,
       534
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       626,
       656,
       989,
       936
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       672,
       552,
       771,
       641
      ],
      "confidence": 0.64
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.99,
     "hits": 62
    },
    "liver": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.99,
     "hits": 62
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 62
    },
    "fat": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 62
    },
    "blood": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.85,
     "hits": 41
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 31
    },
    "gi_tract": {
     "first": 11.0,
     "last": 65.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 63.0,
     "best": 0.8,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 63.0,
     "best": 0.85,
     "hits": 11
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 62.0,
     "best": 0.75,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 66.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above/medial being touched by the hook) are visible entering the gallbladder neck. C2: A full-thickness window is clearly visible between the lower structure and the upper structure, though the upper window between the artery and cystic plate is still being dissected by the hook. C3: The lower part of the gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is still incomplete.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       683,
       527,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       411,
       847,
       755
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       729,
       254,
       1000,
       467
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       439,
       90,
       510
      ],
      "confidence": 0.72
     },
     {
      "label": "hook",
      "box_2d": [
       524,
       626,
       917,
       958
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       583,
       539,
       731,
       633
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.99,
     "hits": 63
    },
    "liver": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.99,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 63
    },
    "fat": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 63
    },
    "blood": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.85,
     "hits": 41
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 32
    },
    "gi_tract": {
     "first": 11.0,
     "last": 65.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 66.0,
     "best": 0.8,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 66.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 66.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 67.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a small initial opening is made in the peritoneum and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly defined. C2: A small window is beginning to form where the hook is dissecting, but the hepatocystic triangle remains largely covered by connective tissue and peritoneum. C3: The lower third of the gallbladder remains attached to the liver bed with no exposure of the cystic plate.",
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
      "name": "abdominal_wall",
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
      "name": "blood",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct, cystic artery, and cystic plate are still concealed by peritoneum and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       416,
       852,
       743
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       684,
       584,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       621,
       656,
       988,
       939
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       722,
       270,
       1000,
       476
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       440,
       101,
       511
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       576,
       546,
       751,
       653
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 64
    },
    "liver": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 64
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 64
    },
    "fat": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 64
    },
    "blood": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 41
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 33
    },
    "gi_tract": {
     "first": 11.0,
     "last": 65.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 66.0,
     "best": 0.8,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 66.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 68.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Peritoneum and fat still cover the hepatocystic triangle, so two distinct tubular structures entering the gallbladder are not yet skeletonized. C2: One small opening is being made in the triangle, but the hepatocystic triangle is not yet cleared of fat and connective tissue to show two full-thickness windows. C3: The lower part of the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still early; the cystic duct and cystic artery are not yet isolated from surrounding connective tissue and fat.",
    "boxes": [
     {
      "box_2d": [
       0,
       421,
       877,
       765
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       699,
       579,
       987
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       579,
       560,
       780,
       649
      ],
      "label": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "box_2d": [
       741,
       292,
       1000,
       485
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       442,
       117,
       529
      ],
      "label": "grasper",
      "confidence": 0.9
     },
     {
      "box_2d": [
       557,
       651,
       877,
       969
      ],
      "label": "hook",
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.99,
     "hits": 65
    },
    "liver": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.99,
     "hits": 65
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 65
    },
    "fat": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 65
    },
    "blood": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.85,
     "hits": 41
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 34
    },
    "gi_tract": {
     "first": 11.0,
     "last": 65.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 66.0,
     "best": 0.8,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 68.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 66.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
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
    "cvs_evidence": "C1: Early dissection of the peritoneum and connective tissue; no distinct tubular structures (cystic duct or artery) are isolated yet. C2: A small initial opening is being made by the hook, not a full-thickness cleared hepatocystic triangle. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.98
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; tubular structures are still covered by peritoneum and fat.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       694,
       612,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       71,
       846,
       696
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       243,
       628,
       606,
       712
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       583,
       562,
       736,
       654
      ],
      "confidence": 0.77
     },
     {
      "label": "grasper",
      "box_2d": [
       706,
       276,
       995,
       491
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       452,
       102,
       529
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       676,
       630,
       994,
       921
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 66
    },
    "liver": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 66
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 66
    },
    "fat": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 66
    },
    "blood": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.85,
     "hits": 42
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 69.0,
     "best": 0.98,
     "hits": 35
    },
    "gi_tract": {
     "first": 11.0,
     "last": 65.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 66.0,
     "best": 0.8,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 68.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 66.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 70.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.8
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder. C2: Clear windows are dissected between the cystic duct and artery, and between the artery and the cystic plate, with background tissue visible through the lower window. C3: The lower part of the gallbladder is dissected off the liver bed, exposing a window to the cystic plate above the cystic artery.",
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
      "name": "cystic_duct",
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
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
      "confidence": 0.98
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       429,
       836,
       757
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       706,
       597,
       985
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       717,
       280,
       1000,
       492
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       448,
       103,
       524
      ],
      "label": "grasper",
      "confidence": 0.85
     },
     {
      "box_2d": [
       647,
       643,
       986,
       932
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       576,
       555,
       747,
       679
      ],
      "label": "hepatocystic_window",
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.99,
     "hits": 67
    },
    "liver": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.99,
     "hits": 67
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 67
    },
    "fat": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 67
    },
    "blood": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.85,
     "hits": 42
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 36
    },
    "gi_tract": {
     "first": 11.0,
     "last": 65.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 70.0,
     "best": 0.9,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 70.0,
     "best": 0.9,
     "hits": 14
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 70.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 70.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 71.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.75,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder neck. C2: The hepatocystic triangle is dissected with a full-thickness window between the duct and artery, and a dissected trench above the artery toward the cystic plate. C3: A cauterized groove separates the lower gallbladder from the liver bed, partially exposing the cystic plate.",
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
      "confidence": 0.85
     },
     {
      "name": "cystic_artery",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
      "confidence": 0.7
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "connective_tissue",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       705,
       276,
       1000,
       492
      ],
      "confidence": 0.95,
      "label": "grasper"
     },
     {
      "box_2d": [
       0,
       427,
       822,
       754
      ],
      "confidence": 0.92,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       699,
       582,
       984
      ],
      "confidence": 0.94,
      "label": "liver"
     },
     {
      "box_2d": [
       569,
       569,
       727,
       655
      ],
      "confidence": 0.72,
      "label": "hepatocystic_window"
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.99,
     "hits": 68
    },
    "liver": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.99,
     "hits": 68
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 68
    },
    "fat": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 68
    },
    "blood": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.85,
     "hits": 42
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 71.0,
     "best": 0.98,
     "hits": 37
    },
    "gi_tract": {
     "first": 11.0,
     "last": 65.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 71.0,
     "best": 0.9,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 71.0,
     "best": 0.9,
     "hits": 15
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 71.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 71.0,
     "best": 0.85,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 72.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.65,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two band-like connections are forming around the central window, though the upper one is not yet clearly isolated as a distinct tubular cystic artery. C2: A clear full-thickness window is dissected in the lower triangle with background tissue visible, and cautery dissection extends above it toward the liver bed. C3: The lower third of the gallbladder remains attached to the liver bed with only a superficial cautery scoring line rather than a fully exposed cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.75
     },
     {
      "name": "cystic_artery",
      "confidence": 0.5
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
    "reason_if_not": "The upper structure and the cystic plate are still embedded in tissue and not fully dissected.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       678,
       529,
       980
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       427,
       793,
       734
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       668,
       254,
       998,
       488
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       530,
       573,
       684,
       666
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       174,
       629,
       533,
       712
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.99,
     "hits": 69
    },
    "liver": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.99,
     "hits": 69
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 69
    },
    "fat": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 69
    },
    "blood": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.85,
     "hits": 42
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 72.0,
     "best": 0.98,
     "hits": 38
    },
    "gi_tract": {
     "first": 11.0,
     "last": 65.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 72.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 72.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 72.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 71.0,
     "best": 0.85,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 73.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or seen entering the gallbladder yet. C2: Only a superficial opening in the peritoneum and fat is present, with no full-thickness hepatocystic windows created. C3: The lower part of the gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "name": "abdominal_wall",
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are still embedded in peritoneum and fat.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       608,
       190,
       1000,
       473
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       480,
       544,
       632,
       637
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       672,
       508,
       976
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       68,
       1000,
       467
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.99,
     "hits": 70
    },
    "liver": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.99,
     "hits": 70
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 70
    },
    "fat": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 70
    },
    "blood": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.85,
     "hits": 43
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 73.0,
     "best": 0.98,
     "hits": 39
    },
    "gi_tract": {
     "first": 11.0,
     "last": 73.0,
     "best": 0.9,
     "hits": 31
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 72.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 72.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 72.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 71.0,
     "best": 0.85,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 74.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Peritoneum and fat still cover the hepatocystic triangle, so two distinct tubular structures connected to the gallbladder are not yet isolated. C2: Only a single small initial window has been created in the tissue, leaving most of the triangle uncleared. C3: A short vertical peritoneal incision is present along the liver bed, but the lower third of the gallbladder is not yet mobilized off the cystic plate.",
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
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and the cystic duct and artery remain covered by tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       618,
       501,
       974
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       631,
       171,
       999,
       428
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       370,
       735,
       652
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       483,
       504,
       638,
       595
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.99,
     "hits": 71
    },
    "liver": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.99,
     "hits": 71
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 71
    },
    "fat": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 71
    },
    "blood": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.85,
     "hits": 43
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 74.0,
     "best": 0.98,
     "hits": 40
    },
    "gi_tract": {
     "first": 11.0,
     "last": 74.0,
     "best": 0.9,
     "hits": 32
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 72.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 72.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 71.0,
     "best": 0.85,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 75.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct on the left and cystic artery in the center) appear to run toward the gallbladder, with the hook dissecting tissue near the artery. C2: One clear full-thickness window is visible between the cystic duct and artery, while the space between the artery and the cystic plate is partially dissected at the top. C3: The cystic plate is exposed superiorly, but the lower portion of the gallbladder is not yet fully separated into a hanging gallbladder configuration.",
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
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.7
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
      "name": "abdominal_wall",
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the posterior window between the cystic artery and cystic plate is still in progress.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       617,
       519,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       368,
       751,
       617
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       141,
       560,
       482,
       637
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       496,
       506,
       646,
       589
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       595,
       650,
       988,
       949
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       648,
       175,
       1000,
       427
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.99,
     "hits": 72
    },
    "liver": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.99,
     "hits": 72
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 72
    },
    "fat": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 72
    },
    "blood": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.85,
     "hits": 43
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 75.0,
     "best": 0.98,
     "hits": 41
    },
    "gi_tract": {
     "first": 11.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 33
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 18
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 76.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.08,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized into two distinct tubular structures entering the gallbladder. C2: The hook is actively opening a single small window in the peritoneum, and the hepatocystic triangle remains largely covered in fat and connective tissue. C3: Only a narrow vertical scoring line is present along the liver margin, and the lower gallbladder is not mobilized off the cystic plate.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.92
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "blood",
      "confidence": 0.7
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage and the cystic duct and artery are not yet exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       616,
       505,
       973
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       69,
       759,
       613
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       635,
       172,
       996,
       430
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       597,
       614,
       993,
       936
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       488,
       508,
       645,
       595
      ],
      "confidence": 0.91
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       123,
       563,
       485,
       637
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.99,
     "hits": 73
    },
    "liver": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.99,
     "hits": 73
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 73
    },
    "fat": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 73
    },
    "blood": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 44
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 76.0,
     "best": 0.98,
     "hits": 42
    },
    "gi_tract": {
     "first": 11.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 33
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 76.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 77.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly discernible as two distinct tubular structures entering the gallbladder. C2: A small initial opening is being made by the hook, but the hepatocystic triangle remains largely covered by peritoneum and fat without full-thickness windows. C3: The peritoneum along the liver bed is only partially incised, and the lower third of the gallbladder is not yet mobilized off the cystic plate.",
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
      "confidence": 0.9
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
    "reason_if_not": "Early stage of dissection; the hepatocystic triangle is still covered by peritoneum and adipose tissue, preventing identification of the cystic duct and artery.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       641,
       178,
       1000,
       440
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       648,
       575,
       996,
       888
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       373,
       768,
       642
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       626,
       528,
       970
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       515,
       516,
       687,
       593
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.99,
     "hits": 74
    },
    "liver": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.99,
     "hits": 74
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 74
    },
    "fat": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 74
    },
    "blood": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.85,
     "hits": 44
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 77.0,
     "best": 0.98,
     "hits": 43
    },
    "gi_tract": {
     "first": 11.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 33
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 76.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 78.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: A single small window is being dissected with the hook, but the hepatocystic triangle is still mostly covered by fat and connective tissue. C3: The lower portion of the gallbladder remains attached to the liver bed with no exposed cystic plate below the inferior margin.",
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
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.8
     },
     {
      "name": "blood",
      "confidence": 0.7
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and the cystic structures are still obscured by peritoneum and fat.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       640,
       522,
       975
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       376,
       744,
       629
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       607,
       180,
       1000,
       453
      ],
      "confidence": 0.99
     },
     {
      "label": "irrigator",
      "box_2d": [
       599,
       586,
       1000,
       930
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       486,
       544,
       626,
       611
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.99,
     "hits": 75
    },
    "liver": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.99,
     "hits": 75
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 75
    },
    "fat": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 75
    },
    "blood": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.85,
     "hits": 45
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 44
    },
    "gi_tract": {
     "first": 11.0,
     "last": 78.0,
     "best": 0.9,
     "hits": 34
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 78.0,
     "best": 0.9,
     "hits": 20
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
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
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder yet. C2: The hepatocystic triangle is still covered by peritoneum and fat, with the hook only just beginning to open the tissue and no full-thickness windows present. C3: Only a small initial peritoneal incision has been made near the liver bed, so the lower gallbladder is not separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the cystic duct and artery remain buried in peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       366,
       698,
       679
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       569,
       449,
       967
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       588,
       165,
       1000,
       439
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       486,
       564,
       917,
       967
      ],
      "label": "hook",
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.99,
     "hits": 76
    },
    "liver": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.99,
     "hits": 76
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 76
    },
    "fat": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 76
    },
    "blood": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.85,
     "hits": 45
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 79.0,
     "best": 0.98,
     "hits": 45
    },
    "gi_tract": {
     "first": 11.0,
     "last": 79.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 78.0,
     "best": 0.9,
     "hits": 20
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 80.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not yet dissected out from the surrounding fat and peritoneum. C2: The hepatocystic triangle is only just beginning to be opened by the hook and does not have full-thickness windows cleared of fat and connective tissue. C3: The lower part of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "name": "abdominal_wall",
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and critical structures are still covered by peritoneum and fat.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       634,
       473,
       975
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       375,
       718,
       650
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       611,
       185,
       1000,
       451
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       523,
       607,
       888,
       966
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       91,
       591,
       444,
       669
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       471,
       539,
       607,
       642
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.99,
     "hits": 77
    },
    "liver": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.99,
     "hits": 77
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 77
    },
    "fat": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 77
    },
    "blood": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.85,
     "hits": 45
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 80.0,
     "best": 0.98,
     "hits": 46
    },
    "gi_tract": {
     "first": 11.0,
     "last": 80.0,
     "best": 0.9,
     "hits": 36
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 78.0,
     "best": 0.9,
     "hits": 20
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 81.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (cystic duct) is clearly outlined along the bottom, while the upper tissue remains undissected. C2: A single window is being opened with the hook, but the hepatocystic triangle is not yet fully cleared to show two windows. C3: The lower part of the gallbladder is still attached to the liver bed and the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.8
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       637,
       473,
       972
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       377,
       739,
       627
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       611,
       505,
       853,
       920
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       461,
       525,
       645,
       674
      ],
      "confidence": 0.82
     },
     {
      "label": "hook",
      "box_2d": [
       463,
       610,
       803,
       981
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       619,
       187,
       1000,
       452
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.99,
     "hits": 78
    },
    "liver": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.99,
     "hits": 78
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 78
    },
    "fat": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 78
    },
    "blood": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.85,
     "hits": 45
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 81.0,
     "best": 0.98,
     "hits": 47
    },
    "gi_tract": {
     "first": 11.0,
     "last": 80.0,
     "best": 0.9,
     "hits": 36
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 21
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 82.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the inferior border (likely cystic duct) is partially delineated, while the second tubular structure (cystic artery) is not yet clearly separated or visible as a distinct tube entering the gallbladder. C2: A single small window is being created in the hepatocystic triangle with the hook, so the triangle is not yet fully cleared to show two full-thickness windows. C3: The lower part of the gallbladder remains largely attached to the liver bed with no clear exposure of the cystic plate along the entire inferior margin.",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
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
      "name": "gi_tract",
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still early; only one small window is forming and the cystic artery and cystic plate are not yet clearly exposed.",
    "boxes": [
     {
      "box_2d": [
       0,
       396,
       680,
       713
      ],
      "confidence": 0.94,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       656,
       436,
       971
      ],
      "confidence": 0.88,
      "label": "liver"
     },
     {
      "box_2d": [
       426,
       553,
       563,
       646
      ],
      "confidence": 0.77,
      "label": "hepatocystic_window"
     },
     {
      "box_2d": [
       550,
       169,
       1000,
       465
      ],
      "confidence": 0.97,
      "label": "grasper"
     },
     {
      "box_2d": [
       498,
       628,
       847,
       976
      ],
      "confidence": 0.95,
      "label": "hook"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.99,
     "hits": 79
    },
    "liver": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.99,
     "hits": 79
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 79
    },
    "fat": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 79
    },
    "blood": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.85,
     "hits": 45
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 82.0,
     "best": 0.98,
     "hits": 48
    },
    "gi_tract": {
     "first": 11.0,
     "last": 82.0,
     "best": 0.9,
     "hits": 37
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 82.0,
     "best": 0.9,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 82.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 83.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Only one clear tubular structure (likely cystic duct) is seen along the inferior edge, while a second tubular structure (cystic artery) is not clearly isolated. C2: A single full-thickness window is visible above the inferior tubular structure, but the upper triangle lacks a second distinct window between artery and cystic plate. C3: The gallbladder is partially separated from the liver bed along the upper portion, exposing some of the cystic plate, though dissection at the base is still ongoing.",
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
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
      "confidence": 0.7
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
    "reason_if_not": "The cystic artery is not yet clearly isolated as a distinct second tubular structure entering the gallbladder.",
    "boxes": [
     {
      "box_2d": [
       0,
       420,
       718,
       682
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       608,
       502,
       978
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       558,
       204,
       1000,
       489
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       595,
       663,
       942,
       948
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       468,
       575,
       637,
       657
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     },
     {
      "box_2d": [
       75,
       621,
       607,
       714
      ],
      "label": "cystic_plate",
      "confidence": 0.82
     },
     {
      "box_2d": [
       602,
       476,
       729,
       692
      ],
      "label": "cystic_duct",
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.99,
     "hits": 80
    },
    "liver": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.99,
     "hits": 80
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 80
    },
    "fat": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 80
    },
    "blood": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.85,
     "hits": 45
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 83.0,
     "best": 0.98,
     "hits": 49
    },
    "gi_tract": {
     "first": 11.0,
     "last": 83.0,
     "best": 0.9,
     "hits": 38
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 83.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 83.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 83.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 84.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection of the hepatocystic triangle is at an early stage, and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly identifiable. C2: A small window is being created with the hook, but the triangle is not yet cleared of fat and connective tissue to show full-thickness windows between the duct, artery, and plate. C3: Peritoneum has been scored along the liver bed, but the lower third of the gallbladder is not yet separated from the cystic plate.",
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
      "name": "abdominal_wall",
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; cystic duct and artery are still embedded in peritoneum and fat.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       624,
       466,
       986
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       368,
       703,
       694
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       569,
       188,
       1000,
       475
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       546,
       614,
       922,
       960
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       458,
       564,
       615,
       643
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.99,
     "hits": 81
    },
    "liver": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.99,
     "hits": 81
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 81
    },
    "fat": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 81
    },
    "blood": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.85,
     "hits": 45
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 84.0,
     "best": 0.98,
     "hits": 50
    },
    "gi_tract": {
     "first": 11.0,
     "last": 84.0,
     "best": 0.9,
     "hits": 39
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 83.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 83.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 83.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 85.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only one thick band of tissue is visible at the lower border of the triangle, and two distinct tubular structures are not yet isolated. C2: A single small window is being opened by the hook, not two clear full-thickness windows. C3: Some dissection along the liver bed is visible superiorly, but the lower part of the gallbladder is not fully separated to clearly expose the cystic plate.",
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
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "The hepatocystic triangle is still covered in fat and connective tissue; the cystic duct and cystic artery are not yet distinctly isolated as two separate tubular structures.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       81,
       682,
       650
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       638,
       487,
       976
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       542,
       176,
       1000,
       480
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       524,
       646,
       856,
       966
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       468,
       573,
       592,
       663
      ],
      "confidence": 0.77
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       89,
       618,
       513,
       712
      ],
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.99,
     "hits": 82
    },
    "liver": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.99,
     "hits": 82
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 82
    },
    "fat": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 82
    },
    "blood": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 46
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 51
    },
    "gi_tract": {
     "first": 11.0,
     "last": 85.0,
     "best": 0.9,
     "hits": 40
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 83.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 85.0,
     "best": 0.9,
     "hits": 24
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 86.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the early outline of the cystic duct is being dissected, and two distinct tubular structures entering the gallbladder are not yet visible. C2: The hook is creating an initial opening in the hepatocystic triangle, but the triangle is not cleared of fat and connective tissue to show two full-thickness windows. C3: The gallbladder remains largely attached to the liver bed with no significant exposure of the cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.6
     },
     {
      "name": "cystic_duct",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in its early stages and the cystic duct and artery are still covered by peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       368,
       693,
       742
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       643,
       412,
       954
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       554,
       184,
       1000,
       471
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       527,
       640,
       891,
       964
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       455,
       567,
       606,
       672
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.99,
     "hits": 83
    },
    "liver": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.99,
     "hits": 83
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 83
    },
    "fat": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 83
    },
    "blood": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 46
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 86.0,
     "best": 0.98,
     "hits": 52
    },
    "gi_tract": {
     "first": 11.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 41
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 24
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 87.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the cystic duct is clearly delineated as a tubular structure; the cystic artery is still embedded in tissue above the hook. C2: The hepatocystic triangle is still filled with undissected tissue and no full-thickness windows are visible. C3: The lower gallbladder remains attached to the liver bed without exposure of the cystic plate.",
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
      "confidence": 0.9
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
      "name": "gi_tract",
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet isolated.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       179,
       131,
       990,
       584
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       326,
       775,
       517,
       982
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       365,
       427,
       747
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       396,
       808,
       972
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.99,
     "hits": 84
    },
    "liver": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.99,
     "hits": 84
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 84
    },
    "fat": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 84
    },
    "blood": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 46
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 87.0,
     "best": 0.98,
     "hits": 53
    },
    "gi_tract": {
     "first": 11.0,
     "last": 87.0,
     "best": 0.9,
     "hits": 42
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 87.0,
     "best": 0.9,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 24
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 88.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.25
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) is visible at the base of the window and the hook is dissecting an upper structure (likely cystic artery), though the upper structure is not yet fully defined as tubular. C2: One clear full-thickness window is visible between the lower structure and the tissue held by the hook, but the second window above it is not yet completely cleared. C3: Peritoneum has been scored along the liver attachment above the dissection site, but the lower third of the gallbladder is not yet mobilized off the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.96
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
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the upper hepatocystic triangle and lower gallbladder mobilization off the cystic plate are still in progress.",
    "boxes": [
     {
      "box_2d": [
       667,
       303,
       1000,
       523
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       499,
       719,
       743,
       978
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       381,
       781,
       712
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       663,
       492,
       978
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       498,
       606,
       661,
       696
      ],
      "label": "hepatocystic_window",
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.99,
     "hits": 85
    },
    "liver": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.99,
     "hits": 85
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 85
    },
    "fat": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 85
    },
    "blood": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.85,
     "hits": 46
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 88.0,
     "best": 0.98,
     "hits": 54
    },
    "gi_tract": {
     "first": 11.0,
     "last": 87.0,
     "best": 0.9,
     "hits": 42
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 88.0,
     "best": 0.9,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 88.0,
     "best": 0.9,
     "hits": 25
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 88.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 89.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only a single lower band/structure is starting to be defined below the window, while the upper tissue remains attached and undifferentiated into a second distinct tubular structure. C2: A single full-thickness window is open with background visible through it, but the upper part of the hepatocystic triangle is not yet cleared to form the second window. C3: The gallbladder remains largely attached to the liver bed with only a small focal cauterized line, so the cystic plate is not exposed along the whole inferior margin.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
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
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       641,
       496,
       986
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       426,
       767,
       702
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       655,
       308,
       1000,
       526
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       515,
       694,
       785,
       975
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       486,
       606,
       647,
       718
      ],
      "label": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "box_2d": [
       507,
       687,
       843,
       967
      ],
      "label": "cystic_duct",
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.99,
     "hits": 86
    },
    "liver": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.99,
     "hits": 86
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 86
    },
    "fat": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 86
    },
    "blood": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.85,
     "hits": 46
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 55
    },
    "gi_tract": {
     "first": 11.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 43
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 26
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 88.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 90.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and artery are not yet skeletonized into two distinct tubular structures entering the gallbladder, as a broad sheet of peritoneum/connective tissue still covers the left side of the triangle. C2: Although a small full-thickness window is seen lower down, the upper hepatocystic triangle is not cleared to show two distinct windows between duct, artery, and cystic plate. C3: While some dissection on the liver bed is beginning near the hook, the lower third of the gallbladder is not yet fully separated from the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
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
    "reason_if_not": "The hepatocystic triangle is still largely covered by peritoneum and connective tissue, preventing clear identification of the cystic duct and cystic artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       836,
       626
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       636,
       507,
       977
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       732,
       323,
       1000,
       503
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       454,
       663,
       724,
       980
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       183,
       610,
       520,
       683
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       546,
       576,
       732,
       711
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       549,
       574,
       873,
       964
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.99,
     "hits": 87
    },
    "liver": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.99,
     "hits": 87
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 87
    },
    "fat": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 87
    },
    "blood": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 55
    },
    "gi_tract": {
     "first": 11.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 43
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 90.0,
     "best": 0.9,
     "hits": 27
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 88.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 91.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: A lower tubular structure and a central band are visible, with an upper peritoneal incision, so two distinct tubular structures entering the gallbladder are not yet fully skeletonized. C2: One clear full-thickness window is dissected below the hook, while the upper space toward the cystic plate is only superficially incised. C3: The peritoneum along the liver bed has just been scored with the hook, and the lower gallbladder is not yet elevated off the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.75
     },
     {
      "name": "cystic_artery",
      "confidence": 0.6
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
    "reason_if_not": "The upper portion of the hepatocystic triangle and the cystic plate are still covered by peritoneum and connective tissue, with only one lower window completed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       354,
       824,
       713
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       629,
       516,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       474,
       646,
       776,
       979
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       711,
       303,
       1000,
       495
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       387,
       126,
       451
      ],
      "confidence": 0.75
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       542,
       564,
       720,
       666
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.99,
     "hits": 88
    },
    "liver": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.99,
     "hits": 88
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 88
    },
    "fat": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 88
    },
    "blood": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.85,
     "hits": 48
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 91.0,
     "best": 0.98,
     "hits": 56
    },
    "gi_tract": {
     "first": 11.0,
     "last": 91.0,
     "best": 0.9,
     "hits": 44
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 91.0,
     "best": 0.9,
     "hits": 20
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 91.0,
     "best": 0.9,
     "hits": 28
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 91.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 92.0,
   "label": {
    "cvs": {
     "c1": 0.12,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one partial tubular contour is emerging near the bottom of the window, and two distinct tubular structures entering the gallbladder are not yet skeletonized. C2: A single small window is opened in the peritoneum, so the hepatocystic triangle is not yet fully cleared of tissue. C3: The peritoneum along the liver bed is just beginning to be incised by the hook, and the lower gallbladder is not yet mobilized off the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.96
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
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct and cystic artery are not yet skeletonized as two distinct tubular structures, and the cystic plate is not exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       372,
       814,
       700
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       638,
       468,
       980
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       437,
       680,
       687,
       980
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       701,
       314,
       999,
       506
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       535,
       581,
       710,
       671
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       579,
       712,
       878,
       963
      ],
      "confidence": 0.82
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       160,
       614,
       510,
       693
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.99,
     "hits": 89
    },
    "liver": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.99,
     "hits": 89
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 89
    },
    "fat": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 89
    },
    "blood": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.85,
     "hits": 48
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 92.0,
     "best": 0.98,
     "hits": 57
    },
    "gi_tract": {
     "first": 11.0,
     "last": 92.0,
     "best": 0.9,
     "hits": 45
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 91.0,
     "best": 0.9,
     "hits": 20
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 92.0,
     "best": 0.9,
     "hits": 29
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 91.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 93.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: A lower tubular structure (cystic duct) and an upper structure (cystic artery, being dissected by the hook) are visible entering the gallbladder. C2: One full-thickness window is visible between the lower and upper structures, while the second window between the upper structure and the cystic plate is currently being created by the hook. C3: Only a limited portion of the lower gallbladder has been mobilized off the liver bed, so the cystic plate is not fully exposed along the entire inferior margin.",
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
      "name": "cystic_duct",
      "confidence": 0.85
     },
     {
      "name": "cystic_artery",
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
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
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the upper window and lower gallbladder off the cystic plate is still in progress.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       368,
       807,
       708
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       626,
       513,
       978
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       692,
       308,
       998,
       505
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       520,
       666,
       856,
       970
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       542,
       570,
       718,
       686
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.99,
     "hits": 90
    },
    "liver": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.99,
     "hits": 90
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 90
    },
    "fat": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.85,
     "hits": 48
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 93.0,
     "best": 0.98,
     "hits": 58
    },
    "gi_tract": {
     "first": 11.0,
     "last": 93.0,
     "best": 0.9,
     "hits": 46
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 93.0,
     "best": 0.9,
     "hits": 21
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 93.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 93.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 93.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
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
    "cvs_evidence": "C1: Only the peritoneum over the hepatocystic triangle is being incised; no tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder yet. C2: The hepatocystic triangle is still covered in connective tissue and fat with only a superficial electrocautery incision and no full-thickness windows. C3: A short vertical incision has been made along the peritoneal reflection near the liver bed, but the lower gallbladder is not separated to expose the cystic plate.",
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
    "reason_if_not": "Dissection is at a very early stage; the cystic duct, cystic artery, and cystic plate have not yet been dissected out of the surrounding peritoneum and fat.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       638,
       547,
       966
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       362,
       825,
       680
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       717,
       301,
       1000,
       500
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       396,
       137,
       459
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       588,
       633,
       946,
       949
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.99,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.99,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 91
    },
    "blood": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.85,
     "hits": 48
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 94.0,
     "best": 0.98,
     "hits": 59
    },
    "gi_tract": {
     "first": 11.0,
     "last": 94.0,
     "best": 0.9,
     "hits": 47
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 93.0,
     "best": 0.9,
     "hits": 21
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 93.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 93.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 93.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 95.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.25
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) is separated by a window, while an upper band of tissue containing the artery is being dissected by the hook, making the two-structure appearance partially emerging. C2: One clear full-thickness window is visible below the hook, while the upper space toward the cystic plate is just beginning to be opened. C3: A vertical peritoneal incision is started along the liver bed, but the lower third of the gallbladder is not yet separated to expose the full cystic plate.",
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
      "confidence": 0.75
     },
     {
      "name": "cystic_artery",
      "confidence": 0.55
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is still in progress.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       369,
       807,
       663
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       626,
       443,
       980
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       515,
       574,
       705,
       683
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       549,
       672,
       894,
       968
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       403,
       649,
       656,
       986
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       702,
       290,
       1000,
       501
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       397,
       127,
       452
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.99,
     "hits": 92
    },
    "liver": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.99,
     "hits": 92
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 92
    },
    "fat": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 92
    },
    "blood": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.85,
     "hits": 48
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 95.0,
     "best": 0.98,
     "hits": 60
    },
    "gi_tract": {
     "first": 11.0,
     "last": 94.0,
     "best": 0.9,
     "hits": 47
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 95.0,
     "best": 0.9,
     "hits": 22
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.9,
     "hits": 31
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 95.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 93.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 96.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: One window is opened revealing a structure (likely cystic duct) below and another potential structure above near the hook, but two clear tubular structures connected to the gallbladder are not yet fully skeletonized. C2: One full-thickness window is visible in the lower hepatocystic triangle, while the upper window is still being dissected by the hook. C3: The lower gallbladder remains largely attached to the liver bed with only early superficial dissection along the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
     },
     {
      "name": "cystic_artery",
      "confidence": 0.55
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete; only one window is opened and the second structure is still surrounded by connective tissue.",
    "boxes": [
     {
      "box_2d": [
       696,
       274,
       1000,
       496
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       410,
       655,
       682,
       982
      ],
      "label": "hook",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       636,
       421,
       977
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       360,
       804,
       764
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       528,
       568,
       705,
       682
      ],
      "label": "hepatocystic_window",
      "confidence": 0.77
     },
     {
      "box_2d": [
       579,
       717,
       856,
       965
      ],
      "label": "cystic_duct",
      "confidence": 0.71
     },
     {
      "box_2d": [
       170,
       590,
       439,
       725
      ],
      "label": "cystic_plate",
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.99,
     "hits": 93
    },
    "liver": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.99,
     "hits": 93
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 93
    },
    "fat": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 93
    },
    "blood": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.85,
     "hits": 48
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 96.0,
     "best": 0.98,
     "hits": 61
    },
    "gi_tract": {
     "first": 11.0,
     "last": 94.0,
     "best": 0.9,
     "hits": 47
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 96.0,
     "best": 0.9,
     "hits": 22
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 96.0,
     "best": 0.9,
     "hits": 32
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 96.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 93.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 97.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are largely isolated and seen coursing toward the gallbladder neck. C2: A clear full-thickness window is visible between the cystic duct and artery, though the upper window between the artery and liver bed is still being dissected with the hook. C3: The lower third of the gallbladder is not yet adequately separated from the cystic plate along its entire inferior margin.",
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
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and separation of the lower gallbladder from the cystic plate are incomplete.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       619,
       347,
       978
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       359,
       792,
       725
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       503,
       584,
       667,
       667
      ],
      "confidence": 0.86
     },
     {
      "label": "grasper",
      "box_2d": [
       677,
       287,
       1000,
       506
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       292,
       689,
       500,
       981
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.99,
     "hits": 94
    },
    "liver": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.99,
     "hits": 94
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 94
    },
    "fat": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 94
    },
    "blood": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.85,
     "hits": 49
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 96.0,
     "best": 0.98,
     "hits": 61
    },
    "gi_tract": {
     "first": 11.0,
     "last": 94.0,
     "best": 0.9,
     "hits": 47
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 33
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 93.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 98.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and a putative upper structure are partially outlined by a window, though the upper structure is masih embedded in connective tissue. C2: One clear full-thickness window is visible below the hook, while the upper dissection toward the cystic plate is still in progress and not yet a full-thickness window. C3: The lower gallbladder remains largely attached to the liver bed and a hanging gallbladder above an exposed cystic plate is not yet achieved.",
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
      "name": "abdominal_wall",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete, preventing definitive confirmation of both tubular structures and exclusion of additional structures.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       360,
       804,
       706
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       630,
       415,
       985
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       521,
       564,
       710,
       707
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       689,
       291,
       1000,
       495
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       396,
       649,
       648,
       983
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.99,
     "hits": 95
    },
    "liver": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.99,
     "hits": 95
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 95
    },
    "fat": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 95
    },
    "blood": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.85,
     "hits": 49
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 98.0,
     "best": 0.98,
     "hits": 62
    },
    "gi_tract": {
     "first": 11.0,
     "last": 98.0,
     "best": 0.9,
     "hits": 48
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 98.0,
     "best": 0.9,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 98.0,
     "best": 0.9,
     "hits": 34
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 93.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 99.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: One window is being formed, creating a lower bridge of tissue (likely containing the cystic duct), while a second upper tubular structure (cystic artery) is not yet clearly isolated from the surrounding tissue. C2: A single full-thickness window is visible in the lower hepatocystic triangle with background visible through it, but the upper part of the triangle is still being dissected by the hook. C3: An incision has been made along the peritoneal attachment to the liver bed, but the lower third of the gallbladder is not yet elevated off the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
     },
     {
      "name": "cystic_plate",
      "confidence": 0.55
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress; individual tubular structures (cystic duct and artery) are not yet fully skeletonized and separated from the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       642,
       498,
       978
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       373,
       780,
       684
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       669,
       307,
       998,
       506
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       538,
       666,
       834,
       972
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       510,
       582,
       679,
       681
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.99,
     "hits": 96
    },
    "liver": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.99,
     "hits": 96
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 96
    },
    "fat": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 96
    },
    "blood": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.85,
     "hits": 49
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 99.0,
     "best": 0.98,
     "hits": 63
    },
    "gi_tract": {
     "first": 11.0,
     "last": 98.0,
     "best": 0.9,
     "hits": 48
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 99.0,
     "best": 0.9,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 100.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one clear tubular structure (likely the cystic duct) is dissected on the right, while the second tubular structure is not clearly isolated or obscured by the grasper. C2: There is a dissected space visible to the left of the tubular structure, but full-thickness windows between two distinct structures and the cystic plate are not established. C3: The lower part of the gallbladder is not adequately separated from the liver bed to expose the cystic plate along the inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "gallbladder",
      "confidence": 0.8
     },
     {
      "name": "cystic_duct",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
      "confidence": 0.9
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
    "reason_if_not": "The grasper shaft heavily occludes the left side of the dissection area, and only one tubular structure is clearly isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       375,
       836,
       963
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       107,
       992,
       710
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       274,
       753,
       467,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       790,
       666,
       981
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       622,
       323,
       839
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.99,
     "hits": 96
    },
    "liver": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.99,
     "hits": 96
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 96
    },
    "fat": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 96
    },
    "blood": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 49
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 100.0,
     "best": 0.98,
     "hits": 63
    },
    "gi_tract": {
     "first": 11.0,
     "last": 100.0,
     "best": 0.9,
     "hits": 48
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 100.0,
     "best": 0.9,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 101.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly visible entering the gallbladder as the hepatocystic triangle is mostly out of view and obscured by the grasper shaft. C2: Full-thickness windows through the hepatocystic triangle are not visible in this frame. C3: The hook is actively dissecting near the liver bed, but the lower gallbladder is not fully separated and the cystic plate is not fully exposed along the inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "abdominal_wall",
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
      "name": "blood",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
     },
     {
      "name": "gallbladder",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is partially out of the upper-right frame and occluded by the grasper shaft, with no clear tubular structures isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       252,
       382,
       847,
       948
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       6,
       697,
       201,
       948
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.99,
     "hits": 96
    },
    "liver": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.99,
     "hits": 96
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 96
    },
    "fat": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 96
    },
    "blood": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.85,
     "hits": 49
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 101.0,
     "best": 0.98,
     "hits": 63
    },
    "gi_tract": {
     "first": 11.0,
     "last": 101.0,
     "best": 0.9,
     "hits": 48
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 100.0,
     "best": 0.9,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 102.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.03
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or cystic artery) are isolated or seen entering the gallbladder. C2: The hepatocystic triangle is still early in dissection and lacks any full-thickness windows. C3: The lower portion of the gallbladder remains attached to the liver bed without full exposure of the cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.8
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
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
    "reason_if_not": "The hepatocystic triangle is not yet dissected; the cystic duct and cystic artery are obscured by fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       663,
       207,
       946
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       70,
       788,
       575
      ],
      "label": "grasper",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       319,
       856,
       909
      ],
      "label": "liver",
      "confidence": 0.93
     },
     {
      "box_2d": [
       174,
       752,
       725,
       982
      ],
      "label": "gallbladder",
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.99,
     "hits": 97
    },
    "liver": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.99,
     "hits": 97
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 97
    },
    "fat": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 97
    },
    "blood": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.85,
     "hits": 50
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.98,
     "hits": 64
    },
    "gi_tract": {
     "first": 11.0,
     "last": 102.0,
     "best": 0.9,
     "hits": 49
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 100.0,
     "best": 0.9,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 103.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible; the camera is focused on the gallbladder fundus and early dissection of the peritoneum. C2: The hepatocystic triangle is not visible or cleared, with no windows formed. C3: The lower part of the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.85
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in a very early stage and the hepatocystic triangle structures are not yet exposed or visible in the frame.",
    "boxes": [
     {
      "box_2d": [
       188,
       260,
       940,
       882
      ],
      "label": "liver"
     },
     {
      "box_2d": [
       211,
       752,
       842,
       981
      ],
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       67,
       560,
       512
      ],
      "label": "grasper"
     },
     {
      "box_2d": [
       0,
       532,
       238,
       968
      ],
      "label": "irrigator"
     },
     {
      "box_2d": [
       0,
       488,
       377,
       749
      ],
      "label": "cystic_plate"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.99,
     "hits": 98
    },
    "liver": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.99,
     "hits": 98
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 98
    },
    "fat": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 98
    },
    "blood": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.85,
     "hits": 51
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.98,
     "hits": 64
    },
    "gi_tract": {
     "first": 11.0,
     "last": 103.0,
     "best": 0.9,
     "hits": 49
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 100.0,
     "best": 0.9,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
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
    "cvs_evidence": "C1 is not achieved as two distinct tubular structures entering the gallbladder are not visible. C2 is not achieved because the hepatocystic triangle is largely obscured by the gallbladder body and instruments, with no clear windows visible. C3 is not achieved as the lower part of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.85
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
      "name": "gi_tract",
      "confidence": 0.8
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
    "reason_if_not": "The hepatocystic triangle is occluded by the gallbladder body and the dissecting instruments, preventing clear identification of the cystic duct and artery.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       47,
       579,
       363,
       980
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       182,
       267,
       947,
       903
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       327,
       754,
       829,
       983
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       68,
       619,
       521
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.99,
     "hits": 98
    },
    "liver": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.99,
     "hits": 98
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 98
    },
    "fat": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 98
    },
    "blood": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.85,
     "hits": 51
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.98,
     "hits": 64
    },
    "gi_tract": {
     "first": 11.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 49
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 100.0,
     "best": 0.9,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 105.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) can be seen entering the gallbladder as the camera is focused on separating the peritoneum near the gallbladder neck/body. C2: The hepatocystic triangle is not in view and no full-thickness windows are visible. C3: The gallbladder remains largely attached to the liver bed with only a small initial peritoneal incision visible.",
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
    "reason_if_not": "The hepatocystic triangle has not been dissected to expose the cystic duct and artery.",
    "boxes": [
     {
      "box_2d": [
       238,
       277,
       945,
       926
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       33,
       532,
       338,
       975
      ],
      "label": "hook",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       68,
       629,
       525
      ],
      "label": "grasper",
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.99,
     "hits": 99
    },
    "liver": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.99,
     "hits": 99
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 99
    },
    "fat": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 99
    },
    "blood": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.85,
     "hits": 52
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.98,
     "hits": 64
    },
    "gi_tract": {
     "first": 11.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 49
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 100.0,
     "best": 0.9,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 106.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not visible as dissection is ongoing at the top of the frame. C2: The hepatocystic triangle is not cleared, and no full-thickness windows are visible. C3: The lower part of the gallbladder is not elevated off the liver bed to expose the cystic plate.",
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
      "confidence": 0.8
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "smoke",
    "can_confirm_anatomy": false,
    "reason_if_not": "The camera view is dominated by the liver, while the hepatocystic triangle at the top of the frame is still undissected and partially obscured by the hook and light smoke.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       0,
       597,
       269,
       965
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       67,
       608,
       476
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       277,
       951,
       927
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.99,
     "hits": 99
    },
    "liver": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.99,
     "hits": 99
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.95,
     "hits": 99
    },
    "fat": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.95,
     "hits": 99
    },
    "blood": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.85,
     "hits": 52
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.98,
     "hits": 64
    },
    "gi_tract": {
     "first": 11.0,
     "last": 106.0,
     "best": 0.9,
     "hits": 49
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 100.0,
     "best": 0.9,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 107.0,
   "label": {
    "cvs": {
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No dissected tubular structures (cystic duct or artery) are visible entering the gallbladder as peritoneum is just being incised. C2: The hepatocystic triangle is completely covered by peritoneum and connective tissue with no windows dissected. C3: The gallbladder Remains completely attached to the liver bed with the hook just starting peritoneal dissection along the margin.",
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
    "reason_if_not": "Dissection has just begun; the hepatocystic triangle is still covered by intact peritoneum and fat, so the cystic duct and artery are not yet exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       193,
       292,
       935,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       442,
       524,
       979
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       414,
       590,
       833,
       977
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.99,
     "hits": 100
    },
    "liver": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.99,
     "hits": 100
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 100
    },
    "fat": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 100
    },
    "blood": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.85,
     "hits": 52
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.98,
     "hits": 64
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.9,
     "hits": 50
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 100.0,
     "best": 0.9,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 108.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not visible in this close-up view of the gallbladder-liver junction. C2: The hepatocystic triangle and its windows are not in the field of view. C3: A small cavity is dissected between the gallbladder and the liver bed, but the cystic plate is not fully exposed along the inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "gallbladder",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
     },
     {
      "name": "fat",
      "confidence": 0.7
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
    "reason_if_not": "No tubular structures or full hepatocystic triangle windows are visible in this close-up frame.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       207,
       303,
       957,
       947
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       247,
       664,
       521,
       982
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       67,
       719,
       514
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       550,
       318,
       819
      ],
      "confidence": 0.68
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       755,
       264,
       964
      ],
      "confidence": 0.58
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.99,
     "hits": 101
    },
    "liver": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.99,
     "hits": 101
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 101
    },
    "fat": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 101
    },
    "blood": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.85,
     "hits": 52
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.98,
     "hits": 64
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.9,
     "hits": 50
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 100.0,
     "best": 0.9,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 109.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one vertical peritoneal/tissue structure is skeletonized on the left and two distinct tubular structures (cystic duct and artery) are not yet isolated. C2: One small window is opened at the bottom center, but the upper hepatocystic triangle remains covered in connective tissue without a second window. C3: The inferior margin of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
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
      "name": "blood",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct, cystic artery, and cystic plate are not yet fully isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       396,
       520,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       18,
       298,
       1000,
       626
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       331,
       222,
       412
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       947,
       376,
       1000,
       451
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       696,
       537,
       935,
       658
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.99,
     "hits": 102
    },
    "liver": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.99,
     "hits": 102
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 102
    },
    "fat": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 102
    },
    "blood": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.85,
     "hits": 53
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.98,
     "hits": 64
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.9,
     "hits": 50
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 100.0,
     "best": 0.9,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.9,
     "hits": 36
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 110.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two main tubular-like bands (likely cystic duct and artery) are outlined entering the lower gallbladder, though the artery is still embedded in tissue being dissected by the hook. C2: One clear full-thickness window is visible between the lower structure and the upper band, while the upper space toward the cystic plate is still being opened by the hook and does not yet show a clear second full-thickness window. C3: The peritoneum along the lower liver bed is incised and some cystic plate is exposed, but the lower gallbladder is not yet fully separated from the liver bed.",
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
      "name": "cystic_plate",
      "confidence": 0.7
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
    "reason_if_not": "Dissection of the upper window and lower gallbladder off the cystic plate is still in progress.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       68,
       1000,
       440
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       661,
       668,
       983
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       347,
       989,
       683
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       386,
       161,
       458
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       849,
       354,
       1000,
       466
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       635,
       663,
       973,
       946
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       673,
       532,
       868,
       649
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       257,
       602,
       651,
       690
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 103
    },
    "liver": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 103
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 103
    },
    "fat": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 103
    },
    "blood": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 53
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 110.0,
     "best": 0.98,
     "hits": 65
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.9,
     "hits": 50
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 25
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 37
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 8
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 111.0,
   "label": {
    "cvs": {
     "c1": 0.06,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one vertical tubular structure (likely the cystic duct) is partially delineated on the left, while the tissue above the window is not yet separated into a second distinct tubular structure. C2: A single full-thickness window is visible below the hook, but the upper part of the hepatocystic triangle remains covered in tissue with no second window formed. C3: The electrocautery hook is just beginning to score the peritoneum near the liver bed, and the lower gallbladder is not yet separated to expose the cystic plate.",
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
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete; only one window is formed and the cystic artery is not yet clearly isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       633,
       477,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       381,
       870,
       646
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       573,
       522,
       767,
       626
      ],
      "confidence": 0.82
     },
     {
      "label": "hook",
      "box_2d": [
       528,
       615,
       916,
       964
      ],
      "confidence": 0.91
     },
     {
      "label": "grasper",
      "box_2d": [
       732,
       266,
       1000,
       452
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.99,
     "hits": 104
    },
    "liver": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.99,
     "hits": 104
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 104
    },
    "fat": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 104
    },
    "blood": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.85,
     "hits": 54
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 110.0,
     "best": 0.98,
     "hits": 65
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.9,
     "hits": 50
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 111.0,
     "best": 0.9,
     "hits": 26
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 111.0,
     "best": 0.9,
     "hits": 38
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 8
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 112.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.65,
     "c3": 0.15
    },
    "cvs_evidence": "C1: A wide lower structure and a thinner upper structure are partially outlined by the dissection window, though the upper structure is partly obscured by the hook shaft and still attached to connective tissue. C2: One clear full-thickness window is visible between the lower and upper structures, and the hook is actively creating the upper window above the second structure. C3: Dissection along the liver bed has just begun with the hook, so the lower gallbladder is not yet elevated off the cystic plate along its inferior margin.",
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
      "confidence": 0.8
     },
     {
      "name": "cystic_artery",
      "confidence": 0.75
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
    "reason_if_not": "The upper hepatocystic window and cystic plate dissection are still in progress, and the hook shaft partially obscures the upper tubular structure.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       637,
       457,
       983
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       354,
       857,
       633
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       393,
       598,
       738,
       982
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       722,
       281,
       999,
       457
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       556,
       525,
       754,
       625
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.99,
     "hits": 105
    },
    "liver": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.99,
     "hits": 105
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 105
    },
    "fat": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 105
    },
    "blood": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.85,
     "hits": 54
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 112.0,
     "best": 0.98,
     "hits": 66
    },
    "gi_tract": {
     "first": 11.0,
     "last": 112.0,
     "best": 0.9,
     "hits": 51
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 112.0,
     "best": 0.9,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 112.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 113.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.4,
     "c3": 0.25
    },
    "cvs_evidence": "C1: A lower window separates a potential cystic duct from an upper tissue bridge being dissected by the hook, which may contain the artery, though the upper structure is not yet clearly skeletonized. C2: One clear full-thickness window is visible in the lower hepatocystic triangle, and the hook is actively creating an upper window, though it is not yet completely through. C3: The peritoneum along the cystic plate is being incised, but the lower third of the gallbladder is not yet fully elevated off the liver bed.",
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
      "confidence": 0.75
     },
     {
      "name": "cystic_artery",
      "confidence": 0.65
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
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
      "confidence": 0.8
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is still in progress; only one complete window is formed and the second structure is not fully isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       362,
       896,
       635
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       613,
       477,
       979
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       602,
       506,
       785,
       607
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       766,
       276,
       998,
       437
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       426,
       599,
       764,
       981
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.99,
     "hits": 106
    },
    "liver": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.99,
     "hits": 106
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 106
    },
    "fat": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 106
    },
    "blood": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 55
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 113.0,
     "best": 0.98,
     "hits": 67
    },
    "gi_tract": {
     "first": 11.0,
     "last": 112.0,
     "best": 0.9,
     "hits": 51
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 113.0,
     "best": 0.9,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 40
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 113.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 114.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one vertical band of tissue containing a structure is partially isolated on the left, while the second tubular structure is not clearly delineated. C2: One small full-thickness window is visible near the bottom of the triangle, but the upper part between the structure and liver bed is still being dissected with the hook. C3: The lower gallbladder is still largely attached to the liver bed and the cystic plate is not fully exposed.",
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
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are not both clearly isolated.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       75,
       593,
       318,
       971
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       761,
       274,
       998,
       431
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       363,
       132,
       418
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       580,
       503,
       774,
       600
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       602,
       580,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       329,
       885,
       638
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       568,
       482,
       865,
       683
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.99,
     "hits": 107
    },
    "liver": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.99,
     "hits": 107
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 107
    },
    "fat": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 107
    },
    "blood": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.85,
     "hits": 56
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 114.0,
     "best": 0.98,
     "hits": 68
    },
    "gi_tract": {
     "first": 11.0,
     "last": 112.0,
     "best": 0.9,
     "hits": 51
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 114.0,
     "best": 0.9,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 113.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 115.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one small window has been created and the cystic duct and artery are still largely embedded in peritoneal and fatty tissue, so two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: There is one small full-thickness window visible at the bottom of the hepatocystic triangle, but the upper triangle is still being incised by the hook and does not show two clear windows. C3: The lower gallbladder is not yet separated from the liver bed to expose the cystic plate, as dissection is only just beginning along the peritoneal reflection.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct, cystic artery, and cystic plate are not yet fully exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       335,
       903,
       629
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       595,
       616,
       980
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       619,
       495,
       794,
       588
      ],
      "confidence": 0.89
     },
     {
      "label": "hook",
      "box_2d": [
       122,
       573,
       427,
       981
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       784,
       277,
       999,
       423
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       366,
       172,
       434
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.99,
     "hits": 108
    },
    "liver": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.99,
     "hits": 108
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 108
    },
    "fat": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 108
    },
    "blood": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.85,
     "hits": 57
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 114.0,
     "best": 0.98,
     "hits": 68
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 114.0,
     "best": 0.9,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 42
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 113.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 116.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A lower window is visible creating one band-like structure, while a second structure above is still embedded in tissue and being dissected by the hook. C2: One full-thickness window is clearly visible inferiorly, but the upper part of the hepatocystic triangle is not yet cleared to form a second window. C3: The gallbladder remains largely attached to the liver bed and is not yet elevated to expose the cystic plate along its inferior margin.",
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
      "name": "hepatocystic_window",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
     },
     {
      "name": "cystic_artery",
      "confidence": 0.55
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
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the upper tubular structure and cystic plate are not yet fully skeletonized and separated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       359,
       970,
       882
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       608,
       638,
       973
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       234,
       597,
       503,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       389,
       198,
       466
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       814,
       311,
       1000,
       440
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       645,
       512,
       828,
       614
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.99,
     "hits": 109
    },
    "liver": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.99,
     "hits": 109
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 109
    },
    "fat": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 109
    },
    "blood": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 58
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 116.0,
     "best": 0.98,
     "hits": 69
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 116.0,
     "best": 0.9,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 43
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 116.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 117.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A single broad structure (likely the cystic duct) is held by the grasper on the left, while the cystic artery is not yet clearly isolated as a distinct tubular structure entering the gallbladder. C2: One full-thickness window is visible near the bottom of the hepatocystic triangle, but the upper area remains covered with connective tissue being dissected by the hook. C3: The inferior margin of the gallbladder remains attached to the liver bed with no clearly exposed cystic plate.",
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
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress; only one window is open and the second tubular structure (cystic artery) and cystic plate are not yet fully delineated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       611,
       587,
       983
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       361,
       992,
       876
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       693,
       509,
       870,
       622
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       379,
       232,
       477
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       855,
       337,
       998,
       439
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       666,
       651,
       993,
       935
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.99,
     "hits": 110
    },
    "liver": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.99,
     "hits": 110
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 110
    },
    "fat": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 110
    },
    "blood": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.85,
     "hits": 59
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 116.0,
     "best": 0.98,
     "hits": 69
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 117.0,
     "best": 0.9,
     "hits": 29
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 116.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 118.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not yet skeletonized or clearly identifiable. C2: Only one small window is beginning to form near the bottom, and the rest of the hepatocystic triangle remains covered in connective tissue and peritoneum. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate along the inferior margin.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in the early stages; the hepatocystic triangle is mostly covered by peritoneum and fat, hiding the underlying ductal and arterial anatomy.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       69,
       992,
       568
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       477,
       617,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       569,
       646,
       998,
       978
      ],
      "confidence": 0.8
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       403,
       259,
       512
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       890,
       363,
       1000,
       445
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       757,
       606,
       1000,
       750
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       410,
       582,
       801,
       656
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       771,
       516,
       929,
       618
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.99,
     "hits": 111
    },
    "liver": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.99,
     "hits": 111
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 111
    },
    "fat": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 111
    },
    "blood": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.85,
     "hits": 60
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 116.0,
     "best": 0.98,
     "hits": 69
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 117.0,
     "best": 0.9,
     "hits": 29
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 116.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 5
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
     "c2": 0.9,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are visible running toward the gallbladder. C2: The hepatocystic triangle is cleared with two windows visible between the duct, artery, and liver bed. C3: The lower portion of the gallbladder is not yet adequately separated from the liver bed to expose the cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.9
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
    "reason_if_not": "C3 is not achieved as the lower gallbladder is not fully detached from the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       477,
       558,
       976
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       544,
       627,
       905,
       963
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       680,
       528,
       876,
       647
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       401,
       232,
       496
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       858,
       362,
       1000,
       457
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.99,
     "hits": 112
    },
    "liver": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.99,
     "hits": 112
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 112
    },
    "fat": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 111
    },
    "blood": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.85,
     "hits": 61
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 116.0,
     "best": 0.98,
     "hits": 69
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 30
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 45
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 119.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 120.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.2,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A lower window reveals one band-like region below it, while the upper tissue is still being dissected with the hook, so two clear tubular structures entering the gallbladder are not yet defined. C2: One full-thickness window is visible in the lower hepatocystic triangle, but the upper window between the putative artery and cystic plate is still in the process of being dissected. C3: The gallbladder remains fully attached to the liver bed along its medial/inferior margin, with no exposed cystic plate beneath a hanging gallbladder.",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still incomplete, preventing definitive identification of the cystic duct and artery.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       532,
       543,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       367,
       362,
       698
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       678,
       524,
       863,
       658
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       511,
       626,
       864,
       975
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       399,
       226,
       492
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       837,
       351,
       1000,
       458
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.99,
     "hits": 113
    },
    "liver": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.99,
     "hits": 113
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 113
    },
    "fat": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 112
    },
    "blood": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.85,
     "hits": 62
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 116.0,
     "best": 0.98,
     "hits": 69
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 30
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 46
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 119.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 121.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.55,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two putative tubular bands are beginning to emerge within the dissected tissue, though significant peritoneum and fat still cover their direct junction with the gallbladder. C2: One distinct window is clearly open inferiorly with background visible through it, while the hook is actively creating a second superior window. C3: The gallbladder remains largely attached to the liver bed and the cystic plate is not yet exposed beneath the inferior margin.",
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
      "name": "cystic_artery",
      "confidence": 0.65
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress, so the complete Critical View of Safety is not yet fully established.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       630,
       562,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       18,
       381,
       980,
       712
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       689,
       532,
       878,
       687
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       516,
       642,
       858,
       976
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       401,
       231,
       498
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       839,
       360,
       1000,
       465
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.99,
     "hits": 114
    },
    "liver": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.99,
     "hits": 114
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 114
    },
    "fat": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 113
    },
    "blood": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.85,
     "hits": 62
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 116.0,
     "best": 0.98,
     "hits": 69
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 31
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 47
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 121.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 122.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the cystic duct is partially visible along the left margin of the triangle, while the cystic artery is still embedded in tissue being dissected by the hook. C2: One full-thickness window is visible above the cystic duct, but the upper part of the triangle is still being cleared and lacks a second complete window. C3: The gallbladder remains largely attached to the liver bed with no exposed cystic plate beneath its inferior margin.",
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
      "confidence": 0.98
     },
     {
      "name": "cystic_duct",
      "confidence": 0.8
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
      "confidence": 0.85
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and cystic plate; cystic artery is not yet skeletonized.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       1000,
       452
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       483,
       582,
       981
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       403,
       236,
       504
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       846,
       362,
       1000,
       463
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       542,
       638,
       878,
       967
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       701,
       529,
       878,
       683
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.99,
     "hits": 115
    },
    "liver": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.99,
     "hits": 115
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 115
    },
    "fat": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 114
    },
    "blood": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.85,
     "hits": 63
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 122.0,
     "best": 0.98,
     "hits": 70
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 32
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 121.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 123.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one bottom window is open; two distinct tubular structures entering the gallbladder are not yet clearly isolated from the surrounding tissue. C2: There is one full-thickness window inferiorly, but the upper hepatocystic triangle is still filled with connective tissue being dissected by the hook. C3: The lower gallbladder remains broadly attached to the liver bed and the cystic plate is not fully exposed.",
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
      "name": "hepatocystic_window",
      "confidence": 0.9
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
      "name": "cystic_duct",
      "confidence": 0.7
     },
     {
      "name": "cystic_artery",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet fully cleared of connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       502,
       558,
       980
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       44,
       381,
       987,
       888
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       405,
       238,
       502
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       846,
       365,
       1000,
       467
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       591,
       629,
       946,
       960
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       714,
       530,
       877,
       656
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.99,
     "hits": 116
    },
    "liver": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.99,
     "hits": 116
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 116
    },
    "fat": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 115
    },
    "blood": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.85,
     "hits": 63
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 122.0,
     "best": 0.98,
     "hits": 70
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 33
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 123.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 124.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and artery are not yet skeletonized as two distinct tubular structures entering the gallbladder, as peritoneum and fat still cover the upper triangle. C2: Only one lower window is visible while the hook dissects the upper peritoneum, so the hepatocystic triangle is not yet fully cleared into two full-thickness windows. C3: The gallbladder remains largely attached to the liver bed with the peritoneum intact superiorly, so the cystic plate is not exposed.",
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
      "name": "cystic_duct",
      "confidence": 0.4
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are still covered by peritoneum and fibroadipose tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       507,
       549,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       994,
       523
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       702,
       536,
       869,
       642
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       562,
       627,
       987,
       965
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       411,
       229,
       509
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       857,
       368,
       1000,
       466
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.99,
     "hits": 117
    },
    "liver": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.99,
     "hits": 117
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 117
    },
    "fat": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 116
    },
    "blood": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 63
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 122.0,
     "best": 0.98,
     "hits": 70
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 33
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 123.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 125.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two bridge-like bands are emerging between the lower window and the upper hook dissection area, though their tubular contours and direct attachments are still being defined. C2: A clear window is open below the lower structure, while the upper space between the artery and liver bed is actively being opened by the hook and is not yet a complete full-thickness window. C3: The lower gallbladder is still largely attached to the liver bed with limited exposure of the cystic plate.",
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
      "name": "cystic_artery",
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
      "confidence": 0.55
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete, preventing full confirmation of the Critical View of Safety.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       480,
       618,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       977,
       477
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       417,
       253,
       519
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       867,
       381,
       1000,
       475
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       595,
       651,
       915,
       964
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       730,
       546,
       896,
       663
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.99,
     "hits": 118
    },
    "liver": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.99,
     "hits": 118
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.95,
     "hits": 118
    },
    "fat": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.95,
     "hits": 117
    },
    "blood": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.85,
     "hits": 64
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 122.0,
     "best": 0.98,
     "hits": 70
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 125.0,
     "best": 0.95,
     "hits": 34
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 125.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 125.0,
     "best": 0.9,
     "hits": 11
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 125.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 126.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only the early outline of the cystic duct at the bottom and connective tissue above are visible; two distinct tubular structures entering the gallbladder are not yet skeletonized. C2: The hook is actively opening a window in the peritoneum, and while a lower gap is forming, full-thickness clearance of the hepatocystic triangle with two distinct windows is not yet achieved. C3: The peritoneum along the cystic plate is just being incised by the hook, and the lower gallbladder is not yet separated from the liver bed.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.65
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
     },
     {
      "name": "cystic_duct",
      "confidence": 0.55
     },
     {
      "name": "blood",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "smoke",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; the cystic duct and artery are not yet isolated as two distinct tubular structures and the lower gallbladder remains attached to the liver bed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       393,
       678,
       968
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       68,
       996,
       474
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       570,
       638,
       936,
       966
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       417,
       262,
       524
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       879,
       391,
       1000,
       475
      ],
      "confidence": 0.89
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.99,
     "hits": 118
    },
    "liver": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.99,
     "hits": 118
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.95,
     "hits": 118
    },
    "fat": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.95,
     "hits": 117
    },
    "blood": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.85,
     "hits": 64
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 122.0,
     "best": 0.98,
     "hits": 70
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 126.0,
     "best": 0.95,
     "hits": 34
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 126.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 125.0,
     "best": 0.9,
     "hits": 11
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 126.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 127.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.7,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. C2: Two dark windows are dissected through the hepatocystic triangle between the structures and the liver bed, with the hook working in the upper window. C3: The gallbladder remains largely attached to the liver bed with limited exposure of the cystic plate along the inferior margin.",
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
      "confidence": 0.75
     },
     {
      "name": "cystic_artery",
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.8
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
    "reason_if_not": "The lower part of the gallbladder is not yet sufficiently separated from the cystic plate to confirm full CVS.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       71,
       1000,
       482
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       498,
       497,
       981
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       416,
       275,
       536
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       448,
       667,
       764,
       982
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.99,
     "hits": 119
    },
    "liver": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.99,
     "hits": 119
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 119
    },
    "fat": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 118
    },
    "blood": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.85,
     "hits": 64
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 127.0,
     "best": 0.98,
     "hits": 71
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 35
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 52
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 127.0,
     "best": 0.9,
     "hits": 12
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 126.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 128.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or seen entering the gallbladder yet. C2: The hepatocystic triangle is still covered by peritoneum and fat, with only initial scoring by the hook and no full-thickness windows. C3: The gallbladder remains completely attached to the liver bed with the peritoneum intact along the inferior margin.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Initial stage of dissection; cystic duct and artery are still embedded in peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       994,
       657
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       484,
       608,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       411,
       280,
       526
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       922,
       407,
       1000,
       465
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       687,
       610,
       1000,
       896
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       740,
       545,
       936,
       660
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.99,
     "hits": 120
    },
    "liver": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.99,
     "hits": 120
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.95,
     "hits": 120
    },
    "fat": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.95,
     "hits": 119
    },
    "blood": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.85,
     "hits": 65
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 127.0,
     "best": 0.98,
     "hits": 71
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 35
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 52
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 127.0,
     "best": 0.9,
     "hits": 12
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 126.0,
     "best": 0.85,
     "hits": 5
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
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are dissected and seen running toward the gallbladder, with two distinct windows adjacent to them. C2: Two clear full-thickness windows are visible in the hepatocystic triangle with the dark liver background clearly seen through both gaps. C3: The upper window toward the cystic plate is relatively small and the lower gallbladder is not extensively separated from the liver bed along its whole inferior margin.",
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
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "cystic_plate",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       67,
       1000,
       463
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       615,
       561,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       412,
       262,
       524
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       897,
       404,
       1000,
       477
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       550,
       630,
       903,
       960
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       735,
       562,
       896,
       663
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.99,
     "hits": 121
    },
    "liver": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.99,
     "hits": 121
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 121
    },
    "fat": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 120
    },
    "blood": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.85,
     "hits": 65
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 127.0,
     "best": 0.98,
     "hits": 71
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 36
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 53
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 129.0,
     "best": 0.9,
     "hits": 13
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 129.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 130.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet dissected or visible, as peritoneum and fat still cover the hepatocystic triangle. C2: The hepatocystic triangle is only partially incised on the surface without any full-thickness windows cleared through the tissue. C3: The lower portion of the gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
      "name": "abdominal_wall",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; the cystic duct and cystic artery are still obscured by peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       67,
       1000,
       984
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       8,
       388,
       1000,
       750
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       597,
       638,
       936,
       959
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       423,
       272,
       533
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       901,
       417,
       1000,
       493
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       734,
       562,
       915,
       680
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.99,
     "hits": 122
    },
    "liver": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.99,
     "hits": 122
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 122
    },
    "fat": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 121
    },
    "blood": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.85,
     "hits": 65
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 130.0,
     "best": 0.98,
     "hits": 72
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 36
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 53
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 129.0,
     "best": 0.9,
     "hits": 13
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 129.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 131.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Early dissection of the peritoneum; neither the cystic duct nor the cystic artery is skeletonized or clearly identifiable as distinct tubular structures entering the gallbladder. C2: A small superficial window is being created with the hook, but the hepatocystic triangle remains filled with fat and connective tissue without full-thickness clearance. C3: The gallbladder remains completely attached to the liver bed along its inferior margin, with no exposure of the cystic plate.",
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
      "confidence": 0.4
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages; the cystic duct and artery are still covered by peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       1000,
       502
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       492,
       617,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       418,
       275,
       527
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       923,
       416,
       1000,
       474
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       635,
       626,
       998,
       935
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       753,
       545,
       937,
       652
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.99,
     "hits": 123
    },
    "liver": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.99,
     "hits": 123
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.95,
     "hits": 123
    },
    "fat": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.95,
     "hits": 122
    },
    "blood": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.85,
     "hits": 65
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 130.0,
     "best": 0.98,
     "hits": 72
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 36
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 131.0,
     "best": 0.95,
     "hits": 53
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 129.0,
     "best": 0.9,
     "hits": 13
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 129.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 132.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.7,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two bridging tubular bands (cystic duct and cystic artery) are visible traversing the dissected windows toward the gallbladder. C2: Two distinct dissected windows are present in the hepatocystic triangle with background liver visible through them. C3: The upper window partially separates the gallbladder from the liver bed, though the hook obscures full confirmation of the cystic plate along the inferior margin.",
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
      "confidence": 0.75
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
      "name": "cystic_plate",
      "confidence": 0.6
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       67,
       1000,
       560
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       485,
       562,
       987
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       420,
       281,
       528
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       913,
       420,
       1000,
       483
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       491,
       626,
       829,
       977
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       737,
       558,
       917,
       674
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.99,
     "hits": 124
    },
    "liver": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.99,
     "hits": 124
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 124
    },
    "fat": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 123
    },
    "blood": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.85,
     "hits": 65
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 132.0,
     "best": 0.98,
     "hits": 73
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 37
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 132.0,
     "best": 0.9,
     "hits": 14
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 132.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 133.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.8
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are dissected and seen running toward the gallbladder. C2: Two full-thickness windows are clearly visible in the hepatocystic triangle with the background seen through both openings. C3: The upper window extends high enough to expose the cystic plate beneath the detached lower gallbladder margin.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       517,
       527,
       985
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       423,
       269,
       528
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       912,
       417,
       1000,
       483
      ],
      "label": "grasper",
      "confidence": 0.9
     },
     {
      "box_2d": [
       473,
       637,
       804,
       981
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       735,
       558,
       915,
       666
      ],
      "label": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "box_2d": [
       0,
       388,
       1000,
       897
      ],
      "label": "gallbladder",
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.99,
     "hits": 125
    },
    "liver": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.99,
     "hits": 125
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.95,
     "hits": 125
    },
    "fat": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.95,
     "hits": 124
    },
    "blood": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.85,
     "hits": 65
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 133.0,
     "best": 0.98,
     "hits": 74
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 133.0,
     "best": 0.95,
     "hits": 38
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 133.0,
     "best": 0.95,
     "hits": 55
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 133.0,
     "best": 0.9,
     "hits": 15
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 133.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 134.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are dissected and seen entering the gallbladder. C2: Two full-thickness windows are clearly dissected through the hepatocystic triangle, showing the liver parenchyma in the background between the duct, artery, and gallbladder wall/plate. C3: The inferior margin of the gallbladder remains largely attached to the liver bed at the top right, so the cystic plate is not fully exposed.",
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
      "confidence": 0.8
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
    "reason_if_not": "C3 is not yet achieved as the lower gallbladder is not fully mobilized off the cystic plate.",
    "boxes": [
     {
      "box_2d": [
       0,
       67,
       1000,
       480
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       432,
       290,
       551
      ],
      "label": "grasper",
      "confidence": 0.89
     },
     {
      "box_2d": [
       336,
       649,
       730,
       977
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       757,
       584,
       903,
       676
      ],
      "label": "hepatocystic_window",
      "confidence": 0.65
     },
     {
      "box_2d": [
       0,
       683,
       447,
       969
      ],
      "label": "liver",
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.99,
     "hits": 126
    },
    "liver": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.99,
     "hits": 126
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 126
    },
    "fat": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 125
    },
    "blood": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.85,
     "hits": 65
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 134.0,
     "best": 0.98,
     "hits": 75
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 39
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 56
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 134.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 133.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 135.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The peritoneum over the hepatocystic triangle is just being incised and no distinct tubular structures (cystic duct or artery) are clearly dissected out yet. C2: The hepatocystic triangle remains covered in peritoneum, fat, and connective tissue with only superficial scoring and no full-thickness windows. C3: The lower portion of the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct, cystic artery, and cystic plate are still concealed beneath peritoneum and connective tissue.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       554,
       663,
       876,
       966
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       429,
       295,
       545
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       737,
       565,
       933,
       677
      ],
      "confidence": 0.8
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       386,
       620,
       739,
       710
      ],
      "confidence": 0.75
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       670,
       597,
       981
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       98,
       419,
       994,
       736
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.99,
     "hits": 127
    },
    "liver": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.99,
     "hits": 127
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.95,
     "hits": 127
    },
    "fat": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.95,
     "hits": 126
    },
    "blood": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.85,
     "hits": 66
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 134.0,
     "best": 0.98,
     "hits": 75
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 39
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 56
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 134.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 133.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 136.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one small tubular structure (likely the cystic artery) is partially skeletonized between two windows, while the main pedicle remains a broad sheet of undissected tissue without a distinct cystic duct visible. C2: Although two small full-thickness windows are opened around a single thin structure, the remainder of the hepatocystic triangle is still covered by intact peritoneum and connective tissue. C3: The inferior margin of the gallbladder is not mobilized from the liver bed, so the cystic plate is not exposed.",
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
      "name": "cystic_artery",
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
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is largely undissected with only one thin structure isolated, preventing confirmation of both the cystic duct and cystic artery entering the gallbladder.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       1000,
       514
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       508,
       686,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       426,
       260,
       532
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       866,
       416,
       1000,
       503
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       692,
       574,
       876,
       689
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       340,
       626,
       690,
       714
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.99,
     "hits": 128
    },
    "liver": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.99,
     "hits": 128
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 128
    },
    "fat": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 127
    },
    "blood": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.85,
     "hits": 66
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 134.0,
     "best": 0.98,
     "hits": 75
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 39
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 57
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 136.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 133.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 137.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are dissected and seen running towards the gallbladder. C2: Two full-thickness windows have been dissected in the hepatocystic triangle, allowing a clear view of the background liver tissue through the lower window and deeply cleared tissue in the upper window. C3: The gallbladder remains largely attached to the liver bed with no broad exposure of the cystic plate along the inferior margin.",
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
      "name": "cystic_duct",
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.92
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "C3 is not achieved as the lower portion of the gallbladder is not yet dissected off the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       589,
       526,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       1000,
       457
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       785,
       312,
       1000,
       449
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       401,
       236,
       491
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       650,
       544,
       810,
       638
      ],
      "confidence": 0.86
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       668,
       516,
       953,
       946
      ],
      "confidence": 0.83
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.99,
     "hits": 129
    },
    "liver": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.99,
     "hits": 129
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 129
    },
    "fat": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 128
    },
    "blood": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.85,
     "hits": 66
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 137.0,
     "best": 0.98,
     "hits": 76
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 40
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 137.0,
     "best": 0.9,
     "hits": 18
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 133.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 138.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one small window has been created at the bottom of the hepatocystic triangle, and two distinct tubular structures entering the gallbladder are not yet skeletonized. C2: The hepatocystic triangle remains largely covered in peritoneum and fatty connective tissue, with only one lower full-thickness window visible. C3: The gallbladder remains fully attached to the liver bed with no dissection exposing the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are still obscured by peritoneum and fatty tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       618,
       617,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       382,
       215,
       455
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       743,
       274,
       1000,
       433
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       350,
       864,
       653
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       631,
       526,
       772,
       634
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       270,
       579,
       634,
       672
      ],
      "confidence": 0.75
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       631,
       502,
       986,
       924
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.99,
     "hits": 130
    },
    "liver": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.99,
     "hits": 130
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.95,
     "hits": 130
    },
    "fat": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.95,
     "hits": 129
    },
    "blood": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.85,
     "hits": 66
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.98,
     "hits": 77
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 40
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 138.0,
     "best": 0.95,
     "hits": 59
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 137.0,
     "best": 0.9,
     "hits": 18
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 133.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 139.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two band-like structures (likely cystic duct inferiorly and cystic artery superiorly) are visible bridging toward the gallbladder around a lower window. C2: One clear window is seen between the two structures, while the upper space toward the liver bed still contains connective tissue and has not formed a full-thickness second window. C3: The inferior margin of the gallbladder is not yet mobilized off the liver bed to expose the cystic plate.",
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
      "name": "cystic_duct",
      "confidence": 0.85
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Upper part of the hepatocystic triangle and the cystic plate are still covered by connective tissue; dissection is incomplete.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       624,
       617,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       354,
       889,
       678
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       388,
       217,
       462
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       763,
       296,
       998,
       451
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       615,
       546,
       769,
       644
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.99,
     "hits": 131
    },
    "liver": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.99,
     "hits": 131
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 131
    },
    "fat": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 130
    },
    "blood": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.85,
     "hits": 66
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 139.0,
     "best": 0.98,
     "hits": 78
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 41
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 60
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 139.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 133.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 140.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.25,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and artery are still largely covered by peritoneum and fat, so two distinct tubular structures entering the gallbladder are not yet visible. C2: One small full-thickness window is visible in the lower part of the triangle, but the upper part remains uncleared of connective tissue. C3: The gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "confidence": 0.9
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not yet skeletonized and the cystic plate is not exposed.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       0,
       386,
       218,
       461
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       779,
       307,
       1000,
       451
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       625,
       615,
       981
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       69,
       1000,
       443
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       621,
       547,
       781,
       644
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       725,
       505,
       984,
       934
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.99,
     "hits": 132
    },
    "liver": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.99,
     "hits": 132
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.95,
     "hits": 132
    },
    "fat": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.95,
     "hits": 131
    },
    "blood": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.85,
     "hits": 67
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 140.0,
     "best": 0.98,
     "hits": 79
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 41
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 140.0,
     "best": 0.95,
     "hits": 61
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 139.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 133.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 141.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or visible as distinct tubular structures entering the gallbladder. C2: There is one small window at the bottom of the hepatocystic triangle, but the upper part remains filled with undissected tissue and no second window is present. C3: A vertical peritoneal incision exposes a portion of the cystic plate along the liver bed, though the entire inferior margin of the gallbladder is not yet elevated away from the liver.",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
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
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic duct and artery remain covered by peritoneum and fat, so critical biliary and vascular anatomy cannot yet be confirmed.",
    "boxes": [
     {
      "box_2d": [
       0,
       564,
       584,
       981
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       301,
       841,
       626
      ],
      "label": "gallbladder",
      "confidence": 0.96
     },
     {
      "box_2d": [
       712,
       223,
       1000,
       395
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       330,
       187,
       385
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       585,
       495,
       743,
       605
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     },
     {
      "box_2d": [
       211,
       536,
       608,
       650
      ],
      "label": "cystic_plate",
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.99,
     "hits": 133
    },
    "liver": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.99,
     "hits": 133
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.95,
     "hits": 133
    },
    "fat": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.95,
     "hits": 132
    },
    "blood": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.85,
     "hits": 67
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 141.0,
     "best": 0.98,
     "hits": 80
    },
    "gi_tract": {
     "first": 11.0,
     "last": 141.0,
     "best": 0.9,
     "hits": 53
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 41
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.95,
     "hits": 62
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 139.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 141.0,
     "best": 0.85,
     "hits": 7
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 142.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the inferior border (likely cystic duct region) is partially outlined by the grasper, without two distinct tubular structures clearly separated and entering the gallbladder. C2: A lower window is partially opened showing background tissue, but the upper part of the hepatocystic triangle still contains dense connective tissue and is not fully cleared into two full-thickness windows. C3: The lower portion of the gallbladder remains largely attached to the liver bed with only a shallow dissection furrow rather than a fully exposed cystic plate.",
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
      "confidence": 0.65
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are not yet fully skeletonized and separated from surrounding connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       532,
       594,
       983
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       266,
       863,
       579
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       709,
       155,
       996,
       333
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       297,
       158,
       356
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       595,
       429,
       749,
       539
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       232,
       496,
       590,
       583
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.99,
     "hits": 134
    },
    "liver": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.99,
     "hits": 134
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 134
    },
    "fat": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 133
    },
    "blood": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.85,
     "hits": 67
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 141.0,
     "best": 0.98,
     "hits": 80
    },
    "gi_tract": {
     "first": 11.0,
     "last": 142.0,
     "best": 0.9,
     "hits": 54
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 41
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 63
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 139.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 141.0,
     "best": 0.85,
     "hits": 7
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 143.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and a thinner upper structure likely the cystic artery) are clearly seen entering the gallbladder neck. C2: There is a full-thickness window below the upper structure showing background tissue, and the dissection above it against the liver bed clears the hepatocystic triangle. C3: The peritoneum along the lower gallbladder margin has been opened and dissected upward, exposing the cystic plate, though the upper continuation is not deeply elevated.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
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
      "confidence": 0.5
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       117,
       714,
       539
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       483,
       545,
       974
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       513,
       72,
       700,
       188
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       454,
       297,
       611,
       426
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       576,
       252,
       743,
       492
      ],
      "confidence": 0.81
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       112,
       401,
       524,
       574
      ],
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.99,
     "hits": 135
    },
    "liver": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.99,
     "hits": 135
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.95,
     "hits": 135
    },
    "fat": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.95,
     "hits": 134
    },
    "blood": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.85,
     "hits": 67
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 141.0,
     "best": 0.98,
     "hits": 80
    },
    "gi_tract": {
     "first": 11.0,
     "last": 142.0,
     "best": 0.9,
     "hits": 54
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 143.0,
     "best": 0.95,
     "hits": 42
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 143.0,
     "best": 0.95,
     "hits": 64
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 143.0,
     "best": 0.9,
     "hits": 20
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 143.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 144.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.4,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two band-like structures are partially delineated between the dissected windows, though the upper one remains covered in peritoneum and cauterized tissue. C2: One full-thickness window is clearly open showing the background liver, while the upper dissection above the artery has not fully broken through the posterior peritoneum. C3: The lower gallbladder remains mostly attached to the liver bed with only early superficial cautery scoring along the peritoneum.",
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
      "name": "hepatocystic_window",
      "confidence": 0.9
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle dissection is incomplete superiorly and the lower gallbladder is not yet separated from the cystic plate.",
    "boxes": [
     {
      "box_2d": [
       0,
       649,
       595,
       990
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       269,
       736,
       674
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       496,
       93,
       793,
       332
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       170,
       528,
       536,
       644
      ],
      "label": "cystic_plate",
      "confidence": 0.88
     },
     {
      "box_2d": [
       484,
       438,
       626,
       531
      ],
      "label": "hepatocystic_window",
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.99,
     "hits": 136
    },
    "liver": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.99,
     "hits": 136
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 136
    },
    "fat": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 135
    },
    "blood": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.85,
     "hits": 67
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 141.0,
     "best": 0.98,
     "hits": 80
    },
    "gi_tract": {
     "first": 11.0,
     "last": 144.0,
     "best": 0.9,
     "hits": 55
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 43
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 65
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 144.0,
     "best": 0.9,
     "hits": 21
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 143.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 145.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. C2: The hepatocystic triangle is cleared with two full-thickness windows visible between the duct, artery, and cystic plate, showing the background liver parenchyma through the gaps. C3: The lower portion of the gallbladder is separated from the liver bed, exposing the cystic plate behind the artery.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
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
      "confidence": 0.7
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       292,
       755,
       711
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       634,
       643,
       988
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       513,
       100,
       818,
       356
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       507,
       456,
       662,
       553
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.99,
     "hits": 137
    },
    "liver": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.99,
     "hits": 137
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.95,
     "hits": 137
    },
    "fat": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.95,
     "hits": 136
    },
    "blood": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 68
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 141.0,
     "best": 0.98,
     "hits": 80
    },
    "gi_tract": {
     "first": 11.0,
     "last": 145.0,
     "best": 0.9,
     "hits": 56
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 145.0,
     "best": 0.95,
     "hits": 44
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 145.0,
     "best": 0.95,
     "hits": 66
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 145.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 146.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) is partially delineated, while the superior portion of the triangle remains undissected tissue without a distinct second tubular structure. C2: A single small window is being created inferiorly, but the remainder of the hepatocystic triangle is still covered in fat and connective tissue. C3: The gallbladder neck and lower body remain attached to the liver bed with no exposed cystic plate visible behind a hanging gallbladder.",
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
      "confidence": 0.8
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
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still in an early stage; the cystic artery and cystic plate are not yet exposed or isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       698,
       627,
       986
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       319,
       748,
       734
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       513,
       101,
       809,
       381
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       427,
       538,
       999,
       969
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.99,
     "hits": 138
    },
    "liver": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.99,
     "hits": 138
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 138
    },
    "fat": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 137
    },
    "blood": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 68
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 146.0,
     "best": 0.98,
     "hits": 81
    },
    "gi_tract": {
     "first": 11.0,
     "last": 146.0,
     "best": 0.9,
     "hits": 57
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 45
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 67
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 145.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 147.0,
   "label": {
    "cvs": {
     "c1": 0.12,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the cystic duct is partially defined below while the upper region around the cystic artery is still obscured by tissue and the bipolar forceps, so two distinct tubular structures are not yet clearly isolated. C2: A single small window is visible above the cystic duct, but the upper part of the hepatocystic triangle is not yet fully cleared to show two full-thickness windows. C3: The lower portion of the gallbladder remains largely attached to the liver bed, so the cystic plate is not fully exposed along the inferior margin.",
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
      "name": "gi_tract",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper",
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with only one window partially opened and the cystic artery not yet clearly skeletonized.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       337,
       745,
       745
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       708,
       634,
       989
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       511,
       103,
       832,
       396
      ],
      "confidence": 0.98
     },
     {
      "label": "clipper",
      "box_2d": [
       462,
       575,
       969,
       946
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       517,
       498,
       651,
       582
      ],
      "confidence": 0.82
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       211,
       579,
       490,
       707
      ],
      "confidence": 0.8
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       611,
       508,
       996,
       889
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.99,
     "hits": 139
    },
    "liver": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.99,
     "hits": 139
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 139
    },
    "fat": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 138
    },
    "blood": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 68
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 146.0,
     "best": 0.98,
     "hits": 81
    },
    "gi_tract": {
     "first": 11.0,
     "last": 147.0,
     "best": 0.9,
     "hits": 58
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 46
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 68
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 145.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 148.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the inferior cystic duct-like structure is partially skeletonized, while a second distinct tubular structure (cystic artery) is not clearly isolated. C2: A single small window is being created by the dissector above the lower tubular structure, but the upper hepatocystic triangle remains filled with fat and connective tissue. C3: The lower portion of the gallbladder remains attached to the liver bed with only a superficial peritoneal incision visible.",
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
      "name": "hepatocystic_window",
      "confidence": 0.65
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
      "name": "gi_tract",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not yet isolated and the cystic plate is not exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       342,
       744,
       757
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       683,
       639,
       991
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       203,
       588,
       516,
       708
      ],
      "confidence": 0.75
     },
     {
      "label": "grasper",
      "box_2d": [
       507,
       98,
       834,
       404
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       477,
       560,
       991,
       941
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.99,
     "hits": 140
    },
    "liver": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.99,
     "hits": 140
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 140
    },
    "fat": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 139
    },
    "blood": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 68
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 146.0,
     "best": 0.98,
     "hits": 81
    },
    "gi_tract": {
     "first": 11.0,
     "last": 148.0,
     "best": 0.9,
     "hits": 59
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 47
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 68
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 145.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 149.0,
   "label": {
    "cvs": {
     "c1": 0.06,
     "c2": 0.04,
     "c3": 0.08
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct) is clearly outlined, while the cystic artery is not yet dissected out as a distinct tubular structure. C2: The hepatocystic triangle is still largely covered by peritoneum and fat, with no full-thickness windows visible. C3: Dissection of the peritoneum along the gallbladder margin has just begun, so the lower gallbladder is not yet separated from the cystic plate.",
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
      "name": "cystic_duct",
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
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper",
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       357,
       650,
       735
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       704,
       561,
       946
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       555,
       417,
       1000,
       765
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       188,
       573,
       502,
       709
      ],
      "confidence": 0.8
     },
     {
      "label": "grasper",
      "box_2d": [
       477,
       100,
       817,
       416
      ],
      "confidence": 0.98
     },
     {
      "label": "irrigator",
      "box_2d": [
       454,
       543,
       994,
       942
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.99,
     "hits": 141
    },
    "liver": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.99,
     "hits": 141
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 141
    },
    "fat": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 140
    },
    "blood": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 68
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 149.0,
     "best": 0.98,
     "hits": 82
    },
    "gi_tract": {
     "first": 11.0,
     "last": 149.0,
     "best": 0.9,
     "hits": 60
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 48
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 68
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 145.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 150.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct) is partially dissected at the lower border, while the rest of the hepatocystic triangle remains covered in tissue. C2: There are no full-thickness windows through the hepatocystic triangle, as dissection with the instrument is still ongoing in the upper part. C3: A small area of cauterized tissue on the liver bed is visible, but the lower part of the gallbladder is not fully separated along its entire inferior margin to expose the cystic plate.",
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
     },
     {
      "name": "blood",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper",
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and full-thickness windows are not yet exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       710,
       582,
       989
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       345,
       649,
       740
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       474,
       98,
       803,
       404
      ],
      "confidence": 0.98
     },
     {
      "label": "irrigator",
      "box_2d": [
       430,
       526,
       999,
       949
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.99,
     "hits": 142
    },
    "liver": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.99,
     "hits": 142
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 142
    },
    "fat": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 141
    },
    "blood": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.85,
     "hits": 69
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 149.0,
     "best": 0.98,
     "hits": 82
    },
    "gi_tract": {
     "first": 11.0,
     "last": 150.0,
     "best": 0.9,
     "hits": 61
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 49
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 68
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 145.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 151.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: The cystic duct below and the cystic artery above are clearly seen as two tubular structures entering the gallbladder. C2: The hepatocystic triangle is cleared of tissue, showing full-thickness windows between the duct, artery, and cystic plate. C3: The lower gallbladder is mobilized off the liver bed, exposing the cystic plate behind the dissected triangle.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
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
      "name": "gi_tract",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       728,
       628,
       996
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       360,
       739,
       755
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       491,
       100,
       843,
       421
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       495,
       638,
       906,
       966
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       504,
       517,
       651,
       614
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.99,
     "hits": 143
    },
    "liver": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.99,
     "hits": 143
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 143
    },
    "fat": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 142
    },
    "blood": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.85,
     "hits": 69
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 149.0,
     "best": 0.98,
     "hits": 82
    },
    "gi_tract": {
     "first": 11.0,
     "last": 151.0,
     "best": 0.9,
     "hits": 62
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 50
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 69
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 151.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 151.0,
     "best": 0.9,
     "hits": 10
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 152.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.25
    },
    "cvs_evidence": "C1: A clear lower tubular structure (likely cystic duct) and a deeper bluish tubular structure (likely cystic artery) are visible, though the upper window and entry into the gallbladder are still partially obscured by cauterized tissue and the right instrument. C2: One full-thickness window is beginning to open above the lower tubular structure, but a second window between the upper structure and the cystic plate is not yet dissected clear. C3: The lower gallbladder has a small cauterized trench along the liver bed, but it is not separated enough to expose the cystic plate as a hanging gallbladder.",
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
      "confidence": 0.65
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.75
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
    "reason_if_not": "The hepatocystic triangle dissection is incomplete, with only one partial window visible and the lower gallbladder still attached to the cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       351,
       743,
       756
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       730,
       623,
       989
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       490,
       102,
       831,
       417
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       441,
       627,
       876,
       977
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.99,
     "hits": 144
    },
    "liver": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.99,
     "hits": 144
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 144
    },
    "fat": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 143
    },
    "blood": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.85,
     "hits": 69
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 149.0,
     "best": 0.98,
     "hits": 82
    },
    "gi_tract": {
     "first": 11.0,
     "last": 152.0,
     "best": 0.9,
     "hits": 63
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 51
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 70
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 152.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 151.0,
     "best": 0.9,
     "hits": 10
    }
   },
   "duct_confirmed": true,
   "alert": null
  },
  {
   "t": 153.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.5,
     "c3": 0.35
    },
    "cvs_evidence": "C1: The cystic duct is clearly visible inferiorly, and a second structure (likely the cystic artery) is partially visible superiorly near the clipper, though dissection is somewhat incomplete. C2: A window is visible above the cystic duct, and the clipper is positioned across the upper portion, suggesting partial clearance of the triangle. C3: The lower part of the gallbladder is still largely attached to the liver bed with limited exposure of the cystic plate.",
    "phase": "clipping_and_cutting",
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
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.8
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
      "name": "gi_tract",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper",
     "clipper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate is not sufficiently dissected and the upper window above the artery is not clearly visible.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       715,
       628,
       990
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       74,
       554,
       477
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       360,
       747,
       775
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       493,
       104,
       834,
       418
      ],
      "confidence": 0.98
     },
     {
      "label": "scissors",
      "box_2d": [
       443,
       630,
       878,
       974
      ],
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.99,
     "hits": 145
    },
    "liver": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.99,
     "hits": 145
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.95,
     "hits": 145
    },
    "fat": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.95,
     "hits": 144
    },
    "blood": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.85,
     "hits": 69
    },
    "abdominal_wall": {
     "first": 1.0,
     "last": 149.0,
     "best": 0.98,
     "hits": 82
    },
    "gi_tract": {
     "first": 11.0,
     "last": 153.0,
     "best": 0.9,
     "hits": 64
    },
    "cystic_duct": {
     "first": 24.0,
     "last": 153.0,
     "best": 0.95,
     "hits": 52
    },
    "hepatocystic_window": {
     "first": 29.0,
     "last": 153.0,
     "best": 0.95,
     "hits": 71
    },
    "cystic_artery": {
     "first": 55.0,
     "last": 153.0,
     "best": 0.9,
     "hits": 24
    },
    "cystic_plate": {
     "first": 70.0,
     "last": 151.0,
     "best": 0.9,
     "hits": 10
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
