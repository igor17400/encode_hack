window.TIMELINE = {
 "video": "videos/endo192.mp4",
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
    "cvs_evidence": "C1: Dissection is at an early stage and two distinct tubular structures entering the gallbladder are not yet isolated. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: The lower portion of the gallbladder has not been separated from the liver bed to expose the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not yet dissected to reveal the cystic duct, cystic artery, or cystic plate.",
    "boxes": [
     {
      "box_2d": [
       14,
       240,
       712,
       605
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       158,
       854,
       837
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       483,
       153,
       586,
       305
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       566,
       357,
       996,
       441
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
     "last": 0.0,
     "best": 0.99,
     "hits": 1
    },
    "liver": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.99,
     "hits": 1
    },
    "fat": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.95,
     "hits": 1
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.95,
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a small initial opening is made in the tissue near the neck, and two distinct tubular structures are not yet dissected out. C2: There is one small window starting to form, not a cleared hepatocystic triangle with two full-thickness windows. C3: The gallbladder remains completely attached to the liver bed along its whole length, with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; cystic duct and artery are still encased in fat and peritoneum.",
    "boxes": [
     {
      "box_2d": [
       16,
       211,
       794,
       592
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       159,
       996,
       843
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       496,
       154,
       598,
       273
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       751,
       424,
       1000,
       496
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       617,
       380,
       712,
       437
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
    "fat": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.95,
     "hits": 2
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.95,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 1.0,
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
   "t": 2.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered by peritoneum and fat, so two distinct tubular structures are not yet isolated. C2: The hook is just beginning to open the peritoneum and create a small window, with most of the triangle still uncleared. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; the cystic duct and artery are not yet isolated from surrounding connective tissue and fat.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       158,
       836,
       836
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       219,
       994,
       658
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       480,
       154,
       582,
       282
      ],
      "confidence": 0.99
     },
     {
      "label": "hook",
      "box_2d": [
       655,
       382,
       999,
       470
      ],
      "confidence": 0.99
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
    "fat": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.95,
     "hits": 3
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.95,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 2.0,
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
   "t": 3.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) have been dissected out yet. C2: The hepatocystic triangle is completely covered by intact peritoneum and fat, with no windows created. C3: The gallbladder remains fully attached to the liver bed with the hook just starting to score the peritoneum.",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection has just begun; the peritoneum and fat still completely cover the hepatocystic triangle structures.",
    "boxes": [
     {
      "box_2d": [
       485,
       153,
       583,
       287
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       469,
       386,
       996,
       519
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       223,
       1000,
       672
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       159,
       1000,
       842
      ],
      "label": "liver",
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
    "fat": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.95,
     "hits": 4
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.95,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 2.0,
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one window is beginning to form and two distinct tubular structures entering the gallbladder are not yet clearly skeletonized. C2: The hepatocystic triangle still contains significant fat and connective tissue, with only one small window being created by the hook. C3: The gallbladder remains largely attached to the liver bed with the cystic plate not yet exposed along the inferior margin.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet isolated or exposed.",
    "boxes": [
     {
      "box_2d": [
       0,
       226,
       689,
       593
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       486,
       786,
       829
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       477,
       155,
       575,
       283
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       609,
       409,
       1000,
       493
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       596,
       384,
       673,
       422
      ],
      "label": "hepatocystic_window",
      "confidence": 0.78
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
    "fat": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.95,
     "hits": 5
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.95,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 4.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 4.0,
     "best": 0.65,
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
     "c3": 0.05
    },
    "cvs_evidence": "C1: One small window creates two strands below the neck, but the structures are still heavily encased in fat and connective tissue and not clearly isolated as two distinct tubular structures. C2: Only a small initial window is being created by the hook; the hepatocystic triangle remains largely filled with fat and connective tissue. C3: The gallbladder remains fully attached to the liver bed with no dissection of the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.6
     },
     {
      "name": "cystic_duct",
      "confidence": 0.4
     },
     {
      "name": "cystic_artery",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage with only a small window created; the cystic duct, artery, and cystic plate are not yet adequately cleared.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       234,
       738,
       595
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       157,
       995,
       837
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       611,
       408,
       1000,
       493
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       483,
       155,
       590,
       291
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       599,
       391,
       675,
       417
      ],
      "confidence": 0.53
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
    "fat": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.95,
     "hits": 6
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.95,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 5.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 5.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 5.0,
     "best": 0.4,
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
   "t": 6.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and artery are not yet distinctly skeletonized into two clear tubular structures entering the gallbladder. C2: A small initial fenestration is visible near the hook, but the hepatocystic triangle is still mostly covered by connective tissue and fat without two clear full-thickness windows. C3: The gallbladder remains largely attached to the liver bed, so the cystic plate is not exposed along the entire inferior margin.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages; the cystic duct and cystic artery are still encased in fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       246,
       570,
       606
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       161,
       984,
       839
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       479,
       154,
       590,
       308
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       599,
       443,
       998,
       544
      ],
      "confidence": 0.92
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
    "fat": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.95,
     "hits": 7
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.95,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 6.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 5.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 5.0,
     "best": 0.4,
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
   "t": 7.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or cystic artery) are clearly dissected or distinguishable entering the gallbladder yet. C2: The hepatocystic triangle is still covered by peritoneum, fat, and connective tissue, with the electrocautery hook just beginning dissection and no full-thickness windows visible. C3: The gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle has not been dissected yet; the cystic duct and cystic artery are still obscured by overlying peritoneum and fatty connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       160,
       995,
       838
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       7,
       248,
       994,
       676
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       493,
       155,
       602,
       311
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       658,
       405,
       1000,
       479
      ],
      "confidence": 0.95
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
    "fat": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.95,
     "hits": 8
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.95,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 6.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 5.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 5.0,
     "best": 0.4,
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
   "t": 8.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are delineated yet as dissection of the peritoneum is just starting. C2: The hepatocystic triangle remains completely filled with fat and connective tissue with no windows created. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Early stage of dissection; cystic duct and artery remain buried within undissected fat and peritoneal tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       12,
       157,
       984,
       842
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       7,
       236,
       792,
       607
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       486,
       153,
       592,
       299
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       603,
       372,
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
    "fat": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.95,
     "hits": 9
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.95,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 6.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 5.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 5.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 8.0,
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
   "t": 9.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a partial window is dissected with one structure beginning to emerge, so two distinct tubular structures connected to the gallbladder are not yet clearly defined. C2: There is only a single small opening in the hepatocystic triangle with significant surrounding connective tissue remaining, so full-thickness clearance is not achieved. C3: The lower part of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "name": "cystic_duct",
      "confidence": 0.6
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; only one small window is created and the cystic duct, cystic artery, and cystic plate are not yet isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       14,
       230,
       999,
       685
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       161,
       995,
       840
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       496,
       155,
       591,
       290
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       734,
       370,
       999,
       453
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       611,
       384,
       694,
       437
      ],
      "confidence": 0.77
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
    "fat": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 10
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 9.0,
     "best": 0.8,
     "hits": 2
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 9.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 5.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 9.0,
     "best": 0.85,
     "hits": 2
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
   "t": 10.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a small initial window is created and two distinct tubular structures are not yet clearly isolated entering the gallbladder. C2: A single small full-thickness window is visible near the hook, but the rest of the hepatocystic triangle remains covered in fat and connective tissue. C3: The gallbladder remains completely attached to the liver bed with no detachment of the lower third to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages; only one small window has been created and the cystic duct, cystic artery, and cystic plate are not yet isolated.",
    "boxes": [
     {
      "box_2d": [
       708,
       360,
       996,
       420
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       500,
       156,
       595,
       280
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       8,
       219,
       993,
       677
      ],
      "label": "gallbladder",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       158,
       992,
       843
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       619,
       381,
       686,
       431
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
    "fat": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 11
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 10.0,
     "best": 0.8,
     "hits": 3
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 9.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 5.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 10.0,
     "best": 0.85,
     "hits": 3
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
   "t": 11.0,
   "label": {
    "cvs": {
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are dissected out yet. C2: The hepatocystic triangle is completely covered by intact peritoneum and fat, with no windows created. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the peritoneum is still intact and the cystic duct and artery are not yet exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       14,
       224,
       757,
       597
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       160,
       991,
       840
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       504,
       155,
       604,
       290
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       680,
       387,
       996,
       456
      ],
      "confidence": 0.97
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
    "fat": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.95,
     "hits": 12
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.95,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 10.0,
     "best": 0.8,
     "hits": 3
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 9.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 5.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 11.0,
     "best": 0.85,
     "hits": 4
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
   "t": 12.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly discernible as two separate tubular structures entering the gallbladder. C2: The hepatocystic triangle is still largely covered in connective tissue and peritoneum, with only a tiny initial opening and no full-thickness windows established. C3: The lower part of the gallbladder remains completely attached to the liver bed, and the hook is only beginning to score the peritoneal attachment.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; tubular structures and the cystic plate are still concealed by peritoneum and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       237,
       683,
       601
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       156,
       998,
       843
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       473,
       153,
       584,
       298
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       531,
       444,
       998,
       554
      ],
      "confidence": 0.94
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
    "fat": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 13
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 10.0,
     "best": 0.8,
     "hits": 3
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 9.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 5.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 11.0,
     "best": 0.85,
     "hits": 4
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
   "t": 13.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A possible cystic duct and artery are starting to emerge, but they remain largely covered in fat and connective tissue and are not clearly isolated as two distinct tubular structures entering the gallbladder. C2: There is a small gap between the anterior tissue band and the bulkier medial tissue, not a cleared hepatocystic triangle with full-thickness windows between duct, artery, and cystic plate. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate visible behind the inferior margin.",
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
      "name": "cystic_duct",
      "confidence": 0.45
     },
     {
      "name": "cystic_artery",
      "confidence": 0.35
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; critical structures are still obscured by peritoneum and fat.",
    "boxes": [
     {
      "box_2d": [
       0,
       239,
       725,
       591
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       155,
       995,
       842
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       507,
       457,
       1000,
       585
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       473,
       154,
       584,
       292
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
    "fat": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 14
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 10.0,
     "best": 0.8,
     "hits": 3
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 13.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 13.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 11.0,
     "best": 0.85,
     "hits": 4
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
   "t": 14.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular-like bands are visible below the small window, though the posterior one is not yet clearly isolated as a distinct tubular structure. C2: One small full-thickness window is visible between the two potential structures, but there is no second window between the upper structure and the cystic plate. C3: The gallbladder remains largely attached to the liver bed with no exposed cystic plate along its inferior margin.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with only one small window formed and the gallbladder still attached to the liver bed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       162,
       985,
       839
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       222,
       642,
       574
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       480,
       153,
       571,
       277
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       587,
       375,
       669,
       423
      ],
      "confidence": 0.53
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
    "fat": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 15
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 14.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 14.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 14.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 14.0,
     "best": 0.85,
     "hits": 5
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
   "t": 15.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.25,
     "c3": 0.1
    },
    "cvs_evidence": "C1: A small window is created creating two strands entering the gallbladder, though the medial structure is still quite thick and covered by connective tissue. C2: There is one small window between the two structures, but no second window between the medial structure and the cystic plate. C3: The inferior margin of the gallbladder remains completely attached to the liver bed with no cystic plate exposure.",
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
      "confidence": 0.85
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
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic plate is not exposed and there is no window medial to the second tubular structure.",
    "boxes": [
     {
      "box_2d": [
       0,
       207,
       725,
       592
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       157,
       995,
       840
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       489,
       154,
       583,
       270
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       636,
       417,
       999,
       491
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       599,
       367,
       683,
       412
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
    "fat": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 16
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 15.0,
     "best": 0.85,
     "hits": 5
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 15.0,
     "best": 0.85,
     "hits": 2
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 15.0,
     "best": 0.75,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 15.0,
     "best": 0.85,
     "hits": 6
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
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct is visible below a small fenestration, but the second structure (cystic artery) is still obscured by connective tissue and the hook instrument. C2: There is one small full-thickness window between the cystic duct and the upper tissue, but the upper part of the hepatocystic triangle is not yet cleared to form a second window. C3: The lower third of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
      "confidence": 0.8
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "incomplete dissection of the hepatocystic triangle and cystic plate",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       228,
       995,
       606
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       156,
       995,
       837
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       478,
       155,
       574,
       286
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       496,
       440,
       998,
       573
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       569,
       386,
       647,
       429
      ],
      "confidence": 0.75
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
    "fat": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 17
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 16.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 16.0,
     "best": 0.85,
     "hits": 3
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 15.0,
     "best": 0.75,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 15.0,
     "best": 0.85,
     "hits": 6
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet clearly skeletonized or separated from surrounding tissue. C2: A small initial opening is visible in the connective tissue, but full-thickness hepatocystic windows clearing the triangle of fat and tissue are not achieved. C3: The lower part of the gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.3
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages; the cystic duct, cystic artery, and cystic plate are still covered by peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       239,
       617,
       594
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       156,
       856,
       836
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       453,
       154,
       549,
       290
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       544,
       467,
       1000,
       598
      ],
      "confidence": 0.95
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
    "fat": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 18
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 17.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 16.0,
     "best": 0.85,
     "hits": 3
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 15.0,
     "best": 0.75,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 15.0,
     "best": 0.85,
     "hits": 6
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is in the early stages and two distinct tubular structures are not yet isolated or clearly visible entering the gallbladder. C2: The hepatocystic triangle is still covered in peritoneum, fat, and connective tissue with no full-thickness windows cleared. C3: The gallbladder remains completely attached to the liver bed with the cystic plate unexposed.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle has not been dissected enough to expose the cystic duct, cystic artery, or cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       159,
       995,
       841
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       249,
       644,
       603
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       463,
       152,
       550,
       302
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       538,
       474,
       998,
       604
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
     "hits": 19
    },
    "liver": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.99,
     "hits": 19
    },
    "fat": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 17.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 16.0,
     "best": 0.85,
     "hits": 3
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 15.0,
     "best": 0.75,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 15.0,
     "best": 0.85,
     "hits": 6
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
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two partial tubular structures (cystic duct and artery) are beginning to be defined entering the gallbladder, though still surrounded by some fibrous bands. C2: Small full-thickness fenestrations/windows are visible between the structures, but the hepatocystic triangle is not yet fully cleared of connective tissue. C3: The lower third of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with remaining connective tissue bands and no separation of the lower gallbladder from the liver bed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       220,
       641,
       596
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       75,
       163,
       853,
       836
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       474,
       154,
       560,
       279
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       580,
       371,
       644,
       414
      ],
      "confidence": 0.7
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
    "fat": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 20
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 20
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 19.0,
     "best": 0.85,
     "hits": 7
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 19.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 19.0,
     "best": 0.75,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 15.0,
     "best": 0.85,
     "hits": 6
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
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are still covered in peritoneum and fat, so two distinct tubular structures are not yet isolated. C2: The hepatocystic triangle is largely undissected with only a tiny initial opening in the peritoneum, and no full-thickness windows are present. C3: The gallbladder remains attached to the liver bed along its medial/inferior aspect, with the hook just starting to incise the peritoneum.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; tubular structures and the cystic plate are still covered by peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       10,
       222,
       792,
       606
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       159,
       992,
       841
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       486,
       154,
       574,
       276
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       540,
       408,
       997,
       496
      ],
      "confidence": 0.95
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
    "fat": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 21
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 21
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 19.0,
     "best": 0.85,
     "hits": 7
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 19.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 19.0,
     "best": 0.75,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 15.0,
     "best": 0.85,
     "hits": 6
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
     "c2": 0.9,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) are clearly visible entering the lower gallbladder. C2: Two distinct full-thickness windows have been dissected in the hepatocystic triangle, allowing a clear view of the liver behind them. C3: The lower gallbladder remains largely attached to the liver bed on the right, and a hanging gallbladder with an exposed cystic plate is not yet achieved.",
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
      "confidence": 0.88
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not sufficiently dissected off the cystic plate (C3 not met).",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       11,
       229,
       642,
       599
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       487,
       793,
       837
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       85,
       168,
       856,
       424
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       463,
       154,
       549,
       282
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       471,
       462,
       998,
       608
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       467,
       422,
       567,
       468
      ],
      "confidence": 0.85
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
    "fat": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 22
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 22
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 8
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 21.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 21.0,
     "best": 0.88,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 15.0,
     "best": 0.85,
     "hits": 6
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
     "c2": 0.8,
     "c3": 0.4
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are dissected and seen entering the gallbladder. C2: Two full-thickness windows are visible in the hepatocystic triangle with the dark liver background seen clearly through both gaps. C3: While a window is created near the cystic plate, the lower third of the gallbladder is not yet clearly mobilized off the liver bed along its entire inferior margin.",
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
       240,
       560,
       608
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       170,
       874,
       841
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       433,
       153,
       526,
       292
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       463,
       463,
       997,
       620
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       458,
       427,
       554,
       473
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
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
    "fat": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 23
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 23
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 22.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 22.0,
     "best": 0.9,
     "hits": 4
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 15.0,
     "best": 0.85,
     "hits": 6
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
   "t": 23.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.6,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct on the left and a thinner structure on the right) are emerging and connecting to the lower gallbladder, though still partially invested in connective tissue. C2: Two small windows are visible between the structures and towards the liver bed, with background liver visible through the upper opening where the hook is dissecting. C3: The lower portion of the gallbladder remains attached to the liver bed with no exposed cystic plate along the inferior margin.",
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
      "name": "abdominal_wall",
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
    "reason_if_not": "The lower part of the gallbladder is not yet separated from the cystic plate, and connective tissue still partially obscures the full course of the tubular structures.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       244,
       590,
       610
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       154,
       873,
       838
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       437,
       154,
       534,
       298
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       465,
       465,
       998,
       604
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       484,
       434,
       558,
       469
      ],
      "confidence": 0.77
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
    "fat": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 24
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 10
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 4
    },
    "abdominal_wall": {
     "first": 8.0,
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
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 21.0
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
     "since": 21.0
    },
    {
     "what": "c2",
     "on": true,
     "since": 21.0
    }
   ]
  },
  {
   "t": 24.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and artery are still embedded in peritoneum and connective tissue, not yet skeletonized as two distinct tubular structures entering the gallbladder. C2: Small fenestrations are being created in the hepatocystic triangle with the hook, showing liver behind them, but full clearance is incomplete. C3: The lower part of the gallbladder remains completely attached to the liver bed, so the cystic plate is not exposed.",
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
      "confidence": 0.85
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
      "name": "cystic_artery",
      "confidence": 0.45
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in early stages; structures are obscured by connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       89,
       156,
       844,
       838
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       248,
       599,
       617
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       441,
       154,
       537,
       307
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       499,
       467,
       997,
       603
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       504,
       442,
       574,
       477
      ],
      "confidence": 0.8
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
    "fat": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 25
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 25
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 11
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 24.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 24.0,
     "best": 0.9,
     "hits": 4
    },
    "abdominal_wall": {
     "first": 8.0,
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
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 21.0
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
     "c1": 0.5,
     "c2": 0.5,
     "c3": 0.5
    },
    "cvs_evidence": "C1: Two tubular structures are emerging from the dissected tissue toward the gallbladder, though residual connective tissue still partially obscures their full tubular outline. C2: Two small windows have been created in the hepatocystic triangle showing the liver behind, though they are quite small and surrounded by remaining fibrous tissue. C3: The upper hepatocystic window extends toward the gallbladder wall, partially exposing the liver bed, though the extent of lower gallbladder mobilization is borderline.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress with small windows and residual connective tissue.",
    "boxes": [
     {
      "box_2d": [
       7,
       269,
       527,
       611
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       154,
       998,
       837
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       468,
       154,
       547,
       310
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       570,
       516,
       998,
       679
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       471,
       431,
       588,
       484
      ],
      "label": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "box_2d": [
       584,
       442,
       998,
       550
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
    "fat": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 25
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 26
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 12
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 8
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 21.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Peritoneum and connective tissue still cover the hepatocystic triangle, so two distinct tubular structures entering the gallbladder cannot be identified. C2: The hepatocystic triangle is largely undissected with only a tiny initial opening, and no full-thickness windows are established. C3: The lower part of the gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Early dissection phase; the cystic duct and artery are still covered by peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       239,
       704,
       608
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       506,
       767,
       836
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       158,
       861,
       442
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       463,
       431,
       997,
       574
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       467,
       153,
       561,
       289
      ],
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
     "hits": 27
    },
    "liver": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.99,
     "hits": 27
    },
    "fat": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 12
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 8
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 21.0
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
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two small windows are being dissected, but two distinct tubular structures (cystic duct and artery) are not yet clearly skeletonized and seen entering the gallbladder. C2: Although two small fenestrations are visible, the hepatocystic triangle is not yet fully cleared of connective tissue to confirm unimpeded full-thickness windows. C3: The lower part of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
      "name": "hepatocystic_window",
      "confidence": 0.65
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete; tubular structures are still encased in peritoneal and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       467,
       154,
       556,
       285
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       460,
       426,
       1000,
       543
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       227,
       866,
       606
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       156,
       990,
       840
      ],
      "label": "liver",
      "confidence": 0.94
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
    "fat": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 27
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 12
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 8
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 21.0
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) are becoming distinct and connected to the gallbladder as windows are formed between them. C2: Two small fenestrations/windows are visible in the hepatocystic triangle, though the lower window is still quite small and surrounded by connective tissue. C3: The lower third of the gallbladder remains attached to the liver bed, and the cystic plate is currently being dissected by the hook.",
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
      "confidence": 0.8
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
    "reason_if_not": "The lower part of the gallbladder is not yet separated from the cystic plate, and the hepatocystic triangle windows need further widening to fully confirm no other structures exist.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       158,
       874,
       838
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       228,
       444,
       609
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       415,
       456,
       998,
       616
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       449,
       154,
       536,
       272
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       434,
       411,
       549,
       461
      ],
      "confidence": 0.75
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       188,
       222,
       597,
       424
      ],
      "confidence": 0.7
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
    "fat": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 28
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 29
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 13
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 28.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 28.0,
     "best": 0.9,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.25
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct and cystic artery) are clearly dissected and seen entering the gallbladder. Two full-thickness windows are open in the hepatocystic triangle with the background liver visible through both gaps. The lower gallbladder is only partially lifted at the upper window, so the cystic plate is not yet exposed along the entire inferior margin.",
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
      "confidence": 0.95
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
    "reason_if_not": "The lower part of the gallbladder is not yet sufficiently separated from the liver bed to fully expose the cystic plate (C3 not achieved).",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       154,
       992,
       840
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       222,
       570,
       614
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       414,
       479,
       997,
       663
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       438,
       153,
       529,
       280
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       426,
       423,
       557,
       483
      ],
      "confidence": 0.85
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
    "fat": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 29
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 30
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 29.0,
     "best": 0.92,
     "hits": 10
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 29.0,
     "best": 0.9,
     "hits": 7
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
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
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.4
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) are delineated entering the lower gallbladder. C2: Two clear full-thickness windows have been dissected through the hepatocystic triangle with liver visible in the background. C3: The lower gallbladder is only partially separated at the window, and the cystic plate is not yet exposed along the entire inferior margin.",
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
      "confidence": 0.85
     },
     {
      "name": "cystic_artery",
      "confidence": 0.85
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet sufficiently mobilized off the cystic plate to complete the critical view of safety.",
    "boxes": [
     {
      "box_2d": [
       0,
       228,
       615,
       618
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       157,
       985,
       841
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       437,
       154,
       531,
       285
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       421,
       482,
       998,
       668
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       426,
       429,
       562,
       492
      ],
      "label": "hepatocystic_window",
      "confidence": 0.77
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
    "fat": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 30
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 31
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 30.0,
     "best": 0.92,
     "hits": 11
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 8
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
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
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder neck. C2: Two full-thickness windows are dissected through the hepatocystic triangle, showing the background liver through the gaps. C3: The lower third of the gallbladder remains attached to the liver bed, so the cystic plate is not fully exposed along the inferior margin.",
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
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       155,
       960,
       843
      ],
      "confidence": 0.95,
      "label": "liver"
     },
     {
      "box_2d": [
       0,
       209,
       720,
       612
      ],
      "confidence": 0.95,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       448,
       153,
       532,
       274
      ],
      "confidence": 0.95,
      "label": "grasper"
     },
     {
      "box_2d": [
       492,
       528,
       998,
       719
      ],
      "confidence": 0.95,
      "label": "hook"
     },
     {
      "box_2d": [
       412,
       407,
       560,
       470
      ],
      "confidence": 0.75,
      "label": "hepatocystic_window"
     }
    ]
   },
   "can_confirm": true,
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
    "fat": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 31
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 32
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 31.0,
     "best": 0.92,
     "hits": 12
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 31.0,
     "best": 0.9,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
     "since": 29.0
    }
   ]
  },
  {
   "t": 32.0,
   "label": {
    "cvs": {
     "c1": 0.5,
     "c2": 0.4,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two strand-like structures are emerging below the gallbladder neck, though connective tissue still partially obscures their tubular definition. C2: A small window is visible between the lower structures, while the hook is dissecting to create a second window above against the liver bed. C3: The hook is actively separating the lower gallbladder from the liver bed, so the cystic plate is not yet exposed along the entire inferior margin.",
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
      "confidence": 0.75
     },
     {
      "name": "cystic_artery",
      "confidence": 0.65
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.7
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and separation from the cystic plate are still in progress.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       212,
       542,
       610
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       158,
       978,
       843
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       443,
       153,
       534,
       272
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       431,
       438,
       1000,
       568
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       576,
       345,
       1000,
       459
      ],
      "confidence": 0.72
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
    "fat": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 32
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 33
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 32.0,
     "best": 0.92,
     "hits": 13
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
   "t": 33.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the base of the gallbladder. C2: Two full-thickness windows have been dissected in the hepatocystic triangle with the background liver visible through both openings. C3: The lower portion of the gallbladder remains attached to the liver bed and the hook is only beginning to dissect along the cystic plate.",
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
      "confidence": 0.88
     },
     {
      "name": "cystic_artery",
      "confidence": 0.92
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
    "reason_if_not": "The lower part of the gallbladder is not yet sufficiently mobilized off the cystic plate (C3 not achieved).",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       221,
       606,
       605
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       503,
       769,
       839
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       438,
       154,
       520,
       272
      ],
      "confidence": 0.93
     },
     {
      "label": "irrigator",
      "box_2d": [
       381,
       467,
       1000,
       648
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       428,
       406,
       548,
       458
      ],
      "confidence": 0.77
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       587,
       427,
       999,
       555
      ],
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
     "hits": 34
    },
    "liver": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.99,
     "hits": 34
    },
    "fat": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 34
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 33.0,
     "best": 0.92,
     "hits": 14
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 33.0,
     "best": 0.92,
     "hits": 10
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
     "c2": 0.9,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder. C2: Two full-thickness windows have been dissected in the hepatocystic triangle, showing the liver parenchyma in the background. C3: The lower third of the gallbladder remains attached to the liver bed, so the cystic plate is not fully exposed along the inferior margin.",
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
      "confidence": 0.92
     },
     {
      "name": "cystic_artery",
      "confidence": 0.92
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
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       495,
       847,
       837
      ]
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       158,
       848,
       442
      ]
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       214,
       578,
       600
      ]
     },
     {
      "label": "hook",
      "box_2d": [
       363,
       483,
       1000,
       687
      ]
     },
     {
      "label": "grasper",
      "box_2d": [
       427,
       154,
       523,
       271
      ]
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       425,
       408,
       542,
       467
      ]
     }
    ]
   },
   "can_confirm": true,
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
    "fat": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 34
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 35
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 34.0,
     "best": 0.92,
     "hits": 15
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 34.0,
     "best": 0.92,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.1
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct and cystic artery) are seen extending toward the gallbladder. Two clear full-thickness windows with liver visible in the background are dissected between the duct, artery, and gallbladder/cystic plate region. The lower part of the gallbladder remains attached to the liver bed without full exposure of the cystic plate along the inferior margin.",
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
      "name": "cystic_artery",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet mobilized off the cystic plate (C3 not achieved).",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       157,
       987,
       841
      ],
      "confidence": 0.97
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       203,
       675,
       597
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       550,
       483,
       1000,
       630
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       445,
       153,
       526,
       261
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       439,
       395,
       559,
       451
      ],
      "confidence": 0.77
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
    "fat": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 34
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 36
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 35.0,
     "best": 0.92,
     "hits": 16
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 35.0,
     "best": 0.92,
     "hits": 12
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
   "t": 36.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.7,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are being delineated entering the gallbladder, with the hook dissecting the anterior structure. C2: Two small full-thickness windows are visible between the structures and the cystic plate, with the hook tip passing through the lower window. C3: The lower third of the gallbladder remains largely attached to the liver bed with only a small window created, so the cystic plate is not fully exposed.",
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
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "smoke",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       154,
       988,
       839
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       194,
       992,
       701
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       438,
       153,
       532,
       274
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       575,
       377,
       998,
       453
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       447,
       421,
       550,
       463
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.99,
     "hits": 36
    },
    "liver": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.99,
     "hits": 36
    },
    "fat": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 34
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 36
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 36.0,
     "best": 0.92,
     "hits": 16
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 36.0,
     "best": 0.92,
     "hits": 12
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
     "c1": 0.65,
     "c2": 0.6,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) appear partially skeletonized and entering the gallbladder neck, with the hook dissecting the anterior structure. C2: Two small windows are visible between the duct and artery and between the artery and liver bed, though residual strands of connective tissue remain. C3: The lower part of the gallbladder is still attached to the liver bed with only a small window superior to the artery, so the cystic plate is not fully exposed.",
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
    "reason_if_not": "The lower third of the gallbladder is not yet mobilized off the cystic plate (C3 not achieved), and residual connective tissue strands still bridge the lower window.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       206,
       628,
       610
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       467,
       808,
       836
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       48,
       161,
       870,
       442
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       437,
       155,
       532,
       276
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       538,
       346,
       998,
       427
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       345,
       431,
       574,
       512
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.99,
     "hits": 37
    },
    "liver": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.99,
     "hits": 37
    },
    "fat": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 35
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 37
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 37.0,
     "best": 0.92,
     "hits": 17
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 37.0,
     "best": 0.92,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and artery are still embedded in connective tissue and do not yet appear as two distinct tubular structures entering the gallbladder. C2: The hook is actively creating openings in the hepatocystic triangle, but full-thickness windows clearing the fat and connective tissue are not yet established. C3: The lower part of the gallbladder remains attached to the liver bed with only a small initial separation visible, so the cystic plate is not fully exposed.",
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
      "name": "cystic_duct",
      "confidence": 0.5
     },
     {
      "name": "cystic_artery",
      "confidence": 0.4
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.3
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not yet skeletonized and separated from surrounding connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       225,
       617,
       615
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       160,
       974,
       838
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       435,
       153,
       526,
       290
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       528,
       353,
       998,
       437
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
     "last": 38.0,
     "best": 0.99,
     "hits": 38
    },
    "liver": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.99,
     "hits": 38
    },
    "fat": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 36
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 38
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 38.0,
     "best": 0.92,
     "hits": 17
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 38.0,
     "best": 0.92,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct laterally, cystic artery medially) are isolated and seen entering the gallbladder neck. C2: Two full-thickness windows are clearly visible on either side of the central cystic artery, showing the background liver through the hepatocystic triangle. C3: The lower third of the gallbladder remains attached to the liver bed superiorly without full exposure of the cystic plate along the inferior margin.",
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
      "confidence": 0.85
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
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet sufficiently mobilized off the cystic plate (C3 not achieved).",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       193,
       730,
       616
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       198,
       483,
       804,
       765
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       465,
       672,
       994,
       838
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       438,
       155,
       524,
       258
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       556,
       366,
       996,
       446
      ],
      "confidence": 0.72
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       337,
       415,
       608,
       513
      ],
      "confidence": 0.65
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       454,
       416,
       554,
       452
      ],
      "confidence": 0.78
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
    "fat": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 37
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 39
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 39.0,
     "best": 0.92,
     "hits": 18
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 39.0,
     "best": 0.92,
     "hits": 14
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
     "c1": 0.65,
     "c2": 0.7,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two band-like structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck, though some connective tissue strands remain on the lower structure. C2: Two full-thickness windows are visible through the hepatocystic triangle with the dark background liver seen through both gaps, though thin strands cross the lower window. C3: The gallbladder is only partially separated at the neck, and the cystic plate is not clearly exposed along the inferior margin.",
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
    "reason_if_not": "C3 is not yet achieved as the lower gallbladder is not sufficiently separated from the cystic plate, and residual connective strands in the lower window are still being dissected.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       169,
       646,
       600
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       482,
       995,
       843
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       473,
       153,
       552,
       246
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       521,
       273,
       998,
       362
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       476,
       401,
       594,
       452
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
     "best": 0.99,
     "hits": 40
    },
    "liver": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.99,
     "hits": 40
    },
    "fat": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 38
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 40
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 40.0,
     "best": 0.92,
     "hits": 19
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 40.0,
     "best": 0.92,
     "hits": 15
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.5,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
     "c1": 0.65,
     "c2": 0.6,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two main tubular-like bands (likely cystic duct and artery) are emerging, though connective tissue still partially obscures the leftmost structure beneath the hook. C2: Two windows are visible through the hepatocystic triangle with the liver bed seen behind them, though the hook is still dissecting the lower window. C3: The cystic plate is partially exposed in the upper window, but the lower gallbladder is not yet fully separated from the liver bed along the entire inferior margin.",
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
      "confidence": 0.8
     },
     {
      "name": "cystic_plate",
      "confidence": 0.7
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Connective tissue is still being dissected over the lower tubular structure, and the lower gallbladder is not fully mobilized off the cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       167,
       1000,
       655
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       480,
       833,
       839
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       471,
       662,
       996,
       839
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       517,
       299,
       1000,
       391
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       444,
       154,
       532,
       239
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       468,
       399,
       576,
       438
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 41
    },
    "liver": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 41
    },
    "fat": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 41
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 41.0,
     "best": 0.92,
     "hits": 20
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 41.0,
     "best": 0.92,
     "hits": 16
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 41.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
     "c1": 0.72,
     "c2": 0.45,
     "c3": 0.8
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) are visible entering the lower gallbladder, separated by a small dissected window. C2: A full-thickness window is present between the two structures, though tissue below the inferior structure is still being divided by the hook. C3: The lower portion of the gallbladder is well separated from the liver bed, exposing the cystic plate behind it.",
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
      "confidence": 0.78
     },
     {
      "name": "cystic_artery",
      "confidence": 0.82
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
       269,
       755,
       595
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       160,
       997,
       842
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       268,
       163,
       412,
       359
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       738,
       452,
       998,
       537
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       510,
       438,
       643,
       476
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 42
    },
    "liver": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 42
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 42.0,
     "best": 0.92,
     "hits": 21
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 42.0,
     "best": 0.92,
     "hits": 17
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 42.0,
     "best": 0.8,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the cystic duct or lower gallbladder neck is being dissected; two distinct tubular structures entering the gallbladder are not yet visible. C2: A small window is beginning to form near the grasper, but the hepatocystic triangle is not cleared into full-thickness windows. C3: The gallbladder remains largely attached to the liver bed, and the cystic plate is not fully exposed along the inferior margin.",
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
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.35
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are not yet clearly isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       452,
       829,
       680
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       155,
       999,
       840
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       253,
       158,
       551,
       672
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       763,
       549,
       999,
       630
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 43
    },
    "liver": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 43
    },
    "fat": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 43
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 43.0,
     "best": 0.92,
     "hits": 21
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 42.0,
     "best": 0.92,
     "hits": 17
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 42.0,
     "best": 0.8,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 29.0
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
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.35
    },
    "cvs_evidence": "C1: The cystic duct and artery are still embedded in connective tissue and not clearly separated as two distinct tubular structures entering the gallbladder. C2: A single small window is opened near the liver bed, but the triangle between the duct and artery is not yet cleared. C3: A small window is created at the base of the gallbladder, but the lower third of the gallbladder is not yet fully lifted off the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
      "confidence": 0.75
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
    "reason_if_not": "The hepatocystic triangle is still largely covered by peritoneum and connective tissue, preventing clear identification of the cystic duct and artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       155,
       749,
       593
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       466,
       1000,
       843
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       496,
       331,
       1000,
       407
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       486,
       386,
       610,
       431
      ],
      "confidence": 0.77
     },
     {
      "label": "grasper",
      "box_2d": [
       520,
       154,
       609,
       219
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.99,
     "hits": 44
    },
    "liver": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.99,
     "hits": 44
    },
    "fat": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 44
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 43.0,
     "best": 0.92,
     "hits": 21
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 42.0,
     "best": 0.92,
     "hits": 17
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 44.0,
     "best": 0.8,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
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
   "t": 45.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery centrally) are visible entering the base of the gallbladder. C2: Two full-thickness windows have been dissected in the hepatocystic triangle, with the liver background clearly visible through the upper window and dark background through the lower window. C3: The lower portion of the gallbladder is mobilized away from the liver bed above the upper window, exposing the cystic plate.",
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
      "confidence": 0.92
     },
     {
      "name": "cystic_plate",
      "confidence": 0.85
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
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       461,
       990,
       842
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       156,
       787,
       587
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       502,
       154,
       588,
       221
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       712,
       349,
       1000,
       429
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       471,
       382,
       608,
       433
      ],
      "confidence": 0.74
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.99,
     "hits": 45
    },
    "liver": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.99,
     "hits": 45
    },
    "fat": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 41
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 45
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 45.0,
     "best": 0.92,
     "hits": 22
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 45.0,
     "best": 0.92,
     "hits": 18
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
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
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two small windows are being dissected in the peritoneum/connective tissue, outlining potential strands, but distinct tubular cystic duct and artery structures are not yet clearly isolated entering the gallbladder. C2: There is one small full-thickness window visible below the hook and another small opening at the hook tip, which is insufficient to consider the hepatocystic triangle cleared of fat and connective tissue. C3: The gallbladder remains completely attached to the liver bed along its medial/inferior aspect, with no exposure of the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; peritoneum and connective tissue still obscure the cystic duct, cystic artery, and cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       460,
       991,
       843
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       157,
       726,
       589
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       483,
       154,
       573,
       217
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       493,
       389,
       998,
       471
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.99,
     "hits": 46
    },
    "liver": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.99,
     "hits": 46
    },
    "fat": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 46
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 45.0,
     "best": 0.92,
     "hits": 22
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 45.0,
     "best": 0.92,
     "hits": 18
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
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
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. C2: Two full-thickness windows are visible in the hepatocystic triangle, with the hook dissecting the upper window near the liver bed. C3: The lower gallbladder is still largely attached to the liver bed and the cystic plate is not fully exposed.",
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
    "can_confirm_anatomy": false,
    "reason_if_not": "C3 (cystic plate separation) is not yet achieved.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       158,
       994,
       592
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       456,
       992,
       843
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       433,
       407,
       1000,
       513
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       471,
       154,
       559,
       215
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.99,
     "hits": 47
    },
    "liver": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.99,
     "hits": 47
    },
    "fat": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 43
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 47
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 47.0,
     "best": 0.92,
     "hits": 23
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 47.0,
     "best": 0.92,
     "hits": 19
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are dissected and seen entering the gallbladder. C2: Two clear full-thickness windows are visible through the hepatocystic triangle showing the liver parenchyma behind them. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the cystic plate behind the upper window.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
      "confidence": 0.88
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       459,
       998,
       842
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       154,
       681,
       597
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       499,
       154,
       574,
       205
      ],
      "confidence": 0.91
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       453,
       367,
       579,
       418
      ],
      "confidence": 0.76
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       558,
       321,
       689,
       383
      ],
      "confidence": 0.69
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 48
    },
    "liver": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 48
    },
    "fat": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 44
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 48
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 48.0,
     "best": 0.92,
     "hits": 24
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 48.0,
     "best": 0.92,
     "hits": 20
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 48.0,
     "best": 0.88,
     "hits": 5
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct laterally and cystic artery medially) are clearly skeletonized and seen entering the gallbladder. C2: Two full-thickness windows are dissected through the hepatocystic triangle, showing the background through the gaps between duct, artery, and liver bed. C3: A large window above the cystic artery separates the lower gallbladder from the liver bed, exposing part of the cystic plate, though the upper attachment remains prominent.",
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
      "label": "gallbladder",
      "box_2d": [
       0,
       160,
       616,
       592
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       477,
       995,
       842
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       465,
       155,
       557,
       230
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       569,
       345,
       701,
       399
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       471,
       401,
       595,
       435
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 49
    },
    "liver": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 49
    },
    "fat": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 45
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 49
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 49.0,
     "best": 0.92,
     "hits": 25
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 49.0,
     "best": 0.92,
     "hits": 21
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 49.0,
     "best": 0.88,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "since": 47.0
    }
   ]
  },
  {
   "t": 50.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen running into the gallbladder neck. C2: There is a clear full-thickness window between the duct and artery, and a gap visible between the artery and the liver bed/cystic plate. C3: Only a small portion of the lower gallbladder is separated from the liver bed, not enough to show the cystic plate along the entire inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 1.0
     },
     {
      "name": "liver",
      "confidence": 1.0
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
      "confidence": 0.95
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "C3 is not achieved as the lower gallbladder is not sufficiently dissected off the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       157,
       1000,
       843
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       167,
       729,
       615
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       445,
       155,
       545,
       258
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       583,
       366,
       685,
       417
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 50.0,
     "best": 1.0,
     "hits": 50
    },
    "liver": {
     "first": 0.0,
     "last": 50.0,
     "best": 1.0,
     "hits": 50
    },
    "fat": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 46
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 50
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 50.0,
     "best": 0.92,
     "hits": 26
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 50.0,
     "best": 0.92,
     "hits": 22
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 49.0,
     "best": 0.88,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.25
    },
    "cvs_evidence": "Two tubular-like bands are visible below the gallbladder with a window between them, though the medial aspect remains thick with tissue. A single full-thickness window is clearly visible between the lateral and medial bands, but a second window to the cystic plate is not created. The lower gallbladder remains largely attached to the liver bed with only minimal separation at the base.",
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
      "name": "hepatocystic_window",
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with only one window visible and the lower gallbladder still attached to the liver bed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       6,
       169,
       993,
       608
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       448,
       890,
       843
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       56,
       161,
       451,
       427
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       465,
       154,
       563,
       251
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       598,
       359,
       737,
       414
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 51.0,
     "best": 1.0,
     "hits": 51
    },
    "liver": {
     "first": 0.0,
     "last": 51.0,
     "best": 1.0,
     "hits": 51
    },
    "fat": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 47
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 51
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 51.0,
     "best": 0.92,
     "hits": 27
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 51.0,
     "best": 0.92,
     "hits": 22
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 49.0,
     "best": 0.88,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the lower gallbladder. C2: Two full-thickness windows have been dissected through the hepatocystic triangle, allowing a clear view of the liver background between the structures and the gallbladder wall/plate. C3: Only a small initial defect is present above the cystic artery; the lower gallbladder remains largely attached to the liver bed and the cystic plate is not sufficiently exposed.",
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
      "confidence": 0.88
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "C3 is not achieved as the lower portion of the gallbladder has not been adequately mobilized off the cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       14,
       158,
       996,
       598
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       444,
       994,
       838
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       442,
       154,
       538,
       220
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       499,
       377,
       611,
       411
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       584,
       319,
       687,
       368
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 52.0,
     "best": 1.0,
     "hits": 52
    },
    "liver": {
     "first": 0.0,
     "last": 52.0,
     "best": 1.0,
     "hits": 52
    },
    "fat": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 52
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 52.0,
     "best": 0.92,
     "hits": 28
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 52.0,
     "best": 0.92,
     "hits": 23
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 49.0,
     "best": 0.88,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "c2": 0.85,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly dissected and seen entering the gallbladder. C2: Two full-thickness windows are visible between the duct, artery, and liver side with background liver visible through both openings. C3: The lower portion of the gallbladder remains largely attached to the liver bed, with only a small window rather than the full cystic plate exposed along the inferior margin.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower third of the gallbladder is not yet mobilized off the cystic plate (C3 not achieved).",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       14,
       155,
       998,
       579
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       447,
       998,
       840
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       457,
       153,
       536,
       220
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       504,
       370,
       636,
       410
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 53.0,
     "best": 1.0,
     "hits": 53
    },
    "liver": {
     "first": 0.0,
     "last": 53.0,
     "best": 1.0,
     "hits": 53
    },
    "fat": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 53
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 53.0,
     "best": 0.92,
     "hits": 29
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 53.0,
     "best": 0.92,
     "hits": 24
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 49.0,
     "best": 0.88,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery in the middle) are clearly visible entering the lower gallbladder. C2: Two full-thickness windows are dissected and visible between the cystic duct, cystic artery, and the liver bed. C3: The lower third of the gallbladder remains attached to the liver bed along its medial margin, so the cystic plate is not fully exposed.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet sufficiently separated from the cystic plate to achieve the complete Critical View of Safety.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       24,
       158,
       997,
       603
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       430,
       915,
       839
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       506,
       332,
       633,
       386
      ],
      "confidence": 0.85
     },
     {
      "label": "liver",
      "box_2d": [
       517,
       600,
       998,
       838
      ],
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 54.0,
     "best": 1.0,
     "hits": 54
    },
    "liver": {
     "first": 0.0,
     "last": 54.0,
     "best": 1.0,
     "hits": 54
    },
    "fat": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 54
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 36
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 54.0,
     "best": 0.92,
     "hits": 30
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 54.0,
     "best": 0.92,
     "hits": 25
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 49.0,
     "best": 0.88,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.3
    },
    "cvs_evidence": "Two distinct tubular structures, the cystic duct and cystic artery, are clearly visible connecting to the gallbladder neck. Two full-thickness windows have been dissected in the hepatocystic triangle, allowing the dark background liver tissue to be seen through them. While an upper window is created above the cystic artery, the lower third of the gallbladder remains largely attached to the liver bed, so the cystic plate is not fully exposed along the entire inferior margin.",
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
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
      "confidence": 0.75
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.9
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
      "label": "liver",
      "box_2d": [
       0,
       501,
       891,
       840
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       131,
       156,
       1000,
       401
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       17,
       185,
       999,
       688
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       527,
       394,
       654,
       449
      ],
      "confidence": 0.76
     },
     {
      "label": "grasper",
      "box_2d": [
       536,
       155,
       601,
       250
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       662,
       269,
       1000,
       350
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 55.0,
     "best": 1.0,
     "hits": 55
    },
    "liver": {
     "first": 0.0,
     "last": 55.0,
     "best": 1.0,
     "hits": 55
    },
    "fat": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 51
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 55
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 26
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 55.0,
     "best": 0.88,
     "hits": 7
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct anteriorly and cystic artery posteriorly) are clearly seen entering the lower gallbladder. C2: Two full-thickness windows are clearly dissected through the hepatocystic triangle, showing the background liver through both gaps. C3: The lower third of the gallbladder is dissected free from the liver bed, exposing the cystic plate behind the second window.",
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
      "name": "cystic_plate",
      "confidence": 0.88
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
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       58,
       170,
       890,
       835
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       245,
       997,
       762
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       465,
       154,
       556,
       316
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       478,
       730,
       789,
       839
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       447,
       465,
       606,
       528
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       550,
       413,
       672,
       473
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 56.0,
     "best": 1.0,
     "hits": 56
    },
    "liver": {
     "first": 0.0,
     "last": 56.0,
     "best": 1.0,
     "hits": 56
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
     "hits": 56
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 27
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 56.0,
     "best": 0.88,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "c2": 0.85,
     "c3": 0.65
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct and cystic artery) are clearly dissected and seen entering the gallbladder neck. Two full-thickness windows are visible between the structures and the gallbladder/cystic plate, allowing a clear view of the liver behind them. The lower part of the gallbladder is lifted off the liver bed exposing the cystic plate, though the right grasper partially engages the posterior peritoneal reflection.",
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
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
      "confidence": 0.75
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       252,
       623,
       652
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       169,
       936,
       836
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       587,
       439,
       1000,
       624
      ],
      "label": "cystic_duct",
      "confidence": 0.85
     },
     {
      "box_2d": [
       461,
       154,
       546,
       313
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       489,
       545,
       998,
       764
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       458,
       464,
       582,
       513
      ],
      "label": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "box_2d": [
       549,
       413,
       668,
       477
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
     "last": 57.0,
     "best": 1.0,
     "hits": 57
    },
    "liver": {
     "first": 0.0,
     "last": 57.0,
     "best": 1.0,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 52
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 57
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 28
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 57.0,
     "best": 0.88,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "c2": 0.9,
     "c3": 0.3
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder neck. C2: Two full-thickness windows have been dissected in the hepatocystic triangle with a grasper jaw passed through one of them, showing the liver background clearly. C3: The gallbladder remains largely attached to the liver bed along its medial/inferior margin, so a full hanging gallbladder exposing the cystic plate is not fully achieved.",
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
      "confidence": 0.95
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
       172,
       936,
       839
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       244,
       762,
       656
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       460,
       155,
       549,
       311
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       538,
       449,
       1000,
       584
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       458,
       464,
       586,
       516
      ],
      "confidence": 0.58
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 58.0,
     "best": 1.0,
     "hits": 58
    },
    "liver": {
     "first": 0.0,
     "last": 58.0,
     "best": 1.0,
     "hits": 58
    },
    "fat": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 53
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 58
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 40
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 29
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 58.0,
     "best": 0.88,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct laterally and cystic artery medially, held by a grasper) are seen entering the gallbladder. C2: Two clear full-thickness windows are dissected through the hepatocystic triangle with the dark liver background visible through both. C3: The lower gallbladder is partially lifted off the liver bed exposing some cystic plate above the upper window, though the upper dissection is somewhat limited.",
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
      "name": "cystic_plate",
      "confidence": 0.75
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       226,
       762,
       651
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       46,
       154,
       981,
       836
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       459,
       154,
       551,
       303
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       538,
       456,
       1000,
       587
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       552,
       407,
       659,
       463
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
     "last": 59.0,
     "best": 1.0,
     "hits": 59
    },
    "liver": {
     "first": 0.0,
     "last": 59.0,
     "best": 1.0,
     "hits": 59
    },
    "fat": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 53
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 59
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 30
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 59.0,
     "best": 0.88,
     "hits": 10
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "c2": 0.85,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left/inferiorly, cystic artery centrally) are dissected and seen entering the gallbladder. C2: Two full-thickness windows are visible on either side of the central cystic artery structure, with the hook dissector passing into the window between the artery and the cystic plate. C3: The lower part of the gallbladder remains largely attached to the liver bed with only a very small initial separation at the neck, so the cystic plate is not sufficiently exposed.",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower third of the gallbladder is not yet mobilized off the cystic plate (C3 not achieved).",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       229,
       563,
       638
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       161,
       912,
       840
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       483,
       155,
       574,
       305
      ],
      "confidence": 0.97
     },
     {
      "label": "irrigator",
      "box_2d": [
       599,
       451,
       998,
       548
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 60.0,
     "best": 1.0,
     "hits": 60
    },
    "liver": {
     "first": 0.0,
     "last": 60.0,
     "best": 1.0,
     "hits": 60
    },
    "fat": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 54
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 60
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 42
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 36
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 31
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 59.0,
     "best": 0.88,
     "hits": 10
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.3
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly dissected and seen entering the gallbladder. C2: Two full-thickness windows are visible in the hepatocystic triangle, showing the liver background through the gaps between the duct, artery, and cystic plate. C3: While the superior window exposes part of the cystic plate, the lower third of the gallbladder is not extensively separated from the liver bed along the entire inferior margin.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
      "confidence": 0.7
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       197,
       667,
       628
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       46,
       155,
       935,
       840
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       488,
       154,
       571,
       275
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       727,
       519,
       1000,
       665
      ],
      "confidence": 0.91
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       471,
       422,
       605,
       479
      ],
      "confidence": 0.83
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       611,
       434,
       1000,
       564
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 61.0,
     "best": 1.0,
     "hits": 61
    },
    "liver": {
     "first": 0.0,
     "last": 61.0,
     "best": 1.0,
     "hits": 61
    },
    "fat": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 54
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 61
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 43
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 32
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 61.0,
     "best": 0.88,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery centrally) are visible entering the base of the gallbladder. C2: Two clear full-thickness windows are dissected on either side of the central cystic artery, showing the liver background through the gaps. C3: The cystic plate is exposed behind the rightmost window, showing separation of the lower gallbladder from the liver bed, though full inferior mobilization is somewhat limited in extent.",
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
      "confidence": 0.85
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
      "name": "connective_tissue",
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
      "label": "gallbladder",
      "box_2d": [
       0,
       192,
       983,
       624
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       90,
       526,
       894,
       836
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       46,
       172,
       977,
       414
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       490,
       155,
       560,
       267
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       632,
       419,
       998,
       537
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       621,
       427,
       787,
       483
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       478,
       417,
       626,
       477
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       578,
       368,
       689,
       432
      ],
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 62.0,
     "best": 1.0,
     "hits": 62
    },
    "liver": {
     "first": 0.0,
     "last": 62.0,
     "best": 1.0,
     "hits": 62
    },
    "fat": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 54
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 62
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 62.0,
     "best": 0.88,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
     "c2": 0.9,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery in the center, being held by the clip applier) are clearly seen entering the gallbladder. C2: Two full-thickness windows are visible through the hepatocystic triangle (between duct and artery, and between artery and the liver bed) with dark liver background showing through. C3: The lower part of the gallbladder is lifted away from the liver bed showing a window and connective tissue on the cystic plate, though the attachment high up is still partially intact.",
    "phase": "clipping_and_cutting",
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
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
      "confidence": 0.8
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
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
      "label": "liver",
      "box_2d": [
       128,
       518,
       898,
       839
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       51,
       161,
       976,
       404
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       187,
       856,
       629
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       492,
       155,
       564,
       264
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       629,
       420,
       998,
       538
      ],
      "confidence": 0.97
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       619,
       426,
       789,
       484
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       483,
       419,
       619,
       477
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       576,
       367,
       689,
       422
      ],
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 63.0,
     "best": 1.0,
     "hits": 63
    },
    "liver": {
     "first": 0.0,
     "last": 63.0,
     "best": 1.0,
     "hits": 63
    },
    "fat": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 54
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 63
    },
    "hepatocystic_window": {
     "first": 1.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 45
    },
    "cystic_duct": {
     "first": 4.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_artery": {
     "first": 5.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 34
    },
    "abdominal_wall": {
     "first": 8.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 25.0,
     "last": 63.0,
     "best": 0.88,
     "hits": 13
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 21.0
    },
    "c2": {
     "on": true,
     "since": 47.0
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
   "t": 24,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.0
  },
  {
   "t": 29,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.0
  },
  {
   "t": 34,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.0
  },
  {
   "t": 39,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 44,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 49,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 54,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 59,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.6666666666666666
  }
 ],
 "agreement": {
  "keyframes": 8,
  "C1": 0.75,
  "C1_caught": [
   6,
   8
  ],
  "C2": 0.75,
  "C2_caught": [
   6,
   8
  ],
  "C3": 0.625,
  "C3_caught": [
   2,
   5
  ]
 },
 "rules": {
  "confirm_conf": 0.7,
  "confirm_frames": 2
 }
};
