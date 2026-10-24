window.TIMELINE = {
 "video": "videos/endo162.mp4",
 "model": "gemini-4-argon",
 "prompt": "v2.txt",
 "detect_model": "gemini-3.8-flash",
 "examples": false,
 "every": 1.0,
 "frames": [
  {
   "t": 0.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and peritoneum, so two distinct tubular structures are not visible. C2: No full-thickness windows have been dissected through the hepatocystic triangle yet. C3: The lower part of the gallbladder has not been elevated off the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Initial peritoneal incision and fat dissection are underway; critical biliary and vascular structures are not yet skeletonized.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       109,
       1000,
       584
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       277,
       486,
       1000,
       914
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       186,
       226,
       591
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       519,
       467,
       844
      ],
      "confidence": 0.97
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
    "fat": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.9,
     "hits": 1
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 1.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not yet clearly isolated, as the tissue in the hepatocystic area remains enveloped in fat and connective tissue and is partially occluded by the electrocautery hook. C2: The hepatocystic triangle is not cleared of fat and connective tissue, and no full-thickness windows are visible. C3: The lower part of the gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage with significant fat covering the structures, and the electrocautery hook shaft partially blocks the view.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       107,
       999,
       523
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       487,
       529,
       827
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       162,
       226,
       547
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       318,
       473,
       998,
       916
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.95,
     "hits": 1
    },
    "fat": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.95,
     "hits": 1
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.9,
     "hits": 1
    },
    "liver": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.98,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 2.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1 is not achieved because only a single dissected tubular structure is clearly visible rather than both the cystic duct and artery entering the gallbladder. C2 is not achieved because the hepatocystic triangle is not cleared to reveal two full-thickness windows between the duct, artery, and cystic plate. C3 is not achieved because the lower part of the gallbladder is not separated from the liver bed to expose the cystic plate.",
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
      "confidence": 0.7
     },
     {
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not fully dissected and the second tubular structure and cystic plate are not clearly exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       109,
       1000,
       857
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       382,
       172,
       649
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       133,
       555,
       535,
       687
      ],
      "confidence": 0.73
     },
     {
      "label": "gallbladder",
      "box_2d": [
       517,
       490,
       1000,
       754
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.95,
     "hits": 2
    },
    "fat": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.95,
     "hits": 2
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.9,
     "hits": 2
    },
    "liver": {
     "first": 1.0,
     "last": 2.0,
     "best": 0.98,
     "hits": 1
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 2.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": false,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 3.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly visible entering the gallbladder as dissection is just beginning. C2: The hepatocystic triangle is still covered in connective tissue and fat with no full-thickness windows created yet. C3: The gallbladder remains completely attached to the liver bed along its inferior margin, so the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "gallbladder",
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
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the peritoneum has just been scored and neither the cystic duct nor the cystic artery is isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       114,
       1000,
       636
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       508,
       471,
       864
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       412,
       770,
       680,
       918
      ],
      "label": "hook",
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.98,
     "hits": 3
    },
    "fat": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.95,
     "hits": 3
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.95,
     "hits": 3
    },
    "liver": {
     "first": 1.0,
     "last": 3.0,
     "best": 0.99,
     "hits": 2
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 2.0,
     "best": 0.7,
     "hits": 1
    },
    "blood": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 4.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: A window is being created by the hook, creating two apparent bands of tissue, but they are not yet clearly skeletonized as two distinct tubular structures entering the gallbladder. C2: The hook is actively dissecting a single window in the hepatocystic triangle, so two full-thickness cleared windows are not yet visible. C3: The inferior margin of the gallbladder remains attached to the liver bed without full exposure of the cystic plate.",
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.7
     },
     {
      "name": "cystic_duct",
      "confidence": 0.5
     },
     {
      "name": "cystic_artery",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and structures are not fully skeletonized.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       108,
       1000,
       565
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       427,
       404,
       888
      ],
      "confidence": 0.92
     },
     {
      "label": "irrigator",
      "box_2d": [
       321,
       699,
       558,
       917
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       404,
       656,
       576,
       736
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.98,
     "hits": 4
    },
    "fat": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.95,
     "hits": 4
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.95,
     "hits": 4
    },
    "liver": {
     "first": 1.0,
     "last": 4.0,
     "best": 0.99,
     "hits": 3
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 4.0,
     "best": 0.7,
     "hits": 1
    },
    "blood": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.6,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 4.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 4.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": false,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 5.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct) is clearly outlined on the right side, while a second tubular structure is not yet isolated. C2: A partial window is being created in the hepatocystic triangle, but dense connective tissue still obscures full-thickness views for both windows. C3: The lower gallbladder remains largely attached to the liver bed without full exposure of the cystic plate along the inferior margin.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not yet isolated and the cystic plate is not fully exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       112,
       998,
       582
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       455,
       360,
       778
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       81,
       689,
       434,
       897
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       363,
       654,
       638,
       768
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.98,
     "hits": 5
    },
    "fat": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.95,
     "hits": 5
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.95,
     "hits": 5
    },
    "liver": {
     "first": 1.0,
     "last": 5.0,
     "best": 0.99,
     "hits": 4
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 5.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.6,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 5.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 4.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 6.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (likely cystic duct) is partially visible on the right, with a second structure not yet dissected out. C2: The hepatocystic triangle is still filled with connective tissue being dissected by the hook, with no full-thickness windows visible. C3: The gallbladder remains attached to the liver bed along its inferior margin, so the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
     },
     {
      "name": "fat",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "hook"
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
       109,
       1000,
       608
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       458,
       300,
       810
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       234,
       708,
       493,
       915
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.98,
     "hits": 6
    },
    "fat": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.95,
     "hits": 6
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.95,
     "hits": 6
    },
    "liver": {
     "first": 1.0,
     "last": 6.0,
     "best": 0.99,
     "hits": 5
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 6.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.6,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 5.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 4.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 7.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected and seen entering the gallbladder. C2: The hepatocystic triangle is still covered with fat and peritoneum, with no full-thickness windows created yet. C3: The gallbladder remains largely attached to the liver bed with only a very superficial peritoneum score line visible.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "gallbladder",
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
      "name": "blood",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in the very early stages; the hepatocystic triangle has not been cleared to expose the cystic duct, cystic artery, or cystic plate.",
    "boxes": [
     {
      "box_2d": [
       0,
       482,
       471,
       878
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       113,
       1000,
       616
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       515,
       799,
       641,
       915
      ],
      "label": "irrigator",
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.98,
     "hits": 7
    },
    "fat": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.95,
     "hits": 7
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.95,
     "hits": 7
    },
    "liver": {
     "first": 1.0,
     "last": 7.0,
     "best": 0.99,
     "hits": 6
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 6.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 3.0,
     "last": 7.0,
     "best": 0.7,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 5.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 4.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 8.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures are beginning to take shape, but extensive residual tissue and the hook obscure their clear tubular definition and direct connection to the gallbladder. C2: The hook is actively dissecting a gap between the structures, so full-thickness windows through the hepatocystic triangle are not yet cleared. C3: The inferior margin of the gallbladder remains attached to the liver bed, and the cystic plate is not exposed.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is still covered with fat and fibrous tissue, and the lower gallbladder has not been elevated off the cystic plate.",
    "boxes": [
     {
      "box_2d": [
       0,
       107,
       1000,
       542
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       418,
       278,
       736
      ],
      "label": "gallbladder",
      "confidence": 0.89
     },
     {
      "box_2d": [
       0,
       672,
       323,
       853
      ],
      "label": "gallbladder",
      "confidence": 0.77
     },
     {
      "box_2d": [
       212,
       621,
       609,
       917
      ],
      "label": "hook",
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.98,
     "hits": 8
    },
    "fat": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.95,
     "hits": 8
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.95,
     "hits": 8
    },
    "liver": {
     "first": 1.0,
     "last": 8.0,
     "best": 0.99,
     "hits": 7
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 8.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 3.0,
     "last": 7.0,
     "best": 0.7,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 5.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 8.0,
     "best": 0.55,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 9.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or clearly visible entering the gallbladder due to incomplete dissection and smoke. C2: The hepatocystic triangle is filled with undissected peritoneal and connective tissue without any full-thickness windows. C3: The electrocautery hook is actively scoring the peritoneum along the gallbladder-liver junction, and the lower gallbladder is not yet mobilized off the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.9
     },
     {
      "name": "liver",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "smoke",
    "can_confirm_anatomy": false,
    "reason_if_not": "Close-up view obscured by cautery smoke and undissected connective tissue covering the hepatocystic triangle.",
    "boxes": [
     {
      "box_2d": [
       0,
       555,
       555,
       910
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       111,
       1000,
       551
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       257,
       245,
       708
      ],
      "label": "liver",
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.98,
     "hits": 8
    },
    "fat": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 8
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 8
    },
    "liver": {
     "first": 1.0,
     "last": 9.0,
     "best": 0.99,
     "hits": 7
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 8.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 3.0,
     "last": 7.0,
     "best": 0.7,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 5.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 8.0,
     "best": 0.55,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 10.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only the cystic duct is clearly delineated as a tubular structure on the right, while the second structure (cystic artery) is not clearly isolated from the surrounding connective tissue near the hook. C2: There is a single dissected cavity in the hepatocystic triangle, rather than two distinct full-thickness windows separating two tubular structures and the cystic plate. C3: The electrocautery hook is actively dissecting the peritoneum along the liver bed, indicating the lower gallbladder is not yet fully separated from the cystic plate.",
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
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
      "confidence": 0.7
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.65
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not yet clearly isolated as a distinct second tubular structure.",
    "boxes": [
     {
      "box_2d": [
       0,
       542,
       383,
       822
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       112,
       1000,
       565
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       277,
       627,
       856
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       437,
       302,
       607
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
     "last": 10.0,
     "best": 0.98,
     "hits": 9
    },
    "fat": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 9
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 9
    },
    "liver": {
     "first": 1.0,
     "last": 10.0,
     "best": 0.99,
     "hits": 8
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 10.0,
     "best": 0.85,
     "hits": 3
    },
    "blood": {
     "first": 3.0,
     "last": 7.0,
     "best": 0.7,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 10.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 8.0,
     "best": 0.55,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 10.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 11.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.15,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Only one main tubular structure (cystic duct) is clearly visible connected to the gallbladder neck; the cystic artery appears already divided (stump visible) or absent, so two intact tubular structures are not seen. C2: There is a large cleared space behind the single tubular structure, but standard two-window configuration between duct and artery is not present. C3: The lower portion of the gallbladder is partially elevated from the liver bed exposing the cystic plate, though the retraction angle makes it somewhat borderline whether the full inferior margin is hanging.",
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
      "confidence": 0.92
     },
     {
      "name": "cystic_plate",
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.7
     },
     {
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Only one intact tubular structure is visible connecting to the gallbladder; the cystic artery is not clearly seen as a second intact structure.",
    "boxes": [
     {
      "box_2d": [
       0,
       108,
       1000,
       917
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       287,
       572,
       545
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       511,
       428,
       687,
       516
      ],
      "label": "cystic_duct",
      "confidence": 0.88
     },
     {
      "box_2d": [
       252,
       116,
       383,
       427
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       29,
       607,
       508,
       908
      ],
      "label": "hook",
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.98,
     "hits": 10
    },
    "fat": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.95,
     "hits": 10
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.95,
     "hits": 10
    },
    "liver": {
     "first": 1.0,
     "last": 11.0,
     "best": 0.99,
     "hits": 9
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 11.0,
     "best": 0.92,
     "hits": 4
    },
    "blood": {
     "first": 3.0,
     "last": 7.0,
     "best": 0.7,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 11.0,
     "best": 0.7,
     "hits": 2
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 8.0,
     "best": 0.55,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 11.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 12.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: The cystic duct on the left and a thinner cystic artery structure being hooked on the right are visible heading toward the gallbladder. C2: A window is opening behind the artery with the hook, and space is dissected between the duct and artery, though background clearance is not completely full-thickness across both windows. C3: The lower third of the gallbladder remains largely attached to the liver bed with little exposed cystic plate visible behind the gallbladder.",
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
      "confidence": 0.7
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
    "reason_if_not": "The lower part of the gallbladder is not yet sufficiently separated from the cystic plate, and the hepatocystic triangle dissection is still in progress.",
    "boxes": [
     {
      "box_2d": [
       0,
       517,
       742,
       910
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       247,
       994,
       597
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       737,
       548,
       996,
       888
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       709,
       142,
       884,
       359
      ],
      "label": "grasper",
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.98,
     "hits": 11
    },
    "fat": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 11
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 11
    },
    "liver": {
     "first": 1.0,
     "last": 12.0,
     "best": 0.99,
     "hits": 10
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 12.0,
     "best": 0.92,
     "hits": 5
    },
    "blood": {
     "first": 3.0,
     "last": 7.0,
     "best": 0.7,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 12.0,
     "best": 0.7,
     "hits": 3
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 11.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 13.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the cystic duct inferiorly and cystic artery superiorly) are clearly dissected and seen entering the gallbladder. C2: Two full-thickness windows are visible in the hepatocystic triangle with background liver tissue clearly seen through both gaps. C3: The dissection of the upper window is still ongoing with the hook and the lower third of the gallbladder is not yet clearly hanging off a fully exposed cystic plate.",
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
      "confidence": 0.95
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
      "name": "cystic_plate",
      "confidence": 0.6
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       0,
       482,
       553,
       885
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       401,
       108,
       564,
       274
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       119,
       824,
       568
      ],
      "confidence": 0.9
     },
     {
      "label": "liver",
      "box_2d": [
       215,
       619,
       868,
       917
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.98,
     "hits": 12
    },
    "fat": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 12
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 12
    },
    "liver": {
     "first": 1.0,
     "last": 13.0,
     "best": 0.99,
     "hits": 11
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 6
    },
    "blood": {
     "first": 3.0,
     "last": 7.0,
     "best": 0.7,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 4
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 2
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 13.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 14.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two clearly dissected tubular structures entering the gallbladder are not visible; tissue at the infundibulum remains bundled. C2: The hepatocystic triangle is not cleared, with no full-thickness windows visible through the tissue. C3: While an incision has been made along the peritoneal reflection, the lower third of the gallbladder is not yet mobilized off the cystic plate.",
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
      "name": "cystic_plate",
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
    "reason_if_not": "The hepatocystic triangle is still covered in fat and connective tissue, preventing clear identification of the cystic duct and cystic artery.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       599,
       888,
       911
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       268,
       1000,
       726
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       458,
       109,
       688,
       448
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       364,
       664,
       702,
       918
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.98,
     "hits": 13
    },
    "fat": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 13
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 13
    },
    "liver": {
     "first": 1.0,
     "last": 14.0,
     "best": 0.99,
     "hits": 12
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 6
    },
    "blood": {
     "first": 3.0,
     "last": 14.0,
     "best": 0.7,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 4
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 2
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 14.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 15.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.1
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the lower gallbladder. A clear window is dissected between the two structures, and the electrocautery hook is situated in the upper window above the cystic artery. The lower third of the gallbladder is not yet mobilized off the cystic plate, and the hook shaft occludes the upper hepatocystic area.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
      "confidence": 0.9
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
    "reason_if_not": "The lower part of the gallbladder has not been fully separated from the cystic plate to achieve the complete Critical View of Safety.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       0,
       453,
       523,
       794
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       599,
       116,
       734,
       354
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       276,
       780,
       521
      ],
      "confidence": 0.9
     },
     {
      "label": "liver",
      "box_2d": [
       46,
       539,
       725,
       866
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       640,
       298,
       807,
       473
      ],
      "confidence": 0.74
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       454,
       393,
       642,
       513
      ],
      "confidence": 0.76
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       516,
       370,
       765,
       512
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.98,
     "hits": 14
    },
    "fat": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 14
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 14
    },
    "liver": {
     "first": 1.0,
     "last": 15.0,
     "best": 0.99,
     "hits": 13
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 7
    },
    "blood": {
     "first": 3.0,
     "last": 15.0,
     "best": 0.7,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 5
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 15.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 14.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 16.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder; the region is still covered in peritoneum and fat. C2: The hepatocystic triangle has not been cleared of fat and connective tissue, and no windows are visible. C3: The lower part of the gallbladder remains attached to the liver bed and Surrounding tissue, with no exposed cystic plate visible.",
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
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle has barely begun; the cystic duct, cystic artery, and cystic plate are still completely obscured by overlying peritoneum and adipose tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       227,
       689,
       908
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       402,
       443,
       736
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       576,
       549,
       866,
       913
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       499,
       142,
       993,
       397
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.98,
     "hits": 15
    },
    "fat": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 15
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 15
    },
    "liver": {
     "first": 1.0,
     "last": 16.0,
     "best": 0.99,
     "hits": 14
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 7
    },
    "blood": {
     "first": 3.0,
     "last": 16.0,
     "best": 0.7,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 5
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 15.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 14.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 17.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because no dissected tubular structures (cystic duct or artery) are visible; the frame only shows a grasper grasping the gallbladder infundibulum/body before dissection. C2 is not achieved because the hepatocystic triangle is completely undissected and covered by intact peritoneum and fat, with no windows visible. C3 is not achieved because the lower gallbladder has not been dissected off the liver bed to expose the cystic plate.",
    "phase": "preparation",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.7
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has not begun; the cystic duct, cystic artery, and cystic plate are still concealed under intact serosa and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       203,
       1000,
       914
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       344,
       806,
       830
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       886,
       298,
       998,
       457
      ],
      "confidence": 0.55
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.98,
     "hits": 16
    },
    "fat": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 16
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 16
    },
    "liver": {
     "first": 1.0,
     "last": 17.0,
     "best": 0.99,
     "hits": 15
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 7
    },
    "blood": {
     "first": 3.0,
     "last": 16.0,
     "best": 0.7,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 5
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 15.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 14.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 18.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) have been dissected out yet; the gallbladder neck is still covered by intact peritoneum and fat. C2: The hepatocystic triangle has not been dissected and contains intact fat and connective tissue with no windows visible. C3: The gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
    "phase": "preparation",
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
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has not begun; the cystic duct and artery are still completely obscured by overlying peritoneum and adipose tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       442,
       840,
       919
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       424,
       139,
       991,
       450
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       116,
       303,
       903,
       712
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       417,
       452,
       663
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       837,
       237,
       999,
       490
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.99,
     "hits": 17
    },
    "fat": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 17
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 17
    },
    "liver": {
     "first": 1.0,
     "last": 18.0,
     "best": 0.99,
     "hits": 16
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 7
    },
    "blood": {
     "first": 3.0,
     "last": 16.0,
     "best": 0.7,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 5
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 15.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 14.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 19.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet clearly isolated from the surrounding fat and connective tissue. C2: The hepatocystic triangle remains filled with tissue and there are no clear full-thickness windows visible. C3: While some connective tissue is exposed posteriorly, the lower gallbladder is not fully mobilized off the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.5
     },
     {
      "name": "cystic_artery",
      "confidence": 0.45
     },
     {
      "name": "cystic_duct",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle prevents clear identification of the cystic duct and cystic artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       287,
       824,
       625
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       507,
       796,
       916
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       316,
       115,
       907,
       377
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       394,
       119,
       479
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       787,
       184,
       995,
       402
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.99,
     "hits": 18
    },
    "fat": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 18
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 18
    },
    "liver": {
     "first": 1.0,
     "last": 19.0,
     "best": 0.99,
     "hits": 17
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 7
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 5
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 19.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 19.0,
     "best": 0.75,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 20.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.65
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are clearly seen entering the gallbladder neck. Two full-thickness windows are dissected between the duct, artery, and cystic plate, with the hook visible in the lower window. The lower gallbladder is partially mobilized off the liver bed exposing the cystic plate, though the upper dissection plane is still somewhat superficial.",
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
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.8
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
       265,
       761,
       664
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       453,
       107,
       628,
       385
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       539,
       608,
       805,
       915
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       661,
       588,
       917
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       599,
       547,
       735,
       616
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.99,
     "hits": 19
    },
    "fat": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 19
    },
    "liver": {
     "first": 1.0,
     "last": 20.0,
     "best": 0.99,
     "hits": 18
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 8
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 6
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 20.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 21.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.85,
     "c3": 0.8
    },
    "cvs_evidence": "Two distinct tubular structures (the lower cystic duct and upper cystic artery) are clearly dissected and seen entering the gallbladder. Two full-thickness windows are visible between the duct and artery and between the artery and the cystic plate, with liver visible in the background. The lower third of the gallbladder is dissected off the liver bed, exposing the cystic plate behind the artery.",
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
      "confidence": 0.92
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
      "confidence": 0.92
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
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       567,
       574,
       915
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       110,
       514,
       624
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       367,
       335,
       698,
       508
      ],
      "label": "cystic_duct",
      "confidence": 0.85
     },
     {
      "box_2d": [
       56,
       326,
       374,
       467
      ],
      "label": "cystic_artery",
      "confidence": 0.75
     },
     {
      "box_2d": [
       611,
       485,
       836,
       584
      ],
      "label": "hepatocystic_window",
      "confidence": 0.8
     },
     {
      "box_2d": [
       409,
       107,
       586,
       266
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       479,
       638,
       761,
       916
      ],
      "label": "hook",
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.99,
     "hits": 20
    },
    "fat": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 20
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 20
    },
    "liver": {
     "first": 1.0,
     "last": 21.0,
     "best": 0.99,
     "hits": 19
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 9
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 7
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 21.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 21.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 22.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.85,
     "c3": 0.45
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, thinner cystic artery above) are seen entering the gallbladder. Two windows are visible in the hepatocystic triangle, separating the duct from the artery and the artery from the upper tissue/plate, with background liver visible through them. The lower gallbladder is partially mobilized, exposing the upper window, though the full extent of the cystic plate along the entire inferior margin is partially obscured by the hook and upper attachment.",
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
      "confidence": 0.92
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
      "name": "cystic_plate",
      "confidence": 0.7
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "irrigator",
      "box_2d": [
       0,
       548,
       567,
       899
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       363,
       108,
       542,
       230
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       576,
       465,
       791,
       573
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       304,
       307,
       662,
       498
      ],
      "confidence": 0.8
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       121,
       380,
       364
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       395,
       441,
       634
      ],
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.99,
     "hits": 21
    },
    "fat": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 21
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 21
    },
    "liver": {
     "first": 1.0,
     "last": 22.0,
     "best": 0.99,
     "hits": 20
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 10
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 8
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 22.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 22.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": [
    {
     "what": "c1",
     "on": true,
     "since": 20.0
    },
    {
     "what": "c2",
     "on": true,
     "since": 20.0
    }
   ]
  },
  {
   "t": 23.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.8
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: The hepatocystic triangle is well cleared of fat and fibrous tissue with clear windows visible between the duct, artery, and cystic plate. C3: The lower third of the gallbladder is dissected off the liver bed, exposing the cystic plate behind the tubular structures.",
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
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "hook",
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
       381,
       467,
       627
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       598,
       747,
       910
      ],
      "confidence": 0.9
     },
     {
      "label": "irrigator",
      "box_2d": [
       87,
       638,
       605,
       916
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       633,
       462,
       866,
       566
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.99,
     "hits": 22
    },
    "fat": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 22
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 22
    },
    "liver": {
     "first": 1.0,
     "last": 23.0,
     "best": 0.99,
     "hits": 21
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 11
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 24.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery on the right) are clearly skeletonized and running toward the gallbladder. C2: Two clear full-thickness windows are visible between the duct and artery (showing a lymph node/liver behind) and between the artery and liver bed. C3: The view is very close-up on the hepatocystic triangle, so the lower gallbladder margin and cystic plate dissection cannot be fully confirmed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
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
      "name": "liver",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
     },
     {
      "name": "fat",
      "confidence": 0.75
     },
     {
      "name": "gallbladder",
      "confidence": 0.6
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       490,
       727,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       457,
       473,
       755,
       597
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       73,
       276,
       529,
       508
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.99,
     "hits": 22
    },
    "fat": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 23
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 23
    },
    "liver": {
     "first": 1.0,
     "last": 24.0,
     "best": 0.99,
     "hits": 22
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 12
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 10
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 24.0,
     "best": 0.9,
     "hits": 8
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 25.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.4
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left, cystic artery to the right) are clearly dissected and seen entering the gallbladder. C2: Two clear windows are visible between the duct and artery and between the artery and the posterior tissue/cystic plate, with liver visible through the central window. C3: The gallbladder neck is elevated, exposing tissue behind the structures, though the full extent of the lower gallbladder separation along the cystic plate is partially obscured by the upper attachment and angle.",
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
      "name": "cystic_plate",
      "confidence": 0.65
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "hook",
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
       532,
       477,
       881
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       393,
       437,
       563
      ],
      "confidence": 0.89
     },
     {
      "label": "grasper",
      "box_2d": [
       323,
       110,
       466,
       242
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       267,
       524,
       771,
       915
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       534,
       433,
       717,
       517
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.99,
     "hits": 23
    },
    "fat": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 24
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 24
    },
    "liver": {
     "first": 1.0,
     "last": 25.0,
     "best": 0.99,
     "hits": 23
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 13
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 11
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 26.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and upper cystic artery) are clearly dissected and seen entering the gallbladder neck. C2: A window is visible between the cystic duct and cystic artery where the hook is dissecting, and some clearance is seen above the artery, though the hook partially obscures the view. C3: The lower gallbladder remains largely attached to the liver bed at the top of the frame, so the cystic plate is not fully exposed.",
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
      "confidence": 0.92
     },
     {
      "name": "cystic_artery",
      "confidence": 0.9
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet sufficiently mobilized off the cystic plate (C3 not achieved).",
    "boxes": [
     {
      "box_2d": [
       0,
       116,
       996,
       853
      ],
      "label": "gallbladder",
      "confidence": 0.99
     },
     {
      "box_2d": [
       2,
       608,
       483,
       868
      ],
      "label": "liver",
      "confidence": 0.85
     },
     {
      "box_2d": [
       337,
       107,
       502,
       310
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       181,
       529,
       719,
       915
      ],
      "label": "irrigator",
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.99,
     "hits": 24
    },
    "fat": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 25
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 25
    },
    "liver": {
     "first": 1.0,
     "last": 26.0,
     "best": 0.99,
     "hits": 24
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 14
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 12
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 26.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 27.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.8
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are clearly dissected and seen entering the gallbladder. C2: The hepatocystic triangle is cleared of fat and tissue, revealing windows between the duct, artery, and cystic plate with the liver visible behind. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the cystic plate behind the dissected structures.",
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
      "name": "cystic_plate",
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.8
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
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       116,
       792,
       625
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       570,
       582,
       912
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       381,
       108,
       569,
       298
      ],
      "confidence": 0.98
     },
     {
      "label": "irrigator",
      "box_2d": [
       447,
       536,
       963,
       916
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       595,
       495,
       762,
       571
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.99,
     "hits": 25
    },
    "fat": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 26
    },
    "liver": {
     "first": 1.0,
     "last": 27.0,
     "best": 0.99,
     "hits": 25
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 15
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 13
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 27.0,
     "best": 0.9,
     "hits": 11
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 27.0,
     "best": 0.85,
     "hits": 7
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 28.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.75
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder. Two windows are dissected between the structures and the liver bed, with background liver visible through the lower window. The lower gallbladder is separated from the liver bed, exposing the cystic plate behind the artery.",
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
      "name": "cystic_plate",
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       581,
       539,
       909
      ],
      "label": "liver",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       148,
       998,
       772
      ],
      "label": "gallbladder",
      "confidence": 0.96
     },
     {
      "box_2d": [
       442,
       107,
       632,
       320
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       390,
       551,
       875,
       918
      ],
      "label": "hook",
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.99,
     "hits": 26
    },
    "fat": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 27
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 27
    },
    "liver": {
     "first": 1.0,
     "last": 28.0,
     "best": 0.99,
     "hits": 26
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 16
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 28.0,
     "best": 0.9,
     "hits": 12
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 29.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.05,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the cystic duct and cystic artery) are visible entering the gallbladder. C2: The hepatocystic triangle is still filled with connective tissue and fat, with no clear full-thickness windows visible between the structures. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the cystic plate superiorly.",
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
      "confidence": 0.92
     },
     {
      "name": "cystic_artery",
      "confidence": 0.88
     },
     {
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "The hepatocystic triangle is not completely cleared of tissue to form full-thickness windows.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       172,
       978,
       668
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       618,
       584,
       910
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       471,
       108,
       680,
       344
      ],
      "confidence": 0.98
     },
     {
      "label": "irrigator",
      "box_2d": [
       486,
       573,
       982,
       916
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.99,
     "hits": 27
    },
    "fat": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 28
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 28
    },
    "liver": {
     "first": 1.0,
     "last": 29.0,
     "best": 0.99,
     "hits": 27
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 17
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 29.0,
     "best": 0.9,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 29.0,
     "best": 0.85,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": true,
     "since": 27.0
    },
    "cvs": {
     "on": true,
     "since": 27.0
    }
   },
   "events": [
    {
     "what": "c3",
     "on": true,
     "since": 27.0
    },
    {
     "what": "cvs",
     "on": true,
     "since": 27.0
    }
   ]
  },
  {
   "t": 30.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the prominent cystic duct inferiorly and the cystic artery superiorly) are clearly dissected and seen entering the gallbladder. C2: A clear full-thickness window is visible between the cystic duct and cystic artery, and the hook is positioned in the space above the artery toward the cystic plate. C3: The lower portion of the gallbladder is dissected off the liver bed exposing the cystic plate, though the hook partially obscures the upper aspect of the plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
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
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
      "confidence": 0.75
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       400,
       497,
       698
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       273,
       111,
       439,
       295
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       113,
       672,
       916
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       2,
       127,
       666,
       434
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       468,
       479,
       643,
       575
      ],
      "label": "hepatocystic_window",
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.99,
     "hits": 28
    },
    "fat": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 29
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 29
    },
    "liver": {
     "first": 1.0,
     "last": 30.0,
     "best": 0.99,
     "hits": 28
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 18
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 14
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 30.0,
     "best": 0.85,
     "hits": 10
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": true,
     "since": 27.0
    },
    "cvs": {
     "on": true,
     "since": 27.0
    }
   },
   "events": []
  },
  {
   "t": 31.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and upper cystic artery) are clearly dissected and seen entering the gallbladder. C2: There is a clear window between the cystic duct and cystic artery, though the window above the artery against the cystic plate is still partially obscured by connective tissue. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing a large portion of the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.8
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
       228,
       775,
       653
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       584,
       609,
       916
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       409,
       107,
       599,
       369
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       550,
       642,
       861,
       914
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       569,
       523,
       730,
       633
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       662,
       438,
       861,
       613
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.99,
     "hits": 29
    },
    "fat": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 30
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 30
    },
    "liver": {
     "first": 1.0,
     "last": 31.0,
     "best": 0.99,
     "hits": 29
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 19
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 31.0,
     "best": 0.9,
     "hits": 15
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": true,
     "since": 27.0
    },
    "cvs": {
     "on": true,
     "since": 27.0
    }
   },
   "events": []
  },
  {
   "t": 32.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the lower gallbladder. C2: Two full-thickness hepatocystic windows are dissected open with background tissue visible through both gaps. C3: The lower gallbladder is not clearly separated from the liver bed to expose the cystic plate, and the hook shaft occludes the posterior aspect.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
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
      "name": "liver",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "C3 is not achieved as the lower gallbladder is not separated from the cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       347,
       436,
       572
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       423,
       241,
       747,
       451
      ],
      "confidence": 0.89
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       508,
       608,
       911
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       380,
       558,
       992,
       916
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       650,
       372,
       907,
       528
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.99,
     "hits": 30
    },
    "fat": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 31
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 31
    },
    "liver": {
     "first": 1.0,
     "last": 32.0,
     "best": 0.99,
     "hits": 30
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 20
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": true,
     "since": 27.0
    },
    "cvs": {
     "on": true,
     "since": 27.0
    }
   },
   "events": []
  },
  {
   "t": 33.0,
   "label": {
    "cvs": {
     "c1": 0.12,
     "c2": 0.18,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is still ongoing with the hook and two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: Although a small opening is forming inferiorly, there are not two clear full-thickness windows through the hepatocystic triangle. C3: The lower third of the gallbladder remains largely attached to the liver bed without full exposure of the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.45
     },
     {
      "name": "cystic_duct",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle prevents definitive identification of both the cystic duct and cystic artery.",
    "boxes": [
     {
      "box_2d": [
       0,
       112,
       543,
       634
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       447,
       348,
       787,
       579
      ],
      "label": "cystic_duct",
      "confidence": 0.88
     },
     {
      "box_2d": [
       78,
       348,
       513,
       555
      ],
      "label": "cystic_artery",
      "confidence": 0.77
     },
     {
      "box_2d": [
       50,
       587,
       661,
       917
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       508,
       110,
       717,
       264
      ],
      "label": "grasper",
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.99,
     "hits": 31
    },
    "fat": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 32
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 32
    },
    "liver": {
     "first": 1.0,
     "last": 33.0,
     "best": 0.99,
     "hits": 31
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 20
    },
    "blood": {
     "first": 3.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": true,
     "since": 27.0
    },
    "cvs": {
     "on": true,
     "since": 27.0
    }
   },
   "events": []
  },
  {
   "t": 34.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a single bulging structure (likely the cystic duct or infundibulum) is partially dissected, and two distinct tubular structures entering the gallbladder are not yet visible. C2: The hepatocystic triangle is still filled with connective tissue and no full-thickness windows have been cleared. C3: The lower portion of the gallbladder remains attached to the liver bed with only a small superficial incision in the peritoneum.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and the cystic structures are not yet fully isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       148,
       624,
       713
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       156,
       542,
       722,
       917
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       574,
       114,
       828,
       326
      ],
      "label": "grasper",
      "confidence": 0.93
     },
     {
      "box_2d": [
       524,
       398,
       802,
       554
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
     "last": 34.0,
     "best": 0.99,
     "hits": 32
    },
    "fat": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 33
    },
    "liver": {
     "first": 1.0,
     "last": 34.0,
     "best": 0.99,
     "hits": 32
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 21
    },
    "blood": {
     "first": 3.0,
     "last": 34.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 20.0
    },
    "c2": {
     "on": true,
     "since": 20.0
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": [
    {
     "what": "c3",
     "on": false
    },
    {
     "what": "cvs",
     "on": false,
     "since": null
    }
   ]
  },
  {
   "t": 35.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and artery are not yet distinctly isolated as two separate tubular structures entering the gallbladder, with the hook instrument also partially obstructing the central area. C2: Although there is a small dissected opening inferiorly, two clear full-thickness windows through the hepatocystic triangle are not yet established. C3: The lower part of the gallbladder remains attached to the liver bed and the cystic plate is not fully exposed along the inferior margin.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "cystic_duct",
      "confidence": 0.6
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete and the hook instrument shaft partially occludes the view of the structures.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       137,
       689,
       615
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       640,
       126,
       866,
       298
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       3,
       498,
       664,
       917
      ],
      "confidence": 0.91
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       566,
       362,
       869,
       515
      ],
      "confidence": 0.83
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       278,
       388,
       546,
       501
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       763,
       487,
       984,
       605
      ],
      "confidence": 0.8
     },
     {
      "label": "liver",
      "box_2d": [
       465,
       684,
       847,
       916
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.99,
     "hits": 32
    },
    "fat": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 33
    },
    "liver": {
     "first": 1.0,
     "last": 35.0,
     "best": 0.99,
     "hits": 32
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 21
    },
    "blood": {
     "first": 3.0,
     "last": 34.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": [
    {
     "what": "c1",
     "on": false
    },
    {
     "what": "c2",
     "on": false
    }
   ]
  },
  {
   "t": 36.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct) is partially visible below the hook, while a second tubular structure is not clearly delineated. C2: There is one full-thickness window visible at the bottom, but the upper region of the hepatocystic triangle is still filled with connective tissue being dissected by the hook. C3: A small area of the cystic plate is exposed where the hook is dissecting, but the gallbladder is not yet separated along its whole inferior margin and the shaft of the hook occludes much of the area.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.8
     },
     {
      "name": "cystic_duct",
      "confidence": 0.7
     },
     {
      "name": "cystic_plate",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete and the electrocautery hook shaft partially obstructs the view of the upper triangle and cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       167,
       686,
       733
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       638,
       128,
       871,
       331
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       534,
       658,
       917
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       138,
       115,
       607,
       362
      ],
      "confidence": 0.85
     },
     {
      "label": "liver",
      "box_2d": [
       484,
       687,
       866,
       915
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       770,
       524,
       984,
       637
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.99,
     "hits": 32
    },
    "fat": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 33
    },
    "liver": {
     "first": 1.0,
     "last": 36.0,
     "best": 0.99,
     "hits": 32
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 21
    },
    "blood": {
     "first": 3.0,
     "last": 34.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 37.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not yet fully isolated. C2: There is a small window inferiorly, but the hepatocystic triangle is not cleared of fat and connective tissue to show two full-thickness windows. C3: The lower third of the gallbladder remains attached to the liver bed and the cystic plate is not fully exposed.",
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
      "confidence": 0.5
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct, cystic artery, and cystic plate are still obscured by peritoneum and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       212,
       1000,
       807
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       114,
       637,
       438
      ],
      "label": "liver",
      "confidence": 0.91
     },
     {
      "box_2d": [
       626,
       124,
       858,
       368
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       223,
       580,
       641,
       916
      ],
      "label": "hook",
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.99,
     "hits": 33
    },
    "fat": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 34
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 34
    },
    "liver": {
     "first": 1.0,
     "last": 37.0,
     "best": 0.99,
     "hits": 33
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 21
    },
    "blood": {
     "first": 3.0,
     "last": 37.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 38.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the cystic duct is partially defined below a single window, while the superior portion of the triangle remains undissected without a distinct tubular artery. C2: One small window is open inferiorly, but dense tissue and fat still fill the rest of the hepatocystic triangle. C3: The gallbladder remains largely attached to the liver bed with minimal exposure of the cystic plate.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet clearly exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       154,
       981,
       659
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       618,
       862,
       916
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       545,
       592,
       908
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       554,
       111,
       752,
       308
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       698,
       471,
       893,
       575
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.99,
     "hits": 34
    },
    "fat": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 35
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 35
    },
    "liver": {
     "first": 1.0,
     "last": 38.0,
     "best": 0.99,
     "hits": 34
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 22
    },
    "blood": {
     "first": 3.0,
     "last": 38.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 39.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one dilated tubular-like structure (likely the cystic duct or infundibulum) is partially dissected, and two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: A small window is beginning to form below the prominent structure, but the hepatocystic triangle is still largely covered in connective tissue and not fully cleared. C3: The lower part of the gallbladder remains attached to the liver bed, with the hook cautery actively dissecting the peritoneum.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "cystic_duct",
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
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
      "name": "liver",
      "confidence": 0.8
     },
     {
      "name": "blood",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet clearly exposed to confirm the critical view of safety.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       110,
       560,
       683
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       468,
       338,
       772,
       519
      ],
      "confidence": 0.87
     },
     {
      "label": "hook",
      "box_2d": [
       18,
       534,
       596,
       913
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       525,
       110,
       735,
       256
      ],
      "confidence": 0.9
     },
     {
      "label": "liver",
      "box_2d": [
       390,
       608,
       831,
       910
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       712,
       485,
       935,
       599
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.99,
     "hits": 35
    },
    "fat": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 36
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 36
    },
    "liver": {
     "first": 1.0,
     "last": 39.0,
     "best": 0.99,
     "hits": 35
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 23
    },
    "blood": {
     "first": 3.0,
     "last": 39.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 40.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only one thick, bulbous structure is partially dissected in the center, and two distinct tubular structures entering the gallbladder are not yet visible. C2: One small window is opening below the main structure, but the hepatocystic triangle is still covered by dense connective tissue and lacks two clear full-thickness windows. C3: The gallbladder is being dissected off the liver bed at the top, partially exposing the cystic plate, though separation along the whole inferior margin is incomplete.",
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
      "confidence": 0.8
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
     },
     {
      "name": "blood",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are not yet clearly isolated as two distinct tubular structures.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       0,
       547,
       544,
       907
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       496,
       111,
       675,
       241
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       115,
       506,
       656
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       609,
       715,
       915
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       678,
       448,
       919,
       591
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.99,
     "hits": 36
    },
    "fat": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 37
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 37
    },
    "liver": {
     "first": 1.0,
     "last": 40.0,
     "best": 0.99,
     "hits": 36
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 23
    },
    "blood": {
     "first": 3.0,
     "last": 40.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 40.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 41.0,
   "label": {
    "cvs": {
     "c1": 0.75,
     "c2": 0.45,
     "c3": 0.25
    },
    "cvs_evidence": "Two tubular structures (cystic duct on the left and a thinner cystic artery on the right) are visible entering the gallbladder neck. A full-thickness window is clearly open between the cystic duct and artery, though the window between the artery and the cystic plate is still being dissected by the hook. The lower gallbladder is only partially mobilized, so the cystic plate is not yet exposed along the entire inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
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
      "confidence": 0.9
     },
     {
      "name": "liver",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
     },
     {
      "name": "fat",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection between the cystic artery and cystic plate is incomplete, so full clearance of the hepatocystic triangle and separation from the liver bed are not yet confirmed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       240,
       672,
       563
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       7,
       561,
       574,
       915
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       539,
       494,
       762
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       599,
       362,
       875,
       536
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 37
    },
    "fat": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 38
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 38
    },
    "liver": {
     "first": 1.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 37
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 24
    },
    "blood": {
     "first": 3.0,
     "last": 40.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 40.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 42.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet clearly skeletonized as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still filled with connective tissue and fat, with no full-thickness windows visible. C3: Only the initial peritoneum and superficial tissue are opened; the lower third of the gallbladder is not yet mobilized off the cystic plate.",
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
      "confidence": 0.85
     },
     {
      "name": "cystic_duct",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage and the biliary and vascular structures are still obscured by connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       139,
       994,
       622
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       557,
       496,
       888
      ],
      "label": "liver",
      "confidence": 0.88
     },
     {
      "box_2d": [
       535,
       111,
       743,
       303
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       248,
       555,
       757,
       916
      ],
      "label": "hook",
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 38
    },
    "fat": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 39
    },
    "liver": {
     "first": 1.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 38
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 24
    },
    "blood": {
     "first": 3.0,
     "last": 40.0,
     "best": 0.7,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 40.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 43.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.2,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct) is clearly isolated and seen entering the gallbladder, while the cystic artery is not yet dissected out as a distinct second tubular structure. C2: One window is visible to the left of the dissected tubular structure, but the remainder of the hepatocystic triangle is still covered with fat and connective tissue. C3: The lower part of the gallbladder remains attached to the liver bed with no clearly exposed cystic plate below the inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.85
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
      "name": "liver",
      "confidence": 0.7
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; only one tubular structure is isolated and the cystic plate is not sufficiently exposed.",
    "boxes": [
     {
      "box_2d": [
       0,
       482,
       775,
       918
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       2,
       113,
       620,
       417
      ],
      "label": "gallbladder",
      "confidence": 0.91
     },
     {
      "box_2d": [
       564,
       219,
       1000,
       695
      ],
      "label": "gallbladder",
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 39
    },
    "fat": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 40
    },
    "liver": {
     "first": 1.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 39
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 25
    },
    "blood": {
     "first": 3.0,
     "last": 43.0,
     "best": 0.8,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 40.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 44.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct on the left) is partially skeletonized, while the rest of the hepatocystic triangle remains covered in fat and connective tissue. C2: The hepatocystic triangle is filled with undissected fibrofatty tissue and peritoneal coverage, with no full-thickness windows visible. C3: The lower portion of the gallbladder remains attached to the liver bed with no exposed cystic plate visible.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.8
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
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; only one structure is partially isolated and no full-thickness windows or cystic plate exposure are present.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       114,
       792,
       918
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       425,
       122,
       1000,
       642
      ],
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.99,
     "hits": 40
    },
    "fat": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 41
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 41
    },
    "liver": {
     "first": 1.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 39
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "blood": {
     "first": 3.0,
     "last": 44.0,
     "best": 0.85,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 40.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 45.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly defined. C2: One small window is forming near the bottom of the hepatocystic triangle, but the upper part remains filled with connective tissue and fat. C3: The gallbladder remains largely attached to the liver bed, with the cystic plate not yet exposed along the inferior margin.",
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
      "name": "hepatocystic_window",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are still covered in connective tissue and the gallbladder is not yet mobilized off the cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       273,
       856,
       647
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       114,
       1000,
       908
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       553,
       114,
       750,
       375
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       267,
       599,
       679,
       916
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       643,
       503,
       796,
       589
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       662,
       514,
       1000,
       810
      ],
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.99,
     "hits": 41
    },
    "fat": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 42
    },
    "liver": {
     "first": 1.0,
     "last": 45.0,
     "best": 0.99,
     "hits": 40
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "blood": {
     "first": 3.0,
     "last": 44.0,
     "best": 0.85,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 40.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 46.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the peritoneum is being opened over a bulging structure, and two distinct tubular structures entering the gallbladder are not yet isolated. C2: The hepatocystic triangle is still filled with fat and connective tissue with no full-thickness windows cleared. C3: The lower gallbladder remains fully attached to the liver bed with no cystic plate exposed.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are not yet circumferentially isolated from the surrounding fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       165,
       713,
       674
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       681,
       584,
       915
      ],
      "confidence": 0.9
     },
     {
      "label": "liver",
      "box_2d": [
       203,
       111,
       716,
       337
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       668,
       136,
       888,
       332
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       569,
       592,
       886,
       911
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.99,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 43
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 43
    },
    "liver": {
     "first": 1.0,
     "last": 46.0,
     "best": 0.99,
     "hits": 41
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 27
    },
    "blood": {
     "first": 3.0,
     "last": 46.0,
     "best": 0.85,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 40.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 47.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only the cystic duct is partially exposed in the lower portion of the dissection, while a second tubular structure (cystic artery) is not yet clearly isolated entering the gallbladder. C2: The hepatocystic triangle is only superficially opened without full-thickness windows cleared of connective tissue. C3: A small area of the cystic plate is exposed superiorly, but the lower third of the gallbladder remains attached to the liver bed.",
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
      "confidence": 0.75
     },
     {
      "name": "cystic_plate",
      "confidence": 0.65
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; tubular structures and windows are not yet completely skeletonized.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       137,
       775,
       656
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       617,
       706,
       917
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       626,
       381,
       932,
       547
      ],
      "confidence": 0.77
     },
     {
      "label": "grasper",
      "box_2d": [
       693,
       142,
       925,
       313
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       664,
       536,
       996,
       898
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.99,
     "hits": 43
    },
    "fat": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 44
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 44
    },
    "liver": {
     "first": 1.0,
     "last": 47.0,
     "best": 0.99,
     "hits": 42
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 28
    },
    "blood": {
     "first": 3.0,
     "last": 46.0,
     "best": 0.85,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 47.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 48.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The peritoneum over the hepatocystic triangle is just being incised and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly identifiable. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows created yet. C3: The lower portion of the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages; structures are still covered by peritoneum, fat, and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       135,
       712,
       641
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       607,
       532,
       907
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       662,
       128,
       869,
       321
      ],
      "confidence": 0.93
     },
     {
      "label": "irrigator",
      "box_2d": [
       461,
       573,
       804,
       915
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 44
    },
    "fat": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 45
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 45
    },
    "liver": {
     "first": 1.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 43
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 28
    },
    "blood": {
     "first": 3.0,
     "last": 46.0,
     "best": 0.85,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 47.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 49.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only a partially dissected rounded structure is visible within the triangle, and two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: The hepatocystic triangle is still filled with connective tissue and no full-thickness windows are opened. C3: The peritoneum along the lower gallbladder margin is just being incised with the hook, so the lower gallbladder is not yet separated from the cystic plate.",
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
      "name": "blood",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage and the cystic duct and artery are not yet circumferentially skeletonized.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       105,
       590,
       599,
       916
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       614,
       122,
       852,
       332
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       480,
       547,
       655
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       125,
       646,
       710
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       542,
       397,
       817,
       569
      ],
      "confidence": 0.77
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       234,
       420,
       480,
       516
      ],
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 45
    },
    "fat": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 46
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 46
    },
    "liver": {
     "first": 1.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 44
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 29
    },
    "blood": {
     "first": 3.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 47.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 50.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only a partially dissected rounded structure is visible within the fat, not two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still filled with connective tissue and no full-thickness windows are established. C3: The peritoneum is just being scored and the lower part of the gallbladder is not yet elevated off the cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
      "confidence": 0.4
     },
     {
      "name": "blood",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; tubular structures and windows are not yet isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       115,
       686,
       642
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       600,
       449,
       892
      ],
      "label": "liver",
      "confidence": 0.88
     },
     {
      "box_2d": [
       267,
       538,
       850,
       916
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       608,
       119,
       843,
       292
      ],
      "label": "grasper",
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.99,
     "hits": 46
    },
    "fat": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 47
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 47
    },
    "liver": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.99,
     "hits": 45
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 29
    },
    "blood": {
     "first": 3.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 51.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: One window is opened at the bottom, delimiting one structure on the right, while a second structure on the left is buried in tissue and obstructed by the hook. C2: One full-thickness window is visible at the bottom, but the upper part of the hepatocystic triangle is still covered with connective tissue and fat being dissected by the hook. C3: The lower third of the gallbladder is not yet mobilized from the liver bed to expose the cystic plate.",
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
      "confidence": 0.85
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, and the hook shaft partially obstructs the view.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       116,
       1000,
       665
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       480,
       594,
       1000,
       915
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       537,
       362,
       860,
       526
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       233,
       363,
       520,
       497
      ],
      "confidence": 0.82
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       525,
       661,
       916
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       625,
       122,
       854,
       276
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.99,
     "hits": 47
    },
    "fat": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 48
    },
    "liver": {
     "first": 1.0,
     "last": 51.0,
     "best": 0.99,
     "hits": 46
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 30
    },
    "blood": {
     "first": 3.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 52.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. C2: The hepatocystic triangle is dissected with clear windows visible between the duct and artery and above the artery. C3: The hook is actively dissecting the posterior/inferior attachment, so the lower gallbladder is not yet fully mobilized off the cystic plate.",
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is still being dissected off the cystic plate (C3 not yet achieved).",
    "boxes": [
     {
      "box_2d": [
       0,
       109,
       657,
       638
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       597,
       882,
       913
      ],
      "label": "liver",
      "confidence": 0.88
     },
     {
      "box_2d": [
       39,
       544,
       610,
       913
      ],
      "label": "hook",
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.99,
     "hits": 48
    },
    "fat": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 49
    },
    "liver": {
     "first": 1.0,
     "last": 52.0,
     "best": 0.99,
     "hits": 47
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 31
    },
    "blood": {
     "first": 3.0,
     "last": 52.0,
     "best": 0.85,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 52.0,
     "best": 0.9,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 53.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet clearly isolated, as the tissue in the hepatocystic triangle is still largely covered by peritoneum and fat. C2: Although a small opening is being created inferiorly, full-thickness windows clearing the hepatocystic triangle are not yet achieved. C3: The lower third of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "confidence": 0.5
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in an early stage; tubular structures and the cystic plate are not sufficiently exposed to confirm the critical view of safety.",
    "boxes": [
     {
      "box_2d": [
       0,
       185,
       996,
       625
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       574,
       517,
       868
      ],
      "label": "liver",
      "confidence": 0.9
     },
     {
      "box_2d": [
       640,
       126,
       818,
       323
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       217,
       492,
       880,
       916
      ],
      "label": "irrigator",
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.99,
     "hits": 49
    },
    "fat": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 50
    },
    "liver": {
     "first": 1.0,
     "last": 53.0,
     "best": 0.99,
     "hits": 48
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 31
    },
    "blood": {
     "first": 3.0,
     "last": 53.0,
     "best": 0.85,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 52.0,
     "best": 0.9,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 54.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular-like structures (likely cystic duct and artery) are partially exposed in the dissected region, though the hook instrument obscures part of the upper aspect. C2: There is a window below the structures, but no clear full-thickness window separating the two structures or above the artery to the cystic plate. C3: The gallbladder remains largely attached to the liver bed with no exposed cystic plate along the inferior margin.",
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
      "confidence": 0.75
     },
     {
      "name": "cystic_artery",
      "confidence": 0.7
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
      "name": "blood",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and cystic plate, with the hook cautery partially obstructing the upper view.",
    "boxes": [
     {
      "box_2d": [
       0,
       108,
       638,
       535
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       151,
       571,
       995,
       915
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       609,
       120,
       829,
       253
      ],
      "label": "grasper",
      "confidence": 0.88
     },
     {
      "box_2d": [
       0,
       479,
       554,
       853
      ],
      "label": "hook",
      "confidence": 0.89
     },
     {
      "box_2d": [
       556,
       341,
       825,
       498
      ],
      "label": "cystic_duct",
      "confidence": 0.76
     },
     {
      "box_2d": [
       464,
       463,
       750,
       587
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
     "last": 54.0,
     "best": 0.99,
     "hits": 50
    },
    "fat": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 51
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 51
    },
    "liver": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.99,
     "hits": 49
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 32
    },
    "blood": {
     "first": 3.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 55.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the peritoneum is being scored and a bulbous structure (likely the cystic duct or infundibulum) is partially visible, without two distinct tubular structures isolated. C2: The hepatocystic triangle is still covered in fat and connective tissue with no full-thickness windows dissected. C3: The gallbladder remains fully attached to the liver bed and the electrocautery hook is just beginning to incise the peritoneum along the margin.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.6
     },
     {
      "name": "blood",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages; the cystic duct and artery are not yet isolated or clearly visible.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       633,
       564
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       180,
       569,
       833,
       916
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       483,
       574,
       866
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       602,
       117,
       812,
       256
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.99,
     "hits": 51
    },
    "fat": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 52
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 52
    },
    "liver": {
     "first": 1.0,
     "last": 55.0,
     "best": 0.99,
     "hits": 50
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 32
    },
    "blood": {
     "first": 3.0,
     "last": 55.0,
     "best": 0.85,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 56.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, putative cystic artery above) are visible entering the gallbladder neck, though smoke partially obscures the upper aspect. C2: A clear full-thickness window is dissected between the two structures, but the upper window between the artery and cystic plate is obscured by smoke and glare. C3: The cystic plate and upper dissection area are heavily obscured by electrocautery smoke and glare from the hook.",
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
      "confidence": 0.8
     },
     {
      "name": "fat",
      "confidence": 0.7
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
    "reason_if_not": "Smoke and glare from the electrocautery hook obscure the upper hepatocystic triangle and cystic plate, preventing complete confirmation of the Critical View of Safety.",
    "boxes": [
     {
      "box_2d": [
       76,
       564,
       966,
       917
      ],
      "confidence": 0.95,
      "label": "liver"
     },
     {
      "box_2d": [
       9,
       176,
       929,
       504
      ],
      "confidence": 0.92,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       573,
       114,
       749,
       321
      ],
      "confidence": 0.96,
      "label": "grasper"
     },
     {
      "box_2d": [
       4,
       422,
       528,
       621
      ],
      "confidence": 0.88,
      "label": "irrigator"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.99,
     "hits": 51
    },
    "fat": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 52
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 52
    },
    "liver": {
     "first": 1.0,
     "last": 56.0,
     "best": 0.99,
     "hits": 50
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 32
    },
    "blood": {
     "first": 3.0,
     "last": 56.0,
     "best": 0.85,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 56.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 57.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not yet clearly isolated, as the tissue in the triangle remains thick and only a single bulbous structure is partially cleared. C2: While there is a small opening created near the bottom of the dissection, the hepatocystic triangle is not sufficiently cleared of fat and connective tissue to form two full-thickness windows. C3: The lower part of the gallbladder remains attached to the liver bed with the hook actively dissecting the peritoneum, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not yet clearly isolated as distinct tubular structures.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       163,
       626,
       650
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       115,
       874,
       901
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       141,
       529,
       656,
       915
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       589,
       118,
       777,
       302
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       719,
       458,
       926,
       558
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.99,
     "hits": 52
    },
    "fat": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 53
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 53
    },
    "liver": {
     "first": 1.0,
     "last": 57.0,
     "best": 0.99,
     "hits": 51
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 32
    },
    "blood": {
     "first": 3.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 56.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 58.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures entering the gallbladder are not yet isolated. C2: The hepatocystic triangle is still filled with connective tissue and no full-thickness windows are visible. C3: The lower portion of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "cystic_duct",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not yet fully dissected to clearly isolate the cystic duct and artery.",
    "boxes": [
     {
      "box_2d": [
       1,
       520,
       623,
       912
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       611,
       119,
       804,
       278
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       123,
       628,
       649
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       574,
       878,
       918
      ],
      "label": "liver",
      "confidence": 0.85
     },
     {
      "box_2d": [
       561,
       333,
       842,
       494
      ],
      "label": "cystic_duct",
      "confidence": 0.82
     },
     {
      "box_2d": [
       326,
       371,
       566,
       473
      ],
      "label": "cystic_artery",
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.99,
     "hits": 53
    },
    "fat": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 54
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 54
    },
    "liver": {
     "first": 1.0,
     "last": 58.0,
     "best": 0.99,
     "hits": 52
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 32
    },
    "blood": {
     "first": 3.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 56.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 59.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not yet clearly isolated, as the tissue is still largely covered in fat and peritoneum. C2: The hepatocystic triangle is not cleared, with the electrocautery hook actively dissecting the peritoneum and no full-thickness windows visible. C3: The lower part of the gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage and critical structures are still obscured by fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       129,
       702,
       635
      ],
      "confidence": 0.96,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       518,
       622,
       913
      ],
      "confidence": 0.98,
      "label": "hook"
     },
     {
      "box_2d": [
       655,
       128,
       860,
       276
      ],
      "confidence": 0.93,
      "label": "grasper"
     },
     {
      "box_2d": [
       0,
       533,
       989,
       915
      ],
      "confidence": 0.88,
      "label": "liver"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 54
    },
    "fat": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 55
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 55
    },
    "liver": {
     "first": 1.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 53
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 32
    },
    "blood": {
     "first": 3.0,
     "last": 59.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 56.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 60.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.8
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: A clear full-thickness window is visible between the cystic duct and cystic artery, and the hook is dissecting the space between the artery and the cystic plate, though the upper window is still partially being cleared. C3: The lower part of the gallbladder is mobilized off the liver bed, exposing the cystic plate behind the dissected structures.",
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
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       0,
       499,
       490,
       824
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       525,
       110,
       688,
       322
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       539,
       995,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       166,
       977,
       564
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       655,
       463,
       837,
       535
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.99,
     "hits": 55
    },
    "fat": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 56
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 56
    },
    "liver": {
     "first": 1.0,
     "last": 60.0,
     "best": 0.99,
     "hits": 54
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 33
    },
    "blood": {
     "first": 3.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 60.0,
     "best": 0.9,
     "hits": 20
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 61.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left/inferiorly and cystic artery on the right/superiorly) are visible entering the gallbladder. C2: One clear window is dissected between the two tubular structures, while the hook is actively dissecting the upper window between the artery and the cystic plate, making full clearance borderline. C3: The lower portion of the gallbladder is still being mobilized by the hook and does not yet show the cystic plate along the entire inferior margin.",
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
      "name": "cystic_artery",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.88
     },
     {
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection of the upper hepatocystic window and cystic plate is still in progress.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       197,
       810,
       569
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       115,
       561,
       827,
       913
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       469,
       111,
       630,
       335
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       534,
       427,
       818
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       608,
       462,
       798,
       547
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.99,
     "hits": 56
    },
    "fat": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 57
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 57
    },
    "liver": {
     "first": 1.0,
     "last": 61.0,
     "best": 0.99,
     "hits": 55
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 34
    },
    "blood": {
     "first": 3.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 61.0,
     "best": 0.9,
     "hits": 21
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 62.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (likely cystic duct below/left and cystic artery above/right) are visible entering the gallbladder, with a window between them. C2: A full-thickness window is clearly visible between the two tubular structures, though clearance between the superior structure (artery) and the cystic plate is still being dissected with the hook. C3: The lower part of the gallbladder is not yet mobilized off the liver bed to expose the cystic plate.",
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
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
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
    "reason_if_not": "Dissection of the upper window and cystic plate is incomplete, preventing full confirmation of the Critical View of Safety.",
    "boxes": [
     {
      "box_2d": [
       0,
       196,
       880,
       658
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       583,
       1000,
       917
      ],
      "label": "liver",
      "confidence": 0.93
     },
     {
      "box_2d": [
       46,
       550,
       543,
       908
      ],
      "label": "hook",
      "confidence": 0.99
     },
     {
      "box_2d": [
       507,
       111,
       693,
       344
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       273,
       432,
       477,
       532
      ],
      "label": "cystic_artery",
      "confidence": 0.72
     },
     {
      "box_2d": [
       631,
       484,
       849,
       561
      ],
      "label": "hepatocystic_window",
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 58
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 58
    },
    "liver": {
     "first": 1.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 56
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 35
    },
    "blood": {
     "first": 3.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 62.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 60.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": [
    {
     "what": "c1",
     "on": true,
     "since": 60.0
    }
   ]
  },
  {
   "t": 63.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two strand-like structures (likely cystic duct and artery) are emerging during hook dissection, though connective tissue still partially envelopes them and the hook shaft obscures the upper aspect. C2: A partial window is being opened between the lower structure and the upper strand, but full-thickness clearance across both windows is not yet established. C3: The lower gallbladder is not separated from the liver bed and the hook shaft occludes the cystic plate region.",
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
      "confidence": 0.75
     },
     {
      "name": "cystic_artery",
      "confidence": 0.7
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and partial occlusion by the electrocautery hook shaft prevent definitive confirmation of the critical view of safety.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       206,
       966,
       649
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       121,
       114,
       995,
       397
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       249,
       612,
       857,
       917
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       534,
       111,
       725,
       345
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       521,
       568,
       902
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       662,
       482,
       866,
       565
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.99,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 58
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 58
    },
    "liver": {
     "first": 1.0,
     "last": 63.0,
     "best": 0.99,
     "hits": 56
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 35
    },
    "blood": {
     "first": 3.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 63.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 60.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 64.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.15
    },
    "cvs_evidence": "C1: The shaft of the electrocautery hook obscures the upper part of the triangle, preventing clear identification of two distinct tubular structures entering the gallbladder. C2: Although a window is beginning to form below, the hepatocystic triangle is still filled with connective tissue and partially blocked by the hook shaft. C3: The lower third of the gallbladder is not elevated off the liver bed to expose the cystic plate, and the view is heavily occluded by the instrument.",
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
      "confidence": 0.65
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.6
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
      "confidence": 0.5
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The electrocautery hook shaft occludes a large portion of the hepatocystic triangle, and dissection of the structures is incomplete.",
    "boxes": [
     {
      "box_2d": [
       0,
       484,
       570,
       893
      ],
      "confidence": 0.98,
      "label": "hook"
     },
     {
      "box_2d": [
       568,
       114,
       768,
       362
      ],
      "confidence": 0.98,
      "label": "grasper"
     },
     {
      "box_2d": [
       0,
       213,
       977,
       606
      ],
      "confidence": 0.95,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       115,
       992,
       915
      ],
      "label": "liver"
     },
     {
      "box_2d": [
       549,
       417,
       788,
       521
      ],
      "label": "cystic_duct"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 58
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 58
    },
    "liver": {
     "first": 1.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 56
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 35
    },
    "blood": {
     "first": 3.0,
     "last": 64.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 63.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 60.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 65.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not yet clearly isolated and visible entering the gallbladder, partly occluded by the hook shaft. C2: The hepatocystic triangle is still covered in connective tissue and no full-thickness windows are visible. C3: The lower gallbladder is not separated from the liver bed to expose the cystic plate, and the hook instrument blocks the view of the right side.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete and the hook shaft occludes much of the surgical field.",
    "boxes": [
     {
      "box_2d": [
       0,
       260,
       977,
       638
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       323,
       497,
       856,
       915
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       573,
       115,
       804,
       427
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       114,
       1000,
       903
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
     "last": 65.0,
     "best": 0.99,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 58
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 58
    },
    "liver": {
     "first": 1.0,
     "last": 65.0,
     "best": 0.99,
     "hits": 56
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 35
    },
    "blood": {
     "first": 3.0,
     "last": 64.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 63.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": [
    {
     "what": "c1",
     "on": false
    }
   ]
  },
  {
   "t": 66.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.05,
     "c3": 0.35
    },
    "cvs_evidence": "C1: A likely cystic duct and a thinner medial strand (possible cystic artery) are partially exposed, though not yet cleanly skeletonized as distinct tubular structures entering the gallbladder. C2: There are no full-thickness windows cleared through the hepatocystic triangle, as dense connective tissue still bridges the structures and the background liver is not visible through the gaps. C3: A depression in the tissue plane between the lower gallbladder and the liver bed is partially opened, but the lower gallbladder is not fully mobilized to clearly expose the entire inferior margin of the cystic plate.",
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
      "confidence": 0.65
     },
     {
      "name": "cystic_plate",
      "confidence": 0.55
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; no full-thickness windows have been created to confirm that only two tubular structures enter the gallbladder.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       205,
       725,
       708
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       683,
       823,
       916
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       650,
       138,
       918,
       387
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       811,
       599,
       998,
       873
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       587,
       447,
       877,
       594
      ],
      "confidence": 0.76
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       316,
       485,
       575,
       604
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
     "hits": 58
    },
    "fat": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 59
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 59
    },
    "liver": {
     "first": 1.0,
     "last": 66.0,
     "best": 0.99,
     "hits": 57
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 64.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 66.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 67.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not yet clearly skeletonized and seen entering the gallbladder. C2: There are no full-thickness windows cleared through the hepatocystic triangle, as connective tissue and fat still bridge the space. C3: Only the very beginning of the peritoneum is incised, so the lower part of the gallbladder is not yet separated to expose the full cystic plate.",
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; tubular structures are still embedded in fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       143,
       858,
       736
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       682,
       928,
       917
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       884,
       202,
       994,
       333
      ],
      "confidence": 0.58
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 59
    },
    "fat": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 60
    },
    "liver": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 58
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 64.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 68.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1 is not achieved as two distinct tubular structures entering the gallbladder are not yet isolated. C2 is not achieved because the hepatocystic triangle is still filled with tissue and lacks full-thickness windows. C3 is not achieved as the lower gallbladder is only starting to be dissected off the liver bed.",
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
      "confidence": 0.9
     },
     {
      "name": "fat",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and the cystic duct and artery are not yet clearly isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       174,
       1000,
       656
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       623,
       624,
       915
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       538,
       408,
       810,
       537
      ],
      "confidence": 0.78
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       284,
       439,
       516,
       548
      ],
      "confidence": 0.76
     },
     {
      "label": "grasper",
      "box_2d": [
       573,
       117,
       802,
       345
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       532,
       538,
       973,
       911
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.99,
     "hits": 60
    },
    "fat": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 61
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 61
    },
    "liver": {
     "first": 1.0,
     "last": 68.0,
     "best": 0.99,
     "hits": 59
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 68.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 69.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (likely cystic duct) is partially visible below the hook, while the second tubular structure is not clearly skeletonized or occluded by the hook shaft. C2: One dark full-thickness window is visible below the structure being dissected, but the upper window is still obscured by connective tissue and the electrocautery hook. C3: The lower third of the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and the electrocautery hook shaft partially occludes the view of the structures.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       166,
       999,
       667
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       133,
       112,
       631,
       342
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       600,
       119,
       835,
       359
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       193,
       506,
       782,
       917
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       558,
       413,
       839,
       532
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 60
    },
    "fat": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 61
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 61
    },
    "liver": {
     "first": 1.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 59
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 69.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 70.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not yet clearly isolated and visible, with the hook obstructing the central area. C2: The hepatocystic triangle is still covered in fat and connective tissue without two full-thickness windows visible. C3: The lower part of the gallbladder is not sufficiently dissected off the liver bed to expose the cystic plate along the whole inferior margin.",
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and obstruction by the electrocautery hook prevent confirmation of the cystic duct and artery.",
    "boxes": [
     {
      "box_2d": [
       0,
       188,
       998,
       687
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       650,
       134,
       881,
       381
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       43,
       526,
       691,
       915
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       608,
       990,
       909
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
     "last": 70.0,
     "best": 0.99,
     "hits": 60
    },
    "fat": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 61
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 61
    },
    "liver": {
     "first": 1.0,
     "last": 70.0,
     "best": 0.99,
     "hits": 59
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 70.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 71.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still filled with fat and connective tissue, with no full-thickness windows visible. C3: The lower part of the gallbladder has not been elevated off the liver bed to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage and critical structures remain obscured by fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       205,
       1000,
       718
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       98,
       742,
       418
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       236,
       523,
       790,
       916
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       660,
       131,
       936,
       401
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       607,
       452,
       883,
       578
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.99,
     "hits": 61
    },
    "fat": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 62
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 62
    },
    "liver": {
     "first": 1.0,
     "last": 71.0,
     "best": 0.99,
     "hits": 60
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 71.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 72.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder cannot be confirmed due to early stage of dissection and obscuring fat/connective tissue. C2: The hepatocystic triangle is still filled with fat and connective tissue without clear full-thickness windows. C3: The lower gallbladder remains largely attached to the liver bed with no clearly exposed cystic plate along the inferior margin.",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; fat and connective tissue obscure the cystic duct and artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       192,
       995,
       680
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       132,
       115,
       760,
       399
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       650,
       448,
       866
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       677,
       137,
       916,
       372
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       272,
       517,
       856,
       917
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.99,
     "hits": 62
    },
    "fat": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 63
    },
    "liver": {
     "first": 1.0,
     "last": 72.0,
     "best": 0.99,
     "hits": 61
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 72.0,
     "best": 0.85,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 73.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder. C2: The hepatocystic triangle is still covered with peritoneum, fat, and connective tissue with no full-thickness windows created yet. C3: The lower portion of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are still encased in fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       248,
       994,
       703
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       727,
       161,
       992,
       442
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       414,
       601,
       775,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       107,
       545,
       426
      ],
      "confidence": 0.9
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       671,
       480,
       902
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.99,
     "hits": 63
    },
    "fat": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 64
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 64
    },
    "liver": {
     "first": 1.0,
     "last": 73.0,
     "best": 0.99,
     "hits": 62
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 73.0,
     "best": 0.85,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 74.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Early dissection of the peritoneum over the gallbladder infundibulum; no distinct tubular structures (cystic duct or artery) are isolated yet. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: The gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; the cystic duct and cystic artery are still covered by peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       334,
       992,
       649
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       404,
       912,
       895
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       680,
       149,
       944,
       458
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       243,
       551,
       686,
       917
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.99,
     "hits": 64
    },
    "fat": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 65
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 65
    },
    "liver": {
     "first": 1.0,
     "last": 74.0,
     "best": 0.99,
     "hits": 63
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 73.0,
     "best": 0.85,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 75.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct and artery) are isolated or seen entering the gallbladder yet. C2: The hepatocystic triangle is still filled with fat and connective tissue, with no full-thickness windows created. C3: The lower gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages; neither the cystic duct nor the cystic artery is skeletonized, and the cystic plate is not exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       281,
       994,
       693
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       646,
       991,
       917
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       116,
       684,
       431
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       638,
       137,
       866,
       437
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       84,
       558,
       630,
       912
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.99,
     "hits": 65
    },
    "fat": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 66
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 66
    },
    "liver": {
     "first": 1.0,
     "last": 75.0,
     "best": 0.99,
     "hits": 64
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 76.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are clearly dissected and visible entering the gallbladder. C2: The hepatocystic triangle is still covered in fat and connective tissue with no clear full-thickness windows visible. C3: The electrocautery hook is actively dissecting the peritoneum/connective tissue near the gallbladder margin, and the lower part of the gallbladder is not yet separated from the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
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
      "name": "liver",
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
    "reason_if_not": "Dissection is in an early stage; the cystic duct, cystic artery, and cystic plate are still obscured by fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       186,
       994,
       765
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       676,
       137,
       955,
       395
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       3,
       550,
       667,
       917
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.99,
     "hits": 66
    },
    "fat": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 67
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 67
    },
    "liver": {
     "first": 1.0,
     "last": 76.0,
     "best": 0.99,
     "hits": 64
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 77.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: The hepatocystic triangle remains filled with fat and connective tissue without full-thickness windows. C3: The lower gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are still encased in fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       184,
       995,
       688
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       650,
       931,
       882
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       198,
       557,
       727,
       917
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       655,
       137,
       905,
       395
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.99,
     "hits": 67
    },
    "fat": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 68
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 68
    },
    "liver": {
     "first": 1.0,
     "last": 77.0,
     "best": 0.99,
     "hits": 65
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 78.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet isolated or clearly visible. C2: The hepatocystic triangle is still filled with connective tissue and no full-thickness windows are seen. C3: The lower gallbladder is not separated from the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
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
      "name": "liver",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not yet clearly isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       192,
       831,
       659
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       6,
       616,
       979,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       587,
       424,
       989,
       569
      ],
      "confidence": 0.77
     },
     {
      "label": "hook",
      "box_2d": [
       3,
       503,
       634,
       915
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       744,
       162,
       987,
       363
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.99,
     "hits": 68
    },
    "fat": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 69
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 69
    },
    "liver": {
     "first": 1.0,
     "last": 78.0,
     "best": 0.99,
     "hits": 66
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 79.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Early dissection of the peritoneum and fat; neither the cystic duct nor the cystic artery are isolated as distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows created yet. C3: The electrocautery hook is just scoring the peritoneum at the inferior margin, and the lower gallbladder is not yet mobilized off the cystic plate.",
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
    "reason_if_not": "The hepatocystic triangle is still covered by fat and connective tissue, and the ductal and arterial structures have not been dissected.",
    "boxes": [
     {
      "box_2d": [
       0,
       226,
       850,
       663
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       648,
       787,
       916
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       769,
       180,
       999,
       401
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       617,
       638,
       942,
       905
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
     "last": 79.0,
     "best": 0.99,
     "hits": 69
    },
    "fat": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 70
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 70
    },
    "liver": {
     "first": 1.0,
     "last": 79.0,
     "best": 0.99,
     "hits": 67
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 80.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is at an early stage and two distinct tubular structures connected to the gallbladder are not yet isolated. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: The lower part of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle prevents clear identification of the cystic duct and artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       206,
       854,
       642
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       637,
       986,
       909
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       171,
       120,
       857,
       403
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       374,
       550,
       801,
       914
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       756,
       170,
       999,
       377
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       566,
       444,
       989,
       569
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.99,
     "hits": 70
    },
    "fat": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 71
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 71
    },
    "liver": {
     "first": 1.0,
     "last": 80.0,
     "best": 0.99,
     "hits": 68
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 81.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet dissected out as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still filled with fat and connective tissue, with no full-thickness windows visible. C3: The electrocautery hook is actively dissecting the peritoneum along the gallbladder margin, and the lower gallbladder is not yet separated from the cystic plate.",
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in an early stage; tubular structures (cystic duct and artery) are still obscured by peritoneum, fat, and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       222,
       834,
       653
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       366,
       560,
       915
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       499,
       620,
       803,
       915
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       769,
       173,
       988,
       394
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.99,
     "hits": 71
    },
    "fat": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 72
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 72
    },
    "liver": {
     "first": 1.0,
     "last": 81.0,
     "best": 0.99,
     "hits": 69
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 82.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Dissection is at an early stage and two distinct tubular structures entering the gallbladder are not yet isolated. C2: The hepatocystic triangle is not cleared of fat and connective tissue, with no full-thickness windows visible. C3: The lower gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are not yet separated from surrounding tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       241,
       894,
       703
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       410,
       520,
       939,
       915
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       781,
       168,
       959,
       381
      ],
      "confidence": 0.85
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       680,
       513,
       906
      ],
      "confidence": 0.89
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.99,
     "hits": 72
    },
    "fat": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 73
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 73
    },
    "liver": {
     "first": 1.0,
     "last": 82.0,
     "best": 0.99,
     "hits": 70
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 3.0,
     "last": 82.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 83.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Dissection is in an early stage and only the cystic duct is beginning to be exposed, so two distinct tubular structures are not visible. C2: The hepatocystic triangle is still filled with peritoneum and connective tissue with no cleared windows. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.75
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; cystic artery and cystic plate are not yet exposed.",
    "boxes": [
     {
      "box_2d": [
       0,
       256,
       907,
       704
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       115,
       584,
       429
      ],
      "label": "liver",
      "confidence": 0.9
     },
     {
      "box_2d": [
       200,
       521,
       736,
       916
      ],
      "label": "hook",
      "confidence": 0.92
     },
     {
      "box_2d": [
       655,
       437,
       999,
       578
      ],
      "label": "cystic_duct",
      "confidence": 0.76
     },
     {
      "box_2d": [
       824,
       198,
       966,
       387
      ],
      "label": "grasper",
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.99,
     "hits": 73
    },
    "fat": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 74
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 74
    },
    "liver": {
     "first": 1.0,
     "last": 83.0,
     "best": 0.99,
     "hits": 71
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 82.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 84.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still covered with peritoneum, fat, and connective tissue with no full-thickness windows visible. C3: The lower portion of the gallbladder remains attached to the liver bed, and the cystic plate is not exposed.",
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
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages; the cystic duct and artery remain obscured by overlying tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       240,
       978,
       695
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       659,
       529,
       896
      ],
      "confidence": 0.88
     },
     {
      "label": "irrigator",
      "box_2d": [
       398,
       562,
       854,
       917
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       722,
       465,
       998,
       609
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.99,
     "hits": 74
    },
    "fat": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 75
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 75
    },
    "liver": {
     "first": 1.0,
     "last": 84.0,
     "best": 0.99,
     "hits": 72
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 82.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 85.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder yet. C2: The hepatocystic triangle is still covered in peritoneal and fatty tissue with no full-thickness windows created. C3: The gallbladder is only beginning to be scored along its peritoneal reflection and is not yet separated from the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Early stage of peritoneum incision; cystic duct and artery are not yet dissected out.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       431,
       608,
       724,
       914
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       787,
       185,
       988,
       420
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       289,
       1000,
       683
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       400,
       963,
       914
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.99,
     "hits": 75
    },
    "fat": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 76
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 76
    },
    "liver": {
     "first": 1.0,
     "last": 85.0,
     "best": 0.99,
     "hits": 73
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 82.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 86.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or seen entering the gallbladder. C2: The hepatocystic triangle is still covered in peritoneum, fat, and connective tissue with no full-thickness windows visible. C3: The lower part of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still concealed by peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       314,
       917,
       772
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       142,
       604,
       467
      ],
      "confidence": 0.9
     },
     {
      "label": "irrigator",
      "box_2d": [
       237,
       573,
       715,
       916
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       812,
       226,
       999,
       458
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
     "hits": 76
    },
    "fat": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 77
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 77
    },
    "liver": {
     "first": 1.0,
     "last": 86.0,
     "best": 0.99,
     "hits": 74
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 86.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 87.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or seen entering the gallbladder yet. C2: The hepatocystic triangle is still covered by peritoneum and fatty connective tissue with no full-thickness windows visible. C3: The gallbladder remains largely attached to its bed with only initial scoring of the peritoneum, so the cystic plate is not exposed.",
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
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Early stage of dissection; cystic duct, cystic artery, and cystic plate have not yet been dissected out from the surrounding fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       270,
       991,
       874
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       126,
       622,
       442
      ],
      "confidence": 0.8
     },
     {
      "label": "irrigator",
      "box_2d": [
       464,
       592,
       827,
       915
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       883,
       272,
       1000,
       422
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.99,
     "hits": 77
    },
    "fat": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 78
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 78
    },
    "liver": {
     "first": 1.0,
     "last": 87.0,
     "best": 0.99,
     "hits": 75
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 86.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 88.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder. C2: The hepatocystic triangle is completely covered by peritoneum and fat, with the hook just beginning the incision. C3: The gallbladder has not been elevated from the liver bed, and the cystic plate is not exposed.",
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
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection has just begun; the hepatocystic triangle is still covered by peritoneum and fibrofatty tissue, so no biliary or vascular structures are isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       286,
       998,
       735
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       116,
       659,
       894
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       346,
       580,
       770,
       915
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.99,
     "hits": 78
    },
    "fat": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 79
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 79
    },
    "liver": {
     "first": 1.0,
     "last": 88.0,
     "best": 0.99,
     "hits": 76
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 86.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 89.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder. C2: The hepatocystic triangle is still covered in peritoneal and fatty tissue with no full-thickness windows created. C3: The electrocautery hook is only beginning to score the peritoneum near the gallbladder neck, and the lower part of the gallbladder is not yet separated from the cystic plate.",
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
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in the very early stage; the cystic duct, cystic artery, and cystic plate are still concealed by overlying tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       281,
       987,
       686
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       326,
       126,
       994,
       430
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       168,
       548,
       715,
       918
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       874,
       246,
       999,
       406
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       673,
       477,
       994,
       621
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.99,
     "hits": 79
    },
    "fat": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 80
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 80
    },
    "liver": {
     "first": 1.0,
     "last": 89.0,
     "best": 0.99,
     "hits": 77
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 86.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 90.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No separated tubular structures are visible entering the gallbladder; only the peritoneal serosa is scored. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows created. C3: The gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in an early stage; only the peritoneal covering is opened and the cystic duct and artery are not yet isolated from surrounding tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       269,
       1000,
       689
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       642,
       936,
       915
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       757,
       172,
       1000,
       412
      ],
      "label": "grasper",
      "confidence": 0.94
     },
     {
      "box_2d": [
       465,
       725,
       680,
       915
      ],
      "label": "hook",
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.99,
     "hits": 80
    },
    "fat": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 81
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 81
    },
    "liver": {
     "first": 1.0,
     "last": 90.0,
     "best": 0.99,
     "hits": 78
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 86.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 91.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only early dissection of the gallbladder neck/infundibulum is visible; two distinct tubular structures entering the gallbladder are not yet isolated. C2: The hepatocystic triangle is still filled with tissue and fat, with no full-thickness windows established. C3: The hook is actively dissecting the peritoneum near the liver bed, and the lower gallbladder is not yet separated to expose the full cystic plate.",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are not yet skeletonized or clearly identifiable.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       158,
       1000,
       616
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       247,
       587,
       856,
       914
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       521,
       552,
       888
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       638,
       126,
       861,
       335
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.99,
     "hits": 81
    },
    "fat": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 82
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 82
    },
    "liver": {
     "first": 1.0,
     "last": 91.0,
     "best": 0.99,
     "hits": 79
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 91.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 92.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1 is not achieved because two distinct tubular structures entering the gallbladder are not yet dissected or visible. C2 is not achieved because the hepatocystic triangle is still filled with tissue and no full-thickness windows are open. C3 is not achieved as the lower gallbladder is not separated from the liver bed to expose the cystic plate.",
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
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct and artery are not yet isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       166,
       984,
       638
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       552,
       983,
       917
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       527,
       615,
       914
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       662,
       133,
       885,
       335
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       403,
       390,
       891,
       558
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.99,
     "hits": 82
    },
    "fat": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 83
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 83
    },
    "liver": {
     "first": 1.0,
     "last": 92.0,
     "best": 0.99,
     "hits": 80
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 92.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 93.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.03
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or cystic artery) are dissected out or visible entering the gallbladder; only an initial peritoneal incision is present. C2: The hepatocystic triangle remains completely covered by peritoneum and fat with no windows created. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just started and the cystic duct and artery are still covered by peritoneum and adipose tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       203,
       1000,
       639
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       613,
       802,
       917
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       732,
       651,
       917,
       891
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
     "last": 93.0,
     "best": 0.99,
     "hits": 83
    },
    "fat": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 84
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 84
    },
    "liver": {
     "first": 1.0,
     "last": 93.0,
     "best": 0.99,
     "hits": 81
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 92.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 94.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly defined. C2: The hepatocystic triangle is still mostly covered by tissue with no full-thickness windows visible between the duct and artery. C3: The peritoneum over the gallbladder neck is being incised, exposing part of the gallbladder wall/plate, though full separation of the lower third is not clearly established.",
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
      "name": "cystic_plate",
      "confidence": 0.55
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Cystic duct and cystic artery are not yet dissected out from surrounding fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       142,
       992,
       630
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       599,
       889,
       915
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       133,
       560,
       620,
       914
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       676,
       137,
       899,
       331
      ],
      "label": "grasper",
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
     "hits": 84
    },
    "fat": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 85
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 85
    },
    "liver": {
     "first": 1.0,
     "last": 94.0,
     "best": 0.99,
     "hits": 82
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 94.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 94.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 95.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only the peritoneum is being scored and no distinct tubular cystic duct or artery are skeletonized. C2: There are no full-thickness windows cleared through the hepatocystic triangle yet. C3: Early dissection is exposing a small area of the gallbladder wall/cystic plate, but the lower third is not separated from the liver bed.",
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
      "confidence": 0.85
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; neither the cystic duct nor the cystic artery is skeletonized.",
    "boxes": [
     {
      "box_2d": [
       46,
       535,
       567,
       907
      ],
      "label": "hook",
      "confidence": 0.99
     },
     {
      "box_2d": [
       0,
       140,
       686,
       621
      ],
      "label": "gallbladder",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       560,
       933,
       917
      ],
      "label": "liver",
      "confidence": 0.94
     },
     {
      "box_2d": [
       640,
       126,
       841,
       273
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
     "last": 95.0,
     "best": 0.99,
     "hits": 85
    },
    "fat": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 86
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 86
    },
    "liver": {
     "first": 1.0,
     "last": 95.0,
     "best": 0.99,
     "hits": 83
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 95.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 94.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 96.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet dissected or visible. C2: The hepatocystic triangle is still filled with connective tissue and no full-thickness windows are open. C3: The lower gallbladder remains attached to the liver bed and the cystic plate is not fully exposed.",
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "blood",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not yet isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       140,
       696,
       609
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       326,
       567,
       923,
       918
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       666,
       126,
       852,
       276
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       501,
       599,
       908
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       399,
       347,
       851,
       507
      ],
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.99,
     "hits": 86
    },
    "fat": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 87
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 87
    },
    "liver": {
     "first": 1.0,
     "last": 96.0,
     "best": 0.99,
     "hits": 84
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 3.0,
     "last": 96.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 94.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 97.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left, cystic artery on the right under the hook) are visible entering the gallbladder. C2: Two clear windows are visible between the duct and artery and between the artery and the posterior tissue/liver bed. C3: The lower portion of the gallbladder is not yet mobilized off the liver bed to expose the full cystic plate, and the hook shaft occludes the upper region.",
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
      "confidence": 0.85
     },
     {
      "name": "fat",
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
    "reason_if_not": "Cystic plate is not fully exposed along the inferior gallbladder margin (C3 not achieved).",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       6,
       114,
       691,
       449
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       7,
       577,
       946,
       916
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       626,
       120,
       810,
       242
      ],
      "confidence": 0.88
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       417,
       546,
       681
      ],
      "confidence": 0.82
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       337,
       324,
       848,
       465
      ],
      "confidence": 0.74
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.99,
     "hits": 87
    },
    "fat": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 88
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 88
    },
    "liver": {
     "first": 1.0,
     "last": 97.0,
     "best": 0.99,
     "hits": 85
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 38
    },
    "blood": {
     "first": 3.0,
     "last": 96.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 94.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 98.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the prominent cystic duct (or infundibulum) is being dissected out, and two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: There is a small opening below the duct structure, but the hepatocystic triangle is not fully cleared to show two full-thickness windows. C3: The gallbladder remains largely attached to the liver bed and thehook shaft obscures the upper cystic plate area.",
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
      "name": "fat",
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet isolated and visible.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       137,
       626,
       579
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       342,
       337,
       817,
       491
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       732,
       413,
       928,
       542
      ],
      "confidence": 0.84
     },
     {
      "label": "grasper",
      "box_2d": [
       599,
       117,
       792,
       279
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       467,
       576,
       887
      ],
      "confidence": 0.9
     },
     {
      "label": "liver",
      "box_2d": [
       232,
       552,
       925,
       916
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
     "hits": 88
    },
    "fat": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 89
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 89
    },
    "liver": {
     "first": 1.0,
     "last": 98.0,
     "best": 0.99,
     "hits": 86
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 39
    },
    "blood": {
     "first": 3.0,
     "last": 98.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 94.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 99.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the gallbladder infundibulum/neck is being dissected; two distinct tubular structures (cystic duct and cystic artery) are not yet isolated. C2: The hepatocystic triangle is still filled with peritoneum, fat, and connective tissue, with no full-thickness windows created. C3: Peritoneum has been scored exposing a small patch of the lower gallbladder wall/cystic plate area, but the inferior third of the gallbladder is not yet fully separated from the liver bed.",
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
      "name": "cystic_plate",
      "confidence": 0.5
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct and cystic artery are not yet isolated or clearly visible.",
    "boxes": [
     {
      "box_2d": [
       0,
       155,
       994,
       619
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       206,
       563,
       936,
       918
      ],
      "label": "liver",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       508,
       532,
       874
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       623,
       120,
       804,
       297
      ],
      "label": "grasper",
      "confidence": 0.94
     },
     {
      "box_2d": [
       374,
       367,
       915,
       546
      ],
      "label": "cystic_duct",
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.99,
     "hits": 89
    },
    "fat": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 90
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 90
    },
    "liver": {
     "first": 1.0,
     "last": 99.0,
     "best": 0.99,
     "hits": 87
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 39
    },
    "blood": {
     "first": 3.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 100.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Only one clear tubular structure (likely the cystic duct) is visible at the bottom of the dissected area, while a second distinct tubular structure (cystic artery) is not clearly isolated. C2: There is a small window below the exposed lower gallbladder/cystic plate, but two full-thickness windows separating two distinct structures are not visible. C3: The peritoneum has been opened and the lower portion of the gallbladder is partially separated from the liver bed, exposing the whitish cystic plate/gallbladder wall.",
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
      "name": "cystic_plate",
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not yet clearly isolated as a distinct second tubular structure.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       145,
       1000,
       885
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       328,
       725,
       641
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       445,
       108,
       618,
       426
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       272,
       664,
       568,
       916
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.99,
     "hits": 90
    },
    "fat": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 91
    },
    "liver": {
     "first": 1.0,
     "last": 100.0,
     "best": 0.99,
     "hits": 88
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 3.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 101.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct and artery) are fully isolated and seen entering the gallbladder; only the exposed lower gallbladder wall/neck is visible through an opening in the peritoneum. C2: The hepatocystic triangle is not cleared, with only a small window/pocket dissected at the base and no full-thickness windows between two tubular structures. C3: The lower gallbladder remains largely attached to the liver bed with the cystic plate not clearly exposed along the inferior margin.",
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
      "confidence": 0.9
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are not yet isolated as distinct tubular structures.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       580,
       893,
       917
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       1,
       222,
       946,
       608
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       635,
       128,
       824,
       335
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       735,
       461,
       903,
       552
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.99,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 92
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 92
    },
    "liver": {
     "first": 1.0,
     "last": 101.0,
     "best": 0.99,
     "hits": 89
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 3.0,
     "last": 101.0,
     "best": 0.85,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 102.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the peritoneum at the base of the gallbladder has been opened, and two distinct tubular structures are not yet skeletonized or clearly seen entering the gallbladder. C2: The hepatocystic triangle remains filled with connective tissue and no full-thickness windows are dissected through it. C3: The lower part of the gallbladder is not yet lifted off the liver bed to expose the cystic plate along the inferior margin.",
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
      "confidence": 0.92
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; tubular structures and windows are not yet isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       9,
       269,
       981,
       575
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       13,
       537,
       940,
       805
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       330,
       115,
       758,
       385
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       677,
       137,
       827,
       344
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       484,
       124,
       583
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       550,
       376,
       895,
       505
      ],
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.99,
     "hits": 92
    },
    "fat": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 93
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 93
    },
    "liver": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.99,
     "hits": 90
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 3.0,
     "last": 102.0,
     "best": 0.85,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 103.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate below its inferior margin.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and critical biliary and vascular structures are still obscured by peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       77,
       240,
       996,
       560
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       56,
       511,
       977,
       790
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       432,
       203,
       591
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       811,
       172,
       950,
       317
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.99,
     "hits": 93
    },
    "fat": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 94
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 94
    },
    "liver": {
     "first": 1.0,
     "last": 103.0,
     "best": 0.99,
     "hits": 91
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 3.0,
     "last": 103.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 104.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because no dissected tubular structures (cystic duct or artery) are visible entering the gallbladder. C2 is not achieved because the hepatocystic triangle has not been dissected or exposed in this view. C3 is not achieved because the inferior part of the gallbladder is not separated from the liver bed to expose the cystic plate.",
    "phase": "preparation",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
     },
     {
      "name": "fat",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has not begun and biliary/vascular structures are completely unexposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       458,
       234,
       1000,
       818
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       18,
       366,
       754,
       856
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       502,
       709,
       952,
       849
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.99,
     "hits": 94
    },
    "fat": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 95
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 95
    },
    "liver": {
     "first": 1.0,
     "last": 103.0,
     "best": 0.99,
     "hits": 91
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 3.0,
     "last": 103.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 104.0,
     "best": 0.9,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 105.0,
   "label": {
    "cvs": {
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1: The camera is pointed away from the hepatocystic triangle toward the abdominal wall and bowel, so no cystic structures are visible. C2: The hepatocystic triangle is completely out of view, so no dissected windows can be seen. C3: The gallbladder and liver bed are out of view, so the cystic plate cannot be assessed.",
    "phase": "preparation",
    "visible_structures": [
     {
      "name": "abdominal_wall",
      "confidence": 0.98
     },
     {
      "name": "gi_tract",
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The camera is pointing at the abdominal wall and bowel; the gallbladder and hepatocystic triangle are not in the field of view.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       531,
       511,
       1000,
       914
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       698,
       519,
       1000,
       893
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       803,
       375,
       1000,
       567
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.99,
     "hits": 94
    },
    "fat": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 95
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 95
    },
    "liver": {
     "first": 1.0,
     "last": 103.0,
     "best": 0.99,
     "hits": 91
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 3.0,
     "last": 103.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 105.0,
     "best": 0.98,
     "hits": 1
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 106.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: The camera is pointed at the abdominal wall, so the gallbladder and its tubular structures are not in the field of view. C2: The hepatocystic triangle is not visible in this frame. C3: The gallbladder and liver bed are not in the field of view, so the cystic plate cannot be assessed.",
    "phase": "preparation",
    "visible_structures": [
     {
      "name": "abdominal_wall",
      "confidence": 0.99
     },
     {
      "name": "liver",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The endoscope camera is pointed away from the hepatocystic triangle toward the abdominal wall.",
    "boxes": [
     {
      "box_2d": [
       194,
       220,
       1000,
       895
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
     "last": 104.0,
     "best": 0.99,
     "hits": 94
    },
    "fat": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 95
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 95
    },
    "liver": {
     "first": 1.0,
     "last": 106.0,
     "best": 0.99,
     "hits": 91
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 3.0,
     "last": 103.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 106.0,
     "best": 0.99,
     "hits": 1
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 107.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because the camera is pointing at the abdominal wall/diaphragm and the hepatocystic triangle is not in view. C2 is not achieved because the hepatocystic triangle is not visible in this frame. C3 is not achieved because the gallbladder and cystic plate are not visible.",
    "phase": "unknown",
    "visible_structures": [
     {
      "name": "abdominal_wall",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.75
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The camera is pointed away from the operative field, showing only the abdominal wall and shadowed liver edge.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       846,
       406,
       1000,
       812
      ],
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.99,
     "hits": 94
    },
    "fat": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 95
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 95
    },
    "liver": {
     "first": 1.0,
     "last": 107.0,
     "best": 0.99,
     "hits": 91
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 3.0,
     "last": 103.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 107.0,
     "best": 0.99,
     "hits": 1
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 108.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet dissected or visible, as the lower neck is still covered in connective tissue and fat. C2: The hepatocystic triangle has not been cleared of fat and connective tissue, and no full-thickness windows are visible. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate along its inferior margin.",
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
      "name": "abdominal_wall",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; the cystic duct and artery remain obscured by fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       256,
       452,
       787,
       832
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       510,
       258,
       994,
       643
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       21,
       510,
       427,
       834
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       661,
       152,
       873,
       595
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.99,
     "hits": 95
    },
    "fat": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 96
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 96
    },
    "liver": {
     "first": 1.0,
     "last": 108.0,
     "best": 0.99,
     "hits": 92
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 3.0,
     "last": 108.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 97.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 108.0,
     "best": 0.99,
     "hits": 2
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 109.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two separated tubular-like structures (likely cystic duct and artery) are partially exposed near the gallbladder neck, though dissection is quite narrow. C2: Small windows are created between the dissected structures showing liver parenchyma behind, though the overall hepatocystic triangle clearance is very limited. C3: The lower portion of the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
      "name": "cystic_artery",
      "confidence": 0.65
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.55
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
      "confidence": 0.95
     },
     {
      "name": "blood",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper",
     "clipper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is minimally cleared and the lower gallbladder is not separated from the cystic plate, preventing definitive anatomical confirmation.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       184,
       257,
       937,
       909
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       194,
       496,
       716,
       664
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       472,
       540,
       703,
       621
      ],
      "confidence": 0.78
     },
     {
      "label": "grasper",
      "box_2d": [
       18,
       546,
       242,
       825
      ],
      "confidence": 0.93
     },
     {
      "label": "clipper",
      "box_2d": [
       338,
       663,
       626,
       915
      ],
      "confidence": 0.94
     },
     {
      "label": "irrigator",
      "box_2d": [
       589,
       116,
       695,
       532
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.99,
     "hits": 96
    },
    "fat": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 97
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 97
    },
    "liver": {
     "first": 1.0,
     "last": 109.0,
     "best": 0.99,
     "hits": 93
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 3.0,
     "last": 109.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 109.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 109.0,
     "best": 0.99,
     "hits": 3
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 110.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a single thin strand of tissue is being held for clipping, without two distinct tubular structures clearly delineated entering the gallbladder. C2: The hepatocystic triangle is still covered with connective tissue and lacks two clear full-thickness windows. C3: The gallbladder remains largely attached to the liver bed without full exposure of the cystic plate along its inferior margin.",
    "phase": "clipping_and_cutting",
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
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "cystic_artery",
      "confidence": 0.55
     },
     {
      "name": "blood",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "grasper",
     "clipper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; two distinct tubular structures and the cystic plate are not yet isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       28,
       187,
       1000,
       897
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       7,
       471,
       1000,
       753
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       631,
       131,
       804,
       534
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       699,
       622,
       924,
       903
      ],
      "confidence": 0.91
     },
     {
      "label": "grasper",
      "box_2d": [
       2,
       583,
       91,
       718
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 97
    },
    "fat": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 98
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 98
    },
    "liver": {
     "first": 1.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 94
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 3.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 4
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 111.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures are visible entering the gallbladder; only the peritoneal incision over the neck is seen. C2: The hepatocystic triangle is filled with undissected tissue and has no full-thickness windows. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are not yet isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       154,
       989,
       688
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       642,
       779,
       915
      ],
      "label": "liver",
      "confidence": 0.93
     },
     {
      "box_2d": [
       342,
       409,
       887,
       564
      ],
      "label": "cystic_duct",
      "confidence": 0.88
     },
     {
      "box_2d": [
       606,
       114,
       805,
       329
      ],
      "label": "grasper",
      "confidence": 0.94
     },
     {
      "box_2d": [
       706,
       531,
       999,
       877
      ],
      "label": "clipper",
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.99,
     "hits": 98
    },
    "fat": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 99
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 99
    },
    "liver": {
     "first": 1.0,
     "last": 111.0,
     "best": 0.99,
     "hits": 95
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 3.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 4
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 112.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder cannot be identified as dissection is still in progress. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: The lower gallbladder is not yet separated from the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
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
      "confidence": 0.5
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is still covered in connective tissue and fat, preventing definitive identification of the cystic duct and artery.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       111,
       574,
       912
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       267,
       262,
       903,
       454
      ],
      "confidence": 0.85
     },
     {
      "label": "irrigator",
      "box_2d": [
       435,
       467,
       1000,
       918
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       569,
       111,
       708,
       177
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.99,
     "hits": 99
    },
    "fat": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 100
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 100
    },
    "liver": {
     "first": 1.0,
     "last": 111.0,
     "best": 0.99,
     "hits": 95
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 3.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 4
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 113.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not yet clearly isolated and seen entering the gallbladder due to ongoing dissection and instrument occlusion. C2: The hepatocystic triangle is still filled with fat and connective tissue without clear full-thickness windows. C3: The lower gallbladder is partially mobilized, but the cystic plate is not fully exposed along the entire inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
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
      "name": "liver",
      "confidence": 0.75
     },
     {
      "name": "cystic_plate",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "grasper",
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle dissection is incomplete, and the cystic duct and artery are not yet clearly isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       151,
       992,
       673
      ],
      "confidence": 0.95,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       646,
       519,
       914
      ],
      "confidence": 0.88,
      "label": "liver"
     },
     {
      "box_2d": [
       310,
       403,
       857,
       545
      ],
      "confidence": 0.77,
      "label": "cystic_duct"
     },
     {
      "box_2d": [
       587,
       115,
       807,
       327
      ],
      "confidence": 0.93,
      "label": "grasper"
     },
     {
      "box_2d": [
       381,
       517,
       883,
       916
      ],
      "confidence": 0.92,
      "label": "grasper"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.99,
     "hits": 99
    },
    "fat": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 100
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 100
    },
    "liver": {
     "first": 1.0,
     "last": 113.0,
     "best": 0.99,
     "hits": 95
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 3.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 4
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 114.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or seen entering the gallbladder yet. C2: The hepatocystic triangle is still covered in fat and connective tissue with no full-thickness windows created. C3: The gallbladder has not been elevated off the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages; no distinct tubular structures or windows are isolated yet.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       153,
       994,
       649
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       575,
       558,
       914
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       341,
       373,
       859,
       528
      ],
      "confidence": 0.77
     },
     {
      "label": "grasper",
      "box_2d": [
       617,
       120,
       818,
       312
      ],
      "confidence": 0.93
     },
     {
      "label": "scissors",
      "box_2d": [
       463,
       539,
       987,
       915
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.99,
     "hits": 100
    },
    "fat": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 101
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 101
    },
    "liver": {
     "first": 1.0,
     "last": 113.0,
     "best": 0.99,
     "hits": 95
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 3.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 4
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 115.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are defined or visible entering the gallbladder; dissection is just starting through the serosa. C2: The hepatocystic triangle is still covered by fat and connective tissue with no full-thickness windows created. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.85
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
     "scissors"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Initial stages of dissection; tubular structures and the cystic plate are still concealed by serosa, fat, and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       114,
       634,
       621
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       572,
       642,
       915
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       316,
       336,
       969,
       502
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       611,
       118,
       792,
       269
      ],
      "confidence": 0.88
     },
     {
      "label": "scissors",
      "box_2d": [
       632,
       454,
       997,
       899
      ],
      "confidence": 0.86
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.99,
     "hits": 101
    },
    "fat": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 102
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 102
    },
    "liver": {
     "first": 1.0,
     "last": 115.0,
     "best": 0.99,
     "hits": 96
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 3.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 4
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 116.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is at an early stage and two distinct tubular structures entering the gallbladder are not yet isolated. C2: The hepatocystic triangle is still covered by peritoneum and connective tissue with no full-thickness windows visible. C3: The lower gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "confidence": 0.75
     },
     {
      "name": "blood",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper",
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is only superficially incised; neither the cystic duct nor the cystic artery is skeletonized or clearly identifiable.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       108,
       652,
       584
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       566,
       650,
       915
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       416,
       282,
       991,
       433
      ],
      "confidence": 0.72
     },
     {
      "label": "irrigator",
      "box_2d": [
       631,
       458,
       998,
       910
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       691,
       130,
       819,
       203
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.99,
     "hits": 102
    },
    "fat": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 103
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 103
    },
    "liver": {
     "first": 1.0,
     "last": 116.0,
     "best": 0.99,
     "hits": 97
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 3.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 4
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 117.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet dissected or visible, as the peritoneum over the gallbladder neck is just being opened. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows created. C3: The lower part of the gallbladder is still attached to the liver bed and the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
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
    "reason_if_not": "Early stage of dissection; the cystic duct, cystic artery, and cystic plate are still covered by peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       110,
       689,
       542
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       532,
       544,
       911
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       409,
       474,
       880,
       915
      ],
      "label": "grasper",
      "confidence": 0.85
     },
     {
      "box_2d": [
       669,
       123,
       742,
       194
      ],
      "label": "grasper",
      "confidence": 0.49
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.99,
     "hits": 103
    },
    "fat": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 104
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 104
    },
    "liver": {
     "first": 1.0,
     "last": 116.0,
     "best": 0.99,
     "hits": 97
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 3.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 117.0,
     "best": 0.99,
     "hits": 5
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 118.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Only one broad band of tissue/tubular structure is seen at the base, without clear separation into two distinct tubular structures (cystic duct and artery). C2: One deep window is visible beneath the lower gallbladder, but there are not two clear windows separating the duct, artery, and cystic plate. C3: The lower portion of the gallbladder is partially dissected off the liver bed exposing the whitish cystic plate, though the dissection at the base is still incomplete.",
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
      "name": "cystic_plate",
      "confidence": 0.85
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
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper",
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic duct and cystic artery are not yet clearly skeletonized into two distinct tubular structures.",
    "boxes": [
     {
      "box_2d": [
       0,
       149,
       573,
       574
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       557,
       988,
       916
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       14,
       529,
       504,
       908
      ],
      "label": "hook",
      "confidence": 0.92
     },
     {
      "box_2d": [
       555,
       108,
       736,
       294
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       287,
       355,
       882,
       535
      ],
      "label": "cystic_plate",
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.99,
     "hits": 104
    },
    "fat": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 105
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 105
    },
    "liver": {
     "first": 1.0,
     "last": 118.0,
     "best": 0.99,
     "hits": 98
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 3.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 110.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 118.0,
     "best": 0.85,
     "hits": 14
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 117.0,
     "best": 0.99,
     "hits": 5
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 119.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the cystic duct inferiorly and the cystic artery superiorly) are clearly dissected and seen entering the gallbladder. C2: The hepatocystic triangle is well cleared of fat and connective tissue, creating visible windows between the duct, the artery, and the cystic plate. C3: The lower portion of the gallbladder is dissected off the liver bed, clearly exposing the underlying whitish-purple cystic plate.",
    "phase": "clipping_and_cutting",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "cystic_duct",
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.95
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
     }
    ],
    "instruments": [
     "clipper",
     "grasper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       238,
       535,
       997,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       109,
       529,
       520
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       569,
       137,
       997,
       425
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       507,
       109,
       681,
       244
      ],
      "confidence": 0.93
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       461,
       488,
       887
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       283,
       297,
       812,
       469
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       638,
       403,
       915,
       499
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.99,
     "hits": 105
    },
    "fat": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 106
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 106
    },
    "liver": {
     "first": 1.0,
     "last": 118.0,
     "best": 0.99,
     "hits": 98
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 42
    },
    "blood": {
     "first": 3.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 119.0,
     "best": 0.9,
     "hits": 15
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 119.0,
     "best": 0.99,
     "hits": 6
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 120.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.9
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. Two full-thickness windows are visible in the hepatocystic triangle, one between the duct and artery and another above the artery, with the clip applier engaging the upper structure. The lower third of the gallbladder is dissected off the liver bed, clearly exposing the shiny whitish cystic plate.",
    "phase": "clipping_and_cutting",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
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
      "confidence": 0.9
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
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper",
     "clipper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "irrigator",
      "box_2d": [
       0,
       449,
       499,
       888
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       515,
       110,
       679,
       231
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       111,
       984,
       483
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       464,
       998,
       918
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.99,
     "hits": 106
    },
    "fat": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 107
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 107
    },
    "liver": {
     "first": 1.0,
     "last": 118.0,
     "best": 0.99,
     "hits": 98
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 43
    },
    "blood": {
     "first": 3.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 16
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 120.0,
     "best": 0.99,
     "hits": 7
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 118.0
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": [
    {
     "what": "c3",
     "on": true,
     "since": 118.0
    }
   ]
  },
  {
   "t": 121.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected and visible entering the gallbladder. C2: The hepatocystic triangle is still covered in fat and connective tissue without two full-thickness windows. C3: A window is opening near the gallbladder neck/lower margin, but the lower third of the gallbladder is not yet clearly separated from the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
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
      "name": "cystic_plate",
      "confidence": 0.5
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are not yet isolated.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       0,
       464,
       545,
       917
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       499,
       109,
       663,
       208
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       232,
       271,
       964,
       465
      ],
      "confidence": 0.83
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       112,
       483,
       586
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.99,
     "hits": 107
    },
    "fat": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 108
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 108
    },
    "liver": {
     "first": 1.0,
     "last": 118.0,
     "best": 0.99,
     "hits": 98
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 43
    },
    "blood": {
     "first": 3.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 16
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 120.0,
     "best": 0.99,
     "hits": 7
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 118.0
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 122.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder cannot be confirmed as the clip applier occludes the upper area and only one large structure is clearly seen below. C2: The hepatocystic triangle is not clearly displayed with two full-thickness windows due to incomplete clearance and instrument occlusion. C3: The lower gallbladder is not separated from the liver bed to expose the cystic plate along its inferior margin.",
    "phase": "clipping_and_cutting",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
     },
     {
      "name": "cystic_artery",
      "confidence": 0.6
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.7
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
      "confidence": 0.6
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "clipper",
     "grasper"
    ],
    "clip_applier_visible": true,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The clip applier blocks the upper hepatocystic triangle, and the cystic plate is not exposed to confirm complete anatomical clearance.",
    "boxes": [
     {
      "label": "clipper",
      "box_2d": [
       0,
       396,
       388,
       843
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       536,
       110,
       715,
       237
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       78,
       532,
       1000,
       915
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       262,
       137,
       989,
       521
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.99,
     "hits": 107
    },
    "fat": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 108
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 108
    },
    "liver": {
     "first": 1.0,
     "last": 118.0,
     "best": 0.99,
     "hits": 98
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 43
    },
    "blood": {
     "first": 3.0,
     "last": 122.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 16
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 122.0,
     "best": 0.99,
     "hits": 7
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 118.0
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 123.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not clearly skeletonized and visible entering the gallbladder; a clip is visible on a small structure, and the main gallbladder neck/duct region is still bulky and partially obscured by the clip applier. C2: There is one visible window below the gallbladder neck, but two full-thickness windows clearing the hepatocystic triangle are not visible. C3: The lower part of the gallbladder is only partially separated from the liver bed, and the top instrument occludes the upper cystic plate area.",
    "phase": "clipping_and_cutting",
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
      "name": "cystic_artery",
      "confidence": 0.7
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
     }
    ],
    "instruments": [
     "clipper",
     "grasper"
    ],
    "clip_applier_visible": true,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The Critical View of Safety is not achieved; two distinct tubular structures and full clearance of the hepatocystic triangle are not visible, and the clip applier partially occludes the surgical field.",
    "boxes": [
     {
      "box_2d": [
       0,
       397,
       386,
       836
      ],
      "label": "clipper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       530,
       109,
       715,
       239
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       109,
       538,
       469
      ],
      "label": "liver",
      "confidence": 0.93
     },
     {
      "box_2d": [
       262,
       137,
       989,
       540
      ],
      "label": "gallbladder",
      "confidence": 0.85
     },
     {
      "box_2d": [
       463,
       449,
       508,
       519
      ],
      "label": "cystic_artery",
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.99,
     "hits": 107
    },
    "fat": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 108
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 108
    },
    "liver": {
     "first": 1.0,
     "last": 123.0,
     "best": 0.99,
     "hits": 98
    },
    "cystic_duct": {
     "first": 2.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 43
    },
    "blood": {
     "first": 3.0,
     "last": 123.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 4.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_artery": {
     "first": 4.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 16
    },
    "abdominal_wall": {
     "first": 104.0,
     "last": 122.0,
     "best": 0.99,
     "hits": 7
    },
    "gi_tract": {
     "first": 105.0,
     "last": 105.0,
     "best": 0.9,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": [
    {
     "what": "c3",
     "on": false
    }
   ]
  }
 ],
 "truth": [
  {
   "t": 14,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 19,
   "C1": 0.6666666666666666,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 24,
   "C1": 0.6666666666666666,
   "C2": 0.3333333333333333,
   "C3": 0.0
  },
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
   "C1": 0.6666666666666666,
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
   "C1": 0.6666666666666666,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 69,
   "C1": 0.6666666666666666,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 74,
   "C1": 0.6666666666666666,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 79,
   "C1": 0.0,
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
   "C1": 0.6666666666666666,
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
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 119,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  }
 ],
 "agreement": {
  "keyframes": 22,
  "C1": 0.5454545454545454,
  "C1_caught": [
   1,
   7
  ],
  "C2": 0.9090909090909091,
  "C2_caught": [
   0,
   0
  ],
  "C3": 0.9090909090909091,
  "C3_caught": [
   0,
   0
  ]
 },
 "rules": {
  "confirm_conf": 0.7,
  "confirm_frames": 2
 }
};
