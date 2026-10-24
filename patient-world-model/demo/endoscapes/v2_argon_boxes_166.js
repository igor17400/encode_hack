window.TIMELINE = {
 "video": "videos/endo166.mp4",
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
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are dissected out yet. C2: The hepatocystic triangle is completely covered with fat and peritoneum with no windows created. C3: The gallbladder remains fully attached to the liver bed with no cystic plate dissection.",
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just started and the cystic duct and artery remain completely covered by fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       0,
       306,
       550,
       650
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       214,
       162,
       924,
       646
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       169,
       651,
       291,
       855
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
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are dissected out yet. C2: The hepatocystic triangle is completely covered by peritoneum and fat with no windows created. C3: The gallbladder remains fully attached to the liver bed with only superficial scoring of the peritoneum.",
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the peritoneum is being scored and tubular structures are not yet exposed.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       303,
       582,
       725
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       238,
       163,
       937,
       638
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       243,
       645,
       365,
       860
      ],
      "confidence": 0.98
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
     "best": 0.9,
     "hits": 2
    },
    "blood": {
     "first": 0.0,
     "last": 1.0,
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
   "t": 2.0,
   "label": {
    "cvs": {
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible; the peritoneum over the gallbladder neck is just being incised. C2: The hepatocystic triangle is completely covered by intact peritoneum and fat with no windows dissected. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are still completely covered by peritoneum and fat.",
    "boxes": [
     {
      "box_2d": [
       0,
       299,
       560,
       707
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       217,
       169,
       920,
       637
      ],
      "label": "liver",
      "confidence": 0.94
     },
     {
      "box_2d": [
       287,
       521,
       463,
       865
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
     "best": 0.9,
     "hits": 3
    },
    "blood": {
     "first": 0.0,
     "last": 1.0,
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
   "t": 3.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible as the hepatocystic triangle is still covered in intact fat and peritoneum. C2: The hepatocystic triangle is completely undissected and filled with fatty connective tissue, with no windows created. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection has just begun; the cystic duct and cystic artery are still buried within the fatty tissue of the hepatocystic triangle.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       300,
       561,
       738
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       178,
       162,
       891,
       643
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       118,
       639,
       266,
       850
      ],
      "confidence": 0.96
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
     "best": 0.9,
     "hits": 4
    },
    "blood": {
     "first": 0.0,
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
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No tubular structures (cystic duct or artery) are dissected out or visible entering the gallbladder; the peritoneum is still intact. C2: The hepatocystic triangle is completely covered by intact peritoneum, fat, and connective tissue with no windows dissected. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle has not been dissected yet; structures remain covered by peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       300,
       520,
       715
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       169,
       163,
       871,
       648
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       689,
       76,
       791
      ],
      "confidence": 0.75
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
    "blood": {
     "first": 0.0,
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
   "t": 5.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible as the hepatocystic triangle is still covered in fat and peritoneum. C2: The hepatocystic triangle is completely undissected and filled with adipose and connective tissue, with no windows present. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection has just begun; the cystic duct and cystic artery are still completely obscured by fat and peritoneum.",
    "boxes": [
     {
      "box_2d": [
       0,
       353,
       608,
       712
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       277,
       161,
       937,
       705
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       108,
       688,
       213,
       831
      ],
      "label": "hook",
      "confidence": 0.85
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
     "first": 0.0,
     "last": 3.0,
     "best": 0.7,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 5.0,
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
   "t": 6.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: The hepatocystic triangle is completely covered in fat and peritoneum, so no individual tubular structures (cystic duct or artery) are isolated or visible. C2: Dissection is just beginning with the electrocautery hook, and no windows have been created through the hepatocystic triangle. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is still covered by intact peritoneum and adipose tissue prior to skeletonization.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       2,
       345,
       681,
       744
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       300,
       157,
       996,
       679
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       161,
       653,
       286,
       848
      ],
      "confidence": 0.94
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
     "first": 0.0,
     "last": 6.0,
     "best": 0.7,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 5.0,
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
   "t": 7.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and peritoneum, so no distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder. C2: Dissection of the hepatocystic triangle has just begun, with no cleared windows visible through the fat and connective tissue. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is completely covered by fat and peritoneal tissue, preventing identification of the cystic duct and cystic artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       91,
       330,
       756,
       706
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       133,
       157,
       1000,
       856
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       447,
       210,
       727
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       342,
       691,
       458,
       860
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
    "blood": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.7,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 5.0,
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
   "t": 8.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1 is not achieved because the hepatocystic triangle is still covered in fat and peritoneum, with no distinct tubular structures isolated. C2 is not achieved as dissection is just beginning with the hook and no windows have been created through the triangle. C3 is not achieved because the lower gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Initial stage of dissection; cystic duct and cystic artery are still embedded within fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       75,
       336,
       735,
       755
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       336,
       159,
       1000,
       666
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       479,
       184,
       724
      ],
      "label": "grasper",
      "confidence": 0.93
     },
     {
      "box_2d": [
       308,
       667,
       448,
       861
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
     "first": 0.0,
     "last": 7.0,
     "best": 0.7,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 8.0,
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
   "t": 9.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No tubular structures (cystic duct or cystic artery) are dissected or visible entering the gallbladder; the region is still covered in fat and peritoneum. C2: The hepatocystic triangle has not been cleared of fat and connective tissue, and no windows are visible. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Early stage of dissection; the hepatocystic triangle is completely covered by fat and peritoneal tissue, concealing the cystic duct and artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       53,
       334,
       706,
       757
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       316,
       160,
       994,
       671
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       320,
       646,
       461,
       855
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       517,
       166,
       727
      ],
      "confidence": 0.88
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
    "blood": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.7,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 8.0,
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No tubular structures (cystic duct or artery) are dissected or visible entering the gallbladder yet. C2: The hepatocystic triangle is still completely covered by peritoneum and fatty connective tissue, with no windows created. C3: The inferior margin of the gallbladder remains fully attached to the liver bed, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has barely begun; the cystic duct and artery are still completely obscured by fat and peritoneum.",
    "boxes": [
     {
      "box_2d": [
       69,
       342,
       688,
       735
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       307,
       161,
       994,
       663
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       477,
       183,
       725
      ],
      "label": "grasper",
      "confidence": 0.94
     },
     {
      "box_2d": [
       503,
       654,
       625,
       856
      ],
      "label": "hook",
      "confidence": 0.88
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
    "blood": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.7,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 8.0,
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
   "t": 11.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or clearly visible entering the gallbladder; the region is covered in fat and peritoneum. C2: The hepatocystic triangle is filled with undissected fat and connective tissue with no windows visible. C3: The gallbladder remains completely attached to the liver bed with only superficial scoring of the peritoneum.",
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
    "reason_if_not": "Dissection has just begun; the hepatocystic triangle is still covered in fat and peritoneum, concealing the cystic duct and artery.",
    "boxes": [
     {
      "box_2d": [
       63,
       345,
       687,
       764
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       326,
       161,
       998,
       671
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       363,
       657,
       499,
       860
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       528,
       185,
       731
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
    "blood": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.7,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 11.0,
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
   "t": 12.0,
   "label": {
    "cvs": {
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or cystic artery) are dissected out or visible entering the gallbladder; the region is still covered in fat and peritoneum. C2: The hepatocystic triangle has not been cleared of fat and connective tissue, and no windows are visible. C3: The lower portion of the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.98
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; the cystic duct and artery are still completely encased in fat and peritoneal tissue.",
    "boxes": [
     {
      "box_2d": [
       69,
       339,
       747,
       755
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       335,
       677,
       484,
       859
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       511,
       187,
       731
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       146,
       160,
       1000,
       858
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
     "best": 0.98,
     "hits": 13
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.95,
     "hits": 13
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 11.0,
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
   "t": 13.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures are visible yet as the peritoneum and fat over the hepatocystic triangle are intact. C2: The hepatocystic triangle is completely covered by fat and connective tissue with no dissected windows. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are still obscured by fat and peritoneum.",
    "boxes": [
     {
      "box_2d": [
       91,
       338,
       770,
       780
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       330,
       160,
       1000,
       655
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       426,
       669,
       546,
       863
      ],
      "label": "hook",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       480,
       213,
       735
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
     "best": 0.98,
     "hits": 14
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.95,
     "hits": 14
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 13.0,
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or clearly visible entering the gallbladder yet. C2: The hepatocystic triangle is completely covered with fat and peritoneum, with dissection just beginning using the electrocautery hook. C3: The gallbladder remains fully attached to the liver bed, and the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages; critical biliary and vascular structures remain obscured by fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       78,
       338,
       714,
       747
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       309,
       160,
       994,
       652
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       482,
       198,
       724
      ],
      "label": "grasper",
      "confidence": 0.9
     },
     {
      "box_2d": [
       410,
       634,
       553,
       861
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
     "best": 0.98,
     "hits": 15
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.95,
     "hits": 15
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and peritoneum, so the cystic duct and artery are not yet skeletonized or clearly identifiable as two distinct tubular structures. C2: Dissection is just beginning with the hook, and no full-thickness windows have been created through the hepatocystic triangle. C3: The gallbladder remains fully attached to the liver bed, with no exposure of the cystic plate.",
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
    "reason_if_not": "The hepatocystic triangle is still covered by fatty tissue and peritoneum; dissection is at an early stage and the cystic structures are not yet isolated.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       63,
       331,
       693,
       705
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       298,
       158,
       1000,
       856
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       461,
       207,
       722
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       429,
       600,
       602,
       861
      ],
      "confidence": 0.91
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
     "best": 0.98,
     "hits": 16
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.95,
     "hits": 16
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 15.0,
     "best": 0.85,
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
   "t": 16.0,
   "label": {
    "cvs": {
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or visible entering the gallbladder; the region is covered in fat and peritoneum. C2: The hepatocystic triangle is completely undissected and filled with fatty connective tissue, with no windows visible. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are still completely obscured by fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       62,
       332,
       662,
       686
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       291,
       161,
       996,
       663
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       412,
       581,
       605,
       861
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       454,
       179,
       718
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
     "best": 0.98,
     "hits": 17
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 17
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 16.0,
     "best": 0.85,
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
   "t": 17.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible as the peritoneum over the hepatocystic triangle is still intact. C2: The hepatocystic triangle is completely covered by fat and connective tissue with no dissected windows. C3: The lower part of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection has just begun; the cystic duct, cystic artery, and cystic plate are still concealed under peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       56,
       340,
       659,
       778
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       146,
       159,
       998,
       862
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       529,
       455,
       838,
       850
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       536,
       167,
       745
      ],
      "confidence": 0.77
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
     "best": 0.98,
     "hits": 18
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.95,
     "hits": 18
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 17.0,
     "best": 0.85,
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
   "t": 18.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are delineated yet as dissection of the peritoneum and fat is just starting. C2: The hepatocystic triangle is completely filled with undissected fat and connective tissue, with no windows created. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle has not been dissected yet; the cystic duct and artery are still completely covered by peritoneum and fat.",
    "boxes": [
     {
      "box_2d": [
       56,
       337,
       663,
       764
      ],
      "confidence": 0.95,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       297,
       159,
       990,
       648
      ],
      "confidence": 0.95,
      "label": "liver"
     },
     {
      "box_2d": [
       461,
       633,
       584,
       857
      ],
      "confidence": 0.93,
      "label": "hook"
     },
     {
      "box_2d": [
       0,
       524,
       185,
       736
      ],
      "confidence": 0.88,
      "label": "grasper"
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
     "best": 0.98,
     "hits": 19
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.95,
     "hits": 19
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 17.0,
     "best": 0.85,
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
   "t": 19.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are visible as dissection is just beginning on the peritoneum and fat. C2: The hepatocystic triangle is completely covered by intact peritoneum and fatty tissue with no windows dissected. C3: The gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "The hepatocystic triangle is still covered by intact peritoneum and fat, so the cystic duct and artery are not yet exposed.",
    "boxes": [
     {
      "box_2d": [
       63,
       339,
       754,
       763
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       294,
       159,
       995,
       653
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       509,
       194,
       736
      ],
      "label": "grasper",
      "confidence": 0.88
     },
     {
      "box_2d": [
       442,
       603,
       596,
       857
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
     "best": 0.98,
     "hits": 20
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.95,
     "hits": 20
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 19.0,
     "best": 0.85,
     "hits": 9
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
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one possible tubular structure is partially visible on the right, and dissection is very early so two distinct tubular structures entering the gallbladder are not seen. C2: The hepatocystic triangle is still filled with fat and connective tissue with only a tiny initial opening being created by the hook. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate along its inferior margin.",
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
      "name": "cystic_duct",
      "confidence": 0.45
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; fat and connective tissue obscure the cystic duct, cystic artery, and cystic plate.",
    "boxes": [
     {
      "box_2d": [
       52,
       332,
       733,
       735
      ],
      "confidence": 0.95,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       296,
       160,
       998,
       656
      ],
      "confidence": 0.96,
      "label": "liver"
     },
     {
      "box_2d": [
       0,
       517,
       185,
       735
      ],
      "confidence": 0.88,
      "label": "grasper"
     },
     {
      "box_2d": [
       469,
       562,
       695,
       856
      ],
      "confidence": 0.94,
      "label": "hook"
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
     "best": 0.98,
     "hits": 21
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.95,
     "hits": 21
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 10
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 20.0,
     "best": 0.45,
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Only one tubular-like structure is partially dissected on the right, while the rest of the hepatocystic area remains covered in fat and connective tissue. C2: The hepatocystic triangle is still filled with adipose and connective tissue with only a tiny initial opening being created by the hook. C3: The gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages and critical structures are still obscured by fat and peritoneum.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       30,
       336,
       650,
       725
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       287,
       161,
       995,
       663
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       529,
       174,
       733
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       445,
       566,
       640,
       859
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
     "best": 0.98,
     "hits": 22
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.95,
     "hits": 22
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 21.0,
     "best": 0.85,
     "hits": 11
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 21.0,
     "best": 0.45,
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
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1: Only the peritoneum over the hepatocystic triangle is being scored, and two distinct tubular structures are not yet isolated. C2: The hepatocystic triangle remains filled with undissected fat and connective tissue with no full-thickness windows visible. C3: The lower portion of the gallbladder is still completely attached to the liver bed with no exposed cystic plate.",
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
      "confidence": 0.92
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun, and the cystic duct and artery remain covered by peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       31,
       331,
       639,
       775
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       278,
       159,
       1000,
       671
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       542,
       160,
       738
      ],
      "confidence": 0.77
     },
     {
      "label": "hook",
      "box_2d": [
       439,
       563,
       642,
       859
      ],
      "confidence": 0.94
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
    "fat": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.98,
     "hits": 23
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.95,
     "hits": 23
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 22.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 21.0,
     "best": 0.45,
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder; the peritoneum is just being scored. C2: The hepatocystic triangle remains completely covered in intact peritoneum and fat, with no full-thickness windows created. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
      "confidence": 0.92
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun, and the cystic duct and artery are still completely encased in fat and peritoneum.",
    "boxes": [
     {
      "box_2d": [
       43,
       341,
       579,
       792
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       316,
       161,
       996,
       677
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       606,
       591,
       811,
       843
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       560,
       188,
       760
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
     "best": 0.98,
     "hits": 24
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.95,
     "hits": 24
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 22.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 21.0,
     "best": 0.45,
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder; the hook is just beginning superficial dissection of the peritoneum and fat. C2: The hepatocystic triangle remains completely filled with undissected fat and connective tissue, with no full-thickness windows created. C3: The gallbladder remains fully attached to the liver bed along its inferior margin, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection is in a very early stage; the cystic duct and cystic artery are still obscured by peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       54,
       347,
       737,
       775
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       300,
       158,
       1000,
       660
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       398,
       637,
       543,
       861
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       563,
       195,
       824
      ],
      "confidence": 0.9
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
     "best": 0.98,
     "hits": 25
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.95,
     "hits": 25
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 13
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 21.0,
     "best": 0.45,
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
     "c3": 0.02
    },
    "cvs_evidence": "C1: Only the cystic duct or a single thick tissue bundle is partially visible on the right; the cystic artery is not dissected out as a distinct tubular structure. C2: There is one small window being created with the hook, not two full-thickness windows clearing the hepatocystic triangle. C3: The gallbladder remains completely attached to the liver bed along its inferior margin with no cystic plate exposed.",
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
      "name": "hepatocystic_window",
      "confidence": 0.75
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages; tubular structures and the cystic plate are still covered by peritoneum and fat.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       99,
       360,
       746,
       824
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       288,
       158,
       1000,
       674
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       529,
       216,
       774
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       556,
       683,
       687,
       848
      ],
      "confidence": 0.91
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       458,
       644,
       573,
       719
      ],
      "confidence": 0.62
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
     "last": 25.0,
     "best": 0.98,
     "hits": 26
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
     "hits": 26
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 14
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 25.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
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
   "t": 26.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The hepatocystic triangle is mostly undissected, and two distinct tubular structures entering the gallbladder are not yet visible. C2: The triangle remains filled with fat and connective tissue with only a small initial opening created by the hook. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; the cystic duct and artery are still obscured by peritoneum and fat.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       261,
       160,
       1000,
       680
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       37,
       358,
       732,
       831
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       603,
       140,
       772
      ],
      "confidence": 0.92
     },
     {
      "label": "irrigator",
      "box_2d": [
       406,
       740,
       497,
       862
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       401,
       637,
       474,
       734
      ],
      "confidence": 0.58
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
     "best": 0.98,
     "hits": 27
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
     "hits": 27
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 26.0,
     "best": 0.9,
     "hits": 15
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 25.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
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
   "t": 27.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Only the peritoneum and superficial fat are being opened, with no distinct tubular structures isolated yet. C2: A small initial opening is being made with the hook, not a full-thickness cleared hepatocystic triangle. C3: The gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still covered by peritoneum and fat.",
    "boxes": [
     {
      "box_2d": [
       271,
       158,
       996,
       679
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       24,
       354,
       705,
       759
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       308,
       737,
       396,
       860
      ],
      "label": "hook",
      "confidence": 0.92
     },
     {
      "box_2d": [
       0,
       606,
       169,
       775
      ],
      "label": "grasper",
      "confidence": 0.85
     },
     {
      "box_2d": [
       342,
       628,
       458,
       729
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
     "best": 0.98,
     "hits": 28
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
     "hits": 28
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 27.0,
     "best": 0.9,
     "hits": 16
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 25.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
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
   "t": 28.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Only a small initial opening in the fat is visible, with neither the cystic duct nor the cystic artery clearly skeletonized as distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle remains largely covered by dense fat and peritoneum, with only one small partial window starting to form. C3: The lower part of the gallbladder is still completely attached to the liver bed by intact peritoneum, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; fat and peritoneum still obscure the cystic duct, cystic artery, and cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       39,
       348,
       690,
       747
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       278,
       159,
       994,
       677
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       573,
       179,
       760
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       351,
       614,
       487,
       699
      ],
      "confidence": 0.73
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
     "best": 0.98,
     "hits": 29
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
     "hits": 29
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 28.0,
     "best": 0.9,
     "hits": 17
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 25.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
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
   "t": 29.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the inferior border structure (likely cystic duct) is partially outlined, and two distinct tubular structures are not yet isolated. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: A shallow groove is started along the liver bed, but the lower third of the gallbladder is not yet lifted off the cystic plate.",
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
      "confidence": 0.6
     },
     {
      "name": "cystic_plate",
      "confidence": 0.5
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; fat and peritoneum still cover the cystic duct and artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       144,
       180,
       997,
       688
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       140,
       547,
       860,
       859
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       755,
       203,
       1000,
       555
      ],
      "confidence": 0.73
     },
     {
      "label": "hook",
      "box_2d": [
       551,
       529,
       784,
       828
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       542,
       163,
       672,
       308
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       76,
       503,
       212,
       813
      ],
      "confidence": 0.88
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
     "best": 0.98,
     "hits": 30
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 30
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 29.0,
     "best": 0.9,
     "hits": 18
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 30.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) is partially outlined, while the rest of the hepatocystic triangle remains covered in fat and peritoneum. C2: The hepatocystic triangle is filled with undissected fat and connective tissue with no full-thickness windows visible. C3: The electrocautery hook is actively scoring the peritoneum along the liver bed, so the lower gallbladder is not yet separated to expose the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.55
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; fat and connective tissue still obscure the cystic duct and cystic artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       183,
       175,
       923,
       558
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       188,
       547,
       810,
       858
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       648,
       471,
       925,
       775
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       629,
       178,
       742,
       285
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       116,
       484,
       250,
       833
      ],
      "confidence": 0.88
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
     "best": 0.98,
     "hits": 31
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
     "hits": 31
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 30.0,
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
   "t": 31.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder; the peritoneum is only beginning to be incised. C2: The hepatocystic triangle remains covered in fat and connective tissue with no full-thickness windows present. C3: The gallbladder remains fully attached to the liver bed, with only a small initial peritoneal incision visible.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun, and the cystic duct and artery are still completely obscured by fat and peritoneum.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       189,
       551,
       959,
       861
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       201,
       207,
       993,
       592
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       123,
       496,
       268,
       831
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       691,
       190,
       802,
       309
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       763,
       423,
       1000,
       685
      ],
      "confidence": 0.95
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
    "fat": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.98,
     "hits": 32
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
     "hits": 32
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 31.0,
     "best": 0.9,
     "hits": 20
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 30.0,
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
   "t": 32.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and artery) are not yet isolated or clearly visible entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows dissected. C3: The peritoneum along the lower gallbladder margin is scored and the cystic plate is partially exposed, though the lower third is not yet fully mobilized off the liver bed.",
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
    "reason_if_not": "The hepatocystic triangle has not been cleared of fat and connective tissue to isolate the cystic duct and cystic artery.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       146,
       559,
       914,
       863
      ],
      "confidence": 0.99
     },
     {
      "label": "gallbladder",
      "box_2d": [
       153,
       199,
       866,
       606
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       757,
       420,
       1000,
       693
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       623,
       174,
       745,
       305
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       104,
       499,
       219,
       822
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
     "best": 0.98,
     "hits": 33
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
     "hits": 33
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 21
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 32.0,
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
   "t": 33.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet dissected out as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: The peritoneum along the liver bed is only beginning to be incised and the lower gallbladder is not yet lifted off the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage and the cystic duct and artery remain covered by fat and peritoneum.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       133,
       544,
       929,
       861
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       160,
       202,
       992,
       715
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       75,
       493,
       218,
       822
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       640,
       181,
       766,
       307
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       794,
       413,
       1000,
       622
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
     "best": 0.98,
     "hits": 34
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
     "hits": 34
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 33.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 32.0,
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
   "t": 34.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only a single broad tissue pedicle is visible entering the gallbladder, without two distinct tubular structures isolated. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows cleared. C3: While some separation along the liver bed has started, the lower third of the gallbladder is not fully detached to expose the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.5
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
    "reason_if_not": "Cystic duct and cystic artery are still encased in fat and connective tissue prior to complete dissection.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       133,
       211,
       622,
       568
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       89,
       560,
       696,
       860
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       722,
       219,
       998,
       584
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       70,
       506,
       187,
       814
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       561,
       167,
       702,
       314
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       576,
       470,
       842,
       831
      ],
      "confidence": 0.95
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
    "fat": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.98,
     "hits": 35
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 35
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 34.0,
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
   "t": 35.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are still covered in fat and peritoneal tissue, so two distinct tubular structures are not yet visible. C2: The hepatocystic triangle has not been cleared of fat and connective tissue, with no windows dissected through. C3: A score line has been started along the gallbladder-liver junction, but the lower third of the gallbladder is not yet mobilized off the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; the cystic duct and artery remain concealed within fat and peritoneum.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       127,
       251,
       869,
       567
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       133,
       564,
       917,
       860
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       529,
       163,
       674,
       351
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       73,
       515,
       200,
       816
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       761,
       465,
       999,
       713
      ],
      "confidence": 0.94
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
     "last": 35.0,
     "best": 0.98,
     "hits": 36
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 35.0,
     "best": 0.9,
     "hits": 24
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 34.0,
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
   "t": 36.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are dissected or visible entering the gallbladder yet. C2: The hepatocystic triangle remains completely covered by peritoneum and fat, with the hook just starting the peritoneal incision. C3: The lower gallbladder is still attached to the liver bed with only minimal initial scoring of the peritoneum along the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has barely begun; the cystic duct and artery are still completely encased in fat and peritoneum.",
    "boxes": [
     {
      "box_2d": [
       129,
       341,
       876,
       690
      ],
      "label": "gallbladder",
      "confidence": 0.98
     },
     {
      "box_2d": [
       137,
       158,
       998,
       862
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       613,
       179,
       821,
       461
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       116,
       553,
       237,
       823
      ],
      "label": "grasper",
      "confidence": 0.9
     },
     {
      "box_2d": [
       763,
       479,
       998,
       724
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
    "fat": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.98,
     "hits": 37
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 36.0,
     "best": 0.9,
     "hits": 25
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 34.0,
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
   "t": 37.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and peritoneum, so the cystic duct and artery are not yet skeletonized or clearly identifiable as two distinct tubular structures. C2: Dissection is in an early stage with no full-thickness windows cleared through the hepatocystic triangle. C3: The gallbladder remains largely attached to the liver bed with the inferior margin not yet mobilized to expose the cystic plate.",
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
    "reason_if_not": "Early stage of dissection; fat and peritoneum still obscure the cystic duct, cystic artery, and cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       117,
       333,
       880,
       619
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       133,
       560,
       895,
       856
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       349,
       158,
       998,
       564
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       631,
       180,
       772,
       490
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       112,
       558,
       209,
       822
      ],
      "confidence": 0.6
     },
     {
      "label": "hook",
      "box_2d": [
       735,
       488,
       998,
       737
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
     "best": 0.99,
     "hits": 38
    },
    "liver": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.99,
     "hits": 38
    },
    "fat": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.98,
     "hits": 38
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 38
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 37.0,
     "best": 0.9,
     "hits": 26
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 34.0,
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
   "t": 38.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: No clearly skeletonized tubular structures (cystic duct or artery) are visible entering the gallbladder; the region is covered in fat and peritoneum. C2: The hepatocystic triangle is not cleared, with no full-thickness windows visible through the tissue. C3: A small area of the cystic plate is being exposed along the peritoneal reflection by the hook, but the lower gallbladder is not fully separated from the liver bed.",
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
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection is in an early stage; the cystic duct and cystic artery are still embedded within fat and connective tissue and have not been isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       89,
       541,
       834,
       859
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       102,
       193,
       869,
       563
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       650,
       451,
       982,
       768
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       539,
       163,
       638,
       316
      ],
      "confidence": 0.93
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
    "fat": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.98,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 39
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 38.0,
     "best": 0.9,
     "hits": 27
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 38.0,
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
   "t": 39.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.2
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are still covered in fat and peritoneal tissue, so two distinct tubular structures are not yet visible. C2: The hepatocystic triangle has not been cleared of fat and connective tissue, and no full-thickness windows are open. C3: Initial dissection of the peritoneum along the gallbladder-liver junction has started, exposing a small portion of the cystic plate, but the lower third of the gallbladder is not yet mobilized off the liver bed.",
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
      "name": "cystic_plate",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage; fat and connective tissue still obscure the cystic duct and cystic artery.",
    "boxes": [
     {
      "box_2d": [
       75,
       559,
       927,
       861
      ],
      "label": "liver"
     },
     {
      "box_2d": [
       98,
       201,
       846,
       560
      ],
      "label": "gallbladder"
     },
     {
      "box_2d": [
       689,
       403,
       996,
       735
      ],
      "label": "hook"
     },
     {
      "box_2d": [
       538,
       164,
       683,
       319
      ],
      "label": "grasper"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.99,
     "hits": 40
    },
    "liver": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.99,
     "hits": 40
    },
    "fat": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.98,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 39.0,
     "best": 0.9,
     "hits": 28
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 39.0,
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
   "t": 40.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.45
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized into two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still covered with fat and connective tissue without full-thickness windows. C3: A portion of the cystic plate is exposed along the liver bed, though dissection at the lower margin with the hook is still ongoing.",
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
      "name": "fat",
      "confidence": 0.95
     },
     {
      "name": "connective_tissue",
      "confidence": 0.95
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
    "reason_if_not": "Cystic duct and cystic artery are still obscured by fat and connective tissue during initial triangle dissection.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       78,
       558,
       834,
       860
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       89,
       207,
       802,
       563
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       511,
       161,
       651,
       316
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       638,
       410,
       991,
       781
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
     "best": 0.99,
     "hits": 41
    },
    "liver": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.99,
     "hits": 41
    },
    "fat": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.98,
     "hits": 41
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 29
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 40.0,
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
   "t": 41.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and peritoneum, so two distinct tubular structures entering the gallbladder are not yet isolated. C2: The hook is actively scoring the peritoneum and there are no full-thickness windows cleared through the hepatocystic triangle. C3: A small line of dissection is started along the gallbladder-liver interface, but the lower third of the gallbladder is not yet separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; cystic duct and artery remain obscured by fat and connective tissue.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       95,
       221,
       755,
       553
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       87,
       550,
       882,
       863
      ],
      "confidence": 0.97
     },
     {
      "label": "liver",
      "box_2d": [
       662,
       187,
       1000,
       529
      ],
      "confidence": 0.77
     },
     {
      "label": "grasper",
      "box_2d": [
       513,
       161,
       661,
       335
      ],
      "confidence": 0.94
     },
     {
      "label": "irrigator",
      "box_2d": [
       663,
       399,
       997,
       757
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 42
    },
    "liver": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.99,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.98,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 42
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 29.0,
     "best": 0.65,
     "hits": 0
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 40.0,
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
   "t": 42.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct) is clearly isolated and being dissected by the hook, while a second tubular structure is not distinctly visible entering the gallbladder. C2: While the electrocautery hook is creating a window behind the isolated tubular structure, the upper part of the hepatocystic triangle remains filled with fat and connective tissue, preventing a clear view of two full-thickness windows. C3: Some connective tissue of the cystic plate is visible near the liver bed, but the lower third of the gallbladder is not sufficiently separated from the liver to show a hanging gallbladder.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; only one tubular structure is isolated and the cystic artery is not yet clearly identified.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       107,
       167,
       1000,
       861
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       89,
       344,
       696,
       597
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       257,
       158,
       486,
       500
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       658,
       484,
       973,
       781
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       410,
       438,
       792,
       558
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 43
    },
    "liver": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.99,
     "hits": 43
    },
    "fat": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.98,
     "hits": 43
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 43
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 31
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 42.0,
     "best": 0.85,
     "hits": 1
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 40.0,
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
   "t": 43.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one tubular structure (currently on the hook) is clearly visible; a second distinct tubular structure entering the gallbladder is not yet isolated. C2: The hepatocystic triangle is still filled with fat and connective tissue without clear full-thickness windows between two structures. C3: A small portion of the cystic plate is scored along the liver bed, but the lower third of the gallbladder is not yet fully mobilized.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; only one tubular structure is being dissected with the hook, and the cystic artery and cystic duct are not both distinctly identified.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       80,
       288,
       704,
       589
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       98,
       562,
       834,
       861
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       471,
       170,
       1000,
       542
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       291,
       157,
       486,
       396
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       617,
       444,
       987,
       780
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       427,
       337,
       737,
       477
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 44
    },
    "liver": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.99,
     "hits": 44
    },
    "fat": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.98,
     "hits": 44
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 44
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 32
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 43.0,
     "best": 0.85,
     "hits": 2
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 43.0,
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
   "t": 44.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the prominent cystic duct is clearly delineated, while the cystic artery remains buried in connective and fatty tissue. C2: The hepatocystic triangle is still filled with undissected tissue and no full-thickness windows are open. C3: The lower portion of the gallbladder remains attached to the liver bed, so the cystic plate is not yet exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not isolated and no windows have been created.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       66,
       161,
       996,
       861
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       44,
       224,
       496,
       574
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       478,
       437,
       784,
       850
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       273,
       157,
       445,
       335
      ],
      "confidence": 0.93
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       181,
       468,
       502,
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
     "last": 44.0,
     "best": 0.99,
     "hits": 45
    },
    "liver": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.99,
     "hits": 45
    },
    "fat": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.98,
     "hits": 45
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 45
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 32
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 44.0,
     "best": 0.85,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 43.0,
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
   "t": 45.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a single broad tissue pedicle (likely containing the cystic duct) is visible, with a second distinct tubular structure (cystic artery) not yet clearly isolated. C2: There are no full-thickness windows dissected through the hepatocystic triangle, as fat and connective tissue still obscure the region. C3: The lower portion of the gallbladder remains attached to the liver bed and the electrocautery hook shaft occludes the cystic plate region.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not yet cleared of fat and connective tissue to isolate the cystic duct and artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       14,
       211,
       477,
       568
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       463,
       165,
       1000,
       567
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       44,
       553,
       451,
       858
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       304,
       156,
       479,
       307
      ],
      "confidence": 0.91
     },
     {
      "label": "irrigator",
      "box_2d": [
       410,
       422,
       755,
       859
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
     "best": 0.99,
     "hits": 46
    },
    "liver": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.99,
     "hits": 46
    },
    "fat": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.98,
     "hits": 46
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 46
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 32
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 43.0,
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
   "t": 46.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only one elongated tubular structure (likely the cystic duct) is partially visible below the grasper, while a second distinct tubular structure (cystic artery) is not skeletonized or clearly connected to the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue, and the electrocautery hook is actively dissecting without full-thickness windows visible. C3: While some connective tissue near the liver bed is visible behind the gallbladder neck, the lower gallbladder is not fully separated along its inferior margin to clearly expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; fat and connective tissue obscure the cystic artery and prevent confirmation of the Critical View of Safety.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       36,
       247,
       520,
       565
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       342,
       157,
       528,
       347
      ],
      "confidence": 0.93
     },
     {
      "label": "irrigator",
      "box_2d": [
       439,
       471,
       747,
       856
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       498,
       178,
       997,
       606
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       4,
       575,
       474,
       856
      ],
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.99,
     "hits": 47
    },
    "liver": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.99,
     "hits": 47
    },
    "fat": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.98,
     "hits": 47
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 32
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 46.0,
     "best": 0.85,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 46.0,
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
   "t": 47.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and connective tissue, and two distinct tubular structures are not yet isolated. C2: No full-thickness windows are visible through the hepatocystic triangle as hook dissection of the fatty tissue is ongoing. C3: The lower gallbladder is not clearly separated from the liver bed to expose the cystic plate, and the electrocautery hook obscures part of the region.",
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
    "reason_if_not": "The cystic duct and cystic artery are still encased in fat and connective tissue and have not been fully dissected.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       33,
       225,
       492,
       583
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       362,
       157,
       545,
       332
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       422,
       471,
       722,
       860
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       560,
       188,
       997,
       601
      ],
      "confidence": 0.91
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       533,
       445,
       858
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
     "hits": 48
    },
    "liver": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.99,
     "hits": 48
    },
    "fat": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.98,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 48
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 32
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 47.0,
     "best": 0.85,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 46.0,
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
   "t": 48.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Only a single pedicle/tubular structure is clearly visible below the grasper, without two distinct separated tubular structures seen entering the gallbladder. C2: The hepatocystic triangle is still covered with fat and connective tissue, with only a tiny potential opening under the grasper tip rather than clear full-thickness windows. C3: The lower portion of the gallbladder is dissected off the liver bed, exposing a pale cystic plate area between the gallbladder and liver.",
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
      "confidence": 0.8
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not sufficiently cleared of fat and connective tissue to isolate and confirm both the cystic duct and cystic artery.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       58,
       232,
       502,
       580
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       75,
       175,
       996,
       861
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       404,
       156,
       573,
       344
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 49
    },
    "liver": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.99,
     "hits": 49
    },
    "fat": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.98,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 49
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 32
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 48.0,
     "best": 0.85,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 48.0,
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
   "t": 49.0,
   "label": {
    "cvs": {
     "c1": 0.15,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: A prominent cystic duct structure is visible inferiorly, and a potential second structure is partially gripped by the left instrument, but two distinct tubular structures are not clearly skeletonized. C2: There are no full-thickness windows cleared through the hepatocystic triangle, as dense connective tissue and fat still bridge the gap to the liver bed. C3: The electrocautery hook is actively dissecting the gallbladder off the cystic plate, which is only partially exposed and obscured by the instrument.",
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
    "reason_if_not": "The hepatocystic triangle is not fully cleared of fat and connective tissue to isolate two distinct tubular structures and full-thickness windows.",
    "boxes": [
     {
      "box_2d": [
       410,
       482,
       721,
       856
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       421,
       158,
       526,
       284
      ],
      "label": "grasper",
      "confidence": 0.88
     },
     {
      "box_2d": [
       66,
       164,
       989,
       745
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       89,
       532,
       872,
       857
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       588,
       179,
       1000,
       558
      ],
      "label": "liver",
      "confidence": 0.89
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 50
    },
    "liver": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.99,
     "hits": 50
    },
    "fat": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.98,
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 50
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 32
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 49.0,
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
   "t": 50.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) is partially visible, while the region above it remains covered by fat and peritoneum. C2: The hepatocystic triangle is filled with undissected fat and connective tissue with no clear windows. C3: The lower gallbladder has not yet been separated from the liver bed to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; fat and connective tissue obscure the cystic artery and cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       26,
       178,
       433,
       569
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       66,
       488,
       507,
       860
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       538,
       172,
       996,
       592
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       419,
       430,
       784,
       856
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       378,
       156,
       537,
       301
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.99,
     "hits": 51
    },
    "liver": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.99,
     "hits": 51
    },
    "fat": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.98,
     "hits": 51
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 51
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 32
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 50.0,
     "best": 0.85,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 49.0,
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
   "t": 51.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the cystic duct is partially outlined while a second distinct tubular structure (cystic artery) is not yet clearly isolated entering the gallbladder. C2: The hepatocystic triangle is still filled with fat and connective tissue, with only a tiny initial opening being created by the hook rather than full-thickness windows. C3: The lower portion of the gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
      "name": "fat",
      "confidence": 0.95
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; fat and connective tissue still obscure the cystic artery and cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       46,
       243,
       534,
       609
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       33,
       519,
       617,
       861
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       574,
       169,
       938,
       632
      ],
      "confidence": 0.81
     },
     {
      "label": "grasper",
      "box_2d": [
       420,
       153,
       582,
       353
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       528,
       496,
       812,
       844
      ],
      "confidence": 0.95
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.99,
     "hits": 52
    },
    "liver": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.99,
     "hits": 52
    },
    "fat": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.98,
     "hits": 52
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 52
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 33
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 51.0,
     "best": 0.85,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 49.0,
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
   "t": 52.0,
   "label": {
    "cvs": {
     "c1": 0.2,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: A thick tubular bundle (likely cystic duct) and a thinner band above it are partially dissected, but they are not yet clearly isolated as two distinct tubular structures entering the gallbladder. C2: There is a small gap between the upper band and the lower pedicle, but fat and connective tissue still obscure a full-thickness view across the hepatocystic triangle. C3: The gallbladder Remains attached to the liver bed with the cystic plate not clearly exposed below the inferior margin.",
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
      "confidence": 0.45
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
    "reason_if_not": "The hepatocystic triangle is still covered in fat and connective tissue, preventing definitive confirmation of the cystic duct, cystic artery, and cystic plate.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       46,
       269,
       577,
       618
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       42,
       576,
       582,
       859
      ],
      "confidence": 0.93
     },
     {
      "label": "liver",
      "box_2d": [
       569,
       174,
       970,
       637
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       419,
       154,
       580,
       363
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       523,
       581,
       775,
       847
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       569,
       176,
       970,
       635
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.99,
     "hits": 53
    },
    "liver": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.99,
     "hits": 53
    },
    "fat": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.98,
     "hits": 53
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 53
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 33
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 52.0,
     "best": 0.85,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.45,
     "hits": 0
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
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
   "t": 53.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one tubular structure (likely the cystic duct) is partially visible under the hook, while the second tubular structure is not yet dissected out from the surrounding fat. C2: The hepatocystic triangle is still filled with adipose and connective tissue, with no full-thickness windows visible. C3: The lower portion of the gallbladder remains attached to the liver bed, so the cystic plate is not exposed.",
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
    "reason_if_not": "The hepatocystic triangle is not yet cleared of fat and connective tissue to isolate both the cystic duct and cystic artery.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       46,
       560,
       650,
       860
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       584,
       175,
       971,
       626
      ],
      "confidence": 0.93
     },
     {
      "label": "gallbladder",
      "box_2d": [
       46,
       256,
       552,
       607
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       412,
       155,
       574,
       352
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       516,
       456,
       848,
       833
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.99,
     "hits": 54
    },
    "liver": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.99,
     "hits": 54
    },
    "fat": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.98,
     "hits": 54
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 54
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 53.0,
     "best": 0.9,
     "hits": 34
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 53.0,
     "best": 0.85,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.45,
     "hits": 0
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
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
   "t": 54.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Only one thick structure (likely the cystic duct/infundibulum) is visible, while the cystic artery is still covered by fat and connective tissue. C2: The hepatocystic triangle is still filled with adipose and connective tissue, with the electrocautery hook actively dissecting and no full-thickness windows established. C3: Some connective tissue on the liver bed is visible behind the gallbladder, but the lower third of the gallbladder is not yet fully detached to clearly show the cystic plate along the entire inferior margin.",
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
      "confidence": 0.9
     },
     {
      "name": "cystic_plate",
      "confidence": 0.5
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
    "reason_if_not": "The hepatocystic triangle is still covered in fat and connective tissue, preventing clear identification of both the cystic duct and cystic artery.",
    "boxes": [
     {
      "box_2d": [
       396,
       155,
       560,
       369
      ],
      "confidence": 0.98,
      "label": "grasper"
     },
     {
      "box_2d": [
       512,
       496,
       775,
       846
      ],
      "confidence": 0.97,
      "label": "hook"
     },
     {
      "box_2d": [
       49,
       276,
       525,
       614
      ],
      "confidence": 0.94,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       36,
       574,
       595,
       863
      ],
      "confidence": 0.95,
      "label": "liver"
     },
     {
      "box_2d": [
       556,
       172,
       959,
       588
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
     "last": 54.0,
     "best": 0.99,
     "hits": 55
    },
    "liver": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.99,
     "hits": 55
    },
    "fat": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.98,
     "hits": 55
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 55
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 25.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.45,
     "hits": 0
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
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
   "t": 55.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.25
    },
    "cvs_evidence": "C1: The cystic duct below and a thinner structure above appear as two tubular elements entering the gallbladder, though considerable fat remains. C2: One small full-thickness window is being opened with the hook between the two structures, while a second window to the cystic plate is not yet cleared. C3: The inferior gallbladder remains largely attached to the liver bed and the cystic plate is not exposed along the whole lower margin.",
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
      "confidence": 0.65
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with fat still covering the upper part of the triangle and the lower gallbladder not lifted off the liver bed.",
    "boxes": [
     {
      "box_2d": [
       75,
       266,
       575,
       614
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       78,
       557,
       684,
       861
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       569,
       176,
       990,
       590
      ],
      "label": "liver",
      "confidence": 0.88
     },
     {
      "box_2d": [
       415,
       154,
       586,
       368
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       584,
       530,
       871,
       828
      ],
      "label": "irrigator",
      "confidence": 0.94
     },
     {
      "box_2d": [
       540,
       468,
       627,
       534
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
     "last": 55.0,
     "best": 0.99,
     "hits": 56
    },
    "liver": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.99,
     "hits": 56
    },
    "fat": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.98,
     "hits": 56
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 56
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 35
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 55.0,
     "best": 0.85,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 55.0,
     "best": 0.85,
     "hits": 2
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 55.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 55.0,
     "best": 0.65,
     "hits": 0
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
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
   "t": 56.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.05
    },
    "cvs_evidence": "C1: A small window is created between the lower cystic duct-like structure and an upper band, giving a partial two-structure appearance, though fat still obscures the full tubular outlines. C2: One small full-thickness window is opened by the hook, but the rest of the hepatocystic triangle remains covered in fat and connective tissue without a second window to the cystic plate. C3: The lower part of the gallbladder is not yet dissected off the liver bed to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with significant fat covering the upper triangle.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       47,
       260,
       527,
       571
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       421,
       155,
       597,
       366
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       554,
       529,
       846,
       804
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       527,
       470,
       606,
       525
      ],
      "confidence": 0.85
     },
     {
      "label": "liver",
      "box_2d": [
       614,
       187,
       996,
       648
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       577,
       609,
       858
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.99,
     "hits": 57
    },
    "liver": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.99,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.98,
     "hits": 57
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 57
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 56.0,
     "best": 0.9,
     "hits": 36
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 56.0,
     "best": 0.85,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 56.0,
     "best": 0.92,
     "hits": 3
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 55.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 56.0,
     "best": 0.65,
     "hits": 0
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
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
   "t": 57.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.35,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the thicker lower cystic duct and thinner upper cystic artery) are visible entering the gallbladder neck with a small window between them. C2: While there is a small full-thickness window between the duct and artery, the space above the artery toward the cystic plate is not fully cleared into a clear window. C3: The cystic plate is partially exposed behind the gallbladder, though it is not fully separated along the entire inferior margin to create a complete hanging gallbladder appearance.",
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
      "confidence": 0.88
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       26,
       228,
       646,
       620
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       18,
       558,
       747,
       861
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       430,
       158,
       587,
       342
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       530,
       688,
       749,
       854
      ],
      "confidence": 0.91
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       504,
       442,
       596,
       498
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.99,
     "hits": 58
    },
    "liver": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.99,
     "hits": 58
    },
    "fat": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.98,
     "hits": 58
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 58
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 56.0,
     "best": 0.9,
     "hits": 36
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 57.0,
     "best": 0.92,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 57.0,
     "best": 0.92,
     "hits": 4
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 5
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 57.0,
     "best": 0.88,
     "hits": 1
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
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
   "t": 58.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.35
    },
    "cvs_evidence": "C1: Only the cystic duct is partially outlined at the bottom while the upper part of the triangle remains covered in fat and connective tissue, so two distinct tubular structures are not yet visible. C2: The hook is actively dissecting into the hepatocystic triangle, which is still filled with adipose tissue and lacks full-thickness windows. C3: Some connective tissue of the cystic plate is visible behind the gallbladder neck, though dissection along the lower margin is incomplete and partially obscured by the hook.",
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
    "reason_if_not": "The hepatocystic triangle is still covered in fat and connective tissue, preventing clear identification of both the cystic duct and cystic artery.",
    "boxes": [
     {
      "box_2d": [
       27,
       213,
       537,
       574
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       561,
       607,
       863
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       604,
       172,
       981,
       610
      ],
      "label": "liver",
      "confidence": 0.85
     },
     {
      "box_2d": [
       457,
       157,
       606,
       323
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       520,
       430,
       816,
       842
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
     "last": 58.0,
     "best": 0.99,
     "hits": 59
    },
    "liver": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.99,
     "hits": 59
    },
    "fat": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.98,
     "hits": 59
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 59
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 37
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 58.0,
     "best": 0.92,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 57.0,
     "best": 0.92,
     "hits": 4
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 58.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 57.0,
     "best": 0.88,
     "hits": 1
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
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
   "t": 59.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.35,
     "c3": 0.15
    },
    "cvs_evidence": "C1: The cystic duct is visible below and a thinner upper strand resembling the cystic artery is being dissected by the hook, though fat still obscures the upper structure's insertion. C2: A window is visible between the lower tubular structure and the upper strand where the hook is placed, but the upper window between the artery and cystic plate is not yet cleared. C3: The lower gallbladder remains largely attached to the liver bed with no clearly exposed hanging cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with fat and connective tissue still covering the upper part of the triangle.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       529,
       804,
       858
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       50,
       196,
       561,
       550
      ],
      "confidence": 0.92
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       227,
       477,
       706,
       626
      ],
      "confidence": 0.8
     },
     {
      "label": "grasper",
      "box_2d": [
       524,
       161,
       678,
       319
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       655,
       455,
       938,
       792
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       595,
       410,
       693,
       491
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 60
    },
    "liver": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.99,
     "hits": 60
    },
    "fat": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.98,
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 60
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 37
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 59.0,
     "best": 0.92,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 59.0,
     "best": 0.92,
     "hits": 5
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 58.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 59.0,
     "best": 0.88,
     "hits": 1
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
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
   "t": 60.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only the inferior tubular structure (likely cystic duct) is partially delineated, while the superior structure is still encased in fat and connective tissue. C2: One small window is being opened with the hook, but the upper part of the hepatocystic triangle remains filled with fat and undissected tissue. C3: The lower gallbladder is still largely attached to the liver bed and the cystic plate is not fully exposed along the inferior margin.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic artery is not yet isolated from surrounding fat and connective tissue, and the cystic plate is not fully exposed.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       34,
       180,
       990,
       858
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       63,
       185,
       511,
       574
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       457,
       432,
       724,
       855
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       476,
       158,
       614,
       299
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       499,
       396,
       648,
       477
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
     "hits": 61
    },
    "liver": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.99,
     "hits": 61
    },
    "fat": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.98,
     "hits": 61
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 61
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 37
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 60.0,
     "best": 0.92,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 60.0,
     "best": 0.92,
     "hits": 6
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 58.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 59.0,
     "best": 0.88,
     "hits": 1
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
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
   "t": 61.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder with a clear window between them. C2: One clear full-thickness window is visible between the duct and artery, while the hook is dissecting the space between the artery and the cystic plate, making the second window borderline. C3: The lower part of the gallbladder is still largely attached to the liver bed with fat and connective tissue covering the cystic plate.",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       44,
       210,
       981,
       854
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       94,
       161,
       629,
       527
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       538,
       434,
       809,
       851
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       596,
       324,
       740,
       407
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.99,
     "hits": 62
    },
    "liver": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.99,
     "hits": 62
    },
    "fat": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.98,
     "hits": 62
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 62
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 37
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 61.0,
     "best": 0.92,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 7
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 61.0,
     "best": 0.9,
     "hits": 2
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
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
   "t": 62.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder. C2: A clear full-thickness window is visible between the duct and artery, and the hook is dissecting the space between the artery and the cystic plate. C3: The lower part of the gallbladder is not yet sufficiently lifted off the liver bed to expose the cystic plate along the entire inferior margin.",
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
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "C3 is not achieved as the lower third of the gallbladder is still attached to the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       23,
       538,
       718,
       860
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       83,
       163,
       629,
       551
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       588,
       423,
       895,
       812
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       589,
       332,
       734,
       415
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 63
    },
    "liver": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.99,
     "hits": 63
    },
    "fat": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.98,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 63
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 37
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 62.0,
     "best": 0.92,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 8
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 62.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 62.0,
     "best": 0.9,
     "hits": 3
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
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
   "t": 63.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder. C2: One full-thickness window is visible between the duct and artery, while the hook is actively dissecting the upper window between the artery and cystic plate which is not yet fully open. C3: The lower portion of the gallbladder is dissected off the liver bed, exposing the cystic plate behind the hook.",
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
    "can_confirm_anatomy": false,
    "reason_if_not": "The window between the cystic artery and cystic plate is still being dissected and is not yet a full-thickness window.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       21,
       529,
       836,
       860
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       63,
       160,
       626,
       527
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       418,
       434,
       637,
       859
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       572,
       323,
       716,
       412
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.99,
     "hits": 64
    },
    "liver": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.99,
     "hits": 64
    },
    "fat": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.98,
     "hits": 64
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 64
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 37
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 63.0,
     "best": 0.92,
     "hits": 20
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 63.0,
     "best": 0.85,
     "hits": 7
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 63.0,
     "best": 0.9,
     "hits": 4
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
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
     "since": 61.0
    }
   ]
  },
  {
   "t": 64.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct and cystic artery) are clearly dissected and seen entering the gallbladder. Two windows are visible in the hepatocystic triangle, with one large full-thickness window between the duct and artery and clearance between the artery and cystic plate. The lower portion of the gallbladder is dissected away from the liver bed, exposing the cystic plate behind the artery.",
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
      "confidence": 0.88
     },
     {
      "name": "hepatocystic_window",
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
       18,
       545,
       770,
       858
      ],
      "confidence": 0.99
     },
     {
      "label": "gallbladder",
      "box_2d": [
       66,
       173,
       689,
       535
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       185,
       477,
       769,
       650
      ],
      "confidence": 0.77
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       611,
       348,
       752,
       436
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       737,
       663,
       850,
       809
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       652,
       181,
       712,
       260
      ],
      "confidence": 0.58
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 65
    },
    "liver": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.99,
     "hits": 65
    },
    "fat": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.98,
     "hits": 65
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 65
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 37
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 21
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 10
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.88,
     "hits": 8
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 64.0,
     "best": 0.92,
     "hits": 5
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.45
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are dissected and seen entering the gallbladder. A full-thickness window is clearly visible between the duct and artery, though the upper space between the artery and cystic plate still has connective tissue being divided by the hook. The lower gallbladder is partially mobilized off the liver bed exposing some cystic plate, though the upper attachment is still being dissected.",
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
      "confidence": 0.92
     },
     {
      "name": "cystic_plate",
      "confidence": 0.78
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
       37,
       523,
       682,
       858
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       153,
       178,
       688,
       518
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       584,
       480,
       836,
       828
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       673,
       318,
       819,
       412
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       12,
       480,
       158,
       735
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.99,
     "hits": 66
    },
    "liver": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.99,
     "hits": 66
    },
    "fat": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.98,
     "hits": 66
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 66
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 37
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 22
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 11
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 65.0,
     "best": 0.88,
     "hits": 9
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 65.0,
     "best": 0.92,
     "hits": 6
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.9,
     "c2": 0.9,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct on the left and cystic artery in the center) are clearly dissected and seen entering the gallbladder. C2: Two full-thickness windows are visible through the hepatocystic triangle with the liver background clearly seen behind both structures. C3: Only a small portion of the lower gallbladder is separated from the liver bed, so the cystic plate is not fully exposed along the entire inferior margin.",
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower third of the gallbladder is not yet sufficiently separated from the cystic plate to achieve the complete Critical View of Safety.",
    "boxes": [
     {
      "box_2d": [
       66,
       546,
       876,
       858
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       98,
       216,
       702,
       563
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       751,
       330,
       999,
       689
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       678,
       186,
       772,
       299
      ],
      "label": "grasper",
      "confidence": 0.82
     },
     {
      "box_2d": [
       647,
       374,
       776,
       463
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
     "last": 66.0,
     "best": 0.99,
     "hits": 67
    },
    "liver": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.99,
     "hits": 67
    },
    "fat": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.98,
     "hits": 67
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 67
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 37
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 23
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 12
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 66.0,
     "best": 0.88,
     "hits": 10
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 66.0,
     "best": 0.92,
     "hits": 7
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c2": 0.9,
     "c3": 0.85
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct and cystic artery) are clearly dissected and seen entering the base of the gallbladder. There is a clear full-thickness window between the cystic duct and cystic artery, and a large dissected space above the artery against the cystic plate. The lower portion of the gallbladder is separated from the liver bed, exposing the whitish-yellow cystic plate.",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       67,
       544,
       903,
       861
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       109,
       178,
       675,
       541
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       649,
       344,
       794,
       436
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       239,
       477,
       803,
       609
      ],
      "confidence": 0.75
     },
     {
      "label": "hook",
      "box_2d": [
       919,
       592,
       998,
       693
      ],
      "confidence": 0.9
     },
     {
      "label": "grasper",
      "box_2d": [
       47,
       511,
       179,
       674
      ],
      "confidence": 0.6
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 68
    },
    "liver": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.99,
     "hits": 68
    },
    "fat": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.98,
     "hits": 68
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 68
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 67.0,
     "best": 0.9,
     "hits": 38
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 24
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 13
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 67.0,
     "best": 0.88,
     "hits": 11
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 67.0,
     "best": 0.92,
     "hits": 8
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c3": 0.8
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the base of the gallbladder. C2: The hepatocystic triangle is cleared of fat, showing a full-thickness window between the duct and artery and clearance behind the artery toward the cystic plate. C3: The lower part of the gallbladder is dissected away from the liver bed, exposing the cystic plate behind the artery.",
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
      "label": "hook",
      "box_2d": [
       555,
       553,
       755,
       848
      ],
      "confidence": 0.99
     },
     {
      "label": "liver",
      "box_2d": [
       49,
       518,
       865,
       861
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       90,
       166,
       674,
       532
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       607,
       328,
       746,
       417
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.99,
     "hits": 69
    },
    "liver": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.99,
     "hits": 69
    },
    "fat": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.98,
     "hits": 69
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 69
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 67.0,
     "best": 0.9,
     "hits": 38
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 25
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 68.0,
     "best": 0.88,
     "hits": 12
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 68.0,
     "best": 0.92,
     "hits": 9
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 66.0
    },
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
     "since": 66.0
    }
   ]
  },
  {
   "t": 69.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and upper cystic artery) are clearly dissected and seen entering the gallbladder. C2: The hepatocystic triangle is cleared of fat and connective tissue, creating a full-thickness window between the duct and artery and exposing the cystic plate behind the artery. C3: The lower third of the gallbladder is dissected away from the liver bed, clearly exposing the whitish/yellowish cystic plate.",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       86,
       536,
       900,
       859
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       88,
       180,
       634,
       541
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       624,
       359,
       750,
       448
      ],
      "confidence": 0.77
     },
     {
      "label": "grasper",
      "box_2d": [
       611,
       171,
       706,
       269
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 70
    },
    "liver": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.99,
     "hits": 70
    },
    "fat": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.98,
     "hits": 70
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 70
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 69.0,
     "best": 0.9,
     "hits": 39
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 26
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.88,
     "hits": 13
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 69.0,
     "best": 0.92,
     "hits": 10
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 66.0
    },
    "c3": {
     "on": true,
     "since": 67.0
    },
    "cvs": {
     "on": true,
     "since": 67.0
    }
   },
   "events": [
    {
     "what": "c3",
     "on": true,
     "since": 67.0
    },
    {
     "what": "cvs",
     "on": true,
     "since": 67.0
    }
   ]
  },
  {
   "t": 70.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.75
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are clearly seen connecting to the gallbladder. There is a clear full-thickness window between the duct and artery, though connective tissue still partially fills the upper space between the artery and the cystic plate. The lower portion of the gallbladder is dissected away from the liver bed, exposing the cystic plate behind the artery.",
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
      "name": "cystic_plate",
      "confidence": 0.85
     },
     {
      "name": "hepatocystic_window",
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
       62,
       514,
       833,
       856
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       89,
       163,
       682,
       520
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       753,
       623,
       917,
       781
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       642,
       301,
       789,
       403
      ],
      "confidence": 0.72
     },
     {
      "label": "grasper",
      "box_2d": [
       27,
       491,
       168,
       793
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.99,
     "hits": 71
    },
    "liver": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.99,
     "hits": 71
    },
    "fat": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 71
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 71
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 70.0,
     "best": 0.9,
     "hits": 40
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 27
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 70.0,
     "best": 0.88,
     "hits": 14
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 11
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 66.0
    },
    "c3": {
     "on": true,
     "since": 67.0
    },
    "cvs": {
     "on": true,
     "since": 67.0
    }
   },
   "events": []
  },
  {
   "t": 71.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.65,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the base of the gallbladder. C2: A clear full-thickness window is dissected between the cystic duct and cystic artery, and a deep recess is formed between the artery and the cystic plate, though the upper window does not completely penetrate through. C3: The lower part of the gallbladder remains largely attached to the liver bed with minimal cystic plate exposure along the inferior margin.",
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
    "reason_if_not": "The lower third of the gallbladder is not yet sufficiently mobilized off the cystic plate (C3 not achieved).",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       77,
       520,
       913,
       860
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       107,
       167,
       868,
       517
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       667,
       307,
       818,
       417
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       650,
       235,
       895,
       456
      ],
      "confidence": 0.72
     },
     {
      "label": "grasper",
      "box_2d": [
       24,
       494,
       174,
       798
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.99,
     "hits": 72
    },
    "liver": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.99,
     "hits": 72
    },
    "fat": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.98,
     "hits": 72
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 72
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 70.0,
     "best": 0.9,
     "hits": 40
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 71.0,
     "best": 0.88,
     "hits": 14
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 12
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 66.0
    },
    "c3": {
     "on": true,
     "since": 67.0
    },
    "cvs": {
     "on": true,
     "since": 67.0
    }
   },
   "events": []
  },
  {
   "t": 72.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only one window is partially dissected at the bottom left, and two distinct tubular structures entering the gallbladder are not yet isolated. C2: There is one small window visible at the bottom left, but the rest of the hepatocystic triangle remains covered in fat and connective tissue. C3: The gallbladder remains largely attached to the liver bed with the hook cautery just beginning to incise the peritoneum along the medial border.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; the cystic duct and artery are still obscured by fat and connective tissue.",
    "boxes": [
     {
      "box_2d": [
       116,
       487,
       853,
       862
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       136,
       163,
       990,
       509
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       683,
       460,
       963,
       762
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       66,
       461,
       204,
       827
      ],
      "label": "grasper",
      "confidence": 0.88
     },
     {
      "box_2d": [
       723,
       254,
       892,
       370
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
     "last": 72.0,
     "best": 0.99,
     "hits": 73
    },
    "liver": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.99,
     "hits": 73
    },
    "fat": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.98,
     "hits": 73
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 73
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 72.0,
     "best": 0.9,
     "hits": 41
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 71.0,
     "best": 0.88,
     "hits": 14
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 12
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 66.0
    },
    "c3": {
     "on": true,
     "since": 67.0
    },
    "cvs": {
     "on": true,
     "since": 67.0
    }
   },
   "events": []
  },
  {
   "t": 73.0,
   "label": {
    "cvs": {
     "c1": 0.06,
     "c2": 0.06,
     "c3": 0.03
    },
    "cvs_evidence": "C1: Only one window is dissected near the lower part, and two clearly isolated tubular structures connected to the gallbladder are not yet visible due to covering fat. C2: There is one full-thickness window visible below the hook, but the upper part of the hepatocystic triangle remains filled with fat and connective tissue. C3: The gallbladder remains completely attached to the liver bed along its medial/inferior margin, with no separation exposing the cystic plate.",
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
      "name": "fat",
      "confidence": 0.92
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Hepatocystic triangle is still mostly covered by fat and connective tissue, and the lower gallbladder is not separated from the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       132,
       487,
       952,
       863
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       174,
       165,
       738,
       524
      ],
      "confidence": 0.88
     },
     {
      "label": "hook",
      "box_2d": [
       718,
       368,
       996,
       707
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       66,
       458,
       224,
       832
      ],
      "confidence": 0.89
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       751,
       260,
       912,
       368
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.99,
     "hits": 74
    },
    "liver": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.99,
     "hits": 74
    },
    "fat": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.98,
     "hits": 74
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 74
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 73.0,
     "best": 0.9,
     "hits": 42
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 28
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 71.0,
     "best": 0.88,
     "hits": 14
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 12
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 66.0
    },
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
   "t": 74.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two tubular structures (likely cystic duct and artery) are partially skeletonized with a window between them, though the upper one is still covered by fatty tissue. C2: One clear window is seen between the two lower structures, and the hook is dissecting the space above the upper structure, which is not yet a full-thickness window. C3: The lower gallbladder is still largely attached to the liver bed with minimal cystic plate exposure.",
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
      "name": "cystic_plate",
      "confidence": 0.65
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
    "reason_if_not": "The hepatocystic triangle is not fully cleared of fat and connective tissue above the cystic artery, and the lower gallbladder is not adequately mobilized off the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       107,
       499,
       868,
       859
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       132,
       162,
       996,
       555
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       676,
       429,
       982,
       756
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       44,
       462,
       195,
       805
      ],
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.99,
     "hits": 75
    },
    "liver": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.99,
     "hits": 75
    },
    "fat": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.98,
     "hits": 75
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 75
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 74.0,
     "best": 0.9,
     "hits": 43
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 29
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.88,
     "hits": 14
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 13
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
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
   "t": 75.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.05
    },
    "cvs_evidence": "Two tubular-like strands are visible at the lower portion of the hepatocystic triangle below a window, though the upper region remains covered in fat. A full-thickness window is clearly open between the lower two strands, showing liver behind it, but the space between the upper strand and the cystic plate is not fully cleared through. The gallbladder remains broadly attached to the liver bed with no detachment of its lower third exposing the cystic plate.",
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
    "reason_if_not": "The lower part of the gallbladder is not yet separated from the cystic plate, and the upper hepatocystic triangle requires further clearance to confirm the full Critical View of Safety.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       93,
       495,
       966,
       858
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       635,
       576,
       851,
       815
      ],
      "confidence": 0.96
     },
     {
      "label": "gallbladder",
      "box_2d": [
       133,
       162,
       716,
       516
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       33,
       464,
       185,
       817
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       707,
       260,
       864,
       367
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.99,
     "hits": 76
    },
    "liver": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.99,
     "hits": 76
    },
    "fat": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.98,
     "hits": 76
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 76
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 44
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 30
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.88,
     "hits": 14
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 14
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.85,
     "c2": 0.35,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are visible entering the lower gallbladder. C2: One clear full-thickness window is seen between the two structures, while the space between the upper structure and the cystic plate is still partly filled with yellow connective tissue rather than a second open window. C3: The lower third of the gallbladder is dissected away from the liver bed, exposing the pinkish-yellow cystic plate behind it.",
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
       79,
       502,
       934,
       856
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       99,
       161,
       701,
       502
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       650,
       301,
       794,
       401
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       20,
       481,
       176,
       808
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.99,
     "hits": 77
    },
    "liver": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.99,
     "hits": 77
    },
    "fat": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.98,
     "hits": 77
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 77
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 44
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 31
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 76.0,
     "best": 0.88,
     "hits": 15
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 15
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c2": 0.2,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are visible entering the gallbladder at the bottom left. C2: There is one clear window between the two tubular structures, but the tissue between the medial structure (artery) and the liver bed is still intact and being dissected by the hook, so the second window is not yet full-thickness. C3: The lower part of the gallbladder is still attached to the liver bed by peritoneum and fat, so the cystic plate is not yet exposed.",
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
    "reason_if_not": "The hepatocystic triangle is not fully cleared behind the cystic artery and the lower gallbladder is not yet separated from the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       122,
       492,
       861,
       864
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       142,
       168,
       702,
       517
      ],
      "confidence": 0.9
     },
     {
      "label": "hook",
      "box_2d": [
       708,
       459,
       978,
       755
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       47,
       457,
       201,
       813
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       722,
       269,
       883,
       386
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
     "best": 0.99,
     "hits": 78
    },
    "liver": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.99,
     "hits": 78
    },
    "fat": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.98,
     "hits": 78
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 78
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 75.0,
     "best": 0.9,
     "hits": 44
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 32
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 76.0,
     "best": 0.88,
     "hits": 15
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 16
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) appear delineated at the base of the gallbladder with a window between them. C2: A full-thickness window is clearly visible between the cystic duct and cystic artery, though the window between the artery and the cystic plate is still being dissected by the hook. C3: The lower third of the gallbladder remains largely attached to the liver bed with only early dissection of the cystic plate visible near the hook.",
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
    "reason_if_not": "The hepatocystic triangle dissection is incomplete above the cystic artery and the lower gallbladder is not yet elevated off the cystic plate.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       146,
       510,
       936,
       863
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       168,
       178,
       996,
       565
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       803,
       455,
       999,
       714
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       96,
       469,
       226,
       822
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       743,
       294,
       889,
       396
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.99,
     "hits": 79
    },
    "liver": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.99,
     "hits": 79
    },
    "fat": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 79
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 79
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 78.0,
     "best": 0.9,
     "hits": 45
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 33
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 78.0,
     "best": 0.88,
     "hits": 16
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 17
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c1": 0.15,
     "c2": 0.25,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Only one small window creates a tubular-like band at the lower left, while a second distinct tubular structure entering the gallbladder is not yet isolated from the overlying fat and peritoneum. C2: One small full-thickness window is visible in the lower hepatocystic triangle, but the upper part of the triangle remains covered by fat and connective tissue. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing a broad area of whitish cystic plate.",
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
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "cystic_duct",
      "confidence": 0.6
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the upper hepatocystic triangle; only one window is opened and two distinct tubular structures are not yet clearly isolated.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       167,
       477,
       992,
       860
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       172,
       161,
       990,
       564
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       728,
       258,
       867,
       355
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       87,
       461,
       237,
       831
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
     "hits": 80
    },
    "liver": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.99,
     "hits": 80
    },
    "fat": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.98,
     "hits": 80
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 80
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 79.0,
     "best": 0.9,
     "hits": 46
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 33
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.88,
     "hits": 17
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 17
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are visible at the bottom entering the gallbladder neck. C2: A clear full-thickness window is dissected between the cystic duct and cystic artery, though the upper window between the artery and cystic plate is still partially obscured by connective tissue. C3: The gallbladder is still closely attached to the liver bed along much of its inferior margin, with only limited cystic plate exposure.",
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
      "confidence": 0.9
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.92
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
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower gallbladder is not sufficiently dissected off the cystic plate to fully clear the upper hepatocystic triangle and confirm no other structures enter the gallbladder.",
    "boxes": [
     {
      "box_2d": [
       156,
       496,
       991,
       862
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       174,
       179,
       1000,
       648
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       75,
       460,
       238,
       828
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       754,
       330,
       910,
       428
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
     "last": 80.0,
     "best": 0.99,
     "hits": 81
    },
    "liver": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.99,
     "hits": 81
    },
    "fat": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.98,
     "hits": 81
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 81
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 80.0,
     "best": 0.9,
     "hits": 47
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 34
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 80.0,
     "best": 0.88,
     "hits": 18
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 18
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c2": 0.65,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the lower gallbladder. C2: A clear full-thickness window is visible between the two tubular structures, though the window between the artery and the cystic plate is not clearly opened. C3: The lower portion of the gallbladder remains attached to the liver bed with no significant exposure of the cystic plate.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder is not yet mobilized off the cystic plate (C3 not achieved) and the upper hepatocystic window above the artery is not fully dissected.",
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       155,
       485,
       959,
       863
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       153,
       192,
       868,
       526
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       83,
       489,
       218,
       824
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       712,
       386,
       850,
       471
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.99,
     "hits": 82
    },
    "liver": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.99,
     "hits": 82
    },
    "fat": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.98,
     "hits": 82
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 82
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 48
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 35
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 80.0,
     "best": 0.88,
     "hits": 18
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 19
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c2": 0.65,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct anteriorly/inferiorly and cystic artery posteriorly/superiorly) are clearly isolated and seen entering the gallbladder. C2: A clear full-thickness window is visible between the cystic duct and cystic artery, and the gallbladder is lifted off the cystic plate, though the upper window between the artery and liver bed is partially obscured by the viewing angle. C3: The lower portion of the gallbladder is dissected free from the liver bed, exposing the whitish fibrous cystic plate along the inferior margin.",
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
      "confidence": 0.9
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "boxes": [
     {
      "box_2d": [
       136,
       515,
       941,
       861
      ],
      "confidence": 0.98,
      "label": "liver"
     },
     {
      "box_2d": [
       146,
       204,
       917,
       545
      ],
      "confidence": 0.95,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       701,
       421,
       840,
       497
      ],
      "confidence": 0.77,
      "label": "hepatocystic_window"
     },
     {
      "box_2d": [
       86,
       502,
       237,
       817
      ],
      "confidence": 0.75,
      "label": "grasper"
     },
     {
      "box_2d": [
       722,
       199,
       767,
       323
      ],
      "confidence": 0.73,
      "label": "grasper"
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.99,
     "hits": 83
    },
    "liver": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.99,
     "hits": 83
    },
    "fat": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.98,
     "hits": 83
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 83
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 82.0,
     "best": 0.9,
     "hits": 49
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 36
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 82.0,
     "best": 0.9,
     "hits": 19
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 20
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
     "on": false,
     "since": null
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
     "c2": 0.65,
     "c3": 0.85
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck. A clear full-thickness window is visible between the cystic duct and cystic artery, and the upper triangle is largely cleared of fat, though a second distinct window above the artery is less open as the artery runs close to the gallbladder/cystic plate. The lower portion of the gallbladder is dissected away from the liver bed, exposing the whitish-pink cystic plate behind the upper structures.",
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
      "confidence": 0.88
     },
     {
      "name": "hepatocystic_window",
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
       133,
       502,
       951,
       862
      ],
      "confidence": 0.99
     },
     {
      "label": "gallbladder",
      "box_2d": [
       148,
       193,
       829,
       517
      ],
      "confidence": 0.98
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       718,
       390,
       865,
       473
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       57,
       484,
       215,
       817
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.99,
     "hits": 84
    },
    "liver": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.99,
     "hits": 84
    },
    "fat": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.98,
     "hits": 84
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 84
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 83.0,
     "best": 0.9,
     "hits": 50
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 37
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 83.0,
     "best": 0.9,
     "hits": 20
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 21
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
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
     "what": "c2",
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
     "c2": 0.65,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder neck with a window between them. C2: A clear full-thickness window is visible between the cystic duct and cystic artery, and the tissue above the artery is dissected back to the cystic plate, though the upper window is narrow. C3: The lower third of the gallbladder is dissected off the liver bed, exposing the whitish-pink cystic plate along the inferior margin.",
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
      "confidence": 0.92
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
      "label": "liver",
      "box_2d": [
       0,
       499,
       855,
       853
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       33,
       169,
       617,
       510
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       569,
       361,
       721,
       451
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       205,
       444,
       691,
       563
      ],
      "confidence": 0.72
     },
     {
      "label": "grasper",
      "box_2d": [
       609,
       171,
       706,
       266
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.99,
     "hits": 85
    },
    "liver": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.99,
     "hits": 85
    },
    "fat": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.98,
     "hits": 85
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 85
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 83.0,
     "best": 0.9,
     "hits": 50
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 38
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.9,
     "hits": 21
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 22
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 82.0
    },
    "cvs": {
     "on": true,
     "since": 82.0
    }
   },
   "events": [
    {
     "what": "c3",
     "on": true,
     "since": 82.0
    },
    {
     "what": "cvs",
     "on": true,
     "since": 82.0
    }
   ]
  },
  {
   "t": 85.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.8
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder with a window between them. C2: One full-thickness window is clearly visible between the duct and artery, though the window between the artery and the cystic plate is not fully open as a through-and-through gap. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing the whitish cystic plate along the inferior margin.",
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
       520,
       842,
       859
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       32,
       163,
       638,
       524
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       187,
       444,
       691,
       616
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       556,
       360,
       713,
       461
      ],
      "confidence": 0.81
     },
     {
      "label": "grasper",
      "box_2d": [
       579,
       168,
       666,
       255
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
     "hits": 86
    },
    "liver": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.99,
     "hits": 86
    },
    "fat": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 86
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 86
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 83.0,
     "best": 0.9,
     "hits": 50
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 39
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 85.0,
     "best": 0.9,
     "hits": 22
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 23
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 82.0
    },
    "cvs": {
     "on": true,
     "since": 82.0
    }
   },
   "events": []
  },
  {
   "t": 86.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder neck. C2: A clear window is visible between the duct and artery, though the window between the artery and the cystic plate is not fully opened through. C3: The lower portion of the gallbladder is dissected off the liver bed, exposing the whitish cystic plate behind the artery.",
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
       508,
       804,
       858
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       7,
       169,
       572,
       517
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       108,
       442,
       673,
       605
      ],
      "label": "cystic_plate",
      "confidence": 0.85
     },
     {
      "box_2d": [
       530,
       364,
       675,
       462
      ],
      "label": "hepatocystic_window",
      "confidence": 0.77
     },
     {
      "box_2d": [
       550,
       164,
       625,
       260
      ],
      "label": "grasper",
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.99,
     "hits": 87
    },
    "liver": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.99,
     "hits": 87
    },
    "fat": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.98,
     "hits": 87
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 87
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 83.0,
     "best": 0.9,
     "hits": 50
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 40
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 86.0,
     "best": 0.9,
     "hits": 23
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 24
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 82.0
    },
    "cvs": {
     "on": true,
     "since": 82.0
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
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the base of the gallbladder. C2: The hepatocystic triangle is cleared of fat and connective tissue, creating a full-thickness window between the duct and artery with the liver visible behind, and clear dissection above the artery. C3: The lower third of the gallbladder is mobilized off the liver bed, exposing the whitish-yellow cystic plate.",
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
      "confidence": 0.88
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
      "label": "gallbladder",
      "box_2d": [
       3,
       177,
       608,
       513
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       502,
       775,
       842
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       238,
       470,
       481,
       860
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       588,
       169,
       667,
       263
      ],
      "confidence": 0.75
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       561,
       363,
       679,
       455
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.99,
     "hits": 88
    },
    "liver": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.99,
     "hits": 88
    },
    "fat": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.98,
     "hits": 88
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 88
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 83.0,
     "best": 0.9,
     "hits": 50
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 41
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 87.0,
     "best": 0.9,
     "hits": 24
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 25
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 82.0
    },
    "cvs": {
     "on": true,
     "since": 82.0
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
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery held in the clipper jaws) are clearly seen entering the gallbladder. C2: Full-thickness windows are visible between the cystic duct and cystic artery, and between the cystic artery and cystic plate, with the clipper jaws passing through the upper window. C3: The lower third of the gallbladder is dissected off the liver bed, exposing the whitish-yellow cystic plate behind the artery.",
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
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.7
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
       21,
       192,
       620,
       547
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       508,
       597,
       860
      ],
      "confidence": 0.95
     },
     {
      "label": "clipper",
      "box_2d": [
       508,
       440,
       804,
       843
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       590,
       169,
       663,
       276
      ],
      "confidence": 0.85
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       510,
       407,
       628,
       490
      ],
      "confidence": 0.75
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       567,
       381,
       680,
       467
      ],
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.99,
     "hits": 89
    },
    "liver": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.99,
     "hits": 89
    },
    "fat": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.98,
     "hits": 89
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 89
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 88.0,
     "best": 0.9,
     "hits": 51
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 42
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 88.0,
     "best": 0.9,
     "hits": 25
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 26
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 82.0
    },
    "cvs": {
     "on": true,
     "since": 82.0
    }
   },
   "events": []
  },
  {
   "t": 89.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.1,
     "c3": 0.75
    },
    "cvs_evidence": "C1: An instrument is passing through the triangle, obscuring the tubular structures and preventing clear visualization of two distinct structures entering the gallbladder. C2: While an instrument is passed through a window in the hepatocystic triangle, the fat and connective tissue are not sufficiently cleared to show two distinct full-thickness windows. C3: The lower portion of the gallbladder is dissected away from the liver bed, exposing a large portion of the whitish cystic plate.",
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
      "name": "cystic_plate",
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
    "reason_if_not": "The hepatocystic triangle is still covered in fat and obscured by the dissecting instrument, so the cystic duct and artery cannot be clearly identified.",
    "boxes": [
     {
      "box_2d": [
       36,
       191,
       742,
       532
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       510,
       633,
       860
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       550,
       406,
       857,
       842
      ],
      "label": "irrigator",
      "confidence": 0.95
     },
     {
      "box_2d": [
       591,
       169,
       674,
       291
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
     "last": 89.0,
     "best": 0.99,
     "hits": 90
    },
    "liver": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.99,
     "hits": 90
    },
    "fat": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 90
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 42
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 26
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 26
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 82.0
    },
    "cvs": {
     "on": true,
     "since": 82.0
    }
   },
   "events": []
  },
  {
   "t": 90.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1: No isolated tubular structures (cystic duct or artery) are clearly dissected or visible entering the gallbladder; the peritoneum over the hepatocystic triangle is just being opened. C2: The hepatocystic triangle is completely covered by peritoneum, fat, and connective tissue with no windows created yet. C3: The gallbladder remains fully attached to the liver bed with no dissection of the cystic plate.",
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
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle has barely begun; peritoneum and fat completely obscure the cystic duct and artery.",
    "boxes": [
     {
      "box_2d": [
       48,
       207,
       584,
       539
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       519,
       580,
       860
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       677,
       187,
       925,
       593
      ],
      "label": "liver",
      "confidence": 0.85
     },
     {
      "box_2d": [
       561,
       164,
       687,
       301
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       516,
       400,
       823,
       851
      ],
      "label": "irrigator",
      "confidence": 0.93
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.99,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.99,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.98,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 91
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 42
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 26
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 26
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 82.0
    },
    "cvs": {
     "on": true,
     "since": 82.0
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
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the lower cystic duct and upper cystic artery) are clearly dissected and seen entering the base of the gallbladder. C2: The hepatocystic triangle is well cleared, with a clear full-thickness window between the duct and artery (with a grasper visible through/behind it) and another window above the artery exposing the cystic plate. C3: The lower part of the gallbladder is dissected off the liver bed, exposing the yellowish-white cystic plate behind the artery.",
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
      "confidence": 0.9
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
      "label": "gallbladder",
      "box_2d": [
       64,
       179,
       682,
       523
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       25,
       516,
       862,
       856
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       492,
       620,
       803,
       858
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       629,
       178,
       715,
       260
      ],
      "confidence": 0.65
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       608,
       361,
       740,
       448
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.99,
     "hits": 92
    },
    "liver": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.99,
     "hits": 92
    },
    "fat": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.98,
     "hits": 92
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 92
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 52
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 43
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 91.0,
     "best": 0.9,
     "hits": 27
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 27
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 82.0
    },
    "cvs": {
     "on": true,
     "since": 82.0
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
    "cvs_evidence": "C1: The cystic duct and cystic artery are not yet skeletonized or clearly identifiable as two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle is still largely covered in fat and connective tissue, with a grasper only beginning to create a small opening at the inferior margin. C3: The gallbladder remains fully attached to the liver bed with no detachment of the lower third to expose the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; critical tubular structures are still encased in fat and peritoneum.",
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       47,
       190,
       642,
       537
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       514,
       691,
       859
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       566,
       428,
       888,
       827
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       621,
       174,
       702,
       285
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       490,
       140,
       667
      ],
      "confidence": 0.78
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.99,
     "hits": 93
    },
    "liver": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.99,
     "hits": 93
    },
    "fat": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.98,
     "hits": 93
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 93
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 92.0,
     "best": 0.9,
     "hits": 53
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 43
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 91.0,
     "best": 0.9,
     "hits": 27
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 27
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 82.0
    },
    "cvs": {
     "on": true,
     "since": 82.0
    }
   },
   "events": []
  },
  {
   "t": 93.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder cannot be confirmed as the hepatocystic triangle is still covered in fat and connective tissue, with a grasper dissecting a single structure. C2: There are no full-thickness windows cleared through the hepatocystic triangle yet. C3: Some of the cystic plate is exposed on the right between the gallbladder and liver, but the lower gallbladder is not fully separated along its entire inferior margin.",
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle prevents clear identification of the cystic duct and cystic artery.",
    "boxes": [
     {
      "box_2d": [
       48,
       191,
       646,
       560
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       4,
       518,
       688,
       860
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       567,
       437,
       878,
       831
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       618,
       172,
       694,
       282
      ],
      "label": "grasper",
      "confidence": 0.85
     },
     {
      "box_2d": [
       0,
       497,
       137,
       663
      ],
      "label": "grasper",
      "confidence": 0.82
     },
     {
      "box_2d": [
       591,
       402,
       693,
       513
      ],
      "label": "cystic_duct",
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.99,
     "hits": 94
    },
    "liver": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.99,
     "hits": 94
    },
    "fat": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.98,
     "hits": 94
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 94
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 5.0,
     "last": 92.0,
     "best": 0.9,
     "hits": 53
    },
    "cystic_duct": {
     "first": 20.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 43
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_plate": {
     "first": 29.0,
     "last": 93.0,
     "best": 0.9,
     "hits": 28
    },
    "cystic_artery": {
     "first": 52.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 27
    },
    "gi_tract": {
     "first": 52.0,
     "last": 52.0,
     "best": 0.7,
     "hits": 1
    }
   },
   "duct_confirmed": true,
   "alert": null,
   "cvs_state": {
    "c1": {
     "on": true,
     "since": 61.0
    },
    "c2": {
     "on": true,
     "since": 81.0
    },
    "c3": {
     "on": true,
     "since": 82.0
    },
    "cvs": {
     "on": true,
     "since": 82.0
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
   "C1": 0.3333333333333333,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 59,
   "C1": 0.6666666666666666,
   "C2": 0.0,
   "C3": 0.0
  },
  {
   "t": 64,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 69,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 74,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 79,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 84,
   "C1": 1.0,
   "C2": 1.0,
   "C3": 0.6666666666666666
  },
  {
   "t": 89,
   "C1": 0.6666666666666666,
   "C2": 0.6666666666666666,
   "C3": 0.3333333333333333
  }
 ],
 "agreement": {
  "keyframes": 13,
  "C1": 0.7692307692307693,
  "C1_caught": [
   4,
   7
  ],
  "C2": 0.7692307692307693,
  "C2_caught": [
   3,
   6
  ],
  "C3": 0.8461538461538461,
  "C3_caught": [
   4,
   5
  ]
 },
 "rules": {
  "confirm_conf": 0.7,
  "confirm_frames": 2
 }
};
