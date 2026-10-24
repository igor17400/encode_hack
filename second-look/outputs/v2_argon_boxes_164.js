window.TIMELINE = {
 "video": "videos/endo164.mp4",
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct below and thinner cystic artery above, held by the hook) are clearly seen entering the gallbladder. C2: The window between the cystic duct and artery is dissected, though the window behind the artery to the cystic plate is not fully cleared or visible. C3: The close-up view focuses on the tubular structures and does not show the lower part of the gallbladder separated from the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.9
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
    "reason_if_not": "The cystic plate and the full clearance of the hepatocystic triangle behind the cystic artery are not fully demonstrated in this close-up view.",
    "boxes": [
     {
      "label": "cystic_duct",
      "box_2d": [
       259,
       74,
       915,
       647
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       159,
       532,
       442,
       910
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       115,
       276,
       629
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       232,
       348,
       652,
       755
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.9,
     "hits": 1
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.95,
     "hits": 1
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.95,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.8,
     "hits": 1
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.85,
     "hits": 1
    },
    "fat": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.8,
     "hits": 1
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
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
   "t": 1.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures, the cystic duct below and cystic artery above, are clearly visible entering the gallbladder. C2: There is a window dissected between the cystic duct and cystic artery, and a hook is dissecting behind the artery, though tissue remains in the background. C3: The lower portion of the gallbladder is not yet fully detached from the cystic plate to show a hanging gallbladder.",
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
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.8
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
      "confidence": 0.8
     }
    ],
    "instruments": [
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
       80,
       415,
       847
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       819,
       665,
       1000
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       363,
       72,
       999,
       560
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       327,
       514,
       629,
       834
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       386,
       310,
       765,
       684
      ],
      "confidence": 0.85
     },
     {
      "label": "irrigator",
      "box_2d": [
       530,
       681,
       1000,
       960
      ],
      "confidence": 0.89
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.95,
     "hits": 2
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.95,
     "hits": 2
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.95,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.8,
     "hits": 2
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.9,
     "hits": 2
    },
    "fat": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.8,
     "hits": 2
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "liver": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.85,
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
   "t": 2.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.3,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left, cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: While there is space between the duct and artery, the window behind the artery toward the cystic plate is not fully cleared to show a full-thickness background. C3: The lower gallbladder is not clearly separated from the liver bed along its inferior margin to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
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
      "name": "hepatocystic_window",
      "confidence": 0.7
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
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not completely cleared behind the artery and the cystic plate is not sufficiently exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       75,
       441,
       621
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       323,
       75,
       997,
       631
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       376,
       510,
       818,
       797
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       425,
       447,
       829,
       642
      ],
      "confidence": 0.8
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       856,
       740,
       1000
      ],
      "confidence": 0.9
     },
     {
      "label": "irrigator",
      "box_2d": [
       617,
       597,
       1000,
       818
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.95,
     "hits": 3
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.95,
     "hits": 3
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.95,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.8,
     "hits": 3
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.9,
     "hits": 3
    },
    "fat": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.8,
     "hits": 3
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "liver": {
     "first": 1.0,
     "last": 2.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "since": 0.0
    }
   ]
  },
  {
   "t": 3.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one main tubular structure (likely the cystic duct) is clearly skeletonized, while the area where the second structure would be is obscured by tissue and the electrocautery hook. C2: There is a deep depression behind the anterior tubular structure, but clear full-thickness windows through the hepatocystic triangle are not yet fully established or visible. C3: The lower part of the gallbladder is not yet separated from the liver bed to expose the cystic plate, and the hook instrument occludes the superior aspect of the triangle.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "cystic_duct",
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
      "name": "liver",
      "confidence": 0.7
     },
     {
      "name": "gallbladder",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete and the hook instrument obscures the upper portion of the triangle, preventing confirmation of all criteria of the Critical View of Safety.",
    "boxes": [
     {
      "box_2d": [
       272,
       520,
       1000,
       960
      ],
      "label": "irrigator",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       809,
       757,
       1000
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       116,
       305,
       824
      ],
      "label": "gallbladder",
      "confidence": 0.88
     },
     {
      "box_2d": [
       348,
       86,
       998,
       619
      ],
      "label": "cystic_duct",
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.95,
     "hits": 3
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.95,
     "hits": 3
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.95,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.8,
     "hits": 3
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.9,
     "hits": 3
    },
    "fat": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.85,
     "hits": 3
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "liver": {
     "first": 1.0,
     "last": 3.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left, cystic artery being hooked on the right) are clearly seen entering the gallbladder. C2: A full-thickness window is visible between the duct and the artery, and the hook is passing behind the artery creating a second window. C3: The gallbladder remains largely attached to the liver bed above the artery, so the cystic plate is not exposed along the whole inferior margin.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
     },
     {
      "name": "blood",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet sufficiently separated from the cystic plate (C3 not achieved).",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       80,
       542,
       833
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       766,
       852,
       998
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       527,
       584,
       1000,
       881
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       421,
       79,
       995,
       564
      ],
      "confidence": 0.84
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       420,
       439,
       751,
       633
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       550,
       385,
       763,
       517
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.95,
     "hits": 4
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.95,
     "hits": 4
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.95,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.9,
     "hits": 4
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.9,
     "hits": 4
    },
    "fat": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.85,
     "hits": 3
    },
    "blood": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.6,
     "hits": 0
    },
    "liver": {
     "first": 1.0,
     "last": 4.0,
     "best": 0.9,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.65,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "Two tubular structures (likely cystic duct and cystic artery) are visible extending toward the gallbladder neck. The hepatocystic triangle is not yet fully cleared of deeper connective tissue and does not show full-thickness windows through to the background. The lower part of the gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, so full-thickness windows and the hanging gallbladder view are not yet achieved.",
    "boxes": [
     {
      "box_2d": [
       0,
       718,
       878,
       1000
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       79,
       610,
       761
      ],
      "label": "liver",
      "confidence": 0.85
     },
     {
      "box_2d": [
       746,
       458,
       998,
       563
      ],
      "label": "hook",
      "confidence": 0.9
     },
     {
      "box_2d": [
       569,
       362,
       995,
       480
      ],
      "label": "cystic_duct",
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.95,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.95,
     "hits": 5
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.95,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.9,
     "hits": 4
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 4
    },
    "blood": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.7,
     "hits": 1
    },
    "liver": {
     "first": 1.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery centrally) are visible entering the lower gallbladder. C2: Windows have been dissected between the duct and artery and behind the artery, with the hook tip placed in the posterior space. C3: While posterior dissection is underway behind the artery, the lower third of the gallbladder is not clearly elevated off the cystic plate as a hanging gallbladder.",
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
      "name": "cystic_plate",
      "confidence": 0.6
     },
     {
      "name": "fat",
      "confidence": 0.8
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
       76,
       615,
       769
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       712,
       995,
       1000
      ],
      "confidence": 0.9
     },
     {
      "label": "irrigator",
      "box_2d": [
       638,
       488,
       1000,
       655
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.95,
     "hits": 6
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.95,
     "hits": 6
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.95,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 5
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 6
    },
    "fat": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 5
    },
    "blood": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.7,
     "hits": 2
    },
    "liver": {
     "first": 1.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 6.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and the thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder neck. C2: While there is a clear window between the cystic duct and cystic artery, the space between the cystic artery and the cystic plate is still being dissected with the hook and is not yet a clear full-thickness window. C3: The lower part of the gallbladder is not yet sufficiently separated from the liver bed to expose the cystic plate along the inferior margin.",
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
      "confidence": 0.8
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection behind the cystic artery and along the cystic plate is still incomplete, preventing full confirmation of the Critical View of Safety.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       524,
       526,
       1000,
       833
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       484,
       334,
       720,
       484
      ],
      "confidence": 0.76
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       398,
       416,
       860,
       609
      ],
      "confidence": 0.72
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       386,
       75,
       995,
       568
      ],
      "confidence": 0.7
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       759,
       846,
       1000
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.95,
     "hits": 7
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.95,
     "hits": 7
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.95,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.9,
     "hits": 6
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.9,
     "hits": 7
    },
    "fat": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.9,
     "hits": 6
    },
    "blood": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.7,
     "hits": 2
    },
    "liver": {
     "first": 1.0,
     "last": 7.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 6.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: There is a clear window between the cystic duct and cystic artery, and the hook is dissecting a deeper window between the artery and the cystic plate. C3: The cystic plate is only partially exposed behind the artery, and the lower gallbladder is not fully elevated in a hanging view.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.95
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
      "confidence": 0.8
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower third of the gallbladder is not yet sufficiently separated from the cystic plate to confirm full CVS.",
    "boxes": [
     {
      "box_2d": [
       0,
       767,
       756,
       1000
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       85,
       477,
       808
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       363,
       76,
       1000,
       608
      ],
      "label": "cystic_duct",
      "confidence": 0.88
     },
     {
      "box_2d": [
       306,
       406,
       829,
       694
      ],
      "label": "cystic_artery",
      "confidence": 0.85
     },
     {
      "box_2d": [
       457,
       576,
       1000,
       959
      ],
      "label": "hook",
      "confidence": 0.93
     },
     {
      "box_2d": [
       419,
       360,
       690,
       520
      ],
      "label": "hepatocystic_window",
      "confidence": 0.72
     },
     {
      "box_2d": [
       0,
       439,
       342,
       790
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
     "last": 8.0,
     "best": 0.95,
     "hits": 8
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.95,
     "hits": 8
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.95,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.9,
     "hits": 7
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.9,
     "hits": 8
    },
    "fat": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.7,
     "hits": 2
    },
    "liver": {
     "first": 1.0,
     "last": 8.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left, cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: There is dissection between the duct and artery and behind the artery with the hook, but the windows do not yet appear completely cleared to a full-thickness view of the background liver. C3: The lower gallbladder is still largely attached to the liver bed with limited exposure of the cystic plate.",
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
      "confidence": 0.6
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
    "reason_if_not": "The hepatocystic triangle windows are not fully cleared and the lower gallbladder is not sufficiently mobilized off the cystic plate to confirm all three CVS criteria.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       781,
       745,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       83,
       498,
       838
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       374,
       638,
       980,
       979
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       484,
       381,
       699,
       586
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 7
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 9
    },
    "fat": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 8
    },
    "blood": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.7,
     "hits": 3
    },
    "liver": {
     "first": 1.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.7
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and the thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: There is a clear dissection gap between the duct and artery, and the hook is being used to clear the window between the artery and the cystic plate. C3: The lower portion of the gallbladder is dissected away from the cystic plate, which is visible behind the cystic artery.",
    "phase": "calot_triangle_dissection",
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
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "liver",
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
       75,
       502,
       876
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       804,
       715,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       438,
       626,
       1000,
       940
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 10
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 10
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.9,
     "hits": 8
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.9,
     "hits": 10
    },
    "fat": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.9,
     "hits": 9
    },
    "blood": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.7,
     "hits": 3
    },
    "liver": {
     "first": 1.0,
     "last": 10.0,
     "best": 0.9,
     "hits": 8
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 10.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left, cystic artery in the center) are clearly skeletonized and seen heading into the gallbladder. C2: There is a clear window between the cystic duct and cystic artery, and the hook is dissecting the space between the artery and the cystic plate, though the second window is not yet fully cleared through-and-through. C3: The lower part of the gallbladder is still attached to the peritoneum and liver bed at the top right, so the cystic plate is not fully exposed along the inferior margin.",
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
      "name": "liver",
      "confidence": 0.7
     }
    ],
    "instruments": [
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
       77,
       471,
       794
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       767,
       597,
       997
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       291,
       621,
       950,
       996
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       363,
       428,
       850,
       733
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.95,
     "hits": 11
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.95,
     "hits": 11
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.95,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.9,
     "hits": 9
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.9,
     "hits": 11
    },
    "fat": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.9,
     "hits": 9
    },
    "blood": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.7,
     "hits": 3
    },
    "liver": {
     "first": 1.0,
     "last": 11.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 10.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.25,
     "c3": 0.35
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct on the left and cystic artery on the right) are clearly dissected and seen entering the gallbladder neck. A hook is dissecting between the duct and artery, creating an opening, though full-thickness windows through both spaces are not yet completely unobscured. The cystic plate is partially exposed above the artery, but the lower gallbladder is not fully detached to clearly show the entire inferior margin.",
    "phase": "calot_triangle_dissection",
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
      "confidence": 0.75
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.65
     },
     {
      "name": "liver",
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
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Full-thickness hepatocystic windows and complete lower gallbladder mobilization from the cystic plate are not yet fully established.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       819,
       680,
       998
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       117,
       369,
       587
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       272,
       79,
       995,
       602
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       287,
       475,
       774,
       789
      ],
      "confidence": 0.85
     },
     {
      "label": "irrigator",
      "box_2d": [
       669,
       575,
       997,
       786
      ],
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 12
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 12
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 9
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 12
    },
    "fat": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 10
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.7,
     "hits": 3
    },
    "liver": {
     "first": 1.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 12.0,
     "best": 0.85,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c2": 0.8,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the thicker cystic duct on the left and the thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: Windows are dissected between the cystic duct and cystic artery, and between the cystic artery and cystic plate, with the hook tip demonstrating the space behind the artery. C3: The cystic plate is exposed in the background above the cystic artery, showing separation of the lower gallbladder from the liver bed, though the close-up view limits visibility of the entire inferior margin.",
    "phase": "calot_triangle_dissection",
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
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "liver",
      "confidence": 0.8
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook"
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
       834,
       574,
       999
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       102,
       297,
       608
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       172,
       77,
       888,
       623
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       206,
       484,
       615,
       804
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       272,
       427,
       614,
       642
      ],
      "confidence": 0.72
     },
     {
      "label": "hook",
      "box_2d": [
       492,
       638,
       997,
       936
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 13
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 13
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 10
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 13
    },
    "fat": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 11
    },
    "blood": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.7,
     "hits": 4
    },
    "liver": {
     "first": 1.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 11
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 13.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.45,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: There is a window between the duct and artery where the hook is placed, though the deeper window between the artery and cystic plate is still partially filled with tissue. C3: The lower portion of the gallbladder is not yet fully mobilized off the cystic plate to show a clear hanging gallbladder configuration.",
    "phase": "calot_triangle_dissection",
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
      "name": "hepatocystic_window",
      "confidence": 0.75
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
      "name": "blood",
      "confidence": 0.5
     }
    ],
    "instruments": [
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
       457,
       570,
       999,
       883
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       267,
       508,
       652,
       787
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       461,
       381,
       889,
       613
      ],
      "confidence": 0.82
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       435,
       463,
       593,
       596
      ],
      "confidence": 0.76
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       584,
       520,
       1000
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.9,
     "hits": 11
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.9,
     "hits": 14
    },
    "fat": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.9,
     "hits": 12
    },
    "blood": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.7,
     "hits": 4
    },
    "liver": {
     "first": 1.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 11
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 14.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and the thinner cystic artery on the right) are clearly dissected and seen entering the base of the gallbladder. C2: While the hook is dissecting the space between the duct and artery, full-thickness windows through the hepatocystic triangle showing background tissue are not yet established. C3: The close-up view focuses on the pedicle, and the lower gallbladder is not seen separated from the cystic plate.",
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
      "name": "gallbladder",
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
    "reason_if_not": "Full-thickness windows through the hepatocystic triangle and separation from the cystic plate are not yet visible to fully confirm the Critical View of Safety.",
    "boxes": [
     {
      "label": "cystic_duct",
      "box_2d": [
       198,
       73,
       932,
       543
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       245,
       515,
       650,
       816
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       485,
       513,
       999,
       786
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       443,
       816,
       998,
       1000
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.9,
     "hits": 11
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.9,
     "hits": 15
    },
    "fat": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.9,
     "hits": 13
    },
    "blood": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.7,
     "hits": 4
    },
    "liver": {
     "first": 1.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 11
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 14.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left, cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: There is a clear window between the cystic duct and cystic artery, and the hook is placed in the window behind the cystic artery showing clearance of the triangle. C3: The lower gallbladder is partially mobilized off the cystic plate in the background, though the view is zoomed in so the entire inferior margin's separation is only moderately visible.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "cystic_duct",
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.95
     },
     {
      "name": "gallbladder",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.8
     },
     {
      "name": "liver",
      "confidence": 0.7
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "irrigator",
      "box_2d": [
       440,
       705,
       995,
       995
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       215,
       76,
       995,
       548
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       287,
       461,
       682,
       743
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       367,
       399,
       683,
       606
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       104,
       344,
       554
      ],
      "confidence": 0.82
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       507,
       421,
       876
      ],
      "confidence": 0.75
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       696,
       622,
       1000
      ],
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.9,
     "hits": 12
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.9,
     "hits": 16
    },
    "fat": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.9,
     "hits": 13
    },
    "blood": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.7,
     "hits": 5
    },
    "liver": {
     "first": 1.0,
     "last": 16.0,
     "best": 0.9,
     "hits": 12
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 16.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.5,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the lower left and cystic artery in the center) are clearly isolated and seen entering the gallbladder. C2: There is a deep window between the cystic duct and cystic artery, though the space between the artery and the cystic plate is still being dissected with the hook and is not yet a clear full-thickness window. C3: The lower part of the gallbladder is not yet mobilized off the liver bed to expose the cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.9
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the cystic plate and the upper hepatocystic window behind the cystic artery is incomplete.",
    "boxes": [
     {
      "box_2d": [
       0,
       85,
       443,
       779
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       755,
       696,
       998
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       435,
       702,
       947,
       990
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       376,
       403,
       821,
       703
      ],
      "label": "cystic_artery",
      "confidence": 0.85
     },
     {
      "box_2d": [
       42,
       452,
       383,
       646
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
     "last": 17.0,
     "best": 0.98,
     "hits": 17
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.9,
     "hits": 13
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.9,
     "hits": 17
    },
    "fat": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.9,
     "hits": 14
    },
    "blood": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.7,
     "hits": 6
    },
    "liver": {
     "first": 1.0,
     "last": 17.0,
     "best": 0.9,
     "hits": 13
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 16.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and the thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: A clear window is dissected between the cystic duct and cystic artery, and between the cystic artery and the liver bed/cystic plate. C3: The cystic plate is partially visible behind the artery, though the lower gallbladder's separation along the entire inferior margin is somewhat shallow.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.75
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
       775,
       711,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       95,
       434,
       598
      ],
      "confidence": 0.91
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       435,
       75,
       994,
       584
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       362,
       471,
       779,
       739
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       492,
       392,
       730,
       560
      ],
      "confidence": 0.74
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       27,
       495,
       388,
       698
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.98,
     "hits": 18
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 14
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 18
    },
    "fat": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 15
    },
    "blood": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.7,
     "hits": 6
    },
    "liver": {
     "first": 1.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 14
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 18.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 16.0
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
     "what": "c2",
     "on": true,
     "since": 16.0
    }
   ]
  },
  {
   "t": 19.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery on the right) are clearly skeletonized and seen entering the gallbladder. C2: There is a deep gap dissected between the cystic duct and cystic artery, though residual dark coagulated tissue and lack of a clear second window above the artery make full clearance uncertain. C3: The inferior margin of the gallbladder is not yet mobilized off the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.9
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
      "name": "liver",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
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
      "name": "blood",
      "confidence": 0.7
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate is not fully exposed and the window between the cystic artery and liver bed is not completely cleared.",
    "boxes": [
     {
      "label": "cystic_duct",
      "box_2d": [
       292,
       78,
       792,
       644
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       273,
       573,
       563,
       791
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       336,
       521,
       603,
       674
      ],
      "confidence": 0.77
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       810,
       489,
       1000
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       114,
       325,
       622
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.98,
     "hits": 19
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.9,
     "hits": 15
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.9,
     "hits": 19
    },
    "fat": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.9,
     "hits": 16
    },
    "blood": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.7,
     "hits": 7
    },
    "liver": {
     "first": 1.0,
     "last": 19.0,
     "best": 0.9,
     "hits": 15
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 18.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 16.0
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
     "c3": 0.25
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct on the left, cystic artery on the right) are clearly dissected and seen entering the gallbladder neck. Two full-thickness windows are visible between the duct and artery and between the artery and the cystic plate, showing the dark liver background through the cleared triangle. While part of the cystic plate is visible behind the artery, the lower third of the gallbladder is not clearly seen separated along its entire inferior margin as a hanging gallbladder.",
    "phase": "calot_triangle_dissection",
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
      "name": "hepatocystic_window",
      "confidence": 0.9
     },
     {
      "name": "liver",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.75
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
      "confidence": 0.85
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       687,
       617,
       998
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       183,
       513,
       501,
       714
      ],
      "label": "cystic_artery",
      "confidence": 0.85
     },
     {
      "box_2d": [
       140,
       98,
       713,
       574
      ],
      "label": "cystic_duct",
      "confidence": 0.85
     },
     {
      "box_2d": [
       203,
       452,
       549,
       692
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
     "last": 20.0,
     "best": 0.98,
     "hits": 20
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 20
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.9,
     "hits": 16
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.9,
     "hits": 20
    },
    "fat": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.9,
     "hits": 17
    },
    "blood": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.7,
     "hits": 8
    },
    "liver": {
     "first": 1.0,
     "last": 20.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 16.0
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
     "c1": 0.9,
     "c2": 0.5,
     "c3": 0.1
    },
    "cvs_evidence": "Two tubular structures (the thicker cystic duct on the left and thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. A clear window is dissected between the cystic duct and cystic artery, though the window between the artery and the cystic plate is less clearly full-thickness. The lower part of the gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
      "name": "blood",
      "confidence": 0.7
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not sufficiently separated from the cystic plate, and the window posterior to the cystic artery is not fully cleared.",
    "boxes": [
     {
      "box_2d": [
       0,
       699,
       628,
       999
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       94,
       444,
       588
      ],
      "label": "gallbladder",
      "confidence": 0.88
     },
     {
      "box_2d": [
       146,
       100,
       716,
       558
      ],
      "label": "cystic_duct",
      "confidence": 0.9
     },
     {
      "box_2d": [
       181,
       516,
       539,
       705
      ],
      "label": "cystic_artery",
      "confidence": 0.84
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.98,
     "hits": 21
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 21
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.9,
     "hits": 17
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.9,
     "hits": 21
    },
    "fat": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.9,
     "hits": 18
    },
    "blood": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.7,
     "hits": 9
    },
    "liver": {
     "first": 1.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 21.0,
     "best": 0.85,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 16.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and the thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: The hepatocystic triangle is well cleared of fat and connective tissue, showing clear spaces between the duct and artery and behind the artery. C3: The lower gallbladder is not yet sufficiently lifted off the liver bed to fully expose the cystic plate along the entire inferior margin.",
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
      "confidence": 0.95
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
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.6
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not fully separated from the cystic plate to complete the Critical View of Safety.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       688,
       708,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       238,
       79,
       730,
       529
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       270,
       442,
       570,
       650
      ],
      "confidence": 0.83
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       311,
       389,
       563,
       563
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.98,
     "hits": 22
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 22
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.9,
     "hits": 18
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.9,
     "hits": 22
    },
    "fat": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.9,
     "hits": 19
    },
    "blood": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.7,
     "hits": 9
    },
    "liver": {
     "first": 1.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 21.0,
     "best": 0.85,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 16.0
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
   "t": 23.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.2
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct on the left and cystic artery to the right) are clearly dissected and seen entering the gallbladder. A window is present between the duct and artery, though deeper tissue remains and the window above the artery to the cystic plate is not fully cleared through. The lower part of the gallbladder is not yet sufficiently lifted off the liver bed to expose the cystic plate along its inferior margin.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.9
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
      "name": "blood",
      "confidence": 0.7
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not completely cleared to form two full-thickness windows, and the lower gallbladder is not fully separated from the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       686,
       689,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       259,
       76,
       742,
       544
      ],
      "confidence": 0.89
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       287,
       481,
       523,
       659
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.98,
     "hits": 23
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 23
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 23
    },
    "fat": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 20
    },
    "blood": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.7,
     "hits": 10
    },
    "liver": {
     "first": 1.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 16.0
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
     "c1": 0.9,
     "c2": 0.8,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left, thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder neck. C2: Deep dissected spaces/windows are visible between the cystic duct and cystic artery, and superiorly between the artery and the cystic plate/liver bed. C3: While there is dissection above the cystic artery, the lower third of the gallbladder is not clearly elevated off the liver bed to expose the cystic plate along the entire inferior margin.",
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
      "confidence": 0.95
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
      "name": "blood",
      "confidence": 0.7
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
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
       646,
       804,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       81,
       335,
       749
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       243,
       98,
       715,
       529
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       314,
       489,
       568,
       647
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.98,
     "hits": 24
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.9,
     "hits": 20
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.9,
     "hits": 24
    },
    "fat": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.9,
     "hits": 21
    },
    "blood": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.7,
     "hits": 11
    },
    "liver": {
     "first": 1.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 16.0
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
     "c3": 0.15
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct on the left and cystic artery on the right) are clearly skeletonized and seen entering the gallbladder neck. Dissected windows are visible between the cystic duct and cystic artery, and posterior to the cystic artery, clearing the hepatocystic triangle. The lower third of the gallbladder is not yet mobilized off the liver bed to expose the full cystic plate.",
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
      "confidence": 0.95
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
       627,
       874,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       237,
       100,
       764,
       530
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       270,
       452,
       604,
       625
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       277,
       335,
       608,
       629
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.98,
     "hits": 25
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 25
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 21
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 25
    },
    "fat": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 22
    },
    "blood": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.7,
     "hits": 11
    },
    "liver": {
     "first": 1.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 16.0
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.2
    },
    "cvs_evidence": "Two distinct tubular structures, the thicker cystic duct on the left and the thinner cystic artery to its right, are clearly dissected and seen entering the gallbladder. A window is visible between the cystic duct and cystic artery, though the space between the artery and the cystic plate remains partially filled with tissue. The lower gallbladder is not yet sufficiently lifted off the liver bed to expose the cystic plate along the entire inferior margin.",
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
      "confidence": 0.85
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
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate is not fully exposed and the window behind the cystic artery is not completely cleared.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       626,
       960,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       78,
       385,
       630
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       238,
       83,
       725,
       435
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       314,
       403,
       638,
       545
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.98,
     "hits": 26
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 26
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.9,
     "hits": 21
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.9,
     "hits": 26
    },
    "fat": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.9,
     "hits": 23
    },
    "blood": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.7,
     "hits": 12
    },
    "liver": {
     "first": 1.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 16.0
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and thinner cystic artery on the right) are dissected and seen running toward the gallbladder. C2: There is a dissected space between the duct and artery and above the artery, though deeper tissue and blood obscure whether full-thickness windows are completely cleared. C3: The lower gallbladder is not clearly separated from the liver bed to expose the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
      "confidence": 0.9
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
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate is not sufficiently exposed and the hepatocystic triangle windows are not fully cleared through-and-through.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       626,
       1000,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       111,
       494,
       655
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       238,
       87,
       715,
       392
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       330,
       375,
       646,
       529
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       390,
       323,
       624,
       443
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.98,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.9,
     "hits": 21
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.9,
     "hits": 27
    },
    "fat": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.9,
     "hits": 24
    },
    "blood": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.7,
     "hits": 13
    },
    "liver": {
     "first": 1.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 16.0
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: There is a window between the duct and artery, though deeper tissue and charred connective tissue still obscure a completely clear full-thickness view between the artery and the cystic plate. C3: The lower gallbladder is not separated from the liver bed to expose the cystic plate beneath the artery.",
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
      "name": "liver",
      "confidence": 0.8
     },
     {
      "name": "gi_tract",
      "confidence": 0.7
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet dissected off the cystic plate (C3 not achieved) and the window above the artery is incomplete.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       96,
       480,
       673
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       626,
       967,
       1000
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       122,
       388,
       345,
       582
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       219,
       81,
       712,
       443
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       326,
       372,
       608,
       545
      ],
      "confidence": 0.89
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       342,
       313,
       575,
       460
      ],
      "confidence": 0.83
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.98,
     "hits": 28
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.9,
     "hits": 22
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.9,
     "hits": 28
    },
    "fat": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 25
    },
    "blood": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.7,
     "hits": 13
    },
    "liver": {
     "first": 1.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "what": "c2",
     "on": false
    }
   ]
  },
  {
   "t": 29.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.1
    },
    "cvs_evidence": "Two distinct tubular structures, the thicker cystic duct on the left and the thinner cystic artery on the right, are clearly visible entering the gallbladder. A window is cleared between the cystic duct and cystic artery, though the posterior window between the artery and the cystic plate is not fully opened through to the liver bed. The lower part of the gallbladder remains attached to the liver bed with no clearly exposed cystic plate behind the structures.",
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
      "confidence": 0.95
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
      "name": "fat",
      "confidence": 0.95
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
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate is not sufficiently exposed and the posterior hepatocystic window is not fully cleared to confirm the Critical View of Safety.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       96,
       302,
       694
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       678,
       976,
       1000
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       155,
       422,
       381,
       632
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       183,
       140,
       650,
       460
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       318,
       423,
       620,
       577
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       340,
       370,
       600,
       515
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.98,
     "hits": 29
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 29
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.9,
     "hits": 23
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.9,
     "hits": 29
    },
    "fat": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 26
    },
    "blood": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.7,
     "hits": 13
    },
    "liver": {
     "first": 1.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
   "t": 30.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and the thinner cystic artery to the right) are clearly dissected and seen entering the gallbladder. C2: There is a clear window between the cystic duct and cystic artery, and a deeper dissection window above the artery, though some dark cauterized tissue partially obscures the full-thickness view behind the artery. C3: The lower part of the gallbladder is not yet substantially separated from the liver bed to expose the cystic plate along the inferior margin.",
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
      "confidence": 0.92
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
      "name": "blood",
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
      "box_2d": [
       0,
       611,
       1000,
       1000
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       114,
       387,
       638
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       313,
       86,
       835,
       380
      ],
      "label": "cystic_duct",
      "confidence": 0.88
     },
     {
      "box_2d": [
       435,
       373,
       739,
       516
      ],
      "label": "cystic_artery",
      "confidence": 0.82
     },
     {
      "box_2d": [
       431,
       310,
       705,
       439
      ],
      "label": "hepatocystic_window",
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.98,
     "hits": 30
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 30
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 24
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 30
    },
    "fat": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 27
    },
    "blood": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.7,
     "hits": 13
    },
    "liver": {
     "first": 1.0,
     "last": 30.0,
     "best": 0.98,
     "hits": 26
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
   "t": 31.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery in the middle) are clearly dissected and seen heading toward the gallbladder. C2: Two clear windows are dissected through the hepatocystic triangle on either side of the cystic artery, revealing background tissue. C3: The liver parenchyma in the foreground occludes the right side of the frame, and the lower gallbladder is not separated from the cystic plate along its entire inferior margin.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.95
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
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       507,
       998,
       1000
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       78,
       347,
       527
      ],
      "label": "gallbladder",
      "confidence": 0.85
     },
     {
      "box_2d": [
       387,
       224,
       690,
       360
      ],
      "label": "hepatocystic_window",
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.98,
     "hits": 31
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 31
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.9,
     "hits": 25
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.9,
     "hits": 31
    },
    "fat": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 28
    },
    "blood": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.7,
     "hits": 13
    },
    "liver": {
     "first": 1.0,
     "last": 31.0,
     "best": 0.98,
     "hits": 27
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
   "t": 32.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the thicker cystic duct on the left and the thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: There is a clear window between the cystic duct and cystic artery, and dissection behind the artery clears the hepatocystic triangle of connective tissue. C3: The lower third of the gallbladder is not yet mobilized off the liver bed to expose the cystic plate.",
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
      "confidence": 0.95
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
      "confidence": 0.8
     },
     {
      "name": "blood",
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
      "box_2d": [
       0,
       584,
       1000,
       1000
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       106,
       408,
       649
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       368,
       80,
       867,
       345
      ],
      "label": "cystic_duct",
      "confidence": 0.91
     },
     {
      "box_2d": [
       521,
       359,
       792,
       483
      ],
      "label": "cystic_artery",
      "confidence": 0.88
     },
     {
      "box_2d": [
       527,
       288,
       771,
       407
      ],
      "label": "hepatocystic_window",
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.98,
     "hits": 32
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 32
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 32
    },
    "fat": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 29
    },
    "blood": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.7,
     "hits": 13
    },
    "liver": {
     "first": 1.0,
     "last": 32.0,
     "best": 0.98,
     "hits": 28
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 30.0
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
     "what": "c2",
     "on": true,
     "since": 30.0
    }
   ]
  },
  {
   "t": 33.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder neck. C2: While there is space dissected between the duct and artery and behind the artery, the windows are filled with charred connective tissue rather than clearly showing full-thickness background liver through both gaps. C3: The inferior margin of the gallbladder is not yet sufficiently lifted off the liver bed to expose the cystic plate.",
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
      "confidence": 0.65
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
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle windows are not fully cleared to show full-thickness background, and the lower gallbladder is not mobilized off the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       730,
       890,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       91,
       529,
       750
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       236,
       207,
       725,
       484
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       349,
       484,
       664,
       633
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       346,
       402,
       664,
       560
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.98,
     "hits": 33
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 33
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.9,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.9,
     "hits": 33
    },
    "fat": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 30
    },
    "blood": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.7,
     "hits": 13
    },
    "liver": {
     "first": 1.0,
     "last": 33.0,
     "best": 0.98,
     "hits": 29
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 30.0
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
   "t": 34.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.35,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the thicker cystic duct on the left and the thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: While there is space cleared between the duct and artery and above the artery, full-thickness windows showing clear background tissue through both gaps are not completely evident. C3: The lower portion of the gallbladder is only partially dissected from the liver bed, and the cystic plate is not fully exposed along the entire inferior margin.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.65
     },
     {
      "name": "cystic_plate",
      "confidence": 0.5
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
     "grasper",
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       24,
       88,
       201,
       312
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       226,
       276,
       706,
       564
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       334,
       543,
       655,
       704
      ],
      "confidence": 0.89
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       324,
       480,
       672,
       696
      ],
      "confidence": 0.85
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       269,
       730,
       1000
      ],
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.98,
     "hits": 34
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 34
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 34
    },
    "fat": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 31
    },
    "blood": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.7,
     "hits": 14
    },
    "liver": {
     "first": 1.0,
     "last": 34.0,
     "best": 0.98,
     "hits": 30
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 30.0
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
   "t": 35.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A prominent tubular structure (cystic duct) is visible on the left and a thinner structure (likely cystic artery) is being approached by the grasper, though the second structure is not yet fully defined as tubular. C2: There is dark charred tissue between the structures without clear full-thickness windows showing background liver. C3: The lower gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle windows and cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       785,
       749,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       163,
       321,
       798
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       259,
       273,
       721,
       532
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       67,
       88,
       246,
       303
      ],
      "confidence": 0.95
     },
     {
      "label": "clipper",
      "box_2d": [
       465,
       542,
       1000,
       868
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.98,
     "hits": 35
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 34
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.9,
     "hits": 35
    },
    "fat": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 32
    },
    "blood": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.7,
     "hits": 14
    },
    "liver": {
     "first": 1.0,
     "last": 35.0,
     "best": 0.98,
     "hits": 31
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "what": "c2",
     "on": false
    }
   ]
  },
  {
   "t": 36.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (likely the cystic duct and cystic artery) are partially visible entering the neck of the gallbladder, though the foreground grasper partially obscures the cystic duct. C2: There is a dissected gap visible between the two structures and behind the artery, but the foreground grasper blocks a clear, unimpeded view of full-thickness windows. C3: The lower portion of the gallbladder remains largely attached to the liver bed with minimal exposure of the cystic plate.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "A large dissecting grasper in the foreground partially occludes the view of the hepatocystic triangle and the cystic plate is not sufficiently exposed.",
    "boxes": [
     {
      "box_2d": [
       0,
       171,
       642,
       749
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       726,
       856,
       1000
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       181,
       75,
       395,
       296
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       388,
       335,
       1000,
       680
      ],
      "label": "scissors",
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.98,
     "hits": 35
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 34
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.9,
     "hits": 35
    },
    "fat": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 32
    },
    "blood": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.7,
     "hits": 14
    },
    "liver": {
     "first": 1.0,
     "last": 36.0,
     "best": 0.98,
     "hits": 31
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly identifiable. C2: The hepatocystic triangle is still mostly covered by peritoneum and connective tissue without full-thickness windows. C3: The lower gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage and neither the cystic duct nor the cystic artery is clearly exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       483,
       998,
       989
      ],
      "confidence": 0.99
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       76,
       506,
       525
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       406,
       370,
       998,
       663
      ],
      "confidence": 0.99
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       525,
       204,
       733,
       336
      ],
      "confidence": 0.55
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.98,
     "hits": 36
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 34
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.9,
     "hits": 36
    },
    "fat": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 32
    },
    "blood": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.7,
     "hits": 15
    },
    "liver": {
     "first": 1.0,
     "last": 37.0,
     "best": 0.98,
     "hits": 32
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and the thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: While there is deep dissection between the duct and artery and above the artery, charred tissue fills the base of the gaps, preventing clear full-thickness windows through to the background. C3: The gallbladder remains largely attached to the liver bed with only a small focal area of dissection above the artery, not exposing the cystic plate along the inferior margin.",
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle windows are not completely cleared (no full-thickness view through the triangle) and the lower gallbladder is not separated from the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       731,
       854,
       999
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       223,
       810,
       636,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       316,
       128,
       843,
       518
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       353,
       491,
       664,
       650
      ],
      "confidence": 0.77
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       83,
       490,
       747
      ],
      "confidence": 0.84
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.98,
     "hits": 37
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 36
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 35
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.9,
     "hits": 37
    },
    "fat": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 33
    },
    "blood": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.7,
     "hits": 16
    },
    "liver": {
     "first": 1.0,
     "last": 38.0,
     "best": 0.98,
     "hits": 33
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and thinner cystic artery in the center) are clearly seen entering the gallbladder. C2: While there is a space dissected between the duct and artery, the triangle is still filled with charred tissue and lacks clear, full-thickness windows through to the background. C3: The gallbladder remains attached to the liver bed with no exposed cystic plate visible behind the artery.",
    "phase": "clipping_and_cutting",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "clipper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       633,
       996,
       999
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       111,
       574,
       673
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       368,
       73,
       866,
       456
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       308,
       401,
       707,
       569
      ],
      "confidence": 0.76
     },
     {
      "label": "scissors",
      "box_2d": [
       633,
       594,
       997,
       834
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.98,
     "hits": 38
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 36
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.9,
     "hits": 38
    },
    "fat": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 34
    },
    "blood": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.7,
     "hits": 17
    },
    "liver": {
     "first": 1.0,
     "last": 39.0,
     "best": 0.98,
     "hits": 34
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct) is clearly visible on the left, while the second structure is not yet skeletonized or clearly connected to the gallbladder. C2: The hepatocystic triangle is still filled with connective tissue and charred debris, with no full-thickness windows visible. C3: The lower gallbladder remains attached to the liver bed with the peritoneal attachment only partially incised.",
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
      "confidence": 0.8
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; only one tubular structure is partially visible and no full-thickness windows or cystic plate exposure have been achieved.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       619,
       985,
       999
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       80,
       439,
       638
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       404,
       463,
       1000,
       801
      ],
      "confidence": 0.97
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       347,
       78,
       928,
       472
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.98,
     "hits": 39
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 36
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 39
    },
    "fat": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 35
    },
    "blood": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.7,
     "hits": 17
    },
    "liver": {
     "first": 1.0,
     "last": 40.0,
     "best": 0.98,
     "hits": 35
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and a thinner cystic artery in the center) are clearly dissected and seen entering the gallbladder. C2: There is a window dissected between the cystic duct and cystic artery, though the space between the artery and the cystic plate is partially obscured by the grasper and remaining connective tissue. C3: The lower portion of the gallbladder is not yet fully detached from the liver bed, and the grasper and liver lobe on the right occlude a full view of the cystic plate.",
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
      "confidence": 0.9
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
      "name": "blood",
      "confidence": 0.7
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
       578,
       984,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       80,
       400,
       590
      ],
      "confidence": 0.95
     },
     {
      "label": "clipper",
      "box_2d": [
       341,
       497,
       1000,
       888
      ],
      "confidence": 0.97
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       319,
       76,
       851,
       386
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       368,
       346,
       707,
       511
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.98,
     "hits": 40
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 37
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 27
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 40
    },
    "fat": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 35
    },
    "blood": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.7,
     "hits": 18
    },
    "liver": {
     "first": 1.0,
     "last": 41.0,
     "best": 0.98,
     "hits": 36
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left, cystic artery in the jaws of the grasper) are seen entering the gallbladder. C2: There is a clear window between the cystic duct and cystic artery, and a partially opened space behind the artery, though tissue remains in the background. C3: The lower gallbladder appears mobilized off the liver bed with the cystic plate exposed behind the structures, though the view of the full inferior border is somewhat tight.",
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
       603,
       1000,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       93,
       402,
       623
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       316,
       75,
       800,
       396
      ],
      "confidence": 0.75
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       347,
       374,
       575,
       474
      ],
      "confidence": 0.73
     },
     {
      "label": "clipper",
      "box_2d": [
       554,
       398,
       1000,
       617
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.98,
     "hits": 41
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 40
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 38
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 28
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 41
    },
    "fat": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.7,
     "hits": 18
    },
    "liver": {
     "first": 1.0,
     "last": 42.0,
     "best": 0.98,
     "hits": 37
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 42.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and the thinner cystic artery in the jaws of the instrument) are clearly seen entering the gallbladder. C2: A window is cleared between the cystic duct and cystic artery, though the space between the artery and the cystic plate is only partially dissected. C3: The lower portion of the gallbladder is not yet fully separated from the liver bed to expose the entire cystic plate.",
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
      "name": "blood",
      "confidence": 0.7
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
       585,
       1000,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       151,
       335,
       593
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       346,
       360,
       707,
       512
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       273,
       76,
       834,
       388
      ],
      "confidence": 0.75
     },
     {
      "label": "clipper",
      "box_2d": [
       505,
       414,
       1000,
       651
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.98,
     "hits": 42
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 39
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 29
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.7,
     "hits": 19
    },
    "liver": {
     "first": 1.0,
     "last": 43.0,
     "best": 0.98,
     "hits": 38
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 42.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct) is partially visible on the left, while the grasper shaft heavily occludes the rest of the triangle. C2: Full-thickness windows are not visible due to the extreme close-up and occlusion by the instrument. C3: The cystic plate is not visible along the inferior margin of the gallbladder as the view is blocked by the grasper.",
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
      "confidence": 0.8
     },
     {
      "name": "connective_tissue",
      "confidence": 0.7
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The camera is very close and the grasper shaft occludes the majority of the hepatocystic triangle.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       547,
       969,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       280,
       1000,
       835
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       77,
       659,
       536
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       360,
       80,
       777,
       360
      ],
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.98,
     "hits": 42
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 39
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 29
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.9,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.7,
     "hits": 19
    },
    "liver": {
     "first": 1.0,
     "last": 44.0,
     "best": 0.98,
     "hits": 38
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 42.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.8,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left, cystic artery in the middle) are dissected and visible entering the gallbladder. C2: Two clear windows are visible on either side of the cystic artery, showing cleared hepatocystic triangle spaces. C3: The cystic plate is largely obscured by the liver lobe on the right and incomplete inferior dissection.",
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
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate and lower gallbladder margin are obscured by the liver, preventing full confirmation of C3.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       477,
       987,
       852
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       78,
       396,
       497
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       336,
       250,
       629,
       402
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       346,
       152,
       659,
       335
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.98,
     "hits": 43
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 42
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 40
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.9,
     "hits": 30
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.9,
     "hits": 43
    },
    "fat": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 38
    },
    "blood": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.8,
     "hits": 20
    },
    "liver": {
     "first": 1.0,
     "last": 45.0,
     "best": 0.98,
     "hits": 39
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 42.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: There is a dissected space between the cystic duct and cystic artery, though the window between the artery and the cystic plate is not fully opened or clearly seen through. C3: The lower portion of the gallbladder remains attached to the liver bed with no clearly exposed cystic plate below the inferior margin.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.65
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
      "confidence": 0.7
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate (C3) and upper hepatocystic window (C2) are not sufficiently dissected to confirm the full Critical View of Safety.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       503,
       1000,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       75,
       429,
       521
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       365,
       73,
       834,
       285
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       386,
       283,
       715,
       438
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.98,
     "hits": 44
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 43
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 41
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.9,
     "hits": 30
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.9,
     "hits": 44
    },
    "fat": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 39
    },
    "blood": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.8,
     "hits": 21
    },
    "liver": {
     "first": 1.0,
     "last": 46.0,
     "best": 0.98,
     "hits": 40
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 42.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.8,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and thinner cystic artery on the right) are clearly dissected and visible heading toward the gallbladder. C2: There are clear windows dissected between the duct and artery and behind the artery, showing the background tissue through the hepatocystic triangle. C3: The gallbladder is not elevated enough off the liver bed to expose the cystic plate along its inferior margin.",
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
      "confidence": 0.75
     },
     {
      "name": "liver",
      "confidence": 0.95
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
       488,
       1000,
       996
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       77,
       760,
       505
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       438,
       289,
       727,
       411
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       140,
       220,
       460,
       470
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       455,
       204,
       665,
       335
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.98,
     "hits": 45
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 42
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 31
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 45
    },
    "fat": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.8,
     "hits": 22
    },
    "liver": {
     "first": 1.0,
     "last": 47.0,
     "best": 0.98,
     "hits": 41
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 42.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct on the left and cystic artery in the center) are clearly dissected and running toward the gallbladder. A window is cleared between the cystic duct and cystic artery, though the window between the artery and the cystic plate is only partially dissected. The lower gallbladder is still largely attached to the liver bed, so the cystic plate is not fully exposed.",
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
      "confidence": 0.92
     },
     {
      "name": "cystic_artery",
      "confidence": 0.92
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.8
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
      "confidence": 0.85
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate and the window behind the cystic artery are not fully cleared to confirm complete CVS.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       512,
       998,
       998
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       78,
       410,
       532
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       359,
       298,
       716,
       422
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       322,
       78,
       755,
       298
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
     "best": 0.98,
     "hits": 46
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 45
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 43
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.9,
     "hits": 32
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.9,
     "hits": 46
    },
    "fat": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.85,
     "hits": 23
    },
    "liver": {
     "first": 1.0,
     "last": 48.0,
     "best": 0.98,
     "hits": 42
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 42.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the thicker cystic duct on the left and thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder neck. C2: While the space between the duct and artery is cleared, there is no full-thickness window visible through the triangle to the background liver, and the space behind the artery is still attached. C3: The lower part of the gallbladder remains attached to the liver bed with no significant portion of the cystic plate exposed behind the structures.",
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not completely cleared to create full-thickness windows, and the lower gallbladder is not yet mobilized off the cystic plate.",
    "boxes": [
     {
      "box_2d": [
       0,
       128,
       486,
       751
      ],
      "confidence": 0.94,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       684,
       1000,
       999
      ],
      "confidence": 0.98,
      "label": "liver"
     },
     {
      "box_2d": [
       337,
       194,
       816,
       452
      ],
      "confidence": 0.89,
      "label": "cystic_duct"
     },
     {
      "box_2d": [
       468,
       488,
       785,
       591
      ],
      "confidence": 0.84,
      "label": "cystic_artery"
     },
     {
      "box_2d": [
       108,
       88,
       264,
       258
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       247,
       517,
       545,
       627
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
     "last": 49.0,
     "best": 0.98,
     "hits": 47
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 46
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 44
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.9,
     "hits": 32
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.9,
     "hits": 47
    },
    "fat": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 42
    },
    "blood": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 23
    },
    "liver": {
     "first": 1.0,
     "last": 49.0,
     "best": 0.98,
     "hits": 43
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 42.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures, the cystic duct on the left and the thinner cystic artery on the right, are clearly dissected and seen entering the gallbladder. C2: The space between the cystic duct and cystic artery is well cleared, and a window is partially opened between the artery and the cystic plate, though deeper tissue remains slightly obscured by cauterized tissue. C3: The lower portion of the gallbladder is still largely attached to the liver bed with limited exposure of the cystic plate.",
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
      "confidence": 0.92
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.8
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
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.85
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
       634,
       1000,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       91,
       417,
       729
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       107,
       88,
       237,
       234
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       316,
       168,
       819,
       386
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       486,
       424,
       795,
       526
      ],
      "confidence": 0.89
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       464,
       317,
       836,
       545
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.98,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 47
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 45
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.9,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.9,
     "hits": 48
    },
    "fat": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 43
    },
    "blood": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 24
    },
    "liver": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.98,
     "hits": 44
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "Two distinct tubular structures, the thicker cystic duct on the left and the thinner cystic artery on the right, are clearly visible entering the gallbladder. A window is cleared between the duct and artery, though the window between the artery and the cystic plate still contains charred connective tissue and does not show a full-thickness background view. The lower third of the gallbladder is not yet mobilized off the liver bed to expose the cystic plate along its inferior margin.",
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
      "name": "cystic_artery",
      "confidence": 0.9
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
      "box_2d": [
       0,
       563,
       1000,
       1000
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       193,
       396,
       628
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       252,
       119,
       735,
       306
      ],
      "label": "cystic_duct",
      "confidence": 0.85
     },
     {
      "box_2d": [
       438,
       345,
       738,
       449
      ],
      "label": "cystic_artery",
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.98,
     "hits": 49
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 46
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 34
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 49
    },
    "fat": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 44
    },
    "blood": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.85,
     "hits": 24
    },
    "liver": {
     "first": 1.0,
     "last": 51.0,
     "best": 0.99,
     "hits": 45
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder neck. C2: While there is a clear gap between the cystic duct and cystic artery, the window behind the artery toward the cystic plate is not fully opened through to the background. C3: The lower portion of the gallbladder remains largely attached to the liver bed and the cystic plate is not exposed along the inferior margin.",
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
      "name": "hepatocystic_window",
      "confidence": 0.75
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
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not completely cleared behind the cystic artery and the lower gallbladder has not been elevated off the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       527,
       986,
       997
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       149,
       414,
       575
      ],
      "confidence": 0.91
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       187,
       86,
       747,
       321
      ],
      "confidence": 0.83
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       386,
       333,
       715,
       426
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.98,
     "hits": 50
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 47
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.9,
     "hits": 35
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.9,
     "hits": 50
    },
    "fat": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 45
    },
    "blood": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.85,
     "hits": 25
    },
    "liver": {
     "first": 1.0,
     "last": 52.0,
     "best": 0.99,
     "hits": 46
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.75,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and the thinner cystic artery in the center) are clearly seen entering the lower gallbladder. C2: Dissected windows are visible between the cystic duct and cystic artery, and between the cystic artery and the liver bed, with background tissue visible through the gaps. C3: The lower gallbladder is partially elevated above the artery, but the peritoneum along the medial margin adjacent to the liver is still attached, so the cystic plate is not fully exposed along the entire inferior margin.",
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
      "name": "hepatocystic_window",
      "confidence": 0.8
     },
     {
      "name": "cystic_plate",
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
      "name": "blood",
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
       528,
       946,
       952
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       76,
       361,
       554
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       182,
       79,
       696,
       298
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       330,
       330,
       678,
       425
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.98,
     "hits": 51
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 48
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.9,
     "hits": 36
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.9,
     "hits": 51
    },
    "fat": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 46
    },
    "blood": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.85,
     "hits": 25
    },
    "liver": {
     "first": 1.0,
     "last": 53.0,
     "best": 0.99,
     "hits": 47
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 53.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the thicker cystic duct on the left and thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: There is a cleared gap between the cystic duct and cystic artery, and a smaller depression between the artery and liver bed, though full-thickness windows seeing completely through to the background are not fully established. C3: The lower part of the gallbladder remains largely attached to the liver bed with minimal exposure of the cystic plate.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet separated from the cystic plate, and full-thickness windows are not completely clear.",
    "boxes": [
     {
      "box_2d": [
       0,
       647,
       922,
       1000
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       158,
       448,
       710
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       90,
       93,
       220,
       271
      ],
      "label": "grasper",
      "confidence": 0.93
     },
     {
      "box_2d": [
       270,
       200,
       752,
       424
      ],
      "label": "cystic_duct",
      "confidence": 0.88
     },
     {
      "box_2d": [
       484,
       452,
       736,
       553
      ],
      "label": "cystic_artery",
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.98,
     "hits": 52
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 49
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.9,
     "hits": 36
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 52
    },
    "fat": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 26
    },
    "liver": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.99,
     "hits": 48
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 53.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and a thinner cystic artery on the right) are visible entering the lower gallbladder. C2: There is a dissected space between the two structures and behind the artery, though dark coagulated tissue and incomplete clearing make full-thickness windows uncertain. C3: The lower part of the gallbladder is not yet sufficiently lifted off the liver bed to clearly expose the cystic plate along the inferior margin.",
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
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.5
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
    "reason_if_not": "Incomplete dissection of the cystic plate and residual dark tissue in the hepatocystic triangle prevent full confirmation of the Critical View of Safety.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       730,
       967,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       242,
       606,
       783
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       61,
       95,
       194,
       337
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       259,
       287,
       747,
       512
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       431,
       530,
       708,
       641
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.98,
     "hits": 53
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 52
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 50
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.9,
     "hits": 36
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.9,
     "hits": 53
    },
    "fat": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 48
    },
    "blood": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.85,
     "hits": 27
    },
    "liver": {
     "first": 1.0,
     "last": 55.0,
     "best": 0.99,
     "hits": 49
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 53.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.35
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct on the left and cystic artery on the right) are clearly dissected and seen entering the gallbladder. A clear window is visible between the duct and the artery, and some dissection is visible posterior to the artery, though deep charred tissue slightly limits full-thickness visualization of the posterior window. The lower gallbladder is only minimally mobilized from the liver bed, so the cystic plate is not fully exposed along the inferior margin.",
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
      "confidence": 0.92
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
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
      "confidence": 0.8
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
      "box_2d": [
       0,
       689,
       861,
       999
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       148,
       257,
       640,
       481
      ],
      "label": "cystic_duct",
      "confidence": 0.92
     },
     {
      "box_2d": [
       272,
       496,
       599,
       607
      ],
      "label": "cystic_artery",
      "confidence": 0.88
     },
     {
      "box_2d": [
       0,
       237,
       302,
       645
      ],
      "label": "gallbladder",
      "confidence": 0.85
     },
     {
      "box_2d": [
       279,
       440,
       607,
       567
      ],
      "label": "hepatocystic_window",
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.98,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 53
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 51
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.9,
     "hits": 37
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.9,
     "hits": 54
    },
    "fat": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 49
    },
    "blood": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.85,
     "hits": 28
    },
    "liver": {
     "first": 1.0,
     "last": 56.0,
     "best": 0.99,
     "hits": 50
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 56.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 56.0,
     "best": 0.85,
     "hits": 7
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: The hepatocystic triangle is largely cleared with separation between the duct, artery, and liver bed, though the windows are deep and partially shadowed rather than clearly transparent. C3: The gallbladder neck is partially lifted off the liver bed, but the cystic plate is not fully exposed along the entire lower third of the gallbladder.",
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
      "confidence": 0.95
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
       135,
       314,
       641,
       519
      ],
      "label": "cystic_duct",
      "confidence": 0.95
     },
     {
      "box_2d": [
       291,
       550,
       593,
       656
      ],
      "label": "cystic_artery",
      "confidence": 0.88
     },
     {
      "box_2d": [
       0,
       719,
       835,
       1000
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       287,
       305,
       755
      ],
      "label": "gallbladder",
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.98,
     "hits": 55
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 52
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.9,
     "hits": 38
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.9,
     "hits": 55
    },
    "fat": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 50
    },
    "blood": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 29
    },
    "liver": {
     "first": 1.0,
     "last": 57.0,
     "best": 0.99,
     "hits": 51
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.3
    },
    "cvs_evidence": "Two distinct tubular structures (the larger cystic duct on the left and thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. A window is cleared between the cystic duct and artery and partially behind the artery, though dark charred tissue in the background somewhat obscures a full-thickness through-view. The lower gallbladder is only minimally elevated off the liver bed and a full hanging gallbladder exposing the entire inferior cystic plate is not yet demonstrated.",
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
      "confidence": 0.92
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.8
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       2,
       102,
       149,
       368
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       335,
       798,
       1000
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       112,
       75,
       1000,
       516
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       228,
       318,
       689,
       544
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       388,
       550,
       672,
       662
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.98,
     "hits": 56
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 55
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 53
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 56
    },
    "fat": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 51
    },
    "blood": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.85,
     "hits": 30
    },
    "liver": {
     "first": 1.0,
     "last": 58.0,
     "best": 0.99,
     "hits": 52
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 58.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 56.0
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
     "what": "c2",
     "on": true,
     "since": 56.0
    }
   ]
  },
  {
   "t": 59.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct on the left and cystic artery on the right) are clearly dissected and seen entering the gallbladder neck. A window is cleared between the cystic duct and artery, though the window between the artery and cystic plate is still partially filled with charred tissue and lacks full-thickness transparency. The lower part of the gallbladder remains largely attached to the liver bed without full exposure of the cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.92
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "fat",
      "confidence": 0.98
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
    "reason_if_not": "The hepatocystic triangle windows are not completely cleared to full thickness and the lower gallbladder is not sufficiently separated from the cystic plate.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       33,
       93,
       198,
       412
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       259,
       376,
       734,
       569
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       426,
       610,
       714,
       714
      ],
      "confidence": 0.77
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       345,
       604,
       856
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       807,
       831,
       1000
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.98,
     "hits": 57
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 56
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 54
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.98,
     "hits": 52
    },
    "blood": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.85,
     "hits": 31
    },
    "liver": {
     "first": 1.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 53
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 58.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 56.0
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.3
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the thicker cystic duct on the left and thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: While there is a deep recess between the duct and artery and some clearance lateral to the artery, full-thickness windows showing background liver through both gaps are not completely clear due to residual charred tissue behind them. C3: A small portion of the lower gallbladder is lifted from the cystic plate on the right, but the entire inferior margin is not yet clearly separated.",
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
      "confidence": 0.6
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.5
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
    "reason_if_not": "Full-thickness hepatocystic windows and complete separation of the lower gallbladder from the cystic plate are not yet fully achieved to confirm the Critical View of Safety.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       23,
       107,
       169,
       362
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       754,
       998,
       1000
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       307,
       663,
       858
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       254,
       322,
       718,
       520
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       435,
       544,
       718,
       646
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
     "best": 0.98,
     "hits": 58
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 57
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 55
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.9,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.9,
     "hits": 58
    },
    "fat": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.98,
     "hits": 53
    },
    "blood": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 32
    },
    "liver": {
     "first": 1.0,
     "last": 60.0,
     "best": 0.99,
     "hits": 54
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
    },
    "c2": {
     "on": true,
     "since": 56.0
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
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct anteriorly and a thinner cystic artery posteriorly) are dissected and seen running toward the gallbladder. C2: There is a dissected space between the two structures and posterior to the artery, though dark cauterized tissue in the background makes full-thickness windows somewhat ambiguous. C3: The lower gallbladder remains largely attached to the liver bed without a clear hanging appearance exposing the cystic plate.",
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
      "name": "cystic_artery",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.98
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
       46,
       747,
       994,
       999
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       63,
       91,
       195,
       399
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       321,
       706,
       879
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       257,
       347,
       758,
       523
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       471,
       545,
       758,
       642
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.98,
     "hits": 59
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 56
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.9,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 59
    },
    "fat": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.98,
     "hits": 54
    },
    "blood": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 33
    },
    "liver": {
     "first": 1.0,
     "last": 61.0,
     "best": 0.99,
     "hits": 55
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "what": "c2",
     "on": false
    }
   ]
  },
  {
   "t": 62.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct on the left and thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. C2: There is a dissected space between the duct and artery and lateral to the artery, though dark cauterized tissue in the background makes it slightly uncertain if full-thickness windows are completely cleared through and through. C3: The lower third of the gallbladder is not yet mobilized off the liver bed to expose the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.55
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
      "confidence": 0.6
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
       715,
       1000,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       281,
       467,
       835
      ],
      "confidence": 0.91
     },
     {
      "label": "grasper",
      "box_2d": [
       48,
       104,
       174,
       361
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       138,
       304,
       735,
       480
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       444,
       513,
       713,
       604
      ],
      "confidence": 0.83
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       283,
       504,
       540,
       671
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.98,
     "hits": 60
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 59
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 57
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.9,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 60
    },
    "fat": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.98,
     "hits": 55
    },
    "blood": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.85,
     "hits": 33
    },
    "liver": {
     "first": 1.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 56
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
   "t": 63.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.3,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left, thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder neck. C2: While there is a dissected space between the duct and artery, dark cauterized tissue and incomplete clearance between the artery and cystic plate prevent seeing clear full-thickness windows through to the background. C3: The lower portion of the gallbladder remains attached to the liver bed, with no exposed cystic plate visible underneath.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.92
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
      "box_2d": [
       0,
       219,
       608,
       804
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       269,
       560,
       1000,
       977
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       89,
       93,
       232,
       296
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       303,
       213,
       783,
       336
      ],
      "label": "cystic_duct",
      "confidence": 0.9
     },
     {
      "box_2d": [
       580,
       393,
       869,
       459
      ],
      "label": "cystic_artery",
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.98,
     "hits": 61
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 60
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 58
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.9,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 61
    },
    "fat": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.98,
     "hits": 56
    },
    "blood": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.85,
     "hits": 34
    },
    "liver": {
     "first": 1.0,
     "last": 63.0,
     "best": 0.99,
     "hits": 57
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two tubular structures corresponding to the cystic duct and cystic artery are delineated and seen entering the gallbladder neck. C2: Although a gap is dissected between the two structures, background tissue dominates the recess without a clear full-thickness window through the triangle. C3: The inferior margin of the gallbladder remains attached to the liver bed with no exposed cystic plate below it.",
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
      "confidence": 0.88
     },
     {
      "name": "fat",
      "confidence": 0.98
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Full-thickness hepatocystic windows and cystic plate separation are not yet completely achieved to confirm the Critical View of Safety.",
    "boxes": [
     {
      "box_2d": [
       0,
       435,
       631,
       999
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       256,
       477,
       708,
       662
      ],
      "label": "cystic_duct",
      "confidence": 0.88
     },
     {
      "box_2d": [
       429,
       680,
       714,
       809
      ],
      "label": "cystic_artery",
      "confidence": 0.76
     },
     {
      "box_2d": [
       89,
       87,
       277,
       510
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       0,
       163,
       100,
       442
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
     "last": 64.0,
     "best": 0.98,
     "hits": 62
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 61
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 59
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.9,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 62
    },
    "fat": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.98,
     "hits": 57
    },
    "blood": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.85,
     "hits": 35
    },
    "liver": {
     "first": 1.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 58
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct on the left and a thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. The gap between the cystic duct and artery contains dark coagulated tissue and does not show clear full-thickness windows through to the background. The lower part of the gallbladder remains attached to the liver bed with no dissected cystic plate visible behind the artery.",
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic windows are not fully cleared to see the background, and the lower gallbladder is not yet mobilized off the cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       323,
       621,
       846
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       792,
       856,
       1000
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       107,
       155,
       345
      ],
      "confidence": 0.8
     },
     {
      "label": "grasper",
      "box_2d": [
       131,
       79,
       329,
       412
      ],
      "confidence": 0.97
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       323,
       373,
       755,
       567
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       454,
       595,
       727,
       712
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.98,
     "hits": 63
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 62
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 60
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.9,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 63
    },
    "fat": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.98,
     "hits": 58
    },
    "blood": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.85,
     "hits": 36
    },
    "liver": {
     "first": 1.0,
     "last": 65.0,
     "best": 0.99,
     "hits": 59
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
   "t": 66.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular structures (a broader cystic duct on the left and a thinner cystic artery on the right) are delineated entering the lower gallbladder. C2: Although there is dissection between the two structures and to the right of the artery, dark coagulated tissue and background fat prevent seeing clear full-thickness windows. C3: The lower third of the gallbladder is not yet mobilized off the liver bed to expose the cystic plate.",
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
      "confidence": 0.85
     },
     {
      "name": "cystic_artery",
      "confidence": 0.8
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
    "reason_if_not": "Incomplete clearance of the hepatocystic triangle windows and lack of cystic plate mobilization.",
    "boxes": [
     {
      "box_2d": [
       0,
       80,
       401,
       443
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       386,
       563,
       1000
      ],
      "label": "gallbladder",
      "confidence": 0.96
     },
     {
      "box_2d": [
       263,
       85,
       731,
       479
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       390,
       475,
       960,
       775
      ],
      "label": "cystic_duct",
      "confidence": 0.92
     },
     {
      "box_2d": [
       477,
       715,
       694,
       844
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
     "last": 66.0,
     "best": 0.98,
     "hits": 64
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 63
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 61
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.9,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 64
    },
    "fat": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.98,
     "hits": 59
    },
    "blood": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.85,
     "hits": 37
    },
    "liver": {
     "first": 1.0,
     "last": 66.0,
     "best": 0.99,
     "hits": 60
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.2,
     "c3": 0.1
    },
    "cvs_evidence": "Two tubular structures (the thicker cystic duct on the left and thinner cystic artery on the right) are clearly dissected and seen entering the gallbladder. Although there is dissection between the duct and artery and posterior to the artery, full-thickness windows showing background tissue through both gaps are not clearly established. The lower part of the gallbladder is not yet lifted off the liver bed to expose the cystic plate.",
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
      "confidence": 0.92
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
    "reason_if_not": "The hepatocystic triangle lacks full-thickness windows and the cystic plate is not exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       89,
       392,
       459
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       401,
       442,
       897
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       243,
       87,
       760,
       508
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       371,
       499,
       732,
       745
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       435,
       734,
       660,
       867
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.98,
     "hits": 65
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 64
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 62
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.9,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 65
    },
    "fat": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.98,
     "hits": 60
    },
    "blood": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 38
    },
    "liver": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 61
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct below and thinner cystic artery above) are clearly visible entering the gallbladder. C2: Two dissected windows are visible between the duct and artery and above the artery, showing background liver/tissue through the hepatocystic triangle. C3: The lower portion of the gallbladder is not yet lifted off the liver bed to expose the cystic plate along the inferior margin.",
    "phase": "calot_triangle_dissection",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
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
      "name": "liver",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate is not sufficiently exposed along the inferior gallbladder margin (C3 not achieved).",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       78,
       452,
       424
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       349,
       442,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       287,
       88,
       787,
       443
      ],
      "confidence": 0.99
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       415,
       460,
       804,
       750
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       316,
       706,
       617,
       876
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.98,
     "hits": 66
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 65
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 63
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 41
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 66
    },
    "fat": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.98,
     "hits": 61
    },
    "blood": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.85,
     "hits": 39
    },
    "liver": {
     "first": 1.0,
     "last": 68.0,
     "best": 0.99,
     "hits": 62
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the thicker cystic duct below and the thinner cystic artery above) are clearly seen entering the gallbladder neck. C2: The space between the duct and artery and above the artery is well dissected, showing clear separations, though the background liver through the lower window is slightly shadowed. C3: The cystic plate is partially exposed above the artery, but the inferior margin of the gallbladder is not fully mobilized off the liver bed.",
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
      "confidence": 0.92
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "cystic_plate",
      "confidence": 0.65
     },
     {
      "name": "liver",
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
       304,
       409,
       959
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       77,
       477,
       401
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       308,
       90,
       726,
       408
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       426,
       415,
       715,
       756
      ],
      "confidence": 0.89
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       380,
       683,
       575,
       866
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.98,
     "hits": 67
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 66
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 64
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.9,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 67
    },
    "fat": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.98,
     "hits": 62
    },
    "blood": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.85,
     "hits": 40
    },
    "liver": {
     "first": 1.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 63
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 69.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.72,
     "c2": 0.44,
     "c3": 0.14
    },
    "cvs_evidence": "C1: Two tubular structures (the larger cystic duct below and thinner cystic artery above) are dissected out and seen running toward the gallbladder neck. C2: There is partial dissection between the duct and artery and above the artery, but clear full-thickness windows showing background liver across both spaces are not fully established and the clip applier partially obscures the space. C3: The inferior margin of the gallbladder remains largely attached to the liver bed without full exposure of the cystic plate.",
    "phase": "clipping_and_cutting",
    "visible_structures": [
     {
      "name": "gallbladder",
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
      "name": "blood",
      "confidence": 0.65
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
      "label": "gallbladder",
      "box_2d": [
       0,
       264,
       431,
       869
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       77,
       524,
       360
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       452,
       385,
       754,
       712
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       386,
       639,
       605,
       834
      ],
      "confidence": 0.82
     },
     {
      "label": "grasper",
      "box_2d": [
       341,
       89,
       727,
       370
      ],
      "confidence": 0.96
     },
     {
      "label": "clipper",
      "box_2d": [
       550,
       700,
       999,
       971
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 68
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 67
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 65
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.9,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 68
    },
    "fat": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 63
    },
    "blood": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.85,
     "hits": 40
    },
    "liver": {
     "first": 1.0,
     "last": 70.0,
     "best": 0.99,
     "hits": 64
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 69.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "Two distinct tubular structures, the thicker cystic duct inferiorly and thinner cystic artery superiorly, are seen running towards the gallbladder. The hepatocystic triangle still contains dark tissue between and behind the structures without clear full-thickness windows showing the background. The lower part of the gallbladder is not mobilized off the liver bed to expose the cystic plate.",
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
      "name": "liver",
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
    "reason_if_not": "The hepatocystic triangle is not fully cleared to create full-thickness windows and the cystic plate is not exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       287,
       495,
       856
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       76,
       555,
       372
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       813,
       561,
       999
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       490,
       407,
       804,
       711
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       440,
       642,
       671,
       823
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       386,
       100,
       802,
       381
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       804,
       712,
       1000,
       903
      ],
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.98,
     "hits": 69
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 68
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 66
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.9,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 69
    },
    "fat": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.98,
     "hits": 64
    },
    "blood": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.85,
     "hits": 40
    },
    "liver": {
     "first": 1.0,
     "last": 71.0,
     "best": 0.99,
     "hits": 65
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 69.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
    "cvs_evidence": "C1: Only one thick, partially dissected tubular structure (likely the cystic duct) is visible, without a second distinct tubular structure clearly separated. C2: The hepatocystic triangle is still filled with fat and connective tissue, with no full-thickness windows cleared. C3: The inferior margin of the gallbladder remains attached to the surrounding tissue and liver bed, so the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "cystic_duct",
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
      "name": "liver",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; only one tubular structure is exposed and no windows or cystic plate are visible.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       160,
       396,
       752
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       730,
       372,
       1000
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       416,
       276,
       768,
       646
      ],
      "confidence": 0.87
     },
     {
      "label": "grasper",
      "box_2d": [
       287,
       74,
       575,
       278
      ],
      "confidence": 0.96
     },
     {
      "label": "scissors",
      "box_2d": [
       108,
       538,
       831,
       999
      ],
      "confidence": 0.86
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.98,
     "hits": 70
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 69
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 66
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.9,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 70
    },
    "fat": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.98,
     "hits": 65
    },
    "blood": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.85,
     "hits": 41
    },
    "liver": {
     "first": 1.0,
     "last": 72.0,
     "best": 0.99,
     "hits": 65
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 69.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.75,
     "c3": 0.35
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are clearly seen entering the gallbladder. A window is cleared between the cystic duct and cystic artery, and the grasper is passing into the space above the artery. The dissection of the lower part of the gallbladder from the cystic plate is only partially visible above the artery.",
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
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "liver",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
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
       730,
       527,
       999
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       80,
       417,
       814
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       447,
       230,
       832,
       690
      ],
      "confidence": 0.88
     },
     {
      "label": "scissors",
      "box_2d": [
       378,
       696,
       846,
       999
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       297,
       73,
       549,
       219
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.98,
     "hits": 71
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 70
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 67
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.9,
     "hits": 43
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 71
    },
    "fat": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.98,
     "hits": 66
    },
    "blood": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.85,
     "hits": 42
    },
    "liver": {
     "first": 1.0,
     "last": 73.0,
     "best": 0.99,
     "hits": 66
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 73.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures, the thicker cystic duct inferiorly and thinner cystic artery superiorly, are visible entering the gallbladder. C2: There is a window between the duct and artery and superior to the artery where the clip applier is positioned, though the deep tissue in the triangle is not completely cleared for a full-thickness view. C3: The lower gallbladder is not dissected off the liver bed to expose the cystic plate along the inferior margin.",
    "phase": "clipping_and_cutting",
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
      "name": "liver",
      "confidence": 0.85
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
     "clipper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate is not sufficiently exposed and the hepatocystic triangle windows are not completely full-thickness.",
    "boxes": [
     {
      "box_2d": [
       0,
       699,
       666,
       1000
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       77,
       452,
       757
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       387,
       638,
       922,
       995
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       543,
       154,
       986,
       727
      ],
      "label": "cystic_duct",
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.98,
     "hits": 72
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 71
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 68
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.9,
     "hits": 43
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 72
    },
    "fat": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.98,
     "hits": 67
    },
    "blood": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.85,
     "hits": 42
    },
    "liver": {
     "first": 1.0,
     "last": 74.0,
     "best": 0.99,
     "hits": 67
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 73.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.45,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct below and thinner cystic artery above, held by the clipper) are clearly visible entering the gallbladder. C2: There is a dissected window between the cystic duct and cystic artery, and a gap above the artery, though deep tissue still partially obscures a completely unimpeded view of the background through both windows. C3: The lower gallbladder is not clearly separated from the liver bed to expose the cystic plate along the entire inferior margin.",
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
      "name": "hepatocystic_window",
      "confidence": 0.8
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
      "name": "blood",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "clipper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate is not sufficiently exposed along the lower gallbladder margin and the hepatocystic windows are not fully cleared to confirm the full Critical View of Safety prior to clipping.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       75,
       477,
       750
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       715,
       617,
       1000
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       542,
       653,
       998,
       947
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       438,
       532,
       680,
       749
      ],
      "confidence": 0.72
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       554,
       115,
       884,
       642
      ],
      "confidence": 0.74
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       174,
       538,
       431,
       700
      ],
      "confidence": 0.54
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.98,
     "hits": 73
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 72
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 69
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 44
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 73
    },
    "fat": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.98,
     "hits": 68
    },
    "blood": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 42
    },
    "liver": {
     "first": 1.0,
     "last": 75.0,
     "best": 0.99,
     "hits": 68
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 73.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.4
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery held by the grasper above) are clearly visible entering the gallbladder. Full-thickness windows are visible between the duct and artery and above the artery where the grasper jaws pass through. The lower gallbladder is only partially mobilized from the liver bed, with peritoneal attachment still intact superiorly.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.95
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
      "name": "blood",
      "confidence": 0.7
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
       73,
       424,
       707
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       679,
       792,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       435,
       77,
       922,
       603
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       390,
       502,
       558,
       697
      ],
      "confidence": 0.85
     },
     {
      "label": "clipper",
      "box_2d": [
       381,
       604,
       986,
       971
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.98,
     "hits": 74
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 73
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 70
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.9,
     "hits": 45
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 74
    },
    "fat": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.98,
     "hits": 69
    },
    "blood": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 43
    },
    "liver": {
     "first": 1.0,
     "last": 76.0,
     "best": 0.99,
     "hits": 69
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct below and the thinner cystic artery above, held by the clip applier) are clearly seen entering the gallbladder. C2: There is a clear dissection plane between the cystic duct and cystic artery, and the clip applier is positioned around the artery, though a full-thickness window behind the artery to the cystic plate is not fully opened. C3: The lower part of the gallbladder remains attached to the liver bed with no significant exposure of the cystic plate.",
    "phase": "clipping_and_cutting",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.7
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
     "clipper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower third of the gallbladder is not yet mobilized off the cystic plate (C3 not achieved), and the window above the cystic artery is only partially opened.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       638,
       798,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       77,
       457,
       688
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       566,
       108,
       946,
       561
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       409,
       506,
       520,
       679
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       365,
       591,
       988,
       976
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       232,
       499,
       442,
       642
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       512,
       449,
       743,
       627
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.98,
     "hits": 75
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 74
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 71
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.9,
     "hits": 46
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 75
    },
    "fat": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.98,
     "hits": 70
    },
    "blood": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.85,
     "hits": 44
    },
    "liver": {
     "first": 1.0,
     "last": 77.0,
     "best": 0.99,
     "hits": 70
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.5,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct below and thinner cystic artery above, held by the grasper) are seen running horizontally from the gallbladder neck on the left. C2: A large window is cleared between the cystic duct and cystic artery, and the grasper is isolating the artery superiorly, though a full window above the artery to the cystic plate is only partially open. C3: The gallbladder remains largely attached to the liver bed superiorly, so the cystic plate is not exposed behind the lower third of the gallbladder.",
    "phase": "calot_triangle_dissection",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet dissected off the cystic plate (C3 not achieved), and dissection superior to the cystic artery is incomplete.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       626,
       676,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       80,
       426,
       678
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       515,
       96,
       855,
       562
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       342,
       484,
       431,
       681
      ],
      "confidence": 0.85
     },
     {
      "label": "clipper",
      "box_2d": [
       267,
       608,
       880,
       990
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       468,
       467,
       695,
       666
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 76
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 75
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 72
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.9,
     "hits": 47
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 76
    },
    "fat": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 71
    },
    "blood": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.85,
     "hits": 45
    },
    "liver": {
     "first": 1.0,
     "last": 78.0,
     "best": 0.99,
     "hits": 71
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above held near the grasper) are visibly entering the gallbladder. C2: A large window is dissected between the cystic duct and cystic artery, and the grasper is isolating the artery from the upper tissue/plate. C3: The lower gallbladder is not extensively mobilized off the liver bed to expose the full cystic plate.",
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
      "confidence": 0.8
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate criterion (C3) is not clearly achieved as the lower third of the gallbladder remains attached to the liver bed.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       307,
       605,
       924,
       980
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       556,
       114,
       888,
       584
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       378,
       526,
       467,
       668
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       463,
       448,
       722,
       656
      ],
      "confidence": 0.75
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       629,
       747,
       1000
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       75,
       470,
       681
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.98,
     "hits": 77
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 76
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 73
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.9,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 77
    },
    "fat": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.98,
     "hits": 72
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 46
    },
    "liver": {
     "first": 1.0,
     "last": 79.0,
     "best": 0.99,
     "hits": 72
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.65,
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above held by the grasper) are distinguishable entering the gallbladder. C2: There is a deep dissected space between the two structures, though a complete full-thickness window above the artery is still being developed by the grasper. C3: The lower gallbladder is not clearly separated from the liver bed to expose the cystic plate.",
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
      "confidence": 0.8
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate is not mobilized and the upper window above the cystic artery is not completely cleared.",
    "boxes": [
     {
      "box_2d": [
       0,
       633,
       836,
       1000
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       77,
       517,
       674
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       361,
       608,
       977,
       959
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
     "last": 80.0,
     "best": 0.98,
     "hits": 78
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 77
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 74
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.9,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 78
    },
    "fat": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.98,
     "hits": 73
    },
    "blood": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.85,
     "hits": 47
    },
    "liver": {
     "first": 1.0,
     "last": 80.0,
     "best": 0.99,
     "hits": 73
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.65,
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (a lower wider structure likely the cystic duct and an upper thinner structure likely the cystic artery) are visible entering the gallbladder neck. C2: A grasper is being passed behind the upper structure (cystic artery), creating a window, though the lower window between the two structures is still somewhat obscured by connective tissue and blood. C3: The lower third of the gallbladder is not yet separated from the liver bed to clearly expose the cystic plate.",
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
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate is not sufficiently exposed and the hepatocystic triangle requires further clearing to fully confirm the Critical View of Safety.",
    "boxes": [
     {
      "box_2d": [
       0,
       614,
       896,
       1000
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       74,
       516,
       648
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       380,
       581,
       994,
       935
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       447,
       499,
       521,
       650
      ],
      "label": "cystic_artery",
      "confidence": 0.69
     },
     {
      "box_2d": [
       554,
       126,
       959,
       547
      ],
      "label": "cystic_duct",
      "confidence": 0.68
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.98,
     "hits": 79
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 78
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 75
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 79
    },
    "fat": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.98,
     "hits": 74
    },
    "blood": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 48
    },
    "liver": {
     "first": 1.0,
     "last": 81.0,
     "best": 0.99,
     "hits": 74
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.45,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct is visible below and the cystic artery is being dissected by the hook above, though the artery is not yet clearly isolated as a distinct tubular structure entering the gallbladder. C2: There is a dissected space between the duct and the artery, but no clear full-thickness windows through to the background are visible. C3: The gallbladder remains largely attached to the liver bed with the peritoneal reflection only beginning to be incised by the hook.",
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
      "confidence": 0.85
     },
     {
      "name": "cystic_artery",
      "confidence": 0.7
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle dissection is incomplete, lacking full-thickness windows and separation of the lower gallbladder from the cystic plate.",
    "boxes": [
     {
      "box_2d": [
       0,
       75,
       517,
       695
      ],
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       621,
       893,
       1000
      ],
      "label": "liver"
     },
     {
      "box_2d": [
       432,
       588,
       996,
       935
      ],
      "label": "hook"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.98,
     "hits": 80
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 79
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 76
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 80
    },
    "fat": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.98,
     "hits": 75
    },
    "blood": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.85,
     "hits": 48
    },
    "liver": {
     "first": 1.0,
     "last": 82.0,
     "best": 0.99,
     "hits": 75
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.65,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are visible running toward the gallbladder, though the artery is still attached to the background tissue. C2: There are no full-thickness windows cleared through the hepatocystic triangle, as dense connective tissue still bridges the spaces behind the duct and artery. C3: The lower part of the gallbladder has not been elevated off the liver bed to expose the cystic plate.",
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
      "name": "cystic_duct",
      "confidence": 0.85
     },
     {
      "name": "cystic_artery",
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
      "confidence": 0.5
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and cystic plate prevents full confirmation of the Critical View of Safety.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       647,
       889,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       74,
       536,
       688
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       728,
       609,
       1000,
       841
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       643,
       154,
       992,
       602
      ],
      "confidence": 0.77
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       496,
       497,
       723,
       668
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.98,
     "hits": 81
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 80
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 77
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 81
    },
    "fat": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.98,
     "hits": 76
    },
    "blood": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.85,
     "hits": 48
    },
    "liver": {
     "first": 1.0,
     "last": 83.0,
     "best": 0.99,
     "hits": 76
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.9,
     "c2": 0.25,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct below and thinner cystic artery above, being approached by the clip applier) are visible running toward the gallbladder. C2: While there is dissection between the duct and artery and above the artery, full-thickness windows through to the background liver bed are not clearly established. C3: The lower gallbladder remains largely attached to the peritoneum/liver bed, and a hanging gallbladder with an exposed cystic plate is not yet seen.",
    "phase": "clipping_and_cutting",
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
      "confidence": 0.95
     },
     {
      "name": "liver",
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
     "clipper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not fully cleared to show full-thickness windows, and the lower gallbladder is not dissected off the cystic plate.",
    "boxes": [
     {
      "box_2d": [
       0,
       77,
       582,
       737
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       652,
       875,
       1000
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       623,
       595,
       1000,
       868
      ],
      "label": "grasper",
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.98,
     "hits": 82
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 81
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 78
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 82
    },
    "fat": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.98,
     "hits": 77
    },
    "blood": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.85,
     "hits": 48
    },
    "liver": {
     "first": 1.0,
     "last": 84.0,
     "best": 0.99,
     "hits": 77
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.15,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A thick lower tubular structure (likely cystic duct) and a thinner upper structure being held by the grasper (likely cystic artery) are partially visible, but they are not clearly dissected to their entry into the gallbladder. C2: There are no clear full-thickness windows through the hepatocystic triangle, as fat and connective tissue still fill the space between the structures and the background. C3: The gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "confidence": 0.8
     },
     {
      "name": "cystic_artery",
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and cystic plate prevents full confirmation of the critical view of safety.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       75,
       575,
       712
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       658,
       902,
       998
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       516,
       587,
       1000,
       904
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       549,
       521,
       671,
       657
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 83
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 82
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 79
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 83
    },
    "fat": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 78
    },
    "blood": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 48
    },
    "liver": {
     "first": 1.0,
     "last": 85.0,
     "best": 0.99,
     "hits": 78
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.72,
     "c2": 0.45,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper cystic artery being grasped) are visible coursing toward the gallbladder. C2: A dissected space is present between the two structures and the grasper is isolating the upper structure, though a completely clear second window above the artery to the cystic plate is only partially created. C3: The peritoneum above the artery remains largely intact and the lower gallbladder is not clearly separated from the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.85
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
      "name": "cystic_artery",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.7
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle dissection is incomplete above the cystic artery and the cystic plate is not sufficiently exposed.",
    "boxes": [
     {
      "box_2d": [
       0,
       75,
       574,
       658
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       628,
       966,
       1000
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       435,
       544,
       1000,
       914
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
     "last": 86.0,
     "best": 0.98,
     "hits": 84
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 83
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 80
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 84
    },
    "fat": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.98,
     "hits": 79
    },
    "blood": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.85,
     "hits": 48
    },
    "liver": {
     "first": 1.0,
     "last": 86.0,
     "best": 0.99,
     "hits": 79
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (or tissue band being grasped) is partially visible, and two distinct tubular structures entering the gallbladder cannot be identified. C2: The hepatocystic triangle is still covered in fat and connective tissue without two full-thickness windows. C3: The lower gallbladder is not clearly elevated off the liver bed to expose the entire inferior margin of the cystic plate.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is incomplete; the cystic duct and artery are not yet clearly isolated and identified.",
    "boxes": [
     {
      "box_2d": [
       0,
       74,
       764,
       612
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       589,
       972,
       999
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       415,
       529,
       1000,
       888
      ],
      "label": "grasper",
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.98,
     "hits": 85
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 83
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 80
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 85
    },
    "fat": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.98,
     "hits": 80
    },
    "blood": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.85,
     "hits": 49
    },
    "liver": {
     "first": 1.0,
     "last": 87.0,
     "best": 0.99,
     "hits": 80
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the peritoneal reflection is being scored; neither the cystic duct nor the cystic artery is dissected into a distinct tubular structure. C2: The hepatocystic triangle remains covered in fat and connective tissue with no full-thickness windows created yet. C3: The lower third of the gallbladder is still attached to the liver bed, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; neither the cystic duct nor the cystic artery has been isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       77,
       663,
       604
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       571,
       983,
       1000
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       403,
       521,
       999,
       897
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       496,
       439,
       581,
       583
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.98,
     "hits": 86
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 83
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 80
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 86
    },
    "fat": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.98,
     "hits": 81
    },
    "blood": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.85,
     "hits": 50
    },
    "liver": {
     "first": 1.0,
     "last": 88.0,
     "best": 0.99,
     "hits": 81
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 0.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic artery or duct) is partially isolated by the grasper; two distinct tubular structures entering the gallbladder are not visible. C2: The hepatocystic triangle is still mostly covered by peritoneum and fat, with no clear full-thickness windows established. C3: The gallbladder remains largely attached to the liver bed with the peritoneum intact, so the cystic plate is not exposed.",
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
      "name": "cystic_artery",
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not both clearly isolated and the cystic plate is not exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       584,
       986,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       71,
       996,
       609
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       459,
       532,
       1000,
       891
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 87
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 83
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 80
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 87
    },
    "fat": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 82
    },
    "blood": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.85,
     "hits": 51
    },
    "liver": {
     "first": 1.0,
     "last": 89.0,
     "best": 0.99,
     "hits": 82
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
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
   "t": 90.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a small, partially dissected tubular structure is being grasped, and two clear tubular structures connected to the gallbladder are not visible. C2: The hepatocystic triangle is still covered in fat and connective tissue without full-thickness windows. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; the cystic duct and artery are not yet isolated or clearly identifiable.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       77,
       707,
       654
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       618,
       986,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       676,
       564,
       1000,
       792
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.98,
     "hits": 88
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 83
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 80
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 88
    },
    "fat": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.98,
     "hits": 83
    },
    "blood": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.85,
     "hits": 52
    },
    "liver": {
     "first": 1.0,
     "last": 90.0,
     "best": 0.99,
     "hits": 83
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the peritoneum is being incised and neither the cystic duct nor the cystic artery are skeletonized as distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows cleared. C3: The gallbladder remains largely attached to the liver bed with only a very superficial peritoneum opening and no exposed cystic plate along the inferior margin.",
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
    "reason_if_not": "Dissection is in an early stage and critical biliary/vascular structures are still buried in fat and peritoneum.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       75,
       808,
       654
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       617,
       1000,
       1000
      ],
      "confidence": 0.99
     },
     {
      "label": "grasper",
      "box_2d": [
       654,
       560,
       1000,
       825
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.98,
     "hits": 89
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 83
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 80
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 89
    },
    "fat": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.98,
     "hits": 84
    },
    "blood": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.85,
     "hits": 52
    },
    "liver": {
     "first": 1.0,
     "last": 91.0,
     "best": 0.99,
     "hits": 84
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder; the triangle is still covered by intact peritoneum and fat. C2: The hepatocystic triangle is completely covered by fat and connective tissue with no dissected windows. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; peritoneum and fat completely obscure the cystic duct, cystic artery, and cystic plate.",
    "boxes": [
     {
      "box_2d": [
       0,
       638,
       988,
       997
      ],
      "label": "liver",
      "confidence": 0.99
     },
     {
      "box_2d": [
       0,
       78,
       858,
       676
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       508,
       544,
       999,
       882
      ],
      "label": "grasper",
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.98,
     "hits": 90
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 83
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 80
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 90
    },
    "fat": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.98,
     "hits": 85
    },
    "blood": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.85,
     "hits": 53
    },
    "liver": {
     "first": 1.0,
     "last": 92.0,
     "best": 0.99,
     "hits": 85
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
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
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are dissected out yet. C2: The hepatocystic triangle is still completely covered by peritoneum and fat, with no dissected windows. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Initial stages of dissection; the cystic duct, cystic artery, and cystic plate are still completely covered by peritoneum and adipose tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       75,
       686,
       672
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       637,
       981,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       504,
       540,
       998,
       871
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.98,
     "hits": 91
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 83
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 80
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.98,
     "hits": 86
    },
    "blood": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.85,
     "hits": 53
    },
    "liver": {
     "first": 1.0,
     "last": 93.0,
     "best": 0.99,
     "hits": 86
    },
    "cystic_plate": {
     "first": 6.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 8
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
  }
 ],
 "truth": [
  {
   "t": 4,
   "C1": 0.6666666666666666,
   "C2": 0.3333333333333333,
   "C3": 0.3333333333333333
  },
  {
   "t": 9,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.0
  },
  {
   "t": 14,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.0
  },
  {
   "t": 19,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.0
  },
  {
   "t": 24,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.0
  },
  {
   "t": 29,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.0
  },
  {
   "t": 34,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.0
  },
  {
   "t": 39,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
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
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.0
  },
  {
   "t": 54,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.0
  },
  {
   "t": 59,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.0
  },
  {
   "t": 64,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.0
  },
  {
   "t": 69,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.0
  },
  {
   "t": 74,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.0
  },
  {
   "t": 79,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.3333333333333333
  },
  {
   "t": 84,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
  },
  {
   "t": 89,
   "C1": 0.3333333333333333,
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
  }
 ],
 "agreement": {
  "keyframes": 18,
  "C1": 1.0,
  "C1_caught": [
   16,
   16
  ],
  "C2": 0.2222222222222222,
  "C2_caught": [
   3,
   16
  ],
  "C3": 1.0,
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
