window.TIMELINE = {
 "video": "videos/endo199.mp4",
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) have been skeletonized or isolated yet. C2: The hepatocystic triangle is still covered in connective tissue and fat with no full-thickness windows visible. C3: The peritoneum over the gallbladder-liver junction is just being scored, and the lower gallbladder is not yet lifted off the cystic plate.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in a very early stage; only superficial peritoneum and connective tissue are divided, and no ductal or vascular structures are exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       128,
       126,
       997,
       755
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       324,
       987,
       912
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       250,
       694,
       424,
       918
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.99,
     "hits": 1
    },
    "gallbladder": {
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
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder. C2: The hepatocystic triangle is just beginning to be opened with electrocautery and Remains filled with connective tissue, with no full-thickness windows present. C3: Only the very superficial peritoneum is being incised, and the lower gallbladder is not yet separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the cystic duct, cystic artery, and cystic plate are still covered by peritoneum and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       118,
       1000,
       775
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       327,
       327,
       881
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       215,
       663,
       384,
       914
      ],
      "confidence": 0.95
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
     "best": 0.98,
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or cystic artery) are dissected out or visible entering the gallbladder. C2: The hepatocystic triangle is still covered with peritoneum, fat, and connective tissue, with only initial scoring visible and no windows created. C3: The lower portion of the gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still concealed under peritoneum and fibrofatty tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       151,
       119,
       1000,
       755
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       319,
       302,
       876
      ],
      "confidence": 0.94
     },
     {
      "label": "irrigator",
      "box_2d": [
       201,
       590,
       427,
       917
      ],
      "confidence": 0.95
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
     "best": 0.98,
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
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected out yet; the tissue in the hepatocystic area is still continuous. C2: There are no full-thickness windows dissected through the hepatocystic triangle, only initial superficial scoring of the peritoneum and fat. C3: The gallbladder remains largely attached to the liver bed with only minimal initial scoring along the peritoneum, so the cystic plate is not fully exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage, and the cystic duct and artery are not yet exposed or isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       172,
       118,
       998,
       786
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       321,
       357,
       888
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       232,
       734,
       400,
       920
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
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
    "fat": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.9,
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
   "t": 4.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the very initial peritoneal incision is made, and no distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder. C2: The hepatocystic triangle is still completely filled with fat and connective tissue with no windows dissected through it. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; only a small peritoneal opening is visible, and the cystic duct, cystic artery, and cystic plate are not yet exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       182,
       128,
       995,
       768
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       317,
       347,
       915
      ],
      "confidence": 0.93
     },
     {
      "label": "irrigator",
      "box_2d": [
       536,
       712,
       668,
       922
      ],
      "confidence": 0.88
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
    "fat": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.9,
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
   "t": 5.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are skeletonized or visible entering the gallbladder; dissection is just starting. C2: The hepatocystic triangle is filled with fat and connective tissue with no full-thickness windows created. C3: Only a very small initial cautery incision has been made at the peritoneal attachment; the inferior margin of the gallbladder remains attached to the liver bed.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in a very early stage; the cystic duct, cystic artery, and cystic plate have not yet been dissected out from the surrounding fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       323,
       343,
       902
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       120,
       1000,
       785
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       272,
       738,
       413,
       921
      ],
      "label": "hook",
      "confidence": 0.88
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
    "fat": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 6
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No tubular structures (cystic duct or cystic artery) are isolated or clearly visible entering the gallbladder; dissection has just begun through the peritoneum. C2: The hepatocystic triangle is still covered with fat and connective tissue with no full-thickness windows created. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate along its inferior margin.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; only superficial peritoneum and fat have been opened, and no tubular structures or the cystic plate are isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       120,
       1000,
       773
      ],
      "confidence": 0.99
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       344,
       922,
       924
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       381,
       762,
       508,
       926
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
    "fat": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 7
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
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder yet. C2: The hepatocystic triangle is still covered in fat and connective tissue with only a small initial peritoneal incision, and no full-thickness windows are present. C3: The lower gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still concealed by peritoneum and fatty tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       357,
       335,
       906
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       121,
       1000,
       785
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       263,
       664,
       431,
       919
      ],
      "label": "hook",
      "confidence": 0.97
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
    "fat": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.9,
     "hits": 8
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
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible entering the gallbladder; dissection has just begun. C2: The hepatocystic triangle is still covered by peritoneum and fatty tissue with no windows created. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate along its inferior margin.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; biliary and vascular structures are still obscured by fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       182,
       137,
       999,
       763
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       341,
       338,
       874
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       243,
       629,
       455,
       920
      ],
      "confidence": 0.95
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
    "fat": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.9,
     "hits": 9
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
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
   "t": 9.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures are visible entering the gallbladder; only the initial peritoneal incision and fat/connective tissue are seen. C2: The hepatocystic triangle is filled with fat and connective tissue with no full-thickness windows cleared. C3: The lower gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.92
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
     }
    ],
    "instruments": [
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; cystic duct, cystic artery, and cystic plate are still completely covered by fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       326,
       353,
       891
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       215,
       126,
       995,
       760
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       237,
       617,
       458,
       925
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
    "fat": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.92,
     "hits": 10
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
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
   "t": 10.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder yet. C2: The hepatocystic triangle is still filled with fat and connective tissue, with only initial superficial dissection visible and no full-thickness windows. C3: Only a small portion of the peritoneal reflection is incised, and the lower gallbladder is not separated from the cystic plate.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in an early stage; tubular structures (cystic duct and artery) are still obscured by fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       211,
       143,
       1000,
       815
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       343,
       335,
       871
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       141,
       680,
       356,
       913
      ],
      "confidence": 0.9
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
    "fat": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.92,
     "hits": 11
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder. C2: The hepatocystic triangle is filled with connective tissue and fat, with only initial superficial cautery dissection and no full-thickness windows. C3: The gallbladder remains largely attached to the liver bed with only minimal initial scoring of the peritoneal reflection.",
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
    "reason_if_not": "Dissection is in a very early stage; neither the cystic duct nor the cystic artery has been isolated from the surrounding tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       136,
       120,
       1000,
       804
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       358,
       307,
       895
      ],
      "confidence": 0.91
     },
     {
      "label": "hook",
      "box_2d": [
       306,
       752,
       444,
       925
      ],
      "confidence": 0.93
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
     "best": 0.98,
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
     "best": 0.92,
     "hits": 12
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
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
   "t": 12.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are defined yet as dissection of the hepatocystic triangle has just begun. C2: The hepatocystic triangle is still covered with fat and connective tissue with only superficial cautery scoring, and no full-thickness windows are present. C3: The inferior margin of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Early stage of dissection; cystic duct, cystic artery, and cystic plate are still embedded in fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       207,
       122,
       1000,
       785
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       347,
       399,
       900
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       556,
       804,
       646,
       924
      ],
      "confidence": 0.77
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
     "best": 0.98,
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
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
   "t": 13.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are still embedded in fat and connective tissue and are not distinctly isolated as two tubular structures entering the gallbladder. C2: The hepatocystic triangle is filled with adipose and connective tissue with no full-thickness windows created yet. C3: The inferior margin of the gallbladder remains attached to the liver bed, and the cystic plate is not sufficiently exposed.",
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
    "reason_if_not": "The hepatocystic triangle is still covered in fat and connective tissue, preventing clear identification of the cystic duct and artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       976,
       610
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       571,
       667,
       917
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       662,
       727,
       833,
       905
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.99,
     "hits": 14
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 10.0,
     "best": 0.4,
     "hits": 0
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 13.0,
     "best": 0.5,
     "hits": 0
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 13.0,
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
   "t": 14.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and an upper strand (likely cystic artery) are partially dissected, though the upper one is not fully tubularized or clear. C2: A window is open between the lower and upper structures, but the area between the upper structure and the liver bed is still being dissected by the hook and lacks a clear full-thickness window. C3: The lower gallbladder remains mostly attached to the liver bed with minimal cystic plate exposure.",
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
      "confidence": 0.65
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress; the upper window and lower gallbladder mobilization are incomplete.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       606,
       573
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       554,
       569,
       926
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       624,
       546,
       877,
       923
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.99,
     "hits": 15
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 10.0,
     "best": 0.4,
     "hits": 0
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 14.0,
     "best": 0.85,
     "hits": 1
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 14.0,
     "best": 0.75,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 14.0,
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
   "t": 15.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.8,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper cystic artery) are dissected and seen running toward the gallbladder. C2: Two clear windows are visible\u2014one between the cystic duct and artery where the hook shaft sits, and a smaller one above the artery toward the liver bed. C3: While there is a window above the artery, the lower third of the gallbladder is not yet mobilized off the cystic plate to create a hanging gallbladder appearance.",
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
      "confidence": 0.88
     },
     {
      "name": "cystic_artery",
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.92
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
      "confidence": 0.55
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
       118,
       626,
       574
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       544,
       549,
       915
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       501,
       294,
       722,
       533
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       664,
       395,
       808,
       534
      ],
      "confidence": 0.65
     },
     {
      "label": "hook",
      "box_2d": [
       771,
       480,
       994,
       878
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.99,
     "hits": 16
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 15.0,
     "best": 0.55,
     "hits": 0
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 15.0,
     "best": 0.88,
     "hits": 2
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 15.0,
     "best": 0.9,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 15.0,
     "best": 0.92,
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
   "t": 16.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.8,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder. C2: The hook instrument is passed through the lower window and a small upper window is visible above the artery, clearing the triangle. C3: The lower gallbladder remains largely attached to the liver bed with minimal cystic plate exposure.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Cystic plate dissection (C3) is incomplete along the inferior margin of the gallbladder.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       990,
       649
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       517,
       611,
       921
      ],
      "confidence": 0.94
     },
     {
      "label": "irrigator",
      "box_2d": [
       680,
       403,
       959,
       894
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.99,
     "hits": 17
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 15.0,
     "best": 0.55,
     "hits": 0
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 16.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 16.0,
     "best": 0.9,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 16.0,
     "best": 0.92,
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
     "c1": 0.15,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only partial exposure of a single potential tubular structure is seen where the hook is dissecting, without two clearly skeletonized tubular structures entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue without clear full-thickness windows showing background liver. C3: The lower part of the gallbladder is still attached to the liver bed and the cystic plate is not exposed.",
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
      "name": "cystic_artery",
      "confidence": 0.45
     },
     {
      "name": "cystic_duct",
      "confidence": 0.35
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still early; fat and connective tissue obscure the cystic duct, cystic artery, and cystic plate.",
    "boxes": [
     {
      "box_2d": [
       0,
       120,
       608,
       583
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       532,
       609,
       920
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       757,
       437,
       999,
       854
      ],
      "label": "hook",
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.99,
     "hits": 18
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 15.0,
     "best": 0.55,
     "hits": 0
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 17.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 17.0,
     "best": 0.9,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 16.0,
     "best": 0.92,
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
     "c1": 0.45,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (likely cystic duct and artery) are partially dissected and appear to lead to the gallbladder, though residual tissue makes them not fully distinct. C2: Small openings are forming between the structures and the liver bed, with the hook probing the space, but full-thickness windows are not yet completely cleared. C3: The lower portion of the gallbladder remains largely attached to the liver bed with only minimal exposure of the cystic plate.",
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
      "confidence": 0.7
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
      "confidence": 0.45
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and lack of clear cystic plate exposure prevent definitive confirmation of the Critical View of Safety.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       117,
       729,
       584
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       532,
       672,
       911
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       784,
       478,
       996,
       837
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
     "hits": 19
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 15.0,
     "best": 0.55,
     "hits": 0
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 18.0,
     "best": 0.92,
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1 is not achieved as two distinct tubular structures entering the gallbladder are not yet isolated. C2 is not achieved because the hepatocystic triangle is still filled with fat and connective tissue without clear full-thickness windows. C3 is not achieved as the lower portion of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and tubular structures are not yet clearly isolated.",
    "boxes": [
     {
      "box_2d": [
       0,
       120,
       659,
       587
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       560,
       678,
       927
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       757,
       442,
       999,
       749
      ],
      "label": "hook",
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.99,
     "hits": 20
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 15.0,
     "best": 0.55,
     "hits": 0
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 18.0,
     "best": 0.92,
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
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is still early and only one partially dissected structure (likely the cystic artery or duct) is being hooked, without two clear tubular structures entering the gallbladder. C2: The hepatocystic triangle still contains significant fat and connective tissue without two full-thickness windows. C3: The lower portion of the gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; fat and connective tissue still obscure the tubular structures and cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       594,
       564
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       542,
       696,
       908
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       709,
       466,
       992,
       879
      ],
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.99,
     "hits": 21
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 15.0,
     "best": 0.55,
     "hits": 0
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 18.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 20.0,
     "best": 0.9,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 18.0,
     "best": 0.92,
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
   "t": 21.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.6,
     "c3": 0.4
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. C2: Windows are partially opened above and below the artery, with the hook visible in the lower window, though some residual strands remain in the upper window. C3: The lower gallbladder is partially lifted off the liver bed, but the dissection along the cystic plate is relatively shallow.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Upper window still contains connective tissue strands and cystic plate separation is limited.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       642,
       584
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       566,
       752,
       915
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.99,
     "hits": 22
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 21.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 21.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 21.0,
     "best": 0.9,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 21.0,
     "best": 0.92,
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
   "t": 22.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A possible cystic artery and cystic duct are partially exposed, but they are not yet clearly skeletonized as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle still contains dense connective tissue and fat without clear full-thickness windows. C3: The lower gallbladder remains attached to the liver bed, and the cystic plate is not fully exposed.",
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
      "name": "cystic_duct",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are not fully isolated and no full-thickness windows are established.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       616,
       597
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       560,
       664,
       887
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       735,
       451,
       1000,
       876
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.99,
     "hits": 23
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 21.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 22.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 22.0,
     "best": 0.9,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 21.0,
     "best": 0.92,
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
   "t": 23.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.4
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) appear partially skeletonized and running toward the gallbladder, though the hook obscures part of the lower structure. C2: Two small windows are being dissected in the hepatocystic triangle, with the hook currently in the lower gap and a small opening above the artery, though connective tissue still partially fills the space. C3: The inferior margin of the gallbladder is partially lifted from the liver bed, exposing some cystic plate, but dissection does not yet clearly span the entire lower third.",
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
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress and windows are not yet fully cleared to unambiguously confirm all three CVS criteria.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       117,
       563,
       572
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       534,
       690,
       874
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       777,
       423,
       996,
       843
      ],
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
     "hits": 24
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 23.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 23.0,
     "best": 0.9,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 23.0,
     "best": 0.92,
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
   "t": 24.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.3
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. C2: Two windows are dissected between the duct and artery and between the artery and liver bed, with the hook working in the lower window. C3: The cystic plate is only minimally exposed above the artery and not mobilized along the entire inferior margin of the gallbladder.",
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
      "confidence": 0.75
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
       118,
       560,
       606
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       571,
       753,
       915
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       719,
       546,
       944,
       888
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       693,
       421,
       779,
       517
      ],
      "confidence": 0.72
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       676,
       248,
       996,
       681
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.99,
     "hits": 25
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 24.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 24.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 24.0,
     "best": 0.9,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 24.0,
     "best": 0.92,
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
   "t": 25.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and upper cystic artery) are clearly dissected and seen entering the gallbladder. C2: Two full-thickness windows are open in the hepatocystic triangle between the duct and artery and between the artery and the cystic plate, with the hook working in the upper window. C3: The lower gallbladder is elevated away from the liver bed, exposing the cystic plate behind the dissected windows.",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       119,
       544,
       622
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       558,
       364,
       835
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       314,
       517,
       544,
       927
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.99,
     "hits": 26
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 1
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 25.0,
     "best": 0.92,
     "hits": 6
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
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
     "since": 23.0
    }
   ]
  },
  {
   "t": 26.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: The cystic duct along the lower margin and the cystic artery superior to it are dissected out and visibly entering the gallbladder, though residual connective tissue still partially invests them. C2: Two small windows are being opened above and below the cystic artery by the hook, with dark background partially visible through the lower gap, but the upper window is not yet clearly full-thickness. C3: The lower gallbladder remains largely attached to the liver bed with only minimal superior separation, so a hanging gallbladder on an exposed cystic plate is not yet achieved.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and separation of the lower gallbladder from the cystic plate are incomplete, preventing full confirmation of the critical view of safety.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       119,
       501,
       622
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       565,
       403,
       916
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       743,
       186,
       998,
       485
      ],
      "confidence": 0.92
     },
     {
      "label": "irrigator",
      "box_2d": [
       399,
       522,
       609,
       928
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       558,
       398,
       637,
       495
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.99,
     "hits": 27
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 1
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 26.0,
     "best": 0.9,
     "hits": 8
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 26.0,
     "best": 0.9,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 26.0,
     "best": 0.92,
     "hits": 7
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.7,
     "c2": 0.25,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular structures (the lower cystic duct and upper cystic artery) can be seen running toward the gallbladder, though dissection around the artery is ongoing. C2: Partial windows are visible above and below the cystic artery, but connective tissue still bridges the deeper aspect of the hepatocystic triangle. C3: The lower third of the gallbladder remains attached to the liver bed with the cystic plate not yet exposed.",
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
      "confidence": 0.65
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not yet fully cleared of connective tissue and the cystic plate is not exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       128,
       560,
       586
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       538,
       416,
       854
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       811,
       230,
       998,
       505
      ],
      "confidence": 0.85
     },
     {
      "label": "irrigator",
      "box_2d": [
       366,
       509,
       584,
       928
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.99,
     "hits": 28
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 1
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 27.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 27.0,
     "best": 0.9,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 27.0,
     "best": 0.92,
     "hits": 7
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two tubular structures (likely cystic duct and artery) are partially dissected and seen running toward the gallbladder, separated by two openings. C2: Two windows are being created by the hook, with the lower window showing liver background, though the upper window is still being dissected and not fully cleared through. C3: The lower gallbladder is not yet sufficiently lifted off the liver bed to expose the cystic plate along the whole inferior margin.",
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
      "name": "fat",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress and incomplete.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       117,
       571,
       606
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       521,
       441,
       853
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       820,
       207,
       1000,
       642
      ],
      "confidence": 0.88
     },
     {
      "label": "irrigator",
      "box_2d": [
       390,
       494,
       616,
       927
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.99,
     "hits": 29
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 1
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 28.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 28.0,
     "best": 0.9,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 28.0,
     "best": 0.92,
     "hits": 8
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c2": 0.1,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen running horizontally into the gallbladder neck. C2: While there is a small window between the duct and artery, the space above the artery is still being dissected by the hook and lacks a full-thickness window. C3: The lower gallbladder is not separated from the liver bed to expose the cystic plate.",
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
      "confidence": 0.7
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is still in progress.",
    "boxes": [
     {
      "box_2d": [
       0,
       120,
       606,
       549
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       198,
       496,
       481,
       922
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       530,
       344,
       729
      ],
      "label": "liver",
      "confidence": 0.85
     },
     {
      "box_2d": [
       811,
       214,
       1000,
       688
      ],
      "label": "liver",
      "confidence": 0.75
     },
     {
      "box_2d": [
       621,
       359,
       716,
       477
      ],
      "label": "hepatocystic_window",
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.99,
     "hits": 30
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 1
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 29.0,
     "best": 0.9,
     "hits": 11
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 29.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 29.0,
     "best": 0.92,
     "hits": 9
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below and cystic artery above) are visible running toward the gallbladder neck, though fat still surrounds them. C2: A full-thickness window is seen between the lower structure and the upper structure, and the hook is dissecting the space above the upper structure, making the second window nearly complete. C3: The hook is actively separating the gallbladder from the liver bed superiorly, so the cystic plate is only partially exposed and not yet cleared along the entire lower third.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress and not fully cleared of fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       560,
       546
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       519,
       433,
       801
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       469,
       606,
       994,
       917
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       217,
       532,
       486,
       915
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.99,
     "hits": 31
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 30.0,
     "best": 0.85,
     "hits": 1
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 12
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 30.0,
     "best": 0.92,
     "hits": 10
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: The cystic duct is visible below and a second structure (cystic artery) is being skeletonized above by the hook. C2: A full-thickness window is visible between the lower structure and the upper tissue, while a second window is actively being created by the hook near the liver bed. C3: Thehook is currently dissecting the upper edge of the triangle off the liver bed, so the cystic plate is only partially exposed.",
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
      "confidence": 0.95
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The upper window and cystic plate dissection are still being completed by the electrocautery hook.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       258,
       480,
       512,
       924
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       608,
       561
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       529,
       359,
       887
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       819,
       213,
       1000,
       678
      ],
      "confidence": 0.76
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       631,
       359,
       713,
       463
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.99,
     "hits": 32
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 1
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 31.0,
     "best": 0.9,
     "hits": 13
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 31.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 31.0,
     "best": 0.92,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct) is partially visible at the bottom, while the upper region is still covered in fat and connective tissue being dissected by the hook. C2: There is a small window below the dissected tissue, but no clear full-thickness windows between two distinct tubular structures and the cystic plate. C3: The hook is actively dissecting the peritoneum near the liver bed, and the lower third of the gallbladder is not yet mobilized to expose the cystic plate.",
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
      "confidence": 0.65
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and individual tubular structures are not yet fully isolated.",
    "boxes": [
     {
      "box_2d": [
       162,
       511,
       446,
       922
      ],
      "confidence": 0.98,
      "label": "hook"
     },
     {
      "box_2d": [
       0,
       121,
       439,
       551
      ],
      "confidence": 0.92,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       0,
       538,
       575,
       913
      ],
      "confidence": 0.88,
      "label": "liver"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.99,
     "hits": 33
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 1
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 13
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 31.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 32.0,
     "best": 0.92,
     "hits": 11
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.85,
     "c2": 0.6,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are visible running toward the gallbladder. C2: A clear window is dissected between the cystic duct and cystic artery, and the hook is dissecting the space above the artery, creating a partial upper window. C3: The lower part of the gallbladder is not yet sufficiently separated from the liver bed to clearly expose the cystic plate along the inferior margin.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Cystic plate dissection (C3) and upper hepatocystic window clearance (C2) are still in progress.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       582,
       555
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       520,
       421,
       845
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       313,
       499,
       557,
       926
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       643,
       353,
       718,
       448
      ],
      "confidence": 0.65
     },
     {
      "label": "liver",
      "box_2d": [
       817,
       211,
       1000,
       679
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.99,
     "hits": 34
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 1
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 33.0,
     "best": 0.9,
     "hits": 14
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 33.0,
     "best": 0.9,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 33.0,
     "best": 0.92,
     "hits": 12
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c2": 0.2,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below and cystic artery above) are emerging within the dissected area, though connective tissue still partially obscures their full circumference and entry into the gallbladder. C2: A small window is open between the lower and upper tubular structures showing background liver, but the space between the upper structure and the liver bed is still being dissected with the hook and is not yet a full-thickness window. C3: The lower third of the gallbladder remains attached to the liver bed with the hook actively dissecting the peritoneum, so the cystic plate is not yet exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress; the upper window and lower gallbladder attachment are not yet fully cleared.",
    "boxes": [
     {
      "box_2d": [
       0,
       120,
       544,
       540
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       522,
       536,
       917
      ],
      "label": "liver",
      "confidence": 0.93
     },
     {
      "box_2d": [
       74,
       514,
       382,
       909
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       638,
       332,
       726,
       432
      ],
      "label": "hepatocystic_window",
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.99,
     "hits": 35
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 1
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 15
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 34.0,
     "best": 0.92,
     "hits": 13
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.4
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are visible running toward the gallbladder neck. C2: A full-thickness window is seen between the lower structure and the upper structure, while the hook is dissecting the space between the upper structure and the liver bed, though that upper window is not yet completely cleared through. C3: The lower gallbladder is partially mobilized off the liver bed where the hook is dissecting, but the full inferior margin is not yet clearly hanging free.",
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
      "confidence": 0.8
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
       0,
       123,
       506,
       552
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       529,
       350,
       772
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       108,
       522,
       424,
       911
      ],
      "confidence": 0.97
     },
     {
      "label": "liver",
      "box_2d": [
       816,
       206,
       1000,
       477
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       638,
       343,
       722,
       445
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.99,
     "hits": 36
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 35.0,
     "best": 0.85,
     "hits": 1
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 35.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 35.0,
     "best": 0.9,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 35.0,
     "best": 0.92,
     "hits": 14
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.72,
     "c2": 0.45,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder, though connective tissue still bridges them. C2: A full-thickness window is seen between the duct and artery, while the hook is dissecting the space between the artery and the cystic plate, which is still covered by fibrous tissue. C3: The lower part of the gallbladder is partially lifted off the liver bed exposing the cystic plate, though dissection of the posterior attachments is ongoing.",
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
      "name": "cystic_plate",
      "confidence": 0.82
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Fibrous connective tissue remains between the cystic artery and the cystic plate, requiring further clearance to confirm a full-thickness upper window.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       119,
       584,
       558
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       539,
       447,
       915
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       530,
       655,
       996,
       925
      ],
      "confidence": 0.87
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       251,
       458,
       629,
       620
      ],
      "confidence": 0.77
     },
     {
      "label": "hook",
      "box_2d": [
       366,
       608,
       534,
       920
      ],
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.99,
     "hits": 37
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 2
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 36.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 36.0,
     "best": 0.9,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 36.0,
     "best": 0.92,
     "hits": 15
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are clearly dissected and seen entering the gallbladder. C2: A full-thickness window is visible between the duct and artery (with dark liver visible behind), and the hook is dissecting the space between the artery and the cystic plate. C3: The lower third of the gallbladder is dissected off the liver bed, exposing the fibrous cystic plate above the artery.",
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
       118,
       592,
       562
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       532,
       452,
       911
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       824,
       217,
       1000,
       568
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       426,
       500,
       622,
       927
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       191,
       459,
       548,
       608
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.99,
     "hits": 38
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 37.0,
     "best": 0.9,
     "hits": 3
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 37.0,
     "best": 0.92,
     "hits": 20
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 37.0,
     "best": 0.92,
     "hits": 16
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet fully skeletonized and separated near the lower border where the hook is dissecting. C2: While there is a small full-thickness window between the anterior and posterior bands at the bottom and raw cystic plate exposed above, two clean full-thickness windows through the triangle are not clearly demonstrated. C3: A substantial portion of the lower gallbladder has been mobilized off the liver bed, exposing a triangle of yellowish-white cystic plate tissue above the dissection site.",
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
      "name": "cystic_artery",
      "confidence": 0.6
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.55
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still ongoing with the electrocautery hook; the cystic duct and artery are not yet completely isolated with two full-thickness windows.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       119,
       613,
       568
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       553,
       591,
       898
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       673,
       500,
       977,
       915
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       763,
       316,
       995,
       732
      ],
      "confidence": 0.64
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.99,
     "hits": 39
    },
    "gallbladder": {
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
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 38.0,
     "best": 0.9,
     "hits": 4
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 38.0,
     "best": 0.92,
     "hits": 20
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 38.0,
     "best": 0.92,
     "hits": 16
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "since": 36.0
    }
   ]
  },
  {
   "t": 39.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Two main tubular bands (likely cystic duct below and cystic artery above) are seen entering the gallbladder neck. C2: A lower window between the duct and artery is partially opened and the hook is dissecting the upper space toward the cystic plate, though full-thickness clearance is still in progress. C3: The cystic plate is being exposed by the hook at the upper dissection plane, separating the lower gallbladder from the liver bed.",
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
      "confidence": 0.85
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Connective tissue still partially bridges the upper hepatocystic window around the hook tip.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       119,
       563,
       572
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       531,
       631,
       923
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       267,
       517,
       493,
       921
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       151,
       477,
       442,
       608
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.99,
     "hits": 40
    },
    "gallbladder": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.99,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 40
    },
    "fat": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 39.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 39.0,
     "best": 0.92,
     "hits": 21
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 39.0,
     "best": 0.92,
     "hits": 17
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
    "cvs_evidence": "C1: Only one poorly defined structure at the bottom of the hepatocystic triangle is partially exposed, without two clearly defined tubular structures entering the gallbladder. C2: The hepatocystic triangle still contains substantial fat and connective tissue being dissected by the hook, with no full-thickness windows visible. C3: Dissection along the liver bed has begun superiorly, but the lower third of the gallbladder is not yet fully separated to expose the entire cystic plate.",
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
      "confidence": 0.6
     },
     {
      "name": "cystic_duct",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; fat and connective tissue obscure the ductal and arterial structures.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       565,
       570
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       556,
       991,
       924
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       319,
       523,
       540,
       924
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.99,
     "hits": 41
    },
    "gallbladder": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.99,
     "hits": 41
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 41
    },
    "fat": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 5
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 39.0,
     "best": 0.92,
     "hits": 21
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 39.0,
     "best": 0.92,
     "hits": 17
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c2": 0.75,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder. C2: A clear window is visible between the cystic duct and cystic artery, and the electrocautery hook is positioned in the space between the artery and the cystic plate. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the fibrous cystic plate behind the hook.",
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
       118,
       564,
       553
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       526,
       437,
       860
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       183,
       444,
       506,
       582
      ],
      "label": "cystic_plate",
      "confidence": 0.85
     },
     {
      "box_2d": [
       380,
       461,
       626,
       927
      ],
      "label": "hook",
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 42
    },
    "gallbladder": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 42
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 6
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 41.0,
     "best": 0.92,
     "hits": 22
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 41.0,
     "best": 0.92,
     "hits": 18
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c2": 0.9,
     "c3": 0.9
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly seen entering the gallbladder neck. C2: Two full-thickness windows are visible in the hepatocystic triangle with the dark liver background seen through them. C3: The lower third of the gallbladder is dissected off the liver bed, exposing the cystic plate superiorly.",
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
      "name": "fat",
      "confidence": 0.85
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
       122,
       408,
       472
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       532,
       485,
       859
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       744,
       172,
       1000,
       682
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       0,
       438,
       163,
       599
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       80,
       425,
       533,
       619
      ],
      "confidence": 0.82
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       522,
       340,
       659,
       474
      ],
      "confidence": 0.87
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 43
    },
    "gallbladder": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 43
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 43
    },
    "fat": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 43
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 7
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 23
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 19
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.55
    },
    "cvs_evidence": "Two tubular structures (cystic duct below, cystic artery above) are largely isolated and seen entering the gallbladder. A full-thickness window is visible between the duct and artery, while the hook is actively clearing the window above the artery which still contains some connective tissue. The lower gallbladder is partially elevated from the liver bed exposing the cystic plate where the hook is working, though the separation is not yet complete.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The upper window between the cystic artery and cystic plate is still being dissected and contains connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       560,
       554
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       528,
       445,
       902
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       419,
       524,
       627,
       924
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       203,
       448,
       599,
       599
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       647,
       341,
       750,
       484
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 44
    },
    "gallbladder": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 44
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 44
    },
    "fat": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 44
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 8
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 20
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and upper cystic artery) are clearly dissected and seen entering the gallbladder. C2: There is a full-thickness window visible between the cystic duct and cystic artery, and a cleared dissection plane above the artery exposing the cystic plate. C3: The lower portion of the gallbladder is mobilized away from the liver bed, exposing the fibrous cystic plate in the upper dissection space.",
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
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.92
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
       121,
       843,
       460
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       526,
       483,
       887
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       757,
       176,
       1000,
       626
      ],
      "confidence": 0.91
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       535,
       326,
       644,
       440
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       133,
       412,
       532,
       545
      ],
      "confidence": 0.73
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       427,
       154,
       635
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.99,
     "hits": 45
    },
    "gallbladder": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.99,
     "hits": 45
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 45
    },
    "fat": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 45
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 44.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 25
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 21
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. Two full-thickness windows are open in the hepatocystic triangle, with the hook instrument demonstrating the upper window against the cystic plate. The lower portion of the gallbladder is dissected free from the liver bed, clearly exposing the cystic plate behind the upper window.",
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
       120,
       517,
       560
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       532,
       507,
       867
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       206,
       435,
       532,
       606
      ],
      "confidence": 0.9
     },
     {
      "label": "irrigator",
      "box_2d": [
       488,
       462,
       739,
       929
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       650,
       332,
       995,
       746
      ],
      "confidence": 0.65
     },
     {
      "label": "liver",
      "box_2d": [
       834,
       213,
       998,
       574
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.99,
     "hits": 46
    },
    "gallbladder": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.99,
     "hits": 46
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 46
    },
    "fat": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 46
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 45.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 26
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 22
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder neck. C2: There is a clear window between the cystic duct and artery, and a deep recess above the artery, though the upper window still has connective tissue at the base rather than being fully transparent. C3: Only the very apex of the cystic plate is dissected off the liver bed, with the lower gallbladder not yet widely separated into a hanging configuration.",
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
      "name": "cystic_plate",
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
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       426,
       616
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       589,
       577,
       887
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       168,
       693,
       384,
       911
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       116,
       488,
       529,
       624
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       334,
       277,
       634,
       551
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       568,
       365,
       707,
       547
      ],
      "confidence": 0.74
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.99,
     "hits": 47
    },
    "gallbladder": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.99,
     "hits": 47
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 47
    },
    "fat": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 46.0,
     "best": 0.9,
     "hits": 11
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 23
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c2": 0.45,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck, though the hook instrument partially covers the window between them. C2: A window is open at the cystic plate above the artery, and the hook is inserted into the space between the duct and artery, though background visibility through the lower window is partially obscured by the instrument. C3: The lower gallbladder is dissected off the liver bed, clearly exposing the cauterized cystic plate in the upper right of the triangle.",
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
      "confidence": 0.9
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The window between the cystic duct and artery is still being dissected by the hook and is not yet a clear, unimpeded full-thickness window.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       119,
       977,
       779
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       614,
       606,
       900
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       144,
       513,
       584,
       701
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       583,
       471,
       840,
       917
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.99,
     "hits": 48
    },
    "gallbladder": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.99,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 48
    },
    "fat": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 48
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 12
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 24
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper cystic artery) are clearly visible entering the gallbladder. C2: A clear window is dissected between the duct and artery showing the dark background, and the hook is dissecting the upper window between the artery and the cystic plate. C3: The cystic plate is exposed and cauterized superiorly, lifting the lower gallbladder off the liver bed.",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       617,
       548,
       896
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       966,
       840
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       116,
       506,
       542,
       669
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       587,
       431,
       673,
       543
      ],
      "confidence": 0.76
     },
     {
      "label": "irrigator",
      "box_2d": [
       545,
       592,
       804,
       924
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 49
    },
    "gallbladder": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 49
    },
    "fat": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 49
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 48.0,
     "best": 0.9,
     "hits": 13
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 29
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 25
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c2": 0.8,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct inferiorly and cystic artery superiorly) are clearly dissected and seen entering the gallbladder neck. C2: Two windows are dissected between the cystic duct and artery, and between the artery and the cystic plate, with deeper tissue visible through them. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing a broad area of the fibrous cystic plate.",
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
      "confidence": 0.92
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.88
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
       361,
       632,
       590,
       928
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       969,
       642
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       579,
       665,
       881
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       140,
       510,
       538,
       669
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       599,
       417,
       727,
       580
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 50
    },
    "gallbladder": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 50
    },
    "fat": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 50
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 49.0,
     "best": 0.92,
     "hits": 14
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 30
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 26
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper cystic artery) are clearly dissected and seen entering the gallbladder. C2: A window is visible between the cystic duct and cystic artery where the hook is working, and there is dissection above the artery, though the upper window is still being cleared by the hook. C3: The lower portion of the gallbladder is separated from the liver bed, exposing a triangular area of the cystic plate above the cystic artery.",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       917,
       625
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       508,
       597,
       888
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       86,
       511,
       535,
       686
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       620,
       566,
       851,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       560,
       414,
       655,
       521
      ],
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.99,
     "hits": 51
    },
    "gallbladder": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.99,
     "hits": 51
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 51
    },
    "fat": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 51
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 50.0,
     "best": 0.92,
     "hits": 15
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 31
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 27
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": true,
     "since": 48.0
    },
    "c3": {
     "on": true,
     "since": 36.0
    },
    "cvs": {
     "on": true,
     "since": 48.0
    }
   },
   "events": [
    {
     "what": "c2",
     "on": true,
     "since": 48.0
    },
    {
     "what": "cvs",
     "on": true,
     "since": 48.0
    }
   ]
  },
  {
   "t": 51.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder. C2: A full-thickness window is seen between the duct and artery with the hook, while the upper window is still partially filled with connective tissue. C3: The lower gallbladder is clearly separated from the liver bed, exposing a triangular area of the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.92
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.88
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       584,
       550,
       910
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       482,
       610
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       146,
       465,
       582,
       642
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       612,
       369,
       720,
       472
      ],
      "confidence": 0.82
     },
     {
      "label": "hook",
      "box_2d": [
       666,
       446,
       967,
       921
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.99,
     "hits": 52
    },
    "gallbladder": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.99,
     "hits": 52
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 52
    },
    "fat": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 52
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 51.0,
     "best": 0.92,
     "hits": 16
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 32
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 28
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": true,
     "since": 48.0
    },
    "c3": {
     "on": true,
     "since": 36.0
    },
    "cvs": {
     "on": true,
     "since": 48.0
    }
   },
   "events": []
  },
  {
   "t": 52.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.55
    },
    "cvs_evidence": "C1: The cystic duct is clearly visible below and the cystic artery is partially isolated above, though still surrounded by some tissue and the hook. C2: A window is being created with the hook between the duct and artery, and a dissected space is visible above the artery on the liver bed, though the lower window is partially obscured by the instrument. C3: A portion of the cystic plate is exposed in the upper dissection plane, though the lower gallbladder attachment is not fully separated along the entire inferior margin.",
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
    "reason_if_not": "The window between the cystic duct and cystic artery is still being dissected with the hook and is not yet completely cleared.",
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       435,
       461,
       734,
       925
      ],
      "confidence": 0.98
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       84,
       513,
       519,
       689
      ],
      "confidence": 0.88
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       428,
       640
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       609,
       449,
       854
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       761,
       203,
       1000,
       706
      ],
      "confidence": 0.83
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       548,
       423,
       631,
       494
      ],
      "confidence": 0.69
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.99,
     "hits": 53
    },
    "gallbladder": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.99,
     "hits": 53
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 53
    },
    "fat": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 53
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 52.0,
     "best": 0.92,
     "hits": 17
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 33
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 29
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": true,
     "since": 48.0
    },
    "c3": {
     "on": true,
     "since": 36.0
    },
    "cvs": {
     "on": true,
     "since": 48.0
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
     "c3": 0.6
    },
    "cvs_evidence": "Two tubular structures (cystic duct below, cystic artery above) are taking shape and entering the gallbladder neck, though tissue remains attached. A window is being dissected between the duct and artery with the hook, and space is opened above the artery, though full clearance is still in progress. The lower part of the gallbladder is partially lifted off the liver bed exposing the upper cystic plate, though the inferior-most margin is not fully cleared.",
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
      "name": "cystic_plate",
      "confidence": 0.8
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is ongoing and windows are not yet completely cleared to definitively confirm the critical view of safety.",
    "boxes": [
     {
      "box_2d": [
       0,
       119,
       1000,
       642
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       627,
       668,
       874
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       191,
       522,
       639,
       699
      ],
      "label": "cystic_plate",
      "confidence": 0.85
     },
     {
      "box_2d": [
       669,
       438,
       786,
       546
      ],
      "label": "hepatocystic_window",
      "confidence": 0.8
     },
     {
      "box_2d": [
       735,
       534,
       980,
       873
      ],
      "label": "hook",
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.99,
     "hits": 54
    },
    "gallbladder": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.99,
     "hits": 54
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 54
    },
    "fat": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 54
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 53.0,
     "best": 0.92,
     "hits": 18
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 34
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 30
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
    },
    {
     "what": "cvs",
     "on": false,
     "since": null
    }
   ]
  },
  {
   "t": 54.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.45
    },
    "cvs_evidence": "C1: A lower tubular structure (cystic duct) and an upper structure (likely cystic artery) are partially visible, though the electrocautery hook obscures the junction between them. C2: A window is visible above between the upper structure and the liver bed, and the hook is dissecting the space between the two structures, but both full-thickness windows are not yet completely clear and unobstructed. C3: A triangular area of the cystic plate is exposed on the liver bed above the structures, though the view is close-up and partially blocked by the instrument shaft.",
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
      "name": "cystic_plate",
      "confidence": 0.8
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and the hook instrument obscures the central window between the duct and artery.",
    "boxes": [
     {
      "box_2d": [
       0,
       117,
       955,
       689
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       634,
       510,
       868
      ],
      "label": "liver",
      "confidence": 0.9
     },
     {
      "box_2d": [
       108,
       518,
       513,
       708
      ],
      "label": "cystic_plate",
      "confidence": 0.85
     },
     {
      "box_2d": [
       492,
       442,
       829,
       923
      ],
      "label": "hook",
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.99,
     "hits": 55
    },
    "gallbladder": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.99,
     "hits": 55
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 55
    },
    "fat": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 55
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 54.0,
     "best": 0.92,
     "hits": 19
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 35
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 30
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. C2: There is a clear window between the cystic duct and artery showing the liver behind, and the hook is placed in the window above the artery against the cystic plate. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing a triangular area of the cystic plate.",
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
      "confidence": 0.9
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
       122,
       550,
       590
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       569,
       556,
       893
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       203,
       467,
       582,
       638
      ],
      "confidence": 0.85
     },
     {
      "label": "hook",
      "box_2d": [
       546,
       510,
       768,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       663,
       359,
       787,
       529
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.99,
     "hits": 56
    },
    "gallbladder": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.99,
     "hits": 56
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 56
    },
    "fat": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 56
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 55.0,
     "best": 0.92,
     "hits": 20
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 36
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 31
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c2": 0.85,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and upper cystic artery) are clearly dissected and seen entering the gallbladder. C2: There is a full-thickness lower window between the duct and artery showing the dark liver behind, and the upper window above the artery is being held open by the instrument. C3: The gallbladder neck is lifted off the liver bed exposing the cystic plate behind the windows, though the upper shaft partially obscures the upper aspect of the plate.",
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
       117,
       532,
       916
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       763,
       194,
       998,
       718
      ],
      "confidence": 0.94
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       423,
       349,
       866
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       550,
       380,
       678,
       514
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.99,
     "hits": 57
    },
    "gallbladder": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.99,
     "hits": 57
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 57
    },
    "blood": {
     "first": 8.0,
     "last": 8.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 56.0,
     "best": 0.92,
     "hits": 21
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 37
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 32
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c1": 0.12,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only partial, incompletely dissected structures are visible in the triangle rather than two distinct tubular structures entering the gallbladder. C2: Although there is a small opening below the artery-like band and cauterized tissue above it, the hepatocystic triangle is not cleared into two full-thickness windows. C3: A small triangle of the liver bed is exposed superiorly, but the lower third of the gallbladder is not fully separated along its entire inferior margin.",
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
      "confidence": 0.65
     },
     {
      "name": "cystic_artery",
      "confidence": 0.55
     },
     {
      "name": "cystic_duct",
      "confidence": 0.45
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and full-thickness windows isolating the cystic duct and artery are not yet established.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       575,
       582
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       558,
       589,
       858
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       212,
       444,
       635,
       628
      ],
      "confidence": 0.85
     },
     {
      "label": "irrigator",
      "box_2d": [
       586,
       505,
       853,
       914
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
     "hits": 58
    },
    "gallbladder": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.99,
     "hits": 58
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 58
    },
    "fat": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 58
    },
    "blood": {
     "first": 8.0,
     "last": 57.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 57.0,
     "best": 0.92,
     "hits": 21
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 37
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 32
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c1": 0.85,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two clearly dissected tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder. C2: A clear full-thickness window is visible between the cystic duct and cystic artery, and a wide space is opened between the artery and the cystic plate. C3: The lower part of the gallbladder is dissected away from the liver bed, exposing the whitish fibrous tissue of the cystic plate.",
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
      "label": "liver",
      "box_2d": [
       0,
       518,
       525,
       893
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       685,
       180,
       1000,
       680
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       117,
       830,
       396
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       55,
       365,
       520,
       630
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       448,
       323,
       563,
       439
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       260,
       215,
       480,
       460
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       440,
       325,
       995,
       780
      ],
      "confidence": 0.85
     },
     {
      "label": "irrigator",
      "box_2d": [
       0,
       360,
       178,
       588
      ],
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.99,
     "hits": 59
    },
    "gallbladder": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.99,
     "hits": 59
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 59
    },
    "fat": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 59
    },
    "blood": {
     "first": 8.0,
     "last": 57.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 58.0,
     "best": 0.92,
     "hits": 22
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 36
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 38
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 33
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c2": 0.65,
     "c3": 0.6
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are dissected and seen running toward the gallbladder. C2: A full-thickness window is visible between the cystic duct and cystic artery, and a deep space is opened above the artery toward the cystic plate, though the hook partially obscures the upper window. C3: The cystic plate is exposed on the liver bed in the upper dissection area, though the entire inferior gallbladder margin is not completely mobilized off the bed.",
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
      "confidence": 0.9
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
       120,
       537,
       579
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       569,
       558,
       894
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       182,
       456,
       608,
       635
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       643,
       345,
       765,
       510
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       550,
       497,
       769,
       918
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 60
    },
    "gallbladder": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 60
    },
    "fat": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 60
    },
    "blood": {
     "first": 8.0,
     "last": 59.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 59.0,
     "best": 0.92,
     "hits": 23
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 39
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 34
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper cystic artery) are clearly dissected and seen entering the gallbladder. C2: Two clear windows are visible\u2014one between the cystic duct and artery, and another above the artery adjacent to the cystic plate\u2014showing background liver tissue through them. C3: The lower third of the gallbladder is dissected away from the liver bed, exposing the fibrous cystic plate in the upper window.",
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
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       574,
       717
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       128,
       560,
       567,
       755
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       538,
       507,
       676,
       643
      ],
      "confidence": 0.83
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       363,
       442,
       571,
       637
      ],
      "confidence": 0.72
     },
     {
      "label": "grasper",
      "box_2d": [
       531,
       119,
       616,
       169
      ],
      "confidence": 0.75
     },
     {
      "label": "liver",
      "box_2d": [
       735,
       149,
       999,
       758
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.99,
     "hits": 61
    },
    "gallbladder": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.99,
     "hits": 61
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 61
    },
    "fat": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 61
    },
    "blood": {
     "first": 8.0,
     "last": 59.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 60.0,
     "best": 0.92,
     "hits": 24
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 40
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 35
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": true,
     "since": 58.0
    },
    "c3": {
     "on": true,
     "since": 36.0
    },
    "cvs": {
     "on": true,
     "since": 58.0
    }
   },
   "events": [
    {
     "what": "c2",
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
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper cystic artery) are clearly dissected and seen entering the gallbladder neck. C2: Two full-thickness windows are opened in the hepatocystic triangle, one between the cystic duct and cystic artery, and an upper window between the cystic artery and the cystic plate, with liver background visible through them. C3: The lower third of the gallbladder is dissected off the liver bed, exposing the fibrous cystic plate in the upper window.",
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
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       534,
       615
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       607,
       546,
       916
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       713,
       267,
       1000,
       695
      ],
      "confidence": 0.9
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       140,
       509,
       517,
       649
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       534,
       448,
       625,
       523
      ],
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.99,
     "hits": 62
    },
    "gallbladder": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.99,
     "hits": 62
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 62
    },
    "fat": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 62
    },
    "blood": {
     "first": 8.0,
     "last": 59.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 61.0,
     "best": 0.92,
     "hits": 25
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 41
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 36
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": true,
     "since": 58.0
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c1": 0.85,
     "c2": 0.65,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder neck. C2: There is a clear window between the cystic duct and artery, and dissection between the artery and liver bed shows the cystic plate, though some connective tissue strands remain. C3: A triangular area of the cystic plate is exposed superiorly, but the dissection does not clearly extend far enough up the liver bed to create a classic 'hanging' lower gallbladder.",
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
      "confidence": 0.95
     },
     {
      "name": "fat",
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
       529,
       611,
       889
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       119,
       439,
       563
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       243,
       446,
       541,
       554
      ],
      "label": "cystic_plate",
      "confidence": 0.88
     },
     {
      "box_2d": [
       535,
       381,
       650,
       464
      ],
      "label": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "box_2d": [
       687,
       147,
       997,
       547
      ],
      "label": "liver",
      "confidence": 0.89
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 63
    },
    "gallbladder": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 63
    },
    "fat": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 63
    },
    "blood": {
     "first": 8.0,
     "last": 59.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 62.0,
     "best": 0.92,
     "hits": 26
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 40
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 42
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 37
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": true,
     "since": 58.0
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c2": 0.75,
     "c3": 0.8
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper cystic artery) are clearly dissected and seen entering the gallbladder neck. C2: A clear full-thickness window is visible between the duct and artery where background liver shows through, and a second window above the artery is largely cleared though some thin connective strands remain. C3: The lower part of the gallbladder is dissected away from the liver bed in the upper window, exposing the fibrous cystic plate.",
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
      "confidence": 0.92
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       121,
       662,
       553
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       517,
       564,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       638,
       150,
       1000,
       532
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       211,
       439,
       533,
       546
      ],
      "confidence": 0.75
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       483,
       362,
       597,
       442
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.99,
     "hits": 64
    },
    "gallbladder": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.99,
     "hits": 64
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 64
    },
    "fat": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 64
    },
    "blood": {
     "first": 8.0,
     "last": 59.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 63.0,
     "best": 0.92,
     "hits": 27
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 41
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 43
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 38
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": true,
     "since": 58.0
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c2": 0.25,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two adjacent tubular structures (cystic duct and cystic artery) are visible running together toward the lower gallbladder, though they are still closely bound by connective tissue. C2: The hepatocystic triangle is not fully cleared, as no full-thickness window is clearly open between the two structures or behind the artery. C3: The lower portion of the gallbladder is partially lifted off the liver bed, but the cystic plate is not fully exposed along the entire inferior margin.",
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
      "confidence": 0.5
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle lacks full-thickness windows separating the cystic duct, cystic artery, and cystic plate.",
    "boxes": [
     {
      "box_2d": [
       0,
       209,
       164,
       411
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       47,
       203,
       542,
       572
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       486,
       517,
       998,
       715
      ],
      "label": "cystic_duct",
      "confidence": 0.85
     },
     {
      "box_2d": [
       0,
       119,
       1000,
       923
      ],
      "label": "liver",
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 65
    },
    "gallbladder": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 65
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 65
    },
    "fat": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 65
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 64.0,
     "best": 0.92,
     "hits": 27
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 42
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 44
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 38
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": true,
     "since": 58.0
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are clearly dissected and seen entering the gallbladder yet. C2: There is only a shallow peritoneal incision with underlying fat and connective tissue; no full-thickness hepatocystic windows are present. C3: The lower portion of the gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.9
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; ductal and arterial structures are still encased in fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       347,
       439,
       903
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       117,
       1000,
       683
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       339,
       513,
       493,
       680
      ],
      "label": "cystic_plate",
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.99,
     "hits": 66
    },
    "gallbladder": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.99,
     "hits": 66
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 66
    },
    "fat": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 66
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 64.0,
     "best": 0.92,
     "hits": 27
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 42
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 44
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 38
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": true,
     "since": 58.0
    },
    "c3": {
     "on": true,
     "since": 36.0
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a small initial incision in the peritoneum is visible, with neither the cystic duct nor the cystic artery dissected out as distinct tubular structures. C2: The hepatocystic triangle remains completely filled with fat and connective tissue with no full-thickness windows created. C3: The gallbladder remains fully attached to the liver bed with only a small patch of subserosal tissue exposed.",
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
     }
    ],
    "instruments": [
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection has just begun; only a small peritoneal scoring is visible and critical biliary/vascular structures are still encased in fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       144,
       126,
       998,
       710
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       362,
       381,
       903
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       339,
       559,
       475,
       706
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.99,
     "hits": 67
    },
    "gallbladder": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.99,
     "hits": 67
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 67
    },
    "fat": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 67
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 64.0,
     "best": 0.92,
     "hits": 27
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 42
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 44
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 38
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 23.0
    },
    "c2": {
     "on": false,
     "since": null
    },
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
   "t": 67.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1 is not achieved because only a single undivided band of tissue/cystic duct is visible without two clearly separated tubular structures. C2 is not achieved because the hepatocystic triangle is still filled with connective tissue and no full-thickness windows are dissected. C3 is not achieved because the lower gallbladder remains largely attached to the liver bed with only superficial dissection of the cystic plate.",
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
      "confidence": 0.85
     },
     {
      "name": "cystic_plate",
      "confidence": 0.6
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not adequately dissected to separate the cystic duct and artery or expose full-thickness windows.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       116,
       1000,
       920
      ],
      "confidence": 0.99
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       359,
       477,
       646
      ],
      "confidence": 0.96
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       426,
       576,
       1000,
       767
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       412,
       467,
       808,
       676
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 68
    },
    "gallbladder": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 68
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 68
    },
    "fat": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 68
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 67.0,
     "best": 0.92,
     "hits": 27
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 43
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 44
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 38
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
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
   "t": 68.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are clearly visible entering the gallbladder. C2: Two full-thickness windows are dissected between the duct and artery and between the artery and the cystic plate, showing the liver background through them. C3: The lower portion of the gallbladder is dissected off the liver bed, exposing the cystic plate behind the upper window.",
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
      "name": "hepatocystic_window",
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.88
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
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       121,
       545,
       552
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       528,
       568,
       888
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       248,
       442,
       608,
       552
      ],
      "label": "cystic_plate",
      "confidence": 0.85
     },
     {
      "box_2d": [
       545,
       373,
       672,
       469
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     },
     {
      "box_2d": [
       574,
       457,
       998,
       665
      ],
      "label": "cystic_duct",
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.99,
     "hits": 69
    },
    "gallbladder": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.99,
     "hits": 69
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 69
    },
    "fat": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 69
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 68.0,
     "best": 0.92,
     "hits": 28
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 44
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 45
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 39
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two tubular structures (likely cystic duct and artery) are partially dissected and seen running toward the gallbladder, though residual tissue makes the upper structure somewhat indistinct. C2: A full-thickness window is visible between the lower and upper tubular structures, while the upper window toward the cystic plate still contains residual connective tissue strands. C3: A portion of the cystic plate is exposed near the liver bed, but separation of the lower third of the gallbladder is not yet extensive.",
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
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The upper window between the putative cystic artery and the cystic plate is not fully cleared of connective tissue, and the lower gallbladder is not sufficiently separated from the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       545,
       606,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       757,
       180,
       999,
       562
      ],
      "confidence": 0.85
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       119,
       592,
       563
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       569,
       407,
       720,
       508
      ],
      "confidence": 0.78
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       267,
       477,
       568,
       563
      ],
      "confidence": 0.72
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       638,
       419,
       999,
       680
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 70
    },
    "gallbladder": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 70
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 70
    },
    "fat": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 70
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 69.0,
     "best": 0.92,
     "hits": 29
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 45
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 46
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 40
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and upper cystic artery) are visible extending toward the gallbladder neck. C2: A clear full-thickness window is seen between the cystic duct and cystic artery, and a upper space above the artery is partially cleared of connective tissue. C3: The cystic plate is partially exposed in the upper dissection space, though some connective tissue still tethers the lower gallbladder margin to the liver bed.",
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
      "confidence": 0.9
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
       118,
       616,
       590
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       569,
       610,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       267,
       505,
       638,
       642
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       566,
       457,
       717,
       548
      ],
      "confidence": 0.82
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       647,
       497,
       1000,
       726
      ],
      "confidence": 0.72
     },
     {
      "label": "grasper",
      "box_2d": [
       566,
       120,
       677,
       215
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 70.0,
     "best": 1.0,
     "hits": 71
    },
    "gallbladder": {
     "first": 0.0,
     "last": 70.0,
     "best": 1.0,
     "hits": 71
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 71
    },
    "fat": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 71
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 70.0,
     "best": 0.92,
     "hits": 30
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 46
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 47
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 41
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": false,
     "since": null
    },
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
     "since": 68.0
    }
   ]
  },
  {
   "t": 71.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.78,
     "c3": 0.42
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are seen running into the gallbladder neck. Two dissected windows are visible between the duct, artery, and cystic plate area, though the upper window still has some cauterized tissue in the background. The lower gallbladder is partially mobilized off the liver bed, but the separation along the inferior margin does not yet clearly expose a hanging gallbladder.",
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
      "confidence": 0.88
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       117,
       863,
       591
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       563,
       641,
       885
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       599,
       122,
       715,
       213
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       303,
       497,
       654,
       621
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       604,
       452,
       748,
       550
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 71.0,
     "best": 1.0,
     "hits": 72
    },
    "gallbladder": {
     "first": 0.0,
     "last": 71.0,
     "best": 1.0,
     "hits": 72
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 72
    },
    "fat": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 72
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 71.0,
     "best": 0.92,
     "hits": 30
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 47
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 48
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 42
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.9,
     "c2": 0.75,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper cystic artery) are clearly dissected and seen entering the gallbladder neck. C2: A clear full-thickness window is visible between the cystic duct and cystic artery, and a second dissected space is visible above the artery against the liver bed. C3: The lower third of the gallbladder is dissected away from the liver bed, exposing the cystic plate behind the artery.",
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
      "confidence": 0.92
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       555,
       688,
       897
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       117,
       858,
       583
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       621,
       437,
       769,
       534
      ],
      "confidence": 0.74
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 72.0,
     "best": 1.0,
     "hits": 73
    },
    "gallbladder": {
     "first": 0.0,
     "last": 72.0,
     "best": 1.0,
     "hits": 73
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 73
    },
    "fat": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 73
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 72.0,
     "best": 0.92,
     "hits": 31
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 49
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 43
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 70.0
    },
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
     "since": 70.0
    }
   ]
  },
  {
   "t": 73.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a small incision in the peritoneum is visible, with neither the cystic duct nor the cystic artery skeletonized into distinct tubular structures connected to the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue, with no full-thickness windows created. C3: The gallbladder remains completely attached to the liver bed along its inferior margin, so the cystic plate is not exposed.",
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
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has barely begun; critical structures are still covered by fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       351,
       417,
       908
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       120,
       1000,
       725
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       363,
       537,
       526,
       716
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
     "last": 73.0,
     "best": 1.0,
     "hits": 74
    },
    "gallbladder": {
     "first": 0.0,
     "last": 73.0,
     "best": 1.0,
     "hits": 74
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 74
    },
    "fat": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 74
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 72.0,
     "best": 0.92,
     "hits": 31
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 49
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 43
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 70.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only a single broad structure/band on the right and an incomplete window are visible, without two distinct tubular structures clearly delineated entering the gallbladder. C2: There is one partial dissection window filled with connective tissue, not two full-thickness windows clearing the hepatocystic triangle. C3: The peritoneum over the hepatocystic junction is opened, but the lower part of the gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
      "name": "hepatocystic_window",
      "confidence": 0.65
     },
     {
      "name": "cystic_duct",
      "confidence": 0.45
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and cystic artery are not yet fully isolated from surrounding fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       91,
       145,
       998,
       708
      ],
      "confidence": 0.98,
      "label": "liver"
     },
     {
      "box_2d": [
       0,
       345,
       478,
       900
      ],
      "confidence": 0.95,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       347,
       546,
       501,
       726
      ],
      "confidence": 0.81,
      "label": "hepatocystic_window"
     },
     {
      "box_2d": [
       479,
       721,
       997,
       825
      ],
      "confidence": 0.82,
      "label": "cystic_duct"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 74.0,
     "best": 1.0,
     "hits": 75
    },
    "gallbladder": {
     "first": 0.0,
     "last": 74.0,
     "best": 1.0,
     "hits": 75
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 75
    },
    "fat": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 75
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 72.0,
     "best": 0.92,
     "hits": 31
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 48
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 49
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 43
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 70.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.65,
     "c2": 0.25,
     "c3": 0.45
    },
    "cvs_evidence": "Two tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck, though tissue remains between them. The hepatocystic triangle is not fully cleared, as connective tissue still bridges the gap between the artery and the cystic plate without two clear full-thickness windows. The cystic plate is partially exposed along the upper dissection plane, but the lower gallbladder is not completely elevated off the liver bed.",
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Connective tissue still obscures the full-thickness windows in the hepatocystic triangle.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       626,
       610
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       182,
       1000,
       922
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       517,
       467,
       1000,
       753
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       297,
       459,
       638,
       599
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 75.0,
     "best": 1.0,
     "hits": 76
    },
    "gallbladder": {
     "first": 0.0,
     "last": 75.0,
     "best": 1.0,
     "hits": 76
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 76
    },
    "fat": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 76
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 75.0,
     "best": 0.92,
     "hits": 32
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 49
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 50
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 43
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": false,
     "since": null
    },
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
   "t": 76.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.6
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and upper cystic artery) are clearly dissected and seen entering the gallbladder. C2: Two full-thickness windows are visible in the hepatocystic triangle between the duct, artery, and cystic plate, with the background liver visible through the lower window. C3: The lower portion of the gallbladder is partially separated from the liver bed with connective tissue of the cystic plate visible in the upper window, though the dissection up the liver bed is somewhat limited.",
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
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       119,
       588,
       576
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       550,
       626,
       917
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       174,
       285,
       404
      ],
      "label": "liver",
      "confidence": 0.8
     },
     {
      "box_2d": [
       751,
       192,
       999,
       499
      ],
      "label": "liver",
      "confidence": 0.85
     },
     {
      "box_2d": [
       278,
       480,
       612,
       573
      ],
      "label": "cystic_plate",
      "confidence": 0.82
     },
     {
      "box_2d": [
       575,
       403,
       727,
       518
      ],
      "label": "hepatocystic_window",
      "confidence": 0.77
     },
     {
      "box_2d": [
       447,
       354,
       627,
       497
      ],
      "label": "cystic_artery",
      "confidence": 0.74
     },
     {
      "box_2d": [
       638,
       494,
       999,
       683
      ],
      "label": "cystic_duct",
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 76.0,
     "best": 1.0,
     "hits": 77
    },
    "gallbladder": {
     "first": 0.0,
     "last": 76.0,
     "best": 1.0,
     "hits": 77
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 77
    },
    "fat": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 77
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 76.0,
     "best": 0.92,
     "hits": 33
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 51
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 44
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c3": 0.35
    },
    "cvs_evidence": "C1: Only the peritoneum over the hepatocystic triangle has been incised; distinct tubular structures (cystic duct and artery) are not yet isolated or clearly visible entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows cleared through it. C3: A small area of connective tissue on the cystic plate is exposed where the peritoneum is opened, but the lower third of the gallbladder is not fully separated from the liver bed.",
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
      "confidence": 0.6
     }
    ],
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; the cystic duct and cystic artery are still embedded in fat and connective tissue and cannot be identified.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       131,
       1000,
       735
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       352,
       402,
       904
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       366,
       536,
       507,
       707
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 77.0,
     "best": 1.0,
     "hits": 78
    },
    "gallbladder": {
     "first": 0.0,
     "last": 77.0,
     "best": 1.0,
     "hits": 78
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 78
    },
    "fat": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 78
    },
    "blood": {
     "first": 8.0,
     "last": 64.0,
     "best": 0.6,
     "hits": 0
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 77.0,
     "best": 0.92,
     "hits": 33
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 51
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 44
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Only the peritoneum over the hepatocystic triangle has been scored, and neither the cystic duct nor the cystic artery is dissected out as a tubular structure. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: The inferior margin of the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in a very early stage; only the peritoneum has been opened and the cystic duct and artery are still buried in fat and connective tissue.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       138,
       1000,
       715
      ],
      "confidence": 0.99
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       347,
       396,
       896
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       345,
       531,
       482,
       692
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       468,
       713,
       997,
       824
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 78.0,
     "best": 1.0,
     "hits": 79
    },
    "gallbladder": {
     "first": 0.0,
     "last": 78.0,
     "best": 1.0,
     "hits": 79
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 79
    },
    "fat": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 79
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 77.0,
     "best": 0.92,
     "hits": 33
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 50
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 51
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 44
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c3": 0.65
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. Two windows are dissected between the duct and artery and between the artery and the cystic plate, though some connective tissue strands remain in the upper window. The lower third of the gallbladder is dissected off the liver bed exposing the cystic plate.",
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
      "confidence": 0.88
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
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       119,
       653,
       605
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       568,
       594,
       915
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       587,
       135,
       997,
       606
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       555,
       451,
       995,
       727
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       323,
       417,
       545,
       567
      ],
      "confidence": 0.72
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       198,
       508,
       626,
       637
      ],
      "confidence": 0.81
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       468,
       466,
       608,
       549
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 79.0,
     "best": 1.0,
     "hits": 80
    },
    "gallbladder": {
     "first": 0.0,
     "last": 79.0,
     "best": 1.0,
     "hits": 80
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 80
    },
    "fat": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 80
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 79.0,
     "best": 0.92,
     "hits": 34
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 51
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 52
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 45
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two tubular structures (the larger cystic duct on the left/bottom and thinner cystic artery in the center) can be seen entering the lower gallbladder. C2: A full-thickness window is clearly visible between the cystic duct and cystic artery, while the upper space between the artery and cystic plate is partially dissected with connective tissue still bridging the gap. C3: A triangle of the cystic plate is exposed superiorly, though it is not yet completely separated along the entire inferior margin of the gallbladder.",
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
      "confidence": 0.88
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       119,
       781,
       582
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       561,
       608,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       247,
       483,
       602,
       604
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       546,
       437,
       680,
       526
      ],
      "confidence": 0.8
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       632,
       452,
       1000,
       714
      ],
      "confidence": 0.75
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       444,
       432,
       686,
       565
      ],
      "confidence": 0.7
     },
     {
      "label": "liver",
      "box_2d": [
       725,
       147,
       999,
       619
      ],
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 80.0,
     "best": 1.0,
     "hits": 81
    },
    "gallbladder": {
     "first": 0.0,
     "last": 80.0,
     "best": 1.0,
     "hits": 81
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 81
    },
    "fat": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 81
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 80.0,
     "best": 0.92,
     "hits": 35
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 52
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 53
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 46
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.75
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are clearly seen entering the gallbladder neck. Two full-thickness windows are dissected in the hepatocystic triangle, allowing a view of the background liver tissue between the duct and artery and between the artery and the cystic plate. The lower part of the gallbladder is dissected off the liver bed, exposing the cystic plate superiorly.",
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
       118,
       502,
       607
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       588,
       574,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       675,
       140,
       1000,
       676
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       214,
       519,
       539,
       623
      ],
      "confidence": 0.8
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       515,
       455,
       622,
       534
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 81.0,
     "best": 1.0,
     "hits": 82
    },
    "gallbladder": {
     "first": 0.0,
     "last": 81.0,
     "best": 1.0,
     "hits": 82
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 82
    },
    "fat": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 82
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 81.0,
     "best": 0.92,
     "hits": 36
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 53
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 54
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 47
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.8
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly seen entering the gallbladder neck. C2: Two full-thickness windows are dissected in the hepatocystic triangle, showing the background liver through the gaps between the duct, artery, and cystic plate. C3: The lower portion of the gallbladder is mobilized off the liver bed, exposing the cystic plate behind the artery.",
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
      "confidence": 0.92
     },
     {
      "name": "cystic_plate",
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
    "instruments": [],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       0,
       120,
       850,
       596
      ],
      "label": "gallbladder",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       580,
       616,
       919
      ],
      "label": "liver",
      "confidence": 0.94
     },
     {
      "box_2d": [
       267,
       483,
       645,
       637
      ],
      "label": "cystic_plate",
      "confidence": 0.88
     },
     {
      "box_2d": [
       581,
       427,
       712,
       528
      ],
      "label": "hepatocystic_window",
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 82.0,
     "best": 1.0,
     "hits": 83
    },
    "gallbladder": {
     "first": 0.0,
     "last": 82.0,
     "best": 1.0,
     "hits": 83
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 83
    },
    "fat": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 83
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 82.0,
     "best": 0.92,
     "hits": 37
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 54
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 55
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 48
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two clearly dissected tubular structures (the cystic duct inferiorly and the cystic artery superiorly) are visible entering the lower part of the gallbladder. C2: The hepatocystic triangle is well cleared of fat and fibrous tissue, showing distinct windows between the duct and artery and between the artery and the cystic plate. C3: The lower third of the gallbladder is mobilized off the liver bed, exposing the cystic plate superiorly.",
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
      "label": "gallbladder",
      "box_2d": [
       0,
       117,
       687,
       597
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       182,
       998,
       896
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       98,
       494,
       523,
       647
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       448,
       427,
       568,
       521
      ],
      "confidence": 0.82
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       488,
       493,
       1000,
       750
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 83.0,
     "best": 1.0,
     "hits": 84
    },
    "gallbladder": {
     "first": 0.0,
     "last": 83.0,
     "best": 1.0,
     "hits": 84
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 84
    },
    "fat": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 84
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 83.0,
     "best": 0.92,
     "hits": 38
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 55
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 56
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 49
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 81.0
    },
    "cvs": {
     "on": true,
     "since": 81.0
    }
   },
   "events": [
    {
     "what": "c2",
     "on": true,
     "since": 81.0
    },
    {
     "what": "c3",
     "on": true,
     "since": 81.0
    },
    {
     "what": "cvs",
     "on": true,
     "since": 81.0
    }
   ]
  },
  {
   "t": 84.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and upper cystic artery) are clearly dissected and seen entering the gallbladder neck. C2: The hepatocystic triangle is well cleared of fat and connective tissue with full-thickness windows visible between the duct and artery and above the artery toward the cystic plate. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the cystic plate behind the artery.",
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
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.92
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
    "instruments": [],
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
       680,
       608
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       590,
       476,
       915
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       566,
       178,
       1000,
       720
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       384,
       431,
       485,
       513
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       0,
       487,
       451,
       686
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 84.0,
     "best": 1.0,
     "hits": 85
    },
    "gallbladder": {
     "first": 0.0,
     "last": 84.0,
     "best": 1.0,
     "hits": 85
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 85
    },
    "fat": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 85
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 84.0,
     "best": 0.92,
     "hits": 39
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 56
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 57
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 50
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 81.0
    },
    "cvs": {
     "on": true,
     "since": 81.0
    }
   },
   "events": []
  },
  {
   "t": 85.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.8,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder. C2: Two full-thickness windows are visible between the duct and artery and between the artery and the cystic plate, showing the liver background. C3: The lower portion of the gallbladder is dissected off the liver bed, exposing the cystic plate in the upper window.",
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
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.9
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
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       509,
       612
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       599,
       507,
       914
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       198,
       523,
       534,
       637
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       499,
       459,
       592,
       532
      ],
      "confidence": 0.82
     },
     {
      "label": "grasper",
      "box_2d": [
       464,
       118,
       553,
       187
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 85.0,
     "best": 1.0,
     "hits": 86
    },
    "gallbladder": {
     "first": 0.0,
     "last": 85.0,
     "best": 1.0,
     "hits": 86
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 86
    },
    "fat": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 86
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 85.0,
     "best": 0.92,
     "hits": 40
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 57
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 58
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 51
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 81.0
    },
    "cvs": {
     "on": true,
     "since": 81.0
    }
   },
   "events": []
  },
  {
   "t": 86.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) appear to enter the gallbladder, though the artery is still somewhat embedded in tissue. C2: A window is visible between the cystic duct and cystic artery, and a superior dissection area is present above the artery, though a full-thickness upper window is not completely clear. C3: The lower gallbladder is only partially mobilized at the upper border, with the cystic plate not clearly exposed along the entire inferior margin.",
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
      "name": "cystic_plate",
      "confidence": 0.6
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
     "scissors"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The upper window between the cystic artery and cystic plate is not fully perforated, and the lower gallbladder is not sufficiently separated from the cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       817,
       618
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       139,
       1000,
       913
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       89,
       606,
       290,
       893
      ],
      "confidence": 0.91
     },
     {
      "label": "grasper",
      "box_2d": [
       517,
       119,
       627,
       214
      ],
      "confidence": 0.82
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       253,
       532,
       609,
       665
      ],
      "confidence": 0.78
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       551,
       469,
       665,
       552
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 86.0,
     "best": 1.0,
     "hits": 87
    },
    "gallbladder": {
     "first": 0.0,
     "last": 86.0,
     "best": 1.0,
     "hits": 87
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 87
    },
    "fat": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 87
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 86.0,
     "best": 0.92,
     "hits": 40
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 58
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 59
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 52
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 81.0
    },
    "cvs": {
     "on": true,
     "since": 81.0
    }
   },
   "events": []
  },
  {
   "t": 87.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above held by the instrument) are clearly isolated and seen entering the gallbladder. C2: The hepatocystic triangle is well cleared with full-thickness windows visible below the artery and above the artery where the cystic plate is seen. C3: The cystic plate is only minimally exposed at the upper edge of the triangle, and the lower third of the gallbladder is not fully detached from the liver bed.",
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
      "confidence": 0.92
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
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet sufficiently dissected off the cystic plate (C3 not achieved).",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       118,
       682,
       608
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       587,
       373,
       876
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       629,
       137,
       990,
       580
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       130,
       481,
       401,
       622
      ],
      "confidence": 0.82
     },
     {
      "label": "clipper",
      "box_2d": [
       346,
       519,
       562,
       924
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       461,
       438,
       549,
       517
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 87.0,
     "best": 1.0,
     "hits": 88
    },
    "gallbladder": {
     "first": 0.0,
     "last": 87.0,
     "best": 1.0,
     "hits": 88
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 88
    },
    "fat": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 88
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 87.0,
     "best": 0.92,
     "hits": 41
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 59
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 60
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 53
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 81.0
    },
    "cvs": {
     "on": true,
     "since": 81.0
    }
   },
   "events": []
  },
  {
   "t": 88.0,
   "label": {
    "cvs": {
     "c1": 0.72,
     "c2": 0.45,
     "c3": 0.2
    },
    "cvs_evidence": "C1: The cystic duct is visible below and a grasper is isolating the cystic artery above, showing two tubular structures entering the gallbladder. C2: A window is being opened between the cystic duct and artery by the grasper, and a cleared area is seen above the artery, though the lower window is partially obscured by the instrument. C3: Only a small portion of the cystic plate is exposed superiorly, and the lower third of the gallbladder is not fully detached from the liver bed.",
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
      "confidence": 0.7
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is still in progress and not fully completed to confirm the Critical View of Safety.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       585,
       368,
       834
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       604,
       136,
       999,
       694
      ],
      "confidence": 0.93
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       688,
       599
      ],
      "confidence": 0.94
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       128,
       503,
       397,
       630
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       326,
       474,
       552,
       927
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 88.0,
     "best": 1.0,
     "hits": 89
    },
    "gallbladder": {
     "first": 0.0,
     "last": 88.0,
     "best": 1.0,
     "hits": 89
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 89
    },
    "fat": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 89
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 88.0,
     "best": 0.92,
     "hits": 42
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 60
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 61
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 54
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
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
   "t": 89.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery being grasped above) are visible entering the gallbladder. C2: A grasper is passing through the window between the cystic duct and artery, though the window above the artery to the cystic plate is only partially cleared. C3: A small triangle of the cystic plate is exposed on the liver bed, but the lower third of the gallbladder is not yet fully mobilized.",
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
      "name": "cystic_plate",
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle and cystic plate are not yet completely cleared to fully confirm the Critical View of Safety.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       121,
       456,
       608
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       126,
       1000,
       915
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       140,
       503,
       487,
       647
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       447,
       497,
       626,
       927
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       465,
       442,
       576,
       528
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 89.0,
     "best": 1.0,
     "hits": 90
    },
    "gallbladder": {
     "first": 0.0,
     "last": 89.0,
     "best": 1.0,
     "hits": 90
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 90
    },
    "fat": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 89.0,
     "best": 0.92,
     "hits": 43
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 61
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 62
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 55
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are clearly seen connected to the gallbladder. C2: The hepatocystic triangle is well dissected with clear windows visible between the cystic duct and cystic artery, and between the cystic artery and cystic plate. C3: The lower part of the gallbladder is dissected off the liver bed, exposing the cystic plate behind the cystic artery.",
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
      "confidence": 0.8
     },
     {
      "name": "fat",
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
      "label": "gallbladder",
      "box_2d": [
       0,
       119,
       708,
       608
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       597,
       487,
       856
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       146,
       523,
       496,
       647
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       477,
       468,
       553,
       548
      ],
      "confidence": 0.76
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       392,
       486,
       548,
       599
      ],
      "confidence": 0.73
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       538,
       477,
       996,
       789
      ],
      "confidence": 0.84
     },
     {
      "label": "grasper",
      "box_2d": [
       330,
       614,
       575,
       925
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 90.0,
     "best": 1.0,
     "hits": 91
    },
    "gallbladder": {
     "first": 0.0,
     "last": 90.0,
     "best": 1.0,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 91
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 90.0,
     "best": 0.92,
     "hits": 44
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 62
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 63
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 56
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and the upper cystic artery being grasped by the clipper) are clearly visible entering the gallbladder. C2: There is a clear window below the cystic duct, a window between the duct and artery where the clipper jaws sit, and a dissected window above the artery exposing the cystic plate. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the raw surface of the cystic plate.",
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
      "confidence": 0.92
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
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
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
       0,
       128,
       997,
       923
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       120,
       448,
       616
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       146,
       517,
       448,
       642
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       463,
       465,
       548,
       547
      ],
      "confidence": 0.73
     },
     {
      "label": "grasper",
      "box_2d": [
       382,
       498,
       607,
       926
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 91.0,
     "best": 1.0,
     "hits": 92
    },
    "gallbladder": {
     "first": 0.0,
     "last": 91.0,
     "best": 1.0,
     "hits": 92
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 92
    },
    "fat": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 92
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 91.0,
     "best": 0.92,
     "hits": 45
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 63
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 64
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 57
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": false,
     "since": null
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
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct anteriorly/inferiorly and cystic artery posteriorly/superiorly) are clearly entering the gallbladder. C2: The hepatocystic triangle is well dissected with clear full-thickness windows visible between the duct, artery, and cystic plate. C3: The lower part of the gallbladder is separated from the liver bed, exposing the cystic plate superior to the artery.",
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
      "confidence": 0.95
     },
     {
      "name": "cystic_artery",
      "confidence": 0.95
     },
     {
      "name": "cystic_plate",
      "confidence": 0.88
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.92
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
       0,
       122,
       1000,
       917
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       121,
       687,
       608
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       133,
       482,
       348,
       623
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       211,
       464,
       497,
       926
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       400,
       118,
       469,
       175
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 92.0,
     "best": 1.0,
     "hits": 93
    },
    "gallbladder": {
     "first": 0.0,
     "last": 92.0,
     "best": 1.0,
     "hits": 93
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 93
    },
    "fat": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 93
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 92.0,
     "best": 0.92,
     "hits": 46
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 64
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 65
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 58
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 90.0
    },
    "cvs": {
     "on": true,
     "since": 90.0
    }
   },
   "events": [
    {
     "what": "c3",
     "on": true,
     "since": 90.0
    },
    {
     "what": "cvs",
     "on": true,
     "since": 90.0
    }
   ]
  },
  {
   "t": 93.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.35
    },
    "cvs_evidence": "C1: The cystic duct is clearly visible inferiorly, and a second structure (cystic artery) is being grasped in the triangle, though the instrument partially obscures its connection. C2: A grasper is passing into a dissected space in the hepatocystic triangle, partially demonstrating a window, though full clearance of both windows is not completely exposed. C3: A small triangular patch of the cystic plate is visible superiorly, but the entire lower third of the gallbladder is not fully detached from the liver bed.",
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
      "confidence": 0.85
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
    "reason_if_not": "The hepatocystic triangle is still being dissected with the grasper in place, and the lower gallbladder is not fully mobilized off the cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       117,
       449,
       624
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       137,
       484,
       346,
       621
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       218,
       461,
       497,
       924
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       595,
       140,
       999,
       874
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       492,
       448,
       804,
       735
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "liver": {
     "first": 0.0,
     "last": 93.0,
     "best": 1.0,
     "hits": 94
    },
    "gallbladder": {
     "first": 0.0,
     "last": 93.0,
     "best": 1.0,
     "hits": 94
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 94
    },
    "fat": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 94
    },
    "blood": {
     "first": 8.0,
     "last": 78.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_plate": {
     "first": 10.0,
     "last": 93.0,
     "best": 0.92,
     "hits": 47
    },
    "cystic_duct": {
     "first": 13.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 65
    },
    "cystic_artery": {
     "first": 13.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 66
    },
    "hepatocystic_window": {
     "first": 14.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 59
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 68.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 90.0
    },
    "cvs": {
     "on": true,
     "since": 90.0
    }
   },
   "events": []
  }
 ],
 "truth": [
  {
   "t": 19,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 24,
   "C1": 0.6666666666666666,
   "C2": 0.3333333333333333,
   "C3": 0.3333333333333333
  },
  {
   "t": 29,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
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
   "C3": 1.0
  },
  {
   "t": 49,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 1.0
  },
  {
   "t": 54,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 59,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 1.0
  },
  {
   "t": 64,
   "C1": 0.0,
   "C2": 0.0,
   "C3": 0.0
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
   "C2": 0.6666666666666666,
   "C3": 1.0
  },
  {
   "t": 79,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 1.0
  },
  {
   "t": 84,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 1.0
  },
  {
   "t": 89,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 1.0
  }
 ],
 "agreement": {
  "keyframes": 15,
  "C1": 0.8666666666666667,
  "C1_caught": [
   10,
   11
  ],
  "C2": 0.5333333333333333,
  "C2_caught": [
   5,
   11
  ],
  "C3": 0.6666666666666666,
  "C3_caught": [
   6,
   11
  ]
 },
 "rules": {
  "confirm_conf": 0.7,
  "confirm_frames": 2
 }
};
