window.TIMELINE = {
 "video": "videos/video_test.mp4",
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
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because the gallbladder is still covered by omental adhesions and fat, with no cystic duct or artery dissected. C2 is not achieved because the hepatocystic triangle is not yet exposed or dissected. C3 is not achieved because the gallbladder remains completely attached to the liver bed and surrounding tissues.",
    "phase": "preparation",
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
    "reason_if_not": "Initial adhesiolysis is being performed; the hepatocystic triangle has not been dissected yet.",
    "examples": [
     "Example 41_225.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.977.",
     "Example 60_32200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.980.",
     "Example 108_38925.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (0.67). Similarity 0.977.",
     "Example 60_32450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.979.",
     "Example 31_49775.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.977.",
     "Example 26_6375.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.978."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       214,
       59,
       999,
       939
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       487,
       92,
       987,
       375
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       153,
       178,
       524
      ],
      "confidence": 0.97
     },
     {
      "label": "irrigator",
      "box_2d": [
       346,
       604,
       499,
       944
      ],
      "confidence": 0.93
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
     "best": 0.95,
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
    "abdominal_wall": {
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
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because only omental fat and adhesions are being lifted off the gallbladder and no cystic duct or artery are dissected or visible. C2 is not achieved because the hepatocystic triangle has not been dissected yet. C3 is not achieved because the gallbladder remains fully attached to the liver bed and covered by adhesions.",
    "phase": "preparation",
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
      "confidence": 0.98
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
    "reason_if_not": "The operation is in the initial preparation phase taking down adhesions; the hepatocystic triangle has not been exposed or dissected yet.",
    "examples": [
     "Example 41_225.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.978.",
     "Example 60_32200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.981.",
     "Example 31_52525.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.977.",
     "Example 35_11450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.979.",
     "Example 104_35350.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.978.",
     "Example 60_32450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.979."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       207,
       59,
       997,
       933
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       467,
       86,
       990,
       382
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       151,
       157,
       529
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       506,
       562,
       649,
       946
      ],
      "confidence": 0.94
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
     "best": 0.95,
     "hits": 2
    },
    "fat": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.98,
     "hits": 2
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.9,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.8,
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
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because no dissected tubular structures (cystic duct or artery) are visible; the gallbladder is still covered by omental adhesions. C2 is not achieved because the hepatocystic triangle has not been exposed or dissected at all. C3 is not achieved because the gallbladder has not been elevated or dissected off the liver bed to expose the cystic plate.",
    "phase": "preparation",
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
    "reason_if_not": "The surgery is in the initial adhesiolysis/preparation stage; the hepatocystic triangle is completely obscured by omental fat and adhesions.",
    "examples": [
     "Example 79_31225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.978.",
     "Example 60_32200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.981.",
     "Example 31_52525.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.978.",
     "Example 60_32450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.980.",
     "Example 31_50400.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.979.",
     "Example 35_11450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.980."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       151,
       157,
       526
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       468,
       487,
       617,
       946
      ],
      "label": "irrigator",
      "confidence": 0.95
     },
     {
      "box_2d": [
       209,
       58,
       998,
       929
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       471,
       87,
       996,
       382
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
     "last": 2.0,
     "best": 0.95,
     "hits": 3
    },
    "liver": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.95,
     "hits": 3
    },
    "fat": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.98,
     "hits": 3
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.9,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.8,
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
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because the operation is in the initial adhesiolysis phase and no tubular biliary or vascular structures are dissected or visible. C2 is not achieved as the hepatocystic triangle is completely obscured by omental fat and adhesions. C3 is not achieved because the gallbladder is still covered by adhesions and not separated from the liver bed.",
    "phase": "preparation",
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
      "confidence": 0.98
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
    "reason_if_not": "The hepatocystic triangle has not been exposed yet; the surgeon is currently dividing omental adhesions over the gallbladder.",
    "examples": [
     "Example 79_31225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.979.",
     "Example 60_32200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.983.",
     "Example 31_52525.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.979.",
     "Example 60_32450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.981.",
     "Example 31_51900.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.980.",
     "Example 35_11450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.980."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       0,
       153,
       167,
       523
      ],
      "confidence": 0.95
     },
     {
      "label": "irrigator",
      "box_2d": [
       439,
       480,
       595,
       944
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       223,
       60,
       1000,
       925
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       483,
       93,
       1000,
       377
      ],
      "confidence": 0.92
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
     "best": 0.95,
     "hits": 4
    },
    "fat": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.98,
     "hits": 4
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.9,
     "hits": 4
    },
    "abdominal_wall": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.8,
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
   "t": 4.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: No tubular structures are dissected or visible, as the gallbladder is still covered by omental adhesions and fat. C2: The hepatocystic triangle has not been dissected and is completely obscured by adipose tissue and adhesions. C3: The gallbladder has not been separated from the liver bed, and the cystic plate is not exposed.",
    "phase": "preparation",
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
      "confidence": 0.99
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
    "reason_if_not": "The hepatocystic triangle is completely covered by omental adhesions and fat prior to dissection.",
    "examples": [
     "Example 79_31225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.979.",
     "Example 60_32200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.981.",
     "Example 31_52525.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.977.",
     "Example 31_50400.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.979.",
     "Example 31_51900.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.979.",
     "Example 35_11450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.979."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       150,
       161,
       527
      ],
      "label": "grasper",
      "confidence": 0.98
     },
     {
      "box_2d": [
       414,
       532,
       549,
       946
      ],
      "label": "irrigator",
      "confidence": 0.95
     },
     {
      "box_2d": [
       336,
       493,
       1000,
       940
      ],
      "label": "gallbladder",
      "confidence": 0.96
     },
     {
      "box_2d": [
       215,
       60,
       997,
       442
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
     "last": 4.0,
     "best": 0.95,
     "hits": 5
    },
    "liver": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.95,
     "hits": 5
    },
    "fat": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.99,
     "hits": 5
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.9,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.8,
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
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: No tubular structures (cystic duct or artery) are dissected or visible entering the gallbladder; only omental fat adhesions are being lysed. C2: The hepatocystic triangle is completely covered by fat and adhesions, with no windows dissected. C3: The gallbladder has not been mobilized off the liver bed to expose the cystic plate.",
    "phase": "preparation",
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
      "confidence": 0.98
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
    "reason_if_not": "The hepatocystic triangle has not been dissected yet; the surgery is still in the adhesiolysis/preparation stage.",
    "examples": [
     "Example 17_45000.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.978.",
     "Example 60_32200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.982.",
     "Example 31_52525.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.979.",
     "Example 35_11450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.981.",
     "Example 31_51900.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.980.",
     "Example 60_32450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.980."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       206,
       61,
       998,
       937
      ],
      "confidence": 0.98
     },
     {
      "label": "liver",
      "box_2d": [
       485,
       91,
       996,
       375
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       152,
       161,
       532
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       410,
       545,
       550,
       945
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
     "best": 0.95,
     "hits": 6
    },
    "liver": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.95,
     "hits": 6
    },
    "fat": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.99,
     "hits": 6
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.8,
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
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: No tubular structures (cystic duct or cystic artery) are dissected or visible, as the area is covered in omental adhesions and fat. C2: The hepatocystic triangle is not exposed or cleared of fat and connective tissue. C3: The gallbladder is not separated from the liver bed, and the cystic plate is not visible.",
    "phase": "preparation",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Initial adhesiolysis stage; the hepatocystic triangle is completely covered by omental fat and adhesions.",
    "examples": [
     "Example 17_45000.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.978.",
     "Example 60_32200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.981.",
     "Example 31_52525.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.978.",
     "Example 35_11450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.980.",
     "Example 31_51900.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.980."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       0,
       150,
       156,
       521
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       367,
       497,
       525,
       945
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       487,
       93,
       989,
       378
      ],
      "confidence": 0.92
     },
     {
      "label": "gallbladder",
      "box_2d": [
       516,
       493,
       1000,
       934
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
     "best": 0.95,
     "hits": 7
    },
    "fat": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.99,
     "hits": 7
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 7
    },
    "abdominal_wall": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.8,
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
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: The gallbladder is still covered by omental adhesions and fat, and no tubular structures (cystic duct or artery) are dissected or visible. C2: The hepatocystic triangle is not yet exposed or dissected, with no windows present. C3: The gallbladder has not been dissected off the liver bed, so the cystic plate is not exposed.",
    "phase": "preparation",
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
      "confidence": 0.98
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
    "reason_if_not": "The surgical field is in the early preparation phase with omental adhesions covering the gallbladder; the hepatocystic triangle has not been dissected yet.",
    "examples": [
     "Example 16_9850.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.980.",
     "Example 60_32200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.984.",
     "Example 31_52525.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.979.",
     "Example 104_35350.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.982.",
     "Example 23_27600.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.982.",
     "Example 36_1700.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.982."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       208,
       62,
       996,
       940
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       464,
       88,
       991,
       392
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       166,
       150,
       526
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       606,
       346,
       780,
       940
      ],
      "confidence": 0.92
     }
    ]
   },
   "can_confirm": false,
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
     "best": 0.95,
     "hits": 8
    },
    "fat": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.99,
     "hits": 8
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.9,
     "hits": 8
    },
    "abdominal_wall": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.8,
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
   "t": 8.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because the operation is in the initial preparation phase taking down omental adhesions from the gallbladder, and neither the cystic duct nor the cystic artery is exposed. C2 is not achieved because the hepatocystic triangle has not been dissected and is completely covered by fat and adhesions. C3 is not achieved because the gallbladder has not been separated from the liver bed to expose the cystic plate.",
    "phase": "preparation",
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
      "confidence": 0.85
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
    "reason_if_not": "Initial adhesiolysis of omental fat over the gallbladder; the hepatocystic triangle has not yet been dissected.",
    "examples": [
     "Example 79_31225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.977.",
     "Example 60_32200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.981.",
     "Example 31_52525.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.977.",
     "Example 60_32450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.979.",
     "Example 31_51900.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.977.",
     "Example 36_5075.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.978."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       203,
       62,
       996,
       935
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       477,
       93,
       996,
       382
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       161,
       153,
       519
      ],
      "confidence": 0.96
     },
     {
      "label": "irrigator",
      "box_2d": [
       323,
       544,
       471,
       940
      ],
      "confidence": 0.85
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
     "best": 0.95,
     "hits": 9
    },
    "fat": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.99,
     "hits": 9
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.9,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.8,
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
   "t": 9.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because the cystic duct and artery are not yet dissected or visible, with only omental adhesions being divided. C2 is not achieved because the hepatocystic triangle is completely covered by fat and adhesions with no dissection windows present. C3 is not achieved because the gallbladder remains attached to surrounding structures and the cystic plate is not exposed.",
    "phase": "preparation",
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
      "confidence": 0.98
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
    "reason_if_not": "The hepatocystic triangle is not yet exposed; the surgeon is still taking down omental adhesions from the gallbladder.",
    "examples": [
     "Example 79_31225.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.978.",
     "Example 60_32200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.981.",
     "Example 31_52525.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.978.",
     "Example 35_11450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.979.",
     "Example 31_51900.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.979.",
     "Example 60_32450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.979."
    ],
    "boxes": [
     {
      "label": "grasper",
      "box_2d": [
       0,
       161,
       153,
       520
      ],
      "confidence": 0.98
     },
     {
      "label": "irrigator",
      "box_2d": [
       443,
       563,
       581,
       946
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       467,
       90,
       990,
       384
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       215,
       61,
       1000,
       938
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
     "best": 0.95,
     "hits": 10
    },
    "liver": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.95,
     "hits": 10
    },
    "fat": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.99,
     "hits": 10
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.9,
     "hits": 10
    },
    "abdominal_wall": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.8,
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
  }
 ],
 "truth": null,
 "agreement": null,
 "rules": {
  "confirm_conf": 0.7,
  "confirm_frames": 2
 }
};
