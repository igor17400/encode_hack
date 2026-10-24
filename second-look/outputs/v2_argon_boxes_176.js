window.TIMELINE = {
 "video": "videos/endo176.mp4",
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
     "c1": 0.45,
     "c2": 0.65,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two strands are visible on the right side near the windows, though the main body of the gallbladder is covered by peritoneum on the left, making their direct connection and tubular nature somewhat ambiguous from this angle. C2: Two full-thickness openings/windows are visible in the right lower portion of the dissected area, showing dark background through them. C3: The electrocautery hook is actively incising the peritoneal reflection at the liver edge, so the lower gallbladder is not yet separated from the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.8
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The peritoneal covering over the lower gallbladder and cystic plate is still being incised, preventing complete confirmation of the critical view of safety.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       179,
       634,
       768
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       448,
       142,
       1000,
       735
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       476,
       517,
       693,
       824
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       698,
       587,
       818,
       661
      ],
      "confidence": 0.86
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.98,
     "hits": 1
    },
    "gallbladder": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.9,
     "hits": 1
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.9,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.8,
     "hits": 1
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 0.0,
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
   "t": 1.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one small window is beginning to form on the right, and two distinct tubular structures (cystic duct and artery) are not yet isolated and visible entering the gallbladder. C2: There is one small full-thickness window visible on the right, but the majority of the hepatocystic triangle remains covered in connective tissue and peritoneum. C3: The electrocautery hook is just beginning to incise the peritoneum near the liver bed, so the lower gallbladder is not separated to expose the cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.85
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are still obscured by peritoneum and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       159,
       617,
       755
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       468,
       141,
       1000,
       488
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       435,
       587,
       638,
       826
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       693,
       627,
       832,
       776
      ],
      "label": "hepatocystic_window",
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.99,
     "hits": 2
    },
    "gallbladder": {
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
     "first": 0.0,
     "last": 1.0,
     "best": 0.85,
     "hits": 2
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.5,
     "hits": 0
    },
    "fat": {
     "first": 1.0,
     "last": 1.0,
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
   "t": 2.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and artery are not clearly isolated as two distinct tubular structures entering the gallbladder. C2: While there appears to be a small opening/window in the tissue on the right, the hepatocystic triangle is not fully cleared to show two distinct full-thickness windows. C3: The gallbladder remains largely attached to the liver bed with the hook dissecting the peritoneal reflection, so the cystic plate is not exposed.",
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
      "name": "hepatocystic_window",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress and critical tubular structures are not yet clearly isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       163,
       604,
       791
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       454,
       144,
       998,
       747
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       409,
       523,
       604,
       827
      ],
      "label": "irrigator",
      "confidence": 0.95
     },
     {
      "box_2d": [
       669,
       602,
       792,
       670
      ],
      "label": "hepatocystic_window",
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.99,
     "hits": 3
    },
    "gallbladder": {
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
     "first": 0.0,
     "last": 2.0,
     "best": 0.85,
     "hits": 2
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.5,
     "hits": 0
    },
    "fat": {
     "first": 1.0,
     "last": 1.0,
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly dissected at the lower right entering the gallbladder neck. C2: Two full-thickness windows are visible between the duct, artery, and adjacent tissue in the lower right quadrant. C3: While a small portion of the cystic plate is exposed near the infundibulum, the rest of the gallbladder remains attached to the liver bed.",
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
      "label": "liver",
      "box_2d": [
       0,
       163,
       676,
       805
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       468,
       145,
       1000,
       659
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       147,
       473,
       344
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       429,
       670,
       616,
       828
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       785,
       599,
       922,
       668
      ],
      "confidence": 0.64
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.99,
     "hits": 4
    },
    "gallbladder": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.98,
     "hits": 4
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.95,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.9,
     "hits": 1
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.9,
     "hits": 1
    },
    "fat": {
     "first": 1.0,
     "last": 1.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.75,
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
   "t": 4.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures are visible yet as the peritoneum over the hepatocystic triangle is just being opened. C2: The hepatocystic triangle is still covered by intact peritoneum and fat with only a small initial opening. C3: The gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection has just begun; the cystic duct and artery are still completely covered by peritoneum and fat.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       172,
       757,
       787
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       468,
       144,
       1000,
       684
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       27,
       144,
       477,
       304
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       776,
       585,
       971,
       782
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       834,
       597,
       933,
       650
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.99,
     "hits": 5
    },
    "gallbladder": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.98,
     "hits": 5
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.95,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.9,
     "hits": 1
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.9,
     "hits": 1
    },
    "fat": {
     "first": 1.0,
     "last": 4.0,
     "best": 0.85,
     "hits": 2
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.75,
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
   "t": 5.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Cystic structures are only partially dissected near the bottom right and not clearly seen as two distinct tubular structures entering the gallbladder. C2: Small openings are beginning to form in the connective tissue, but full-thickness windows clearing the hepatocystic triangle are not yet established. C3: The gallbladder remains largely attached to the liver bed with the peritoneum intact along the inferior margin, so the cystic plate is not exposed.",
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
      "name": "cystic_artery",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage and critical tubular structures are not yet fully isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       178,
       742,
       796
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       484,
       146,
       1000,
       650
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       144,
       509,
       368
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       912,
       626,
       999,
       734
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.99,
     "hits": 6
    },
    "gallbladder": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.98,
     "hits": 6
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.95,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 1
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.9,
     "hits": 1
    },
    "fat": {
     "first": 1.0,
     "last": 5.0,
     "best": 0.85,
     "hits": 3
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.75,
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
   "t": 6.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a partial view of a potential tubular structure is seen at the bottom right, without clear delineation of two separate structures entering the gallbladder. C2: A small window is partially visible at the bottom right, but the hepatocystic triangle remains largely undissected and covered by peritoneum and connective tissue. C3: The gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.6
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct, cystic artery, and cystic plate are not yet clearly isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       196,
       708,
       810
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       143,
       516,
       396
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       498,
       147,
       1000,
       625
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.99,
     "hits": 7
    },
    "gallbladder": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.98,
     "hits": 7
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.95,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 1
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 1
    },
    "fat": {
     "first": 1.0,
     "last": 6.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.75,
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
   "t": 7.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one window is being created and two distinct tubular structures entering the gallbladder cannot yet be identified. C2: A single small window is visible where the hook is dissecting, but the hepatocystic triangle is not yet fully cleared to show two full-thickness windows. C3: The peritoneum over the lower gallbladder is just beginning to be incised, so the lower gallbladder is not separated from the liver bed to expose the cystic plate.",
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
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages; the cystic duct and cystic artery are still covered by connective tissue and fat.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       165,
       644,
       795
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       461,
       142,
       1000,
       702
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       643,
       545,
       807,
       819
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       68,
       149,
       432,
       278
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.99,
     "hits": 8
    },
    "gallbladder": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.98,
     "hits": 8
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.95,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 1
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 1
    },
    "fat": {
     "first": 1.0,
     "last": 7.0,
     "best": 0.85,
     "hits": 5
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.75,
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
   "t": 8.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The peritoneum is just being incised and neither the cystic duct nor the cystic artery is skeletonized as a distinct tubular structure connected to the gallbladder. C2: The hepatocystic triangle is still mostly covered by peritoneum and connective tissue, with only a small initial window opened by the hook. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.6
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; tubular structures are not yet isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       172,
       663,
       786
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       468,
       142,
       1000,
       713
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       84,
       146,
       477,
       278
      ],
      "label": "grasper",
      "confidence": 0.88
     },
     {
      "box_2d": [
       651,
       603,
       804,
       817
      ],
      "label": "hook",
      "confidence": 0.93
     },
     {
      "box_2d": [
       757,
       611,
       872,
       672
      ],
      "label": "hepatocystic_window",
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.99,
     "hits": 9
    },
    "gallbladder": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.98,
     "hits": 9
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.95,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 1
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 1
    },
    "fat": {
     "first": 1.0,
     "last": 8.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.75,
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Only the peritoneum is being scored; the cystic duct and cystic artery are not yet skeletonized into two distinct tubular structures. C2: One small window is visible below the hook, but the hepatocystic triangle remains covered in fat and connective tissue. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages; tubular structures are still encased in fat and peritoneum.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       172,
       671,
       796
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       471,
       142,
       1000,
       751
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       586,
       549,
       783,
       822
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       89,
       146,
       479,
       304
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       735,
       596,
       862,
       671
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.99,
     "hits": 10
    },
    "gallbladder": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.98,
     "hits": 10
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 1
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 1
    },
    "fat": {
     "first": 1.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.75,
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
   "t": 10.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not yet isolated or clearly visible entering the gallbladder. C2: Dissection of the hepatocystic triangle has just begun with a small opening, and full-thickness windows are not established. C3: The gallbladder remains fully attached to the liver bed, with no exposure of the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage and the cystic duct and artery are not yet skeletonized.",
    "boxes": [
     {
      "box_2d": [
       0,
       172,
       734,
       804
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       483,
       142,
       1000,
       687
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       142,
       489,
       337
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       737,
       587,
       920,
       798
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       806,
       599,
       921,
       664
      ],
      "label": "hepatocystic_window",
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.99,
     "hits": 11
    },
    "gallbladder": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.98,
     "hits": 11
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 1
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 1
    },
    "fat": {
     "first": 1.0,
     "last": 10.0,
     "best": 0.9,
     "hits": 8
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.75,
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
   "t": 11.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection has just begun on the peritoneal covering and neither the cystic duct nor the cystic artery are skeletonized as distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: The gallbladder remains completely attached to the liver bed along its inferior margin, so the cystic plate is not exposed.",
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
      "label": "liver",
      "box_2d": [
       0,
       179,
       712,
       803
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       483,
       144,
       1000,
       606
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       27,
       142,
       504,
       338
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       859,
       559,
       1000,
       745
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.99,
     "hits": 12
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 1
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 1
    },
    "fat": {
     "first": 1.0,
     "last": 11.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 3.0,
     "best": 0.75,
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
   "t": 12.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.6,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct on the right and cystic artery in the center) are beginning to be defined entering the gallbladder, though the hook obscures part of the view. C2: Two small windows have been opened on either side of the putative cystic artery, showing dark background through the tissue. C3: The peritoneum over the gallbladder-liver junction is still intact and only just being incised by the hook, so the lower gallbladder is not yet lifted off the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.8
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
      "name": "cystic_plate",
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
    "reason_if_not": "The lower part of the gallbladder is not yet separated from the cystic plate, and dissection of the hepatocystic triangle is still in progress.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       172,
       638,
       795
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       476,
       143,
       1000,
       706
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       608,
       525,
       784,
       825
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       33,
       146,
       482,
       313
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       698,
       534,
       879,
       668
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.99,
     "hits": 13
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 2
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 2
    },
    "fat": {
     "first": 1.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 10
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 12.0,
     "best": 0.75,
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
   "t": 13.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.03
    },
    "cvs_evidence": "C1: Dense electrocautery smoke and ongoing peritoneal dissection prevent visualization of two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is obscured by smoke and intact connective tissue, with no full-thickness windows visible. C3: The lower gallbladder is still being dissected from its peritoneal attachments and the cystic plate is not exposed.",
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "smoke",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dense surgical smoke from the electrocautery hook obscures the central operative field, and dissection of the hepatocystic triangle is incomplete.",
    "boxes": [
     {
      "box_2d": [
       0,
       228,
       484,
       823
      ],
      "confidence": 0.88,
      "label": "liver"
     },
     {
      "box_2d": [
       471,
       142,
       999,
       710
      ],
      "confidence": 0.87,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       426,
       494,
       626,
       826
      ],
      "confidence": 0.93,
      "label": "hook"
     },
     {
      "box_2d": [
       18,
       146,
       487,
       321
      ],
      "confidence": 0.89,
      "label": "grasper"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.99,
     "hits": 13
    },
    "gallbladder": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.99,
     "hits": 13
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 2
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 2
    },
    "fat": {
     "first": 1.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 10
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 12.0,
     "best": 0.75,
     "hits": 1
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 14.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.03,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No tubular structures are clearly skeletonized and seen entering the gallbladder neck, as the peritoneum is only beginning to be incised. C2: Small openings are being created with the hook, but the hepatocystic triangle is still covered with fat and peritoneum without full-thickness windows. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate along its inferior margin.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are not yet exposed or isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       161,
       675,
       804
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       465,
       143,
       1000,
       608
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       846,
       567,
       995,
       763
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       84,
       147,
       470,
       271
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.99,
     "hits": 14
    },
    "gallbladder": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.99,
     "hits": 14
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 2
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 2
    },
    "fat": {
     "first": 1.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 11
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 12.0,
     "best": 0.75,
     "hits": 1
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 15.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder yet. C2: The hepatocystic triangle is still covered by peritoneum and connective tissue with only a small initial cautery opening, and no full-thickness windows are visible. C3: The gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
      "confidence": 0.95
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
    "reason_if_not": "Dissection has just begun; the hepatocystic triangle is still covered by peritoneum and connective tissue, so the cystic duct and artery are not yet exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       162,
       641,
       790
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       421,
       143,
       1000,
       674
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       809,
       536,
       987,
       765
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.99,
     "hits": 15
    },
    "gallbladder": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.99,
     "hits": 15
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 2
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.9,
     "hits": 2
    },
    "fat": {
     "first": 1.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 12
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 12.0,
     "best": 0.75,
     "hits": 1
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 16.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.7,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular strands are visible below the gallbladder neck separated by windows, though the upper one is partly obscured by the hook. C2: Two full-thickness windows have been dissected in the hepatocystic triangle with background tissue visible through them. C3: The gallbladder remains largely attached to the liver bed and the cystic plate is not exposed along the inferior margin.",
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
      "confidence": 0.85
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
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet separated from the cystic plate (C3 not achieved) and the upper tubular structure is partially obscured by the hook.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       153,
       636,
       765
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       477,
       142,
       1000,
       532
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       611,
       501,
       793,
       824
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       689,
       496,
       914,
       645
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.99,
     "hits": 16
    },
    "gallbladder": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.99,
     "hits": 16
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.9,
     "hits": 3
    },
    "fat": {
     "first": 1.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 13
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 12.0,
     "best": 0.75,
     "hits": 1
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 17.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.95,
     "c3": 0.6
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are dissected and seen entering the gallbladder neck. C2: Two clear full-thickness windows are open in the hepatocystic triangle between the duct, artery, and cystic plate. C3: The gallbladder is partially separated from the liver bed with the hook dissecting the upper margin, though the full hanging gallbladder cystic plate view is partially incomplete/occluded.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "gallbladder",
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
      "name": "cystic_plate",
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
       147,
       684,
       804
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       477,
       142,
       1000,
       532
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       669,
       511,
       873,
       816
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       746,
       504,
       956,
       644
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.99,
     "hits": 17
    },
    "gallbladder": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.99,
     "hits": 17
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 7
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.9,
     "hits": 4
    },
    "fat": {
     "first": 1.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 17.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 18.0,
   "label": {
    "cvs": {
     "c1": 0.72,
     "c2": 0.65,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct on the right and cystic artery centrally) can be seen extending toward the gallbladder neck. C2: Two full-thickness windows have been dissected in the lower hepatocystic triangle, though the hook instrument is actively cauterizing the upper margin near the cystic plate. C3: The hook is actively separating the lower gallbladder from the liver bed, exposing part of the cystic plate, though dissection is still ongoing.",
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
      "name": "cystic_plate",
      "confidence": 0.75
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
    "view_quality": "smoke",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       154,
       719,
       747
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       481,
       142,
       1000,
       532
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       738,
       561,
       931,
       804
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.99,
     "hits": 17
    },
    "gallbladder": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.99,
     "hits": 17
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 7
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 4
    },
    "fat": {
     "first": 1.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 18.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 16.0
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
     "what": "c1",
     "on": true,
     "since": 16.0
    },
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder yet. C2: The hepatocystic triangle is mostly undissected, with only a small initial peritoneal opening and no full-thickness windows. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection has just begun along the peritoneal reflection; the cystic duct, cystic artery, and cystic plate have not yet been exposed.",
    "boxes": [
     {
      "label": "hepatocystic_window",
      "box_2d": [
       852,
       471,
       997,
       597
      ]
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.99,
     "hits": 18
    },
    "gallbladder": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.99,
     "hits": 18
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 7
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 4
    },
    "fat": {
     "first": 1.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 18.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 16.0
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
     "c1": 0.65,
     "c2": 0.7,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two dissected tubular structures (likely cystic duct and artery) are visible at the bottom of the hepatocystic triangle, though the hook instrument partially obscures the upper view. C2: Two distinct windows are visible between the tubular structures and the gallbladder/liver interface with background tissue showing through. C3: The hook is actively dissecting the peritoneum along the inferior margin, and the lower gallbladder is not yet clearly lifted off the cystic plate.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is still attached to the liver bed, preventing full confirmation of the cystic plate and complete clearance of the hepatocystic triangle.",
    "boxes": [
     {
      "box_2d": [
       0,
       146,
       671,
       820
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       504,
       142,
       1000,
       481
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       605,
       452,
       832,
       820
      ],
      "label": "hook",
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.99,
     "hits": 19
    },
    "gallbladder": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.99,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 8
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 1.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 18.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 16.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not clearly isolated at the bottom of the frame. C2: The hepatocystic triangle still contains undissected connective tissue and peritoneum, without two clear full-thickness windows. C3: The gallbladder remains largely attached to the liver bed with the hook dissecting the peritoneal reflection, so the cystic plate is not exposed.",
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
      "name": "cystic_artery",
      "confidence": 0.4
     },
     {
      "name": "cystic_duct",
      "confidence": 0.3
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and separation from the cystic plate are still incomplete.",
    "boxes": [
     {
      "box_2d": [
       0,
       150,
       656,
       750
      ],
      "label": "liver"
     },
     {
      "box_2d": [
       492,
       142,
       1000,
       516
      ],
      "label": "gallbladder"
     },
     {
      "box_2d": [
       430,
       493,
       663,
       826
      ],
      "label": "hook"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.99,
     "hits": 20
    },
    "gallbladder": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.99,
     "hits": 20
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 20
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 8
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 1.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 18.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 16.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Dissection is at an early stage and no distinct tubular structures (cystic duct or artery) are clearly isolated entering the gallbladder. C2: The hepatocystic triangle is mostly covered by peritoneum and fat, with only a small initial window being opened by the hook. C3: The lower part of the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.3
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still covered by connective tissue and peritoneum.",
    "boxes": [
     {
      "box_2d": [
       0,
       149,
       733,
       825
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       535,
       143,
       1000,
       520
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       836,
       539,
       1000,
       762
      ],
      "label": "hook",
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.99,
     "hits": 21
    },
    "gallbladder": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.99,
     "hits": 21
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 21
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 8
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 1.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 18.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 16.0
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
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and artery are not yet clearly isolated as two distinct tubular structures entering the gallbladder, as the electrocautery hook is still dissecting the lower window and the structures remain encased in tissue. C2: Although a small full-thickness window is visible to the right of the hook, the hepatocystic triangle is not yet fully cleared of connective tissue to show two distinct windows. C3: The lower portion of the gallbladder remains largely attached to the liver bed with only early scoring of the peritoneum, so the cystic plate is not fully exposed.",
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
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "cystic_plate",
      "confidence": 0.4
     },
     {
      "name": "cystic_duct",
      "confidence": 0.35
     },
     {
      "name": "cystic_artery",
      "confidence": 0.35
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, preventing definitive identification of the cystic duct and artery.",
    "boxes": [
     {
      "box_2d": [
       0,
       146,
       695,
       825
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       556,
       144,
       1000,
       517
      ],
      "label": "gallbladder",
      "confidence": 0.88
     },
     {
      "box_2d": [
       770,
       433,
       1000,
       770
      ],
      "label": "hook",
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.99,
     "hits": 22
    },
    "gallbladder": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.99,
     "hits": 22
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 22
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 1.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 23.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 24.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The hook instrument occludes the main area, and only a single thin structure or partial window is visible at the bottom, without two clear tubular structures entering the gallbladder. C2: The hepatocystic triangle is largely obscured by the hook and undissected tissue, with only one small fenestration visible inferiorly. C3: The peritoneum over the gallbladder-liver junction is just being incised by the hook, so the lower gallbladder is not yet separated from the cystic plate.",
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
      "confidence": 0.8
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in an early stage and the hook shaft occludes the view of the hepatocystic triangle structures.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       142,
       658,
       827
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       538,
       142,
       1000,
       654
      ],
      "confidence": 0.92
     },
     {
      "label": "irrigator",
      "box_2d": [
       611,
       424,
       858,
       823
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.99,
     "hits": 22
    },
    "gallbladder": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.99,
     "hits": 22
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 22
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 1.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 23.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 25.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Only a single small opening has been made in the peritoneum, and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly visible. C2: The hepatocystic triangle remains largely covered by peritoneum and connective tissue with only one small partial window visible at the bottom. C3: The gallbladder remains completely attached to the liver bed along its inferior margin, so the cystic plate is not exposed.",
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
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still concealed beneath peritoneum and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       166,
       692,
       816
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       537,
       144,
       1000,
       633
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       696,
       471,
       920,
       804
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.99,
     "hits": 23
    },
    "gallbladder": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.99,
     "hits": 23
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 23
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 1.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 23.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 26.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1 is not achieved as dissection has just begun and no distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder. C2 is not achieved because the hepatocystic triangle is still covered by peritoneum, fat, and connective tissue with no full-thickness windows created. C3 is not achieved as the lower part of the gallbladder remains completely attached to the liver bed with no cystic plate exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the peritoneum is only minimally incised and key biliary/vascular structures are not yet exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       163,
       737,
       823
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       496,
       143,
       1000,
       597
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       757,
       447,
       996,
       777
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       144,
       498,
       368
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.99,
     "hits": 24
    },
    "gallbladder": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.99,
     "hits": 24
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 1.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 23.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 27.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or seen entering the gallbladder yet. C2: The hepatocystic triangle is just beginning to be opened by the hook and remains filled with connective tissue and fat without full-thickness windows. C3: The gallbladder remains largely attached to the liver bed with only a small initial peritoneum incision, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; the cystic duct and cystic artery are still covered by peritoneum and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       161,
       695,
       819
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       471,
       145,
       1000,
       560
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       804,
       499,
       1000,
       755
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       149,
       461,
       350
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       784,
       642,
       879,
       715
      ],
      "confidence": 0.53
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.99,
     "hits": 25
    },
    "gallbladder": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.99,
     "hits": 25
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 25
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 1.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 23.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 28.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1 is not achieved because the hepatocystic triangle is mostly undissected and no distinct tubular structures (cystic duct or artery) are isolated. C2 is not achieved as the hook is just beginning the peritoneal incision and there are no full-thickness windows through the triangle. C3 is not achieved because the lower gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the cystic duct and artery are still covered by peritoneum and fat.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       162,
       690,
       819
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       468,
       142,
       1000,
       584
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       750,
       464,
       989,
       784
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       187,
       154,
       409,
       237
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.99,
     "hits": 26
    },
    "gallbladder": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.99,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 26
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 1.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 23.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 29.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or cystic artery) are clearly dissected and visible entering the gallbladder; dissection of the peritoneum is just beginning. C2: The hepatocystic triangle is still covered by intact peritoneum, fat, and connective tissue with no full-thickness windows created. C3: The gallbladder remains completely attached to the liver bed with no dissection of the lower third to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the cystic duct, cystic artery, and cystic plate are still concealed under peritoneum and fibrous tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       151,
       663,
       820
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       474,
       142,
       1000,
       587
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       757,
       460,
       997,
       774
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       193,
       150,
       485,
       237
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.99,
     "hits": 27
    },
    "gallbladder": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.99,
     "hits": 27
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 1.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 23.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 30.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder yet. C2: The hepatocystic triangle is just beginning to be opened by the hook and remains filled with peritoneum and connective tissue with no full-thickness windows. C3: The gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the peritoneum is barely scored and no biliary or vascular structures are skeletonized.",
    "boxes": [
     {
      "box_2d": [
       0,
       172,
       695,
       827
      ],
      "label": "liver",
      "confidence": 0.99
     },
     {
      "box_2d": [
       448,
       142,
       1000,
       602
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       743,
       452,
       976,
       788
      ],
      "label": "hook",
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.99,
     "hits": 28
    },
    "gallbladder": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.99,
     "hits": 28
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 1.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 23.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 31.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is in an early stage and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly identifiable. C2: A small window is beginning to form, but the hepatocystic triangle is still mostly covered by peritoneum and connective tissue without two full-thickness windows. C3: The gallbladder remains largely attached to the liver bed, and the cystic plate is not exposed along the inferior margin.",
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
      "confidence": 0.95
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is still largely undissected, preventing clear identification of the cystic duct, cystic artery, and cystic plate.",
    "boxes": [
     {
      "box_2d": [
       0,
       154,
       650,
       819
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       426,
       140,
       1000,
       584
      ],
      "label": "gallbladder",
      "confidence": 0.88
     },
     {
      "box_2d": [
       750,
       508,
       955,
       788
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       811,
       498,
       899,
       560
      ],
      "label": "hepatocystic_window",
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.99,
     "hits": 29
    },
    "gallbladder": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.99,
     "hits": 29
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 29
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 1.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 23.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 32.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are dissected and seen running towards the gallbladder. C2: Two full-thickness windows are clearly visible in the hepatocystic triangle, one with the hook passing through and another wider gap to the right. C3: The lower part of the gallbladder has not been elevated off the liver bed to expose the cystic plate along the inferior margin.",
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
      "confidence": 0.85
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
    "reason_if_not": "The lower part of the gallbladder is not yet separated from the liver bed to fully expose the cystic plate (C3 not achieved).",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       150,
       642,
       805
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       421,
       144,
       1000,
       574
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       777,
       512,
       1000,
       741
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       776,
       503,
       905,
       574
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.99,
     "hits": 30
    },
    "gallbladder": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.99,
     "hits": 30
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 30
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 10
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 6
    },
    "fat": {
     "first": 1.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 23.0,
     "best": 0.75,
     "hits": 2
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 33.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.25
    },
    "cvs_evidence": "C1: The hook is actively dissecting peritoneum and connective tissue near the cystic plate, and two distinct tubular structures entering the gallbladder are not yet clearly isolated in this view. C2: Although there is a small window on the right, two full-thickness windows across the hepatocystic triangle are not visible. C3: The peritoneum along the lower liver bed is being scored, so the lower gallbladder is not yet elevated off the cystic plate.",
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
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
      "confidence": 0.7
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress; the cystic duct and artery are not clearly displayed as isolated tubular structures.",
    "boxes": [
     {
      "box_2d": [
       0,
       151,
       627,
       703
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       404,
       142,
       1000,
       577
      ],
      "label": "gallbladder",
      "confidence": 0.88
     },
     {
      "box_2d": [
       722,
       513,
       966,
       797
      ],
      "label": "irrigator",
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.99,
     "hits": 31
    },
    "gallbladder": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.99,
     "hits": 31
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 31
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 10
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 6
    },
    "fat": {
     "first": 1.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 33.0,
     "best": 0.75,
     "hits": 3
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 34.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic artery or a thin band of tissue) is being isolated by the hook, and two distinct tubular structures entering the gallbladder are not yet visible. C2: There is a small window beneath the structure being dissected, but the hepatocystic triangle is not fully cleared of fat and connective tissue. C3: The gallbladder remains largely attached to the liver bed with only a small area of the peritoneal reflection opened.",
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
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.7
     },
     {
      "name": "cystic_artery",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic plate are not yet exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       156,
       652,
       820
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       587,
       568,
       747,
       823
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       409,
       142,
       1000,
       567
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       773,
       494,
       896,
       577
      ],
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.99,
     "hits": 32
    },
    "gallbladder": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.99,
     "hits": 32
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 32
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 11
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 6
    },
    "fat": {
     "first": 1.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 33.0,
     "best": 0.75,
     "hits": 3
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 35.0,
   "label": {
    "cvs": {
     "c1": 0.12,
     "c2": 0.15,
     "c3": 0.08
    },
    "cvs_evidence": "C1: Only one main band of tissue (likely the cystic artery or duct) is partially isolated near the hook, not two distinct tubular structures entering the gallbladder. C2: A single window is opened beneath the tissue band where the hook is working, rather than two full-thickness windows clearing the entire hepatocystic triangle. C3: The inferior margin of the gallbladder remains largely attached to the liver bed with minimal cystic plate exposure.",
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
      "confidence": 0.92
     },
     {
      "name": "fat",
      "confidence": 0.88
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.78
     },
     {
      "name": "cystic_artery",
      "confidence": 0.65
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not yet fully separated and clearly identified.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       14,
       180,
       560,
       670
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       242,
       479,
       814,
       828
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       336,
       142,
       994,
       485
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       626,
       422,
       850,
       563
      ],
      "confidence": 0.83
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       655,
       528,
       775,
       653
      ],
      "confidence": 0.86
     },
     {
      "label": "irrigator",
      "box_2d": [
       725,
       498,
       997,
       788
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.99,
     "hits": 33
    },
    "gallbladder": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.99,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 33
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 12
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.9,
     "hits": 6
    },
    "fat": {
     "first": 1.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 35.0,
     "best": 0.75,
     "hits": 3
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
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
   "t": 36.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one main band of tissue (likely the cystic duct or artery) is partially dissected, and two distinct tubular structures are not yet isolated. C2: There is one small window being created, not two full-thickness windows clearing the hepatocystic triangle. C3: The peritoneum along the inferior margin is only partially scored and the lower gallbladder is not separated from the cystic plate.",
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
      "confidence": 0.7
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
      "name": "gi_tract",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still early; only one structure is partially skeletonized and the cystic plate is not exposed.",
    "boxes": [
     {
      "box_2d": [
       0,
       197,
       527,
       658
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       234,
       509,
       932,
       827
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       792,
       484,
       997,
       747
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       304,
       142,
       1000,
       534
      ],
      "label": "cystic_plate",
      "confidence": 0.72
     },
     {
      "box_2d": [
       636,
       420,
       994,
       638
      ],
      "label": "hepatocystic_window",
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.99,
     "hits": 34
    },
    "gallbladder": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.99,
     "hits": 34
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 34
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 12
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.9,
     "hits": 7
    },
    "fat": {
     "first": 1.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 35.0,
     "best": 0.75,
     "hits": 3
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 36.0,
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
   "t": 37.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only one main tubular structure (likely the cystic artery or a band containing it) is being elevated by the hook, while the second tubular structure is not clearly isolated and connected to the gallbladder. C2: Although an instrument is passed behind one structure creating a window, the rest of the hepatocystic triangle remains covered in undissected connective tissue and fat. C3: The cystic plate is partially exposed on the left side, but the lower third of the gallbladder is not fully mobilized off the liver bed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "gallbladder",
      "confidence": 0.9
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
      "name": "cystic_artery",
      "confidence": 0.65
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.7
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; only one structure is partially isolated and the cystic duct and artery cannot both be definitively identified entering the gallbladder.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       171,
       534,
       657
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       223,
       482,
       859,
       827
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       308,
       144,
       996,
       510
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       632,
       498,
       775,
       633
      ],
      "confidence": 0.85
     },
     {
      "label": "irrigator",
      "box_2d": [
       732,
       469,
       999,
       776
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.99,
     "hits": 35
    },
    "gallbladder": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.99,
     "hits": 35
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 35
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 13
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.9,
     "hits": 7
    },
    "fat": {
     "first": 1.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 37.0,
     "best": 0.85,
     "hits": 4
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 37.0,
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
   "t": 38.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one anterior band/structure is being dissected by the hook, and two distinct tubular structures entering the gallbladder are not yet skeletonized. C2: There is one window inferiorly, but the hepatocystic triangle above is still covered in connective tissue without two full-thickness windows. C3: The peritoneum has been scored near the liver bed, but the lower third of the gallbladder is not yet elevated off the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "cystic_duct",
      "confidence": 0.6
     },
     {
      "name": "cystic_plate",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are not yet individually skeletonized.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       209,
       576,
       656
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       238,
       444,
       888,
       830
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       307,
       142,
       1000,
       485
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       759,
       471,
       1000,
       771
      ],
      "confidence": 0.97
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       618,
       413,
       827,
       567
      ],
      "confidence": 0.82
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       648,
       501,
       806,
       635
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.99,
     "hits": 36
    },
    "gallbladder": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.99,
     "hits": 36
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 36
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.9,
     "hits": 7
    },
    "fat": {
     "first": 1.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 38.0,
     "best": 0.85,
     "hits": 4
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 37.0,
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
   "t": 39.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (or a bundle of undissected tissue) is visible above the hook, not two distinct tubular structures entering the gallbladder. C2: There is one window visible below the dissected band with the hook passing under it, but the upper part of the hepatocystic triangle remains covered in connective tissue without a second window. C3: The lower third of the gallbladder is not yet mobilized from the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "gallbladder",
      "confidence": 0.9
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
      "name": "cystic_artery",
      "confidence": 0.5
     },
     {
      "name": "cystic_duct",
      "confidence": 0.4
     },
     {
      "name": "gi_tract",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not yet individually skeletonized and separated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       182,
       535,
       650
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       308,
       145,
       998,
       461
      ],
      "confidence": 0.93
     },
     {
      "label": "gallbladder",
      "box_2d": [
       249,
       447,
       882,
       827
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       602,
       388,
       795,
       543
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       669,
       481,
       797,
       626
      ],
      "confidence": 0.83
     },
     {
      "label": "irrigator",
      "box_2d": [
       735,
       431,
       1000,
       775
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       672,
       381,
       999,
       620
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.99,
     "hits": 37
    },
    "gallbladder": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.99,
     "hits": 37
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 37
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.9,
     "hits": 7
    },
    "fat": {
     "first": 1.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 38.0,
     "best": 0.85,
     "hits": 4
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 39.0,
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
   "t": 40.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly dissected and seen entering the gallbladder. C2: The hepatocystic triangle is well cleared with full-thickness windows visible between the structures and the cystic plate. C3: The lower portion of the gallbladder is dissected off the liver bed, exposing the whitish connective tissue of the cystic plate on the left.",
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
      "name": "cystic_duct",
      "confidence": 0.95
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
      "name": "cystic_plate",
      "confidence": 0.9
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       163,
       606,
       650
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       337,
       144,
       999,
       526
      ],
      "confidence": 0.9
     },
     {
      "label": "gallbladder",
      "box_2d": [
       239,
       459,
       996,
       827
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       645,
       521,
       841,
       624
      ],
      "confidence": 0.85
     },
     {
      "label": "irrigator",
      "box_2d": [
       808,
       522,
       1000,
       751
      ],
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.99,
     "hits": 38
    },
    "gallbladder": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.99,
     "hits": 38
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 38
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.92,
     "hits": 7
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 8
    },
    "fat": {
     "first": 1.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 5
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 39.0,
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
   "t": 41.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only a single combined band of tissue is elevated and individual tubular structures (cystic duct and artery) are not yet separated. C2: A large window is opened beneath the hepatocystic tissue band, but the window between the duct and artery is not yet dissected. C3: The peritoneum along the lower gallbladder margin is scored, but the lower third of the gallbladder is not yet clearly separated from the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic duct and cystic artery are still encased together in connective tissue and have not been individually isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       184,
       517,
       629
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       194,
       426,
       994,
       829
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       297,
       143,
       993,
       444
      ],
      "label": "cystic_plate",
      "confidence": 0.85
     },
     {
      "box_2d": [
       693,
       461,
       999,
       794
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       576,
       343,
       975,
       590
      ],
      "label": "hepatocystic_window",
      "confidence": 0.83
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 39
    },
    "gallbladder": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 39
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.92,
     "hits": 7
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 8
    },
    "fat": {
     "first": 1.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 5
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 41.0,
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
   "t": 42.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only one clear tubular structure is visible anteriorly, while the hook is dissecting a second region that is not yet clearly isolated as a tubular structure connected to the gallbladder. C2: One large window is visible inferiorly, but the space between the two potential structures is still being dissected by the hook and does not show a second full-thickness window. C3: The cystic plate is partially exposed on the left, but the inferior margin of the gallbladder is not yet completely separated from the liver bed.",
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
      "confidence": 0.75
     },
     {
      "name": "gi_tract",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and two distinct tubular structures are not yet clearly isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       183,
       532,
       731
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       234,
       450,
       1000,
       829
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       281,
       143,
       1000,
       483
      ],
      "label": "cystic_plate",
      "confidence": 0.88
     },
     {
      "box_2d": [
       609,
       494,
       720,
       605
      ],
      "label": "hepatocystic_window",
      "confidence": 0.82
     },
     {
      "box_2d": [
       655,
       411,
       970,
       799
      ],
      "label": "hook",
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 40
    },
    "gallbladder": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 40
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.92,
     "hits": 7
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 9
    },
    "fat": {
     "first": 1.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 6
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 42.0,
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
   "t": 43.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The hook is dissecting a single tubular structure (likely the cystic artery or duct), while a second distinct tubular structure entering the gallbladder is not yet clearly isolated. C2: A window is being created behind the structure held by the hook, but the rest of the hepatocystic triangle remains covered in peritoneum and connective tissue. C3: The lower part of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "name": "cystic_artery",
      "confidence": 0.65
     },
     {
      "name": "cystic_duct",
      "confidence": 0.4
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.5
     },
     {
      "name": "gi_tract",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still in early stages and both tubular structures and the cystic plate are not yet fully cleared.",
    "boxes": [
     {
      "box_2d": [
       680,
       448,
       959,
       796
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       662,
       532,
       725,
       606
      ],
      "label": "hepatocystic_window",
      "confidence": 0.72
     },
     {
      "box_2d": [
       0,
       169,
       563,
       638
      ],
      "label": "liver",
      "confidence": 0.99
     },
     {
      "box_2d": [
       272,
       143,
       992,
       825
      ],
      "label": "gallbladder",
      "confidence": 0.96
     },
     {
      "box_2d": [
       316,
       143,
       995,
       497
      ],
      "label": "cystic_plate",
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 41
    },
    "gallbladder": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 41
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 41
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.92,
     "hits": 7
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 9
    },
    "fat": {
     "first": 1.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 6
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 43.0,
     "best": 0.85,
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
   "t": 44.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (likely cystic duct or artery) is partially dissected and held by the hook, while a second tubular structure is not clearly delineated entering the gallbladder. C2: A small window is being created with the hook, but the hepatocystic triangle is not yet fully cleared of connective tissue to show two full-thickness windows. C3: The lower part of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
      "name": "cystic_duct",
      "confidence": 0.55
     },
     {
      "name": "cystic_artery",
      "confidence": 0.5
     },
     {
      "name": "gi_tract",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still early; only one strand of tissue is hooked and the cystic duct, cystic artery, and cystic plate are not yet fully separated and exposed.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       567,
       408,
       868,
       819
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       169,
       561,
       770
      ],
      "confidence": 0.97
     },
     {
      "label": "gallbladder",
      "box_2d": [
       239,
       445,
       1000,
       827
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       313,
       146,
       1000,
       488
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.99,
     "hits": 42
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.92,
     "hits": 7
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 9
    },
    "fat": {
     "first": 1.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 6
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 44.0,
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
   "t": 45.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The hepatocystic triangle is largely undissected and covered in peritoneum, so two separate tubular structures entering the gallbladder are not yet visible. C2: There are no full-thickness windows dissected through the hepatocystic triangle. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle has barely been opened, and the cystic duct and artery remain concealed within fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       157,
       986,
       807
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       208,
       338,
       1000,
       827
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       324,
       252,
       528,
       590
      ],
      "label": "cystic_duct",
      "confidence": 0.88
     },
     {
      "box_2d": [
       301,
       142,
       559,
       308
      ],
      "label": "grasper",
      "confidence": 0.85
     },
     {
      "box_2d": [
       37,
       585,
       150,
       712
      ],
      "label": "hook",
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.99,
     "hits": 43
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.92,
     "hits": 7
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 9
    },
    "fat": {
     "first": 1.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 6
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 44.0,
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
   "t": 46.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two main tubular structures (cystic duct below, cystic artery above) appear to enter the gallbladder neck, though residual web-like tissue bridges them. C2: Small windows are opened in the hepatocystic triangle showing liver behind, but connective tissue strands still span between the artery and gallbladder/cystic plate. C3: The lower gallbladder remains mostly attached to the liver bed with only early dissection of the cystic plate.",
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
      "confidence": 0.8
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
      "name": "gi_tract",
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with residual connective tissue strands obscuring a fully cleared view.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       150,
       994,
       810
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       346,
       331,
       1000,
       826
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       136,
       149,
       499,
       449
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       435,
       512,
       672,
       611
      ],
      "confidence": 0.76
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       308,
       460,
       381,
       533
      ],
      "confidence": 0.65
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       182,
       195,
       687,
       542
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.99,
     "hits": 44
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.92,
     "hits": 8
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 10
    },
    "fat": {
     "first": 1.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 6
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 46.0,
     "best": 0.9,
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
   "t": 47.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.65,
     "c3": 0.45
    },
    "cvs_evidence": "Two tubular structures (cystic duct and cystic artery) are visible entering the gallbladder, though residual connective tissue still partially bridges them. Two full-thickness windows are visible in the hepatocystic triangle showing the liver behind, though a thin strand of tissue remains in the upper window. The lower gallbladder is partially mobilized off the liver bed exposing some of the cystic plate, though the full extent of the inferior margin is not completely separated.",
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
      "name": "cystic_plate",
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
      "confidence": 0.9
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
       142,
       695,
       577
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       468,
       237,
       988,
       543
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       484,
       328,
       679
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       116,
       571,
       269,
       782
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       3,
       206,
       642,
       555
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       209,
       417,
       397,
       529
      ],
      "confidence": 0.84
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.99,
     "hits": 45
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.92,
     "hits": 9
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 11
    },
    "fat": {
     "first": 1.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 46.0,
     "best": 0.9,
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
   "t": 48.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are dissected and seen running toward the gallbladder neck. C2: Two clear full-thickness windows with liver visible in the background are established between the duct, artery, and gallbladder/cystic plate. C3: The lower gallbladder remains largely attached to the liver bed on the left, with only a small initial cautery defect rather than full exposure of the cystic plate.",
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
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "C3 is not yet achieved because the lower third of the gallbladder is not sufficiently mobilized off the cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       142,
       694,
       575
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       492,
       225,
       1000,
       586
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       481,
       301,
       772
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       227,
       442,
       412,
       806
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       194,
       414,
       362,
       523
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 46
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.92,
     "hits": 10
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 12
    },
    "fat": {
     "first": 1.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 36
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 48.0,
     "best": 0.9,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": false,
     "since": null
    },
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
     "since": 46.0
    }
   ]
  },
  {
   "t": 49.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.7,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two thin tubular-like tissue bands are isolated in the upper hepatocystic triangle with windows next to them, though they are quite high and the main cystic duct below the hook is still being dissected. C2: Two clear full-thickness windows showing the dark liver background are visible in the upper triangle above the hook. C3: The lower part of the gallbladder remains attached to the liver bed with cauterized peritoneum, so the cystic plate is not fully exposed.",
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
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
      "confidence": 0.75
     },
     {
      "name": "cystic_duct",
      "confidence": 0.6
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the lower hepatocystic triangle and cystic plate is incomplete, so full confirmation of the cystic duct and artery requires further mobilization.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       147,
       727,
       597
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       468,
       146,
       997,
       533
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       474,
       323,
       764
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       198,
       429,
       378,
       534
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       303,
       468,
       477,
       820
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 47
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.92,
     "hits": 11
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 12
    },
    "fat": {
     "first": 1.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 49.0,
     "best": 0.9,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
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
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the right, cystic artery in the middle) are clearly skeletonsied and seen entering the gallbladder. C2: Two full-thickness windows are clearly dissected in the hepatocystic triangle with the dark liver background visible through both gaps. C3: While a window exists next to the artery, the lower third of the gallbladder is not yet sufficiently lifted off the liver bed to expose the cystic plate along the whole inferior margin.",
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
      "label": "hook",
      "box_2d": [
       367,
       497,
       512,
       825
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       144,
       808,
       709
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       194,
       492,
       406,
       635
      ],
      "confidence": 0.85
     },
     {
      "label": "liver",
      "box_2d": [
       566,
       258,
       998,
       617
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.99,
     "hits": 48
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.92,
     "hits": 12
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 13
    },
    "fat": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 49.0,
     "best": 0.9,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
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
     "c1": 0.9,
     "c2": 0.95,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the right, cystic artery in the middle) are clearly dissected and seen entering the gallbladder. C2: Two clear full-thickness windows through the hepatocystic triangle are visible with the dark liver background seen through both. C3: The lower portion of the gallbladder is dissected off the liver bed exposing the cystic plate, with a clear window between the artery and the plate.",
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
      "confidence": 0.98
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
       486,
       480,
       688,
       826
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       144,
       839,
       497
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       617,
       219,
       996,
       606
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       198,
       484,
       432,
       624
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.99,
     "hits": 49
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.98,
     "hits": 24
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.92,
     "hits": 13
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 14
    },
    "fat": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 8
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 49.0,
     "best": 0.9,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
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
     "c2": 0.9,
     "c3": 0.1
    },
    "cvs_evidence": "Two tubular structures (cystic duct and cystic artery) are clearly dissected and seen entering the gallbladder. Two distinct full-thickness windows are visible in the hepatocystic triangle between the structures and the tissue behind them. The lower third of the gallbladder remains attached to the liver bed on the left side of the frame, so the cystic plate is not fully exposed along the entire inferior margin.",
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
      "confidence": 0.95
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "C3 is not yet achieved as the lower gallbladder is not completely separated from the cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       146,
       646,
       535
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       517,
       260,
       1000,
       705
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       529,
       487,
       769,
       824
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       187,
       497,
       449,
       624
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.99,
     "hits": 50
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.98,
     "hits": 25
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.92,
     "hits": 14
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 15
    },
    "fat": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 52.0,
     "best": 0.9,
     "hits": 8
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 49.0,
     "best": 0.9,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
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
     "c1": 0.65,
     "c2": 0.7,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular strands are visible running toward the gallbladder, separated by dissected windows, though one is partially obscured by the hook. C2: Two full-thickness windows are clearly visible in the hepatocystic triangle with the dark liver background seen through both. C3: The lower part of the gallbladder remains attached to the liver bed on the left side, with only a small initial dissection of the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.5
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower gallbladder is not fully separated from the cystic plate to confirm the Critical View of Safety.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       142,
       810,
       429
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       521,
       196,
       1000,
       695
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       560,
       321,
       764
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       373,
       442,
       564,
       825
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       172,
       467,
       399,
       620
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.99,
     "hits": 51
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.98,
     "hits": 26
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.92,
     "hits": 15
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 16
    },
    "fat": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 53.0,
     "best": 0.9,
     "hits": 8
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 49.0,
     "best": 0.9,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
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
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder. C2: Two full-thickness windows are dissected and visible between the cystic structures and the cystic plate, showing the liver background through them. C3: The lower portion of the gallbladder is dissected off the liver bed, exposing the cystic plate along the inferior margin.",
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
      "name": "cystic_plate",
      "confidence": 0.85
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
       439,
       453,
       608,
       827
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       143,
       833,
       564
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       559,
       274,
       998,
       609
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       568,
       318,
       781
      ],
      "confidence": 0.82
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       173,
       452,
       399,
       613
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.99,
     "hits": 52
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.98,
     "hits": 27
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.92,
     "hits": 16
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 17
    },
    "fat": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 9
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 10
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
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
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the right, cystic artery in the middle) are clearly delineated entering the gallbladder. C2: Two full-thickness windows are dissected through the hepatocystic triangle with the dark background visible through both. C3: The lower part of the gallbladder is dissected off the liver bed, exposing the cystic plate behind the upper window.",
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
      "confidence": 0.95
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       142,
       800,
       686
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       645,
       241,
       1000,
       676
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       563,
       340,
       757
      ],
      "label": "liver",
      "confidence": 0.88
     },
     {
      "box_2d": [
       510,
       435,
       750,
       825
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       181,
       446,
       440,
       620
      ],
      "label": "hepatocystic_window",
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.99,
     "hits": 53
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.98,
     "hits": 28
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.92,
     "hits": 17
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 18
    },
    "fat": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 55.0,
     "best": 0.9,
     "hits": 10
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 10
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
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
     "c3": 0.4
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the right and cystic artery in the middle) are clearly dissected and seen running up into the gallbladder. C2: Two full-thickness windows are open in the hepatocystic triangle with the dark liver background clearly visible through both gaps. C3: The cystic plate is partially exposed by the hook cautery on the left, but the inferior margin of the gallbladder is not yet completely separated to show a full hanging gallbladder.",
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
       147,
       851,
       804
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       189,
       436,
       506,
       619
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       576,
       422,
       895,
       816
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       719,
       258,
       987,
       584
      ],
      "confidence": 0.89
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.99,
     "hits": 54
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.98,
     "hits": 29
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.92,
     "hits": 18
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 19
    },
    "fat": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 56.0,
     "best": 0.9,
     "hits": 11
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 10
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
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
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the right and cystic artery to its left) are clearly skeletonized and seen entering the gallbladder. C2: The hepatocystic triangle is well cleared with full-thickness windows visible between the cystic duct and cystic artery, and between the cystic artery and the gallbladder bed. C3: While the hook is actively dissecting the peritoneum near the liver bed, the lower third of the gallbladder is not yet fully lifted off the cystic plate along its entire inferior margin.",
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
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet completely separated from the cystic plate to fully satisfy C3.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       584,
       485,
       855,
       817
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       144,
       693,
       526
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       182,
       497,
       452,
       623
      ],
      "confidence": 0.86
     },
     {
      "label": "liver",
      "box_2d": [
       723,
       279,
       979,
       606
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.99,
     "hits": 55
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.98,
     "hits": 30
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.92,
     "hits": 19
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 20
    },
    "fat": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 57.0,
     "best": 0.9,
     "hits": 11
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 10
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
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
     "c2": 0.85,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are visible entering the gallbladder. C2: Two full-thickness windows have been dissected in the hepatocystic triangle with the background liver visible through them. C3: The lower gallbladder is partially lifted off the liver bed exposing some of the cystic plate, though the inferior dissection is still being completed by the hook.",
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
      "name": "cystic_plate",
      "confidence": 0.75
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
       144,
       656,
       461
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       542,
       224,
       995,
       707
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       404,
       456,
       575,
       829
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       168,
       453,
       410,
       612
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.99,
     "hits": 56
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.98,
     "hits": 31
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.92,
     "hits": 20
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 21
    },
    "fat": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 12
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
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
     "c3": 0.9
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct and cystic artery) are clearly dissected and seen entering the gallbladder. Two full-thickness windows are open in the hepatocystic triangle with the dark liver background clearly visible through both. The lower part of the gallbladder is dissected away from the liver bed, exposing the yellow-stained cystic plate along the inferior margin.",
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
       142,
       834,
       517
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       588,
       172,
       998,
       695
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       468,
       449,
       643,
       824
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       149,
       452,
       393,
       607
      ],
      "label": "hepatocystic_window",
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 57
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.98,
     "hits": 32
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 22
    },
    "fat": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 13
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
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
     "c3": 0.8
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder. C2: Two full-thickness windows are dissected through the hepatocystic triangle with the liver visible in the background. C3: The lower portion of the gallbladder is dissected off the liver bed, exposing the cystic plate and creating a window behind the artery.",
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
       447,
       461,
       617,
       824
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       573,
       252,
       1000,
       707
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       145,
       843,
       622
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       153,
       440,
       416,
       606
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.99,
     "hits": 58
    },
    "gallbladder": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.99,
     "hits": 58
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 58
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.98,
     "hits": 33
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 23
    },
    "fat": {
     "first": 1.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 60.0,
     "best": 0.9,
     "hits": 14
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": true,
     "since": 47.0
    },
    "c3": {
     "on": true,
     "since": 58.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
    }
   },
   "events": [
    {
     "what": "c3",
     "on": true,
     "since": 58.0
    },
    {
     "what": "cvs",
     "on": true,
     "since": 58.0
    }
   ]
  },
  {
   "t": 61.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are dissected and seen entering the gallbladder. C2: The hepatocystic triangle is well cleared of connective tissue, showing clear full-thickness windows between the structures and the liver bed. C3: The lower third of the gallbladder is dissected off the liver bed, exposing the cystic plate behind the windows.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
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
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "liver",
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
       148,
       815,
       526
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       561,
       456,
       828,
       822
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       116,
       450,
       450,
       609
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       43,
       615,
       319,
       738
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.99,
     "hits": 59
    },
    "gallbladder": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.99,
     "hits": 59
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 59
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.98,
     "hits": 34
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 24
    },
    "fat": {
     "first": 1.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 61.0,
     "best": 0.9,
     "hits": 15
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": true,
     "since": 47.0
    },
    "c3": {
     "on": true,
     "since": 58.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
    }
   },
   "events": []
  },
  {
   "t": 62.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.7,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two tubular structures (likely cystic duct on the right and cystic artery in the middle) can be seen running upward toward the gallbladder. C2: Two distinct windows are dissected through the hepatocystic triangle with background visible through them, though thin peritoneal webs remain below. C3: The gallbladder is partially dissected off the liver bed at the top exposing a small window, but the lower portion of the cystic plate is still covered by connective tissue.",
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
      "name": "cystic_plate",
      "confidence": 0.6
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
       142,
       759,
       735
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       701,
       264,
       997,
       530
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       435,
       520,
       706,
       710
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       108,
       431,
       386,
       599
      ],
      "confidence": 0.86
     },
     {
      "label": "hook",
      "box_2d": [
       655,
       476,
       979,
       804
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 60
    },
    "gallbladder": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 60
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.98,
     "hits": 35
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 25
    },
    "fat": {
     "first": 1.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 62.0,
     "best": 0.9,
     "hits": 15
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": true,
     "since": 47.0
    },
    "c3": {
     "on": true,
     "since": 58.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
    }
   },
   "events": []
  },
  {
   "t": 63.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.95,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the right, cystic artery in the middle) are clearly skeletonized and entering the gallbladder. C2: Two full-thickness windows are open in the hepatocystic triangle, showing the dark liver background through both gaps. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the yellowish cystic plate along the inferior margin.",
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
      "box_2d": [
       0,
       142,
       804,
       529
      ],
      "label": "gallbladder"
     },
     {
      "box_2d": [
       604,
       272,
       990,
       658
      ],
      "label": "liver"
     },
     {
      "box_2d": [
       481,
       437,
       702,
       827
      ],
      "label": "hook"
     },
     {
      "box_2d": [
       108,
       435,
       386,
       600
      ],
      "label": "hepatocystic_window"
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.99,
     "hits": 61
    },
    "gallbladder": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.99,
     "hits": 61
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 61
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.98,
     "hits": 36
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 26
    },
    "fat": {
     "first": 1.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 40
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 63.0,
     "best": 0.9,
     "hits": 16
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": true,
     "since": 47.0
    },
    "c3": {
     "on": true,
     "since": 58.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
    }
   },
   "events": []
  },
  {
   "t": 64.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.75,
     "c3": 0.45
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct and artery) are visible running toward the gallbladder, though the lower connective tissue is still being cleared by the hook. Two clear full-thickness windows are open in the hepatocystic triangle with the dark liver background clearly visible through both. The lower gallbladder is partially separated from the liver bed with the hook actively dissecting the inferior margin, leaving the cystic plate only partially exposed.",
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
      "name": "cystic_plate",
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
       460,
       425,
       642,
       826
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       143,
       855,
       417
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       588,
       263,
       996,
       693
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       116,
       428,
       396,
       598
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 62
    },
    "gallbladder": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 62
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 62
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.98,
     "hits": 37
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 27
    },
    "fat": {
     "first": 1.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 64.0,
     "best": 0.9,
     "hits": 17
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": true,
     "since": 47.0
    },
    "c3": {
     "on": true,
     "since": 58.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
    }
   },
   "events": []
  },
  {
   "t": 65.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.95,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the right and cystic artery in the middle) are clearly skeletonized and seen entering the gallbladder. C2: The hepatocystic triangle is well cleared of connective tissue, creating distinct full-thickness windows between the duct, artery, and cystic plate with the liver background visible through them. C3: The lower portion of the gallbladder is dissected off the liver bed, exposing the cystic plate behind the created windows.",
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
       144,
       843,
       628
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       715,
       232,
       999,
       567
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       128,
       427,
       419,
       597
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       117,
       424,
       431,
       597
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       561,
       389,
       883,
       820
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.99,
     "hits": 63
    },
    "gallbladder": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.99,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 63
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.98,
     "hits": 38
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 28
    },
    "fat": {
     "first": 1.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 65.0,
     "best": 0.9,
     "hits": 18
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": true,
     "since": 47.0
    },
    "c3": {
     "on": true,
     "since": 58.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
    }
   },
   "events": []
  },
  {
   "t": 66.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the cystic duct on the right and the cystic artery centrally) are clearly dissected and seen entering the gallbladder. C2: Clear, full-thickness windows are visible through the hepatocystic triangle between the duct and artery and between the artery and the cystic plate, showing the background liver. C3: The lower third of the gallbladder is dissected away from the liver bed, exposing the cystic plate behind the windows.",
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
      "confidence": 0.85
     },
     {
      "name": "liver",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       144,
       882,
       442
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       591,
       431,
       917,
       815
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       108,
       427,
       393,
       592
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     },
     {
      "box_2d": [
       689,
       195,
       997,
       578
      ],
      "label": "liver",
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.99,
     "hits": 64
    },
    "gallbladder": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.99,
     "hits": 64
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 64
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.98,
     "hits": 39
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 29
    },
    "fat": {
     "first": 1.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 19
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": true,
     "since": 47.0
    },
    "c3": {
     "on": true,
     "since": 58.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
    }
   },
   "events": []
  },
  {
   "t": 67.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.3
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder. C2: The hepatocystic triangle is well cleared, revealing two full-thickness windows between the duct, artery, and gallbladder/cystic plate. C3: While the hook is dissecting the peritoneal reflection along the liver bed, the lower third of the gallbladder is not yet fully mobilized to expose the cystic plate along the entire inferior margin.",
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
      "name": "cystic_plate",
      "confidence": 0.65
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
    "reason_if_not": "C3 is not yet fully achieved as the lower part of the gallbladder remains partially attached to the liver bed.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       425,
       436,
       627,
       827
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       20,
       194,
       227,
       349
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       24,
       147,
       843,
       813
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       260,
       995,
       754
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       336,
       409,
       448,
       509
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 65
    },
    "gallbladder": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 65
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 65
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.98,
     "hits": 40
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 30
    },
    "fat": {
     "first": 1.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 67.0,
     "best": 0.9,
     "hits": 19
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": true,
     "since": 47.0
    },
    "c3": {
     "on": true,
     "since": 58.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
    }
   },
   "events": []
  },
  {
   "t": 68.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder. C2: Two full-thickness windows have been dissected through the hepatocystic triangle with the liver visible in the background. C3: The lower portion of the gallbladder remains attached to the liver bed and the hook is still dissecting the lower border, so the cystic plate is not fully exposed.",
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
      "name": "hepatocystic_window",
      "confidence": 0.95
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic plate criterion (C3) is not yet fully achieved as the inferior margin of the gallbladder is still being dissected off the liver bed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       142,
       857,
       403
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       510,
       260,
       997,
       589
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       141,
       381,
       413,
       529
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       342,
       423,
       521,
       826
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.99,
     "hits": 66
    },
    "gallbladder": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.99,
     "hits": 66
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 66
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.98,
     "hits": 41
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 31
    },
    "fat": {
     "first": 1.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 67.0,
     "best": 0.9,
     "hits": 19
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": true,
     "since": 47.0
    },
    "c3": {
     "on": true,
     "since": 58.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
    }
   },
   "events": []
  },
  {
   "t": 69.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct to the right and cystic artery in the middle) are clearly dissected and seen entering the gallbladder. C2: The hepatocystic triangle is well cleared of fat and connective tissue, creating visible full-thickness windows between the duct, artery, and cystic plate showing the liver behind. C3: The lower part of the gallbladder is dissected off the liver bed exposing the cystic plate, though the hook instrument slightly obscures the inferior margin.",
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
      "name": "connective_tissue",
      "confidence": 0.9
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
       525,
       385,
       826,
       828
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       121,
       375,
       413,
       524
      ],
      "confidence": 0.9
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       141,
       866,
       437
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       693,
       219,
       997,
       570
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       451,
       308,
       742
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 67
    },
    "gallbladder": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 67
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 67
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.98,
     "hits": 42
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 32
    },
    "fat": {
     "first": 1.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 69.0,
     "best": 0.9,
     "hits": 20
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": true,
     "since": 47.0
    },
    "c3": {
     "on": true,
     "since": 58.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
    }
   },
   "events": []
  },
  {
   "t": 70.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only one upper band/tubular structure is partially dissected while the lower structure is obscured by the hook and remaining tissue. C2: Small fenestrations are visible in the upper connective tissue, but full-thickness windows across the hepatocystic triangle are not yet cleared. C3: Cauterized tissue on the inferior gallbladder margin shows initial separation from the liver bed, but the cystic plate is not fully exposed.",
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
      "name": "hepatocystic_window",
      "confidence": 0.65
     },
     {
      "name": "cystic_plate",
      "confidence": 0.55
     },
     {
      "name": "cystic_artery",
      "confidence": 0.5
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete and the hook instrument obscures the lower aspect of the triangle.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       117,
       142,
       878,
       590
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       239,
       361,
       728
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       419,
       406,
       664,
       828
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       110,
       150,
       477,
       420
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       468,
       246,
       784,
       558
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       332,
       497,
       411,
       581
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.99,
     "hits": 68
    },
    "gallbladder": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.99,
     "hits": 68
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 68
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 42
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 32
    },
    "fat": {
     "first": 1.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 42
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 70.0,
     "best": 0.9,
     "hits": 20
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": true,
     "since": 47.0
    },
    "c3": {
     "on": true,
     "since": 58.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
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
     "c3": 0.1
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are clearly skeletonized and seen entering the gallbladder yet. C2: The hepatocystic triangle is still filled with connective tissue and fat, with no full-thickness windows visible. C3: A small portion of the peritoneum is incised, but the lower part of the gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery remain covered by peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       156,
       150,
       762,
       592
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       248,
       412,
       745
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       611,
       275,
       995,
       610
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       460,
       466,
       650,
       825
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       689,
       167,
       912,
       298
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.99,
     "hits": 69
    },
    "gallbladder": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.99,
     "hits": 69
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 69
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 42
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 32
    },
    "fat": {
     "first": 1.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 43
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 70.0,
     "best": 0.9,
     "hits": 20
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 46.0
    },
    "c2": {
     "on": true,
     "since": 47.0
    },
    "c3": {
     "on": true,
     "since": 58.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
    }
   },
   "events": []
  },
  {
   "t": 72.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and peritoneum, so two distinct tubular structures entering the gallbladder are not yet visible. C2: The hepatocystic triangle is not cleared of fat and connective tissue, and no full-thickness windows are present. C3: While some dissection has started on the posterior aspect showing the liver bed, the lower third of the gallbladder is not yet separated to expose the full cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.65
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Initial dissection phase; the cystic duct and artery are still embedded within fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       135,
       142,
       608,
       608
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       326,
       158,
       810,
       388
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       394,
       547,
       581,
       827
      ],
      "confidence": 0.97
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       203,
       414,
       753
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       530,
       187,
       1000,
       698
      ],
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.99,
     "hits": 70
    },
    "gallbladder": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.99,
     "hits": 70
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 70
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 42
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 32
    },
    "fat": {
     "first": 1.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 72.0,
     "best": 0.9,
     "hits": 20
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 73.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet isolated or clearly visible. C2: There are no full-thickness windows dissected through the hepatocystic triangle yet. C3: A significant portion of the lower gallbladder has been dissected off the liver bed, exposing the yellow-brown cystic plate below the grasped gallbladder.",
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
    "reason_if_not": "The cystic duct and cystic artery are not yet dissected out from the surrounding fat and connective tissue.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       447,
       546,
       631,
       827
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       288,
       154,
       801,
       381
      ],
      "confidence": 0.97
     },
     {
      "label": "gallbladder",
      "box_2d": [
       148,
       143,
       977,
       617
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       202,
       453,
       765
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.99,
     "hits": 71
    },
    "gallbladder": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.99,
     "hits": 71
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 71
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 42
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 32
    },
    "fat": {
     "first": 1.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 45
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 73.0,
     "best": 0.9,
     "hits": 21
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
    "cvs_evidence": "C1: Peritoneum and fat are still being incised, so two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly identifiable. C2: The hepatocystic triangle remains filled with intact connective and adipose tissue with no full-thickness windows created. C3: The gallbladder remains fully attached to the liver bed with only superficial peritoneal scoring visible.",
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
    "reason_if_not": "Early dissection phase; the cystic duct and artery are still embedded in peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       193,
       396,
       753
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       239,
       143,
       536,
       331
      ],
      "confidence": 0.98
     },
     {
      "label": "irrigator",
      "box_2d": [
       369,
       548,
       560,
       826
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       267,
       234,
       559,
       564
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       447,
       250,
       818,
       597
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       538,
       580,
       836,
       719
      ],
      "confidence": 0.86
     },
     {
      "label": "gallbladder",
      "box_2d": [
       260,
       144,
       915,
       332
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.99,
     "hits": 72
    },
    "gallbladder": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.99,
     "hits": 72
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 72
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 42
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 32
    },
    "fat": {
     "first": 1.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 46
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 73.0,
     "best": 0.9,
     "hits": 21
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic artery or duct) is partially skeletonized at the top right, while the lower part of the triangle remains undissected. C2: There are no full-thickness windows through the hepatocystic triangle, as dense connective tissue and fat still fill the space below the top structure. C3: The peritoneum on the posterior aspect is being scored, and some liver bed/cystic plate is visible, but the lower gallbladder is not yet separated along its entire inferior margin.",
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
      "name": "cystic_artery",
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
      "confidence": 0.95
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; only one tubular structure is visible and no full-thickness windows have been created.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       361,
       463,
       542,
       824
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       142,
       789,
       667
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       344,
       321,
       758
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       530,
       269,
       991,
       715
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       108,
       237,
       763,
       599
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.99,
     "hits": 73
    },
    "gallbladder": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.99,
     "hits": 73
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 73
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 42
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 32
    },
    "fat": {
     "first": 1.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 47
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 21
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Only one clear tubular structure is seen arching to the right, while the second structure (likely the artery) is obscured by the hook instrument and surrounding tissue. C2: One large full-thickness window is visible on the right showing the liver behind, but the second window above the hook is not clearly cleared. C3: A significant portion of the cystic plate is exposed on the left side as the lower gallbladder is lifted away from the liver bed.",
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
      "confidence": 0.85
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; only one tubular structure and one window are clearly visible while the hook obscures the upper aspect of the triangle.",
    "boxes": [
     {
      "box_2d": [
       138,
       427,
       371,
       804
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       19,
       142,
       741,
       417
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       468,
       275,
       994,
       610
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       419,
       584,
       794,
       722
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.99,
     "hits": 74
    },
    "gallbladder": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.99,
     "hits": 74
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 74
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.98,
     "hits": 43
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 33
    },
    "fat": {
     "first": 1.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 76.0,
     "best": 0.9,
     "hits": 22
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or cystic artery) are isolated or clearly visible entering the gallbladder. C2: The hepatocystic triangle is still covered with fat and peritoneal tissue, with no full-thickness windows created. C3: The electrocautery hook is scoring the peritoneum along the liver bed, and the lower gallbladder is not yet mobilized off the cystic plate.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in an early stage; the peritoneum is just being incised and neither the cystic duct nor the cystic artery is skeletonized.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       126,
       432,
       394,
       815
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       142,
       701,
       433
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       469,
       240,
       1000,
       814
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       276,
       529,
       442
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.99,
     "hits": 75
    },
    "gallbladder": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.99,
     "hits": 75
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 75
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.98,
     "hits": 43
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 33
    },
    "fat": {
     "first": 1.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 76.0,
     "best": 0.9,
     "hits": 22
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.55
    },
    "cvs_evidence": "C1: A prominent anterior tubular structure (cystic artery/duct) and a second deeper structure are visible entering the gallbladder, though the hook instrument partially obscures the posterior space. C2: There is a clear window dissected between the anterior structure and the liver bed, and another opening posteriorly, though connective tissue still bridges part of the posterior window. C3: The lower portion of the gallbladder is dissected off the liver bed exposing the yellowish cystic plate, though the full inferior margin is partially obscured by the instrument.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The electrocautery hook partially obstructs the posterior hepatocystic triangle, and some fibrous tissue remains to be cleared to fully confirm the two-structure and triangle criteria.",
    "boxes": [
     {
      "box_2d": [
       0,
       143,
       856,
       447
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       588,
       274,
       997,
       680
      ],
      "label": "liver",
      "confidence": 0.94
     },
     {
      "box_2d": [
       267,
       465,
       607,
       829
      ],
      "label": "irrigator",
      "confidence": 0.86
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.99,
     "hits": 76
    },
    "gallbladder": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.99,
     "hits": 76
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 76
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 44
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 34
    },
    "fat": {
     "first": 1.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 78.0,
     "best": 0.9,
     "hits": 23
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a single yellow tubular or fatty fold is being hooked in this close-up view, without clear visualization of both the cystic duct and cystic artery entering the gallbladder. C2: The hepatocystic triangle is still filled with yellow-brown connective tissue and no full-thickness windows are established. C3: The lower gallbladder is not dissected off the liver bed to expose the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.8
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
    "reason_if_not": "Dissection is in an early stage and zoomed in tightly on connective tissue, preventing confirmation of the critical view structures.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       229,
       699,
       439
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       0,
       317,
       483,
       542
      ],
      "confidence": 0.88
     },
     {
      "label": "irrigator",
      "box_2d": [
       247,
       544,
       556,
       826
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       643,
       290,
       1000,
       819
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.99,
     "hits": 76
    },
    "gallbladder": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.99,
     "hits": 77
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 77
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 44
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 34
    },
    "fat": {
     "first": 1.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 78.0,
     "best": 0.9,
     "hits": 23
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "c3": 0.25
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not seen as two distinct tubular structures entering the gallbladder in this close-up view of the liver bed. C2: The hepatocystic triangle is not clearly framed with two full-thickness windows between the duct, artery, and cystic plate. C3: A portion of the cystic plate is being exposed by the hook cautery, but it is not visible across the entire lower margin of a hanging gallbladder.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.85
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
    "can_confirm_anatomy": false,
    "reason_if_not": "The view is focused closely on the peritoneal/cystic plate dissection without showing the cystic duct and artery entering the gallbladder.",
    "boxes": [
     {
      "box_2d": [
       20,
       420,
       276,
       775
      ],
      "confidence": 0.96,
      "label": "hook"
     },
     {
      "box_2d": [
       0,
       144,
       686,
       467
      ],
      "confidence": 0.94,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       435,
       257,
       995,
       820
      ],
      "confidence": 0.92,
      "label": "liver"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.99,
     "hits": 77
    },
    "gallbladder": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.99,
     "hits": 78
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 78
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 44
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 34
    },
    "fat": {
     "first": 1.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 80.0,
     "best": 0.9,
     "hits": 24
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not visible, as the focus is on dissecting the gallbladder off the liver bed. C2: The hepatocystic triangle and its windows are not in clear view in this posterior/lateral aspect. C3: The electrocautery hook is actively dissecting the lower gallbladder off the cystic plate, which is partially exposed but dissection is still ongoing.",
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
      "name": "cystic_plate",
      "confidence": 0.8
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
    "can_confirm_anatomy": false,
    "reason_if_not": "The view is focused on the posterior cystic plate dissection; the cystic duct and artery in the hepatocystic triangle are not visible in this frame.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       169,
       394,
       502,
       825
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       478,
       177,
       998,
       814
      ],
      "confidence": 0.93
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       143,
       703,
       442
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.99,
     "hits": 78
    },
    "gallbladder": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.99,
     "hits": 79
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 79
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 44
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 34
    },
    "fat": {
     "first": 1.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 52
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 25
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.85
    },
    "cvs_evidence": "C1: A clear tubular structure (likely cystic artery) is visible at the top right, while the second structure (cystic duct) is obscured by the electrocautery hook and incomplete anterior dissection. C2: Although a window is visible superiorly near the artery, the remainder of the hepatocystic triangle is still being dissected and obscured by the hook. C3: The lower portion of the gallbladder has been mobilized off the liver bed, exposing a large yellow-brown area of the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The electrocautery hook obscures the central hepatocystic triangle and only one tubular structure is clearly isolated.",
    "boxes": [
     {
      "box_2d": [
       194,
       387,
       545,
       823
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       128,
       144,
       690,
       281
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       496,
       239,
       997,
       679
      ],
      "label": "liver",
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.99,
     "hits": 79
    },
    "gallbladder": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.99,
     "hits": 80
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 80
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 44
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 34
    },
    "fat": {
     "first": 1.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 53
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 82.0,
     "best": 0.9,
     "hits": 26
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Only one tubular structure is partially visible at the top right, with the electrocautery hook obscuring the rest of the hepatocystic triangle. C2: Two full-thickness windows through the hepatocystic triangle are not visible due to incomplete dissection and instrument occlusion. C3: The lower part of the gallbladder is well separated from the liver bed, clearly exposing a large yellow-brown area of the cystic plate.",
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
      "confidence": 0.4
     },
     {
      "name": "cystic_artery",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The electrocautery hook obscures the hepatocystic triangle and only one tubular structure is partially visible.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       429,
       244,
       997,
       820
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       146,
       680,
       537
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       136,
       483,
       436,
       820
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.99,
     "hits": 79
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 44
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 34
    },
    "fat": {
     "first": 1.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 53
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 26
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "c2": 0.02,
     "c3": 0.65
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not visible in this posterior/lateral view focusing on the liver bed. C2: The hepatocystic triangle and its windows are not in view as dissection is focused on separating the gallbladder from the liver bed. C3: A significant portion of the lower gallbladder has been dissected off the liver bed with the hook, exposing the yellowish cystic plate.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The camera is focused on the posterior dissection of the cystic plate; the tubular structures of the hepatocystic triangle are not visible in this frame.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       46,
       397,
       334,
       791
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       421,
       236,
       996,
       806
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       142,
       712,
       426
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.99,
     "hits": 80
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 44
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 34
    },
    "fat": {
     "first": 1.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 27
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "since": 82.0
    }
   ]
  },
  {
   "t": 85.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the peritoneum is being scored and no distinct tubular cystic duct or artery are isolated yet. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows cleared. C3: The lower gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in a very early stage; neither the cystic duct nor the cystic artery has been isolated.",
    "boxes": [
     {
      "box_2d": [
       222,
       428,
       533,
       824
      ],
      "label": "hook",
      "confidence": 0.99
     },
     {
      "box_2d": [
       0,
       143,
       672,
       440
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       504,
       243,
       999,
       816
      ],
      "label": "liver",
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.99,
     "hits": 81
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 44
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 34
    },
    "fat": {
     "first": 1.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 55
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 27
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "c1": 0.4,
     "c2": 0.25,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two tubular structures are partially visible on the right (cystic artery and a lower tubular structure wrapped in tissue), though the lower one is partly obscured by the hook and incomplete dissection. C2: There is a window between the upper tubular structure (artery) and the liver/plate, and some dissection below it, but a second full-thickness window is not yet clearly open. C3: The lower gallbladder has been dissected away from the liver bed on the left, exposing a large bile-stained cystic plate area.",
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
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "cystic_artery",
      "confidence": 0.8
     },
     {
      "name": "cystic_duct",
      "confidence": 0.6
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower tubular structure is still surrounded by connective tissue and partially obscured by the electrocautery hook, preventing full confirmation of the two-structure and hepatocystic triangle criteria.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       363,
       446,
       661,
       827
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       570,
       221,
       997,
       658
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       142,
       677,
       431
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.99,
     "hits": 82
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.98,
     "hits": 45
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 34
    },
    "fat": {
     "first": 1.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 56
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 28
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "c3": 0.25
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly discernible as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle remains filled with connective tissue and fat, with no full-thickness windows visible. C3: The cautery hook is dissecting along the peritoneal attachment near the liver bed, with partial exposure of the cystic plate area, though the lower gallbladder is not fully separated.",
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
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is incomplete; the cystic duct and cystic artery are still obscured by connective tissue and peritoneum.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       3,
       444,
       219,
       745
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       447,
       220,
       997,
       807
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       141,
       640,
       464
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.99,
     "hits": 83
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.98,
     "hits": 45
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 34
    },
    "fat": {
     "first": 1.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 57
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 28
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle still contains dense connective tissue and lacks two clear full-thickness windows. C3: The peritoneum along the liver bed has been scored and partially dissected, but the lower third of the gallbladder is not fully separated from the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is still covered in connective tissue, preventing clear identification of the cystic duct and artery.",
    "boxes": [
     {
      "box_2d": [
       0,
       408,
       158,
       680
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       429,
       249,
       996,
       666
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       426,
       622,
       782,
       815
      ],
      "label": "liver",
      "confidence": 0.91
     },
     {
      "box_2d": [
       140,
       143,
       676,
       281
      ],
      "label": "gallbladder",
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.99,
     "hits": 84
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.98,
     "hits": 45
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 34
    },
    "fat": {
     "first": 1.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 57
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 28
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible upper right entering the gallbladder. C2: Full-thickness windows are visible between the duct and artery, and between the artery and the cystic plate, with connective tissue mostly cleared. C3: The lower third of the gallbladder is dissected off the liver bed, exposing the cystic plate along the inferior margin.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.95
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
       14,
       142,
       755,
       420
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       536,
       277,
       1000,
       706
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       339,
       433,
       591,
       826
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       10,
       275,
       652,
       572
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.99,
     "hits": 85
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 46
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 36
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 35
    },
    "fat": {
     "first": 1.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 57
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 29
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "c1": 0.72,
     "c2": 0.45,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) are visible on the right entering the gallbladder, though fibrous strands still bridge the space. C2: There is a window between the duct and artery, and the hook is dissecting the space between the artery and the cystic plate, which is not yet fully cleared of connective tissue. C3: The lower gallbladder is well mobilized from the liver bed on the left, clearly exposing the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.9
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Connective tissue bands between the cystic artery and cystic plate are still being dissected by the hook.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       381,
       453,
       652,
       826
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       574,
       185,
       995,
       673
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       332,
       223,
       614
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       41,
       564,
       375,
       803
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.99,
     "hits": 86
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.98,
     "hits": 46
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 36
    },
    "fat": {
     "first": 1.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 57
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 30
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible entering the gallbladder; the hook is dissecting the peritoneal reflection along the liver bed. C2: The hepatocystic triangle is not shown or cleared into full-thickness windows in this posterior/lateral view. C3: The peritoneum along the gallbladder-liver junction is just being incised with the hook, and the lower gallbladder is not yet mobilized off the cystic plate.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is at the early stage of incising the peritoneal reflection; neither the cystic duct nor the cystic artery is exposed.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       123,
       387,
       377,
       812
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       6,
       145,
       686,
       497
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       483,
       274,
       996,
       817
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.99,
     "hits": 87
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.98,
     "hits": 46
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 36
    },
    "fat": {
     "first": 1.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 30
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.95
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct and cystic artery) are clearly dissected and seen entering the gallbladder at the upper right. Full-thickness windows are visible between the duct, artery, and cystic plate with the liver background clearly seen through them. The lower part of the gallbladder is thoroughly mobilized off the liver bed, exposing a broad area of the yellowish cystic plate.",
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
       334,
       401,
       707,
       827
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       587,
       219,
       1000,
       663
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       145,
       142,
       790,
       304
      ],
      "confidence": 0.91
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       112,
       253,
       638,
       439
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.99,
     "hits": 88
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.98,
     "hits": 47
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 37
    },
    "fat": {
     "first": 1.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 31
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct to the right and a thinner cystic artery to the left) are visible entering the gallbladder. C2: A window between the cystic duct and cystic artery is visible at the top right, while the hook is dissecting the space between the artery and the cystic plate on the left, though connective tissue still partially spans this medial space. C3: The lower portion of the gallbladder is dissected off the liver bed, exposing the yellowish cystic plate on the left.",
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
      "confidence": 0.8
     },
     {
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.7
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
    "reason_if_not": "The window between the cystic artery and cystic plate is still being dissected and is not yet completely cleared of connective tissue.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       453,
       399,
       852,
       827
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       689,
       248,
       996,
       617
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       143,
       715,
       471
      ],
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.99,
     "hits": 89
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.98,
     "hits": 48
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 38
    },
    "fat": {
     "first": 1.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 32
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the right and cystic artery centrally) are clearly skeletonized and seen entering the gallbladder. C2: Two full-thickness windows are visible between the duct, artery, and cystic plate with the liver background visible through them. C3: The lower third of the gallbladder is dissected off the liver bed, exposing a large area of the cauterized cystic plate.",
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
       142,
       726,
       403
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       510,
       403,
       895,
       823
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       317,
       168,
       577
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.99,
     "hits": 90
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.98,
     "hits": 49
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 40
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 39
    },
    "fat": {
     "first": 1.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 33
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 92.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 82.0
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
     "since": 92.0
    }
   ]
  },
  {
   "t": 95.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.45,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two tubular structures are partially visible at the top right, but the electrocautery hook and camera angle obscure their full entry into the gallbladder. C2: A window is visible above the hook between the two structures, while the hook is actively dissecting the tissue between the medial structure and the cystic plate. C3: The lower portion of the gallbladder is well separated from the liver bed, clearly exposing a wide, yellowish-brown cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.95
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
      "confidence": 0.75
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and the hook partially obscures the view of the tubular structures.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       254,
       445,
       542,
       825
      ],
      "confidence": 0.99
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       149,
       812,
       660
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       516,
       247,
       1000,
       813
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.99,
     "hits": 91
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.98,
     "hits": 50
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 40
    },
    "fat": {
     "first": 1.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 34
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 92.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 82.0
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.1
    },
    "cvs_evidence": "C1: No isolated tubular structures representing the cystic duct and cystic artery are visible entering the gallbladder. C2: The hepatocystic triangle is not dissected and no full-thickness windows are present. C3: The electrocautery hook is scoring the peritoneum along the gallbladder-liver junction, so the lower gallbladder is not yet fully separated from the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in an early stage (scoring peritoneum) and the cystic duct and artery are not yet exposed or isolated.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       14,
       357,
       345,
       801
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       458,
       148,
       1000,
       807
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       50,
       142,
       636,
       297
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.99,
     "hits": 92
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.98,
     "hits": 50
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 40
    },
    "fat": {
     "first": 1.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 34
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 92.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 82.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not visible, as the focus is on the cystic plate dissection and the hook shaft occludes the right side of the triangle. C2: Two full-thickness windows through the hepatocystic triangle are not visible in this view. C3: A significant portion of the lower gallbladder has been mobilized from the liver bed, exposing the yellowish fibrous cystic plate.",
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hook shaft occludes the medial hepatocystic triangle, and the cystic duct and artery are not clearly delineated in this frame.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       145,
       353,
       498,
       822
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       144,
       638,
       314
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       484,
       246,
       998,
       672
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       486,
       612,
       812,
       808
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.99,
     "hits": 92
    },
    "gallbladder": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.99,
     "hits": 93
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 93
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.98,
     "hits": 50
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 40
    },
    "fat": {
     "first": 1.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 34
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
   "t": 98.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) are visible at the top right, though the electrocautery hook partially obscures their direct entry into the gallbladder. C2: A window is visible between the two tubular structures at the top, and the hook is dissecting the space towards the cystic plate, though the lower window is partially obscured by the instrument. C3: The gallbladder is mobilized off the liver bed on the left, clearly exposing the yellowish-brown cystic plate.",
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
      "confidence": 0.9
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The electrocautery hook partially obstructs the lower hepatocystic triangle and the junction of the tubular structures with the gallbladder.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       116,
       369,
       442,
       821
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       468,
       246,
       998,
       671
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       468,
       629,
       811,
       809
      ],
      "confidence": 0.91
     },
     {
      "label": "gallbladder",
      "box_2d": [
       75,
       142,
       638,
       287
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.99,
     "hits": 93
    },
    "gallbladder": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.99,
     "hits": 94
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 94
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.98,
     "hits": 51
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 42
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 41
    },
    "fat": {
     "first": 1.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 59
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 35
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and artery) are visible at the top right, though the hook shaft partially obscures their lower continuity. C2: A window between the two structures is visible at the top right, while the second window between the artery and cystic plate is actively being dissected by the hook and partly obscured. C3: The lower gallbladder is well separated from the liver bed on the left, clearly exposing a wide area of the cystic plate.",
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
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.7
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
    "reason_if_not": "The hook instrument partially blocks the full view of the hepatocystic triangle and the lower window is still being dissected.",
    "boxes": [
     {
      "box_2d": [
       164,
       401,
       481,
       825
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       144,
       637,
       516
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       499,
       148,
       999,
       792
      ],
      "label": "liver",
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.99,
     "hits": 94
    },
    "gallbladder": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.99,
     "hits": 95
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 95
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.98,
     "hits": 52
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 43
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 42
    },
    "fat": {
     "first": 1.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 59
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "c2": 0.25,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two skeletonized tubular structures are partially visible at the top right, but the large electrocautery hook shaft occludes their direct connection to the gallbladder and the hepatocystic triangle. C2: Although some background liver is visible through a window between the upper structures, the lower part of the triangle is being actively dissected and is obscured by the instrument shaft. C3: The electrocautery hook is actively dissecting the cystic plate, which is partially exposed with cauterized yellow tissue, though the view of the full inferior gallbladder margin is obstructed by the instrument.",
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
      "confidence": 0.7
     },
     {
      "name": "cystic_artery",
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
      "confidence": 0.8
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The large shaft of the electrocautery hook obscures the central hepatocystic triangle and the entry of the tubular structures into the gallbladder.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       157,
       351,
       488,
       825
      ],
      "confidence": 0.99
     },
     {
      "label": "gallbladder",
      "box_2d": [
       83,
       142,
       648,
       336
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       468,
       184,
       993,
       705
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.99,
     "hits": 94
    },
    "gallbladder": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.99,
     "hits": 95
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 95
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.98,
     "hits": 52
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 43
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 42
    },
    "fat": {
     "first": 1.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 59
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly visible entering the gallbladder as dissection is just beginning. C2: The hepatocystic triangle is still covered in connective tissue and fat with no full-thickness windows created. C3: The gallbladder remains largely attached to the liver bed with only superficial peritoneal incision and minimal exposure of the cystic plate.",
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
      "confidence": 0.75
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in the early stages; the cystic duct and cystic artery have not yet been skeletonized or isolated from the surrounding connective tissue.",
    "boxes": [
     {
      "box_2d": [
       121,
       446,
       366,
       806
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       141,
       688,
       357
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       461,
       239,
       998,
       719
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       439,
       664,
       807,
       826
      ],
      "label": "liver",
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.99,
     "hits": 95
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.98,
     "hits": 52
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 43
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 42
    },
    "fat": {
     "first": 1.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 60
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "on": true,
     "since": 82.0
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
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct and artery) are isolated or seen entering the gallbladder yet, as dissection of the peritoneal covering is just beginning. C2: The hepatocystic triangle is still filled with yellow-brown fat and connective tissue, with no full-thickness windows created. C3: The lower portion of the gallbladder remains attached to the liver bed, and the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; neither the cystic duct, cystic artery, nor cystic plate has been cleared of overlying tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       142,
       662,
       442
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       454,
       186,
       1000,
       826
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       155,
       423,
       397,
       814
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.99,
     "hits": 96
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.98,
     "hits": 52
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 43
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 42
    },
    "fat": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 61
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
     "what": "c3",
     "on": false
    }
   ]
  },
  {
   "t": 103.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.85,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are visible at the top right entering the gallbladder neck. C2: Full-thickness windows are visible between the two tubular structures and between the structures and the cystic plate, with the dark liver background clearly seen through them. C3: The electrocautery hook is actively dissecting the lower gallbladder off the liver bed, exposing a large portion of the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.95
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
       203,
       411,
       460,
       822
      ],
      "confidence": 0.99
     },
     {
      "label": "liver",
      "box_2d": [
       538,
       224,
       1000,
       814
      ],
      "confidence": 0.97
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       143,
       730,
       542
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.99,
     "hits": 97
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.98,
     "hits": 53
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 43
    },
    "fat": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 61
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 104.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.85,
     "c3": 0.45
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct and cystic artery) are visible at the top right entering the gallbladder. Two clear full-thickness windows with liver background visible are present between the duct, artery, and liver bed, though the hook shaft partially crosses the lower field. The hook is actively dissecting the peritoneum along the lower gallbladder margin on the left, and the hook shaft occludes part of the cystic plate, making full separation uncertain.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.8
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       238,
       384,
       584,
       825
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       142,
       695,
       548
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       550,
       196,
       1000,
       814
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       63,
       269,
       642,
       590
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.99,
     "hits": 98
    },
    "gallbladder": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.99,
     "hits": 99
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 99
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.98,
     "hits": 54
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 45
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 44
    },
    "fat": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 61
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 38
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 105.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the right and a thinner cystic artery in the middle) are visible extending toward the gallbladder neck. C2: The hepatocystic triangle has been cleared to reveal a large window between the artery and duct with liver visible behind, and another window between the artery and cystic plate. C3: The electrocautery hook is actively dissecting the peritoneum along the cystic plate on the left, so full separation of the lower gallbladder from the liver bed is still in progress and partially occluded by the instrument.",
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
      "confidence": 0.9
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
       89,
       142,
       683,
       317
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       656,
       180,
       1000,
       613
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       496,
       371,
       935,
       827
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.99,
     "hits": 99
    },
    "gallbladder": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.99,
     "hits": 100
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 100
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.98,
     "hits": 55
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 46
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 45
    },
    "fat": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 61
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 39
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
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
     "since": 103.0
    },
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
    },
    {
     "what": "c2",
     "on": true,
     "since": 103.0
    }
   ]
  },
  {
   "t": 106.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.65
    },
    "cvs_evidence": "C1: The dissection instrument occludes the medial aspect of the hepatocystic triangle, so two distinct tubular structures entering the gallbladder cannot be confirmed. C2: Although a small gap is visible superiorly to the right, two clear full-thickness windows through the triangle are not established or visible due to instrument occlusion. C3: The gallbladder is elevated off the liver bed, exposing a broad area of the yellow-brown cystic plate along its inferior margin.",
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
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The ultrasonic/bipolar dissecting instrument blocks the view of the tubular structures in the hepatocystic triangle.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       145,
       719,
       534
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       568,
       261,
       996,
       655
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       271,
       421,
       616,
       827
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.99,
     "hits": 99
    },
    "gallbladder": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.99,
     "hits": 100
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.95,
     "hits": 100
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.98,
     "hits": 55
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 46
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 45
    },
    "fat": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 61
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 106.0,
     "best": 0.95,
     "hits": 39
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
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
     "since": 103.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.85
    },
    "cvs_evidence": "C1: The cystic duct is clearly delineated at the top right, and a smaller second structure (cystic artery) is visible adjacent to it, though partially obscured by connective tissue. C2: There is a window between the two structures, and the hook is dissecting the space toward the cystic plate, though tissue still bridges the lower part. C3: The lower portion of the gallbladder is well separated from the liver bed, exposing a wide yellow-stained cystic plate.",
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
      "confidence": 0.75
     },
     {
      "name": "cystic_plate",
      "confidence": 0.9
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not yet fully cleared of connective tissue around the second tubular structure to definitively confirm all three CVS criteria.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       144,
       669,
       526
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       588,
       162,
       1000,
       755
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       447,
       410,
       683,
       824
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.99,
     "hits": 100
    },
    "gallbladder": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.99,
     "hits": 101
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 101
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.98,
     "hits": 56
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 47
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 46
    },
    "fat": {
     "first": 1.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 62
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
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
     "since": 103.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (likely cystic duct and artery) are visible superiorly near the gallbladder neck, though one is partially obscured by the hook. C2: One clear window is seen between the two upper structures, but the lower part of the triangle towards the cystic plate is still being dissected and covered in connective tissue. C3: The lower gallbladder is still largely attached to the liver bed with ongoing cautery dissection of the peritoneum and fat, so a hanging gallbladder is not yet achieved.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower window and cystic plate dissection are incomplete, preventing full confirmation of the Critical View of Safety.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       207,
       484,
       399,
       812
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       465,
       231,
       996,
       750
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       24,
       145,
       642,
       499
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       29,
       241,
       626,
       467
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.99,
     "hits": 101
    },
    "gallbladder": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.99,
     "hits": 102
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 102
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.98,
     "hits": 57
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 63
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
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
     "what": "c2",
     "on": false
    }
   ]
  },
  {
   "t": 109.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet dissected into two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still covered in connective tissue and peritoneum, with no full-thickness windows cleared. C3: The hook is actively dissecting the peritoneum along the inferior margin of the gallbladder, so the cystic plate is only beginning to be exposed and not yet fully separated.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and the cystic duct and artery are not yet isolated.",
    "boxes": [
     {
      "box_2d": [
       262,
       492,
       549,
       825
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       588,
       147,
       783,
       241
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       108,
       143,
       934,
       599
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       2,
       290,
       393,
       716
      ],
      "label": "liver",
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.99,
     "hits": 102
    },
    "gallbladder": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.99,
     "hits": 103
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 103
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.98,
     "hits": 57
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 64
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
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
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct or artery) is partially skeletonized, with no second distinct tubular structure clearly isolated yet. C2: There is one small window being created with the hook, but the hepatocystic triangle is not sufficiently cleared of fat and connective tissue to show two full-thickness windows. C3: The peritoneum over the gallbladder neck is mostly intact and the lower part of the gallbladder has not been dissected off the cystic plate.",
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
      "confidence": 0.85
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; only one structure and one partial window are visible, and the cystic plate is not exposed.",
    "boxes": [
     {
      "box_2d": [
       0,
       194,
       621,
       812
      ],
      "confidence": 0.99,
      "label": "liver"
     },
     {
      "box_2d": [
       207,
       143,
       1000,
       567
      ],
      "confidence": 0.95,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       727,
       501,
       963,
       784
      ],
      "confidence": 0.96,
      "label": "hook"
     },
     {
      "box_2d": [
       655,
       444,
       911,
       564
      ],
      "confidence": 0.81,
      "label": "hepatocystic_window"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 103
    },
    "gallbladder": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.99,
     "hits": 104
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 104
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 65
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
     "hits": 12
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
   "events": []
  },
  {
   "t": 111.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.05
    },
    "cvs_evidence": "C1 is not achieved because no distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder. C2 is not achieved because the hepatocystic triangle is just beginning to be opened and lacks full-thickness windows. C3 is not achieved because the lower gallbladder remains largely attached to the liver bed with only a small initial cautery defect.",
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the cystic duct and cystic artery are not yet exposed or isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       174,
       623,
       824
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       327,
       146,
       1000,
       665
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       629,
       528,
       853,
       813
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       680,
       420,
       907,
       560
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.99,
     "hits": 104
    },
    "gallbladder": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.99,
     "hits": 105
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 105
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 66
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 112.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.05,
     "c3": 0.08
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are clearly dissected and visible entering the gallbladder; the foreground is mostly intact serosa and connective tissue. C2: The hepatocystic triangle is not cleared, with only a small initial cautery opening visible beneath the instrument shaft rather than two full-thickness windows. C3: The gallbladder remains largely attached to the liver bed with the instrument shaft also obscuring the view of the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.65
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and cystic artery are not yet skeletonized or clearly identifiable.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       161,
       663,
       824
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       422,
       143,
       1000,
       558
      ],
      "confidence": 0.94
     },
     {
      "label": "irrigator",
      "box_2d": [
       621,
       417,
       959,
       810
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       152,
       412,
       381
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.99,
     "hits": 105
    },
    "gallbladder": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.99,
     "hits": 106
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 106
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 67
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 113.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.05,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected and visible entering the gallbladder; peritoneal incising is just beginning. C2: The hepatocystic triangle is still covered in connective tissue and peritoneum, with only a small initial window opened by the hook. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the cystic duct and artery are not yet exposed or isolated from surrounding peritoneum and connective tissue.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       693,
       398,
       997,
       782
      ]
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.99,
     "hits": 106
    },
    "gallbladder": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.99,
     "hits": 107
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 107
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 68
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 114.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible entering the gallbladder; only the initial peritoneal incision at the gallbladder-liver junction is seen. C2: The hepatocystic triangle has not been cleared of fat and connective tissue, with no dissected windows visible. C3: The lower part of the gallbladder remains attached to the liver bed with only a small superficial opening in the peritoneum, so the cystic plate is not exposed.",
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
      "name": "fat",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection has just begun at the peritoneal reflection; the cystic duct, cystic artery, and cystic plate are still covered by peritoneum and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       150,
       665,
       822
      ],
      "label": "liver"
     },
     {
      "box_2d": [
       419,
       142,
       999,
       574
      ],
      "label": "gallbladder"
     },
     {
      "box_2d": [
       640,
       418,
       996,
       804
      ],
      "label": "irrigator"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.99,
     "hits": 107
    },
    "gallbladder": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.99,
     "hits": 108
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 108
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 69
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 115.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not clearly dissected out as two distinct tubular structures entering the gallbladder. C2: There is only a small partial opening in the peritoneum/connective tissue, without full-thickness windows clearing the hepatocystic triangle. C3: The electrocautery hook is just beginning to score the peritoneal reflection along the liver bed, so the lower gallbladder is not yet separated to expose the cystic plate.",
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
      "name": "fat",
      "confidence": 0.75
     },
     {
      "name": "cystic_plate",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in an early stage; the hepatocystic triangle is still covered by peritoneum and fibroadipose tissue, preventing identification of the cystic duct and artery.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       156,
       617,
       819
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       384,
       144,
       999,
       616
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       588,
       416,
       892,
       818
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.99,
     "hits": 108
    },
    "gallbladder": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.99,
     "hits": 109
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 109
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 70
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 116.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The hepatocystic triangle is not visible in this high viewpoint, so no tubular structures can be seen entering the gallbladder. C2: The dissection here is focused on the superior peritoneal reflection between the gallbladder and liver, not the hepatocystic triangle windows. C3: A small window of the liver bed/cystic plate is being opened near the fundus/body, not the lower third required for the hanging gallbladder view.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The camera is focused on the superior peritoneal attachment of the gallbladder to the liver; the hepatocystic triangle and ductal structures are out of view.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       172,
       662,
       822
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       367,
       142,
       1000,
       606
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       607,
       420,
       953,
       809
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       719,
       411,
       914,
       550
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.99,
     "hits": 109
    },
    "gallbladder": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.99,
     "hits": 110
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 110
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 70
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 117.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Peritoneum is only just being opened with the hook and no distinct tubular cystic duct or artery are skeletonized or visible entering the gallbladder. C2: There is only a small initial window in the peritoneum/connective tissue and the hepatocystic triangle is not cleared to show two full-thickness windows. C3: The gallbladder remains largely attached to the liver bed with the peritoneum intact along most of the inferior margin, so the cystic plate is not fully exposed.",
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
      "confidence": 0.95
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; peritoneal covering is still largely intact and the cystic duct and artery are not yet isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       169,
       624,
       821
      ],
      "label": "liver",
      "confidence": 0.99
     },
     {
      "box_2d": [
       386,
       142,
       1000,
       592
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       666,
       431,
       982,
       797
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       706,
       415,
       917,
       535
      ],
      "label": "hepatocystic_window",
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.99,
     "hits": 110
    },
    "gallbladder": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.99,
     "hits": 111
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 111
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 71
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 118.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.03,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly visible entering the gallbladder as peritoneum and connective tissue are still being divided. C2: The hepatocystic triangle is largely undissected with only a small initial peritoneal incision made by the hook, and no full-thickness windows are established. C3: The gallbladder remains attached to the liver bed with no exposed cystic plate along its inferior margin.",
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
      "confidence": 0.95
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
    "reason_if_not": "Dissection is in the very early stages (scoring peritoneum); cystic duct and cystic artery are not yet exposed or isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       159,
       627,
       822
      ],
      "label": "liver",
      "confidence": 0.99
     },
     {
      "box_2d": [
       413,
       142,
       1000,
       564
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       669,
       401,
       1000,
       787
      ],
      "label": "hook",
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.99,
     "hits": 111
    },
    "gallbladder": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.99,
     "hits": 112
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 112
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 72
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 119.0,
   "label": {
    "cvs": {
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or visible entering the gallbladder; dissection has just begun on the peritoneum. C2: The hepatocystic triangle is still covered by peritoneum and connective tissue with only an initial cautery incision visible, and no full-thickness windows are present. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate along the inferior margin.",
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
      "confidence": 0.92
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
    "reason_if_not": "The hepatocystic triangle is still undissected and covered by peritoneum and fat, so the cystic duct and artery are not yet exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       172,
       624,
       825
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       412,
       142,
       1000,
       613
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       600,
       402,
       933,
       815
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       157,
       368,
       337
      ],
      "confidence": 0.75
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       715,
       424,
       920,
       563
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.99,
     "hits": 112
    },
    "gallbladder": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.99,
     "hits": 113
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 113
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 73
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 120.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A thin tubular structure (likely cystic artery) is visible on the right, and a thicker region on the left is still covered in peritoneum, so two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: There is a window opening in the hepatocystic triangle, but deeper yellow-green tissue/fat fills the space rather than a clear full-thickness window showing the background liver, and the upper window is obscured by the hook shaft. C3: The lower gallbladder is not separated from the liver bed and the cystic plate is not exposed.",
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
      "confidence": 0.75
     },
     {
      "name": "cystic_duct",
      "confidence": 0.4
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
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct is still covered by peritoneum and the cystic plate is not exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       160,
       644,
       762
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       180,
       379,
       568,
       825
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       396,
       141,
       999,
       439
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       619,
       403,
       896,
       592
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.99,
     "hits": 113
    },
    "gallbladder": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.99,
     "hits": 114
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 114
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 74
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 121.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic artery or duct) is partially visible at the bottom right, as dissection is ongoing and the hook obscures the upper aspect. C2: A dissection plane is being opened on the cystic plate, but two full-thickness windows through the hepatocystic triangle are not yet established. C3: The peritoneum is being incised to expose a patch of the cystic plate, though the lower gallbladder is not yet fully separated along its entire inferior margin.",
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "cystic_artery",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "smoke",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and the two key tubular structures are not yet isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       273,
       355,
       747
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       198,
       403,
       586,
       827
      ],
      "confidence": 0.97
     },
     {
      "label": "gallbladder",
      "box_2d": [
       414,
       143,
       1000,
       440
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       614,
       420,
       898,
       626
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.99,
     "hits": 113
    },
    "gallbladder": {
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
    "hepatocystic_window": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 74
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 122.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The view is too close-up on the peritoneal reflection and liver bed, so the cystic duct and artery are not visible entering the gallbladder. C2: The hepatocystic triangle is largely out of the field of view and no clear windows between tubular structures are shown. C3: The electrocautery hook is actively incising the peritoneum along the gallbladder-liver junction, so the lower gallbladder is not yet separated to expose the full cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "gallbladder",
      "confidence": 0.9
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Close-up view focused on opening the peritoneal reflection; the hepatocystic triangle and its tubular structures are not in view.",
    "boxes": [
     {
      "box_2d": [
       0,
       167,
       566,
       807
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       421,
       143,
       1000,
       502
      ],
      "label": "gallbladder",
      "confidence": 0.88
     },
     {
      "box_2d": [
       540,
       368,
       912,
       823
      ],
      "label": "hook",
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.99,
     "hits": 113
    },
    "gallbladder": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.99,
     "hits": 114
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 114
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 74
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 123.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1 is not achieved because no distinct tubular cystic duct or artery are dissected out yet. C2 is not achieved because the hepatocystic triangle has only an initial peritoneal opening and no full-thickness windows. C3 is not achieved because the gallbladder remains completely attached to the liver bed along its peritoneal reflection.",
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
      "confidence": 0.8
     }
    ],
    "instruments": [
     "irrigator",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in a very early stage with only a small peritoneal incision and an irrigator shaft partially obstructing the view; cystic duct and artery are not yet exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       186,
       447,
       789
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       277,
       345,
       716,
       828
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       390,
       143,
       999,
       747
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       650,
       417,
       888,
       597
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       121,
       154,
       385,
       239
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.99,
     "hits": 113
    },
    "gallbladder": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.99,
     "hits": 114
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 114
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 74
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 124.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic artery) is partially skeletonized on the right, while the rest of the hepatocystic triangle remains covered in peritoneum and fat, so two distinct tubular structures entering the gallbladder are not yet visible. C2: There is one small window beginning to form above the visible vessel, but the hepatocystic triangle is largely uncleared of connective tissue and fat. C3: The gallbladder remains attached to the liver bed along its inferior margin with no significant exposure of the cystic plate.",
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
      "name": "cystic_artery",
      "confidence": 0.75
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.65
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct is not yet dissected or visible, and the cystic plate is not exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       183,
       424,
       592
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       107,
       319,
       487,
       823
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       164,
       153,
       386,
       253
      ],
      "confidence": 0.9
     },
     {
      "label": "gallbladder",
      "box_2d": [
       389,
       141,
       1000,
       465
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       655,
       416,
       895,
       590
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.99,
     "hits": 114
    },
    "gallbladder": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.99,
     "hits": 115
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 115
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 74
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 125.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: No distinct cystic duct and artery are isolated as two separate tubular structures entering the gallbladder, as peritoneum is still intact over the upper border and the instrument occludes the view. C2: There is one window/gap dissected at the bottom, but the hepatocystic triangle is not cleared into two full-thickness windows between two isolated structures. C3: The hook is actively scoring the peritoneum at the gallbladder-liver junction, meaning the lower gallbladder is not yet separated from the cystic plate.",
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
      "confidence": 0.75
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and peritoneum is still in progress and the hook instrument shaft partially occludes the surgical field.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       198,
       482,
       815
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       378,
       142,
       1000,
       696
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       75,
       158,
       376,
       274
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       403,
       308,
       808,
       827
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       693,
       416,
       911,
       574
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.99,
     "hits": 114
    },
    "gallbladder": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.99,
     "hits": 115
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.95,
     "hits": 115
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 125.0,
     "best": 0.95,
     "hits": 74
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 126.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a small portion of peritoneum is incised, and two distinct tubular structures entering the gallbladder are not yet dissected out. C2: There is a small superficial defect in the tissue, not a cleared hepatocystic triangle with full-thickness windows. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage, and neither the cystic duct nor the cystic artery is clearly skeletonized or isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       334,
       303,
       615,
       814
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       362,
       143,
       998,
       461
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       648,
       407,
       876,
       563
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.99,
     "hits": 115
    },
    "gallbladder": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.99,
     "hits": 116
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.95,
     "hits": 116
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.98,
     "hits": 58
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 126.0,
     "best": 0.95,
     "hits": 75
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 127.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one clear tubular structure (likely the cystic artery or duct) is isolated along the inferior border, while the rest of the triangle remains undissected. C2: One full-thickness window is visible below the isolated structure, but the upper part of the hepatocystic triangle still contains undissected connective tissue and fat. C3: The gallbladder remains largely attached to the liver bed with only a small window dissected in the peritoneum.",
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
      "confidence": 0.85
     },
     {
      "name": "cystic_artery",
      "confidence": 0.65
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; only one tubular structure is clearly isolated and the cystic plate is not sufficiently exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       278,
       143,
       998,
       621
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       73,
       319,
       563,
       785
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       556,
       428,
       755,
       544
      ],
      "confidence": 0.77
     },
     {
      "label": "grasper",
      "box_2d": [
       850,
       243,
       1000,
       350
      ],
      "confidence": 0.88
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       315,
       332,
       699
      ],
      "confidence": 0.81
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       153,
       401,
       349
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.99,
     "hits": 116
    },
    "gallbladder": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.99,
     "hits": 117
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 117
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.98,
     "hits": 59
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 76
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 128.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the peritoneum over the hepatocystic triangle is being opened, so two distinct tubular structures entering the gallbladder are not yet dissected out. C2: The hepatocystic triangle is still filled with fat and connective tissue without full-thickness windows. C3: The hook is just beginning to incise the peritoneum near the liver bed, and the lower gallbladder is not yet mobilized off the cystic plate.",
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
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the cystic duct and artery remain buried in fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       219,
       477,
       778
      ],
      "confidence": 0.96,
      "label": "liver"
     },
     {
      "box_2d": [
       300,
       143,
       993,
       611
      ],
      "confidence": 0.91,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       387,
       399,
       615,
       827
      ],
      "confidence": 0.97,
      "label": "irrigator"
     },
     {
      "box_2d": [
       820,
       226,
       998,
       346
      ],
      "confidence": 0.93,
      "label": "grasper"
     },
     {
      "box_2d": [
       0,
       165,
       349,
       353
      ],
      "confidence": 0.93,
      "label": "grasper"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.99,
     "hits": 117
    },
    "gallbladder": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.99,
     "hits": 118
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.95,
     "hits": 118
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.98,
     "hits": 59
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 128.0,
     "best": 0.95,
     "hits": 77
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 128.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 129.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one thin structure (likely the cystic artery) is partially skeletonized on the right, while the left side remains covered in peritoneum and fat without a distinct second tubular structure visible. C2: The hepatocystic triangle is largely covered by peritoneum and connective tissue, with only an initial shallow window being created by the hook. C3: The gallbladder remains attached to the liver bed along its upper and middle margins, so the cystic plate is not sufficiently exposed.",
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
      "name": "cystic_artery",
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
      "name": "hepatocystic_window",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; peritoneal covering obscures the cystic duct and cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       233,
       567,
       790
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       31,
       376,
       403,
       783
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       818,
       230,
       1000,
       349
      ],
      "confidence": 0.93
     },
     {
      "label": "gallbladder",
      "box_2d": [
       307,
       143,
       995,
       599
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.99,
     "hits": 118
    },
    "gallbladder": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.99,
     "hits": 119
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 119
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.98,
     "hits": 60
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 1.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 78
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 128.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 130.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above near the hook) are clearly skeletonized and seen entering the gallbladder. C2: The hepatocystic triangle is well cleared of fat and connective tissue with full-thickness windows visible between the structures and the liver bed. C3: The lower portion of the gallbladder is dissected off the liver bed, exposing the whitish cystic plate above the artery.",
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
      "label": "liver",
      "box_2d": [
       0,
       183,
       490,
       804
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       297,
       184,
       996,
       608
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       559,
       420,
       727,
       557
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       799,
       233,
       998,
       347
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       353,
       521,
       574,
       747
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       569,
       501,
       742,
       688
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.99,
     "hits": 119
    },
    "gallbladder": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.99,
     "hits": 120
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 120
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.98,
     "hits": 61
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 48
    },
    "fat": {
     "first": 1.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 79
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 131.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Only one clear tubular structure (likely the cystic artery or duct) is skeletonized and seen bridging the triangle, rather than two distinct tubular structures. C2: There is one large window below the bridging tubular structure, but not two distinct full-thickness windows separating duct and artery. C3: The lower portion of the gallbladder on the left is largely dissected off the liver bed, exposing a broad area of the yellowish cystic plate.",
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
      "name": "cystic_plate",
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
      "confidence": 0.85
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
    "reason_if_not": "Only one tubular structure is clearly isolated in the hepatocystic triangle; the second structure is not yet distinctly dissected.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       245,
       521,
       1000,
       828
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       143,
       996,
       762
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       421,
       150,
       636,
       636
      ],
      "confidence": 0.84
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       492,
       566,
       629,
       701
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.99,
     "hits": 120
    },
    "gallbladder": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.99,
     "hits": 121
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.95,
     "hits": 121
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.98,
     "hits": 62
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.95,
     "hits": 52
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 48
    },
    "fat": {
     "first": 1.0,
     "last": 131.0,
     "best": 0.95,
     "hits": 80
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 131.0,
     "best": 0.95,
     "hits": 42
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 68.0,
     "best": 0.9,
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
   "t": 132.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only a single main tubular band (likely cystic duct/artery complex) is visible stretching from the gallbladder neck to the hepatoduodenal ligament, rather than two clearly separated tubular structures. C2: Although a large full-thickness window is visible below the main tubular structure showing the caudate lobe behind, a second window separating the duct and artery is not formed. C3: The gallbladder neck is retracted to the left, exposing some liver bed, but the lower third of the gallbladder is not clearly dissected off the cystic plate in a hanging configuration.",
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
      "name": "cystic_duct",
      "confidence": 0.85
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
      "name": "connective_tissue",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.9
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic duct and cystic artery are not yet separated into two distinct tubular structures.",
    "boxes": [
     {
      "box_2d": [
       0,
       197,
       412,
       792
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       538,
       240,
       1000,
       641
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       263,
       519,
       1000,
       830
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       448,
       159,
       810,
       542
      ],
      "label": "cystic_plate",
      "confidence": 0.9
     },
     {
      "box_2d": [
       375,
       418,
       510,
       578
      ],
      "label": "cystic_artery",
      "confidence": 0.88
     },
     {
      "box_2d": [
       483,
       501,
       639,
       646
      ],
      "label": "cystic_duct",
      "confidence": 0.89
     },
     {
      "box_2d": [
       517,
       532,
       650,
       645
      ],
      "label": "hepatocystic_window",
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.99,
     "hits": 121
    },
    "gallbladder": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.99,
     "hits": 122
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 122
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.98,
     "hits": 63
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.95,
     "hits": 52
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 49
    },
    "fat": {
     "first": 1.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 81
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 43
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 132.0,
     "best": 0.9,
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
   "t": 133.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a single peritoneal band/tract is visible, and the cystic duct and cystic artery are not yet skeletonized into two distinct tubular structures. C2: The hepatocystic triangle remains covered in peritoneum, fat, and connective tissue with no dissected windows. C3: The gallbladder remains completely attached to the liver bed with no dissection of the cystic plate.",
    "phase": "preparation",
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
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has not yet begun; the cystic duct and artery are still completely encased in peritoneum and fat.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       169,
       480,
       810
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       274,
       145,
       903,
       597
      ],
      "confidence": 0.9
     },
     {
      "label": "gallbladder",
      "box_2d": [
       318,
       535,
       1000,
       827
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       425,
       380,
       570,
       605
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       545,
       530,
       885,
       660
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.99,
     "hits": 122
    },
    "gallbladder": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.99,
     "hits": 123
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.95,
     "hits": 123
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.98,
     "hits": 63
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.95,
     "hits": 52
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 49
    },
    "fat": {
     "first": 1.0,
     "last": 133.0,
     "best": 0.95,
     "hits": 82
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 43
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 133.0,
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
   "events": []
  },
  {
   "t": 134.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.8
    },
    "cvs_evidence": "C1: Only one clear tubular structure (likely the cystic artery or duct) is seen bridging across, rather than two distinct tubular structures entering the gallbladder. C2: There is a large dissected space/window visible below the main bridging structure showing the liver background, though a second window between two distinct structures is not clearly established. C3: The lower part of the gallbladder is dissected away from the liver bed on the left, exposing a large area of the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "gallbladder",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
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
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Only one tubular structure is clearly isolated bridging to the gallbladder; the second tubular structure is not distinctly identified.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       150,
       980,
       800
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       268,
       517,
       1000,
       829
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       433,
       145,
       831,
       538
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       378,
       366,
       520,
       572
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       498,
       480,
       680,
       642
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.99,
     "hits": 123
    },
    "gallbladder": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.99,
     "hits": 124
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 124
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.98,
     "hits": 64
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 53
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 49
    },
    "fat": {
     "first": 1.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 83
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 44
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 134.0,
     "best": 0.9,
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
   "t": 135.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.45,
     "c3": 0.85
    },
    "cvs_evidence": "C1: A prominent tubular structure (cystic duct) is clearly visible, and a possible thin vessel (cystic artery) runs below it, though it is not yet fully defined as a separate clear tubular structure entering the gallbladder. C2: There is a large full-thickness window visible below the main tubular structure showing the caudate lobe behind, though the separation between the duct and a potential thin lower artery is still covered by a thin peritoneal veil. C3: The lower portion of the gallbladder has been widely dissected off the liver bed, clearly exposing the yellowish-brown cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
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
      "name": "hepatocystic_window",
      "confidence": 0.85
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
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "cystic_artery",
      "confidence": 0.5
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Only one definitive tubular structure is fully isolated; the cystic artery is either absent from the main view or represented by the thin strand in the peritoneal fold that requires further skeletonization to confirm two distinct structures.",
    "boxes": [
     {
      "box_2d": [
       172,
       532,
       1000,
       829
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       200,
       310,
       711
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       471,
       210,
       999,
       569
      ],
      "label": "liver",
      "confidence": 0.85
     },
     {
      "box_2d": [
       215,
       144,
       762,
       545
      ],
      "label": "cystic_plate",
      "confidence": 0.88
     },
     {
      "box_2d": [
       454,
       552,
       792,
       667
      ],
      "label": "hepatocystic_window",
      "confidence": 0.86
     },
     {
      "box_2d": [
       254,
       390,
       382,
       592
      ],
      "label": "cystic_artery",
      "confidence": 0.77
     },
     {
      "box_2d": [
       381,
       514,
       576,
       683
      ],
      "label": "cystic_duct",
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.99,
     "hits": 124
    },
    "gallbladder": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.99,
     "hits": 125
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.95,
     "hits": 125
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.98,
     "hits": 65
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.95,
     "hits": 53
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.95,
     "hits": 50
    },
    "fat": {
     "first": 1.0,
     "last": 135.0,
     "best": 0.95,
     "hits": 84
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 135.0,
     "best": 0.95,
     "hits": 45
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 135.0,
     "best": 0.9,
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
   "t": 136.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.95
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the cystic duct and cystic artery) are clearly dissected and seen entering the gallbladder. C2: The hepatocystic triangle is well cleared of fat and connective tissue, revealing full-thickness windows with the liver visible behind the structures. C3: The lower portion of the gallbladder is thoroughly mobilized off the liver bed, clearly exposing a wide area of the cystic plate.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.95
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
      "confidence": 0.8
     },
     {
      "name": "fat",
      "confidence": 0.8
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
       163,
       494,
       1000,
       829
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       142,
       998,
       742
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       338,
       154,
       844,
       545
      ],
      "label": "cystic_plate",
      "confidence": 0.92
     },
     {
      "box_2d": [
       263,
       403,
       386,
       619
      ],
      "label": "cystic_artery",
      "confidence": 0.85
     },
     {
      "box_2d": [
       386,
       513,
       569,
       674
      ],
      "label": "cystic_duct",
      "confidence": 0.82
     },
     {
      "box_2d": [
       431,
       540,
       792,
       665
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.99,
     "hits": 125
    },
    "gallbladder": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.99,
     "hits": 126
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 126
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.98,
     "hits": 66
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 51
    },
    "fat": {
     "first": 1.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 85
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 46
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 136.0,
     "best": 0.9,
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
     "since": 134.0
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
     "since": 134.0
    }
   ]
  },
  {
   "t": 137.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only a single combined tubular pedicle or strand is seen spanning horizontally; two distinct tubular structures (cystic duct and artery) are not yet isolated. C2: There is a single window beneath the horizontal pedicle, not two cleared windows between duct, artery, and cystic plate. C3: The cystic plate/liver bed is partially exposed on the left, but the gallbladder neck and inferior margin are not fully separated and visible as a hanging gallbladder.",
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
      "name": "cystic_duct",
      "confidence": 0.65
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
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
    "reason_if_not": "The cystic duct and cystic artery are not yet distinctly separated from each other within the hepatocystic triangle.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       169,
       360,
       686
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       486,
       178,
       998,
       638
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       198,
       552,
       999,
       826
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       270,
       142,
       804,
       535
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       307,
       305,
       453,
       560
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.99,
     "hits": 126
    },
    "gallbladder": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.99,
     "hits": 127
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 127
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.98,
     "hits": 67
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 51
    },
    "fat": {
     "first": 1.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 86
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 137.0,
     "best": 0.9,
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
     "since": 134.0
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 138.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only a single narrow band of tissue or structure is stretched across the middle, not two distinct tubular structures entering the gallbladder. C2: There is one open space visible below the stretched band, not two full-thickness windows between a clearly dissected duct, artery, and cystic plate. C3: The gallbladder remains largely attached to the liver bed on the left without a fully exposed cystic plate below the entire inferior margin.",
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
      "name": "gi_tract",
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are not both clearly isolated and identifiable.",
    "boxes": [
     {
      "box_2d": [
       0,
       145,
       1000,
       715
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       168,
       480,
       1000,
       827
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       408,
       439,
       580,
       710
      ],
      "label": "cystic_duct",
      "confidence": 0.88
     },
     {
      "box_2d": [
       220,
       142,
       530,
       480
      ],
      "label": "cystic_plate",
      "confidence": 0.85
     },
     {
      "box_2d": [
       485,
       560,
       792,
       690
      ],
      "label": "hepatocystic_window",
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.99,
     "hits": 127
    },
    "gallbladder": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.99,
     "hits": 128
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.95,
     "hits": 128
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.98,
     "hits": 67
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 51
    },
    "fat": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.95,
     "hits": 87
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 138.0,
     "best": 0.9,
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
     "since": 134.0
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 139.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a single thin tubular structure is partially visible in the hepatocystic area, rather than two clearly dissected structures entering the gallbladder. C2: The hepatocystic triangle is still covered with peritoneal and connective tissue without two full-thickness windows. C3: The gallbladder remains largely attached to the liver bed with only a small superficial incision on the peritoneum.",
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
      "name": "cystic_artery",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are not yet skeletonized or separated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       237,
       624,
       822
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       336,
       144,
       939,
       560
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       716,
       563,
       882,
       804
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       717,
       196,
       934,
       340
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       155,
       401,
       513
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       435,
       513,
       731,
       825
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.99,
     "hits": 128
    },
    "gallbladder": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.99,
     "hits": 129
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 129
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.98,
     "hits": 67
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 51
    },
    "fat": {
     "first": 1.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 88
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 138.0,
     "best": 0.9,
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
   "events": [
    {
     "what": "c3",
     "on": false
    }
   ]
  },
  {
   "t": 140.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet dissected into distinct tubular structures connected to the gallbladder. C2: The hepatocystic triangle remains covered by peritoneum and connective tissue with no full-thickness windows created. C3: Only superficial peritoneum is incised along the gallbladder margin, and the lower gallbladder is not separated from the liver bed to expose the cystic plate.",
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
    "reason_if_not": "The hepatocystic triangle is still covered in connective tissue and fat; the cystic duct and artery have not been skeletonized or separated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       211,
       545,
       825
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       647,
       280,
       998,
       561
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       243,
       145,
       781,
       470
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       516,
       172,
       917,
       361
      ],
      "confidence": 0.97
     },
     {
      "label": "clipper",
      "box_2d": [
       611,
       604,
       762,
       820
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.99,
     "hits": 129
    },
    "gallbladder": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.99,
     "hits": 130
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.95,
     "hits": 130
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.98,
     "hits": 67
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 51
    },
    "fat": {
     "first": 1.0,
     "last": 140.0,
     "best": 0.95,
     "hits": 89
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 140.0,
     "best": 0.9,
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
   "t": 141.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and artery are not yet dissected or visible as distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still covered by peritoneal and connective tissue with no full-thickness windows created. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun, so the cystic duct, cystic artery, and cystic plate are still concealed under peritoneum and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       188,
       571,
       824
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       676,
       305,
       998,
       555
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       254,
       142,
       873,
       520
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       545,
       214,
       1000,
       442
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       617,
       609,
       761,
       822
      ],
      "label": "clipper",
      "confidence": 0.94
     },
     {
      "box_2d": [
       566,
       489,
       689,
       634
      ],
      "label": "cystic_duct",
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.99,
     "hits": 130
    },
    "gallbladder": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.99,
     "hits": 131
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.95,
     "hits": 131
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.98,
     "hits": 67
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 51
    },
    "fat": {
     "first": 1.0,
     "last": 141.0,
     "best": 0.95,
     "hits": 90
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 141.0,
     "best": 0.9,
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
   "t": 142.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only a single thin band of tissue or vessel is being dissected, and two distinct tubular structures (cystic duct and artery) entering the gallbladder are not yet skeletonized. C2: The hepatocystic triangle remains filled with undissected fat and peritoneal tissue, with no full-thickness windows cleared. C3: The peritoneum has just been scored along the gallbladder margin, and the lower gallbladder is not yet lifted off the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not clearly isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       263,
       142,
       893,
       518
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       222,
       604,
       829
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       759,
       246,
       1000,
       417
      ],
      "confidence": 0.94
     },
     {
      "label": "clipper",
      "box_2d": [
       698,
       538,
       865,
       806
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       181,
       274,
       444
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       555,
       370,
       684,
       503
      ],
      "confidence": 0.76
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       346,
       258,
       650,
       502
      ],
      "confidence": 0.74
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       631,
       414,
       762,
       594
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.99,
     "hits": 131
    },
    "gallbladder": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.99,
     "hits": 132
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 132
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.98,
     "hits": 67
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 51
    },
    "fat": {
     "first": 1.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 91
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 142.0,
     "best": 0.9,
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
   "t": 143.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly visible entering the gallbladder; the region is still covered by peritoneum and fat. C2: The hepatocystic triangle has only superficial dissection with no full-thickness windows cleared. C3: The lower part of the gallbladder remains attached to the liver bed, with only a small initial incision in the peritoneum.",
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
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still obscured by peritoneum and adipose tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       197,
       585,
       826
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       250,
       144,
       916,
       527
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       751,
       238,
       998,
       410
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       650,
       500,
       823,
       815
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.99,
     "hits": 132
    },
    "gallbladder": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.99,
     "hits": 133
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.95,
     "hits": 133
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.98,
     "hits": 67
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 51
    },
    "fat": {
     "first": 1.0,
     "last": 143.0,
     "best": 0.95,
     "hits": 92
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 143.0,
     "best": 0.9,
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
   "t": 144.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder. C2: Two full-thickness windows are dissected in the hepatocystic triangle, with an instrument passing through one and clear visibility of the liver bed through the other. C3: The gallbladder remains largely attached to the liver bed anteriorly, so the cystic plate is not fully exposed beneath a hanging gallbladder.",
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower third of the gallbladder is not yet separated from the cystic plate (C3 not achieved).",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       161,
       650,
       786
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       357,
       142,
       1000,
       532
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       788,
       549,
       986,
       724
      ],
      "confidence": 0.75
     },
     {
      "label": "grasper",
      "box_2d": [
       897,
       461,
       1000,
       617
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.99,
     "hits": 133
    },
    "gallbladder": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.99,
     "hits": 134
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 134
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.98,
     "hits": 68
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 55
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 52
    },
    "fat": {
     "first": 1.0,
     "last": 143.0,
     "best": 0.95,
     "hits": 92
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 143.0,
     "best": 0.9,
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
   "t": 145.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the peritoneum is being opened; the cystic duct and artery are not yet skeletonized as two distinct tubular structures. C2: There are no full-thickness windows dissected through the hepatocystic triangle, only a superficial peritoneal incision. C3: The lower gallbladder remains entirely attached to the liver bed with no exposed cystic plate.",
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
      "name": "cystic_artery",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; neither the cystic duct nor the cystic artery are skeletonized, and no windows have been created.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       219,
       478,
       785
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       203,
       142,
       992,
       560
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       753,
       218,
       1000,
       382
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       308,
       610,
       703,
       828
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       553,
       469,
       639,
       569
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.99,
     "hits": 134
    },
    "gallbladder": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.99,
     "hits": 135
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.95,
     "hits": 135
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.98,
     "hits": 68
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.95,
     "hits": 55
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 52
    },
    "fat": {
     "first": 1.0,
     "last": 145.0,
     "best": 0.95,
     "hits": 93
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 143.0,
     "best": 0.9,
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
   "t": 146.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.9,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are visible entering the gallbladder neck. C2: The hepatocystic triangle is well dissected with clear windows visible between the duct, artery, and cystic plate, with the liver background seen through the window. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the cystic plate above the structures.",
    "phase": "clipping_and_cutting",
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
       187,
       567,
       743
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       287,
       142,
       1000,
       582
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       648,
       522,
       917,
       808
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       807,
       223,
       1000,
       354
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       643,
       440,
       715,
       524
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.99,
     "hits": 135
    },
    "gallbladder": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.99,
     "hits": 136
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 136
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.98,
     "hits": 69
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 56
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 53
    },
    "fat": {
     "first": 1.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 94
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 48
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 143.0,
     "best": 0.9,
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
   "t": 147.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder. C2: Two full-thickness windows are visible in the hepatocystic triangle, with an instrument passing through the window between the duct and artery. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the cystic plate behind the structures.",
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
       189,
       533,
       753
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       248,
       143,
       998,
       827
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       779,
       226,
       1000,
       376
      ],
      "confidence": 0.91
     },
     {
      "label": "irrigator",
      "box_2d": [
       700,
       453,
       998,
       773
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       669,
       552,
       815,
       693
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.99,
     "hits": 136
    },
    "gallbladder": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.99,
     "hits": 137
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 137
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.98,
     "hits": 70
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 57
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 54
    },
    "fat": {
     "first": 1.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 95
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 49
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 143.0,
     "best": 0.9,
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
   "t": 148.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Only one clear tubular structure (likely the cystic artery or duct) is isolated, while the second structure is either not yet dissected or obscured by the grasper and tissue. C2: There is one large window below the isolated structure, but a second window between two distinct structures and the cystic plate is not fully established. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing a yellowish-white cystic plate.",
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
      "name": "cystic_plate",
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
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Only one tubular structure is clearly isolated and the hepatocystic triangle dissection is incomplete.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       206,
       554,
       762
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       246,
       143,
       994,
       424
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       468,
       246,
       756,
       495
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       634,
       430,
       837,
       588
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       674,
       528,
       884,
       685
      ],
      "confidence": 0.84
     },
     {
      "label": "grasper",
      "box_2d": [
       770,
       219,
       1000,
       375
      ],
      "confidence": 0.92
     },
     {
      "label": "irrigator",
      "box_2d": [
       780,
       396,
       1000,
       646
      ],
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.99,
     "hits": 137
    },
    "gallbladder": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.99,
     "hits": 138
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 138
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.98,
     "hits": 71
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 54
    },
    "fat": {
     "first": 1.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 96
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 50
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 143.0,
     "best": 0.9,
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
     "on": true,
     "since": 146.0
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
     "since": 146.0
    }
   ]
  },
  {
   "t": 149.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one clear tubular structure (likely the cystic duct) is visible along the lower border, while the rest of the triangle remains undissected. C2: One large window is visible inferior to the tubular structure, but the upper hepatocystic triangle is still covered in connective tissue and not cleared. C3: The lower portion of the gallbladder remains attached to the liver bed with only minimal initial dissection.",
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
      "name": "cystic_duct",
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and cystic plate; only one tubular structure is isolated so far.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       192,
       529,
       769
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       259,
       143,
       616,
       569
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       222,
       540,
       975,
       830
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       599,
       444,
       786,
       616
      ],
      "confidence": 0.89
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       655,
       528,
       874,
       687
      ],
      "confidence": 0.85
     },
     {
      "label": "irrigator",
      "box_2d": [
       757,
       408,
       1000,
       756
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       755,
       217,
       999,
       369
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.99,
     "hits": 138
    },
    "gallbladder": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.99,
     "hits": 139
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 139
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.98,
     "hits": 72
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 55
    },
    "fat": {
     "first": 1.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 97
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 50
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 143.0,
     "best": 0.9,
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
     "on": true,
     "since": 146.0
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 150.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the cystic duct below and cystic artery above it) are clearly dissected and seen entering the gallbladder. C2: The hepatocystic triangle is well cleared of fat and connective tissue, revealing full-thickness windows between the duct, artery, and cystic plate with the liver visible behind them. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the cystic plate above the artery.",
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
       184,
       563,
       756
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       278,
       143,
       1000,
       501
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       735,
       217,
       960,
       377
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       606,
       447,
       774,
       637
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.99,
     "hits": 139
    },
    "gallbladder": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.99,
     "hits": 140
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 140
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.98,
     "hits": 73
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 59
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 56
    },
    "fat": {
     "first": 1.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 98
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 51
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 143.0,
     "best": 0.9,
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
     "on": true,
     "since": 146.0
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 151.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.7
    },
    "cvs_evidence": "C1: Only a single tubular structure (likely the cystic artery) is clearly isolated and approached by the clipper, while a second distinct tubular structure is not clearly delineated. C2: Two full-thickness windows through the hepatocystic triangle are not visible. C3: The lower part of the gallbladder is partially mobilized from the liver bed, exposing a region of the cystic plate.",
    "phase": "clipping_and_cutting",
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
      "name": "cystic_artery",
      "confidence": 0.85
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
     }
    ],
    "instruments": [
     "grasper",
     "clipper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Only one tubular structure is clearly isolated before the clip applier enters, so the complete hepatocystic anatomy (both duct and artery) cannot be confirmed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       187,
       513,
       734
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       247,
       144,
       994,
       529
      ],
      "confidence": 0.94
     },
     {
      "label": "clipper",
      "box_2d": [
       366,
       583,
       744,
       828
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       757,
       219,
       991,
       368
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       556,
       422,
       755,
       618
      ],
      "confidence": 0.83
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.99,
     "hits": 140
    },
    "gallbladder": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.99,
     "hits": 141
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 141
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.98,
     "hits": 73
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 60
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 56
    },
    "fat": {
     "first": 1.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 99
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 52
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 143.0,
     "best": 0.9,
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
     "on": true,
     "since": 146.0
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 152.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct or artery) is clearly skeletonized, and a second distinct tubular structure entering the gallbladder is not visible. C2: There is a single window below the visible tubular structure, but the upper part of the hepatocystic triangle is not cleared to reveal a second window. C3: Some dissection of the gallbladder bed is visible on the left, but the lower third of the gallbladder is not sufficiently elevated off the cystic plate.",
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
      "name": "cystic_duct",
      "confidence": 0.8
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.75
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; only one tubular structure is isolated and the second structure is not yet identified.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       184,
       497,
       720
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       242,
       144,
       998,
       435
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       539,
       401,
       740,
       602
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       242,
       153,
       518,
       539
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       608,
       513,
       864,
       650
      ],
      "confidence": 0.8
     },
     {
      "label": "grasper",
      "box_2d": [
       734,
       197,
       980,
       334
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.99,
     "hits": 141
    },
    "gallbladder": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.99,
     "hits": 142
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 142
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.98,
     "hits": 74
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 60
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 57
    },
    "fat": {
     "first": 1.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 100
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 53
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 152.0,
     "best": 0.9,
     "hits": 24
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
     "since": 146.0
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 153.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Only one main tubular bundle (likely cystic duct or combined pedicle) is clearly seen extending toward the gallbladder, while a second separate tubular structure is not clearly delineated. C2: There is one window below the dissected structure, but the upper part of the hepatocystic triangle still contains undissected tissue without a second full-thickness window. C3: A significant portion of the lower gallbladder is dissected off the liver bed, exposing the cystic plate on the left.",
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
      "name": "cystic_duct",
      "confidence": 0.85
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; only one tubular structure and one window are clearly visible.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       196,
       1000,
       725
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       268,
       142,
       995,
       437
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       740,
       201,
       980,
       335
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       538,
       405,
       740,
       608
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       608,
       512,
       856,
       650
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.99,
     "hits": 142
    },
    "gallbladder": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.99,
     "hits": 143
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.95,
     "hits": 143
    },
    "hepatocystic_window": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.98,
     "hits": 75
    },
    "cystic_artery": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 60
    },
    "cystic_duct": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.95,
     "hits": 58
    },
    "fat": {
     "first": 1.0,
     "last": 153.0,
     "best": 0.95,
     "hits": 101
    },
    "cystic_plate": {
     "first": 3.0,
     "last": 153.0,
     "best": 0.95,
     "hits": 54
    },
    "blood": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 36.0,
     "last": 153.0,
     "best": 0.9,
     "hits": 25
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
     "since": 146.0
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
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
  },
  {
   "t": 19,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
  },
  {
   "t": 24,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.6666666666666666
  },
  {
   "t": 29,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.6666666666666666
  },
  {
   "t": 34,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 1.0
  },
  {
   "t": 39,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 1.0
  },
  {
   "t": 44,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
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
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 59,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 64,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 1.0
  },
  {
   "t": 69,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 1.0
  },
  {
   "t": 74,
   "C1": 0.3333333333333333,
   "C2": 0.3333333333333333,
   "C3": 0.6666666666666666
  },
  {
   "t": 79,
   "C1": 0.3333333333333333,
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
  },
  {
   "t": 84,
   "C1": 0.3333333333333333,
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
  },
  {
   "t": 89,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.6666666666666666
  },
  {
   "t": 94,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.6666666666666666
  },
  {
   "t": 99,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.6666666666666666
  },
  {
   "t": 104,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.6666666666666666
  },
  {
   "t": 109,
   "C1": 0.3333333333333333,
   "C2": 0.3333333333333333,
   "C3": 0.3333333333333333
  },
  {
   "t": 114,
   "C1": 0.3333333333333333,
   "C2": 0.3333333333333333,
   "C3": 0.3333333333333333
  },
  {
   "t": 119,
   "C1": 0.3333333333333333,
   "C2": 0.3333333333333333,
   "C3": 0.3333333333333333
  },
  {
   "t": 124,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.6666666666666666
  },
  {
   "t": 129,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 1.0
  },
  {
   "t": 134,
   "C1": 0.3333333333333333,
   "C2": 0.3333333333333333,
   "C3": 0.6666666666666666
  },
  {
   "t": 139,
   "C1": 0.3333333333333333,
   "C2": 0.3333333333333333,
   "C3": 1.0
  },
  {
   "t": 144,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 1.0
  },
  {
   "t": 149,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 1.0
  }
 ],
 "agreement": {
  "keyframes": 28,
  "C1": 0.6428571428571429,
  "C1_caught": [
   10,
   20
  ],
  "C2": 0.5357142857142857,
  "C2_caught": [
   9,
   22
  ],
  "C3": 0.4642857142857143,
  "C3_caught": [
   7,
   21
  ]
 },
 "rules": {
  "confirm_conf": 0.7,
  "confirm_frames": 2
 }
};
