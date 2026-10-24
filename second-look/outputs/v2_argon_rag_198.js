window.TIMELINE = {
 "video": "videos/endo198.mp4",
 "model": "gemini-4-argon",
 "prompt": "v2.txt",
 "detect_model": "gemini-3.8-flash",
 "examples": true,
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
    "cvs_evidence": "C1: Dissection has just started with peritoneum incised, so the cystic duct and cystic artery are not yet skeletonized or visible as two distinct tubular structures. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows cleared. C3: The gallbladder remains completely attached to the liver bed along its medial and lateral borders, with the cystic plate not yet exposed.",
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
    "reason_if_not": "Initial peritoneal incision only; deep structures in the hepatocystic triangle are not yet dissected.",
    "examples": [
     "Example 88_26825.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 88_24450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 117_26625.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.986.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 10_23225.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       523,
       753,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       161,
       958,
       608
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       535,
       719,
       945,
       946
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       766,
       120,
       941,
       230
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       330,
       413,
       720,
       507
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.98,
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
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Only early peritoneum scoring is visible; the cystic duct and cystic artery are not yet skeletonized or clearly defined as two distinct tubular structures. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows created. C3: The peritoneum along the lower cystic plate is only superficially incised, and the lower gallbladder is not yet mobilized off the liver bed.",
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
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages; critical structures are still covered by peritoneum and fat.",
    "examples": [
     "Example 15_30150.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.983.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.984.",
     "Example 21_84300.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (1.00). Similarity 0.983.",
     "Example 88_24700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.984.",
     "Example 117_25125.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.984.",
     "Example 88_26825.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.983."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       68,
       895,
       335
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       168,
       835,
       980
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       802,
       131,
       977,
       239
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       274,
       88,
       362
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
     "best": 0.98,
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
    "blood": {
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
    "cvs_evidence": "C1: Only a superficial peritoneal incision has been made in the hepatocystic triangle, with no tubular structures skeletonized or visible entering the gallbladder. C2: The hepatocystic triangle remains filled with undissected fat and connective tissue with no full-thickness windows created. C3: The gallbladder remains completely attached to the liver bed along its inferior margin, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still covered by peritoneum, fat, and connective tissue.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 76_58600.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (0.67). Similarity 0.985.",
     "Example 111_19250.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 107_51550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       348,
       850,
       973
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       169,
       1000,
       638
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       292,
       102,
       408
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       824,
       137,
       977,
       243
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.98,
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
    "blood": {
     "first": 1.0,
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
    "cvs_evidence": "C1: Only a superficial peritoneal incision has been made, and no distinct tubular structures are dissected or visible entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows created. C3: The gallbladder remains completely attached to the liver bed, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are still covered by fat and peritoneum.",
    "examples": [
     "Example 102_32875.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 9_21700.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.00). Similarity 0.987.",
     "Example 88_23700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 88_23450.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       560,
       857,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       212,
       973,
       624
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       368,
       104,
       521
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       734,
       127,
       946,
       276
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.98,
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
    "blood": {
     "first": 1.0,
     "last": 3.0,
     "best": 0.7,
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
   "t": 4.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the peritoneum over the hepatocystic triangle has been incised, and neither the cystic duct nor the cystic artery is isolated as a distinct tubular structure. C2: The hepatocystic triangle is still filled with connective tissue and fat, with no full-thickness windows dissected through to the background. C3: The lower portion of the gallbladder remains attached to the liver bed, with only a superficial peritoneal incision visible along the margin.",
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
    "reason_if_not": "Dissection is at a very early stage with only the peritoneum incised; tubular structures and the cystic plate are still covered by tissue.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 70_18975.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.987.",
     "Example 96_80575.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 44_44850.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 107_53675.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.986.",
     "Example 80_10225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       604,
       715,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       317,
       936,
       680
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       757,
       212,
       1000,
       381
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       376,
       106,
       457
      ],
      "confidence": 0.91
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       296,
       532,
       663,
       610
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
    "blood": {
     "first": 1.0,
     "last": 4.0,
     "best": 0.7,
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
   "t": 5.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the peritoneum over the hepatocystic triangle has been incised; no distinct tubular structures (cystic duct or artery) are skeletonized or visible entering the gallbladder. C2: The hepatocystic triangle is still filled with connective tissue and fat with no full-thickness windows created. C3: A superficial incision has been made along the peritoneal reflection, but the lower third of the gallbladder is not yet mobilized off the cystic plate.",
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage with only superficial peritoneal scoring; the cystic duct and artery are not yet exposed.",
    "examples": [
     "Example 15_31275.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.985.",
     "Example 70_19100.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 22_43425.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.985.",
     "Example 70_18975.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 107_53675.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.985.",
     "Example 15_20775.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       485,
       646,
       976
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       144,
       817,
       536
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       615,
       80,
       798,
       202
      ],
      "confidence": 0.96
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
    "blood": {
     "first": 1.0,
     "last": 5.0,
     "best": 0.7,
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
   "t": 6.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are dissected out or visible entering the gallbladder yet. C2: The hepatocystic triangle is still filled with fat and connective tissue with no full-thickness windows formed. C3: Only a small initial incision along the peritoneal reflection is visible, and the lower gallbladder is not yet separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage and the cystic duct and artery are still embedded in fat and connective tissue.",
    "examples": [
     "Example 22_43425.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 15_20775.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 17_46625.jpg: experts said C1 yes (1.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.987.",
     "Example 87_49475.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.987.",
     "Example 15_31275.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 22_40425.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       440,
       735,
       986
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       108,
       548,
       483
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       346,
       68,
       482,
       175
      ],
      "confidence": 0.97
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
    "blood": {
     "first": 1.0,
     "last": 6.0,
     "best": 0.7,
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
   "t": 7.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only the peritoneum over the hepatocystic triangle has been incised; no distinct tubular structures (cystic duct or artery) are skeletonized or visible entering the gallbladder. C2: The hepatocystic triangle is still filled with fat and connective tissue with no full-thickness windows dissected. C3: A small portion of the peritoneum along the liver bed has been scored, but the lower third of the gallbladder is not yet mobilized off the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in a very early stage; the hepatocystic triangle is still covered by fat and connective tissue, hiding the cystic duct and artery.",
    "examples": [
     "Example 22_43425.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 109_21600.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (0.67). Similarity 0.989.",
     "Example 15_30400.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 15_20775.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 74_11675.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 44_41975.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       427,
       769,
       991
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       120,
       623,
       508
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       456,
       73,
       589,
       178
      ],
      "label": "grasper",
      "confidence": 0.97
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
    "blood": {
     "first": 1.0,
     "last": 6.0,
     "best": 0.7,
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
   "t": 8.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only early superficial dissection is visible; the cystic duct and cystic artery are not yet isolated as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still filled with fat and connective tissue with no full-thickness windows created. C3: The peritoneum along the liver bed has just been scored, and the lower gallbladder is not yet mobilized off the cystic plate.",
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and the cystic duct and artery are still embedded in fat and connective tissue.",
    "examples": [
     "Example 17_46500.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 56_18950.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 17_46750.jpg: experts said C1 yes (1.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 15_20775.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 22_43425.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 15_20400.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       428,
       74,
       564,
       301
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       78,
       778,
       442
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       562,
       1000,
       988
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       248,
       750,
       645
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       270,
       455,
       535,
       555
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       400,
       350,
       655,
       485
      ],
      "confidence": 0.75
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
    "blood": {
     "first": 1.0,
     "last": 8.0,
     "best": 0.7,
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
   "t": 9.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder cannot be identified as dissection has just begun and the view is blurry. C2: The hepatocystic triangle is still filled with fat and connective tissue with no full-thickness windows visible. C3: The lower part of the gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "out_of_focus",
    "can_confirm_anatomy": false,
    "reason_if_not": "The dissection of the hepatocystic triangle is at a very early stage and the camera is out of focus.",
    "examples": [
     "Example 103_10600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.982.",
     "Example 42_46650.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.33). Similarity 0.984.",
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.982.",
     "Example 56_18950.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.984.",
     "Example 70_18975.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.983.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       487,
       88,
       691,
       392
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       334,
       737,
       707
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       638,
       670,
       989
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       83,
       560,
       458
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.99,
     "hits": 9
    },
    "liver": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.99,
     "hits": 9
    },
    "fat": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 9
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 9
    },
    "blood": {
     "first": 1.0,
     "last": 8.0,
     "best": 0.7,
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
   "t": 10.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only the anterior peritoneal layer has been incised, and two distinct tubular structures are not yet skeletonized or clearly identifiable entering the gallbladder. C2: There is only a superficial opening in the hepatocystic triangle with dense tissue and no full-thickness windows visible. C3: A small portion of the peritoneum near the liver bed is incised, but the lower third of the gallbladder is not yet lifted off the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages with fat and connective tissue still covering the cystic duct and artery.",
    "examples": [
     "Example 103_12475.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 15_20775.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 17_46750.jpg: experts said C1 yes (1.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 56_18950.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 108_40675.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 103_9100.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "box_2d": [
       364,
       69,
       518,
       326
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       277,
       524,
       689
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       592,
       626,
       982
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       77,
       403,
       451
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
     "last": 10.0,
     "best": 0.99,
     "hits": 10
    },
    "liver": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.99,
     "hits": 10
    },
    "fat": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 10
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.95,
     "hits": 10
    },
    "blood": {
     "first": 1.0,
     "last": 8.0,
     "best": 0.7,
     "hits": 5
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 10.0,
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
   "t": 11.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the initial peritoneal incision has been made, and no distinct tubular structures (cystic duct or artery) are isolated or clearly visible entering the gallbladder. C2: The hepatocystic triangle is still filled with connective and fatty tissue with no full-thickness windows dissected. C3: The lower portion of the gallbladder remains attached to the liver bed, with only superficial scoring of the peritoneum.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages; the cystic duct, cystic artery, and cystic plate have not yet been exposed.",
    "examples": [
     "Example 76_58725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.988.",
     "Example 70_18975.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.988.",
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 60_34825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 74_10550.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 52_25550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       516,
       88,
       747,
       381
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       328,
       780,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       81,
       600,
       520
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.99,
     "hits": 11
    },
    "liver": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.99,
     "hits": 11
    },
    "fat": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.95,
     "hits": 11
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.95,
     "hits": 11
    },
    "blood": {
     "first": 1.0,
     "last": 8.0,
     "best": 0.7,
     "hits": 5
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 10.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 11.0,
     "best": 0.8,
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
     "c1": 0.15,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The peritoneum over the hepatocystic triangle has been opened, showing early outlines of the cystic duct and possibly the artery, but they are not yet skeletonized into two distinct tubular structures. C2: There are no full-thickness windows through the hepatocystic triangle; dense connective tissue and fat still fill the space behind the incised peritoneum. C3: The lower portion of the gallbladder remains attached to the liver bed, with only a superficial peritoneal incision along the medial border.",
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
      "name": "cystic_artery",
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; tubular structures are not yet cleared of surrounding connective tissue and fat, and no windows have been created.",
    "examples": [
     "Example 80_10225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 56_18950.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.985.",
     "Example 52_25550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 74_10550.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (0.67). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       280,
       725,
       727
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       625,
       691,
       989
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       492,
       77,
       706,
       336
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       217,
       550,
       657,
       718
      ],
      "confidence": 0.72
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       253,
       517,
       540,
       624
      ],
      "confidence": 0.74
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.99,
     "hits": 12
    },
    "liver": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.99,
     "hits": 12
    },
    "fat": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 12
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 12
    },
    "blood": {
     "first": 1.0,
     "last": 12.0,
     "best": 0.7,
     "hits": 6
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 10.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 11.0,
     "best": 0.8,
     "hits": 1
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 12.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 12.0,
     "best": 0.55,
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
   "t": 13.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is in an early stage and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly defined. C2: The hepatocystic triangle still contains fat and connective tissue with no full-thickness windows visible through to the background liver. C3: Only a small initial incision has been made in the peritoneum, and the lower third of the gallbladder is not yet separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; cystic duct and artery are still embedded in fat and connective tissue.",
    "examples": [
     "Example 87_50100.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.988.",
     "Example 15_20775.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.990.",
     "Example 15_31275.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 15_20400.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 70_18975.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.987.",
     "Example 56_18950.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       427,
       73,
       626,
       345
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       284,
       653,
       679
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       634,
       595,
       982
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       399,
       423,
       603,
       575
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
     "last": 13.0,
     "best": 0.99,
     "hits": 13
    },
    "liver": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.99,
     "hits": 13
    },
    "fat": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 13
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 13
    },
    "blood": {
     "first": 1.0,
     "last": 13.0,
     "best": 0.7,
     "hits": 6
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 10.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 11.0,
     "best": 0.8,
     "hits": 1
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 12.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 12.0,
     "best": 0.55,
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
   "t": 14.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the peritoneum is opened and no distinct tubular structures (cystic duct and artery) are skeletonized or clearly seen entering the gallbladder. C2: The hepatocystic triangle still contains dense connective and fatty tissue with no full-thickness windows visible. C3: Only a superficial incision is made along the gallbladder-liver junction, and the lower gallbladder is not separated to expose the cystic plate.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; neither the cystic duct nor the cystic artery is skeletonized, and no full-thickness windows or cystic plate exposure are achieved.",
    "examples": [
     "Example 76_58725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.988.",
     "Example 56_18950.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 15_31525.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 15_20775.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 70_18975.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.988.",
     "Example 15_20400.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       438,
       77,
       684,
       368
      ],
      "confidence": 0.95,
      "label": "grasper"
     },
     {
      "box_2d": [
       0,
       308,
       622,
       655
      ],
      "confidence": 0.92,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       638,
       558,
       982
      ],
      "confidence": 0.93,
      "label": "liver"
     },
     {
      "box_2d": [
       386,
       446,
       582,
       574
      ],
      "confidence": 0.58,
      "label": "hepatocystic_window"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.99,
     "hits": 14
    },
    "liver": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.99,
     "hits": 14
    },
    "fat": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 14
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 14
    },
    "blood": {
     "first": 1.0,
     "last": 13.0,
     "best": 0.7,
     "hits": 6
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 10.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 11.0,
     "best": 0.8,
     "hits": 1
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 12.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 12.0,
     "best": 0.55,
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
   "t": 15.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the peritoneum over the hepatocystic triangle has been incised, and neither the cystic duct nor the cystic artery is dissected into a clearly visible tubular structure. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows present. C3: The gallbladder remains completely attached to the liver bed, with only a superficial peritoneal incision along the medial border.",
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages; the cystic duct and cystic artery are still buried within fat and connective tissue.",
    "examples": [
     "Example 17_46500.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.984.",
     "Example 15_20775.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 17_46750.jpg: experts said C1 yes (1.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.984.",
     "Example 15_20400.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 108_39675.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.983.",
     "Example 56_18950.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       321,
       676,
       665
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       625,
       590,
       989
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       74,
       563,
       437
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       515,
       89,
       810,
       385
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       146,
       545,
       477,
       650
      ],
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
     "hits": 15
    },
    "liver": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.99,
     "hits": 15
    },
    "fat": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 15
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 15
    },
    "blood": {
     "first": 1.0,
     "last": 15.0,
     "best": 0.7,
     "hits": 7
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 10.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 11.0,
     "best": 0.8,
     "hits": 1
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 12.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 12.0,
     "best": 0.55,
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
   "t": 16.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: The cystic duct and artery are still embedded in the fatty tissue of the hepatocystic triangle and are not clearly isolated as two distinct tubular structures entering the gallbladder. C2: There is only a shallow cauterized pocket in the peritoneum and fat of the hepatocystic triangle, with no full-thickness windows cleared through to the background liver. C3: Peritoneal scoring has begun along the medial gallbladder wall, but the lower third of the gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
      "name": "cystic_duct",
      "confidence": 0.4
     },
     {
      "name": "cystic_artery",
      "confidence": 0.35
     },
     {
      "name": "cystic_plate",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct and artery remain obscured by fat and connective tissue and no full-thickness windows or clear cystic plate exposure are present.",
    "examples": [
     "Example 80_10225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 15_20775.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 42_46650.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.33). Similarity 0.986.",
     "Example 56_18950.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 70_18975.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       584,
       606,
       987
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       276,
       712,
       660
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       535,
       91,
       772,
       336
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       461,
       410,
       670,
       547
      ],
      "confidence": 0.69
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.99,
     "hits": 16
    },
    "liver": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.99,
     "hits": 16
    },
    "fat": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 16
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 16
    },
    "blood": {
     "first": 1.0,
     "last": 15.0,
     "best": 0.7,
     "hits": 7
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 11.0,
     "best": 0.8,
     "hits": 1
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
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
   "t": 17.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only initial peritoneal scoring and superficial dissection of the hepatocystic triangle has been performed, with no distinct tubular structures isolated yet. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows created. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; neither the cystic duct, cystic artery, nor cystic plate are exposed.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.988.",
     "Example 70_18975.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 96_80575.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 83_66800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 76_58725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.987.",
     "Example 44_44850.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       585,
       652,
       989
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       118,
       563,
       405
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       285,
       782,
       663
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       599,
       114,
       856,
       344
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.99,
     "hits": 17
    },
    "liver": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.99,
     "hits": 17
    },
    "fat": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 17
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 17
    },
    "blood": {
     "first": 1.0,
     "last": 15.0,
     "best": 0.7,
     "hits": 7
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 17.0,
     "best": 0.8,
     "hits": 2
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
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
   "t": 18.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the initial peritoneal scoring has been performed and no distinct tubular structures are skeletonized or clearly visible entering the gallbladder. C2: The hepatocystic triangle is still filled with connective tissue and fat with no full-thickness windows created. C3: The inferior margin of the gallbladder remains completely attached to the liver bed with only superficial peritoneal incision.",
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
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; the cystic duct and artery are still covered by fat and connective tissue.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 70_18975.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 76_58600.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (0.67). Similarity 0.985.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 76_58725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.985.",
     "Example 44_44850.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.985."
    ],
    "boxes": [
     {
      "box_2d": [
       609,
       118,
       887,
       381
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       319,
       767,
       658
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       618,
       668,
       988
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       257,
       537,
       731,
       629
      ],
      "label": "cystic_artery",
      "confidence": 0.72
     },
     {
      "box_2d": [
       632,
       496,
       999,
       977
      ],
      "label": "cystic_duct",
      "confidence": 0.8
     },
     {
      "box_2d": [
       801,
       670,
       998,
       794
      ],
      "label": "hook",
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.99,
     "hits": 18
    },
    "liver": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.99,
     "hits": 18
    },
    "fat": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 18
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 18
    },
    "blood": {
     "first": 1.0,
     "last": 15.0,
     "best": 0.7,
     "hits": 7
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 18.0,
     "best": 0.8,
     "hits": 3
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
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
   "t": 19.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection has just begun and neither the cystic duct nor the cystic artery is skeletonized as a distinct tubular structure entering the gallbladder. C2: The hepatocystic triangle is still filled with connective tissue and fat, with no full-thickness windows visible. C3: Only a shallow peritoneal incision has been made along the medial gallbladder margin, and the lower gallbladder is not separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; critical biliary and vascular structures are still obscured by peritoneum and fibrous tissue.",
    "examples": [
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.990.",
     "Example 48_53925.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 112_21475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 99_26550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.989.",
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       636,
       603,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       84,
       705,
       432
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       330,
       993,
       858
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       591,
       117,
       900,
       393
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       512,
       563,
       1000,
       935
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.99,
     "hits": 19
    },
    "liver": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.99,
     "hits": 19
    },
    "fat": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 19
    },
    "blood": {
     "first": 1.0,
     "last": 15.0,
     "best": 0.7,
     "hits": 7
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 19.0,
     "best": 0.8,
     "hits": 4
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
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
   "t": 20.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is in a very early stage with only peritoneum and superficial connective tissue incised; no distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue, with no full-thickness windows created yet. C3: A small peritoneal incision has been made along the hepatocystic border, but the lower third of the gallbladder is not yet mobilized off the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and cystic artery are still completely covered by peritoneum and fibrofatty tissue.",
    "examples": [
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.988.",
     "Example 57_36775.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.987.",
     "Example 60_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 63_61875.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       336,
       977,
       808
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       593,
       608,
       990
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       80,
       628,
       433
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       599,
       118,
       921,
       393
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       516,
       528,
       997,
       922
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.99,
     "hits": 20
    },
    "liver": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.99,
     "hits": 20
    },
    "fat": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 20
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 20
    },
    "blood": {
     "first": 1.0,
     "last": 15.0,
     "best": 0.7,
     "hits": 7
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 20.0,
     "best": 0.8,
     "hits": 5
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
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
   "t": 21.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection has just started with peritoneum being incised; no isolated tubular structures (cystic duct or artery) are visible entering the gallbladder. C2: The hepatocystic triangle is still covered by peritoneum and fat, with no full-thickness windows created yet. C3: Only a superficial peritoneal incision has been made along the gallbladder margin, and the lower gallbladder is not yet lifted off the cystic plate.",
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
    "reason_if_not": "Initial peritoneal incision stage; cystic duct and cystic artery are not yet dissected or visible.",
    "examples": [
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 60_36825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 57_36775.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.989.",
     "Example 60_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 99_26675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 71_12425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       349,
       802,
       686
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       609,
       630,
       990
      ],
      "label": "liver",
      "confidence": 0.94
     },
     {
      "box_2d": [
       618,
       131,
       947,
       409
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       614,
       539,
       999,
       875
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
     "last": 21.0,
     "best": 0.99,
     "hits": 21
    },
    "liver": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.99,
     "hits": 21
    },
    "fat": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 21
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 21
    },
    "blood": {
     "first": 1.0,
     "last": 15.0,
     "best": 0.7,
     "hits": 7
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 21.0,
     "best": 0.8,
     "hits": 6
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
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
   "t": 22.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is in an early stage and two distinct tubular structures entering the gallbladder are not yet isolated. C2: The hepatocystic triangle is still covered by peritoneum, fat, and connective tissue with no full-thickness windows visible. C3: Only a small incision has been made along the peritoneal reflection, and the lower gallbladder is not separated from the cystic plate.",
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Initial dissection of the hepatocystic triangle; the cystic duct and cystic artery remain obscured by overlying peritoneum and fibrofatty tissue.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.990.",
     "Example 58_11125.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 96_76575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       351,
       755,
       672
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       647,
       574,
       982
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       584,
       123,
       925,
       410
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       587,
       550,
       998,
       903
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
     "last": 22.0,
     "best": 0.99,
     "hits": 22
    },
    "liver": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.99,
     "hits": 22
    },
    "fat": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 22
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 22
    },
    "blood": {
     "first": 1.0,
     "last": 22.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 22.0,
     "best": 0.85,
     "hits": 7
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
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
   "t": 23.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly visible. C2: The hepatocystic triangle is still filled with connective tissue and fat, with no full-thickness windows cleared. C3: Peritoneum is scored along the gallbladder-liver junction, but the lower third of the gallbladder is not yet detached from the cystic plate.",
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
    "reason_if_not": "Cystic duct and artery are still encased in fat and connective tissue within the hepatocystic triangle.",
    "examples": [
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.989.",
     "Example 60_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.991.",
     "Example 96_78575.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.989.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 117_19500.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.989.",
     "Example 117_18875.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       360,
       770,
       693
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       642,
       593,
       987
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       558,
       115,
       931,
       421
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       568,
       583,
       1000,
       937
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       79,
       747,
       439
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
     "best": 0.99,
     "hits": 23
    },
    "liver": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.99,
     "hits": 23
    },
    "fat": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 23
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 23
    },
    "blood": {
     "first": 1.0,
     "last": 22.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 8
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
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
   "t": 24.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the inferior border structure (likely cystic duct) is starting to be delineated, while the cystic artery is still buried in tissue. C2: The hepatocystic triangle is still early in dissection with no full-thickness windows cleared through the tissue. C3: The peritoneum along the liver bed has just been scored, and the lower gallbladder is not yet mobilized off the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; tubular structures and the cystic plate are not yet skeletonized or cleared.",
    "examples": [
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.990.",
     "Example 60_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.991.",
     "Example 76_54850.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.990.",
     "Example 56_17950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.990.",
     "Example 71_12425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       345,
       680,
       668
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       643,
       540,
       987
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       70,
       772,
       434
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       515,
       110,
       893,
       417
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       492,
       550,
       996,
       945
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.99,
     "hits": 24
    },
    "liver": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.99,
     "hits": 24
    },
    "fat": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 24
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 24
    },
    "blood": {
     "first": 1.0,
     "last": 22.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 9
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 24.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
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
   "t": 25.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Early dissection in the hepatocystic triangle with peritoneum just incised; no distinct tubular cystic duct and artery are isolated yet. C2: The hepatocystic triangle remains filled with fat and connective tissue with only a small initial opening, lacking full-thickness windows. C3: The lower part of the gallbladder remains attached to the liver bed with the peritoneum only beginning to be scored.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage and the cystic duct and artery are still covered by fat and connective tissue.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 50_11850.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 74_9550.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 50_12100.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 48_53925.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       367,
       737,
       614
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       648,
       573,
       985
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       510,
       115,
       898,
       437
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       587,
       577,
       999,
       908
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.99,
     "hits": 25
    },
    "liver": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.99,
     "hits": 25
    },
    "fat": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 25
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 25
    },
    "blood": {
     "first": 1.0,
     "last": 22.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 24.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
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
   "t": 26.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection has just begun in the hepatocystic triangle and no distinct tubular structures (cystic duct or artery) are isolated or clearly visible entering the gallbladder. C2: The hepatocystic triangle is still filled with fat and connective tissue, with only a small superficial incision and no full-thickness windows. C3: The peritoneum along the liver bed has just been scored, so the lower part of the gallbladder is not yet separated to expose the cystic plate.",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in a very early stage; the hepatocystic triangle is still covered by peritoneum and fat, preventing identification of the cystic duct, cystic artery, and cystic plate.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 50_13225.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 80_9975.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       370,
       717,
       691
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       649,
       544,
       989
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       73,
       625,
       443
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       508,
       114,
       888,
       437
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       544,
       576,
       996,
       942
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
     "last": 26.0,
     "best": 0.99,
     "hits": 26
    },
    "liver": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.99,
     "hits": 26
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
     "hits": 26
    },
    "blood": {
     "first": 1.0,
     "last": 26.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 26.0,
     "best": 0.85,
     "hits": 11
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 24.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
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
   "t": 27.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) is partially defined, while the upper part of the triangle remains undissected without a distinct second tubular structure. C2: The hepatocystic triangle is still filled with connective tissue and fat, with the hook just beginning to create a small opening. C3: The gallbladder remains largely attached to the liver bed with only a superficial peritoneal incision visible along the border, so the cystic plate is not yet exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; two distinct tubular structures and the cystic plate are not yet exposed.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 57_34900.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 110_31675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 104_35725.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 50_10350.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       360,
       701,
       663
      ],
      "confidence": 0.94,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       612,
       538,
       984
      ],
      "confidence": 0.96,
      "label": "liver"
     },
     {
      "box_2d": [
       524,
       117,
       934,
       425
      ],
      "confidence": 0.98,
      "label": "grasper"
     },
     {
      "box_2d": [
       498,
       581,
       948,
       965
      ],
      "confidence": 0.97,
      "label": "hook"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.99,
     "hits": 27
    },
    "liver": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.99,
     "hits": 27
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
     "hits": 27
    },
    "blood": {
     "first": 1.0,
     "last": 26.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 27.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 27.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
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
   "t": 28.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely the cystic duct) is partially outlined, while the cystic artery is still buried in tissue where the hook is dissecting. C2: A small initial opening is being made by the hook, but the hepatocystic triangle is still filled with connective tissue and lacks full-thickness windows. C3: The gallbladder remains largely attached to the liver bed with only superficial peritoneal scoring, so the cystic plate is not exposed.",
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
      "name": "fat",
      "confidence": 0.9
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; two distinct tubular structures, full-thickness windows, and the cystic plate are not yet exposed.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 100_32425.jpg: experts said C1 no (0.00), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 74_9550.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 59_37200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 57_34900.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.989.",
     "Example 88_23200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       376,
       644,
       638
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       660,
       507,
       977
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       469,
       107,
       900,
       442
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       507,
       612,
       907,
       960
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       146,
       605,
       477,
       726
      ],
      "label": "cystic_plate",
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.99,
     "hits": 28
    },
    "liver": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.99,
     "hits": 28
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
     "hits": 28
    },
    "blood": {
     "first": 1.0,
     "last": 26.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 2
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
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
   "t": 29.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Dissection has just started with a small peritoneal incision, and no tubular structures are skeletonized or visible entering the gallbladder. C2: The hepatocystic triangle remains covered in fat and peritoneum without any full-thickness windows. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection is in the very early stages; the hepatocystic triangle is still covered by peritoneum and fat.",
    "examples": [
     "Example 64_37450.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.991.",
     "Example 57_36525.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 83_62050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.990.",
     "Example 83_57300.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 60_32200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       398,
       708,
       686
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       661,
       529,
       977
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       462,
       116,
       917,
       466
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       581,
       632,
       972,
       940
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       492,
       563,
       597,
       634
      ],
      "confidence": 0.77
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       140,
       611,
       484,
       691
      ],
      "confidence": 0.74
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.99,
     "hits": 29
    },
    "liver": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.99,
     "hits": 29
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
     "hits": 29
    },
    "blood": {
     "first": 1.0,
     "last": 26.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 29.0,
     "best": 0.85,
     "hits": 14
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 2
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
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
   "t": 30.0,
   "label": {
    "cvs": {
     "c1": 0.2,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) is partially delineated, while the upper part of the triangle remains undissected without a clear second tubular structure. C2: There is a small window beginning to form above the lower structure, but the hepatocystic triangle is still largely covered by peritoneum and connective tissue. C3: The lower part of the gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; tubular structures and the cystic plate are not yet fully cleared and exposed.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 56_17950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 22_44050.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 83_57675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 80_9975.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       438,
       114,
       876,
       466
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       543,
       606,
       991,
       951
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       390,
       662,
       709
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       0,
       665,
       515,
       982
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
     "last": 30.0,
     "best": 1.0,
     "hits": 30
    },
    "liver": {
     "first": 0.0,
     "last": 30.0,
     "best": 1.0,
     "hits": 30
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
     "hits": 30
    },
    "blood": {
     "first": 1.0,
     "last": 26.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 30.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 30.0,
     "best": 0.75,
     "hits": 3
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
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
   "t": 31.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a single tissue fold is being grasped and dissected, with no two distinct tubular structures visible entering the gallbladder. C2: The hepatocystic triangle is just beginning to be opened by the hook and no full-thickness windows are established. C3: The lower gallbladder is not mobilized off the liver bed, and the grasper shaft heavily occludes the foreground.",
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
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Early stage of dissection with the grasper shaft obstructing a large portion of the view and critical structures not yet isolated.",
    "examples": [
     "Example 80_9225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 45_28700.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 74_9550.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.985.",
     "Example 57_36275.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.987.",
     "Example 57_35775.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       319,
       801,
       980
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       80,
       843,
       716
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       307,
       750,
       527,
       986
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       17,
       650,
       363,
       806
      ],
      "confidence": 0.72
     },
     {
      "label": "gallbladder",
      "box_2d": [
       414,
       761,
       859,
       979
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 31.0,
     "best": 1.0,
     "hits": 30
    },
    "liver": {
     "first": 0.0,
     "last": 31.0,
     "best": 1.0,
     "hits": 30
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
    "blood": {
     "first": 1.0,
     "last": 26.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 30.0,
     "best": 0.75,
     "hits": 3
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
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
   "t": 32.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one thick band of tissue is visible at the base of the gallbladder; two distinct tubular structures are not yet dissected. C2: There is only a small superficial scoring/gap in the peritoneum and fat, with no full-thickness windows through the hepatocystic triangle. C3: The peritoneum along the liver bed has just been scored, so the lower gallbladder is not separated from the cystic plate.",
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
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun, with fat and peritoneum still covering the cystic duct and artery.",
    "examples": [
     "Example 76_58725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.985.",
     "Example 88_23700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 76_55225.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.985.",
     "Example 52_25550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 58_12500.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 60_34825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       659,
       488,
       986
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       372,
       646,
       673
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       473,
       145,
       988,
       545
      ],
      "confidence": 0.97
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       507,
       589,
       662,
       716
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
     "best": 1.0,
     "hits": 31
    },
    "liver": {
     "first": 0.0,
     "last": 32.0,
     "best": 1.0,
     "hits": 31
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
    "blood": {
     "first": 1.0,
     "last": 26.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 30.0,
     "best": 0.75,
     "hits": 3
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
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
   "t": 33.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: A small window is being opened in the hepatocystic triangle, but the triangle is not yet fully cleared of fat and connective tissue to reveal two full-thickness windows. C3: The peritoneum along the liver bed is only beginning to be incised by the hook, and the lower gallbladder is not separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with fat and peritoneum still covering the cystic structures.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 83_58175.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       381,
       808,
       664
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       651,
       461,
       980
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       681,
       192,
       1000,
       442
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       495,
       630,
       818,
       969
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       201,
       582,
       526,
       663
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       538,
       520,
       706,
       611
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 33.0,
     "best": 1.0,
     "hits": 32
    },
    "liver": {
     "first": 0.0,
     "last": 33.0,
     "best": 1.0,
     "hits": 32
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
    "blood": {
     "first": 1.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 9
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 16.0,
     "best": 0.4,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 30.0,
     "best": 0.75,
     "hits": 3
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 16.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 33.0,
     "best": 0.65,
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
     "c1": 0.45,
     "c2": 0.25,
     "c3": 0.35
    },
    "cvs_evidence": "C1: A lower tubular band (likely cystic duct) and an upper tissue bundle near the hook tip are partially delineated, though not yet fully skeletonized as two distinct tubular structures. C2: One clear window is opened above the lower structure, but the upper window between the second structure and the cystic plate is still being dissected by the hook. C3: A vertical groove has been scored along the liver attachment, but the lower gallbladder is not yet elevated off the cystic plate as a hanging gallbladder.",
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
      "confidence": 0.55
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.8
     },
     {
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete, so the second structure and upper window are not fully cleared.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 96_76575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       395,
       800,
       689
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       660,
       495,
       982
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       200,
       313,
       755,
       451
      ],
      "confidence": 0.82
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       538,
       529,
       706,
       658
      ],
      "confidence": 0.76
     },
     {
      "label": "grasper",
      "box_2d": [
       672,
       175,
       998,
       451
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       512,
       625,
       876,
       964
      ],
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 34.0,
     "best": 1.0,
     "hits": 33
    },
    "liver": {
     "first": 0.0,
     "last": 34.0,
     "best": 1.0,
     "hits": 33
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
    "blood": {
     "first": 1.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 9
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 34.0,
     "best": 0.75,
     "hits": 4
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 34.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 34.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
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
    "cvs_evidence": "C1: Only the peritoneum over the hepatocystic triangle has been incised; no distinct cystic duct and artery are isolated as two tubular structures entering the gallbladder. C2: The hepatocystic triangle is still filled with connective tissue and fat, with no full-thickness windows cleared. C3: A small strip of peritoneum along the liver bed is scored, but the lower third of the gallbladder is not yet separated from the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Early dissection of the hepatocystic triangle; the cystic duct, cystic artery, and cystic plate are still covered by peritoneum and fibrofatty tissue.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       370,
       798,
       685
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       652,
       471,
       983
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       70,
       725,
       430
      ],
      "label": "liver",
      "confidence": 0.88
     },
     {
      "box_2d": [
       682,
       180,
       1000,
       434
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       447,
       575,
       835,
       976
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
     "best": 1.0,
     "hits": 34
    },
    "liver": {
     "first": 0.0,
     "last": 35.0,
     "best": 1.0,
     "hits": 34
    },
    "fat": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 34
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 34
    },
    "blood": {
     "first": 1.0,
     "last": 33.0,
     "best": 0.8,
     "hits": 9
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 34.0,
     "best": 0.75,
     "hits": 4
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 34.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 34.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 35.0,
     "best": 0.9,
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
   "t": 36.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures connected to the gallbladder are not yet clearly isolated, with the hook obscuring the upper region. C2: The hepatocystic triangle is not fully cleared of fat and connective tissue, and there are no full-thickness windows visible through to the background. C3: The lower part of the gallbladder remains attached to the liver bed without full exposure of the cystic plate along the inferior margin.",
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
      "name": "cystic_duct",
      "confidence": 0.6
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete and the electrocautery hook is actively working in the upper triangle, obscuring clear identification of the cystic artery and cystic plate.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.984.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.984.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 83_63050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       642,
       448,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       372,
       842,
       715
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       708,
       176,
       1000,
       437
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       386,
       88,
       458
      ],
      "confidence": 0.72
     },
     {
      "label": "irrigator",
      "box_2d": [
       386,
       680,
       628,
       983
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       221,
       576,
       535,
       663
      ],
      "confidence": 0.68
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       564,
       516,
       737,
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
     "last": 36.0,
     "best": 1.0,
     "hits": 35
    },
    "liver": {
     "first": 0.0,
     "last": 36.0,
     "best": 1.0,
     "hits": 35
    },
    "fat": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 35
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 35
    },
    "blood": {
     "first": 1.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.75,
     "hits": 4
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 34.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 35.0,
     "best": 0.9,
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
   "t": 37.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Dissection is in the early stages and two distinct tubular structures entering the gallbladder cannot be identified yet. C2: The hepatocystic triangle is still covered by peritoneum and fat, with only a small initial window opened. C3: The peritoneum along the liver bed is just beginning to be incised by the hook, so the lower gallbladder is not yet separated to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still obscured by peritoneum and fibroadipose tissue.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.988.",
     "Example 99_27425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.989.",
     "Example 83_58425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       655,
       545,
       984
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       371,
       875,
       706
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       530,
       621,
       891,
       963
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       748,
       222,
       1000,
       429
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       390,
       103,
       471
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       576,
       506,
       769,
       626
      ],
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 37.0,
     "best": 1.0,
     "hits": 36
    },
    "liver": {
     "first": 0.0,
     "last": 37.0,
     "best": 1.0,
     "hits": 36
    },
    "fat": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 36
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 1.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.75,
     "hits": 4
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 37.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 35.0,
     "best": 0.9,
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
     "c1": 0.15,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) is partially delineated, while the upper region remains covered by peritoneum and fat without a clearly defined second tubular structure. C2: There is a small recess created above the lower structure, but no full-thickness window through the hepatocystic triangle is visible. C3: The peritoneum along the liver bed has just been scored with the hook, and the lower part of the gallbladder is not yet separated from the cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic artery and cystic plate are not yet exposed.",
    "examples": [
     "Example 76_58725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 88_23700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 90_33500.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (1.00). Similarity 0.985.",
     "Example 60_34825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 58_12500.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.985.",
     "Example 42_48025.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       377,
       743,
       708
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       663,
       467,
       983
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       576,
       154,
       997,
       490
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       390,
       75,
       458
      ],
      "label": "grasper",
      "confidence": 0.64
     },
     {
      "box_2d": [
       432,
       844,
       573,
       983
      ],
      "label": "hook",
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 38.0,
     "best": 1.0,
     "hits": 37
    },
    "liver": {
     "first": 0.0,
     "last": 38.0,
     "best": 1.0,
     "hits": 37
    },
    "fat": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 37
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 1.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 38.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 37.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 38.0,
     "best": 0.9,
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
   "t": 39.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: No distinct tubular structures are dissected or visible connecting to the gallbladder. C2: The hepatocystic triangle is still covered in fat and peritoneum, with only a small initial incision being made by the hook. C3: The gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun and the grasper shaft partially obstructs the view; cystic duct and artery are not yet exposed.",
    "examples": [
     "Example 118_117225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.985.",
     "Example 59_37200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 118_118475.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.984.",
     "Example 50_11475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       270,
       317,
       803,
       897
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       86,
       883,
       801
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       224,
       758,
       380,
       980
      ],
      "confidence": 0.93
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       765,
       775,
       981
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 39.0,
     "best": 1.0,
     "hits": 37
    },
    "liver": {
     "first": 0.0,
     "last": 39.0,
     "best": 1.0,
     "hits": 37
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
     "hits": 37
    },
    "blood": {
     "first": 1.0,
     "last": 39.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 39.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 38.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 37.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 38.0,
     "best": 0.9,
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
   "t": 40.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The grasper shaft heavily occludes the hepatocystic area, and no distinct tubular structures entering the gallbladder can be seen. C2: The hepatocystic triangle is still covered in connective tissue with the hook beginning dissection, so no full-thickness windows are visible. C3: The lower gallbladder and cystic plate are largely obscured by the grasper and not clearly separated from the liver bed.",
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
      "name": "gi_tract",
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The grasper shaft crosses directly over the surgical field and dissection of the hepatocystic triangle is at a very early stage.",
    "examples": [
     "Example 97_25225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.984.",
     "Example 63_63875.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 48_53925.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.985.",
     "Example 59_40450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 59_36700.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       0,
       538,
       208,
       767
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       198,
       667,
       358,
       979
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       287,
       314,
       861,
       933
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 40.0,
     "best": 1.0,
     "hits": 37
    },
    "liver": {
     "first": 0.0,
     "last": 40.0,
     "best": 1.0,
     "hits": 37
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
    "blood": {
     "first": 1.0,
     "last": 39.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 38.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 37.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 38.0,
     "best": 0.9,
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
   "t": 41.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because the gallbladder and any tubular structures entering it are completely out of view or occluded by the grasper and gallbladder body. C2 is not achieved because the hepatocystic triangle is not dissected into clear full-thickness windows and is obscured. C3 is not achieved because only early peritoneal incision along the gallbladder-liver border is being performed, with no exposed cystic plate.",
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
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is at a very early stage and the hepatocystic triangle is occluded by the grasper and undissected tissue.",
    "examples": [
     "Example 74_11925.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.983.",
     "Example 50_10350.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.985.",
     "Example 63_63875.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.983.",
     "Example 59_37200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 100_32550.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.983.",
     "Example 59_35450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       258,
       312,
       824,
       910
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       608,
       768,
       981
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       47,
       618,
       271,
       968
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       71,
       808,
       738
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 41.0,
     "best": 1.0,
     "hits": 37
    },
    "liver": {
     "first": 0.0,
     "last": 41.0,
     "best": 1.0,
     "hits": 37
    },
    "fat": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 37
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 1.0,
     "last": 41.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 38.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 37.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 38.0,
     "best": 0.9,
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
     "c3": 0.1
    },
    "cvs_evidence": "C1: The hepatocystic triangle is heavily obscured by the grasper and hook, and two distinct tubular structures entering the gallbladder cannot be seen. C2: The triangle is not visible or cleared, with only the gallbladder wall and liver bed attachment in view. C3: The hook is actively dissecting the peritoneum along the gallbladder-liver junction, and the lower gallbladder is not yet separated to expose the cystic plate.",
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The grasper and hook occlude the hepatocystic triangle, and dissection is still at an early stage along the peritoneal reflection.",
    "examples": [
     "Example 104_38350.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.984.",
     "Example 59_40450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 109_20225.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.983.",
     "Example 59_37200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 115_23350.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (1.00). Similarity 0.983.",
     "Example 59_35450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       184,
       314,
       840,
       934
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       151,
       574,
       401,
       979
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       74,
       800,
       708
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       578,
       167,
       870
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 42.0,
     "best": 1.0,
     "hits": 37
    },
    "liver": {
     "first": 0.0,
     "last": 42.0,
     "best": 1.0,
     "hits": 37
    },
    "fat": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 37
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 1.0,
     "last": 41.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 38.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 37.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 38.0,
     "best": 0.9,
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
   "t": 43.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or visible entering the gallbladder; the hook is just beginning superficial dissection. C2: The hepatocystic triangle remains covered in fat and connective tissue with no dissected windows. C3: The gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Early stage of dissection with the hepatocystic triangle still obscured by peritoneum and fat, and the grasper shaft partially crossing the field.",
    "examples": [
     "Example 118_116225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.985.",
     "Example 19_14975.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.985.",
     "Example 48_53800.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.984.",
     "Example 88_22825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.985.",
     "Example 59_37575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.984.",
     "Example 19_14600.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       79,
       626,
       251,
       964
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       69,
       799,
       704
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       257,
       316,
       826,
       910
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       626,
       325,
       962
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 43.0,
     "best": 1.0,
     "hits": 37
    },
    "liver": {
     "first": 0.0,
     "last": 43.0,
     "best": 1.0,
     "hits": 37
    },
    "fat": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 37
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 1.0,
     "last": 41.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 38.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 37.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 38.0,
     "best": 0.9,
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
   "t": 44.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: The gallbladder fill most of the view and the hepatocystic triangle structures (cystic duct and artery) are not exposed or visible. C2: Dissection has barely begun near the top of the gallbladder, with no windows cleared in the hepatocystic triangle. C3: The gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.99
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
    "reason_if_not": "The hepatocystic triangle is not yet dissected or exposed in the camera view.",
    "examples": [
     "Example 119_90625.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (1.00). Similarity 0.984.",
     "Example 60_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.985.",
     "Example 119_82000.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (1.00). Similarity 0.983.",
     "Example 15_29400.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.984.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.984.",
     "Example 44_41475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       17,
       318,
       809,
       966
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       116,
       792,
       755,
       984
      ],
      "confidence": 0.88
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       68,
       730,
       656
      ],
      "confidence": 0.91
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       612,
       144,
       939
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       75,
       597,
       342,
       808
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
     "best": 1.0,
     "hits": 38
    },
    "liver": {
     "first": 0.0,
     "last": 44.0,
     "best": 1.0,
     "hits": 38
    },
    "fat": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 38
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 1.0,
     "last": 44.0,
     "best": 0.85,
     "hits": 11
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 38.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 37.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 38.0,
     "best": 0.9,
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
   "t": 45.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are visible entering the gallbladder; the hook is dissecting the peritoneal reflection along the gallbladder wall. C2: The hepatocystic triangle is not exposed or cleared in this view, and no windows are visible. C3: The gallbladder is still largely attached to the liver bed with only superficial peritoneal incision beginning.",
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
      "name": "connective_tissue",
      "confidence": 0.85
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
    "reason_if_not": "The hepatocystic triangle structures are not yet dissected or exposed in the field of view.",
    "examples": [
     "Example 119_82000.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (1.00). Similarity 0.984.",
     "Example 115_22725.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 119_65625.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.984.",
     "Example 60_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 119_88500.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (0.67). Similarity 0.985.",
     "Example 110_31675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       182,
       318,
       865,
       948
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       549,
       766,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       47,
       575,
       276,
       974
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       70,
       786,
       688
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 45.0,
     "best": 1.0,
     "hits": 39
    },
    "liver": {
     "first": 0.0,
     "last": 45.0,
     "best": 1.0,
     "hits": 39
    },
    "fat": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 38
    },
    "blood": {
     "first": 1.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 38.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 37.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 38.0,
     "best": 0.9,
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
   "t": 46.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct) is partially visible at the top right, while the rest of the hepatocystic area is obscured by the instruments and liver. C2: The hepatocystic triangle is largely out of view and blocked by the electrocautery hook and grasper, so no full-thickness windows can be confirmed. C3: The inferior margin of the gallbladder and the cystic plate are mostly hidden behind the instruments and liver.",
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
      "confidence": 0.7
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
      "name": "connective_tissue",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is heavily occluded by the grasper and hook, and most of the dissection area is at the very top edge of the frame.",
    "examples": [
     "Example 64_37325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 59_35450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 119_59250.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (1.00). Similarity 0.985.",
     "Example 117_18875.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 117_19625.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "box_2d": [
       183,
       314,
       866,
       928
      ],
      "label": "liver"
     },
     {
      "box_2d": [
       0,
       547,
       290,
       871
      ],
      "label": "gallbladder"
     },
     {
      "box_2d": [
       223,
       567,
       575,
       982
      ],
      "label": "hook"
     },
     {
      "box_2d": [
       0,
       370,
       315,
       694
      ],
      "label": "grasper"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 46.0,
     "best": 1.0,
     "hits": 39
    },
    "liver": {
     "first": 0.0,
     "last": 46.0,
     "best": 1.0,
     "hits": 39
    },
    "fat": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 38
    },
    "blood": {
     "first": 1.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 46.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 37.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 38.0,
     "best": 0.9,
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
   "t": 47.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No distinct tubular structures are dissected or visible entering the gallbladder neck. C2: The hepatocystic triangle is still covered in connective tissue and fat with no windows formed. C3: The gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection is in an early stage and the cystic duct and artery have not yet been isolated from surrounding tissue.",
    "examples": [
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 60_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 119_87125.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (1.00). Similarity 0.985.",
     "Example 59_35450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 117_18875.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       307,
       854,
       917
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       267,
       806,
       794,
       984
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       143,
       730,
       286,
       970
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       72,
       749,
       678
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 47.0,
     "best": 1.0,
     "hits": 40
    },
    "liver": {
     "first": 0.0,
     "last": 47.0,
     "best": 1.0,
     "hits": 40
    },
    "fat": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 39
    },
    "blood": {
     "first": 1.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 46.0,
     "best": 0.75,
     "hits": 5
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 37.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 38.0,
     "best": 0.9,
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
   "t": 48.0,
   "label": {
    "cvs": {
     "c1": 0.2,
     "c2": 0.25,
     "c3": 0.1
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) is partially visible below a small window, while the upper structure (cystic artery) is still covered by peritoneum/connective tissue being dissected by the hook. C2: There is one small full-thickness window between the duct and upper tissue, but the upper part of the hepatocystic triangle is not yet cleared. C3: The gallbladder remains largely attached to the liver bed with only superficial peritoneal incision and minimal cystic plate exposure.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete; only one small window is open and upper structures are still covered by tissue.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.990.",
     "Example 57_34900.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       378,
       850,
       715
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       661,
       564,
       984
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       486,
       615,
       855,
       969
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       711,
       185,
       1000,
       434
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       406,
       82,
       477
      ],
      "confidence": 0.75
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       579,
       512,
       739,
       603
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       632,
       497,
       998,
       931
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 48.0,
     "best": 1.0,
     "hits": 41
    },
    "liver": {
     "first": 0.0,
     "last": 48.0,
     "best": 1.0,
     "hits": 41
    },
    "fat": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 41
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 1.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 48.0,
     "best": 0.75,
     "hits": 6
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 48.0,
     "best": 0.85,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 38.0,
     "best": 0.9,
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
   "t": 49.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: A small window is being created in the tissue, but the hepatocystic triangle is not yet fully cleared to show two full-thickness windows. C3: The peritoneum is just being scored along the gallbladder margin, so the lower gallbladder is not separated from the liver bed to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are still embedded in tissue.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       665,
       510,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       71,
       987,
       447
      ],
      "confidence": 0.9
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       390,
       835,
       705
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       703,
       219,
       998,
       448
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       407,
       78,
       476
      ],
      "confidence": 0.75
     },
     {
      "label": "hook",
      "box_2d": [
       564,
       605,
       967,
       946
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       579,
       521,
       735,
       606
      ],
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 49.0,
     "best": 1.0,
     "hits": 42
    },
    "liver": {
     "first": 0.0,
     "last": 49.0,
     "best": 1.0,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 1.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 48.0,
     "best": 0.75,
     "hits": 6
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 38.0,
     "best": 0.9,
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
   "t": 50.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet dissected or visible, as the peritoneum is just being opened. C2: The hepatocystic triangle is still largely covered by peritoneum and connective tissue with only a small initial window at the base. C3: The lower part of the gallbladder remains attached to the liver bed, with only a superficial peritoneal incision visible.",
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in the early stage and the cystic duct and artery are not yet skeletonized or clearly identifiable.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 108_33675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.985.",
     "Example 103_8475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986."
    ],
    "boxes": [
     {
      "box_2d": [
       614,
       599,
       1000,
       933
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       704,
       219,
       1000,
       453
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       409,
       78,
       483
      ],
      "label": "grasper",
      "confidence": 0.85
     },
     {
      "box_2d": [
       0,
       394,
       833,
       730
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       663,
       558,
       986
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       261,
       574,
       627,
       658
      ],
      "label": "cystic_artery",
      "confidence": 0.84
     },
     {
      "box_2d": [
       616,
       521,
       747,
       606
      ],
      "label": "hepatocystic_window",
      "confidence": 0.79
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 50.0,
     "best": 1.0,
     "hits": 43
    },
    "liver": {
     "first": 0.0,
     "last": 50.0,
     "best": 1.0,
     "hits": 43
    },
    "fat": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 43
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 42
    },
    "blood": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 48.0,
     "best": 0.75,
     "hits": 6
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 36.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 50.0,
     "best": 0.9,
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
   "t": 51.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.25,
     "c3": 0.35
    },
    "cvs_evidence": "C1: A lower tubular band (likely cystic duct) and an upper tissue bundle near the hook are visible, but the upper structure is not yet clearly isolated as a distinct tubular artery. C2: A window is opened above the lower structure showing liver behind it, but the upper part of the hepatocystic triangle is still being dissected by the hook and lacks a second full-thickness window. C3: The gallbladder neck is still largely attached to the liver bed with only a small area of dissection started at the peritoneal reflection.",
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
      "confidence": 0.55
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete, so the cystic artery and cystic plate cannot be definitively confirmed.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.986.",
     "Example 48_53800.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.985.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 96_76700.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (1.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       399,
       814,
       716
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       85,
       781,
       443
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       671,
       483,
       985
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       404,
       617,
       718,
       985
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       677,
       205,
       1000,
       461
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       521,
       529,
       718,
       615
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 51.0,
     "best": 1.0,
     "hits": 44
    },
    "liver": {
     "first": 0.0,
     "last": 51.0,
     "best": 1.0,
     "hits": 44
    },
    "fat": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 44
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 43
    },
    "blood": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 51.0,
     "best": 0.8,
     "hits": 7
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 51.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 51.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 51.0,
     "best": 0.9,
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
   "t": 52.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is still early and two distinct tubular structures entering the gallbladder cannot yet be identified. C2: A small initial window is being created in the peritoneum, but the hepatocystic triangle is still largely covered by fat and connective tissue. C3: The peritoneum along the liver bed is only beginning to be incised by the hook, and the lower gallbladder is not yet lifted off the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and the cystic duct and artery are not yet skeletonized.",
    "examples": [
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 57_34900.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 50_12100.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       382,
       840,
       680
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       663,
       532,
       983
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       474,
       655,
       781,
       976
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       711,
       192,
       1000,
       444
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       575,
       517,
       730,
       605
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 52.0,
     "best": 1.0,
     "hits": 45
    },
    "liver": {
     "first": 0.0,
     "last": 52.0,
     "best": 1.0,
     "hits": 45
    },
    "fat": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 45
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 44
    },
    "blood": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 51.0,
     "best": 0.8,
     "hits": 7
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 51.0,
     "best": 0.55,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 52.0,
     "best": 0.85,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 52.0,
     "best": 0.9,
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
   "t": 53.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are taking shape and entering the gallbladder neck around the dissected window. C2: One clear full-thickness window is visible between the lower structure and the upper structure, though the upper window between the artery and the cystic plate is still being dissected by the hook. C3: Peritoneum is incised along the liver bed, but the lower third of the gallbladder is not yet mobilized off the cystic plate.",
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
    "reason_if_not": "The upper portion of the hepatocystic triangle and the cystic plate are still attached by connective tissue and peritoneum, requiring further dissection with the hook before clipping.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 57_34900.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 92_109675.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 113_86100.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.986.",
     "Example 59_37200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       663,
       519,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       382,
       829,
       685
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       703,
       192,
       1000,
       446
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       520,
       627,
       889,
       960
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       567,
       521,
       718,
       606
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
     "best": 1.0,
     "hits": 46
    },
    "liver": {
     "first": 0.0,
     "last": 53.0,
     "best": 1.0,
     "hits": 46
    },
    "fat": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 46
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 45
    },
    "blood": {
     "first": 1.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 53.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 53.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 53.0,
     "best": 0.9,
     "hits": 4
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 53.0,
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
   "t": 54.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.3,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only a single small opening is created in the peritoneum/connective tissue near the neck, and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly defined. C2: A small full-thickness window is beginning to form below the hook, but the hepatocystic triangle remains largely covered by peritoneum and fat. C3: A small vertical scoring along the peritoneal attachment to the liver bed is visible, but the lower third of the gallbladder is not yet mobilized off the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct and cystic artery are still obscured by peritoneum and fibrofatty tissue.",
    "examples": [
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.989.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       650,
       568,
       984
      ],
      "confidence": 0.97
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       367,
       838,
       684
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       703,
       179,
       1000,
       447
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       578,
       597,
       1000,
       935
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       576,
       510,
       732,
       599
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
     "best": 1.0,
     "hits": 47
    },
    "liver": {
     "first": 0.0,
     "last": 54.0,
     "best": 1.0,
     "hits": 47
    },
    "fat": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 47
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 46
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 53.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 53.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 53.0,
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
   "t": 55.0,
   "label": {
    "cvs": {
     "c1": 0.25,
     "c2": 0.15,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures entering the gallbladder are not yet clearly isolated from surrounding peritoneum and fat. C2: There is a small window opening in the hepatocystic triangle, but the triangle is not fully cleared to show two full-thickness windows. C3: The peritoneum along the liver bed is only beginning to be incised by the hook, so the lower gallbladder is not yet separated to expose the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.6
     },
     {
      "name": "cystic_duct",
      "confidence": 0.5
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and cystic plate prevents definitive identification of the cystic duct and artery.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 96_76575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 83_58425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       390,
       811,
       716
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       67,
       764,
       442
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       653,
       496,
       980
      ],
      "label": "liver",
      "confidence": 0.93
     },
     {
      "box_2d": [
       684,
       180,
       998,
       448
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       431,
       600,
       768,
       980
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       507,
       520,
       706,
       610
      ],
      "label": "hepatocystic_window",
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 55.0,
     "best": 1.0,
     "hits": 48
    },
    "liver": {
     "first": 0.0,
     "last": 55.0,
     "best": 1.0,
     "hits": 48
    },
    "fat": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 55.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 55.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 55.0,
     "best": 0.9,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 53.0,
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
   "t": 56.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection has just started with a small peritoneal opening, so two distinct tubular structures connected to the gallbladder are not yet skeletonized or clearly identifiable. C2: Only a superficial opening in the peritoneum and fat is present, with no full-thickness windows cleared through the hepatocystic triangle. C3: The gallbladder remains fully attached to the liver bed with no mobilization of the lower third to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has barely begun, leaving the cystic duct, cystic artery, and cystic plate obscured by peritoneum and fat.",
    "examples": [
     "Example 79_31350.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 83_58050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 119_87125.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.989.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 59_35450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       686,
       396,
       977
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       404,
       786,
       747
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       662,
       177,
       999,
       467
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       353,
       652,
       584,
       982
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       486,
       538,
       715,
       684
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 56.0,
     "best": 1.0,
     "hits": 49
    },
    "liver": {
     "first": 0.0,
     "last": 56.0,
     "best": 1.0,
     "hits": 49
    },
    "fat": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 48
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 55.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 55.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 55.0,
     "best": 0.9,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 56.0,
     "best": 0.9,
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
   "t": 57.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: There is one small window opening in the hepatocystic triangle, but substantial fat and connective tissue remain. C3: The lower part of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct, cystic artery, and cystic plate are not yet fully cleared and isolated.",
    "examples": [
     "Example 80_9975.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 83_57800.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 83_58050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 76_56975.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (0.67). Similarity 0.986.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       407,
       784,
       755
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       688,
       564,
       981
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       647,
       177,
       1000,
       469
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       330,
       663,
       558,
       983
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       461,
       537,
       696,
       691
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
     "best": 1.0,
     "hits": 50
    },
    "liver": {
     "first": 0.0,
     "last": 57.0,
     "best": 1.0,
     "hits": 50
    },
    "fat": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 49
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 57.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 57.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 57.0,
     "best": 0.9,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 56.0,
     "best": 0.9,
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
   "t": 58.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is in an early stage and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly identifiable. C2: A small initial opening is being made in the peritoneum/connective tissue of the triangle, without cleared full-thickness windows between duct, artery, and plate. C3: The lower gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still covered by peritoneum and fibroadipose tissue.",
    "examples": [
     "Example 79_32475.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 44_37100.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.985.",
     "Example 57_34900.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.985.",
     "Example 79_32725.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       419,
       804,
       747
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       684,
       596,
       977
      ],
      "confidence": 0.91
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       69,
       994,
       475
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       662,
       185,
       1000,
       472
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       326,
       672,
       539,
       985
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       471,
       542,
       709,
       691
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 58.0,
     "best": 1.0,
     "hits": 51
    },
    "liver": {
     "first": 0.0,
     "last": 58.0,
     "best": 1.0,
     "hits": 51
    },
    "fat": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 51
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 50
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 57.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 57.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 58.0,
     "best": 0.9,
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
   "t": 59.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures entering the gallbladder are not yet clearly skeletonized. C2: There is a small window beginning to form in the hepatocystic triangle, but significant connective tissue remains and full-thickness clearance is not achieved. C3: The lower part of the gallbladder remains attached to the liver bed with no significant exposure of the cystic plate.",
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
      "name": "cystic_duct",
      "confidence": 0.5
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; structures are still embedded in peritoneum and connective tissue.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 15_24275.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 112_21850.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.00). Similarity 0.986.",
     "Example 15_27900.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 83_57675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       402,
       785,
       715
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       68,
       993,
       474
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       681,
       332,
       970
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       661,
       183,
       1000,
       467
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       307,
       678,
       517,
       982
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       454,
       539,
       696,
       650
      ],
      "confidence": 0.86
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       587,
       610,
       995,
       969
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 59.0,
     "best": 1.0,
     "hits": 52
    },
    "liver": {
     "first": 0.0,
     "last": 59.0,
     "best": 1.0,
     "hits": 52
    },
    "fat": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 52
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 51
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 59.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 59.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 58.0,
     "best": 0.9,
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
   "t": 60.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet clearly isolated, as the upper part of the triangle is still covered in connective tissue. C2: There is one small window opened at the bottom of the triangle, but the upper part of the hepatocystic triangle is not cleared of tissue. C3: The lower part of the gallbladder is still attached to the liver bed with no significant cystic plate exposure.",
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
    "view_quality": "smoke",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet clearly exposed.",
    "examples": [
     "Example 106_54825.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.982.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.982.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.982.",
     "Example 79_31350.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.982.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.982."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       70,
       998,
       456
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       368,
       874,
       728
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       737,
       201,
       1000,
       427
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       465,
       710,
       725,
       977
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       573,
       503,
       760,
       614
      ],
      "label": "hepatocystic_window",
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 60.0,
     "best": 1.0,
     "hits": 52
    },
    "liver": {
     "first": 0.0,
     "last": 60.0,
     "best": 1.0,
     "hits": 52
    },
    "fat": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 52
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 51
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 60.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 59.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 60.0,
     "best": 0.9,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 58.0,
     "best": 0.9,
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
   "t": 61.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.25,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two potential tubular structures (cystic duct below, artery above) are partially outlined around a small window, though still encased in peritoneum and tissue. C2: Only one small window is opening between the duct and artery; the upper triangle towards the cystic plate is still being incised by the hook. C3: The peritoneum along the liver bed is only beginning to be scored and the lower gallbladder is not separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete; upper window is not yet established.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 83_58425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       369,
       875,
       735
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       667,
       523,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       539,
       619,
       897,
       955
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       738,
       235,
       1000,
       431
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       421,
       95,
       497
      ],
      "confidence": 0.91
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       603,
       502,
       775,
       597
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 61.0,
     "best": 1.0,
     "hits": 53
    },
    "liver": {
     "first": 0.0,
     "last": 61.0,
     "best": 1.0,
     "hits": 53
    },
    "fat": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 53
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 52
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 61.0,
     "best": 0.8,
     "hits": 9
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 61.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 61.0,
     "best": 0.9,
     "hits": 7
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 61.0,
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
   "t": 62.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Peritoneum and connective tissue are just beginning to be opened, so two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly defined. C2: A small initial window is being created in the hepatocystic triangle, but the triangle is not yet cleared of connective tissue to show two full-thickness windows. C3: The cautery hook is starting to score the peritoneum along the liver bed, and the lower third of the gallbladder is not yet separated to expose the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.6
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct, cystic artery, and cystic plate are still covered by peritoneum and connective tissue.",
    "examples": [
     "Example 80_9975.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 108_33675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 83_57425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 42_30275.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       68,
       997,
       478
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       678,
       430,
       983
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       393,
       851,
       704
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       361,
       628,
       627,
       985
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       725,
       234,
       1000,
       451
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       427,
       90,
       508
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       576,
       520,
       743,
       627
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
     "best": 1.0,
     "hits": 54
    },
    "liver": {
     "first": 0.0,
     "last": 62.0,
     "best": 1.0,
     "hits": 54
    },
    "fat": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 54
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 53
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 61.0,
     "best": 0.8,
     "hits": 9
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 61.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 62.0,
     "best": 0.9,
     "hits": 7
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 62.0,
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
   "t": 63.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the cystic duct region is being dissected, and two distinct tubular structures entering the gallbladder are not yet visible. C2: There is a small window forming near the lower border, but the hepatocystic triangle is still mostly covered in peritoneum and connective tissue. C3: The gallbladder remains largely attached to the liver bed with only a small vertical incision in the peritoneum, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and the cystic structures and cystic plate are not yet skeletonized or clearly separated.",
    "examples": [
     "Example 80_9975.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 83_58050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.983.",
     "Example 83_57675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 83_57800.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.985.",
     "Example 70_17100.jpg: experts said C1 no (0.00), C2 no (0.33), C3 no (0.33). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       394,
       847,
       731
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       682,
       577,
       966
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       334,
       755,
       526,
       982
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       737,
       260,
       1000,
       451
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       431,
       93,
       507
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       576,
       522,
       766,
       626
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
     "best": 1.0,
     "hits": 55
    },
    "liver": {
     "first": 0.0,
     "last": 63.0,
     "best": 1.0,
     "hits": 55
    },
    "fat": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 55
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 54
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 63.0,
     "best": 0.8,
     "hits": 9
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 61.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 63.0,
     "best": 0.9,
     "hits": 7
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 62.0,
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
   "t": 64.0,
   "label": {
    "cvs": {
     "c1": 0.25,
     "c2": 0.15,
     "c3": 0.2
    },
    "cvs_evidence": "C1: A lower tubular band (likely cystic duct) and an upper tissue bundle are beginning to be separated, but the upper structure is not yet clearly isolated as a distinct tubular artery. C2: A partial window is opened between the lower structure and upper tissue, but the upper portion of the hepatocystic triangle remains covered by connective tissue and fat. C3: The electrocautery hook is scoring the peritoneal reflection along the liver bed, so the lower third of the gallbladder is not yet mobilized off the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress; the cystic artery and cystic plate are not fully exposed.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 76_54850.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 76_52350.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.988.",
     "Example 96_76575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       708,
       233,
       1000,
       457
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       503,
       618,
       836,
       967
      ],
      "confidence": 0.97
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       397,
       837,
       713
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       687,
       564,
       977
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       230,
       604,
       517,
       687
      ],
      "confidence": 0.82
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       561,
       532,
       745,
       663
      ],
      "confidence": 0.83
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 64.0,
     "best": 1.0,
     "hits": 56
    },
    "liver": {
     "first": 0.0,
     "last": 64.0,
     "best": 1.0,
     "hits": 56
    },
    "fat": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 56
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 55
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 64.0,
     "best": 0.8,
     "hits": 10
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 61.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 64.0,
     "best": 0.9,
     "hits": 7
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 64.0,
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
   "t": 65.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet clearly skeletonized, as peritoneum and connective tissue still obscure the cystic duct and artery. C2: Only one small window is being created in the lower hepatocystic triangle with the hook, and the upper portion remains covered in tissue. C3: Only a small initial incision along the peritoneal attachment to the liver bed has been made, so the lower gallbladder is not separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage and the cystic duct and artery are still encased in connective tissue.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 96_77075.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 yes (1.00). Similarity 0.989.",
     "Example 53_50075.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 99_27425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       0,
       447,
       116,
       535
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       732,
       269,
       1000,
       474
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       626,
       654,
       995,
       936
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       417,
       871,
       756
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       689,
       587,
       984
      ],
      "confidence": 0.91
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       664,
       553,
       756,
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
     "last": 65.0,
     "best": 1.0,
     "hits": 57
    },
    "liver": {
     "first": 0.0,
     "last": 65.0,
     "best": 1.0,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 57
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 56
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 64.0,
     "best": 0.8,
     "hits": 10
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 61.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 65.0,
     "best": 0.9,
     "hits": 8
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 65.0,
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
   "t": 66.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is still early and two distinct tubular structures entering the gallbladder cannot be clearly identified; the hook is dissecting the upper tissue bridge. C2: There is one small window below the upper tissue band, but the hepatocystic triangle is not fully cleared of fat and connective tissue. C3: The lower part of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and cystic plate.",
    "examples": [
     "Example 22_34925.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.00). Similarity 0.988.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.989.",
     "Example 57_34900.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.989.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.989.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.989.",
     "Example 88_26700.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       683,
       523,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       84,
       845,
       747
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       722,
       260,
       998,
       467
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       437,
       95,
       511
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       524,
       621,
       915,
       960
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       576,
       535,
       745,
       638
      ],
      "confidence": 0.75
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       256,
       611,
       528,
       707
      ],
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 66.0,
     "best": 1.0,
     "hits": 58
    },
    "liver": {
     "first": 0.0,
     "last": 66.0,
     "best": 1.0,
     "hits": 58
    },
    "fat": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 58
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 57
    },
    "blood": {
     "first": 1.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 66.0,
     "best": 0.8,
     "hits": 11
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 66.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 65.0,
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
   "t": 67.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is in an early stage and two distinct tubular structures entering the gallbladder are not yet isolated or clearly visible. C2: The hepatocystic triangle still contains substantial undissected tissue and fat, with only a small initial opening rather than full-thickness windows. C3: Only a small portion of peritoneum has been scored near the liver bed, and the lower gallbladder is not yet separated to expose the cystic plate.",
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
    "reason_if_not": "The hepatocystic triangle is largely undissected, preventing identification of the cystic duct and cystic artery.",
    "examples": [
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       689,
       579,
       983
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       417,
       846,
       735
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       727,
       272,
       1000,
       473
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       438,
       100,
       513
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       621,
       646,
       978,
       938
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       580,
       549,
       747,
       665
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
     "best": 1.0,
     "hits": 59
    },
    "liver": {
     "first": 0.0,
     "last": 67.0,
     "best": 1.0,
     "hits": 59
    },
    "fat": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 59
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 58
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 66.0,
     "best": 0.8,
     "hits": 11
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 66.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 67.0,
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
   "t": 68.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the peritoneum is being scored and no two distinct tubular structures are skeletonized and visible entering the gallbladder. C2: There is a small initial opening in the hepatocystic triangle, but it is not cleared of fat and connective tissue to form full-thickness windows. C3: The lower part of the gallbladder remains largely attached to the liver bed with only a superficial peritoneal incision along the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in an early stage and the cystic duct and artery are still covered by fat and connective tissue.",
    "examples": [
     "Example 79_31350.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.988.",
     "Example 117_26625.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.986.",
     "Example 59_40075.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       425,
       871,
       755
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       695,
       577,
       985
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       555,
       650,
       879,
       976
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       747,
       281,
       1000,
       486
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       442,
       117,
       526
      ],
      "confidence": 0.91
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       589,
       560,
       773,
       659
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 68.0,
     "best": 1.0,
     "hits": 60
    },
    "liver": {
     "first": 0.0,
     "last": 68.0,
     "best": 1.0,
     "hits": 60
    },
    "fat": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 59
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 66.0,
     "best": 0.8,
     "hits": 11
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 66.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 66.0,
     "best": 0.9,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 68.0,
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
   "t": 69.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not yet clearly skeletonized and isolated entering the gallbladder. C2: Although a small opening is being created by the hook, the hepatocystic triangle is still covered in connective tissue and lacks clear full-thickness windows. C3: The inferior margin of the gallbladder remains attached to the liver bed with the peritoneum only partially scored.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct and artery are still embedded in peritoneum and fibrofatty tissue.",
    "examples": [
     "Example 88_26825.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 112_21850.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.00). Similarity 0.986.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       707,
       517,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       71,
       995,
       520
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       452,
       104,
       530
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       712,
       292,
       1000,
       491
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       676,
       630,
       998,
       922
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       581,
       560,
       735,
       657
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       240,
       627,
       606,
       720
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 69.0,
     "best": 1.0,
     "hits": 61
    },
    "liver": {
     "first": 0.0,
     "last": 69.0,
     "best": 1.0,
     "hits": 61
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
     "hits": 60
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 66.0,
     "best": 0.8,
     "hits": 11
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 66.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 69.0,
     "best": 0.9,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 69.0,
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
   "t": 70.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: Although a small opening is being created with the hook, the hepatocystic triangle is not yet cleared to show two full-thickness windows. C3: The lower part of the gallbladder remains attached to the liver bed with only a superficial peritoneal incision visible.",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle dissection is incomplete, and the cystic duct and artery are still embedded in connective tissue.",
    "examples": [
     "Example 88_26825.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.983.",
     "Example 48_54425.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.984.",
     "Example 112_21850.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.00). Similarity 0.983.",
     "Example 110_31675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.984.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.983.",
     "Example 88_23700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       431,
       840,
       753
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       691,
       597,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       715,
       276,
       1000,
       489
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       449,
       100,
       523
      ],
      "confidence": 0.8
     },
     {
      "label": "hook",
      "box_2d": [
       645,
       647,
       988,
       931
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       584,
       563,
       753,
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
     "last": 70.0,
     "best": 1.0,
     "hits": 62
    },
    "liver": {
     "first": 0.0,
     "last": 70.0,
     "best": 1.0,
     "hits": 62
    },
    "fat": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 62
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 61
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 34.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 66.0,
     "best": 0.8,
     "hits": 11
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 66.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 69.0,
     "best": 0.9,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 70.0,
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
   "t": 71.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.35
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and an upper tissue band (likely containing cystic artery) are visible, though dissection of the upper structure is incomplete. C2: One clear window is seen between the two structures, but the upper window between the artery and the cystic plate is not fully opened through. C3: A vertical groove of electrocautery dissection is present along the liver bed, but the lower third of the gallbladder is not yet lifted off to fully expose the cystic plate.",
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
      "confidence": 0.8
     },
     {
      "name": "cystic_plate",
      "confidence": 0.5
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
    "reason_if_not": "The upper window and cystic plate dissection are incomplete, preventing full confirmation of the Critical View of Safety.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 88_23700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 42_46650.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.33). Similarity 0.986.",
     "Example 117_25125.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.985.",
     "Example 76_58725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.985."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       426,
       817,
       737
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       706,
       585,
       985
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       565,
       573,
       722,
       652
      ],
      "label": "hepatocystic_window",
      "confidence": 0.86
     },
     {
      "box_2d": [
       708,
       273,
       1000,
       492
      ],
      "label": "grasper",
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 71.0,
     "best": 1.0,
     "hits": 63
    },
    "liver": {
     "first": 0.0,
     "last": 71.0,
     "best": 1.0,
     "hits": 63
    },
    "fat": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 62
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 71.0,
     "best": 0.5,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 71.0,
     "best": 0.8,
     "hits": 12
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 71.0,
     "best": 0.75,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 71.0,
     "best": 0.9,
     "hits": 10
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 71.0,
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
   "t": 72.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.3
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder separated by a window. C2: A lower window is visible between the duct and artery, though the upper window between the artery and cystic plate is still mostly covered by cauterized tissue. C3: The lower gallbladder remains largely attached to the liver bed with only superficial peritoneal scoring over the cystic plate area.",
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower gallbladder is not yet mobilized off the cystic plate and the upper window above the cystic artery is not completely cleared.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.985.",
     "Example 107_57175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.985.",
     "Example 96_80575.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.984.",
     "Example 88_23700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 70_19100.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.984.",
     "Example 80_10225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.984."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       427,
       796,
       729
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       689,
       546,
       981
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       669,
       248,
       1000,
       490
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       530,
       577,
       680,
       655
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
     "last": 72.0,
     "best": 1.0,
     "hits": 64
    },
    "liver": {
     "first": 0.0,
     "last": 72.0,
     "best": 1.0,
     "hits": 64
    },
    "fat": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 64
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 63
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 72.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 72.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 72.0,
     "best": 0.8,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 72.0,
     "best": 0.9,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 71.0,
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
   "t": 73.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.25
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and an upper tissue band are partially delineated around a single window, but they are not clearly skeletonized as two distinct tubular structures entering the gallbladder. C2: There is one full-thickness window between the lower structure and upper tissue, while the upper dissection along the liver bed is only superficial peritoneum incision without a second clear window. C3: The peritoneum along the cystic plate is scored, but the lower gallbladder has not been elevated off the liver bed to expose the cystic plate.",
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
      "confidence": 0.45
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with only a single lower window opened and the upper tissue still attached to the liver bed.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 88_23700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 96_80575.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.986.",
     "Example 76_58725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 96_80325.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.985.",
     "Example 56_18950.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.984."
    ],
    "boxes": [
     {
      "box_2d": [
       618,
       195,
       1000,
       471
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       411,
       741,
       731
      ],
      "label": "gallbladder",
      "confidence": 0.91
     },
     {
      "box_2d": [
       0,
       674,
       510,
       977
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       479,
       546,
       631,
       643
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
     "last": 73.0,
     "best": 1.0,
     "hits": 65
    },
    "liver": {
     "first": 0.0,
     "last": 73.0,
     "best": 1.0,
     "hits": 65
    },
    "fat": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 65
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 64
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 72.0,
     "best": 0.6,
     "hits": 0
    },
    "gi_tract": {
     "first": 11.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 73.0,
     "best": 0.85,
     "hits": 14
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 73.0,
     "best": 0.8,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 73.0,
     "best": 0.9,
     "hits": 12
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 71.0,
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
   "t": 74.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.9,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder, separated by a window. C2: Two distinct dissected windows are visible in the hepatocystic triangle (one full-thickness lower window and an upper dissected space between the artery and cystic plate). C3: The cystic plate is partially exposed in the upper window, though the lower third of the gallbladder is not extensively lifted off the liver bed.",
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
      "confidence": 0.95
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "examples": [
     "Example 113_86100.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.985.",
     "Example 88_23700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 92_112175.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 yes (1.00). Similarity 0.985.",
     "Example 50_13725.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 113_85975.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.985.",
     "Example 112_23100.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "box_2d": [
       630,
       169,
       1000,
       428
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       366,
       735,
       630
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       618,
       508,
       974
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       478,
       501,
       638,
       594
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 74.0,
     "best": 1.0,
     "hits": 66
    },
    "liver": {
     "first": 0.0,
     "last": 74.0,
     "best": 1.0,
     "hits": 66
    },
    "fat": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 66
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 65
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 74.0,
     "best": 0.75,
     "hits": 1
    },
    "gi_tract": {
     "first": 11.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 74.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 74.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 71.0,
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
   "t": 75.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures connected to the gallbladder are not yet clearly isolated. C2: A small window is beginning to form in the hepatocystic triangle, but abundant fat and connective tissue remain, preventing a full unimpeded view. C3: Only a small portion of the peritoneum near the cystic plate is scored, and the lower gallbladder is not separated from the liver bed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are still encased in fat and connective tissue.",
    "examples": [
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.987.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       610,
       521,
       986
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       363,
       764,
       663
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       133,
       560,
       492,
       638
      ],
      "confidence": 0.78
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       489,
       504,
       646,
       587
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       643,
       178,
       1000,
       427
      ],
      "confidence": 0.99
     },
     {
      "label": "hook",
      "box_2d": [
       595,
       651,
       990,
       948
      ],
      "confidence": 0.99
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 75.0,
     "best": 1.0,
     "hits": 67
    },
    "liver": {
     "first": 0.0,
     "last": 75.0,
     "best": 1.0,
     "hits": 67
    },
    "fat": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 67
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 66
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 74.0,
     "best": 0.75,
     "hits": 1
    },
    "gi_tract": {
     "first": 11.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 74.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 74.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 14
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 71.0,
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
   "t": 76.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.15,
     "c3": 0.25
    },
    "cvs_evidence": "C1: A small window is created exposing the lower cystic structure, and a second structure above it is partially outlined, though both remain heavily invested in peritoneum and tissue. C2: Only one small window is open between the lower structure and the tissue above, while the upper part of the hepatocystic triangle is not yet perforated. C3: A vertical peritoneal incision has been made along the cystic plate, but the lower third of the gallbladder is not yet mobilized off the liver bed.",
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
      "confidence": 0.65
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the upper window and cystic plate are not fully cleared.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.986.",
     "Example 60_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       635,
       172,
       1000,
       431
      ],
      "confidence": 0.99
     },
     {
      "label": "hook",
      "box_2d": [
       597,
       614,
       995,
       936
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       360,
       756,
       663
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       617,
       511,
       976
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       487,
       507,
       646,
       606
      ],
      "confidence": 0.91
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       124,
       563,
       484,
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
     "best": 1.0,
     "hits": 68
    },
    "liver": {
     "first": 0.0,
     "last": 76.0,
     "best": 1.0,
     "hits": 68
    },
    "fat": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 68
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 67
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 76.0,
     "best": 0.75,
     "hits": 2
    },
    "gi_tract": {
     "first": 11.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 16
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 76.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 15
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 71.0,
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
   "t": 77.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.35
    },
    "cvs_evidence": "C1: The cystic duct and artery are still embedded in peritoneum and tissue, not clearly isolated as two distinct tubular structures entering the gallbladder. C2: A small window is being opened with the hook, but the hepatocystic triangle is not yet fully cleared to show two full-thickness windows. C3: There is a vertical cautery line along the liver bed, but the lower part of the gallbladder is not yet sufficiently mobilized off the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.7
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not yet skeletonized.",
    "examples": [
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 96_77075.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 60_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 117_18875.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       624,
       526,
       971
      ],
      "confidence": 0.95,
      "label": "liver"
     },
     {
      "box_2d": [
       0,
       374,
       766,
       614
      ],
      "confidence": 0.9,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       635,
       180,
       1000,
       439
      ],
      "confidence": 0.98,
      "label": "grasper"
     },
     {
      "box_2d": [
       649,
       574,
       998,
       902
      ],
      "confidence": 0.98,
      "label": "hook"
     },
     {
      "box_2d": [
       527,
       519,
       684,
       587
      ],
      "confidence": 0.85,
      "label": "hepatocystic_window"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 77.0,
     "best": 1.0,
     "hits": 69
    },
    "liver": {
     "first": 0.0,
     "last": 77.0,
     "best": 1.0,
     "hits": 69
    },
    "fat": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 69
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 68
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 77.0,
     "best": 0.75,
     "hits": 3
    },
    "gi_tract": {
     "first": 11.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 16
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 76.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 16
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 71.0,
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
   "t": 78.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not clearly skeletonized; the anterior structure (likely cystic duct) is still covered in peritoneum/fat, and the posterior area is still being dissected. C2: There is one small window where the hook is dissecting, but the hepatocystic triangle is not cleared of fat and connective tissue to show two full-thickness windows. C3: The lower part of the gallbladder remains attached to the liver bed with no exposed cystic plate along the inferior margin.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet clearly isolated and exposed.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.990.",
     "Example 50_13225.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 112_21850.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.00). Similarity 0.988.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 96_76700.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (1.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       642,
       517,
       984
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       375,
       738,
       726
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       605,
       180,
       1000,
       452
      ],
      "confidence": 0.97
     },
     {
      "label": "irrigator",
      "box_2d": [
       599,
       582,
       1000,
       935
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       487,
       546,
       623,
       611
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 78.0,
     "best": 1.0,
     "hits": 70
    },
    "liver": {
     "first": 0.0,
     "last": 78.0,
     "best": 1.0,
     "hits": 70
    },
    "fat": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 70
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 69
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 77.0,
     "best": 0.75,
     "hits": 3
    },
    "gi_tract": {
     "first": 11.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 78.0,
     "best": 0.85,
     "hits": 17
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 76.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 17
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 78.0,
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
   "t": 79.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Peritoneum and fat still cover the hepatocystic triangle, so two distinct tubular structures entering the gallbladder are not yet visible. C2: The hook is actively dissecting into a superficial pocket, without full-thickness windows cleared through the triangle. C3: A small vertical strip of tissue is scored along the liver bed, but the lower gallbladder is not yet separated to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery remain obscured by peritoneum and fat.",
    "examples": [
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.989.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 83_58425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 50_13225.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       372,
       698,
       642
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       568,
       455,
       966
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       595,
       163,
       998,
       440
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       486,
       562,
       913,
       970
      ],
      "label": "hook",
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 79.0,
     "best": 1.0,
     "hits": 71
    },
    "liver": {
     "first": 0.0,
     "last": 79.0,
     "best": 1.0,
     "hits": 71
    },
    "fat": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 71
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 70
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 77.0,
     "best": 0.75,
     "hits": 3
    },
    "gi_tract": {
     "first": 11.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 78.0,
     "best": 0.85,
     "hits": 17
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 76.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 17
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 79.0,
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
   "t": 80.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) and a small thin strand are partially dissected within the window, not clearly showing two isolated tubular structures entering the gallbladder. C2: A small window is being opened by the hook, but the hepatocystic triangle remains largely covered by peritoneum and fat above the dissection site. C3: The peritoneum has just been scored along the liver border, and the lower gallbladder is still fully attached to the cystic plate.",
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
      "confidence": 0.5
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is in an early stage, with peritoneum and fat still covering the upper triangle and gallbladder-liver attachment.",
    "examples": [
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.988.",
     "Example 119_87125.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (1.00). Similarity 0.987.",
     "Example 60_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 83_58425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       618,
       184,
       997,
       453
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       518,
       610,
       886,
       971
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       0,
       381,
       729,
       638
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       645,
       467,
       967
      ],
      "label": "liver",
      "confidence": 0.94
     },
     {
      "box_2d": [
       465,
       530,
       629,
       645
      ],
      "label": "hepatocystic_window",
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 80.0,
     "best": 1.0,
     "hits": 72
    },
    "liver": {
     "first": 0.0,
     "last": 80.0,
     "best": 1.0,
     "hits": 72
    },
    "fat": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 72
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 71
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 77.0,
     "best": 0.75,
     "hits": 3
    },
    "gi_tract": {
     "first": 11.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 80.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 80.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 18
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 80.0,
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
   "t": 81.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.45,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Only one clear tubular structure (the cystic duct) is seen along the lower border, while the second structure (cystic artery) is not distinctly skeletonized or visible as a separate tubular structure entering the gallbladder. C2: A large window is opened in the hepatocystic triangle showing the liver behind it, though only one window is clearly defined because the second tubular structure is not distinctly separated. C3: The peritoneum along the lower liver bed is scored and partially dissected, but the lower third of the gallbladder is not yet fully elevated off the cystic plate.",
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
      "confidence": 0.85
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is incomplete; only one tubular structure is clearly delineated and the second structure (cystic artery) is not yet distinctly isolated.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.988.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 80_9975.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       621,
       188,
       1000,
       452
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       468,
       622,
       804,
       979
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       0,
       649,
       470,
       970
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       361,
       741,
       617
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       94,
       594,
       467,
       673
      ],
      "label": "cystic_plate",
      "confidence": 0.77
     },
     {
      "box_2d": [
       457,
       532,
       640,
       690
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
     "last": 81.0,
     "best": 1.0,
     "hits": 73
    },
    "liver": {
     "first": 0.0,
     "last": 81.0,
     "best": 1.0,
     "hits": 73
    },
    "fat": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 73
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 72
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.75,
     "hits": 3
    },
    "gi_tract": {
     "first": 11.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 80.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 19
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 80.0,
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
   "t": 82.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is still in progress and two distinct tubular structures entering the gallbladder cannot yet be identified. C2: A small opening is being created by the hook, but the hepatocystic triangle is not cleared of fat and connective tissue to form two full-thickness windows. C3: The peritoneum is just being incised along the gallbladder margin, so the lower gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
    "reason_if_not": "Initial stage of hepatocystic triangle dissection; tubular structures and cystic plate are still covered by peritoneum and fat.",
    "examples": [
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 110_31675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 99_26550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 38_43600.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       595,
       442,
       975
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       376,
       681,
       710
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       421,
       550,
       574,
       646
      ],
      "confidence": 0.82
     },
     {
      "label": "grasper",
      "box_2d": [
       552,
       172,
       999,
       467
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       492,
       609,
       836,
       976
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 82.0,
     "best": 1.0,
     "hits": 74
    },
    "liver": {
     "first": 0.0,
     "last": 82.0,
     "best": 1.0,
     "hits": 74
    },
    "fat": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 74
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 73
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.75,
     "hits": 3
    },
    "gi_tract": {
     "first": 11.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 81.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 80.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 19
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 80.0,
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
   "t": 83.0,
   "label": {
    "cvs": {
     "c1": 0.2,
     "c2": 0.35,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Only one clear tubular structure (the lower duct/artery complex) is skeletonized and seen entering the gallbladder neck, while the upper tissue near the hook is not yet clearly isolated as a second distinct tubular structure. C2: There is one full-thickness window visible above the lower tubular structure, but the upper part of the triangle still contains undissected tissue being worked on by the hook. C3: Dissection along the liver bed has begun and a window is created, but the lower third of the gallbladder is not yet fully separated from the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.85
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
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; a second tubular structure (cystic artery) is not yet clearly isolated from the surrounding tissue.",
    "examples": [
     "Example 97_25225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 96_77075.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 yes (1.00). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 97_25100.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       562,
       212,
       1000,
       490
      ],
      "confidence": 0.99
     },
     {
      "label": "hook",
      "box_2d": [
       602,
       669,
       946,
       947
      ],
      "confidence": 0.97
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       643,
       496,
       974
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       401,
       722,
       704
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       471,
       577,
       638,
       659
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       598,
       471,
       728,
       694
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 83.0,
     "best": 1.0,
     "hits": 75
    },
    "liver": {
     "first": 0.0,
     "last": 83.0,
     "best": 1.0,
     "hits": 75
    },
    "fat": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 75
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 74
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 83.0,
     "best": 0.75,
     "hits": 4
    },
    "gi_tract": {
     "first": 11.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 83.0,
     "best": 0.85,
     "hits": 20
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 80.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 20
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 83.0,
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
   "t": 84.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not yet clearly isolated, as fat and connective tissue still obscure the hepatocystic triangle. C2: The hook is creating an initial small opening in the triangle, but two full-thickness windows clearing the fat and connective tissue are not yet achieved. C3: There is only a partial peritoneal incision along the liver bed above the triangle, so the lower gallbladder is not separated along its whole inferior margin to expose the cystic plate.",
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
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; fat and connective tissue still obscure the cystic duct and cystic artery.",
    "examples": [
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 50_13225.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       640,
       479,
       982
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       391,
       702,
       672
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       569,
       187,
       1000,
       475
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       549,
       609,
       933,
       962
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       457,
       560,
       617,
       651
      ],
      "label": "hepatocystic_window",
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 84.0,
     "best": 1.0,
     "hits": 76
    },
    "liver": {
     "first": 0.0,
     "last": 84.0,
     "best": 1.0,
     "hits": 76
    },
    "fat": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 76
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 75
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 83.0,
     "best": 0.75,
     "hits": 4
    },
    "gi_tract": {
     "first": 11.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 83.0,
     "best": 0.85,
     "hits": 20
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 80.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 20
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 83.0,
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
   "t": 85.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) is partially outlined along the bottom, while a second distinct tubular structure (cystic artery) is not clearly isolated entering the gallbladder. C2: A single window is being opened with the hook cautery, but the hepatocystic triangle is not fully cleared to show two full-thickness windows. C3: Some dissection along the liver bed is visible superiorly, but the lower part of the gallbladder is not yet cleanly lifted off the cystic plate.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not yet clearly isolated and only one partial window is visible.",
    "examples": [
     "Example 76_54850.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 76_54600.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       70,
       686,
       614
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       609,
       477,
       976
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       545,
       180,
       1000,
       480
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       535,
       635,
       864,
       966
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       468,
       574,
       591,
       674
      ],
      "confidence": 0.81
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       573,
       539,
       709,
       683
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 85.0,
     "best": 1.0,
     "hits": 77
    },
    "liver": {
     "first": 0.0,
     "last": 85.0,
     "best": 1.0,
     "hits": 77
    },
    "fat": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 77
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 76
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 83.0,
     "best": 0.75,
     "hits": 4
    },
    "gi_tract": {
     "first": 11.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 21
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 80.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 21
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 83.0,
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
   "t": 86.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Peritoneum and fat still cover the hepatocystic triangle, so two distinct tubular structures entering the gallbladder are not yet isolated. C2: A single small window is being opened with the hook, but the hepatocystic triangle is not cleared of fat and connective tissue. C3: The lower part of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct, cystic artery, and cystic plate are still obscured by peritoneum and fat.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 112_21850.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.00). Similarity 0.986.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 110_31675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       647,
       354,
       966
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       70,
       990,
       463
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       358,
       691,
       650
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       89,
       610,
       477,
       963
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       456,
       566,
       603,
       674
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       549,
       180,
       1000,
       473
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       529,
       643,
       891,
       963
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 86.0,
     "best": 1.0,
     "hits": 78
    },
    "liver": {
     "first": 0.0,
     "last": 86.0,
     "best": 1.0,
     "hits": 78
    },
    "fat": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 78
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 77
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 83.0,
     "best": 0.75,
     "hits": 4
    },
    "gi_tract": {
     "first": 11.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 85.0,
     "best": 0.85,
     "hits": 21
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 80.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 22
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 83.0,
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
   "t": 87.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a single pedicle-like structure is being dissected with the hook, and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly visible. C2: The hepatocystic triangle is still filled with fat and connective tissue, with no full-thickness windows cleared. C3: The lower third of the gallbladder remains attached to the liver bed, and the cystic plate is not yet exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and individual tubular structures are not yet isolated.",
    "examples": [
     "Example 104_38350.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.986.",
     "Example 65_15675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 102_34250.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.983.",
     "Example 50_11475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 76_58725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.985.",
     "Example 60_34825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       174,
       131,
       998,
       589
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       330,
       775,
       515,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       362,
       431,
       754
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       396,
       821,
       972
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 87.0,
     "best": 1.0,
     "hits": 79
    },
    "liver": {
     "first": 0.0,
     "last": 87.0,
     "best": 1.0,
     "hits": 79
    },
    "fat": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 79
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 78
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 83.0,
     "best": 0.75,
     "hits": 4
    },
    "gi_tract": {
     "first": 11.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 87.0,
     "best": 0.85,
     "hits": 21
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 80.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 22
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 87.0,
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
   "t": 88.0,
   "label": {
    "cvs": {
     "c1": 0.42,
     "c2": 0.62,
     "c3": 0.12
    },
    "cvs_evidence": "C1: A lower tubular band (likely cystic duct) and an upper band being dissected by the hook are visible, though the upper structure is not yet fully defined as a distinct tubular structure entering the gallbladder. C2: A clear full-thickness window is opened in the hepatocystic triangle showing the liver behind it, with the hook dissecting the upper boundary. C3: The peritoneum along the liver bed has just been scored, and the lower gallbladder is not separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the upper tubular structure and cystic plate is incomplete, so Critical View of Safety is not yet fully achieved.",
    "examples": [
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 112_21850.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.00). Similarity 0.985.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       371,
       780,
       708
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       661,
       496,
       981
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       660,
       298,
       999,
       525
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       499,
       697,
       746,
       978
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       497,
       608,
       667,
       701
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 88.0,
     "best": 1.0,
     "hits": 80
    },
    "liver": {
     "first": 0.0,
     "last": 88.0,
     "best": 1.0,
     "hits": 80
    },
    "fat": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 80
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 79
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 83.0,
     "best": 0.75,
     "hits": 4
    },
    "gi_tract": {
     "first": 11.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 88.0,
     "best": 0.85,
     "hits": 22
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 88.0,
     "best": 0.8,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 23
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 88.0,
     "best": 0.95,
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
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.25
    },
    "cvs_evidence": "C1: A lower tubular structure (cystic duct) and an upper structure being hooked (cystic artery) are visible entering the gallbladder neck, with a window between them. C2: A clear full-thickness window is seen between the two structures showing background liver, though dissection above the second structure is still in progress. C3: The peritoneum has been scored higher up on the gallbladder, but the lower third is not yet fully mobilized off the cystic plate.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.4
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and lower cystic plate is still in progress.",
    "examples": [
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       636,
       497,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       396,
       767,
       701
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       486,
       604,
       659,
       726
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       655,
       304,
       998,
       529
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       517,
       693,
       792,
       974
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       117,
       633,
       490,
       728
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 89.0,
     "best": 1.0,
     "hits": 81
    },
    "liver": {
     "first": 0.0,
     "last": 89.0,
     "best": 1.0,
     "hits": 81
    },
    "fat": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 81
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 80
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 89.0,
     "best": 0.75,
     "hits": 4
    },
    "gi_tract": {
     "first": 11.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 89.0,
     "best": 0.85,
     "hits": 23
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 89.0,
     "best": 0.8,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 24
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 88.0,
     "best": 0.95,
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
     "on": false,
     "since": null
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
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the cystic duct is partially defined at the bottom, while the cystic artery and upper structures remain encased in peritoneum and connective tissue. C2: There is one small window below the hook, but the upper part of the hepatocystic triangle is still covered by intact peritoneum and fat. C3: The peritoneum along the liver bed is only beginning to be incised by the hook, and the lower gallbladder is not separated to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with peritoneum and fat still covering the cystic artery and liver bed.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       363,
       836,
       685
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       642,
       448,
       980
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       450,
       663,
       718,
       982
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       727,
       307,
       1000,
       502
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       393,
       140,
       458
      ],
      "confidence": 0.63
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       542,
       570,
       733,
       708
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       181,
       608,
       519,
       683
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       619,
       664,
       876,
       961
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 90.0,
     "best": 1.0,
     "hits": 82
    },
    "liver": {
     "first": 0.0,
     "last": 90.0,
     "best": 1.0,
     "hits": 82
    },
    "fat": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 82
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 81
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 89.0,
     "best": 0.75,
     "hits": 4
    },
    "gi_tract": {
     "first": 11.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 90.0,
     "best": 0.85,
     "hits": 23
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 89.0,
     "best": 0.8,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 25
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 88.0,
     "best": 0.95,
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
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are taking shape around the dissected window, though the upper aspect around the hook is still attached to the liver bed. C2: One clear full-thickness window is visible between the lower and upper bands, while the upper dissection towards the cystic plate is just beginning. C3: A small area of the cystic plate is being scored by the hook, but the lower third of the gallbladder is not yet mobilized off the liver bed.",
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
      "confidence": 0.75
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
    "reason_if_not": "Upper hepatocystic triangle and cystic plate dissection is incomplete; only one window is opened so far.",
    "examples": [
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       355,
       820,
       630
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       641,
       517,
       979
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       476,
       648,
       778,
       976
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       705,
       298,
       1000,
       495
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       546,
       568,
       725,
       672
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       665,
       655,
       901,
       933
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 91.0,
     "best": 1.0,
     "hits": 83
    },
    "liver": {
     "first": 0.0,
     "last": 91.0,
     "best": 1.0,
     "hits": 83
    },
    "fat": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 83
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 82
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 91.0,
     "best": 0.75,
     "hits": 4
    },
    "gi_tract": {
     "first": 11.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 91.0,
     "best": 0.85,
     "hits": 24
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 91.0,
     "best": 0.8,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 26
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 88.0,
     "best": 0.95,
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
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.7,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder, though the artery is partially being dissected by the hook. C2: A clear full-thickness window is seen between the lower structure and the upper structure, and dissection is opening the upper space above the artery. C3: The peritoneum along the lower cystic plate has been incised and the lower gallbladder is being separated from the liver bed.",
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
    "examples": [
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.985.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       623,
       481,
       976
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       369,
       812,
       691
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       533,
       583,
       708,
       676
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       588,
       708,
       877,
       963
      ],
      "confidence": 0.84
     },
     {
      "label": "hook",
      "box_2d": [
       438,
       680,
       687,
       982
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       706,
       308,
       1000,
       503
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 92.0,
     "best": 1.0,
     "hits": 84
    },
    "liver": {
     "first": 0.0,
     "last": 92.0,
     "best": 1.0,
     "hits": 84
    },
    "fat": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 84
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 83
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 92.0,
     "best": 0.8,
     "hits": 5
    },
    "gi_tract": {
     "first": 11.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 92.0,
     "best": 0.85,
     "hits": 25
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 92.0,
     "best": 0.85,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 27
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 92.0,
     "best": 0.95,
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
     "on": false,
     "since": null
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
     "c1": 0.25,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and an upper strand being dissected by the hook are visible, but the upper structure is not yet clearly isolated as a distinct tubular structure entering the gallbladder. C2: One window is opened above the lower structure, but the upper hepatocystic triangle between the artery candidate and the liver bed is still being dissected and is not cleared. C3: The peritoneum along the liver bed has just been scored, and the lower part of the gallbladder is not yet separated from the cystic plate.",
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
      "confidence": 0.55
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with only one window opened so far.",
    "examples": [
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 76_52225.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.988.",
     "Example 57_34900.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.987.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 59_35450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       376,
       804,
       747
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       617,
       515,
       980
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       550,
       575,
       709,
       676
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     },
     {
      "box_2d": [
       521,
       663,
       872,
       970
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       697,
       290,
       1000,
       505
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
     "last": 93.0,
     "best": 1.0,
     "hits": 85
    },
    "liver": {
     "first": 0.0,
     "last": 93.0,
     "best": 1.0,
     "hits": 85
    },
    "fat": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 85
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 84
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 92.0,
     "best": 0.8,
     "hits": 5
    },
    "gi_tract": {
     "first": 11.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 93.0,
     "best": 0.85,
     "hits": 26
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 93.0,
     "best": 0.85,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 28
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 26
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.1,
     "c2": 0.08,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Only one tubular structure (cystic duct) is clearly visible along the inferior border, while a second distinct tubular structure (cystic artery) is not yet clearly isolated from the surrounding tissue. C2: There is one small window above the lower structure, but the upper hepatocystic triangle is not cleared and lacks a second full-thickness window. C3: A vertical groove has been scored along the peritoneal reflection exposing part of the cystic plate, though the lower gallbladder is not yet fully elevated off the liver bed.",
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
    "reason_if_not": "The hepatocystic triangle dissection is incomplete, and the cystic artery is not yet isolated as a distinct tubular structure.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 110_31675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 74_11925.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       646,
       521,
       976
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       366,
       825,
       733
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       715,
       311,
       999,
       498
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       591,
       634,
       943,
       946
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       198,
       609,
       612,
       680
      ],
      "confidence": 0.64
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       397,
       134,
       458
      ],
      "confidence": 0.58
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 94.0,
     "best": 1.0,
     "hits": 86
    },
    "liver": {
     "first": 0.0,
     "last": 94.0,
     "best": 1.0,
     "hits": 86
    },
    "fat": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 86
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 85
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 94.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 94.0,
     "best": 0.85,
     "hits": 27
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 93.0,
     "best": 0.85,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 28
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 27
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not yet clearly skeletonized and isolated entering the gallbladder; there is a wide lower pedicle of tissue below the window. C2: One small window has been created in the hepatocystic triangle, but the remainder of the triangle is still covered with fat and peritoneum. C3: Only a small initial incision has been made along the peritoneal reflection onto the liver, and the lower gallbladder is not separated from the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are still embedded in tissue and the cystic plate is not exposed.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       628,
       439,
       976
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       155,
       601,
       477,
       720
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       510,
       570,
       713,
       674
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       558,
       667,
       889,
       946
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       365,
       804,
       684
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       404,
       651,
       655,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       702,
       297,
       999,
       498
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 95.0,
     "best": 1.0,
     "hits": 87
    },
    "liver": {
     "first": 0.0,
     "last": 95.0,
     "best": 1.0,
     "hits": 87
    },
    "fat": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 87
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 86
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 94.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 94.0,
     "best": 0.85,
     "hits": 27
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 93.0,
     "best": 0.85,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 29
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 27
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below the window and cystic artery at the hook tip) are beginning to be defined entering the gallbladder, though surrounded by peritoneum. C2: There is one clear full-thickness window between the cystic duct and cystic artery, but the upper window between the artery and liver bed is still being dissected by the hook. C3: The lower gallbladder is still largely attached to the liver bed with only a superficial peritoneal incision above the artery.",
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
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete.",
    "examples": [
     "Example 118_117225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 92_108175.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 57_34900.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.985.",
     "Example 92_109675.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 59_35450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       632,
       431,
       981
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       359,
       802,
       724
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       689,
       292,
       998,
       496
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       414,
       652,
       684,
       982
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       517,
       561,
       705,
       699
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       168,
       583,
       436,
       718
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 96.0,
     "best": 1.0,
     "hits": 88
    },
    "liver": {
     "first": 0.0,
     "last": 96.0,
     "best": 1.0,
     "hits": 88
    },
    "fat": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 88
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 87
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 94.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 96.0,
     "best": 0.85,
     "hits": 28
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 96.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 30
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 28
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.45,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two band-like structures are beginning to be defined in the triangle (cystic duct inferiorly and cystic artery superiorly), though the upper structure is still being dissected by the hook. C2: There is one clear full-thickness window between the duct and artery showing the liver behind, while the upper window above the artery is still incomplete and partially obstructed by the hook. C3: The lower part of the gallbladder remains broadly attached to the liver bed with very little of the cystic plate exposed.",
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete.",
    "examples": [
     "Example 80_9975.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.985.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.984.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       366,
       790,
       725
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       637,
       304,
       977
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       677,
       289,
       1000,
       505
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       294,
       691,
       496,
       983
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       478,
       571,
       677,
       682
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       147,
       601,
       395,
       737
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 97.0,
     "best": 1.0,
     "hits": 89
    },
    "liver": {
     "first": 0.0,
     "last": 97.0,
     "best": 1.0,
     "hits": 89
    },
    "fat": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 89
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 88
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 94.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 97.0,
     "best": 0.85,
     "hits": 29
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 97.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 31
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 28
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.45,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: A lower window separates a lower structure (cystic duct) from upper tissue, though the upper tubular structure is still surrounded by fat and cauterized tissue. C2: One full-thickness window is visible in the lower part of the triangle, but the upper part between the artery and cystic plate is still being dissected by the hook. C3: Dissection along the liver bed has just begun in the upper triangle, and the lower gallbladder is not yet separated from the cystic plate.",
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
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete, with the upper tubular structure still embedded in fat.",
    "examples": [
     "Example 118_117225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.985.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.985.",
     "Example 92_108175.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 92_109675.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 59_35450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       635,
       413,
       977
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       810,
       661
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       521,
       567,
       709,
       664
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       681,
       298,
       1000,
       497
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       398,
       647,
       658,
       983
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 98.0,
     "best": 1.0,
     "hits": 90
    },
    "liver": {
     "first": 0.0,
     "last": 98.0,
     "best": 1.0,
     "hits": 90
    },
    "fat": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 90
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 89
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 94.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 98.0,
     "best": 0.85,
     "hits": 30
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 98.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 32
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 28
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c3": 0.15
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and an upper tissue/vascular band (likely cystic artery) are seen connecting to the gallbladder around a window. C2: One full-thickness window is clearly opened between the lower structure and upper tissue, though the upper window to the cystic plate is still being dissected by the hook. C3: The lower gallbladder remains largely attached to the liver bed with only superficial peritoneal incision and minimal exposure of the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 83_60050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 57_34900.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       71,
       787,
       600
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       644,
       513,
       978
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       507,
       577,
       683,
       679
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       666,
       306,
       1000,
       504
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       537,
       663,
       827,
       971
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 99.0,
     "best": 1.0,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 99.0,
     "best": 1.0,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 94.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 31
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 29
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (likely cystic duct) is visible at the top right, while the rest of the area is obscured by the grasper shaft and incomplete dissection. C2: The hepatocystic triangle is not cleared into full-thickness windows and is partially occluded by the instrument. C3: The cystic plate is only minimally exposed at the upper right and mostly obscured by the large grasper shaft across the frame.",
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
      "confidence": 0.75
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
    "reason_if_not": "The grasper shaft crosses the foreground and only one tubular structure is visible in the upper right corner.",
    "examples": [
     "Example 118_116225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.984.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.984.",
     "Example 59_40450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 59_37200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       375,
       845,
       963
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       107,
       989,
       714
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       275,
       755,
       469,
       982
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       785,
       659,
       982
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       622,
       311,
       842
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 100.0,
     "best": 1.0,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 100.0,
     "best": 1.0,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 1.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 31
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 29
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible entering the gallbladder; the region is heavily occluded by the grasper shaft and undissected tissue. C2: The hepatocystic triangle is not cleared, with no full-thickness windows visible. C3: The lower gallbladder is not separated from the liver bed and the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "gallbladder",
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
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is early in dissection and heavily occluded by the grasper shaft across the center of the frame.",
    "examples": [
     "Example 105_24700.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.984.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.984.",
     "Example 118_118475.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.984.",
     "Example 59_37200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.984.",
     "Example 117_25375.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.983.",
     "Example 50_11475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.983."
    ],
    "boxes": [
     {
      "label": "irrigator",
      "box_2d": [
       0,
       98,
       992,
       706
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       8,
       695,
       200,
       946
      ],
      "confidence": 0.9
     },
     {
      "label": "liver",
      "box_2d": [
       232,
       381,
       851,
       944
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       146,
       837,
       666,
       983
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 101.0,
     "best": 1.0,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 101.0,
     "best": 1.0,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 1.0,
     "last": 101.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 31
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 29
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible entering the gallbladder; dissection is at an early stage near the liver bed. C2: The hepatocystic triangle is not cleared and no full-thickness windows are visible. C3: The gallbladder is mostly out of view at the top, and the lower gallbladder is not clearly separated from the cystic plate along its inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "gallbladder",
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not yet dissected and the gallbladder and biliary structures are largely out of view at the top of the frame.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.983.",
     "Example 117_19500.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 119_65625.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.981.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.984.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.984.",
     "Example 116_29950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.983."
    ],
    "boxes": [
     {
      "box_2d": [
       198,
       322,
       851,
       944
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       649,
       214,
       951
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       69,
       810,
       575
      ],
      "label": "grasper",
      "confidence": 0.91
     },
     {
      "box_2d": [
       0,
       546,
       293,
       737
      ],
      "label": "cystic_plate",
      "confidence": 0.77
     },
     {
      "box_2d": [
       169,
       751,
       726,
       982
      ],
      "label": "gallbladder",
      "confidence": 0.83
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 102.0,
     "best": 1.0,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 102.0,
     "best": 1.0,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 1.0,
     "last": 102.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 31
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 29
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c3": 0.1
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are clearly dissected and visible entering the gallbladder, as the dissection area is obscured by instruments and early in the process. C2: The hepatocystic triangle is not cleared, with no full-thickness windows visible. C3: Only the initial peritoneum at the inferior margin is being opened by the hook, and the lower gallbladder is not yet separated from the cystic plate.",
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is barely opened and largely occluded by the hook and grasper shafts in the upper field.",
    "examples": [
     "Example 98_65325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.984.",
     "Example 59_37825.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 48_54175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.985.",
     "Example 60_38825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 59_37700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 97_24350.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       184,
       259,
       937,
       886
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       206,
       752,
       845,
       981
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       68,
       580,
       506
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       531,
       230,
       963
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 103.0,
     "best": 1.0,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 103.0,
     "best": 1.0,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 1.0,
     "last": 103.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 31
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 29
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
    "cvs_evidence": "C1: No tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder. C2: The hepatocystic triangle is not cleared and no full-thickness windows are visible. C3: The lower part of the gallbladder is not separated from the liver bed and the cystic plate is not exposed.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.99
     },
     {
      "name": "gallbladder",
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in an early stage and instruments/liver obscure the hepatocystic triangle.",
    "examples": [
     "Example 98_65325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 106_53825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 117_27250.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.984.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 119_84250.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.985.",
     "Example 98_61950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       42,
       579,
       357,
       974
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       66,
       619,
       517
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       189,
       271,
       936,
       888
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       339,
       769,
       823,
       982
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 104.0,
     "best": 1.0,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 104.0,
     "best": 1.0,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 1.0,
     "last": 103.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 31
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 29
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because the hepatocystic triangle is not visible and no tubular structures can be seen entering the gallbladder. C2 is not achieved because the camera is focused on the peritoneal reflection and no dissected windows are visible. C3 is not achieved because the hook is only beginning to score the peritoneum and the gallbladder remains attached to the liver bed.",
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
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not yet dissected and the view is largely occupied by the liver and surgical instruments.",
    "examples": [
     "Example 115_24225.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.984.",
     "Example 106_53825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 63_63250.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.984.",
     "Example 59_37825.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.985.",
     "Example 59_37575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.984.",
     "Example 23_36850.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       18,
       563,
       334,
       971
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       227,
       276,
       963,
       931
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       68,
       663,
       517
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       304,
       785,
       804,
       982
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 105.0,
     "best": 1.0,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 105.0,
     "best": 1.0,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 1.0,
     "last": 105.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 31
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 29
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: No distinct tubular structures are visible entering the gallbladder as the hook is just beginning to incise the peritoneum at the top of the frame. C2: The hepatocystic triangle is largely out of view or still covered in connective tissue, with no full-thickness windows visible. C3: The gallbladder remains attached to the liver bed with no exposed cystic plate along its inferior margin.",
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "gallbladder",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "glare",
    "can_confirm_anatomy": false,
    "reason_if_not": "Initial peritoneal incision only; instruments and camera angle obscure the hepatocystic triangle and no tubular structures are dissected.",
    "examples": [
     "Example 94_18500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.982.",
     "Example 60_38825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.984.",
     "Example 48_55175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.983.",
     "Example 59_37700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.984.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.984.",
     "Example 98_61950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.983."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       87,
       989,
       908
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       597,
       269,
       966
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       257,
       775,
       762,
       981
      ],
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 106.0,
     "best": 1.0,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 106.0,
     "best": 1.0,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.95,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 1.0,
     "last": 105.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 31
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 29
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1 is not achieved as no dissected tubular structures (cystic duct or artery) are visible entering the gallbladder. C2 is not achieved because the hepatocystic triangle has not been dissected and no windows are present. C3 is not achieved as the gallbladder remains fully attached to the liver bed with the peritoneum intact.",
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
      "name": "gi_tract",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "glare",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection has just begun; peritoneum and connective tissue still cover the hepatocystic triangle and cystic plate.",
    "examples": [
     "Example 79_31350.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.981.",
     "Example 60_38825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.984.",
     "Example 63_63250.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.982.",
     "Example 117_15250.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.983.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.982.",
     "Example 98_61950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.982."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       198,
       289,
       931,
       937
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       417,
       523,
       979
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       413,
       587,
       804,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       212,
       176,
       510
      ],
      "confidence": 0.58
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 107.0,
     "best": 1.0,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 107.0,
     "best": 1.0,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 1.0,
     "last": 105.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 100.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 31
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 29
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c3": 0.15
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct and artery) are visible entering the gallbladder; the hepatocystic triangle is out of view or undissected. C2: There are no full-thickness windows visible through the hepatocystic triangle, only a small area of peritoneal dissection on the gallbladder-liver junction. C3: A small area of the cystic plate is being exposed at the top of the frame by the hook, but the inferior margin of the gallbladder is not fully separated from the liver bed.",
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
      "confidence": 0.65
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The camera is positioned mostly over the liver, and dissection of the hepatocystic triangle is incomplete with no tubular structures exposed.",
    "examples": [
     "Example 117_26250.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.986.",
     "Example 59_37825.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 117_26625.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.985.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 60_38825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       247,
       666,
       517,
       981
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       72,
       722,
       506
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       188,
       303,
       971,
       941
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       549,
       323,
       822
      ],
      "confidence": 0.72
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       761,
       260,
       963
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 108.0,
     "best": 1.0,
     "hits": 92
    },
    "liver": {
     "first": 0.0,
     "last": 108.0,
     "best": 1.0,
     "hits": 92
    },
    "fat": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 92
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.95,
     "hits": 91
    },
    "blood": {
     "first": 1.0,
     "last": 105.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 108.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 31
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 29
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.15,
     "c2": 0.15,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Only one broad band of tissue/structure is seen at the bottom of the frame, while the upper tissue is still attached and not clearly skeletonized into a second distinct tubular structure. C2: One full-thickness window is visible in the lower part of the triangle, but the upper part between the presumed artery and cystic plate is not cleared into a second window. C3: Some dissection has begun along the upper gallbladder-liver interface, but the lower gallbladder is not fully detached to clearly expose the cystic plate along its entire inferior margin.",
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
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.8
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are not yet fully skeletonized as distinct tubular structures.",
    "examples": [
     "Example 98_64575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.985.",
     "Example 88_23450.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.983.",
     "Example 88_26575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 70_19100.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.984.",
     "Example 106_49575.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       470,
       525,
       977
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       22,
       293,
       1000,
       595
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       327,
       226,
       409
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       949,
       375,
       1000,
       453
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       315,
       622,
       715,
       967
      ],
      "confidence": 0.82
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       698,
       540,
       935,
       649
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
     "best": 1.0,
     "hits": 93
    },
    "liver": {
     "first": 0.0,
     "last": 109.0,
     "best": 1.0,
     "hits": 93
    },
    "fat": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 93
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 92
    },
    "blood": {
     "first": 1.0,
     "last": 109.0,
     "best": 0.85,
     "hits": 14
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 109.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 31
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 34
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 29
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.1,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only one thick band-like structure (likely the cystic duct covered in peritoneum) is visible at the base, while the cystic artery is not yet skeletonized as a distinct second tubular structure. C2: A single full-thickness window is visible below the hook, but the upper part of the hepatocystic triangle is still being scored and is not cleared of tissue. C3: The peritoneal reflection along the liver bed has just been scored, and the lower gallbladder is not yet lifted off to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not yet isolated and the cystic plate is not exposed.",
    "examples": [
     "Example 106_54950.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.988.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 112_21475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 83_56550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 83_56425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       639,
       662,
       977,
       952
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       852,
       356,
       998,
       462
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       385,
       156,
       457
      ],
      "confidence": 0.85
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       659,
       665,
       991
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       362,
       992,
       695
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       655,
       529,
       878,
       693
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 110.0,
     "best": 1.0,
     "hits": 94
    },
    "liver": {
     "first": 0.0,
     "last": 110.0,
     "best": 1.0,
     "hits": 94
    },
    "fat": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 94
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 93
    },
    "blood": {
     "first": 1.0,
     "last": 109.0,
     "best": 0.85,
     "hits": 14
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 109.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 32
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 35
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 30
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a single broad tissue band/structure is visible at the lower border, and two distinct tubular structures (cystic duct and artery) have not yet been isolated. C2: One small window has been created below the hook, but the upper part of the hepatocystic triangle is still being incised and lacks a second full-thickness window. C3: The gallbladder remains largely attached to the liver bed with only a superficial peritoneal incision, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still early, with only one small window created and the cystic duct and artery not yet clearly skeletonized.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 117_25375.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.986.",
     "Example 83_56425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       638,
       598,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       355,
       862,
       634
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       566,
       521,
       765,
       638
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       521,
       608,
       915,
       960
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       734,
       255,
       1000,
       451
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
     "best": 1.0,
     "hits": 95
    },
    "liver": {
     "first": 0.0,
     "last": 111.0,
     "best": 1.0,
     "hits": 95
    },
    "fat": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 95
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 94
    },
    "blood": {
     "first": 1.0,
     "last": 109.0,
     "best": 0.85,
     "hits": 14
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 109.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 32
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 36
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 31
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.25
    },
    "cvs_evidence": "C1: A lower window separates a lower structure (cystic duct) from upper tissue, though the upper cystic artery is still partially obscured by the hook and surrounding tissue. C2: One clear full-thickness window is visible above the cystic duct, while the upper space near the hook is still being dissected and not fully cleared. C3: Dissection along the liver bed has begun superiorly, but the lower third of the gallbladder is not yet fully mobilized to expose the entire cystic plate.",
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete, and the electrocautery hook obscures the upper structures.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 55_36950.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.987.",
     "Example 83_58425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       640,
       447,
       983
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       381,
       859,
       629
      ],
      "confidence": 0.91
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       558,
       527,
       750,
       620
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       564,
       627,
       937,
       959
      ],
      "confidence": 0.83
     },
     {
      "label": "grasper",
      "box_2d": [
       727,
       275,
       1000,
       458
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       395,
       600,
       744,
       981
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 112.0,
     "best": 1.0,
     "hits": 96
    },
    "liver": {
     "first": 0.0,
     "last": 112.0,
     "best": 1.0,
     "hits": 96
    },
    "fat": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 96
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 95
    },
    "blood": {
     "first": 1.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 109.0,
     "best": 0.8,
     "hits": 6
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 33
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 37
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 31
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.6,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder, though still somewhat covered by peritoneum/connective tissue. C2: A clear full-thickness window is dissected between the lower structure and the upper structure, and dissection is ongoing above the artery with the hook. C3: The peritoneum along the cystic plate is incised and partially dissected, though the lower gallbladder is not yet completely separated from the liver bed.",
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is still in progress.",
    "examples": [
     "Example 117_26375.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.986.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 112_21475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 57_34900.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       425,
       597,
       768,
       984
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       769,
       278,
       1000,
       437
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       586,
       506,
       787,
       638
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       345,
       893,
       620
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       608,
       486,
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
     "last": 113.0,
     "best": 1.0,
     "hits": 97
    },
    "liver": {
     "first": 0.0,
     "last": 113.0,
     "best": 1.0,
     "hits": 97
    },
    "fat": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 97
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 96
    },
    "blood": {
     "first": 1.0,
     "last": 112.0,
     "best": 0.85,
     "hits": 15
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 34
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 38
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 31
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.05,
     "c2": 0.25,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not yet clearly dissected and isolated. C2: One small full-thickness window is visible in the lower hepatocystic triangle, but the upper part is still being dissected and is not fully cleared. C3: The lower part of the gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are not yet clearly isolated as distinct tubular structures.",
    "examples": [
     "Example 106_54825.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 83_56425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 117_19500.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.985."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       328,
       888,
       625
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       596,
       436,
       976
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       767,
       270,
       1000,
       429
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       363,
       136,
       419
      ],
      "label": "grasper",
      "confidence": 0.85
     },
     {
      "box_2d": [
       70,
       598,
       324,
       974
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       570,
       498,
       772,
       617
      ],
      "label": "hepatocystic_window",
      "confidence": 0.92
     },
     {
      "box_2d": [
       577,
       477,
       866,
       689
      ],
      "label": "cystic_duct",
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 114.0,
     "best": 1.0,
     "hits": 98
    },
    "liver": {
     "first": 0.0,
     "last": 114.0,
     "best": 1.0,
     "hits": 98
    },
    "fat": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 98
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 97
    },
    "blood": {
     "first": 1.0,
     "last": 114.0,
     "best": 0.85,
     "hits": 16
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 34
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 39
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 31
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Peritoneum and fat still cover the hepatocystic triangle, so two distinct tubular structures entering the gallbladder are not yet isolated. C2: A lower window has been opened showing background tissue, but the upper part of the triangle is still being incised by the hook and lacks a second full-thickness window. C3: Thehook is just beginning to incise the tissue along the cystic plate, and the lower gallbladder is not yet separated from the liver bed.",
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
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are still covered by peritoneum and connective tissue.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.984.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.985.",
     "Example 112_21850.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.00). Similarity 0.984.",
     "Example 92_109675.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985."
    ],
    "boxes": [
     {
      "box_2d": [
       124,
       574,
       418,
       978
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       784,
       280,
       1000,
       422
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       368,
       158,
       433
      ],
      "label": "grasper",
      "confidence": 0.85
     },
     {
      "box_2d": [
       608,
       490,
       802,
       592
      ],
      "label": "hepatocystic_window",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       600,
       616,
       980
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       334,
       911,
       626
      ],
      "label": "gallbladder",
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 115.0,
     "best": 1.0,
     "hits": 99
    },
    "liver": {
     "first": 0.0,
     "last": 115.0,
     "best": 1.0,
     "hits": 99
    },
    "fat": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 99
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 98
    },
    "blood": {
     "first": 1.0,
     "last": 114.0,
     "best": 0.85,
     "hits": 16
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 34
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 40
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 31
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.35,
     "c2": 0.2,
     "c3": 0.15
    },
    "cvs_evidence": "C1: The cystic duct is partially visible at the bottom and a second structure is being dissected above, but they are still encased in peritoneum and fat and not clearly isolated as two distinct tubular structures. C2: One small window is present between the lower structure and the upper tissue, while the upper space is still being incised by the hook and not fully cleared. C3: The peritoneum along the gallbladder-liver interface is only beginning to be incised and the lower gallbladder is not yet lifted off the cystic plate.",
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
      "confidence": 0.5
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
    "reason_if_not": "The hepatocystic triangle is still largely covered by peritoneum and fat, preventing clear confirmation of the cystic duct, cystic artery, and cystic plate.",
    "examples": [
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 106_54825.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 83_60925.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 83_61050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 64_29575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       354,
       946,
       649
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       617,
       639,
       966
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       640,
       512,
       833,
       626
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       232,
       608,
       497,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       814,
       315,
       1000,
       440
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       390,
       198,
       464
      ],
      "confidence": 0.89
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 116.0,
     "best": 1.0,
     "hits": 100
    },
    "liver": {
     "first": 0.0,
     "last": 116.0,
     "best": 1.0,
     "hits": 100
    },
    "fat": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 100
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 99
    },
    "blood": {
     "first": 1.0,
     "last": 114.0,
     "best": 0.85,
     "hits": 16
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 35
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 41
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 32
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is in an early stage and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly identifiable. C2: Although a small full-thickness window is opened at the bottom of the dissection, the upper portion of the hepatocystic triangle remains covered in tissue and lacks a second window. C3: The lower part of the gallbladder is still attached to the liver bed with only a superficial peritoneal incision, so the cystic plate is not fully exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are still embedded in peritoneum and connective tissue.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 112_21475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 92_109675.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 65_11675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       616,
       545,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       43,
       372,
       995,
       781
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       381,
       230,
       476
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       855,
       337,
       1000,
       436
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       665,
       649,
       995,
       930
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       689,
       502,
       874,
       638
      ],
      "confidence": 0.89
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       327,
       563,
       683,
       651
      ],
      "confidence": 0.84
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 117.0,
     "best": 1.0,
     "hits": 101
    },
    "liver": {
     "first": 0.0,
     "last": 117.0,
     "best": 1.0,
     "hits": 101
    },
    "fat": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 101
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 100
    },
    "blood": {
     "first": 1.0,
     "last": 117.0,
     "best": 0.85,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 35
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 42
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 32
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Peritoneum and connective tissue still cover the hepatocystic triangle, so two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly identifiable. C2: There is only a small initial window at the bottom and a superficial peritoneal incision, not full-thickness clearance of the hepatocystic triangle. C3: The lower part of the gallbladder remains largely attached to the liver bed with only a superficial peritoneal scoring line, so the cystic plate is not exposed.",
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
    "reason_if_not": "Early stage of dissection with peritoneum and fibrofatty tissue obscuring the cystic duct, cystic artery, and cystic plate.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 59_35450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.984.",
     "Example 103_11475.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.985.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 59_37200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.984."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       69,
       1000,
       449
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       615,
       615,
       982
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       403,
       260,
       520
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       891,
       363,
       1000,
       447
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       801,
       608,
       1000,
       752
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       773,
       520,
       921,
       613
      ],
      "label": "hepatocystic_window",
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 118.0,
     "best": 1.0,
     "hits": 102
    },
    "liver": {
     "first": 0.0,
     "last": 118.0,
     "best": 1.0,
     "hits": 102
    },
    "fat": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 102
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 101
    },
    "blood": {
     "first": 1.0,
     "last": 117.0,
     "best": 0.85,
     "hits": 17
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 35
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 42
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 32
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.7,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct anteriorly and cystic artery posteriorly) are partiallyskeletonized and seen entering the gallbladder. C2: Two windows have been created in the hepatocystic triangle, one between the duct and artery and another above the artery, with the hook dissecting in the upper window. C3: The lower part of the gallbladder is still largely attached to the liver bed with only minimal exposure of the cystic plate.",
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
    "reason_if_not": "The lower third of the gallbladder is not yet mobilized off the cystic plate (C3 not achieved), and dissection of the upper window is still ongoing.",
    "examples": [
     "Example 64_37575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 112_21475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       467,
       616,
       988
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       998,
       458
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       401,
       230,
       496
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       856,
       360,
       1000,
       458
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       546,
       627,
       911,
       963
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       684,
       522,
       878,
       634
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
     "best": 1.0,
     "hits": 103
    },
    "liver": {
     "first": 0.0,
     "last": 119.0,
     "best": 1.0,
     "hits": 103
    },
    "fat": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 103
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 102
    },
    "blood": {
     "first": 1.0,
     "last": 119.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 119.0,
     "best": 0.85,
     "hits": 36
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 119.0,
     "best": 0.85,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 43
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 32
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.7,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. C2: Two windows are dissected between the duct, artery, and liver side with background tissue visible through the lower window and the hook dissecting the upper window. C3: The gallbladder remains largely attached to the liver bed with no clearly exposed cystic plate behind the lower third of the gallbladder.",
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
    "reason_if_not": "The lower part of the gallbladder is not yet dissected off the cystic plate (C3 not achieved).",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.984.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 59_35450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       477,
       544,
       986
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       365,
       986,
       917
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       400,
       221,
       494
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       833,
       350,
       1000,
       459
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       514,
       626,
       858,
       974
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       683,
       526,
       851,
       642
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 120.0,
     "best": 1.0,
     "hits": 104
    },
    "liver": {
     "first": 0.0,
     "last": 120.0,
     "best": 1.0,
     "hits": 104
    },
    "fat": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 104
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 103
    },
    "blood": {
     "first": 1.0,
     "last": 119.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 120.0,
     "best": 0.85,
     "hits": 37
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 120.0,
     "best": 0.85,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 44
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 32
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.45,
     "c2": 0.65,
     "c3": 0.15
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and a partial upper structure being dissected by the hook are visible, though not fullyskeletonized as distinct tubes entering the gallbladder. C2: A clear full-thickness window is visible below the upper structure, and a second window above it is being opened by the hook. C3: The lower gallbladder remains largely attached to the liver bed with the peritoneal reflection still intact.",
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
      "confidence": 0.7
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
    "examples": [
     "Example 83_66175.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 99_27425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 111_17250.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 83_57050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       608,
       578,
       987
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       369,
       996,
       932
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       688,
       534,
       873,
       679
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       517,
       634,
       846,
       974
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       403,
       230,
       499
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       836,
       361,
       998,
       467
      ],
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 121.0,
     "best": 1.0,
     "hits": 105
    },
    "liver": {
     "first": 0.0,
     "last": 121.0,
     "best": 1.0,
     "hits": 105
    },
    "fat": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 105
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 104
    },
    "blood": {
     "first": 1.0,
     "last": 119.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 121.0,
     "best": 0.85,
     "hits": 38
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 121.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 45
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 32
    }
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
     "since": 119.0
    },
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
     "since": 119.0
    }
   ]
  },
  {
   "t": 122.0,
   "label": {
    "cvs": {
     "c1": 0.75,
     "c2": 0.75,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct inferiorly and cystic artery superiorly) are dissected and seen entering the gallbladder wall. C2: The hepatocystic triangle is cleared with two windows visible between the duct, artery, and liver bed, with the hook dissecting the upper window. C3: The peritoneum above the cystic artery is still intact and the lower gallbladder is not separated from the cystic plate.",
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
    "reason_if_not": "The lower part of the gallbladder has not yet been dissected off the cystic plate (C3 not achieved).",
    "examples": [
     "Example 95_30375.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 88_26700.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 48_53800.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       624,
       572,
       982
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       1000,
       452
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       701,
       529,
       874,
       681
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       403,
       238,
       500
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       848,
       363,
       1000,
       461
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       539,
       634,
       876,
       967
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 122.0,
     "best": 1.0,
     "hits": 106
    },
    "liver": {
     "first": 0.0,
     "last": 122.0,
     "best": 1.0,
     "hits": 106
    },
    "fat": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 106
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 105
    },
    "blood": {
     "first": 1.0,
     "last": 119.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 122.0,
     "best": 0.85,
     "hits": 39
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 122.0,
     "best": 0.85,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 46
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
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
     "since": 119.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.45,
     "c2": 0.15,
     "c3": 0.15
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) is separated by a window, and an upper structure is being dissected with the hook, though it is not yet clearly isolated as a distinct tubular structure. C2: There is one clear window below the upper tissue band, but the upper part of the hepatocystic triangle between the putative artery and liver bed is still being dissected and has no full-thickness window. C3: The peritoneum along the liver bed is only beginning to be incised by the hook, and the lower gallbladder is still broadly attached without an exposed cystic plate.",
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete, preventing definitive confirmation of all structures.",
    "examples": [
     "Example 88_32575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 53_52325.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 59_40075.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 83_56425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       477,
       577,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       407,
       230,
       497
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       850,
       369,
       1000,
       467
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       591,
       644,
       988,
       960
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       715,
       533,
       878,
       662
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       27,
       372,
       982,
       853
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
     "best": 1.0,
     "hits": 107
    },
    "liver": {
     "first": 0.0,
     "last": 123.0,
     "best": 1.0,
     "hits": 107
    },
    "fat": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 107
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 106
    },
    "blood": {
     "first": 1.0,
     "last": 119.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 123.0,
     "best": 0.85,
     "hits": 40
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 123.0,
     "best": 0.85,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
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
     "since": 119.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.1,
     "c2": 0.15,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) is partially outlined below the window, while the superior aspect where the cystic artery would be is still covered by undissected connective tissue and fat. C2: A single window is opened inferiorly, but the upper part of the hepatocystic triangle remains filled with tissue being actively dissected by the hook. C3: The lower part of the gallbladder remains attached to the liver bed with no exposed cystic plate visible.",
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
      "confidence": 0.9
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery and cystic plate are not yet isolated or exposed.",
    "examples": [
     "Example 106_54950.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 112_21475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       70,
       986,
       687
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       480,
       574,
       980
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       707,
       537,
       865,
       648
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       562,
       628,
       940,
       964
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       413,
       235,
       508
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       858,
       368,
       1000,
       464
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
     "best": 1.0,
     "hits": 108
    },
    "liver": {
     "first": 0.0,
     "last": 124.0,
     "best": 1.0,
     "hits": 108
    },
    "fat": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 108
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 107
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 41
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 123.0,
     "best": 0.85,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 48
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
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
     "since": 119.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.25,
     "c2": 0.2,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two potential structures are being dissected in the hepatocystic triangle, but they remain partially encased in connective tissue and are not yet clearly isolated as distinct tubular structures entering the gallbladder. C2: A lower window is partially opened, while the upper space near the cystic plate is still being dissected by the hook and is not yet a clear full-thickness window. C3: The lower part of the gallbladder is still largely attached to the liver bed with minimal exposure of the cystic plate.",
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
      "confidence": 0.7
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with connective tissue still obscuring the full course of the structures.",
    "examples": [
     "Example 98_65325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.990.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.989.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.990.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 112_21475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       989,
       477
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       488,
       634,
       981
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       595,
       650,
       905,
       963
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       417,
       245,
       517
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       870,
       381,
       999,
       472
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       727,
       544,
       892,
       665
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 125.0,
     "best": 1.0,
     "hits": 109
    },
    "liver": {
     "first": 0.0,
     "last": 125.0,
     "best": 1.0,
     "hits": 109
    },
    "fat": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.95,
     "hits": 109
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.95,
     "hits": 108
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 125.0,
     "best": 0.85,
     "hits": 42
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 125.0,
     "best": 0.85,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 125.0,
     "best": 0.95,
     "hits": 49
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
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
   "t": 126.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The peritoneum and fat are just being opened, so two distinct tubular structures entering the gallbladder are not yet isolated. C2: The hepatocystic triangle is still covered with fat and connective tissue without full-thickness windows. C3: The lower part of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "confidence": 0.95
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "smoke",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in an early stage and critical structures are still covered by fat and peritoneum.",
    "examples": [
     "Example 106_54825.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.982.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.984.",
     "Example 88_24450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.983.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.983.",
     "Example 53_50700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.983."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       70,
       1000,
       730
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       381,
       1000,
       980
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       566,
       638,
       928,
       963
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       417,
       260,
       521
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       880,
       390,
       1000,
       475
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       733,
       545,
       924,
       715
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 126.0,
     "best": 1.0,
     "hits": 109
    },
    "liver": {
     "first": 0.0,
     "last": 126.0,
     "best": 1.0,
     "hits": 109
    },
    "fat": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.95,
     "hits": 109
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.95,
     "hits": 108
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 125.0,
     "best": 0.85,
     "hits": 42
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 125.0,
     "best": 0.85,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 125.0,
     "best": 0.95,
     "hits": 49
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.45,
     "c2": 0.65,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two horizontal band-like structures are visible across the dissected space, though the upper one is still fairly thick and being dissected by the hook. C2: Two full-thickness windows showing the dark liver background behind the structures are visible in the lower hepatocystic triangle. C3: Dissection with the electrocautery hook is ongoing at the upper margin, and the lower third of the gallbladder is not yet clearly separated from the cystic plate.",
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
      "confidence": 0.7
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The upper structure and cystic plate separation are still being actively dissected with the hook, so the critical view of safety is not yet fully established.",
    "examples": [
     "Example 88_26825.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.983.",
     "Example 111_17000.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.985.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.983.",
     "Example 53_50700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.984.",
     "Example 107_54425.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.983."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       1000,
       688
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       502,
       498,
       982
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       419,
       280,
       534
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       443,
       666,
       764,
       980
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 127.0,
     "best": 1.0,
     "hits": 110
    },
    "liver": {
     "first": 0.0,
     "last": 127.0,
     "best": 1.0,
     "hits": 110
    },
    "fat": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 110
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 109
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 127.0,
     "best": 0.85,
     "hits": 43
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 127.0,
     "best": 0.85,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 50
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.15,
     "c2": 0.35,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not yet clearly isolated and visible, as tissue still covers the anterior structure. C2: A lower window is visible below the hook, while the upper space is still being dissected and is not yet a clear full-thickness window. C3: The gallbladder remains largely attached to the liver bed superiorly and the cystic plate is not fully exposed along the inferior margin.",
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
      "confidence": 0.55
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, so the two tubular structures and their entry into the gallbladder are not yet clearly confirmed.",
    "examples": [
     "Example 98_63825.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.988.",
     "Example 112_21725.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.00). Similarity 0.987.",
     "Example 88_30325.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 117_25125.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       67,
       995,
       464
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       501,
       608,
       977
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       414,
       281,
       526
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       701,
       615,
       995,
       898
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       748,
       528,
       976,
       656
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 128.0,
     "best": 1.0,
     "hits": 111
    },
    "liver": {
     "first": 0.0,
     "last": 128.0,
     "best": 1.0,
     "hits": 111
    },
    "fat": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.95,
     "hits": 111
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.95,
     "hits": 110
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 128.0,
     "best": 0.85,
     "hits": 43
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 128.0,
     "best": 0.85,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 128.0,
     "best": 0.95,
     "hits": 51
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.85,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) are visible entering the gallbladder, separated by dissected windows, though the artery is partially obscured by the hook. C2: Two clear full-thickness windows are dissected in the hepatocystic triangle, showing the liver parenchyma behind them. C3: The lower gallbladder is still largely attached to the liver bed superiorly, so a full exposed cystic plate behind a hanging gallbladder is not yet achieved.",
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
    "examples": [
     "Example 117_26500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.984.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 112_21850.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.00). Similarity 0.985.",
     "Example 92_108175.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 117_20000.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       639,
       548,
       980
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       1000,
       466
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       415,
       268,
       520
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       894,
       404,
       1000,
       477
      ],
      "confidence": 0.91
     },
     {
      "label": "hook",
      "box_2d": [
       553,
       630,
       900,
       959
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       732,
       560,
       895,
       662
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
     "best": 1.0,
     "hits": 112
    },
    "liver": {
     "first": 0.0,
     "last": 129.0,
     "best": 1.0,
     "hits": 112
    },
    "fat": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 112
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 111
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 113.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 129.0,
     "best": 0.85,
     "hits": 44
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 129.0,
     "best": 0.85,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 52
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.1,
     "c2": 0.25,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Peritoneum and fat still cover the anterior aspect of the gallbladder neck, so two distinct tubular structures entering the gallbladder are not yet clearly isolated. C2: Two small dissected openings are visible in the hepatocystic triangle, though the tissue bridge between them is still thick and being divided by the hook. C3: Only a small portion of the lower gallbladder has been dissected near the hook, and the full inferior margin is not separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and tubular structures are not yet skeletonized.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.989.",
     "Example 48_56175.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 83_65050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 83_58425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 112_21475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       68,
       1000,
       750
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       501,
       561,
       987
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       595,
       645,
       922,
       956
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       424,
       274,
       532
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       898,
       419,
       1000,
       495
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       740,
       577,
       901,
       678
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 130.0,
     "best": 1.0,
     "hits": 113
    },
    "liver": {
     "first": 0.0,
     "last": 130.0,
     "best": 1.0,
     "hits": 113
    },
    "fat": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 113
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 112
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 130.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 129.0,
     "best": 0.85,
     "hits": 44
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 129.0,
     "best": 0.85,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 53
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not yet clearly skeletonized and seen entering the gallbladder, as peritoneum and connective tissue still cover the structures. C2: There is one small window opened at the bottom, and the hook is incising the peritoneum higher up, so the hepatocystic triangle is not yet fully cleared. C3: The lower part of the gallbladder is not yet detached from the liver bed to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still early, with peritoneum and connective tissue obscuring the cystic duct and artery.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.988.",
     "Example 92_105175.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 65_11675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 92_109675.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 112_21475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       68,
       1000,
       478
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       489,
       610,
       982
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       417,
       280,
       528
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       923,
       417,
       1000,
       473
      ],
      "label": "grasper",
      "confidence": 0.75
     },
     {
      "box_2d": [
       638,
       633,
       999,
       936
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       751,
       550,
       928,
       647
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
     "last": 131.0,
     "best": 1.0,
     "hits": 114
    },
    "liver": {
     "first": 0.0,
     "last": 131.0,
     "best": 1.0,
     "hits": 114
    },
    "fat": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 113
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.95,
     "hits": 113
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 130.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 129.0,
     "best": 0.85,
     "hits": 44
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 129.0,
     "best": 0.85,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 131.0,
     "best": 0.95,
     "hits": 54
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.25,
     "c2": 0.65,
     "c3": 0.2
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and an upper tissue band/artery are partially skeletonized, though their clear tubular entry into the gallbladder is still somewhat obscured by connective tissue and the hook. C2: Two windows are being created in the hepatocystic triangle with background liver visible through the lower opening and the hook dissecting the upper space. C3: The peritoneum over the gallbladder neck is still largely intact superiorly and the lower third of the gallbladder is not fully detached from the cystic plate.",
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
      "confidence": 0.6
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress; tubular structures are not yet completely skeletonized.",
    "examples": [
     "Example 38_48350.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.985.",
     "Example 83_56425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 112_21475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 112_21725.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       71,
       996,
       467
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       663,
       563,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       419,
       276,
       526
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       914,
       421,
       1000,
       482
      ],
      "confidence": 0.8
     },
     {
      "label": "hook",
      "box_2d": [
       490,
       632,
       832,
       976
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       731,
       557,
       918,
       684
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 132.0,
     "best": 1.0,
     "hits": 115
    },
    "liver": {
     "first": 0.0,
     "last": 132.0,
     "best": 1.0,
     "hits": 115
    },
    "fat": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 114
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 114
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 130.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 132.0,
     "best": 0.85,
     "hits": 45
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 132.0,
     "best": 0.85,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 55
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.75,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are visible running horizontally toward the gallbladder neck. C2: Two distinct dissected windows are visible between the duct and artery and above the artery where the hook is working, allowing view of the background liver. C3: The peritoneum and fatty tissue above the upper window are still intact and the lower gallbladder is not fully separated from the cystic plate.",
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
    "reason_if_not": "The lower third of the gallbladder is not yet dissected off the cystic plate (C3 not achieved).",
    "examples": [
     "Example 106_54825.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 83_56425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 88_26700.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 88_32700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       70,
       1000,
       600
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       497,
       532,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       473,
       634,
       804,
       980
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       421,
       274,
       530
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       908,
       417,
       1000,
       485
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       734,
       563,
       912,
       672
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 133.0,
     "best": 1.0,
     "hits": 116
    },
    "liver": {
     "first": 0.0,
     "last": 133.0,
     "best": 1.0,
     "hits": 116
    },
    "fat": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.95,
     "hits": 115
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.95,
     "hits": 115
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 130.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 133.0,
     "best": 0.85,
     "hits": 46
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 133.0,
     "best": 0.85,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 133.0,
     "best": 0.95,
     "hits": 56
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.75,
     "c2": 0.85,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) are visible entering the gallbladder, separated by two windows. C2: Two full-thickness windows are clearly dissected through the hepatocystic triangle with the liver visible behind them. C3: The lower gallbladder is not yet separated from the liver bed and the cystic plate is not exposed.",
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
    "examples": [
     "Example 88_26825.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 106_54825.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.984.",
     "Example 107_54425.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.986.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 111_17000.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       69,
       1000,
       714
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       521,
       442,
       976
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       336,
       668,
       725,
       981
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       432,
       288,
       545
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       386,
       619,
       737,
       711
      ],
      "confidence": 0.82
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       753,
       581,
       914,
       691
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 134.0,
     "best": 1.0,
     "hits": 117
    },
    "liver": {
     "first": 0.0,
     "last": 134.0,
     "best": 1.0,
     "hits": 117
    },
    "fat": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 116
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 116
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 130.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 134.0,
     "best": 0.85,
     "hits": 47
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 134.0,
     "best": 0.85,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 57
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
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
     "since": 132.0
    },
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
     "since": 132.0
    }
   ]
  },
  {
   "t": 135.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet clearly isolated and skeletonized. C2: Two small windows are being dissected in the hepatocystic triangle, but significant peritoneum and connective tissue remain anteriorly and superiorly. C3: The lower part of the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; peritoneum and connective tissue still obscure the tubular structures and the gallbladder is not yet mobilized off the cystic plate.",
    "examples": [
     "Example 98_64325.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 112_21725.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.00). Similarity 0.988.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 117_19375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 112_21475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       67,
       1000,
       513
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       501,
       582,
       984
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       387,
       618,
       743,
       708
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       739,
       563,
       936,
       688
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       542,
       650,
       878,
       966
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       427,
       288,
       545
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       873,
       436,
       1000,
       492
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
     "best": 1.0,
     "hits": 118
    },
    "liver": {
     "first": 0.0,
     "last": 135.0,
     "best": 1.0,
     "hits": 118
    },
    "fat": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.95,
     "hits": 117
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.95,
     "hits": 117
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 130.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 134.0,
     "best": 0.85,
     "hits": 47
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 134.0,
     "best": 0.85,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 135.0,
     "best": 0.95,
     "hits": 58
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
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
     "since": 132.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.85,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are dissected and seen connecting toward the gallbladder, VERY similar to Example 112_23225. C2: Two distinct windows are opened above and below the upper tubular structure allowing a clear view of the underlying tissue. C3: The lower third of the gallbladder is not yet mobilized off the cystic plate on the liver bed.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder has not been elevated off the cystic plate to complete the critical view of safety.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 42_46650.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.33). Similarity 0.983.",
     "Example 117_25125.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.984.",
     "Example 88_31575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       499,
       545,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       71,
       1000,
       482
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       426,
       258,
       530
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       871,
       417,
       1000,
       502
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       702,
       576,
       873,
       690
      ],
      "confidence": 0.82
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       346,
       628,
       690,
       713
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 136.0,
     "best": 1.0,
     "hits": 119
    },
    "liver": {
     "first": 0.0,
     "last": 136.0,
     "best": 1.0,
     "hits": 119
    },
    "fat": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 118
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 118
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 130.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 136.0,
     "best": 0.85,
     "hits": 48
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 136.0,
     "best": 0.85,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 59
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
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
     "since": 132.0
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 137.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.6,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder, though the upper one is still surrounded by connective tissue. C2: A clear full-thickness window is present between the lower and upper structures, with partial clearing above the artery. C3: The cystic plate is partially exposed in the upper window, but the lower gallbladder is not fully mobilized off the liver bed along the whole inferior margin.",
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
    "reason_if_not": "The upper window above the cystic artery and the cystic plate are not yet completely cleared of connective tissue.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 117_25125.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.988.",
     "Example 117_24625.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.985.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 117_25375.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.986.",
     "Example 88_23700.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       402,
       237,
       488
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       784,
       315,
       1000,
       451
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       627,
       523,
       986
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       366,
       915,
       773
      ],
      "label": "gallbladder",
      "confidence": 0.9
     },
     {
      "box_2d": [
       662,
       547,
       807,
       639
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
     "last": 137.0,
     "best": 1.0,
     "hits": 120
    },
    "liver": {
     "first": 0.0,
     "last": 137.0,
     "best": 1.0,
     "hits": 120
    },
    "fat": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 119
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 119
    },
    "blood": {
     "first": 1.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 18
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 137.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 137.0,
     "best": 0.9,
     "hits": 49
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 137.0,
     "best": 0.85,
     "hits": 20
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 60
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
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
     "since": 132.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.45,
     "c2": 0.65,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two bands of tissue (likely cystic duct and artery) are seen crossing the hepatocystic triangle, though the upper structure is still somewhat broad and covered in peritoneum. C2: A clear full-thickness window is dissected between the lower and upper structures, with a second window partially opened above the upper structure. C3: The lower gallbladder remains largely attached to the liver bed with only superficial peritoneal incision and minimal exposure of the cystic plate.",
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
    "reason_if_not": "The lower part of the gallbladder is not yet mobilized off the cystic plate (C3 not achieved), and the upper tubular structure requires further skeletonization.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.987.",
     "Example 63_61875.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 63_64500.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.985.",
     "Example 70_18975.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.987.",
     "Example 117_25125.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.986.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       615,
       627,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       381,
       218,
       452
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       738,
       277,
       1000,
       431
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       10,
       347,
       860,
       646
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       618,
       530,
       772,
       629
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       640,
       496,
       990,
       951
      ],
      "confidence": 0.84
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 138.0,
     "best": 1.0,
     "hits": 121
    },
    "liver": {
     "first": 0.0,
     "last": 138.0,
     "best": 1.0,
     "hits": 121
    },
    "fat": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.95,
     "hits": 120
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.95,
     "hits": 120
    },
    "blood": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 137.0,
     "best": 0.8,
     "hits": 7
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 138.0,
     "best": 0.9,
     "hits": 50
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 21
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 138.0,
     "best": 0.95,
     "hits": 61
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
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
     "since": 132.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.7,
     "c2": 0.65,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the lower gallbladder. C2: A clear full-thickness window is dissected between the duct and artery showing background tissue, with dissection also extending above the artery onto the plate. C3: The cystic plate is exposed behind the upper dissection area, though the lower gallbladder remains partially attached superiorly.",
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
      "confidence": 0.85
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "examples": [
     "Example 88_31575.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 42_46650.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.33). Similarity 0.986.",
     "Example 65_11675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 48_56300.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       625,
       616,
       982
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       69,
       908,
       666
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       766,
       295,
       1000,
       451
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       389,
       212,
       462
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       611,
       544,
       768,
       636
      ],
      "confidence": 0.77
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       617,
       507,
       989,
       966
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 139.0,
     "best": 1.0,
     "hits": 122
    },
    "liver": {
     "first": 0.0,
     "last": 139.0,
     "best": 1.0,
     "hits": 122
    },
    "fat": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 121
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 121
    },
    "blood": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 139.0,
     "best": 0.8,
     "hits": 8
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 139.0,
     "best": 0.9,
     "hits": 51
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 139.0,
     "best": 0.85,
     "hits": 22
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 62
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
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
     "since": 132.0
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 140.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.75,
     "c3": 0.35
    },
    "cvs_evidence": "C1: The cystic duct is clearly delineated at the bottom of the triangle, and the cystic artery is partially visible above the lower window, connecting to the gallbladder. C2: A clear full-thickness window is dissected between the cystic duct and cystic artery, and the upper portion between the artery and cystic plate is also cleared enough to show deeper tissue. C3: The inferior margin of the gallbladder is only partially separated from the liver bed, with the upper part of the triangle not yet fully opened to expose the entire lower cystic plate.",
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
      "name": "fat",
      "confidence": 0.85
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
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.988.",
     "Example 42_46650.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.33). Similarity 0.987.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.984.",
     "Example 88_24575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 70_18975.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       628,
       597,
       981
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       386,
       214,
       458
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       784,
       308,
       1000,
       452
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       629,
       549,
       781,
       638
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       257,
       586,
       642,
       699
      ],
      "confidence": 0.82
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       350,
       895,
       709
      ],
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 140.0,
     "best": 1.0,
     "hits": 123
    },
    "liver": {
     "first": 0.0,
     "last": 140.0,
     "best": 1.0,
     "hits": 123
    },
    "fat": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.95,
     "hits": 122
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.95,
     "hits": 122
    },
    "blood": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 140.0,
     "best": 0.8,
     "hits": 9
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 140.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 140.0,
     "best": 0.85,
     "hits": 23
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 140.0,
     "best": 0.95,
     "hits": 63
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
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
     "since": 132.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.75,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct inferiorly and cystic artery superiorly) are defined entering the gallbladder, though covered by thin peritoneum. C2: A clear full-thickness window is visible between the cystic duct and cystic artery, and a dissected space is present above the artery against the cystic plate. C3: The cystic plate is exposed superiorly, but the dissection does not clearly free the entire lower third of the gallbladder off the liver bed.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 70_18975.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 96_80575.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.984.",
     "Example 56_18950.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 63_61875.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.985.",
     "Example 47_45650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.984."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       560,
       581,
       976
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       297,
       842,
       624
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       719,
       224,
       1000,
       397
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       329,
       188,
       386
      ],
      "label": "grasper",
      "confidence": 0.88
     },
     {
      "box_2d": [
       587,
       495,
       731,
       593
      ],
      "label": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "box_2d": [
       218,
       542,
       582,
       637
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
     "last": 141.0,
     "best": 1.0,
     "hits": 124
    },
    "liver": {
     "first": 0.0,
     "last": 141.0,
     "best": 1.0,
     "hits": 124
    },
    "fat": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.95,
     "hits": 123
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.95,
     "hits": 123
    },
    "blood": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 141.0,
     "best": 0.8,
     "hits": 10
    },
    "gi_tract": {
     "first": 11.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 141.0,
     "best": 0.9,
     "hits": 53
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 141.0,
     "best": 0.85,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 141.0,
     "best": 0.95,
     "hits": 64
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 139.0
    },
    "c2": {
     "on": true,
     "since": 132.0
    },
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
     "since": 139.0
    }
   ]
  },
  {
   "t": 142.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.65,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder, though the artery is still somewhat embedded in connective tissue. C2: A full-thickness window is clearly visible between the cystic duct and artery, with a partial window above the artery. C3: The gallbladder is still largely attached to the liver bed superiorly, so the lower cystic plate is not fully exposed.",
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
      "name": "cystic_plate",
      "confidence": 0.6
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "examples": [
     "Example 119_64500.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 63_61875.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 106_56700.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.986.",
     "Example 47_45650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 76_58725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.987.",
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       532,
       609,
       987
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       270,
       856,
       620
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       712,
       152,
       997,
       336
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       298,
       158,
       356
      ],
      "confidence": 0.81
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       588,
       425,
       758,
       558
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 142.0,
     "best": 1.0,
     "hits": 125
    },
    "liver": {
     "first": 0.0,
     "last": 142.0,
     "best": 1.0,
     "hits": 125
    },
    "fat": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 124
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 124
    },
    "blood": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 142.0,
     "best": 0.8,
     "hits": 10
    },
    "gi_tract": {
     "first": 11.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 142.0,
     "best": 0.9,
     "hits": 54
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 142.0,
     "best": 0.85,
     "hits": 25
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 65
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 139.0
    },
    "c2": {
     "on": true,
     "since": 132.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.85,
     "c2": 0.75,
     "c3": 0.85
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. Two windows are dissected in the hepatocystic triangle, with liver background visible through the lower window and dissection extending above the artery into the cystic plate. The lower portion of the gallbladder is dissected off the liver bed, exposing the charred cystic plate.",
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
      "confidence": 0.9
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "examples": [
     "Example 15_30275.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 53_51575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 17_46625.jpg: experts said C1 yes (1.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 103_11975.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 15_31275.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 17_41625.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       708,
       513
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       504,
       552,
       974
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       508,
       73,
       700,
       189
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       447,
       297,
       616,
       427
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 143.0,
     "best": 1.0,
     "hits": 126
    },
    "liver": {
     "first": 0.0,
     "last": 143.0,
     "best": 1.0,
     "hits": 126
    },
    "fat": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.95,
     "hits": 125
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.95,
     "hits": 125
    },
    "blood": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 143.0,
     "best": 0.85,
     "hits": 11
    },
    "gi_tract": {
     "first": 11.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 143.0,
     "best": 0.9,
     "hits": 55
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 143.0,
     "best": 0.85,
     "hits": 26
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 143.0,
     "best": 0.95,
     "hits": 66
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 139.0
    },
    "c2": {
     "on": true,
     "since": 132.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.15,
     "c2": 0.2,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) is partially delineated below the window, while a second distinct tubular structure (cystic artery) is not clearly isolated from the surrounding tissue. C2: One full-thickness window is visible showing the liver background, but the upper part of the hepatocystic triangle still contains undissected connective tissue and lacks a second clear window. C3: A cauterized strip along the liver edge is visible, but the lower part of the gallbladder is not yet adequately elevated off the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; only one window is opened and the cystic artery is not yet clearly isolated as a distinct tubular structure.",
    "examples": [
     "Example 113_85975.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.987.",
     "Example 50_13725.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 113_86100.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.987.",
     "Example 15_20775.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 15_31525.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 101_41025.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       625,
       586,
       987
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       263,
       737,
       672
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       496,
       89,
       791,
       330
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       486,
       438,
       635,
       534
      ],
      "confidence": 0.77
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       174,
       527,
       528,
       648
      ],
      "confidence": 0.71
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 144.0,
     "best": 1.0,
     "hits": 127
    },
    "liver": {
     "first": 0.0,
     "last": 144.0,
     "best": 1.0,
     "hits": 127
    },
    "fat": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 126
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 126
    },
    "blood": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 144.0,
     "best": 0.85,
     "hits": 11
    },
    "gi_tract": {
     "first": 11.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 144.0,
     "best": 0.9,
     "hits": 56
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 143.0,
     "best": 0.85,
     "hits": 26
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 67
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 139.0
    },
    "c2": {
     "on": true,
     "since": 132.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.45,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and an upper tissue bundle (likely containing cystic artery) are partially delineated around a central window, though dissection of the upper structure is incomplete. C2: One clear window is visible between the lower and upper structures, while the upper dissection towards the liver bed shows cauterized tissue without a full-thickness window. C3: The lower third of the gallbladder remains attached to the liver bed with only superficial scoring of the peritoneum, so the cystic plate is not sufficiently exposed.",
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
      "confidence": 0.55
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
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, preventing definitive confirmation of the Critical View of Safety.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.989.",
     "Example 56_18950.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 42_46650.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.33). Similarity 0.988.",
     "Example 52_25550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 70_18100.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       296,
       757,
       701
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       642,
       629,
       990
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       517,
       98,
       814,
       357
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       207,
       551,
       557,
       662
      ],
      "confidence": 0.75
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       510,
       452,
       657,
       550
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 145.0,
     "best": 1.0,
     "hits": 128
    },
    "liver": {
     "first": 0.0,
     "last": 145.0,
     "best": 1.0,
     "hits": 128
    },
    "fat": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.95,
     "hits": 127
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.95,
     "hits": 127
    },
    "blood": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 144.0,
     "best": 0.85,
     "hits": 11
    },
    "gi_tract": {
     "first": 11.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 145.0,
     "best": 0.9,
     "hits": 57
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 26
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 145.0,
     "best": 0.95,
     "hits": 68
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 139.0
    },
    "c2": {
     "on": true,
     "since": 132.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.2
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and an upper structure being grasped by the dissector are visible, though the upper structure and cystic plate are not fully skeletonized to clearly confirm two distinct tubular structures. C2: A window is visible between the lower tubular structure and the tissue above it, with background liver visible through the gap, but the upper window between the artery and cystic plate is not yet dissected. C3: The gallbladder remains largely attached to the liver bed above the dissector, with only a small cauterized peritoneal scoring visible rather than a separated lower third exposing the cystic plate.",
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
      "confidence": 0.55
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle dissection is incomplete; only one window is opened and the lower gallbladder is not separated from the cystic plate.",
    "examples": [
     "Example 104_38225.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.986.",
     "Example 117_19875.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.986.",
     "Example 76_55725.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 56_17950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 50_10350.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       319,
       737,
       742
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       690,
       631,
       986
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       513,
       104,
       816,
       382
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       426,
       536,
       991,
       960
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 146.0,
     "best": 1.0,
     "hits": 129
    },
    "liver": {
     "first": 0.0,
     "last": 146.0,
     "best": 1.0,
     "hits": 129
    },
    "fat": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 128
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 128
    },
    "blood": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 144.0,
     "best": 0.85,
     "hits": 11
    },
    "gi_tract": {
     "first": 11.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 146.0,
     "best": 0.9,
     "hits": 58
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 146.0,
     "best": 0.85,
     "hits": 26
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 69
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
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
   "t": 147.0,
   "label": {
    "cvs": {
     "c1": 0.75,
     "c2": 0.65,
     "c3": 0.45
    },
    "cvs_evidence": "C1: The cystic duct is clearly visible inferiorly and the cystic artery is being grasped by the clip applier, showing two tubular structures entering the gallbladder. C2: A full-thickness window is visible between the cystic duct and cystic artery where the liver background can be seen, and the clip applier is positioned in the upper aspect of the triangle. C3: The lower gallbladder is only partially dissected off the cystic plate, with only a small cauterized area visible superior to the artery.",
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
      "confidence": 0.85
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
      "confidence": 0.8
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "examples": [
     "Example 104_38225.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 76_55725.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 117_22125.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (1.00). Similarity 0.987.",
     "Example 59_40450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 63_61875.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 76_49600.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       713,
       620,
       988
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       331,
       738,
       764
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       514,
       105,
       831,
       399
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       457,
       577,
       979,
       951
      ],
      "label": "clipper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       204,
       590,
       484,
       701
      ],
      "label": "cystic_plate",
      "confidence": 0.8
     },
     {
      "box_2d": [
       518,
       503,
       646,
       584
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
     "last": 147.0,
     "best": 1.0,
     "hits": 130
    },
    "liver": {
     "first": 0.0,
     "last": 147.0,
     "best": 1.0,
     "hits": 130
    },
    "fat": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 129
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 128
    },
    "blood": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 147.0,
     "best": 0.85,
     "hits": 11
    },
    "gi_tract": {
     "first": 11.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 147.0,
     "best": 0.9,
     "hits": 59
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 147.0,
     "best": 0.85,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 70
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.2,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) is clearly outlined, while the superior area is still being dissected with a bipolar grasper and a second tubular structure is not yet isolated. C2: A small window is forming above the lower structure, but the upper part of the hepatocystic triangle remains uncleared and occluded by the dissecting instrument. C3: The gallbladder remains largely attached to the liver bed with only minimal initial scoring of the peritoneum along the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, and the dissecting instrument partially occludes the upper triangle.",
    "examples": [
     "Example 112_23225.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 no (0.33). Similarity 0.984.",
     "Example 63_61875.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 76_55725.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.985.",
     "Example 59_40450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 70_18475.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 92_108175.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       642,
       647,
       992
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       336,
       703,
       747
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       211,
       590,
       519,
       710
      ],
      "label": "cystic_plate",
      "confidence": 0.75
     },
     {
      "box_2d": [
       504,
       101,
       822,
       403
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       473,
       564,
       994,
       938
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
     "last": 148.0,
     "best": 1.0,
     "hits": 131
    },
    "liver": {
     "first": 0.0,
     "last": 148.0,
     "best": 1.0,
     "hits": 131
    },
    "fat": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 130
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 129
    },
    "blood": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 147.0,
     "best": 0.85,
     "hits": 11
    },
    "gi_tract": {
     "first": 11.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 36
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 148.0,
     "best": 0.9,
     "hits": 60
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 147.0,
     "best": 0.85,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 70
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
    },
    "cvs": {
     "on": false,
     "since": null
    }
   },
   "events": []
  },
  {
   "t": 149.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (cystic duct) is clearly visible; the second structure is obscured by the dissector and undissected tissue. C2: The hepatocystic triangle is still being dissected with a grasper inside the tissue, so full-thickness windows are not clearly established. C3: Only a small portion of the peritoneal attachment is scored, and the lower gallbladder is not separated from the cystic plate.",
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
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; only one tubular structure is visible and the cystic plate is not exposed.",
    "examples": [
     "Example 76_58725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.984.",
     "Example 76_55725.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 76_56225.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.984.",
     "Example 59_40450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.985.",
     "Example 63_61875.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.985.",
     "Example 65_15675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.984."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       357,
       654,
       736
      ],
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       682,
       570,
       975
      ],
      "label": "liver"
     },
     {
      "box_2d": [
       474,
       103,
       816,
       413
      ],
      "label": "grasper"
     },
     {
      "box_2d": [
       453,
       545,
       992,
       946
      ],
      "label": "irrigator"
     },
     {
      "box_2d": [
       555,
       427,
       998,
       781
      ],
      "label": "cystic_duct"
     },
     {
      "box_2d": [
       199,
       566,
       506,
       707
      ],
      "label": "cystic_plate"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 149.0,
     "best": 1.0,
     "hits": 132
    },
    "liver": {
     "first": 0.0,
     "last": 149.0,
     "best": 1.0,
     "hits": 132
    },
    "fat": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 131
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 130
    },
    "blood": {
     "first": 1.0,
     "last": 138.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 147.0,
     "best": 0.85,
     "hits": 11
    },
    "gi_tract": {
     "first": 11.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 149.0,
     "best": 0.9,
     "hits": 61
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 147.0,
     "best": 0.85,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 70
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.25,
     "c2": 0.15,
     "c3": 0.15
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) is visible, while the right-hand grasper is dissecting a second structure above it that is still obscured by tissue and the instrument. C2: There is a small gap between the lower structure and the tissue held by the right grasper, but the hepatocystic triangle is not yet fully cleared into clear full-thickness windows. C3: The gallbladder remains largely attached to the liver bed with only a small area of initial cautery dissection visible on the cystic plate.",
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, and the right-hand instrument partially obscures the upper part of the triangle.",
    "examples": [
     "Example 76_58725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 60_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 76_55725.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 99_30175.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 55_37700.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       704,
       581,
       984
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       338,
       655,
       729
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       473,
       98,
       808,
       401
      ],
      "confidence": 0.99
     },
     {
      "label": "irrigator",
      "box_2d": [
       428,
       526,
       998,
       950
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 150.0,
     "best": 1.0,
     "hits": 133
    },
    "liver": {
     "first": 0.0,
     "last": 150.0,
     "best": 1.0,
     "hits": 133
    },
    "fat": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 132
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 131
    },
    "blood": {
     "first": 1.0,
     "last": 150.0,
     "best": 0.85,
     "hits": 20
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 147.0,
     "best": 0.85,
     "hits": 11
    },
    "gi_tract": {
     "first": 11.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 150.0,
     "best": 0.9,
     "hits": 62
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 147.0,
     "best": 0.85,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 70
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely the cystic duct) is partially visible, while the cystic artery is not yet dissected out as a distinct tubular structure. C2: There is only one small window beginning to open above the duct, and the rest of the hepatocystic triangle remains filled with undissected tissue. C3: The gallbladder remains completely attached to the liver bed with only a small superficial incision in the peritoneum, so the cystic plate is not exposed.",
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
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still at an early stage; the cystic artery and cystic plate are not yet isolated or exposed.",
    "examples": [
     "Example 104_38225.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.986.",
     "Example 70_19225.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.987.",
     "Example 76_58975.jpg: experts said C1 yes (1.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.985.",
     "Example 59_40450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 99_26550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.985.",
     "Example 65_15675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       360,
       748,
       752
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       714,
       637,
       1000
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       490,
       104,
       844,
       420
      ],
      "confidence": 0.95
     },
     {
      "label": "scissors",
      "box_2d": [
       493,
       636,
       907,
       964
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       211,
       582,
       544,
       714
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       489,
       514,
       650,
       617
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 151.0,
     "best": 1.0,
     "hits": 134
    },
    "liver": {
     "first": 0.0,
     "last": 151.0,
     "best": 1.0,
     "hits": 134
    },
    "fat": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 133
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 132
    },
    "blood": {
     "first": 1.0,
     "last": 150.0,
     "best": 0.85,
     "hits": 20
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 147.0,
     "best": 0.85,
     "hits": 11
    },
    "gi_tract": {
     "first": 11.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 151.0,
     "best": 0.9,
     "hits": 63
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 147.0,
     "best": 0.85,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 71
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.45,
     "c2": 0.25,
     "c3": 0.4
    },
    "cvs_evidence": "C1: The cystic duct is clearly visible inferiorly, and the cystic artery is partially visible superiorly where the bipolar grasper is working, though the second structure is not fully skeletonized as a clear distinct tube. C2: There is a small window between the cystic duct and the superior tissue, but the upper window between the artery and cystic plate is still being dissected and obscured by connective tissue and the instrument. C3: The inferior margin of the gallbladder is partially lifted off the liver bed, but the dissection of the cystic plate does not clearly extend far enough posteriorly to show a fully hanging gallbladder.",
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
      "confidence": 0.65
     },
     {
      "name": "cystic_plate",
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
    "reason_if_not": "The hepatocystic triangle is not completely cleared of connective tissue and the upper window above the cystic artery is not fully established.",
    "examples": [
     "Example 104_38225.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.986.",
     "Example 59_40450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 104_38100.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.985.",
     "Example 15_28275.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.985.",
     "Example 92_108175.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       355,
       752,
       829
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       728,
       628,
       989
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       490,
       102,
       832,
       417
      ],
      "confidence": 0.96
     },
     {
      "label": "scissors",
      "box_2d": [
       441,
       632,
       875,
       974
      ],
      "confidence": 0.86
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       504,
       513,
       637,
       608
      ],
      "confidence": 0.68
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 152.0,
     "best": 1.0,
     "hits": 135
    },
    "liver": {
     "first": 0.0,
     "last": 152.0,
     "best": 1.0,
     "hits": 135
    },
    "fat": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 134
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 133
    },
    "blood": {
     "first": 1.0,
     "last": 150.0,
     "best": 0.85,
     "hits": 20
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 152.0,
     "best": 0.85,
     "hits": 11
    },
    "gi_tract": {
     "first": 11.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 40
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 152.0,
     "best": 0.9,
     "hits": 64
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 152.0,
     "best": 0.85,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 72
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.45,
     "c2": 0.25,
     "c3": 0.35
    },
    "cvs_evidence": "C1: One clear tubular structure (likely cystic duct) is visible at the lower edge, while a second structure above it is only partially dissected and obscured by tissue and the dissector. C2: A window is opening above the lower tubular structure, but the upper part of the hepatocystic triangle is still being dissected and is not yet cleared to a full-thickness view. C3: Dissection along the liver bed has started, but the lower third of the gallbladder is not yet clearly separated to expose the full cystic plate.",
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
      "confidence": 0.5
     },
     {
      "name": "hepatocystic_window",
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
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle and cystic plate are still undergoing active dissection, so the upper tubular structure and full cystic plate are not yet completely exposed.",
    "examples": [
     "Example 17_46750.jpg: experts said C1 yes (1.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 56_17950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 104_38225.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.986.",
     "Example 80_9600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 74_9550.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 60_34825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       492,
       103,
       836,
       417
      ],
      "confidence": 0.98
     },
     {
      "label": "clipper",
      "box_2d": [
       444,
       629,
       878,
       976
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       353,
       762,
       765
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       722,
       624,
       991
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       82,
       575,
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
     "last": 153.0,
     "best": 1.0,
     "hits": 136
    },
    "liver": {
     "first": 0.0,
     "last": 153.0,
     "best": 1.0,
     "hits": 136
    },
    "fat": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.95,
     "hits": 135
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.95,
     "hits": 134
    },
    "blood": {
     "first": 1.0,
     "last": 150.0,
     "best": 0.85,
     "hits": 20
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 152.0,
     "best": 0.85,
     "hits": 11
    },
    "gi_tract": {
     "first": 11.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 40
    },
    "cystic_duct": {
     "first": 12.0,
     "last": 153.0,
     "best": 0.9,
     "hits": 65
    },
    "cystic_artery": {
     "first": 12.0,
     "last": 153.0,
     "best": 0.85,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 33.0,
     "last": 153.0,
     "best": 0.95,
     "hits": 72
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
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
  "C1": 0.8,
  "C1_caught": [
   4,
   6
  ],
  "C2": 0.88,
  "C2_caught": [
   4,
   6
  ],
  "C3": 0.96,
  "C3_caught": [
   1,
   2
  ]
 },
 "rules": {
  "confirm_conf": 0.7,
  "confirm_frames": 2
 }
};
