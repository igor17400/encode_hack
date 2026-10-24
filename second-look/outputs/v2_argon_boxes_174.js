window.TIMELINE = {
 "video": "videos/endo174.mp4",
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: The cystic artery is clearly isolated on the hook and a broader tubular cystic duct is visible below, though still partially embedded in connective tissue. C2: Two small windows are being dissected above and below the artery, though the upper window still has thin connective tissue remnants rather than being completely cleared. C3: A patch of the cystic plate is exposed superiorly, but the lower gallbladder is not fully separated along its entire inferior margin.",
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
      "name": "cystic_artery",
      "confidence": 0.92
     },
     {
      "name": "cystic_duct",
      "confidence": 0.75
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress with residual connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       497,
       672,
       998
      ],
      "label": "liver"
     },
     {
      "box_2d": [
       0,
       42,
       532,
       513
      ],
      "label": "gallbladder"
     },
     {
      "box_2d": [
       538,
       50,
       705,
       219
      ],
      "label": "grasper"
     },
     {
      "box_2d": [
       611,
       453,
       998,
       629
      ],
      "label": "hook"
     },
     {
      "box_2d": [
       426,
       478,
       585,
       584
      ],
      "label": "hepatocystic_window"
     },
     {
      "box_2d": [
       576,
       466,
       637,
       609
      ],
      "label": "cystic_artery"
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
    "liver": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.98,
     "hits": 1
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.92,
     "hits": 1
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.8,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.85,
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
     "c1": 0.85,
     "c2": 0.65,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two horizontal tubular structures (cystic duct below, cystic artery above) are visible running toward the gallbladder neck on the left. C2: A full-thickness window is open between the cystic duct and artery where the hook is dissecting, and a second window is partially cleared above the artery, though thin connective tissue strands remain in the upper window. C3: Dissection above the cystic artery exposes a small area of the cystic plate, but the lower third of the gallbladder is not yet clearly mobilized from the liver bed along its entire inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
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
      "confidence": 0.6
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The upper window and cystic plate dissection are still incomplete, with residual connective tissue remaining above the cystic artery.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       485,
       670,
       997
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       43,
       442,
       584
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       522,
       45,
       685,
       216
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       679,
       548,
       999,
       706
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       655,
       453,
       835,
       606
      ],
      "confidence": 0.84
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       410,
       476,
       571,
       592
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.95,
     "hits": 2
    },
    "liver": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.99,
     "hits": 2
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.92,
     "hits": 2
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 2
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.8,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.85,
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
     "best": 0.85,
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
   "t": 2.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two tubular structures (likely cystic duct and artery) are partially dissected and visible, with the hook elevating the upper structure. C2: Two windows are being created above and below the artery, though connective tissue strands remain in the windows so full-thickness clearance is borderline. C3: A small area of the cystic plate is exposed in the upper window, but the lower part of the gallbladder is not yet widely separated from the liver bed along its whole inferior margin.",
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
      "name": "cystic_artery",
      "confidence": 0.85
     },
     {
      "name": "cystic_duct",
      "confidence": 0.75
     },
     {
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress with residual connective tissue strands.",
    "boxes": [
     {
      "box_2d": [
       0,
       478,
       660,
       1000
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       42,
       592,
       577
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       554,
       50,
       730,
       230
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       608,
       452,
       997,
       626
      ],
      "label": "hook",
      "confidence": 0.93
     },
     {
      "box_2d": [
       423,
       490,
       576,
       599
      ],
      "label": "hepatocystic_window",
      "confidence": 0.77
     },
     {
      "box_2d": [
       201,
       412,
       576,
       623
      ],
      "label": "cystic_plate",
      "confidence": 0.73
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
    "liver": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.99,
     "hits": 3
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.92,
     "hits": 3
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.85,
     "hits": 3
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.8,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.85,
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one thin tubular structure (likely the cystic artery) is being isolated by the hook, while the cystic duct is still embedded in tissue. C2: A small window is being created beneath the single vessel, so two full-thickness windows clearing the hepatocystic triangle are not yet achieved. C3: Although some dissection is present on the liver bed, the lower third of the gallbladder is not fully separated along its entire inferior margin.",
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
      "name": "cystic_artery",
      "confidence": 0.8
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct is not yet clearly isolated and the gallbladder base remains attached to the liver bed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       44,
       605,
       530
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       485,
       458,
       998
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       567,
       57,
       764,
       287
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       676,
       564,
       1000,
       694
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       727,
       521,
       845,
       596
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.95,
     "hits": 4
    },
    "liver": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.99,
     "hits": 4
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.92,
     "hits": 4
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.85,
     "hits": 3
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.8,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.85,
     "hits": 3
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two horizontal tubular structures (likely cystic duct and artery) are partially Skeletonized and seen coursing toward the gallbladder neck. C2: A full-thickness window is clearly visible between the lower two structures, while the upper window is still partially covered by connective tissue. C3: A small area of the cystic plate is exposed superiorly, but the lower third of the gallbladder is not yet completely elevated off the liver bed.",
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
      "name": "cystic_duct",
      "confidence": 0.8
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
    "reason_if_not": "Dissection of the upper window and cystic plate is incomplete, preventing full confirmation of the critical view of safety.",
    "boxes": [
     {
      "box_2d": [
       676,
       558,
       1000,
       744
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       531,
       50,
       725,
       259
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       507,
       663,
       1000
      ],
      "label": "liver",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       42,
       617,
       574
      ],
      "label": "gallbladder",
      "confidence": 0.91
     },
     {
      "box_2d": [
       435,
       499,
       589,
       610
      ],
      "label": "hepatocystic_window",
      "confidence": 0.68
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.95,
     "hits": 5
    },
    "liver": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.99,
     "hits": 5
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.92,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.8,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.85,
     "hits": 4
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
     "c1": 0.4,
     "c2": 0.45,
     "c3": 0.2
    },
    "cvs_evidence": "C1: A thin tubular structure (cystic artery) is being isolated by the hook, and a broader structure is below it, though it is not yet fully defined as a clean tubular cystic duct. C2: A window is visible above the artery and the hook is creating a space below it, showing partial clearance of the hepatocystic triangle. C3: Some dissection of the cystic plate is visible above the artery, but the lower part of the gallbladder is not fully separated from the liver bed along its inferior margin.",
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
      "name": "cystic_artery",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
     },
     {
      "name": "cystic_plate",
      "confidence": 0.75
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, so the cystic duct and full clearance of the triangle cannot yet be confirmed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       472,
       616,
       998
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       42,
       521,
       500
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       501,
       46,
       681,
       246
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       606,
       483,
       998,
       655
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       198,
       422,
       546,
       612
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       404,
       498,
       556,
       606
      ],
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
     "hits": 6
    },
    "liver": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.99,
     "hits": 6
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.92,
     "hits": 6
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.85,
     "hits": 5
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
     "best": 0.9,
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
   "t": 6.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and an upper thinner tubular structure (likely cystic artery) are visible running toward the gallbladder, though the hook partially obscures the view. C2: A window is being created by the hook between the two structures, and there is a small dissected area above the upper structure, though full-thickness clearance is not yet completely unambiguous. C3: A small area of dissected tissue on the cystic plate is visible above the artery, but the lower third of the gallbladder is not yet clearly separated from the liver bed along its whole inferior margin.",
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
      "name": "cystic_artery",
      "confidence": 0.8
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress and not fully cleared to conclusively confirm all three CVS criteria.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       494,
       429,
       998
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       42,
       506,
       462
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       464,
       42,
       636,
       244
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       498,
       499,
       1000,
       688
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.95,
     "hits": 7
    },
    "liver": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.99,
     "hits": 7
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.92,
     "hits": 7
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.85,
     "hits": 5
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.85,
     "hits": 5
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
     "best": 0.9,
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
   "t": 7.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper thinner cystic artery) are clearly dissected and seen entering the gallbladder. C2: The hook instrument is passed through the lower window between the duct and artery, and a cleared upper window is visible between the artery and the cystic plate. C3: The cystic plate is exposed above the cystic artery where the lower gallbladder has been mobilized off the liver bed.",
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
       502,
       659,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       42,
       994,
       520
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       203,
       463,
       585,
       666
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       553,
       50,
       754,
       292
      ],
      "confidence": 0.98
     },
     {
      "label": "irrigator",
      "box_2d": [
       712,
       549,
       1000,
       672
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.95,
     "hits": 8
    },
    "liver": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.99,
     "hits": 8
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.92,
     "hits": 8
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.85,
     "hits": 5
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
     "best": 0.95,
     "hits": 8
    },
    "fat": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.9,
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
   "t": 8.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not clearly skeletonized and isolated entering the gallbladder yet. C2: The hepatocystic triangle still contains dense connective tissue without two full-thickness windows visible. C3: A portion of the cystic plate is exposed superiorly, though the lower gallbladder is not fully detached along the entire inferior margin.",
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
      "name": "cystic_plate",
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
      "name": "cystic_artery",
      "confidence": 0.6
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; tubular structures are still embedded in connective tissue without clear full-thickness windows.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       42,
       993,
       568
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       480,
       706,
       997
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       45,
       441,
       323
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       538,
       51,
       742,
       282
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       743,
       569,
       1000,
       687
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       212,
       455,
       593,
       661
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       579,
       545,
       625,
       683
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.95,
     "hits": 9
    },
    "liver": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.99,
     "hits": 9
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.92,
     "hits": 8
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.85,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.9,
     "hits": 6
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
     "best": 0.9,
     "hits": 9
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. Two windows are cleared in the hepatocystic triangle, with the hook instrument demonstrating the lower window and the upper window showing the cystic plate behind the artery. The lower third of the gallbladder is dissected off the liver bed, exposing the whitish-yellow cystic plate in the upper window.",
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
       477,
       687,
       1000
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       42,
       608,
       521
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       193,
       445,
       559,
       638
      ],
      "label": "cystic_plate",
      "confidence": 0.85
     },
     {
      "box_2d": [
       517,
       49,
       715,
       273
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       698,
       563,
       1000,
       697
      ],
      "label": "hook",
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 10
    },
    "liver": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.99,
     "hits": 10
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.92,
     "hits": 9
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 7
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
     "best": 0.95,
     "hits": 10
    },
    "fat": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 10
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
     "c2": 0.9,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are dissected and seen running horizontally toward the gallbladder on the left. C2: Two windows are dissected between the duct and artery (with liver visible through the lower window) and above the artery. C3: The lower portion of the gallbladder is not yet detached from the liver bed to expose the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
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
    "reason_if_not": "Cystic plate criterion (C3) is not yet achieved as the lower gallbladder remains attached to the liver bed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       510,
       623,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       42,
       512,
       439
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       509,
       47,
       696,
       259
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       780,
       573,
       1000,
       759
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       608,
       500,
       796,
       684
      ],
      "confidence": 0.74
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 11
    },
    "liver": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.99,
     "hits": 11
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.92,
     "hits": 10
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.9,
     "hits": 8
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 7
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
     "best": 0.95,
     "hits": 11
    },
    "fat": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.9,
     "hits": 11
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
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (cystic duct) is clearly outlined, while the superior area is still covered in connective tissue and actively being dissected by the hook. C2: A small lower window is visible below the hook, but the upper hepatocystic triangle is not yet cleared to form two full-thickness windows. C3: The lower gallbladder remains largely attached to the liver bed with no clear exposure of the cystic plate along the inferior margin.",
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
      "name": "hepatocystic_window",
      "confidence": 0.75
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet fully skeletonized and separated.",
    "boxes": [
     {
      "box_2d": [
       0,
       502,
       605,
       999
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       42,
       534,
       623
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       435,
       548,
       1000,
       893
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       504,
       44,
       694,
       260
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
     "last": 11.0,
     "best": 0.95,
     "hits": 12
    },
    "liver": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.99,
     "hits": 12
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.92,
     "hits": 10
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 7
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
     "best": 0.95,
     "hits": 12
    },
    "fat": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.9,
     "hits": 12
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
     "c1": 0.15,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A lower tubular structure and a thinner upper structure being hooked are partially visible, but fibrous connective tissue still obscures clear identification of two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is filled with connective tissue and no full-thickness windows showing background liver are present. C3: The gallbladder remains largely attached to the liver bed with only superficial dissection above the artery.",
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
      "name": "connective_tissue",
      "confidence": 0.98
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; dense connective tissue still bridges the space behind the structures.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       41,
       988,
       608
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       497,
       638,
       1000
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       508,
       48,
       690,
       269
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       681,
       543,
       1000,
       680
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       454,
       529,
       704,
       616
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       669,
       275,
       996,
       561
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 13
    },
    "liver": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.99,
     "hits": 13
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.92,
     "hits": 11
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.9,
     "hits": 9
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.98,
     "hits": 13
    },
    "fat": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 13
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not yet clearly dissected and isolated. C2: One small window is forming near the hook, but the hepatocystic triangle is still covered in connective tissue and lacks two clear full-thickness windows. C3: Some dissection is present along the liver bed, but the lower part of the gallbladder is not yet fully separated to expose the entire cystic plate.",
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
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are still obscured by fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       44,
       966,
       516
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       493,
       624,
       1000
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       509,
       49,
       706,
       297
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       683,
       403,
       1000,
       519
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       727,
       510,
       876,
       618
      ],
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 14
    },
    "liver": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.99,
     "hits": 14
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.92,
     "hits": 11
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 7
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
     "best": 0.98,
     "hits": 14
    },
    "fat": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 14
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
   "t": 14.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are still embedded in fat and connective tissue, so two distinct tubular structures entering the gallbladder cannot be seen. C2: The hepatocystic triangle is filled with undissected tissue and no full-thickness windows are visible. C3: The lower part of the gallbladder remains attached to the liver bed with only early superficial dissection of the peritoneum.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; tubular structures are obscured by fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       56,
       646,
       998
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       42,
       1000,
       998
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       533,
       50,
       750,
       309
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       507,
       542,
       1000,
       893
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       224,
       469,
       517,
       659
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
     "best": 0.95,
     "hits": 15
    },
    "liver": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.99,
     "hits": 15
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.92,
     "hits": 11
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 10
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.98,
     "hits": 15
    },
    "fat": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 15
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder yet. C2: The hepatocystic triangle is still covered with fat and connective tissue with no cleared windows. C3: The lower gallbladder remains fully attached to the liver bed and the cystic plate is not exposed.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Early stage of dissection; cystic duct and artery are still embedded in fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       343,
       670,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       44,
       996,
       606
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       545,
       52,
       786,
       309
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       510,
       560,
       1000,
       933
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       188,
       472,
       450,
       678
      ],
      "confidence": 0.55
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 16
    },
    "liver": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.99,
     "hits": 16
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.92,
     "hits": 11
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 10
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.98,
     "hits": 16
    },
    "fat": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 16
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
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only a partially dissected structure is visible, with the electrocautery hook actively dissecting tissue and obstructing the view of two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still filled with fat and connective tissue, and no clear full-thickness windows are fully established. C3: Dissection of the gallbladder off the cystic plate is just beginning near the hook, and the lower gallbladder is not yet separated from the liver bed.",
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
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are still embedded in fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       483,
       626,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       41,
       996,
       575
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       543,
       50,
       761,
       289
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       535,
       563,
       1000,
       933
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
     "best": 0.95,
     "hits": 17
    },
    "liver": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.99,
     "hits": 17
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.92,
     "hits": 11
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.9,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 10
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.98,
     "hits": 17
    },
    "fat": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 17
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.08
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or cystic artery) are clearly defined entering the gallbladder, as the triangle is still covered in connective and adipose tissue. C2: There are no full-thickness windows cleared through the hepatocystic triangle, although a small defect is being opened near the electrocautery hook. C3: The electrocautery hook is actively dissecting along the liver bed, so the lower gallbladder is not yet elevated off the cystic plate.",
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
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage and critical biliary and vascular structures remain obscured by fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       463,
       706,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       40,
       626,
       449
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       557,
       52,
       788,
       289
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       431,
       567,
       1000,
       962
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 18
    },
    "liver": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.99,
     "hits": 18
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.92,
     "hits": 11
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.9,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.9,
     "hits": 10
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.98,
     "hits": 18
    },
    "fat": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 18
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
     "c1": 0.45,
     "c2": 0.4,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two band-like structures are being dissected by the hook, though they are not yet fully skeletonized into distinct tubular structures entering the gallbladder. C2: The hook is passing through an inferior window and a depression is dissected superiorly, though thin connective tissue still spans the upper gap. C3: A depression in the connective tissue above the upper band shows initial separation from the liver bed, but a full hanging gallbladder over the cystic plate is not yet exposed.",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle and cystic plate require further clearance of connective tissue to definitively confirm the two tubular structures and their entry into the gallbladder.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       41,
       596,
       529
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       520,
       640,
       1000
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       564,
       49,
       749,
       238
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       639,
       549,
       1000,
       804
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       203,
       417,
       599,
       634
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 19
    },
    "liver": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.99,
     "hits": 19
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.92,
     "hits": 12
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 11
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.9,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 11
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.98,
     "hits": 19
    },
    "fat": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 19
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
     "c1": 0.85,
     "c2": 0.8,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct anteriorly and cystic artery posteriorly) are dissected and visible entering the gallbladder. C2: The hook instrument is passed through a full-thickness window between the cystic duct and cystic artery, and a cleared window is visible above the artery. C3: Only a limited patch of the liver bed is exposed above the artery, while the lower gallbladder is not separated along its entire inferior margin.",
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
      "confidence": 0.65
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
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet sufficiently mobilized off the cystic plate to achieve the complete Critical View of Safety.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       520,
       583,
       997
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       44,
       985,
       458
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       538,
       48,
       724,
       224
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       648,
       472,
       999,
       643
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       611,
       478,
       791,
       636
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 20
    },
    "liver": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.99,
     "hits": 20
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.92,
     "hits": 13
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.9,
     "hits": 12
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.9,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.9,
     "hits": 12
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.98,
     "hits": 20
    },
    "fat": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 20
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
     "c2": 0.9,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct inferiorly and thinner cystic artery superiorly) are clearly isolated entering the gallbladder. C2: Two clear, full-thickness windows are visible between the duct and artery and above the artery, with the background clearly visible through them. C3: The cystic plate is exposed superior to the cystic artery, though the instrument shaft partially obscures the upper aspect of the lower gallbladder margin.",
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
      "name": "cystic_plate",
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       427,
       784,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       47,
       462,
       527
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       174,
       336,
       452,
       607
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       465,
       390,
       768,
       575
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       471,
       43,
       592,
       144
      ],
      "confidence": 0.94
     },
     {
      "label": "irrigator",
      "box_2d": [
       391,
       551,
       1000,
       975
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 21
    },
    "liver": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.99,
     "hits": 21
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 13
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.9,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 13
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.98,
     "hits": 21
    },
    "fat": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 20
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not yet clearly isolated and seen entering the gallbladder, as significant fat and connective tissue remain. C2: While the hook is creating a small opening in the tissue, full-thickness windows clearing the hepatocystic triangle are not yet achieved. C3: The lower part of the gallbladder remains attached to the liver bed with no clearly exposed cystic plate along the inferior margin.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in an early stage with substantial fat and connective tissue obscuring the cystic duct and artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       42,
       674,
       527
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       499,
       718,
       998
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       611,
       57,
       833,
       304
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       631,
       457,
       996,
       646
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 22
    },
    "liver": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.99,
     "hits": 22
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 13
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.9,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 13
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.98,
     "hits": 22
    },
    "fat": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 21
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder. C2: Full-thickness windows are visible both between the duct and artery (where the hook is working) and between the artery and the cystic plate above. C3: The lower part of the gallbladder is dissected off the liver bed exposing the cystic plate in the upper window, though the full extent of separation is somewhat limited by the close-up view.",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       545,
       623,
       1000
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       45,
       992,
       469
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       552,
       47,
       729,
       239
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       696,
       458,
       1000,
       598
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       648,
       483,
       859,
       640
      ],
      "label": "cystic_duct",
      "confidence": 0.76
     },
     {
      "box_2d": [
       426,
       494,
       605,
       614
      ],
      "label": "hepatocystic_window",
      "confidence": 0.68
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 23
    },
    "liver": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.99,
     "hits": 23
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.9,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 14
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.98,
     "hits": 23
    },
    "fat": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 22
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
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are visible, though the hook partially obscures the upper structure. C2: A full-thickness window is visible between the lower and upper tubular structures, while the upper window is being actively dissected by the hook. C3: The lower gallbladder remains largely attached to the liver bed with minimal cystic plate exposure.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete, and the hook partially obscures the upper structure.",
    "boxes": [
     {
      "box_2d": [
       0,
       461,
       631,
       1000
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       40,
       829,
       513
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       539,
       48,
       719,
       244
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       468,
       523,
       1000,
       819
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       426,
       497,
       583,
       621
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
     "last": 23.0,
     "best": 0.95,
     "hits": 24
    },
    "liver": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.99,
     "hits": 24
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.9,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 15
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.98,
     "hits": 24
    },
    "fat": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 23
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
   "t": 24.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two main tubular-like bands (likely cystic duct and artery) can be traced toward the gallbladder neck, though bridging connective tissue remains in the upper window. C2: The lower window is open with liver visible behind the hook, while the upper space between the two structures still contains thin connective tissue strands. C3: The lower portion of the gallbladder is partially lifted off the liver bed exposing part of the cystic plate, though dissection up the plate is still ongoing.",
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
      "name": "cystic_plate",
      "confidence": 0.7
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
    "reason_if_not": "Connective tissue remains in the upper window between the putative artery and cystic plate, preventing complete confirmation of the Critical View of Safety.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       360,
       620,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       41,
       545,
       520
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       531,
       48,
       711,
       251
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       705,
       499,
       999,
       616
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 25
    },
    "liver": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.99,
     "hits": 25
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.9,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 16
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.98,
     "hits": 25
    },
    "fat": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 24
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 22.0
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
     "since": 22.0
    }
   ]
  },
  {
   "t": 25.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still largely covered in fat and connective tissue with no full-thickness windows created yet. C3: Only a small initial area of dissection near the liver bed is visible, and the lower gallbladder is not separated to expose the entire cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage and the biliary and vascular structures are still obscured by fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       452,
       705,
       1000
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       45,
       996,
       888
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       569,
       478,
       1000,
       679
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       555,
       48,
       730,
       246
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
     "last": 25.0,
     "best": 0.95,
     "hits": 26
    },
    "liver": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.99,
     "hits": 26
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 16
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.98,
     "hits": 26
    },
    "fat": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 25
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 22.0
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
   "t": 26.0,
   "label": {
    "cvs": {
     "c1": 0.72,
     "c2": 0.45,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are dissected out and seen entering the gallbladder neck. C2: A full-thickness window is clearly visible between the cystic duct and cystic artery, while the hook is actively creating the upper window between the artery and cystic plate. C3: Dissection of the lower gallbladder off the cystic plate is still in progress and not fully separated along the inferior margin.",
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
      "confidence": 0.9
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
    "reason_if_not": "The upper hepatocystic window and cystic plate dissection are still being completed by the electrocautery hook.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       436,
       622,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       44,
       532,
       516
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       181,
       414,
       549,
       679
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       673,
       89,
       997,
       544
      ],
      "confidence": 0.84
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       604,
       472,
       792,
       544
      ],
      "confidence": 0.77
     },
     {
      "label": "grasper",
      "box_2d": [
       515,
       45,
       682,
       236
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       421,
       520,
       1000,
       832
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 27
    },
    "liver": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.99,
     "hits": 27
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.9,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 17
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.98,
     "hits": 27
    },
    "fat": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 26
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 22.0
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
   "t": 27.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.65,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two tubular structures are partially skeletonized between the two dissected windows, though their exact entry into the gallbladder and complete isolation are somewhat obscured by surrounding tissue and the right-side instrument. C2: Two distinct dissected windows are visible in the hepatocystic triangle with background liver visible through the lower opening and connective tissue/liver seen through the upper opening. C3: The upper window approaches the liver bed, but the lower third of the gallbladder is not clearly elevated off the cystic plate across its entire inferior margin, and the right instrument blocks the view of the attachment.",
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
      "name": "cystic_duct",
      "confidence": 0.75
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
      "confidence": 0.95
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Complete critical view of safety is not yet achieved; the lower gallbladder is not fully detached from the cystic plate and the instrument shaft on the right partially occludes the upper hepatocystic triangle.",
    "boxes": [
     {
      "box_2d": [
       0,
       50,
       1000,
       608
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       458,
       505,
       1000
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       648,
       68,
       855,
       300
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       323,
       575,
       998,
       998
      ],
      "label": "irrigator",
      "confidence": 0.96
     },
     {
      "box_2d": [
       426,
       517,
       642,
       619
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
     "last": 27.0,
     "best": 0.95,
     "hits": 27
    },
    "liver": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.99,
     "hits": 27
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.9,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 17
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.98,
     "hits": 27
    },
    "fat": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 26
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 22.0
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
   "t": 28.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.65,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only the cystic artery and some superior tissue are partially skeletonized while the lower cystic duct region remains embedded in fat/connective tissue and occluded by the hook shaft. C2: Two distinct dissected windows are visible in the hepatocystic triangle showing background liver tissue through them, though the right side is partially occluded by the hook. C3: The lower gallbladder is not clearly elevated to expose the full inferior margin along the cystic plate.",
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hook shaft occludes the right side of the hepatocystic triangle and the tubular structures are not yet fully skeletonized to confirm two distinct structures entering the gallbladder.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       59,
       1000,
       644
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       488,
       557,
       1000
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       687,
       86,
       913,
       336
      ],
      "confidence": 0.94
     },
     {
      "label": "irrigator",
      "box_2d": [
       343,
       610,
       1000,
       1000
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       527,
       556,
       683,
       663
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 27
    },
    "liver": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.99,
     "hits": 27
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.9,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 17
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.98,
     "hits": 27
    },
    "fat": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 26
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 22.0
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
   "t": 29.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper thinner cystic artery) are clearly dissected and seen entering the gallbladder. C2: There is a clear full-thickness window between the duct and artery showing the background liver, and a second window above the artery exposing the cystic plate. C3: The lower portion of the gallbladder is dissected off the liver bed above the artery, exposing the whitish-yellow cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
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
       0,
       445,
       561,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       54,
       243,
       306
      ],
      "confidence": 0.82
     },
     {
      "label": "grasper",
      "box_2d": [
       418,
       41,
       571,
       181
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       499,
       432,
       725,
       606
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       278,
       442,
       458,
       568
      ],
      "confidence": 0.65
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       102,
       364,
       432,
       638
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 28
    },
    "liver": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.99,
     "hits": 28
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.9,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 18
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.98,
     "hits": 28
    },
    "fat": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 26
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 22.0
    },
    "c2": {
     "on": true,
     "since": 27.0
    },
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
     "c3": 0.6
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct inferiorly and cystic artery superiorly) are clearly isolated and running toward the gallbladder. C2: Two windows are dissected between the duct and artery and above the artery, with the background liver visible through the lower window. C3: The tissue above the cystic artery is partially cleared showing the cystic plate, though the full separation of the lower third of the gallbladder off the liver bed is only moderately exposed.",
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
      "name": "cystic_plate",
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
       395,
       39,
       562,
       206
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       464,
       460,
       694,
       636
      ],
      "confidence": 0.77
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       42,
       998,
       996
      ],
      "confidence": 0.83
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 29
    },
    "liver": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.99,
     "hits": 29
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.98,
     "hits": 29
    },
    "fat": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 27
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 22.0
    },
    "c2": {
     "on": true,
     "since": 27.0
    },
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet fullyskeletonized or clearly visible, as fat and connective tissue still obscure the hepatocystic triangle. C2: There is only one partial window visible below the hook, and the upper portion of the hepatocystic triangle remains filled with fat and connective tissue. C3: The lower part of the gallbladder is not yet mobilized off the liver bed to expose the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.6
     },
     {
      "name": "cystic_artery",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; fat and connective tissue obscure the full course of the cystic artery and cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       377,
       996,
       998
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       75,
       52,
       804,
       517
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       676,
       408,
       998,
       528
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       774,
       88,
       886,
       175
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 30
    },
    "liver": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.99,
     "hits": 30
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.98,
     "hits": 30
    },
    "fat": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 28
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 22.0
    },
    "c2": {
     "on": true,
     "since": 27.0
    },
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
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A lower tubular structure and a partially dissected upper structure are visible, but the upper structure is obscured by the hook and surrounding connective tissue, not yet clearly defining two distinct tubular structures entering the gallbladder. C2: There is a small window below the hook, but the upper window toward the cystic plate is still being dissected and not yet a full-thickness window. C3: The lower gallbladder remains largely attached to the liver bed with no clearly exposed cystic plate along the inferior margin.",
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
      "confidence": 0.4
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.65
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete, and the cystic plate and second tubular structure are not yet fully cleared and visible.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       525,
       497,
       1000,
       679
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       685,
       75,
       847,
       270
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       276,
       567,
       867
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       814,
       1000,
       1000
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 31
    },
    "liver": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.99,
     "hits": 31
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.98,
     "hits": 31
    },
    "fat": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 29
    },
    "gi_tract": {
     "first": 32.0,
     "last": 32.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 22.0
    },
    "c2": {
     "on": true,
     "since": 27.0
    },
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet dissected into distinct tubular structures. C2: The hepatocystic triangle is still covered with fat and peritoneum, with no full-thickness windows visible. C3: The peritoneum is just being incised along the gallbladder margin, so the lower gallbladder is not yet mobilized off the cystic plate.",
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; tubular structures and windows are not yet exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       457,
       676,
       831
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       198,
       45,
       662,
       304
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       5,
       60,
       995,
       807
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       672,
       73,
       843,
       298
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       483,
       462,
       1000,
       646
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 32
    },
    "liver": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.99,
     "hits": 32
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.98,
     "hits": 32
    },
    "fat": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 30
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 33.0,
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
   "t": 34.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1 is not achieved because two distinct tubular structures entering the gallbladder are not yet fully skeletonized or clearly visible, and the hook instrument occludes the right side of the triangle. C2 is not achieved because only a single small gap is visible at the base and the upper dissection window is incomplete and obscured by the hook. C3 is not achieved because the lower gallbladder remains largely attached to the peritoneum and liver bed without full exposure of the cystic plate.",
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
      "name": "connective_tissue",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still early and the electrocautery hook shaft occludes a significant portion of the triangle.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       467,
       547,
       957
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       245,
       48,
       804,
       345
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       38,
       114,
       1000,
       638
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       727,
       91,
       936,
       350
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       356,
       524,
       999,
       939
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 32
    },
    "liver": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.99,
     "hits": 32
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.98,
     "hits": 32
    },
    "fat": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 30
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 34.0,
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
   "t": 35.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still covered in connective tissue with only one small partial window visible at the bottom, and the hook instrument obscures the upper portion. C3: The lower gallbladder is still broadly attached to the peritoneum and liver bed, without full exposure of the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not yet exposed from surrounding connective tissue.",
    "boxes": [
     {
      "box_2d": [
       14,
       87,
       1000,
       687
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       321,
       690,
       936
      ],
      "label": "liver",
      "confidence": 0.94
     },
     {
      "box_2d": [
       681,
       83,
       883,
       341
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       342,
       546,
       1000,
       975
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
     "last": 35.0,
     "best": 0.95,
     "hits": 33
    },
    "liver": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.99,
     "hits": 33
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.98,
     "hits": 33
    },
    "fat": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 30
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 34.0,
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
   "t": 36.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.1
    },
    "cvs_evidence": "C1: A clear lower tubular structure (cystic duct) and an emerging upper structure (cystic artery) are being delineated, though the hook partially obscures the upper structure. C2: There is a full-thickness window visible above the lower tubular structure, while the upper dissection window is still being actively opened by the hook. C3: The gallbladder remains largely attached to the liver bed superiorly without clear exposure of the cystic plate along the inferior margin.",
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
      "name": "cystic_duct",
      "confidence": 0.85
     },
     {
      "name": "cystic_artery",
      "confidence": 0.6
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
    "reason_if_not": "Dissection of the upper window and cystic plate is still in progress and the hook partially obscures the upper structure.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       426,
       523,
       1000,
       856
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       641,
       62,
       810,
       308
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       275,
       718,
       905
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       55,
       995,
       618
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 34
    },
    "liver": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.99,
     "hits": 34
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 20
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.98,
     "hits": 34
    },
    "fat": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 31
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 34.0,
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
   "t": 37.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.05,
     "c3": 0.02
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) is visible at the bottom, and an upper window is being opened, but two clearly defined tubular structures entering the gallbladder are not yet fully skeletonized or unobstructed by the instrument shaft. C2: While there is a small full-thickness gap below the lower structure, the upper dissection window is not yet full-thickness and is partially blocked by the instrument shaft. C3: The gallbladder Remains completely attached to the liver bed along its upper/posterior margin, with no exposed cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, and the right-hand instrument shaft blocks the central view.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       56,
       1000,
       545
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       481,
       567,
       919
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       656,
       68,
       827,
       291
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       365,
       496,
       1000,
       867
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 34
    },
    "liver": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.99,
     "hits": 34
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 20
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.98,
     "hits": 34
    },
    "fat": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 31
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 34.0,
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
   "t": 38.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a partial window is dissected and two distinct tubular structures (cystic duct and artery) are not yet isolated or clearly visible entering the gallbladder. C2: One full-thickness window is visible near the bottom, while the upper space is still being dissected by the hook and occluded by the instrument shaft. C3: The gallbladder remains largely attached to the liver bed with the hook actively scoring the peritoneum, and the cystic plate is not fully exposed.",
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
      "name": "abdominal_wall",
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
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still early, and the large shaft of the hook instrument occludes the right side of the operative field.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       492,
       588,
       999
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       298,
       68,
       882,
       372
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       85,
       117,
       988,
       568
      ],
      "confidence": 0.92
     },
     {
      "label": "irrigator",
      "box_2d": [
       296,
       532,
       996,
       999
      ],
      "confidence": 0.89
     },
     {
      "label": "grasper",
      "box_2d": [
       786,
       114,
       989,
       364
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       14,
       439,
       121,
       508
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 34
    },
    "liver": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.99,
     "hits": 34
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 20
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.98,
     "hits": 34
    },
    "fat": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 31
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 38.0,
     "best": 0.95,
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
   "t": 39.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are clearly visible entering the gallbladder. Two clear, full-thickness windows are dissected between the duct and artery and between the artery and the cystic plate, showing the background liver/tissue through them. The lower portion of the gallbladder is dissected away from the liver bed, exposing the whitish fibrous cystic plate above the upper window.",
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
      "name": "cystic_plate",
      "confidence": 0.9
     },
     {
      "name": "liver",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
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
      "box_2d": [
       602,
       62,
       776,
       378
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       593,
       535,
       1000
      ],
      "label": "irrigator",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       42,
       649,
       470
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       137,
       680,
       597
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       158,
       500,
       638,
       769
      ],
      "label": "cystic_plate",
      "confidence": 0.88
     },
     {
      "box_2d": [
       426,
       550,
       618,
       680
      ],
      "label": "hepatocystic_window",
      "confidence": 0.78
     },
     {
      "box_2d": [
       648,
       558,
       830,
       690
      ],
      "label": "cystic_artery",
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 35
    },
    "liver": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.99,
     "hits": 35
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 21
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.98,
     "hits": 35
    },
    "fat": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 31
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 38.0,
     "best": 0.95,
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
   "t": 40.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.65
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. Two windows are dissected between the duct and artery and above the artery, allowing visualization of background tissue. The lower gallbladder is partially elevated off the liver bed exposing the cystic plate, though dissection along the entire inferior margin appears only moderately complete.",
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
      "name": "cystic_plate",
      "confidence": 0.8
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
       342,
       42,
       461,
       298
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       205,
       129,
       404
      ],
      "confidence": 0.75
     },
     {
      "label": "gallbladder",
      "box_2d": [
       22,
       43,
       622,
       477
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       567,
       434,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       637,
       273,
       1000,
       706
      ],
      "confidence": 0.91
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       443,
       178,
       1000,
       927
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       206,
       500,
       354,
       609
      ],
      "confidence": 0.76
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       386,
       482,
       576,
       642
      ],
      "confidence": 0.89
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       426,
       363,
       679
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 36
    },
    "liver": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.99,
     "hits": 36
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 22
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.98,
     "hits": 36
    },
    "fat": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 32
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 38.0,
     "best": 0.95,
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
   "t": 41.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.75
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct and cystic artery) are clearly dissected and seen connecting to the gallbladder. Two full-thickness windows are visible in the hepatocystic triangle, with an instrument placed into the upper window. The lower portion of the gallbladder is dissected away from the liver bed, exposing the cystic plate behind the windows.",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       573,
       674,
       999
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       47,
       513,
       370
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       96,
       732,
       737
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       98,
       451,
       475,
       650
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       463,
       44,
       594,
       336
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       318,
       562,
       999,
       996
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       621,
       296,
       997,
       784
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       517,
       509,
       726,
       645
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
     "best": 0.95,
     "hits": 37
    },
    "liver": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 37
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 23
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.98,
     "hits": 37
    },
    "fat": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 32
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 39.0
    },
    "c2": {
     "on": true,
     "since": 39.0
    },
    "c3": {
     "on": true,
     "since": 39.0
    },
    "cvs": {
     "on": true,
     "since": 39.0
    }
   },
   "events": [
    {
     "what": "c1",
     "on": true,
     "since": 39.0
    },
    {
     "what": "c2",
     "on": true,
     "since": 39.0
    },
    {
     "what": "c3",
     "on": true,
     "since": 39.0
    },
    {
     "what": "cvs",
     "on": true,
     "since": 39.0
    }
   ]
  },
  {
   "t": 42.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are clearly visible entering the gallbladder. C2: There is a clear window between the cystic duct and artery where the liver background is visible, and another window being dissected above the artery showing the cystic plate/liver bed. C3: The lower part of the gallbladder is dissected off the liver bed, exposing the cystic plate behind the upper window.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
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
      "label": "grasper",
      "box_2d": [
       558,
       60,
       706,
       464
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       198,
       631,
       626,
       998
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       290,
       832,
       679
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       43,
       998,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       181,
       559,
       580,
       753
      ],
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 38
    },
    "liver": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 38
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 24
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.98,
     "hits": 38
    },
    "fat": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 32
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 39.0
    },
    "c2": {
     "on": true,
     "since": 39.0
    },
    "c3": {
     "on": true,
     "since": 39.0
    },
    "cvs": {
     "on": true,
     "since": 39.0
    }
   },
   "events": []
  },
  {
   "t": 43.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen running horizontally into the retracted lower gallbladder/infundibulum. C2: Two clear full-thickness windows are dissected through the hepatocystic triangle with dark liver tissue visible in the background through both windows. C3: The upper/superior aspect of the gallbladder neck is still attached to the liver bed where the hook is dissecting, so the cystic plate is not fully exposed.",
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
      "name": "connective_tissue",
      "confidence": 0.9
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
    "reason_if_not": "Cystic plate dissection (C3) is still incomplete.",
    "boxes": [
     {
      "box_2d": [
       669,
       88,
       871,
       485
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       303,
       651,
       796,
       997
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       319,
       998,
       703
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       129,
       998,
       1000
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
     "last": 43.0,
     "best": 0.99,
     "hits": 39
    },
    "liver": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 39
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 25
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.98,
     "hits": 39
    },
    "fat": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 33
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 2
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 39.0
    },
    "c2": {
     "on": true,
     "since": 39.0
    },
    "c3": {
     "on": true,
     "since": 39.0
    },
    "cvs": {
     "on": true,
     "since": 39.0
    }
   },
   "events": []
  },
  {
   "t": 44.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.65,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are visible, though the hook instrument partially obscures the upper aspect and complete circumferential skeletonization into the gallbladder neck is still in progress. C2: A full-thickness window is clearly visible between the lower tubular structure and the upper one, with a second window being actively cleared above by the hook. C3: The lower gallbladder is not yet separated from the liver bed to expose the cystic plate, and the hook instrument obscures the upper attachment.",
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
      "confidence": 0.8
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
    "reason_if_not": "Dissection of the cystic plate and upper hepatocystic triangle is still ongoing, so the full Critical View of Safety is not yet established.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       114,
       1000,
       1000
      ],
      "confidence": 0.99
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       305,
       996,
       908
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       626,
       77,
       819,
       477
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       448,
       656,
       966,
       981
      ],
      "confidence": 0.97
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       550,
       626,
       662,
       693
      ],
      "confidence": 0.65
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
    "liver": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.99,
     "hits": 40
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.98,
     "hits": 40
    },
    "fat": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 34
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 3
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 39.0
    },
    "c2": {
     "on": true,
     "since": 39.0
    },
    "c3": {
     "on": true,
     "since": 39.0
    },
    "cvs": {
     "on": true,
     "since": 39.0
    }
   },
   "events": []
  },
  {
   "t": 45.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are clearly dissected and visible entering the gallbladder; the tissue is still largely covered by peritoneum and fat. C2: There are no full-thickness windows through the hepatocystic triangle, only a small superficial peritoneal incision being made by the hook. C3: The lower part of the gallbladder remains attached to the liver bed with no exposed cystic plate along the inferior margin.",
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
      "confidence": 0.95
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
    "reason_if_not": "Dissection is in the very early stages; the cystic duct, cystic artery, and cystic plate are still covered by fat and peritoneal tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       271,
       994,
       725
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       624,
       737,
       1000
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       376,
       114,
       996,
       455
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       857,
       188,
       1000,
       460
      ],
      "confidence": 0.91
     },
     {
      "label": "irrigator",
      "box_2d": [
       488,
       616,
       997,
       938
      ],
      "confidence": 0.87
     },
     {
      "label": "grasper",
      "box_2d": [
       874,
       618,
       998,
       734
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
     "best": 0.99,
     "hits": 41
    },
    "liver": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.99,
     "hits": 41
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.98,
     "hits": 41
    },
    "fat": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 35
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 4
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 39.0
    },
    "c2": {
     "on": true,
     "since": 39.0
    },
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
   "t": 46.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet dissected out as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still covered in fat and connective tissue with no full-thickness windows visible. C3: The electrocautery hook is actively dissecting the peritoneum along the gallbladder margin, and the lower gallbladder is not yet separated from the cystic plate.",
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
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "smoke",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; tubular structures remain buried in fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       292,
       993,
       709
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       635,
       705,
       1000
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       432,
       640,
       1000,
       990
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       862,
       220,
       1000,
       480
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
     "hits": 41
    },
    "liver": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.99,
     "hits": 41
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.98,
     "hits": 41
    },
    "fat": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 35
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 46.0,
     "best": 0.95,
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
     "on": true,
     "since": 39.0
    },
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
   "t": 47.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible entering the gallbladder; dissection has just begun through the peritoneum and fat. C2: The hepatocystic triangle is filled with intact fat and connective tissue with no full-thickness windows cleared. C3: Only a small initial opening in the peritoneum near the liver bed is present, so the lower gallbladder is not separated to expose the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in a very early stage; the cystic duct and cystic artery are still obscured by peritoneum and adipose tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       1,
       638,
       648,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       347,
       115,
       962,
       459
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       273,
       998,
       930
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       671,
       640,
       1000,
       830
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       823,
       162,
       1000,
       466
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.99,
     "hits": 42
    },
    "liver": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.99,
     "hits": 42
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.98,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 36
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 5
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
     "what": "c2",
     "on": false
    }
   ]
  },
  {
   "t": 48.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1 is not achieved as the hepatocystic triangle is mostly undissected and no distinct tubular structures are visible entering the gallbladder. C2 is not achieved because only a small superficial incision has been made in the peritoneum, with no full-thickness windows through the triangle. C3 is not achieved as the gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "name": "abdominal_wall",
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper",
     "hook",
     "irrigator"
    ],
    "clip_applier_visible": false,
    "view_quality": "smoke",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun, leaving the cystic duct and artery obscured by overlying fat and peritoneum.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       303,
       989,
       750
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       637,
       370,
       1000
      ],
      "confidence": 0.92
     },
     {
      "label": "irrigator",
      "box_2d": [
       447,
       626,
       996,
       964
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       845,
       222,
       1000,
       483
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 42
    },
    "liver": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 42
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.98,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 36
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 5
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
     "c3": 0.05
    },
    "cvs_evidence": "C1: A clipped structure is partially visible at the bottom, and the artery or peritoneum is being dissected above, so two clear tubular structures connected to the gallbladder are not yet fully delineated. C2: The hepatocystic triangle still contains intact connective tissue and peritoneum, without two full-thickness windows visible. C3: The gallbladder remains largely attached to the liver bed with no exposed cystic plate along its inferior margin.",
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
      "name": "abdominal_wall",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, preventing confirmation of the two tubular structures and cleared windows.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       641,
       689,
       998
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       368,
       127,
       993,
       481
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       12,
       303,
       989,
       714
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       442,
       669,
       976,
       991
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       858,
       243,
       998,
       484
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 43
    },
    "liver": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 43
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.98,
     "hits": 43
    },
    "fat": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 37
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 49.0,
     "best": 0.95,
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
   "t": 50.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1 is not achieved because the cystic duct and cystic artery are not yet dissected out as distinct tubular structures entering the gallbladder. C2 is not achieved as the hepatocystic triangle is still covered in fat and connective tissue without clear full-thickness windows. C3 is not achieved because the lower gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; tubular structures and the cystic plate are still embedded in peritoneum and fat.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       499,
       541,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       337,
       114,
       967,
       469
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       9,
       288,
       997,
       725
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       361,
       620,
       997,
       998
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       824,
       167,
       998,
       481
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.99,
     "hits": 44
    },
    "liver": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.99,
     "hits": 44
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.98,
     "hits": 44
    },
    "fat": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 38
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 7
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No tubular structures (cystic duct or artery) are clearly dissected out as separate tubular entities entering the gallbladder. C2: The hepatocystic triangle is still covered in peritoneal and connective tissue, with only a superficial cautery opening and no full-thickness windows visible. C3: The inferior margin of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
      "name": "connective_tissue",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; the cystic duct and cystic artery remain embedded in fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       286,
       992,
       794
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       646,
       604,
       998
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       316,
       125,
       942,
       472
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       412,
       672,
       993,
       998
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       798,
       143,
       998,
       487
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.99,
     "hits": 45
    },
    "liver": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.99,
     "hits": 45
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.98,
     "hits": 45
    },
    "fat": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 39
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 51.0,
     "best": 0.95,
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
   "t": 52.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not yet clearly isolated, as fat and connective tissue still obscure the hepatocystic triangle. C2: There is one small window below where background liver is seen, and an upper area currently being dissected by the hook that is not yet a full-thickness window. C3: The lower part of the gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.7
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and the cystic duct and artery are not yet fully skeletonized.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       640,
       792,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       311,
       116,
       917,
       463
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       271,
       998,
       869
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       786,
       132,
       998,
       471
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       436,
       647,
       1000,
       978
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.99,
     "hits": 46
    },
    "liver": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.99,
     "hits": 46
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 27
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.98,
     "hits": 46
    },
    "fat": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 40
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 9
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
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly seen entering the gallbladder neck. C2: The hepatocystic triangle is well cleared with two windows visible between the duct, artery, and cystic plate. C3: The lower part of the gallbladder is detached from the liver bed, exposing the whitish cystic plate behind it.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.95
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
      "name": "abdominal_wall",
      "confidence": 0.95
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
       281,
       993,
       936
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       348,
       126,
       957,
       463
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       639,
       238,
       994
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       811,
       157,
       998,
       477
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       211,
       646,
       663,
       999
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.99,
     "hits": 47
    },
    "liver": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.99,
     "hits": 47
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 28
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.98,
     "hits": 47
    },
    "fat": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 40
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 10
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
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.75
    },
    "cvs_evidence": "C1: One clear tubular structure (likely cystic duct) is visible at the bottom right, while a second thinner structure above it is only partially dissected and not fully defined as a distinct tubular structure entering the gallbladder. C2: There is one small window below the upper structure, but the hepatocystic triangle is not sufficiently cleared to show two full-thickness windows. C3: The lower part of the gallbladder is dissected away from the liver bed, exposing a broad area of the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.85
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; two distinct tubular structures entering the gallbladder and full-thickness windows are not yet clearly established.",
    "boxes": [
     {
      "box_2d": [
       0,
       303,
       994,
       698
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       338,
       136,
       979,
       483
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       650,
       253,
       999
      ],
      "label": "liver",
      "confidence": 0.85
     },
     {
      "box_2d": [
       218,
       679,
       592,
       1000
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       814,
       152,
       1000,
       497
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
     "last": 54.0,
     "best": 0.99,
     "hits": 48
    },
    "liver": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.99,
     "hits": 48
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 29
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.98,
     "hits": 48
    },
    "fat": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 41
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 54.0,
     "best": 0.95,
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
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or cystic artery) are clearly defined and seen entering the gallbladder yet. C2: The hepatocystic triangle is still covered in fat and connective tissue with no full-thickness windows created. C3: The gallbladder has not been elevated off the liver bed to expose the cystic plate; the hook is just beginning the dissection.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the cystic duct and cystic artery are still obscured by peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       209,
       1000,
       875
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       638,
       492,
       1000
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       334,
       120,
       956,
       442
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       347,
       672,
       873,
       1000
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       823,
       147,
       999,
       439
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.99,
     "hits": 49
    },
    "liver": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.99,
     "hits": 49
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 29
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.98,
     "hits": 49
    },
    "fat": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 42
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 55.0,
     "best": 0.95,
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
   "t": 56.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are clearly dissected and visible entering the gallbladder. C2: The hepatocystic triangle is still covered in fat and connective tissue with only superficial cauterization and no full-thickness windows. C3: The gallbladder remains largely attached to the liver bed with only a small area of connective tissue opened, not exposing the full inferior cystic plate.",
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
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
    "reason_if_not": "Dissection is at a very early stage; the cystic duct and cystic artery are not yet isolated from the surrounding fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       152,
       998,
       706
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       614,
       572,
       997
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       355,
       115,
       928,
       410
      ],
      "confidence": 0.8
     },
     {
      "label": "grasper",
      "box_2d": [
       837,
       140,
       987,
       375
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       342,
       639,
       912,
       1000
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.99,
     "hits": 50
    },
    "liver": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.99,
     "hits": 50
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 29
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.98,
     "hits": 50
    },
    "fat": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 43
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 56.0,
     "best": 0.95,
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
   "t": 57.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet dissected into two distinct tubular structures entering the gallbladder. C2: There are no full-thickness windows cleared through the hepatocystic triangle, only superficial peritoneal scoring. C3: The lower gallbladder is still broadly attached to the liver bed without full exposure of the cystic plate.",
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage and critical structures remain covered by fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       609,
       693,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       44,
       915,
       521
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       152,
       994,
       660
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       840,
       140,
       998,
       373
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       353,
       567,
       1000,
       979
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       886,
       531,
       999,
       712
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
     "hits": 51
    },
    "liver": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.99,
     "hits": 51
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 29
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.98,
     "hits": 51
    },
    "fat": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 44
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 14
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
     "c2": 0.1,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Only the cystic duct or a single lower bundle is partially delineated at the bottom of the frame, without two distinct tubular structures clearly entering the gallbladder. C2: There is one small window visible at the bottom where a clip is present, while the upper tissue is fibrous and continuous without a second full-thickness window between duct and artery. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing a wide triangular area of the cystic plate.",
    "phase": "gallbladder_dissection",
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
      "name": "cystic_plate",
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
      "name": "hepatocystic_window",
      "confidence": 0.7
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
    "reason_if_not": "Two distinct tubular structures (cystic duct and cystic artery) and their respective windows are not clearly visible in this view, which focuses on dissecting the gallbladder off the cystic plate.",
    "boxes": [
     {
      "box_2d": [
       0,
       189,
       990,
       627
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       615,
       238,
       996
      ],
      "label": "liver",
      "confidence": 0.9
     },
     {
      "box_2d": [
       393,
       146,
       977,
       428
      ],
      "label": "liver",
      "confidence": 0.88
     },
     {
      "box_2d": [
       869,
       158,
       997,
       401
      ],
      "label": "grasper",
      "confidence": 0.94
     },
     {
      "box_2d": [
       193,
       608,
       735,
       999
      ],
      "label": "irrigator",
      "confidence": 0.87
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.99,
     "hits": 52
    },
    "liver": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.99,
     "hits": 52
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 20
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 30
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.98,
     "hits": 52
    },
    "fat": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 44
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 15
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
     "c3": 0.75
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not seen as two distinct tubular structures entering the gallbladder in this view. C2: Full-thickness hepatocystic windows between the cystic duct and artery are not visible. C3: The lower part of the gallbladder is being dissected away from the liver bed, exposing a broad area of the fibrous cystic plate.",
    "phase": "gallbladder_dissection",
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
      "name": "cystic_plate",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "abdominal_wall",
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
    "reason_if_not": "The hepatocystic triangle and its tubular structures (cystic duct and artery) are not clearly isolated or visible in this view.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       631,
       885,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       384,
       133,
       998,
       442
      ],
      "confidence": 0.93
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       221,
       1000,
       715
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       334,
       520,
       900,
       754
      ],
      "confidence": 0.8
     },
     {
      "label": "hook",
      "box_2d": [
       117,
       639,
       582,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       879,
       185,
       1000,
       420
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 53
    },
    "liver": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 53
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 21
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 30
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.98,
     "hits": 53
    },
    "fat": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 44
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 16
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
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.7
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not clearly isolated and visible. C2: While there is a small opening at the bottom of the dissection plane, full-thickness windows clearing the hepatocystic triangle are not yet achieved. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing a broad area of the cystic plate.",
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
      "name": "cystic_plate",
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
      "name": "hepatocystic_window",
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
    "reason_if_not": "The cystic duct and cystic artery are not yet clearly isolated from the surrounding connective tissue in the hepatocystic triangle.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       238,
       592,
       881,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       838,
       142,
       996,
       386
      ],
      "confidence": 0.93
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       188,
       1000,
       642
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       624,
       337,
       1000
      ],
      "confidence": 0.91
     },
     {
      "label": "liver",
      "box_2d": [
       354,
       119,
       937,
       423
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       316,
       497,
       865,
       785
      ],
      "confidence": 0.62
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.99,
     "hits": 54
    },
    "liver": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.99,
     "hits": 54
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 22
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 30
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.98,
     "hits": 54
    },
    "fat": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 45
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 17
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
     "since": 58.0
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
     "since": 58.0
    }
   ]
  },
  {
   "t": 61.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still covered in connective tissue and fat, with no full-thickness windows visible. C3: Dissection of the peritoneum along the liver bed has just begun with the hook, so the lower gallbladder is not yet separated to expose the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
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
    "reason_if_not": "Early stage of dissection; the hepatocystic triangle is still filled with connective tissue and fat, obscuring the cystic duct and artery.",
    "boxes": [
     {
      "box_2d": [
       0,
       186,
       993,
       671
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       621,
       584,
       1000
      ],
      "label": "liver",
      "confidence": 0.93
     },
     {
      "box_2d": [
       346,
       124,
       934,
       419
      ],
      "label": "liver",
      "confidence": 0.85
     },
     {
      "box_2d": [
       323,
       611,
       978,
       997
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       834,
       137,
       991,
       386
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
     "last": 61.0,
     "best": 0.99,
     "hits": 55
    },
    "liver": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.99,
     "hits": 55
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 22
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 30
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.98,
     "hits": 55
    },
    "fat": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 46
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 18
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
     "since": 58.0
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
     "c1": 0.15,
     "c2": 0.2,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not clearly skeletonized and seen entering the gallbladder at the bottom of the frame. C2: There is one small window at the bottom, and the cystic plate is exposed above, but two clear full-thickness windows between duct and artery are not completely formed. C3: A large area of the cystic plate is exposed on the liver bed where the lower gallbladder has been dissected off.",
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
      "name": "cystic_plate",
      "confidence": 0.9
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
      "name": "abdominal_wall",
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper",
     "irrigator"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Cystic duct and cystic artery are not yet fully skeletonized as two distinct tubular structures.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       46,
       991,
       631
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       608,
       300,
       1000
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       333,
       100,
       895,
       407
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       809,
       131,
       998,
       381
      ],
      "confidence": 0.94
     },
     {
      "label": "irrigator",
      "box_2d": [
       223,
       580,
       857,
       1000
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 56
    },
    "liver": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 56
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 23
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 31
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.98,
     "hits": 56
    },
    "fat": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 46
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 19
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
     "since": 58.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet clearly skeletonized; only some small vessel-like structures are visible within the connective tissue near the base. C2: There is one small window at the very bottom, not two full-thickness windows clearing the hepatocystic triangle between duct, artery, and cystic plate. C3: A large area of connective tissue on the cystic plate is exposed as the gallbladder is lifted up, though complete separation of the lower third alongside clearly defined duct and artery is not fully established.",
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
      "name": "cystic_plate",
      "confidence": 0.85
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
    "reason_if_not": "The cystic duct and cystic artery are not yet distinctly dissected and isolated as two separate tubular structures.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       0,
       580,
       376,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       878,
       172,
       1000,
       408
      ],
      "confidence": 0.9
     },
     {
      "label": "liver",
      "box_2d": [
       404,
       137,
       989,
       440
      ],
      "confidence": 0.85
     },
     {
      "label": "liver",
      "box_2d": [
       206,
       629,
       725,
       1000
      ],
      "confidence": 0.8
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       218,
       1000,
       995
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
    "liver": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.99,
     "hits": 57
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 31
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.98,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 46
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 20
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
     "since": 58.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still covered with fat and connective tissue, with only superficial cauterization and no full-thickness windows visible. C3: While a plane is starting to be opened along the liver bed, the lower part of the gallbladder is not yet fully separated from the cystic plate.",
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
      "name": "abdominal_wall",
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
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; tubular structures are obscured by overlying fat and peritoneum.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       628,
       854,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       399,
       137,
       994,
       437
      ],
      "confidence": 0.9
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       217,
       1000,
       946
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       195,
       512,
       898,
       717
      ],
      "confidence": 0.8
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       642,
       184,
       993
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       878,
       172,
       1000,
       411
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 58
    },
    "liver": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 31
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.98,
     "hits": 58
    },
    "fat": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 47
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 21
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
     "since": 58.0
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
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Only one clear tubular structure (likely the cystic duct at the bottom) is somewhat delineated, while the upper tissue is still being dissected by the hook and does not show a second distinct tubular structure. C2: There is one full-thickness window visible at the bottom, but the upper hepatocystic triangle is still filled with connective tissue being dissected, so a second window is not yet achieved. C3: The cystic plate is partially exposed in the center where the hook is working, though the dissection of the lower gallbladder off the liver bed is still in progress.",
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
      "name": "cystic_plate",
      "confidence": 0.8
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not yet clearly isolated from the surrounding connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       633,
       648,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       334,
       106,
       946,
       432
      ],
      "confidence": 0.89
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       207,
       1000,
       749
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       376,
       608,
       998,
       993
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       824,
       137,
       997,
       411
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       128,
       516,
       848,
       704
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.99,
     "hits": 59
    },
    "liver": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.99,
     "hits": 59
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 25
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 32
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.98,
     "hits": 59
    },
    "fat": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 48
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 22
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
  },
  {
   "t": 66.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are clearly dissected and visible entering the gallbladder yet. C2: The hepatocystic triangle is still filled with connective tissue and fat, with no full-thickness windows present. C3: Only the very beginning of the peritoneum and connective tissue over the cystic plate is being scored, so the lower gallbladder is not separated from the liver bed.",
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
    "reason_if_not": "Dissection is in the very early stages; the cystic duct, cystic artery, and cystic plate have not been cleared of overlying peritoneum and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       52,
       1000,
       626
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       631,
       645,
       1000
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       348,
       117,
       960,
       439
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       624,
       632,
       1000,
       856
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       837,
       155,
       1000,
       420
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
     "last": 66.0,
     "best": 0.99,
     "hits": 60
    },
    "liver": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.99,
     "hits": 60
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 25
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 32
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.98,
     "hits": 60
    },
    "fat": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 49
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 23
    },
    "blood": {
     "first": 66.0,
     "last": 66.0,
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
   "t": 67.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Tubular structures are not clearly skeletonized and isolated entering the gallbladder. C2: The hepatocystic triangle is still filled with connective tissue without full-thickness windows through to the background. C3: While some dissection of the cystic plate is underway with the hook, the lower third of the gallbladder is not yet fully mobilized off the liver bed.",
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
      "name": "cystic_plate",
      "confidence": 0.75
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; cystic duct and artery are not yet clearly isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       252,
       983,
       677
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       639,
       763,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       358,
       137,
       977,
       452
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       837,
       153,
       998,
       437
      ],
      "confidence": 0.94
     },
     {
      "label": "irrigator",
      "box_2d": [
       280,
       656,
       757,
       1000
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       263,
       582,
       535,
       670
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 61
    },
    "liver": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 61
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 26
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 32
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.98,
     "hits": 61
    },
    "fat": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 50
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 24
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 68.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.15,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are visible at the base entering the gallbladder, with a window between them. C2: While there is a full-thickness window between the duct and artery at the bottom, the upper window between the artery and the cystic plate is only partially dissected and does not yet show background tissue through it. C3: The gallbladder is being dissected off the liver bed using the hook, exposing part of the cystic plate, but separation along the entire inferior margin is incomplete.",
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
    "reason_if_not": "The hepatocystic triangle is not completely cleared and the lower gallbladder is not fully separated from the cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       252,
       990,
       706
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       651,
       358,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       363,
       142,
       978,
       469
      ],
      "confidence": 0.94
     },
     {
      "label": "irrigator",
      "box_2d": [
       311,
       679,
       785,
       1000
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       841,
       163,
       998,
       438
      ],
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
     "hits": 62
    },
    "liver": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.99,
     "hits": 62
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.98,
     "hits": 62
    },
    "fat": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 50
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 25
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 69.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Neither the cystic duct nor the cystic artery is clearly skeletonized into distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is filled with undissected connective tissue and lacks full-thickness windows. C3: Only the very beginning of the cystic plate dissection is visible, and the lower part of the gallbladder remains attached to the liver bed.",
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
    "reason_if_not": "The hepatocystic triangle is still covered in connective tissue and neither the cystic duct nor the cystic artery has been isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       42,
       936,
       427
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       618,
       998,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       144,
       1000,
       885
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       650,
       614,
       1000,
       808
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       858,
       143,
       998,
       368
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 63
    },
    "liver": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 63
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.98,
     "hits": 63
    },
    "fat": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 51
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 70.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.1
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder yet. C2: The hepatocystic triangle is still filled with undisturbed connective tissue and fat, with no full-thickness windows present. C3: Early dissection of the peritoneum along the liver bed has just begun with the hook, so the lower gallbladder is not yet separated to expose the cystic plate.",
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
    "reason_if_not": "Dissection is in a very early stage; the cystic duct and cystic artery are still embedded within the fat and connective tissue of the hepatocystic triangle.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       624,
       674,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       353,
       126,
       938,
       408
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       169,
       998,
       989
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       186,
       495,
       864,
       765
      ],
      "confidence": 0.75
     },
     {
      "label": "hook",
      "box_2d": [
       643,
       574,
       1000,
       737
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       850,
       142,
       999,
       381
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.99,
     "hits": 64
    },
    "liver": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.99,
     "hits": 64
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 64
    },
    "fat": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 52
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 27
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 71.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet dissected or clearly visible. C2: The hepatocystic triangle is still covered with connective tissue and fat, with only superficial scoring by the hook and no full-thickness windows. C3: The lower part of the gallbladder remains attached to the liver bed with the peritoneum only partially incised.",
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
      "name": "abdominal_wall",
      "confidence": 0.98
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery remain obscured by overlying peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       224,
       992,
       747
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       489,
       691,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       384,
       137,
       988,
       442
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       442,
       646,
       996,
       990
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       877,
       169,
       998,
       417
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.99,
     "hits": 65
    },
    "liver": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.99,
     "hits": 65
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.98,
     "hits": 65
    },
    "fat": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 53
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 71.0,
     "best": 0.98,
     "hits": 28
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 72.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are still covered in connective tissue and are not distinctly isolated as two separate tubular structures entering the gallbladder. C2: The hepatocystic triangle is filled with connective tissue and fat, with no full-thickness windows visible through to the background. C3: While electrocautery is beginning to score the peritoneal reflection along the liver bed, the lower third of the gallbladder is not yet detached to expose the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still in an early stage; tubular structures are obscured by connective tissue and fat.",
    "boxes": [
     {
      "box_2d": [
       0,
       202,
       1000,
       843
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       636,
       762,
       1000
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       568,
       723,
       1000,
       960
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       846,
       144,
       996,
       401
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
     "last": 72.0,
     "best": 0.99,
     "hits": 66
    },
    "liver": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.99,
     "hits": 66
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.98,
     "hits": 66
    },
    "fat": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 54
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 72.0,
     "best": 0.98,
     "hits": 29
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 73.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are still embedded in connective tissue and are not distinctly isolated as two separate tubular structures entering the gallbladder. C2: The hepatocystic triangle is filled with undissected fibrous and fatty tissue, with no full-thickness windows visible. C3: Only the very beginning of the peritoneum is incised, and the lower gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
      "name": "cystic_artery",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; tubular structures are still covered by connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       203,
       993,
       971
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       638,
       706,
       1000
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       357,
       138,
       955,
       436
      ],
      "label": "liver",
      "confidence": 0.88
     },
     {
      "box_2d": [
       784,
       637,
       998,
       752
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       856,
       148,
       997,
       399
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       744,
       583,
       843,
       680
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
     "last": 73.0,
     "best": 0.99,
     "hits": 67
    },
    "liver": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.99,
     "hits": 67
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.98,
     "hits": 67
    },
    "fat": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 55
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 73.0,
     "best": 0.98,
     "hits": 30
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 74.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.65
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly visible as two distinct tubular structures entering the gallbladder. C2: There are no full-thickness windows cleared through the hepatocystic triangle, as dense connective tissue still bridges the space. C3: A significant portion of the cystic plate is exposed on the liver bed where the lower gallbladder has been dissected off, though the very base is still being worked on.",
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
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
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
    "reason_if_not": "The hepatocystic triangle is still covered in connective tissue and the cystic duct and artery have not been fully dissected into distinct tubular structures with clear windows.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       627,
       727,
       1000
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       367,
       137,
       977,
       428
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       198,
       1000,
       934
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       864,
       156,
       1000,
       399
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       768,
       652,
       998,
       815
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.99,
     "hits": 68
    },
    "liver": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.99,
     "hits": 68
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.98,
     "hits": 68
    },
    "fat": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 55
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 74.0,
     "best": 0.98,
     "hits": 31
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 75.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is in an early stage and no distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder. C2: The hepatocystic triangle is still filled with connective tissue and fat, with no full-thickness windows present. C3: Only the superficial peritoneum and a small portion of connective tissue near the liver bed are incised, so the lower gallbladder is not separated to expose the full cystic plate.",
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
    "reason_if_not": "The hepatocystic triangle has not been cleared of fat and connective tissue to isolate the cystic duct and artery.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       635,
       997,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       339,
       131,
       937,
       432
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       222,
       998,
       937
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       837,
       150,
       996,
       411
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       664,
       629,
       998,
       842
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
     "hits": 69
    },
    "liver": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.99,
     "hits": 69
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.98,
     "hits": 69
    },
    "fat": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 56
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 75.0,
     "best": 0.98,
     "hits": 32
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 76.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.55
    },
    "cvs_evidence": "C1: No isolated tubular cystic duct or cystic artery structures are visible in this posterior/inferior view. C2: No full-thickness windows through the hepatocystic triangle are visible. C3: The electrocautery hook is actively dissecting the lower part of the gallbladder off the liver bed, exposing a broad area of the fibrous cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.92
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
    "reason_if_not": "The cystic duct and cystic artery are not yet isolated or visible from this angle while the cystic plate is being dissected.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       819,
       136,
       1000,
       397
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       650,
       602,
       1000,
       788
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       633,
       628,
       1000
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       331,
       118,
       929,
       417
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       195,
       1000,
       976
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       108,
       497,
       411,
       670
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.99,
     "hits": 70
    },
    "liver": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.99,
     "hits": 70
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 29
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.98,
     "hits": 70
    },
    "fat": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 57
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 76.0,
     "best": 0.98,
     "hits": 33
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 77.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder. C2: The hepatocystic triangle is well cleared with two distinct full-thickness windows visible between the duct, artery, and cystic plate. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing a wide area of the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.95
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       628,
       824,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       304,
       115,
       884,
       413
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       784,
       118,
       991,
       385
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       761,
       668,
       997,
       792
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       90,
       489,
       781,
       718
      ],
      "confidence": 0.75
     },
     {
      "label": "gallbladder",
      "box_2d": [
       79,
       184,
       995,
       962
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.99,
     "hits": 71
    },
    "liver": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.99,
     "hits": 71
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 30
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 34
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.98,
     "hits": 71
    },
    "fat": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 58
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 77.0,
     "best": 0.98,
     "hits": 34
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 78.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder. C2: A clear full-thickness window is visible between the two structures with the liver background seen through it, and the space above the artery to the cystic plate is dissected. C3: The lower portion of the gallbladder is dissected away from the liver bed, clearly exposing the whitish cystic plate above.",
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
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       46,
       739,
       458
      ]
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       688,
       442,
       1000
      ]
     },
     {
      "label": "liver",
      "box_2d": [
       833,
       131,
       998,
       688
      ]
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       206,
       928,
       999
      ]
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       502,
       606,
       727
      ]
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       611,
       582,
       757,
       707
      ]
     },
     {
      "label": "hook",
      "box_2d": [
       566,
       680,
       997,
       930
      ]
     },
     {
      "label": "grasper",
      "box_2d": [
       609,
       74,
       820,
       407
      ]
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.99,
     "hits": 72
    },
    "liver": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.99,
     "hits": 72
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 31
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 35
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 72
    },
    "fat": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 58
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 77.0,
     "best": 0.98,
     "hits": 34
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
     "on": true,
     "since": 76.0
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
     "since": 76.0
    }
   ]
  },
  {
   "t": 79.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.85
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and an upper strand/tubular structure are visible running toward the gallbladder neck, though the hook partially obscures the upper aspect. C2: A clear full-thickness window is visible below the upper structure showing dark liver background, though the upper window above the artery is still being dissected by the hook. C3: The lower portion of the gallbladder has been mobilized off the liver bed, exposing a broad area of connective tissue on the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.8
     },
     {
      "name": "cystic_artery",
      "confidence": 0.6
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
    "can_confirm_anatomy": false,
    "reason_if_not": "The electrocautery hook is actively dissecting the upper window and partially occludes full visualization of the second tubular structure.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       562,
       60,
       759,
       400
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       313,
       609,
       1000,
       1000
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       192,
       805,
       542
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       566,
       380,
       990,
       868
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       573,
       580,
       727,
       733
      ],
      "confidence": 0.82
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       501,
       558,
       753
      ],
      "confidence": 0.77
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       679,
       528,
       1000
      ],
      "confidence": 0.85
     },
     {
      "label": "liver",
      "box_2d": [
       785,
       138,
       1000,
       802
      ],
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.99,
     "hits": 73
    },
    "liver": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.99,
     "hits": 73
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 32
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 36
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.98,
     "hits": 73
    },
    "fat": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 58
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 77.0,
     "best": 0.98,
     "hits": 34
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 76.0
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
     "since": 77.0
    }
   ]
  },
  {
   "t": 80.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.75
    },
    "cvs_evidence": "C1: The cystic duct is clearly delineated along the bottom edge and a second thinner vascular structure (cystic artery) is visible superior to the window, though connective tissue still partially obscures its full tubular profile. C2: A clear full-thickness window showing dark liver background is open between the cystic duct and cystic artery, while the upper space toward the cystic plate is still being cleared by the hook. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing a broad area of whitish-yellow cystic plate above the hook.",
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
      "confidence": 0.8
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
      "confidence": 0.95
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       504,
       52,
       705,
       471
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       404,
       726,
       874,
       998
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       271,
       552,
       998
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       57,
       120,
       1000,
       869
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       602,
       280,
       998,
       953
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       566,
       653,
       714,
       806
      ],
      "confidence": 0.83
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.99,
     "hits": 74
    },
    "liver": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.99,
     "hits": 74
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 33
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 37
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.98,
     "hits": 74
    },
    "fat": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 59
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 80.0,
     "best": 0.98,
     "hits": 35
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 76.0
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
     "c2": 0.45,
     "c3": 0.7
    },
    "cvs_evidence": "C1: A lower tubular band (cystic duct) and an upper thin vessel (cystic artery) are becoming distinct near the hook, though fat remains between them. C2: One full-thickness window is clearly visible beneath the upper structure showing dark liver background, while the second window is still obscured by connective tissue. C3: The lower third of the gallbladder is dissected away from the liver bed, exposing the whitish fibrous cystic plate above the hook.",
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
      "name": "cystic_plate",
      "confidence": 0.9
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
      "name": "cystic_artery",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Remaining adipose and connective tissue between the cystic duct and artery prevents full clearance of the hepatocystic triangle.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       49,
       140,
       999,
       883
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       340,
       564,
       990
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       527,
       54,
       778,
       528
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       504,
       794,
       853,
       992
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       633,
       344,
       966,
       953
      ],
      "confidence": 0.91
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       611,
       715,
       739,
       852
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.99,
     "hits": 75
    },
    "liver": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.99,
     "hits": 75
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 34
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 38
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.98,
     "hits": 75
    },
    "fat": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 60
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 81.0,
     "best": 0.98,
     "hits": 36
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 76.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only one tubular-like structure along the inferior margin is partially dissected, while the rest of the hepatocystic triangle remains covered in connective tissue, so two distinct tubular structures entering the gallbladder are not yet visible. C2: There are no full-thickness windows cleared through the hepatocystic triangle; dense connective tissue still bridges the space. C3: Although some dissection has begun along the liver bed with the hook, the lower part of the gallbladder is not yet separated to expose the cystic plate along the entire inferior margin.",
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
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.95
     },
     {
      "name": "cystic_duct",
      "confidence": 0.55
     },
     {
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; connective tissue still obscures the cystic artery and prevents full visualization of the two tubular structures and the cystic plate.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       550,
       62,
       822,
       521
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       378,
       695,
       905,
       999
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       644,
       555,
       998
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       329,
       621,
       695
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       662,
       345,
       949,
       941
      ],
      "confidence": 0.86
     },
     {
      "label": "liver",
      "box_2d": [
       75,
       148,
       1000,
       584
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.99,
     "hits": 76
    },
    "liver": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.99,
     "hits": 76
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 34
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 38
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.98,
     "hits": 76
    },
    "fat": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 61
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 82.0,
     "best": 0.98,
     "hits": 37
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 76.0
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
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. C2: There is a full-thickness window visible between the cystic duct and cystic artery showing liver behind, though the upper window between the artery and cystic plate is still being dissected with the hook and has connective tissue remaining. C3: The lower portion of the gallbladder is dissected off the liver bed exposing the cystic plate, where the hook is currently working.",
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
      "name": "cystic_plate",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       112,
       152,
       1000,
       549
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       591,
       71,
       840,
       489
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       171,
       715,
       451,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       298,
       841,
       631
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.99,
     "hits": 77
    },
    "liver": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.99,
     "hits": 77
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 36
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 35
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.98,
     "hits": 77
    },
    "fat": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 61
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 83.0,
     "best": 0.98,
     "hits": 38
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 76.0
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
     "c2": 0.65,
     "c3": 0.85
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. A clear full-thickness window is visible between the duct and artery, while the hook is dissecting the space above the artery against the cystic plate. The lower part of the gallbladder is dissected off the liver bed, clearly exposing the whitish cystic plate.",
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
      "confidence": 0.88
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
      "confidence": 0.95
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       572,
       62,
       807,
       489
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       458,
       767,
       835,
       998
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       611,
       670,
       768,
       819
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       604,
       577,
       872
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       684,
       314,
       995,
       934
      ],
      "confidence": 0.77
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       288,
       833,
       647
      ],
      "confidence": 0.9
     },
     {
      "label": "liver",
      "box_2d": [
       89,
       124,
       996,
       501
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       781,
       539,
       1000
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.99,
     "hits": 78
    },
    "liver": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.99,
     "hits": 78
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 36
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.98,
     "hits": 78
    },
    "fat": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 62
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 84.0,
     "best": 0.98,
     "hits": 39
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 76.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures, the thicker cystic duct inferiorly and thinner cystic artery superiorly, are clearly seen entering the gallbladder. C2: Two full-thickness windows are visible with liver parenchyma seen through the lower window and the cleared cystic plate above the artery. C3: The lower part of the gallbladder has been mobilized off the liver bed, exposing a broad area of the cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
      "confidence": 0.92
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "connective_tissue",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       567,
       68,
       818,
       515
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       574,
       804,
       848,
       998
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       312,
       606,
       676
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       621,
       603,
       995
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       98,
       137,
       1000,
       526
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       561,
       652,
       630,
       842
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       617,
       695,
       775,
       844
      ],
      "confidence": 0.86
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       699,
       521,
       997,
       952
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.99,
     "hits": 79
    },
    "liver": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.99,
     "hits": 79
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 37
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 41
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 79
    },
    "fat": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 63
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 76.0
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
     "c1": 0.85,
     "c2": 0.8,
     "c3": 0.8
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen running horizontally into the gallbladder neck. C2: Two windows are dissected between the duct, artery, and cystic plate with the liver background visible through them and the hook passing through the lower window. C3: The lower third of the gallbladder is dissected off the liver bed, exposing a wide area of the cystic plate above the artery.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.9
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
       60,
       1000,
       995
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       619,
       567,
       993
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       194,
       829,
       746
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       379,
       44,
       630,
       473
      ],
      "confidence": 0.99
     },
     {
      "label": "hook",
      "box_2d": [
       564,
       818,
       913,
       994
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.99,
     "hits": 80
    },
    "liver": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.99,
     "hits": 80
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 36
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 38
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.98,
     "hits": 80
    },
    "fat": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 64
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": true,
     "since": 84.0
    },
    "c3": {
     "on": true,
     "since": 76.0
    },
    "cvs": {
     "on": true,
     "since": 84.0
    }
   },
   "events": [
    {
     "what": "c2",
     "on": true,
     "since": 84.0
    },
    {
     "what": "cvs",
     "on": true,
     "since": 84.0
    }
   ]
  },
  {
   "t": 87.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder. C2: Two windows are dissected between the duct, artery, and cystic plate, with the hook demonstrating the lower window and liver visible through the upper window. C3: The lower part of the gallbladder is dissected off the liver bed, clearly exposing the whitish cystic plate above the cystic artery.",
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
      "confidence": 0.92
     },
     {
      "name": "cystic_plate",
      "confidence": 0.95
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
       699,
       519,
       1000,
       653
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       513,
       64,
       764,
       387
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       137,
       884,
       578
      ],
      "label": "gallbladder",
      "confidence": 0.9
     },
     {
      "box_2d": [
       0,
       574,
       421,
       1000
      ],
      "label": "liver",
      "confidence": 0.85
     },
     {
      "box_2d": [
       0,
       519,
       580,
       808
      ],
      "label": "cystic_plate",
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.99,
     "hits": 81
    },
    "liver": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.99,
     "hits": 81
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 40
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 39
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 43
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.98,
     "hits": 81
    },
    "fat": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 65
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": true,
     "since": 84.0
    },
    "c3": {
     "on": true,
     "since": 76.0
    },
    "cvs": {
     "on": true,
     "since": 84.0
    }
   },
   "events": []
  },
  {
   "t": 88.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.85,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. C2: Two full-thickness windows are visible\u2014one above the artery showing the cystic plate, and one between the artery and duct with the hook passed into it showing background liver. C3: The lower third of the gallbladder is dissected off the liver bed, clearly exposing the whitish-yellow cystic plate above the artery.",
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
      "confidence": 0.92
     },
     {
      "name": "cystic_plate",
      "confidence": 0.95
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
      "confidence": 0.75
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
      "label": "grasper",
      "box_2d": [
       485,
       57,
       729,
       402
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       647,
       633,
       997,
       899
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       150,
       920,
       689
      ],
      "confidence": 0.9
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       579,
       440,
       1000
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       526,
       570,
       859
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.99,
     "hits": 82
    },
    "liver": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.99,
     "hits": 82
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 40
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 44
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.98,
     "hits": 82
    },
    "fat": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 66
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": true,
     "since": 84.0
    },
    "c3": {
     "on": true,
     "since": 76.0
    },
    "cvs": {
     "on": true,
     "since": 84.0
    }
   },
   "events": []
  },
  {
   "t": 89.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder. C2: Two windows are dissected between the duct, artery, and cystic plate, showing the background liver through the lower window and deep tissue in the upper window. C3: The lower third of the gallbladder is dissected off the liver bed, exposing the cystic plate above the upper window.",
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
      "name": "cystic_plate",
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
      "label": "grasper",
      "box_2d": [
       380,
       44,
       650,
       419
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       136,
       788,
       593
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       648,
       584,
       1000
      ],
      "confidence": 0.91
     },
     {
      "label": "liver",
      "box_2d": [
       662,
       77,
       1000,
       720
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       546,
       508,
       860
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.99,
     "hits": 83
    },
    "liver": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.99,
     "hits": 83
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 42
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 41
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 45
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 83
    },
    "fat": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 67
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": true,
     "since": 84.0
    },
    "c3": {
     "on": true,
     "since": 76.0
    },
    "cvs": {
     "on": true,
     "since": 84.0
    }
   },
   "events": []
  },
  {
   "t": 90.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper cystic artery) are clearly dissected and seen entering the gallbladder neck. C2: Two full-thickness windows are visible\u2014one between the cystic duct and cystic artery, and another above the cystic artery revealing the cystic plate and liver bed. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the whitish fibrous cystic plate in the background.",
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
      "name": "cystic_plate",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       395,
       41,
       558,
       259
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       757,
       497,
       1000,
       615
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       479,
       596,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       396,
       516,
       644
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       45,
       687,
       476
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       403,
       454,
       505,
       583
      ],
      "confidence": 0.82
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       530,
       444,
       675,
       603
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       626,
       278,
       814,
       574
      ],
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.99,
     "hits": 84
    },
    "liver": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.99,
     "hits": 84
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 40
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 43
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 42
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 46
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.98,
     "hits": 84
    },
    "fat": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 67
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": true,
     "since": 84.0
    },
    "c3": {
     "on": true,
     "since": 76.0
    },
    "cvs": {
     "on": true,
     "since": 84.0
    }
   },
   "events": []
  },
  {
   "t": 91.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the larger cystic duct inferiorly and thinner cystic artery superiorly) are clearly dissected and seen entering the gallbladder. C2: The hepatocystic triangle is cleared of fat and connective tissue, creating a full-thickness window between the duct and artery with liver/tissue visible behind, and another window above the artery. C3: The lower part of the gallbladder is dissected off the liver bed, exposing the cystic plate superiorly.",
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
      "name": "cystic_plate",
      "confidence": 0.88
     },
     {
      "name": "hepatocystic_window",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       469,
       574,
       999
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       44,
       617,
       467
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       333,
       41,
       517,
       293
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       18,
       421,
       475,
       718
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       492,
       488,
       631,
       634
      ],
      "confidence": 0.74
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       565,
       335,
       996,
       856
      ],
      "confidence": 0.84
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.99,
     "hits": 85
    },
    "liver": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.99,
     "hits": 85
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 43
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 47
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.98,
     "hits": 85
    },
    "fat": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 67
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": true,
     "since": 84.0
    },
    "c3": {
     "on": true,
     "since": 76.0
    },
    "cvs": {
     "on": true,
     "since": 84.0
    }
   },
   "events": []
  },
  {
   "t": 92.0,
   "label": {
    "cvs": {
     "c1": 0.75,
     "c2": 0.4,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two main tubular-like bands (likely cystic duct inferiorly and cystic artery superiorly) are seen extending toward the gallbladder neck, separated by a small central window. C2: One small window is present between the two structures, but a second full-thickness window between the upper structure and the cystic plate is not yet cleared. C3: The peritoneum along the liver bed is incised, lifted slightly, and cauterized, but the lower third of the gallbladder is not fully detached from the cystic plate.",
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete; only one small window is open and the upper structure is not fully separated from the liver bed.",
    "boxes": [
     {
      "box_2d": [
       232,
       42,
       470,
       382
      ],
      "label": "grasper",
      "confidence": 0.99
     },
     {
      "box_2d": [
       0,
       64,
       532,
       537
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       497,
       444,
       715
      ],
      "label": "cystic_plate",
      "confidence": 0.88
     },
     {
      "box_2d": [
       448,
       574,
       622,
       705
      ],
      "label": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "box_2d": [
       0,
       50,
       996,
       999
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
     "last": 92.0,
     "best": 0.99,
     "hits": 86
    },
    "liver": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.99,
     "hits": 86
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 42
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 45
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 43
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.98,
     "hits": 86
    },
    "fat": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 68
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": true,
     "since": 84.0
    },
    "c3": {
     "on": true,
     "since": 76.0
    },
    "cvs": {
     "on": true,
     "since": 84.0
    }
   },
   "events": []
  },
  {
   "t": 93.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the prominent cystic duct anteriorly and a thinner cystic artery posteriorly) are clearly visible entering the base of the gallbladder. C2: The hepatocystic triangle is well dissected, showing clear windows between the cystic duct and artery, and behind the artery against the liver bed. C3: The lower third of the gallbladder has been mobilized off the liver bed, exposing the cystic plate along the superior margin.",
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
      "name": "cystic_plate",
      "confidence": 0.9
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
       83,
       1000,
       1000
      ],
      "confidence": 0.99
     },
     {
      "label": "grasper",
      "box_2d": [
       65,
       47,
       367,
       521
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       180,
       584,
       701
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       598,
       542,
       926
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       447,
       590,
       926,
       987
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.99,
     "hits": 87
    },
    "liver": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.99,
     "hits": 87
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 43
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 46
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 44
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.98,
     "hits": 87
    },
    "fat": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 69
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": true,
     "since": 84.0
    },
    "c3": {
     "on": true,
     "since": 76.0
    },
    "cvs": {
     "on": true,
     "since": 84.0
    }
   },
   "events": []
  },
  {
   "t": 94.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.65
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct anteriorly and cystic artery posteriorly) are clearly seen entering the gallbladder neck. Full-thickness windows are dissected between the cystic duct and artery, and between the artery and liver bed, revealing the dark liver background. The lower part of the gallbladder is dissected off the liver bed exposing the cystic plate, though the retraction angle shows a dorsal view where the plate exposure is slightly compressed.",
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
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "fat",
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
       79,
       46,
       340,
       533
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       4,
       230,
       534,
       644
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       51,
       998,
       998
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       454,
       567,
       968,
       974
      ],
      "label": "cystic_duct",
      "confidence": 0.85
     },
     {
      "box_2d": [
       3,
       577,
       590,
       889
      ],
      "label": "cystic_plate",
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.99,
     "hits": 88
    },
    "liver": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.99,
     "hits": 88
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 47
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 45
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.98,
     "hits": 88
    },
    "fat": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 70
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": true,
     "since": 84.0
    },
    "c3": {
     "on": true,
     "since": 76.0
    },
    "cvs": {
     "on": true,
     "since": 84.0
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
     "c3": 0.85
    },
    "cvs_evidence": "C1: Only a single broad tubular pedicle is visible running to the gallbladder, without separate dissection of the cystic duct and cystic artery. C2: There are no full-thickness windows cleared through the hepatocystic triangle, as the structures remain fused together. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the cystic plate behind it.",
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
      "name": "cystic_plate",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not cleared into two distinct windows, and the cystic duct and artery are not individually isolated as two separate tubular structures.",
    "boxes": [
     {
      "box_2d": [
       118,
       48,
       334,
       460
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       34,
       187,
       514,
       608
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       448,
       501,
       1000,
       940
      ],
      "label": "cystic_duct",
      "confidence": 0.88
     },
     {
      "box_2d": [
       0,
       47,
       1000,
       1000
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
     "last": 95.0,
     "best": 0.99,
     "hits": 89
    },
    "liver": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.99,
     "hits": 89
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 46
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.98,
     "hits": 89
    },
    "fat": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 71
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": true,
     "since": 84.0
    },
    "c3": {
     "on": true,
     "since": 76.0
    },
    "cvs": {
     "on": true,
     "since": 84.0
    }
   },
   "events": []
  },
  {
   "t": 96.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only a single broad tissue bundle containing the cystic duct is visible below the gallbladder neck, without two distinct separated tubular structures. C2: The hepatocystic triangle is still filled with connective tissue and no full-thickness windows are visible. C3: The gallbladder remains largely attached to the liver bed with only minimal initial scoring along the peritoneum, so the cystic plate is not adequately exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not individually skeletonized and no full-thickness windows are established.",
    "boxes": [
     {
      "box_2d": [
       0,
       42,
       1000,
       1000
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       377,
       819,
       668
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       491,
       55,
       808,
       597
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       188,
       607,
       723,
       876
      ],
      "label": "cystic_plate",
      "confidence": 0.68
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.99,
     "hits": 90
    },
    "liver": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.99,
     "hits": 90
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 46
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.98,
     "hits": 90
    },
    "fat": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 72
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 77.0
    },
    "c2": {
     "on": true,
     "since": 84.0
    },
    "c3": {
     "on": true,
     "since": 76.0
    },
    "cvs": {
     "on": true,
     "since": 84.0
    }
   },
   "events": []
  },
  {
   "t": 97.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The camera is focused on the liver surface and gallbladder bed, so neither the cystic duct nor the cystic artery is visible. C2: The hepatocystic triangle is completely out of view, so no windows can be seen. C3: A portion of the dissected liver bed (cystic plate) is visible on the right, but the full inferior margin of the gallbladder is not in view.",
    "phase": "gallbladder_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "cystic_plate",
      "confidence": 0.75
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
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The camera is positioned looking mostly at the liver parenchyma and part of the liver bed, with the hepatocystic triangle and lower gallbladder outside the field of view.",
    "boxes": [
     {
      "label": "irrigator",
      "box_2d": [
       0,
       48,
       303,
       978
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       149,
       44,
       1000,
       956
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       116,
       636,
       615,
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
     "last": 96.0,
     "best": 0.99,
     "hits": 90
    },
    "liver": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.99,
     "hits": 90
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 46
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.98,
     "hits": 90
    },
    "fat": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 72
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
     "on": true,
     "since": 76.0
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
    },
    {
     "what": "cvs",
     "on": false,
     "since": null
    }
   ]
  },
  {
   "t": 98.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The camera is focused on the liver and gallbladder bed, so the cystic duct and cystic artery are not in the field of view. C2: The hepatocystic triangle is mostly out of frame on the right, preventing assessment of full-thickness windows. C3: Only the upper edge of the cystic plate dissection is partially visible on the right, not the full inferior margin of the gallbladder.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.7
     },
     {
      "name": "gallbladder",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The camera is aimed at the liver surface and the hepatocystic triangle is largely out of the field of view.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       116,
       47,
       1000,
       986
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       54,
       249,
       983
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.99,
     "hits": 90
    },
    "liver": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.99,
     "hits": 90
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 46
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.98,
     "hits": 90
    },
    "fat": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 72
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "events": [
    {
     "what": "c3",
     "on": false
    }
   ]
  },
  {
   "t": 99.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Only one clear tubular structure (likely the cystic duct or artery) is dissected on the right, while the second tubular structure is not clearly isolated. C2: One small window is visible next to the isolated tubular structure, but the remainder of the hepatocystic triangle is not fully cleared to show two distinct windows. C3: The cystic plate is largely exposed on the liver bed where the lower part of the gallbladder has been dissected off.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "gallbladder",
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "cystic_duct",
      "confidence": 0.75
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Only one tubular structure is clearly isolated in the hepatocystic triangle; the second structure is not yet delineated.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       0,
       50,
       272,
       889
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       152,
       45,
       998,
       861
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       874,
       730,
       999
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       306,
       786,
       527,
       864
      ],
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.99,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.99,
     "hits": 91
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 47
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 51
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.98,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 73
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 100.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.1
    },
    "cvs_evidence": "C1: A large, out-of-focus pink tissue mass completely occludes the right half of the frame, blocking any view of tubular structures entering the gallbladder. C2: The hepatocystic triangle is largely obscured by the foreground tissue, preventing visualization of any full-thickness windows. C3: A small portion of the dissected liver bed/cystic plate is visible on the upper left, but the view of the inferior gallbladder margin is entirely blocked by the foreground occlusion.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
      "confidence": 0.65
     },
     {
      "name": "connective_tissue",
      "confidence": 0.75
     },
     {
      "name": "gallbladder",
      "confidence": 0.5
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The right half of the camera view is severely occluded by an out-of-focus, glare-heavy tissue mass in the extreme foreground, obscuring the hepatocystic triangle and tubular structures.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       420,
       1000,
       995
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       24,
       1000,
       470
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       107,
       569,
       444
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
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.99,
     "hits": 91
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 47
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 51
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.98,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 73
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 101.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Only one thick tubular bundle (likely the cystic duct or combined duct/artery) is visible on the right, so two distinct tubular structures entering the gallbladder cannot be confirmed. C2: A single full-thickness window is visible between the tubular bundle and the liver bed, but the triangle is not cleared to show two distinct windows between duct, artery, and plate. C3: The lower portion of the gallbladder is dissected away from the liver bed, clearly exposing the yellowish-white fibrous cystic plate along the inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "gallbladder",
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
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
      "confidence": 0.8
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Only one tubular structure bundle is dissected out on the right; the cystic duct and cystic artery are not yet separated into two distinct structures.",
    "boxes": [
     {
      "box_2d": [
       0,
       36,
       1000,
       853
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       282,
       284,
       763
      ],
      "label": "gallbladder",
      "confidence": 0.85
     },
     {
      "box_2d": [
       0,
       467,
       597,
       801
      ],
      "label": "cystic_plate",
      "confidence": 0.85
     },
     {
      "box_2d": [
       0,
       755,
       995,
       943
      ],
      "label": "cystic_duct",
      "confidence": 0.85
     },
     {
      "box_2d": [
       173,
       715,
       413,
       803
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
     "last": 101.0,
     "best": 0.99,
     "hits": 92
    },
    "liver": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.99,
     "hits": 92
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 48
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 52
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.98,
     "hits": 92
    },
    "fat": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 74
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 102.0,
   "label": {
    "cvs": {
     "c1": 0.12,
     "c2": 0.15,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Only one clear tubular band is seen on the far right, while the tissue to the left remains a broad sheet of connective tissue rather than a skeletonized second tubular structure. C2: There is one full-thickness window visible on the upper right showing the liver behind it, but the rest of the triangle is still covered in dense connective tissue. C3: Connective tissue on the cystic plate is partially exposed between the gallbladder and liver, though the lower gallbladder is not yet fully separated along its entire inferior margin.",
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
      "name": "connective_tissue",
      "confidence": 0.95
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
      "name": "cystic_duct",
      "confidence": 0.5
     },
     {
      "name": "cystic_artery",
      "confidence": 0.4
     },
     {
      "name": "fat",
      "confidence": 0.6
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; connective tissue obscures the individual tubular structures.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       280,
       48,
       1000,
       808
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       104,
       762,
       405,
       938
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       104,
       773,
       403,
       936
      ],
      "confidence": 0.9
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       0,
       300,
       530
      ],
      "confidence": 0.82
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       370,
       440,
       780
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.99,
     "hits": 93
    },
    "liver": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.99,
     "hits": 93
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 49
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 53
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.98,
     "hits": 93
    },
    "fat": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 74
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 103.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two main tubular-like bands (likely cystic duct on the right and cystic artery medially) are delineated around a dissected window, though the medial one is still somewhat embedded in connective tissue. C2: One clear full-thickness window is visible between the two structures, showing background tissue through it, though the second window between the medial structure and the cystic plate is not yet fully open. C3: Connective tissue on the cystic plate is partially exposed along the liver bed, but the lower third of the gallbladder is not yet completely separated into a full hanging configuration.",
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
      "confidence": 0.85
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
      "name": "cystic_plate",
      "confidence": 0.75
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
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
    "reason_if_not": "Only one window in the hepatocystic triangle is fully cleared and the second window between the cystic artery and cystic plate needs further dissection to achieve the full Critical View of Safety.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       128,
       33,
       1000,
       771
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       207,
       695,
       499,
       838
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       347,
       491,
       768
      ],
      "confidence": 0.72
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       114,
       255,
       785
      ],
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.99,
     "hits": 94
    },
    "liver": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.99,
     "hits": 94
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 45
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 52
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 50
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 54
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.98,
     "hits": 94
    },
    "fat": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 75
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 104.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the prominent cystic duct on the right and the thinner cystic artery medial to it) are clearly dissected and seen entering the gallbladder. C2: A clear full-thickness window is visible between the cystic duct and cystic artery, and the hepatocystic triangle is well cleared of fat and connective tissue. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing a wide area of the whitish cystic plate along the inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "cystic_plate",
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
      "name": "gallbladder",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
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
      "label": "liver",
      "box_2d": [
       153,
       31,
       1000,
       772
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       239,
       657,
       518,
       778
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       57,
       739,
       854,
       921
      ],
      "confidence": 0.78
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       20,
       187,
       866,
       753
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.99,
     "hits": 95
    },
    "liver": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.99,
     "hits": 95
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 46
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 53
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 51
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 55
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.98,
     "hits": 95
    },
    "fat": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 76
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 105.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.8,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the cystic duct inferiorly and cystic artery superiorly) are clearly dissected and seen entering the gallbladder. C2: Two windows are dissected between the cystic duct and artery, and above the artery toward the cystic plate, showing the background liver. C3: The cystic plate is partially exposed above the upper window, though the lower gallbladder is not fully mobilized off the liver bed.",
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
      "name": "connective_tissue",
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
      "box_2d": [
       486,
       60,
       977,
       936
      ],
      "label": "cystic_duct",
      "confidence": 0.89
     },
     {
      "box_2d": [
       381,
       444,
       563,
       634
      ],
      "label": "hepatocystic_window",
      "confidence": 0.93
     },
     {
      "box_2d": [
       319,
       437,
       537,
       788
      ],
      "label": "cystic_artery",
      "confidence": 0.77
     },
     {
      "box_2d": [
       326,
       30,
       488,
       149
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       563,
       376,
       999
      ],
      "label": "liver",
      "confidence": 0.91
     },
     {
      "box_2d": [
       0,
       309,
       350,
       734
      ],
      "label": "cystic_plate",
      "confidence": 0.85
     },
     {
      "box_2d": [
       0,
       34,
       452,
       446
      ],
      "label": "gallbladder",
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.99,
     "hits": 96
    },
    "liver": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.99,
     "hits": 96
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 47
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 52
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 56
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.98,
     "hits": 96
    },
    "fat": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 76
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 103.0
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
     "since": 103.0
    }
   ]
  },
  {
   "t": 106.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.8,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two tubular structures (a lower prominent cystic duct and an upper thinner cystic artery) are seen entering the gallbladder neck. C2: Two distinct dissected windows are visible separating the lower tubular structure from the upper one, and the upper one from the liver bed, with background liver visible through the lower window. C3: While there is dissection in the upper recess, the lower part of the gallbladder is not fully mobilized off the cystic plate along its inferior margin.",
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
      "box_2d": [
       0,
       48,
       672,
       497
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       485,
       453,
       994
      ],
      "label": "liver",
      "confidence": 0.85
     },
     {
      "box_2d": [
       564,
       53,
       853,
       362
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       567,
       85,
       966,
       929
      ],
      "label": "cystic_duct",
      "confidence": 0.85
     },
     {
      "box_2d": [
       497,
       552,
       672,
       705
      ],
      "label": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "box_2d": [
       18,
       437,
       497,
       810
      ],
      "label": "cystic_plate",
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.99,
     "hits": 97
    },
    "liver": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.99,
     "hits": 97
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.95,
     "hits": 55
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.95,
     "hits": 53
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.95,
     "hits": 57
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.98,
     "hits": 97
    },
    "fat": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.95,
     "hits": 77
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 103.0
    },
    "c2": {
     "on": true,
     "since": 104.0
    },
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
     "since": 104.0
    }
   ]
  },
  {
   "t": 107.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper cystic artery) are clearly dissected and seen entering the gallbladder neck. C2: Two clear windows are visible\u2014one full-thickness window between the duct and artery showing the dark liver background, and another dissected space above the artery against the cystic plate. C3: The lower third of the gallbladder is dissected away from the liver bed, exposing the whitish-yellow cystic plate in the upper triangle.",
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
      "name": "cystic_plate",
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
       50,
       715,
       523
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       483,
       461,
       998
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       44,
       494,
       275
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       401,
       511,
       646
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       604,
       62,
       858,
       337
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       655,
       96,
       996,
       882
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.99,
     "hits": 98
    },
    "liver": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.99,
     "hits": 98
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 56
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 54
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 58
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.98,
     "hits": 98
    },
    "fat": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 78
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 103.0
    },
    "c2": {
     "on": true,
     "since": 104.0
    },
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
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct inferiorly and cystic artery superiorly) are clearly isolated and seen entering the gallbladder. C2: Two full-thickness windows are visible in the hepatocystic triangle, showing the dark liver background between the duct and artery and between the artery and cystic plate. C3: The lower third of the gallbladder is dissected off the liver bed, exposing the whitish-yellow cystic plate superiorly.",
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
      "name": "cystic_plate",
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
       51,
       755,
       450
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       50,
       486,
       997
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       18,
       397,
       504,
       615
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       583,
       56,
       830,
       332
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.99,
     "hits": 99
    },
    "liver": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.99,
     "hits": 99
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 57
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 55
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 59
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.98,
     "hits": 99
    },
    "fat": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 79
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 103.0
    },
    "c2": {
     "on": true,
     "since": 104.0
    },
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the cystic duct inferiorly and the cystic artery superiorly) are clearly dissected and seen entering the gallbladder. C2: Two windows are dissected in the hepatocystic triangle, with the lower window clearly showing background liver tissue through it and the upper window exposing the cystic plate. C3: The lower portion of the gallbladder is mobilized from the liver bed, exposing the cystic plate in the upper window.",
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
      "confidence": 0.88
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
      "label": "gallbladder",
      "box_2d": [
       0,
       33,
       550,
       461
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       468,
       38,
       709,
       336
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       484,
       444,
       993
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       396,
       416,
       614
      ],
      "confidence": 0.75
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       440,
       510,
       617,
       644
      ],
      "confidence": 0.64
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.99,
     "hits": 100
    },
    "liver": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.99,
     "hits": 100
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 56
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.98,
     "hits": 100
    },
    "fat": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 80
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 40
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 103.0
    },
    "c2": {
     "on": true,
     "since": 104.0
    },
    "c3": {
     "on": true,
     "since": 107.0
    },
    "cvs": {
     "on": true,
     "since": 107.0
    }
   },
   "events": [
    {
     "what": "c3",
     "on": true,
     "since": 107.0
    },
    {
     "what": "cvs",
     "on": true,
     "since": 107.0
    }
   ]
  },
  {
   "t": 110.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not visible in this view. C2: The hepatocystic triangle is not clearly exposed with full-thickness windows. C3: The gallbladder is being lifted off the liver bed exposing some of the cystic plate, though the full lower third and triangle remain obscured.",
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
      "name": "cystic_plate",
      "confidence": 0.75
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
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
    "reason_if_not": "The hepatocystic triangle is not dissected enough to identify the cystic duct and artery.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       386,
       52,
       543,
       697
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       182,
       252,
       988,
       977
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       524,
       468,
       986
      ],
      "confidence": 0.91
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       503,
       532,
       794,
       997
      ],
      "confidence": 0.77
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       2,
       686,
       497,
       989
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 101
    },
    "liver": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 101
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 57
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.98,
     "hits": 101
    },
    "fat": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 80
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 110.0,
     "best": 0.98,
     "hits": 41
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 103.0
    },
    "c2": {
     "on": true,
     "since": 104.0
    },
    "c3": {
     "on": true,
     "since": 107.0
    },
    "cvs": {
     "on": true,
     "since": 107.0
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
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not yet clearly isolated, as the hepatocystic triangle is mostly covered in connective tissue. C2: There is one small window visible on the right, but the hepatocystic triangle is not fully cleared to show two full-thickness windows. C3: The lower part of the gallbladder is only partially dissected from the liver bed, so the cystic plate is not fully exposed along the entire inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.99
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are still obscured by peritoneum and connective tissue.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       467,
       53,
       594,
       557
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       31,
       390,
       725,
       780
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       44,
       582,
       533,
       791
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       53,
       1000,
       999
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.99,
     "hits": 102
    },
    "liver": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.99,
     "hits": 102
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 58
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.98,
     "hits": 102
    },
    "fat": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 80
    },
    "gi_tract": {
     "first": 32.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 111.0,
     "best": 0.98,
     "hits": 42
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 103.0
    },
    "c2": {
     "on": true,
     "since": 104.0
    },
    "c3": {
     "on": true,
     "since": 107.0
    },
    "cvs": {
     "on": true,
     "since": 107.0
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
     "c3": 0.45
    },
    "cvs_evidence": "C1: Only a single tubular bundle is visible being grasped, rather than two distinct separated tubular structures entering the gallbladder. C2: There are no full-thickness windows dissected between a duct and an artery. C3: The gallbladder has been partially dissected off the liver bed exposing some of the cystic plate, though the full hanging gallbladder appearance is not completely clear due to retraction.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
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
      "name": "cystic_plate",
      "confidence": 0.75
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
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle has not been dissected into two distinct tubular structures with clear windows.",
    "boxes": [
     {
      "box_2d": [
       288,
       59,
       442,
       621
      ],
      "confidence": 0.95,
      "label": "grasper"
     },
     {
      "box_2d": [
       408,
       833,
       555,
       998
      ],
      "confidence": 0.88,
      "label": "grasper"
     },
     {
      "box_2d": [
       405,
       506,
       865,
       986
      ],
      "confidence": 0.88,
      "label": "cystic_duct"
     },
     {
      "box_2d": [
       24,
       500,
       412,
       711
      ],
      "confidence": 0.84,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       230,
       964,
       998
      ],
      "confidence": 0.94,
      "label": "liver"
     },
     {
      "box_2d": [
       18,
       617,
       434,
       836
      ],
      "confidence": 0.74,
      "label": "cystic_plate"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.99,
     "hits": 103
    },
    "liver": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.99,
     "hits": 103
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 59
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 59
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.98,
     "hits": 103
    },
    "fat": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 80
    },
    "gi_tract": {
     "first": 32.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 112.0,
     "best": 0.98,
     "hits": 43
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "events": [
    {
     "what": "c1",
     "on": false
    },
    {
     "what": "c2",
     "on": false
    },
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
   "t": 113.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.15
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are delineated yet; only an undissected peritoneal fold and fat pad are seen. C2: The hepatocystic triangle is completely filled with intact connective tissue and fat, with no windows created. C3: Initial scoring of the peritoneum along the liver bed is visible, but the lower gallbladder is not separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; tubular structures are still encased in fat and peritoneum.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       503,
       59,
       615,
       584
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       619,
       685,
       1000,
       959
      ],
      "confidence": 0.93
     },
     {
      "label": "gallbladder",
      "box_2d": [
       154,
       424,
       767,
       787
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       154,
       582,
       583,
       780
      ],
      "confidence": 0.85
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       584,
       770,
       1000
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       328,
       170,
       1000,
       745
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.99,
     "hits": 104
    },
    "liver": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.99,
     "hits": 104
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 59
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 59
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.98,
     "hits": 104
    },
    "fat": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 81
    },
    "gi_tract": {
     "first": 32.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 113.0,
     "best": 0.98,
     "hits": 44
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 114.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.95
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are dissected and seen entering the gallbladder. C2: The hepatocystic triangle is cleared with windows visible between the duct, artery, and cystic plate, showing liver parenchyma in the background. C3: The lower third of the gallbladder is dissected off the liver bed, clearly exposing the cystic plate.",
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
      "confidence": 0.95
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
       608,
       68,
       736,
       474
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       735,
       683,
       999,
       884
      ],
      "label": "grasper",
      "confidence": 0.88
     },
     {
      "box_2d": [
       0,
       260,
       918,
       910
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       146,
       556,
       632,
       794
      ],
      "label": "cystic_plate",
      "confidence": 0.9
     },
     {
      "box_2d": [
       0,
       137,
       1000,
       919
      ],
      "label": "liver",
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.99,
     "hits": 105
    },
    "liver": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.99,
     "hits": 105
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 52
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 60
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 60
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 61
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.98,
     "hits": 105
    },
    "fat": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 81
    },
    "gi_tract": {
     "first": 32.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 114.0,
     "best": 0.98,
     "hits": 45
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 115.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are seen running toward the gallbladder, with a dissector passing beneath the duct. C2: Two clear windows are visible, one above the artery and one between the duct and artery where the background tissue and instrument tip are seen through. C3: The lower gallbladder is dissected off the liver bed, exposing a broad area of the white/fibrous cystic plate above the upper window.",
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
      "name": "cystic_plate",
      "confidence": 0.92
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
      "label": "liver",
      "box_2d": [
       0,
       60,
       584,
       465
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       600,
       606,
       1000
      ],
      "confidence": 0.9
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       219,
       944,
       997
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       564,
       59,
       693,
       442
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       629,
       690,
       1000,
       954
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.99,
     "hits": 106
    },
    "liver": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.99,
     "hits": 106
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 53
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 61
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 61
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 62
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.98,
     "hits": 106
    },
    "fat": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 81
    },
    "gi_tract": {
     "first": 32.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 114.0,
     "best": 0.98,
     "hits": 45
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 116.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder. C2: The hepatocystic triangle is dissected with clear windows visible between the duct, artery, and cystic plate, where a dissector is currently placed. C3: The lower third of the gallbladder is dissected off the liver bed, clearly exposing the cystic plate behind the structures.",
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
      "confidence": 0.92
     },
     {
      "name": "cystic_plate",
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
      "name": "abdominal_wall",
      "confidence": 0.95
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
       0,
       640,
       713,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       316,
       172,
       1000,
       715
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       287,
       998,
       989
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       570,
       607,
       903
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       620,
       71,
       750,
       508
      ],
      "confidence": 0.98
     },
     {
      "label": "irrigator",
      "box_2d": [
       556,
       689,
       998,
       1000
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.99,
     "hits": 107
    },
    "liver": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.99,
     "hits": 107
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 62
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 62
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.98,
     "hits": 107
    },
    "fat": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 81
    },
    "gi_tract": {
     "first": 32.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 116.0,
     "best": 0.98,
     "hits": 46
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 114.0
    },
    "c2": {
     "on": true,
     "since": 114.0
    },
    "c3": {
     "on": true,
     "since": 114.0
    },
    "cvs": {
     "on": true,
     "since": 114.0
    }
   },
   "events": [
    {
     "what": "c1",
     "on": true,
     "since": 114.0
    },
    {
     "what": "c2",
     "on": true,
     "since": 114.0
    },
    {
     "what": "c3",
     "on": true,
     "since": 114.0
    },
    {
     "what": "cvs",
     "on": true,
     "since": 114.0
    }
   ]
  },
  {
   "t": 117.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet dissected or visible. C2: The hepatocystic triangle is still covered with peritoneum and connective tissue with no full-thickness windows cleared. C3: While some dissection has begun along the liver bed, the lower part of the gallbladder is not yet separated to expose the entire inferior margin of the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in an early stage; the cystic duct and cystic artery remain encased in connective tissue and peritoneum.",
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       653,
       73,
       778,
       527
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       323,
       980,
       999
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       347,
       185,
       1000,
       680
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       648,
       452,
       1000
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       592,
       647,
       757
      ],
      "confidence": 0.76
     },
     {
      "label": "hook",
      "box_2d": [
       624,
       678,
       1000,
       954
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.99,
     "hits": 108
    },
    "liver": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.99,
     "hits": 108
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 62
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 62
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.98,
     "hits": 108
    },
    "fat": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 82
    },
    "gi_tract": {
     "first": 32.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 117.0,
     "best": 0.98,
     "hits": 47
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 114.0
    },
    "c2": {
     "on": true,
     "since": 114.0
    },
    "c3": {
     "on": true,
     "since": 114.0
    },
    "cvs": {
     "on": true,
     "since": 114.0
    }
   },
   "events": []
  },
  {
   "t": 118.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.1
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible entering the gallbladder; only superficial cautery scoring of the peritoneum is present. C2: The hepatocystic triangle remains completely filled with intact fat and connective tissue with no windows created. C3: The gallbladder is still fully attached to the liver bed, with only initial scoring along the peritoneal reflection.",
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
      "name": "abdominal_wall",
      "confidence": 0.98
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
    "reason_if_not": "Dissection has just begun with superficial peritoneal scoring; the cystic duct, cystic artery, and cystic plate have not yet been exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       56,
       1000,
       865
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       712,
       638,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       538,
       362,
       866,
       545
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       838,
       120,
       1000,
       609
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       807,
       679,
       1000,
       804
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.99,
     "hits": 109
    },
    "liver": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.99,
     "hits": 109
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 62
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 62
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.98,
     "hits": 109
    },
    "fat": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 83
    },
    "gi_tract": {
     "first": 32.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 118.0,
     "best": 0.98,
     "hits": 48
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 114.0
    },
    "c2": {
     "on": true,
     "since": 114.0
    },
    "c3": {
     "on": true,
     "since": 114.0
    },
    "cvs": {
     "on": true,
     "since": 114.0
    }
   },
   "events": []
  },
  {
   "t": 119.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows created yet. C3: While some cauterization has started along the gallbladder-liver junction, the lower part of the gallbladder is not yet lifted off the cystic plate.",
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
    "reason_if_not": "The hepatocystic triangle is still covered by peritoneum and fibrofatty tissue; cystic duct and artery are not yet exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       56,
       1000,
       764
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       574,
       597,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       187,
       672,
       995,
       995
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       848,
       108,
       977,
       621
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       846,
       680,
       1000,
       792
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.99,
     "hits": 110
    },
    "liver": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.99,
     "hits": 110
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 62
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 62
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.98,
     "hits": 110
    },
    "fat": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 84
    },
    "gi_tract": {
     "first": 32.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 119.0,
     "best": 0.98,
     "hits": 49
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "events": [
    {
     "what": "c1",
     "on": false
    },
    {
     "what": "c2",
     "on": false
    },
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
   "t": 120.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible as the hepatocystic triangle is still covered by intact peritoneum and fat. C2: The hepatocystic triangle has only superficial scoring and no full-thickness windows have been dissected. C3: The gallbladder remains largely attached to the liver bed with only a very superficial incision along the peritoneal reflection.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; the cystic duct and artery are still completely buried in fat and peritoneum.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       401,
       997,
       973
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       818,
       117,
       977,
       595
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       808,
       731,
       1000,
       966
      ],
      "confidence": 0.81
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       693,
       857,
       1000
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.99,
     "hits": 111
    },
    "liver": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.99,
     "hits": 111
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 62
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 62
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.98,
     "hits": 111
    },
    "fat": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 85
    },
    "gi_tract": {
     "first": 32.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 120.0,
     "best": 0.99,
     "hits": 50
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 121.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: Early dissection along the liver bed has started, but the lower third of the gallbladder is not yet separated to expose the full cystic plate.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is still covered in fat and connective tissue, preventing clear identification of the cystic duct and cystic artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       65,
       1000,
       710
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       683,
       868,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       180,
       595,
       860,
       840
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       752,
       86,
       903,
       509
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.99,
     "hits": 112
    },
    "liver": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.99,
     "hits": 112
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 62
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 62
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.98,
     "hits": 112
    },
    "fat": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 86
    },
    "gi_tract": {
     "first": 32.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 121.0,
     "best": 0.99,
     "hits": 51
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 122.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Only one tubular structure (or poorly differentiated tissue at the base) is visible, not two distinct tubular structures entering the gallbladder. C2: There are no clear full-thickness windows between a distinct cystic duct and artery. C3: The cystic plate is well exposed along the liver bed where the lower part of the gallbladder has been dissected off.",
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
      "name": "cystic_plate",
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
      "confidence": 0.6
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
    "reason_if_not": "The hepatocystic triangle structures are not yet clearly skeletonized into two distinct tubular structures with full-thickness windows.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       55,
       737,
       513
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       617,
       829,
       1000
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       782,
       788
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       14,
       515,
       808,
       831
      ],
      "confidence": 0.73
     },
     {
      "label": "grasper",
      "box_2d": [
       720,
       77,
       853,
       387
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       907,
       684,
       999,
       794
      ],
      "confidence": 0.74
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.99,
     "hits": 113
    },
    "liver": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.99,
     "hits": 113
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 62
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 63
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.98,
     "hits": 113
    },
    "fat": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 87
    },
    "gi_tract": {
     "first": 32.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 121.0,
     "best": 0.99,
     "hits": 51
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "t": 123.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Only one thin tubular structure (likely the cystic artery) is partially visible at the bottom right, while the cystic duct is not clearly isolated or visible entering the gallbladder. C2: There is one window below the thin tubular structure, but the upper part of the triangle is not cleared and two full-thickness windows are not visible. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing a broad area of the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "cystic_artery",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct is not clearly isolated alongside the artery.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       56,
       746,
       513
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       629,
       715,
       1000
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       775,
       960
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       723,
       77,
       850,
       387
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       906,
       681,
       1000,
       795
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.99,
     "hits": 114
    },
    "liver": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.99,
     "hits": 114
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 62
    },
    "cystic_plate": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 64
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.98,
     "hits": 114
    },
    "fat": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 88
    },
    "gi_tract": {
     "first": 32.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 33.0,
     "last": 123.0,
     "best": 0.99,
     "hits": 52
    },
    "blood": {
     "first": 66.0,
     "last": 67.0,
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
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
  },
  {
   "t": 24,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 29,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 34,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 39,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 1.0
  },
  {
   "t": 44,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 49,
   "C1": 0.3333333333333333,
   "C2": 0.6666666666666666,
   "C3": 0.6666666666666666
  },
  {
   "t": 54,
   "C1": 0.3333333333333333,
   "C2": 0.6666666666666666,
   "C3": 0.6666666666666666
  },
  {
   "t": 59,
   "C1": 0.3333333333333333,
   "C2": 0.3333333333333333,
   "C3": 0.6666666666666666
  },
  {
   "t": 64,
   "C1": 0.3333333333333333,
   "C2": 0.3333333333333333,
   "C3": 0.6666666666666666
  },
  {
   "t": 69,
   "C1": 0.0,
   "C2": 0.3333333333333333,
   "C3": 0.6666666666666666
  },
  {
   "t": 74,
   "C1": 0.0,
   "C2": 0.3333333333333333,
   "C3": 1.0
  },
  {
   "t": 79,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 84,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 1.0
  },
  {
   "t": 89,
   "C1": 0.6666666666666666,
   "C2": 1.0,
   "C3": 1.0
  },
  {
   "t": 94,
   "C1": 0.3333333333333333,
   "C2": 0.3333333333333333,
   "C3": 0.3333333333333333
  },
  {
   "t": 99,
   "C1": 0.3333333333333333,
   "C2": 0.3333333333333333,
   "C3": 0.3333333333333333
  },
  {
   "t": 104,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
  },
  {
   "t": 109,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 1.0
  },
  {
   "t": 114,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 1.0
  },
  {
   "t": 119,
   "C1": 0.3333333333333333,
   "C2": 0.3333333333333333,
   "C3": 0.6666666666666666
  }
 ],
 "agreement": {
  "keyframes": 22,
  "C1": 0.8636363636363636,
  "C1_caught": [
   10,
   12
  ],
  "C2": 0.7272727272727273,
  "C2_caught": [
   9,
   14
  ],
  "C3": 0.5454545454545454,
  "C3_caught": [
   10,
   17
  ]
 },
 "rules": {
  "confirm_conf": 0.7,
  "confirm_frames": 2
 }
};
