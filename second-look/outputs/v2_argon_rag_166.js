window.TIMELINE = {
 "video": "videos/endo166.mp4",
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
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No tubular structures are dissected or visible entering the gallbladder; the area is still covered by peritoneum and fat. C2: The hepatocystic triangle is completely undissected and filled with fatty and connective tissue, with no windows present. C3: The lower part of the gallbladder remains fully attached to the liver bed, so the cystic plate is not exposed.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection has just begun; the hepatocystic triangle is covered by intact peritoneum and fat, hiding the cystic duct and artery.",
    "examples": [
     "Example 7_38550.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.982.",
     "Example 4_34575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.956.",
     "Example 4_36825.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.955.",
     "Example 6_16425.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.956.",
     "Example 83_61300.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.982.",
     "Example 4_29700.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.955."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       308,
       335,
       654
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       215,
       161,
       928,
       652
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       168,
       651,
       291,
       857
      ],
      "confidence": 0.94
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
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1: No tubular structures (cystic duct or artery) are dissected or visible entering the gallbladder. C2: The hepatocystic triangle is completely covered by peritoneum and fat, with the hook just starting initial dissection. C3: The gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Dissection has just begun; the hepatocystic triangle is still covered by fat and peritoneum, hiding the cystic duct and artery.",
    "examples": [
     "Example 7_38550.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.977.",
     "Example 11_24275.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.979.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.956.",
     "Example 6_16425.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.957.",
     "Example 83_61300.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.977.",
     "Example 6_9550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.956."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       303,
       617,
       720
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       164,
       957,
       639
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       244,
       643,
       368,
       860
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
   "t": 2.0,
   "label": {
    "cvs": {
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are dissected or visible entering the gallbladder; the peritoneum is just being incised. C2: The hepatocystic triangle is still completely covered by intact peritoneum, fat, and connective tissue with no windows created. C3: The gallbladder remains fully attached to the liver bed with only superficial scoring of the peritoneum by the hook.",
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
    "reason_if_not": "Dissection has just begun; the hepatocystic triangle is still covered by intact peritoneum and fat, hiding the cystic duct and artery.",
    "examples": [
     "Example 95_31000.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 83_58550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.990.",
     "Example 109_19350.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 83_58675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 99_28175.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.989.",
     "Example 60_43200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       301,
       566,
       717
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       207,
       169,
       921,
       635
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       291,
       527,
       459,
       863
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
     "best": 0.95,
     "hits": 3
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
   "t": 3.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and peritoneum, so the cystic duct and artery are not yet skeletonized or visible as two distinct tubular structures. C2: Dissection of the peritoneum is just beginning with the hook, and no windows have been created through the hepatocystic triangle. C3: The lower portion of the gallbladder remains completely attached to the liver bed, with no exposure of the cystic plate.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Initial peritoneal incision only; biliary and vascular structures are still obscured by fat and connective tissue.",
    "examples": [
     "Example 83_66550.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 55_36450.jpg: experts said C1 no (0.33), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 45_28950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 83_58425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 19_24475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       182,
       164,
       888,
       647
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       297,
       563,
       621
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       118,
       638,
       262,
       851
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
   "t": 4.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because the hepatocystic triangle is completely covered in fat and peritoneum, so no distinct tubular structures are skeletonized. C2 is not achieved because dissection has barely started and no windows are cleared in the triangle. C3 is not achieved because the gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
     }
    ],
    "instruments": [
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The cystic duct and artery are still completely buried in adipose and peritoneal tissue at the beginning of dissection.",
    "examples": [
     "Example 83_66550.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 60_38825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.985.",
     "Example 83_66800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 109_21600.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 45_28950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       273,
       502,
       725
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       182,
       169,
       874,
       650
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       687,
       78,
       793
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
   "t": 5.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and connective tissue, so two distinct tubular structures entering the gallbladder cannot be seen. C2: Dissection is in an early stage with no full-thickness windows cleared through the hepatocystic triangle. C3: The lower gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not yet dissected; fat and peritoneum obscure the cystic duct and cystic artery.",
    "examples": [
     "Example 41_725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.987.",
     "Example 45_28950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 60_38825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 83_66800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 60_38700.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       0,
       350,
       613,
       715
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       275,
       161,
       941,
       710
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       105,
       682,
       216,
       835
      ],
      "confidence": 0.93
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
   "t": 6.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because the hepatocystic triangle is completely covered in fat and peritoneum, with no tubular structures dissected out yet. C2 is not achieved because no dissection of the triangle has occurred and no windows are visible. C3 is not achieved because the lower gallbladder remains completely attached to the liver bed with the peritoneum intact.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is just beginning; the cystic duct and cystic artery are still completely obscured by fat and peritoneum.",
    "examples": [
     "Example 83_66300.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.987.",
     "Example 57_35275.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.985.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 83_66800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 19_24475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "box_2d": [
       7,
       345,
       693,
       755
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       303,
       158,
       995,
       674
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       159,
       650,
       287,
       847
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       563,
       124,
       731
      ],
      "label": "grasper",
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 7.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because the peritoneum is just being incised and no tubular structures are dissected yet. C2 is not achieved as the hepatocystic triangle is completely covered in intact fat and peritoneum with no windows created. C3 is not achieved because the gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct and artery are still completely encased in fat and peritoneum.",
    "examples": [
     "Example 64_37450.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 19_24475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 83_58425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 19_42600.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       90,
       328,
       747,
       723
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       140,
       160,
       995,
       859
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       439,
       205,
       714
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       342,
       692,
       458,
       860
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 8.0,
   "label": {
    "cvs": {
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1 is not achieved because the hepatocystic triangle is still covered in fat and peritoneum, with no distinct tubular structures isolated. C2 is not achieved as dissection has just begun with the hook and no windows have been created in the fat and connective tissue. C3 is not achieved because the lower gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Initial stage of dissection; cystic duct, cystic artery, and cystic plate remain obscured by overlying peritoneum and adipose tissue.",
    "examples": [
     "Example 64_37450.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.987.",
     "Example 35_1950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.987.",
     "Example 35_450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       78,
       336,
       736,
       723
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       148,
       159,
       990,
       854
      ],
      "label": "liver",
      "confidence": 0.94
     },
     {
      "box_2d": [
       310,
       665,
       444,
       859
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       484,
       168,
       712
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 9.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because the hepatocystic triangle is still covered in fat and peritoneum, with no distinct tubular structures isolated. C2 is not achieved as there are no dissected windows through the hepatocystic triangle. C3 is not achieved because the lower gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
    "reason_if_not": "Initial dissection of the peritoneum and fat; cystic duct and artery are not yet exposed or isolated.",
    "examples": [
     "Example 83_66800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 35_1950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.987.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.988.",
     "Example 45_28950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       48,
       336,
       712,
       768
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       160,
       996,
       675
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       321,
       642,
       461,
       859
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       0,
       512,
       148,
       717
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 10.0,
   "label": {
    "cvs": {
     "c1": 0.01,
     "c2": 0.01,
     "c3": 0.01
    },
    "cvs_evidence": "C1: Dissection is in a very early stage and no distinct tubular structures (cystic duct or artery) are isolated or visible entering the gallbladder. C2: The hepatocystic triangle is completely covered by fat and peritoneal tissue, with no dissected windows. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Initial stage of dissection; cystic duct and artery are still completely embedded in fat and connective tissue.",
    "examples": [
     "Example 7_38550.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.981.",
     "Example 6_16425.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.957.",
     "Example 112_22850.jpg: experts said C1 no (0.33), C2 yes (1.00), C3 no (0.33). Similarity 0.956.",
     "Example 10_18600.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.956.",
     "Example 83_61300.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.977.",
     "Example 6_10550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.956."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       71,
       338,
       706,
       747
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       300,
       157,
       997,
       677
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       488,
       187,
       726
      ],
      "confidence": 0.91
     },
     {
      "label": "hook",
      "box_2d": [
       503,
       655,
       627,
       856
      ],
      "confidence": 0.93
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 11.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered by intact fat and peritoneum, so two distinct tubular structures are not yet skeletonized or clearly identifiable. C2: The triangle is completely filled with fibrofatty tissue with no dissected windows visible. C3: The lower gallbladder remains fully attached to the liver bed with the peritoneum intact, so the cystic plate is not exposed.",
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
    "reason_if_not": "Early stage of dissection; the cystic duct, cystic artery, and cystic plate are still covered by fat and peritoneal tissue.",
    "examples": [
     "Example 83_66800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 3_15025.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 3_15900.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 42_43400.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       63,
       345,
       686,
       767
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       323,
       161,
       994,
       670
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       361,
       657,
       495,
       861
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       0,
       524,
       184,
       733
      ],
      "label": "grasper",
      "confidence": 0.91
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or skeletonized entering the gallbladder yet. C2: The hepatocystic triangle is still covered with fat and peritoneum, with the hook just starting superficial dissection and no windows formed. C3: The gallbladder remains completely attached to the liver bed along its inferior margin with no cystic plate exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; critical structures are still encased in fat and peritoneum.",
    "examples": [
     "Example 83_66800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 83_58425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.990.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.989.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.989.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       66,
       338,
       739,
       715
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       336,
       161,
       999,
       655
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       357,
       683,
       483,
       861
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       519,
       185,
       729
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 13.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures are visible yet as the peritoneum and fat over the gallbladder neck are just being scored. C2: The hepatocystic triangle is completely filled with fat and connective tissue with no dissected windows. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still covered by peritoneum and fat.",
    "examples": [
     "Example 3_15900.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 35_1950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.986.",
     "Example 19_24475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       89,
       342,
       756,
       743
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       334,
       161,
       998,
       643
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       483,
       216,
       732
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       426,
       668,
       546,
       864
      ],
      "confidence": 0.93
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 14.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1 is not achieved because dissection has just begun and no distinct tubular structures are isolated entering the gallbladder. C2 is not achieved because the hepatocystic triangle is still covered in fat and connective tissue with no windows visible. C3 is not achieved because the lower gallbladder remains completely attached to the liver bed.",
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
    "reason_if_not": "The hepatocystic triangle is not yet dissected and the cystic duct and artery remain obscured by fat and peritoneum.",
    "examples": [
     "Example 64_37450.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.985.",
     "Example 35_1950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 23_39225.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 19_17475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       81,
       339,
       719,
       763
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       312,
       158,
       1000,
       662
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       484,
       204,
       722
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       410,
       632,
       548,
       860
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 15.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and peritoneum, so two distinct tubular structures entering the gallbladder are not yet visible. C2: Dissection has just begun and no windows are cleared through the hepatocystic triangle. C3: The gallbladder remains completely attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection is in an early stage and the cystic duct, cystic artery, and cystic plate remain obscured by fat and peritoneum.",
    "examples": [
     "Example 95_31000.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 117_26250.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 3_14025.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 3_15025.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       59,
       329,
       715,
       752
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       299,
       157,
       1000,
       666
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       452,
       218,
       724
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       429,
       603,
       600,
       862
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 15.0,
     "best": 1.0,
     "hits": 16
    },
    "liver": {
     "first": 0.0,
     "last": 15.0,
     "best": 1.0,
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 16.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and connective tissue, so two distinct tubular structures entering the gallbladder are not yet visible. C2: The hook is actively dissecting the fat over the triangle and no full-thickness windows have been created yet. C3: The lower part of the gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; the cystic duct, cystic artery, and cystic plate are still obscured by fat and connective tissue.",
    "examples": [
     "Example 3_14900.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.991.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 3_14025.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 99_28175.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.989.",
     "Example 35_450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990."
    ],
    "boxes": [
     {
      "box_2d": [
       63,
       332,
       660,
       715
      ],
      "label": "gallbladder",
      "confidence": 0.96
     },
     {
      "box_2d": [
       287,
       161,
       996,
       658
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       414,
       539,
       607,
       858
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       0,
       450,
       199,
       710
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
     "last": 16.0,
     "best": 1.0,
     "hits": 17
    },
    "liver": {
     "first": 0.0,
     "last": 16.0,
     "best": 1.0,
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 17.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered by peritoneum and fat, so no distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder. C2: Dissection is just beginning with the hook incising the peritoneum, and no full-thickness windows have been created in the triangle. C3: The lower part of the gallbladder remains completely attached to the liver bed, with the cystic plate not yet exposed.",
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
    "reason_if_not": "Initial stage of peritoneum incision; the cystic duct, cystic artery, and cystic plate are still completely covered by fat and connective tissue.",
    "examples": [
     "Example 80_9850.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 83_58675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 57_34775.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 99_26800.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 23_27975.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 35_2325.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       53,
       338,
       545,
       750
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       318,
       160,
       998,
       665
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       528,
       464,
       836,
       852
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       530,
       167,
       737
      ],
      "confidence": 0.85
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 17.0,
     "best": 1.0,
     "hits": 18
    },
    "liver": {
     "first": 0.0,
     "last": 17.0,
     "best": 1.0,
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 18.0,
   "label": {
    "cvs": {
     "c1": 0.0,
     "c2": 0.0,
     "c3": 0.0
    },
    "cvs_evidence": "C1: Dissection has barely begun and no distinct tubular structures (cystic duct or artery) are isolated or visible entering the gallbladder. C2: The hepatocystic triangle is completely covered by peritoneum, fat, and connective tissue with no windows formed. C3: The lower part of the gallbladder remains fully attached to the liver bed with the peritoneum intact.",
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
    "reason_if_not": "The hepatocystic triangle has not been dissected yet; structures are still covered by fat and peritoneum.",
    "examples": [
     "Example 3_14900.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 3_15025.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.990.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 117_19750.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (1.00). Similarity 0.987.",
     "Example 3_14025.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       58,
       342,
       727,
       764
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       308,
       158,
       1000,
       663
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       460,
       633,
       583,
       859
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       523,
       174,
       729
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
     "last": 18.0,
     "best": 1.0,
     "hits": 19
    },
    "liver": {
     "first": 0.0,
     "last": 18.0,
     "best": 1.0,
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 19.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: No isolated tubular structures are visible yet as the peritoneum over the hepatocystic triangle is just being incised. C2: The hepatocystic triangle is still covered in fat and connective tissue with no dissected windows. C3: The gallbladder remains fully attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Initial stage of peritoneum incision; cystic duct and artery are still buried within fat and connective tissue.",
    "examples": [
     "Example 64_37450.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 3_15025.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.987.",
     "Example 71_12425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       66,
       337,
       758,
       766
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       298,
       157,
       1000,
       654
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       508,
       195,
       737
      ],
      "label": "grasper",
      "confidence": 0.85
     },
     {
      "box_2d": [
       444,
       599,
       591,
       856
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
     "last": 19.0,
     "best": 1.0,
     "hits": 20
    },
    "liver": {
     "first": 0.0,
     "last": 19.0,
     "best": 1.0,
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 20.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Only the peritoneum is being opened with the hook; no distinct tubular cystic duct and cystic artery are skeletonized and visible entering the gallbladder. C2: The hepatocystic triangle is still covered with fat and connective tissue without two full-thickness windows. C3: The lower gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
    "reason_if_not": "Initial peritoneal incision stage; hepatocystic triangle structures are still buried in fat and connective tissue.",
    "examples": [
     "Example 3_15650.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.988.",
     "Example 3_14025.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 109_19100.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.986.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.988.",
     "Example 42_43400.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       51,
       332,
       715,
       750
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       286,
       163,
       996,
       650
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       471,
       564,
       680,
       856
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       509,
       174,
       732
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 20.0,
     "best": 1.0,
     "hits": 21
    },
    "liver": {
     "first": 0.0,
     "last": 20.0,
     "best": 1.0,
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 21.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct and artery) are isolated or clearly visible entering the gallbladder; the region is covered in fat and peritoneum. C2: The hepatocystic triangle is still filled with adipose and connective tissue with only a tiny initial opening being made by the hook, and no full-thickness windows are present. C3: The gallbladder remains completely attached to the liver bed along its inferior margin, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the very early stages; fat and peritoneum obscure the underlying ductal and vascular anatomy.",
    "examples": [
     "Example 3_15650.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 3_14025.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 109_19350.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 83_58675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.989.",
     "Example 99_28175.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       36,
       332,
       648,
       715
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       287,
       160,
       1000,
       662
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       530,
       178,
       742
      ],
      "confidence": 0.91
     },
     {
      "label": "hook",
      "box_2d": [
       445,
       563,
       642,
       859
      ],
      "confidence": 0.92
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       414,
       571,
       462,
       609
      ],
      "confidence": 0.54
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 21.0,
     "best": 1.0,
     "hits": 22
    },
    "liver": {
     "first": 0.0,
     "last": 21.0,
     "best": 1.0,
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 22.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and peritoneum, so two distinct tubular structures entering the gallbladder are not yet visible. C2: The hook is only beginning to score the peritoneal and fatty layer, with no cleared full-thickness windows through the triangle. C3: The inferior margin of the gallbladder remains fully attached to the liver bed, with no exposed cystic plate.",
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
    "reason_if_not": "Initial peritoneal incision and fat dissection in the hepatocystic triangle; ductal and arterial structures are still buried in fat.",
    "examples": [
     "Example 3_15650.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 3_14025.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 57_34775.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 71_12425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 99_28175.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       32,
       334,
       631,
       746
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       278,
       160,
       990,
       672
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       438,
       564,
       638,
       861
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       536,
       159,
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
     "last": 22.0,
     "best": 1.0,
     "hits": 23
    },
    "liver": {
     "first": 0.0,
     "last": 22.0,
     "best": 1.0,
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 6.0,
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
   "t": 23.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Only the peritoneum is being scored and no distinct tubular structures (cystic duct or artery) are isolated yet. C2: The hepatocystic triangle is still covered in fat and connective tissue with no full-thickness windows created. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; cystic duct and artery are not yet isolated.",
    "examples": [
     "Example 64_37450.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.987.",
     "Example 19_42600.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.986.",
     "Example 19_24475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       42,
       342,
       634,
       768
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       310,
       163,
       1000,
       682
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       603,
       589,
       809,
       845
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       560,
       176,
       756
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
     "best": 1.0,
     "hits": 24
    },
    "liver": {
     "first": 0.0,
     "last": 23.0,
     "best": 1.0,
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 23.0,
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
   "t": 24.0,
   "label": {
    "cvs": {
     "c1": 0.02,
     "c2": 0.01,
     "c3": 0.02
    },
    "cvs_evidence": "C1: The peritoneum over the hepatocystic triangle is just being incised and no distinct tubular structures (cystic duct or artery) are isolated or visible entering the gallbladder. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows created yet. C3: The lower portion of the gallbladder remains completely attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Initial stage of dissection; the hepatocystic triangle is still covered by peritoneum and fat, obscuring the cystic duct and artery.",
    "examples": [
     "Example 111_14000.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.987.",
     "Example 71_12425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 83_58425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       55,
       347,
       740,
       789
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       296,
       158,
       1000,
       652
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       563,
       191,
       825
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       399,
       639,
       545,
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
     "last": 24.0,
     "best": 1.0,
     "hits": 25
    },
    "liver": {
     "first": 0.0,
     "last": 24.0,
     "best": 1.0,
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
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 23.0,
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
   "t": 25.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.02
    },
    "cvs_evidence": "C1: Two distinct tubular structures connected to the gallbladder are not yet clearly skeletonized; only a broad band of tissue on the right and fat below are visible. C2: There is one small window opening near the hook, but the hepatocystic triangle remains filled with fat and connective tissue below it. C3: The inferior margin of the gallbladder is still attached to the liver bed via intact peritoneum and fat, so the cystic plate is not exposed.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; fat and peritoneum still obscure the cystic duct, cystic artery, and cystic plate.",
    "examples": [
     "Example 83_66800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 117_26000.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.985.",
     "Example 19_24475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.985.",
     "Example 95_36500.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "box_2d": [
       94,
       357,
       755,
       815
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       288,
       159,
       1000,
       671
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       525,
       212,
       757
      ],
      "label": "grasper",
      "confidence": 0.91
     },
     {
      "box_2d": [
       559,
       683,
       685,
       850
      ],
      "label": "hook",
      "confidence": 0.85
     },
     {
      "box_2d": [
       457,
       645,
       577,
       717
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
     "last": 25.0,
     "best": 1.0,
     "hits": 26
    },
    "liver": {
     "first": 0.0,
     "last": 25.0,
     "best": 1.0,
     "hits": 26
    },
    "fat": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 3
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
    "cvs_evidence": "C1: Dissection is in an early stage and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly identifiable. C2: A small initial opening is being made by the hook, but the hepatocystic triangle remains filled with fat and connective tissue without clear full-thickness windows. C3: The inferior margin of the gallbladder remains attached to the liver bed with intact peritoneum and fat, so the cystic plate is not exposed.",
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
    "reason_if_not": "The hepatocystic triangle is still covered in fat and connective tissue, preventing clear identification of the cystic duct, cystic artery, and cystic plate.",
    "examples": [
     "Example 3_15900.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 83_66800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 60_35950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       38,
       360,
       725,
       830
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       267,
       160,
       1000,
       673
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       604,
       161,
       772
      ],
      "confidence": 0.85
     },
     {
      "label": "irrigator",
      "box_2d": [
       406,
       738,
       494,
       862
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       399,
       637,
       476,
       733
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 26.0,
     "best": 1.0,
     "hits": 27
    },
    "liver": {
     "first": 0.0,
     "last": 26.0,
     "best": 1.0,
     "hits": 27
    },
    "fat": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 3
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
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a small initial opening is made in the tissue, and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly identifiable. C2: The hepatocystic triangle remains largely covered in fat and connective tissue with only one small, partial window where the hook is dissecting. C3: The lower part of the gallbladder is still attached to the liver bed with no exposed cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; the cystic duct, cystic artery, and cystic plate are still obscured by fat and peritoneum.",
    "examples": [
     "Example 41_475.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.987.",
     "Example 3_13650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 57_35150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.987.",
     "Example 42_43400.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 3_15900.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       22,
       357,
       706,
       748
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       270,
       160,
       1000,
       679
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       342,
       627,
       461,
       733
      ],
      "confidence": 0.77
     },
     {
      "label": "hook",
      "box_2d": [
       309,
       739,
       396,
       861
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       610,
       139,
       768
      ],
      "confidence": 0.82
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 27.0,
     "best": 1.0,
     "hits": 28
    },
    "liver": {
     "first": 0.0,
     "last": 27.0,
     "best": 1.0,
     "hits": 28
    },
    "fat": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 27.0,
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
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only a small initial opening in the peritoneum/fat is seen, and two distinct tubular structures are not yet skeletonized or clearly identifiable entering the gallbladder. C2: The hepatocystic triangle remains filled with yellow fat and connective tissue with only a small superficial window created. C3: The inferior margin of the gallbladder is still completely attached to the liver bed with intact serosa, so the cystic plate is not exposed.",
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
      "name": "hepatocystic_window",
      "confidence": 0.4
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at a very early stage; fat and connective tissue still obscure the cystic duct, cystic artery, and cystic plate.",
    "examples": [
     "Example 3_15900.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.985.",
     "Example 109_21600.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 3_16025.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (1.00). Similarity 0.984.",
     "Example 57_32400.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.984.",
     "Example 110_32800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       41,
       350,
       687,
       734
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       278,
       160,
       998,
       682
      ],
      "confidence": 0.97
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       175,
       336,
       592
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       0,
       571,
       161,
       762
      ],
      "confidence": 0.85
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       363,
       619,
       477,
       694
      ],
      "confidence": 0.72
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 28.0,
     "best": 1.0,
     "hits": 29
    },
    "liver": {
     "first": 0.0,
     "last": 28.0,
     "best": 1.0,
     "hits": 29
    },
    "fat": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 25.0,
     "best": 0.9,
     "hits": 3
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
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
     "c2": 0.0,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the peritoneal reflection is being scored, and two distinct tubular structures are not yet isolated or clearly visible entering the gallbladder. C2: The hepatocystic triangle is still completely filled with fat and connective tissue with no windows created. C3: Dissection along the peritoneal attachment to the liver bed is just beginning with the hook, so the lower gallbladder is not yet separated to expose the cystic plate.",
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
    "reason_if_not": "Initial peritoneal incision; the cystic duct and cystic artery remain buried within the undissected fat and connective tissue of the hepatocystic triangle.",
    "examples": [
     "Example 71_13050.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.00). Similarity 0.990.",
     "Example 11_24650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 96_78575.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 71_13300.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 99_26675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 71_13175.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.00). Similarity 0.990."
    ],
    "boxes": [
     {
      "box_2d": [
       144,
       180,
       999,
       729
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       138,
       553,
       895,
       858
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       554,
       517,
       792,
       827
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       544,
       164,
       674,
       307
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       81,
       503,
       211,
       820
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
     "last": 29.0,
     "best": 1.0,
     "hits": 30
    },
    "liver": {
     "first": 0.0,
     "last": 29.0,
     "best": 1.0,
     "hits": 30
    },
    "fat": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 29.0,
     "best": 0.9,
     "hits": 4
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
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
   "t": 30.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection has just begun on the peritoneum and no distinct tubular structures (cystic duct or artery) are isolated yet. C2: The hepatocystic triangle is still covered with fat and connective tissue with no full-thickness windows visible. C3: The lower part of the gallbladder remains attached to the liver bed and the cystic plate is not yet exposed.",
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
    "reason_if_not": "Early stage of dissection; cystic duct and artery remain embedded in fat and connective tissue.",
    "examples": [
     "Example 71_13300.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 59_36575.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 71_13175.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.00). Similarity 0.988.",
     "Example 95_36625.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       183,
       175,
       968,
       608
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       190,
       542,
       816,
       862
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       647,
       485,
       936,
       781
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       624,
       177,
       742,
       286
      ],
      "label": "grasper",
      "confidence": 0.91
     },
     {
      "box_2d": [
       112,
       484,
       243,
       837
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
     "last": 30.0,
     "best": 1.0,
     "hits": 31
    },
    "liver": {
     "first": 0.0,
     "last": 30.0,
     "best": 1.0,
     "hits": 31
    },
    "fat": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 30.0,
     "best": 0.9,
     "hits": 5
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
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
   "t": 31.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: The hepatocystic triangle is still covered in fat and peritoneum, so the cystic duct and artery are not yet skeletonized as two distinct tubular structures entering the gallbladder. C2: The triangle is not cleared of fat and connective tissue, and no full-thickness windows are visible. C3: Only a small initial incision along the peritoneal reflection is seen, and the lower gallbladder is not yet separated from the liver bed to expose the cystic plate.",
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
    "examples": [
     "Example 71_13175.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.00). Similarity 0.989.",
     "Example 83_63300.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 74_9925.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.988.",
     "Example 83_57425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       194,
       559,
       938,
       862
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       201,
       205,
       986,
       617
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       130,
       497,
       263,
       828
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       691,
       190,
       800,
       310
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       767,
       423,
       1000,
       692
      ],
      "confidence": 0.98
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 31.0,
     "best": 1.0,
     "hits": 32
    },
    "liver": {
     "first": 0.0,
     "last": 31.0,
     "best": 1.0,
     "hits": 32
    },
    "fat": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 31.0,
     "best": 0.9,
     "hits": 6
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
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
   "t": 32.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is in a very early stage and no distinct tubular structures (cystic duct or artery) are isolated or seen entering the gallbladder. C2: The hepatocystic triangle is still covered in peritoneum, fat, and connective tissue with no full-thickness windows visible. C3: Only a shallow peritoneal incision has been made along the border of the gallbladder, so the lower gallbladder is not yet separated from the cystic plate.",
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
    "reason_if_not": "The hepatocystic triangle has not been dissected yet, leaving the cystic duct and artery obscured beneath fat and connective tissue.",
    "examples": [
     "Example 71_13300.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 71_12550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 95_37750.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.987.",
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.988.",
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       146,
       558,
       917,
       859
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       163,
       195,
       876,
       616
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       757,
       427,
       996,
       695
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       623,
       176,
       745,
       306
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       89,
       499,
       219,
       822
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
     "last": 32.0,
     "best": 1.0,
     "hits": 33
    },
    "liver": {
     "first": 0.0,
     "last": 32.0,
     "best": 1.0,
     "hits": 33
    },
    "fat": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 32.0,
     "best": 0.9,
     "hits": 7
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
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
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the early outline of one tubular structure at the bottom is being dissected, with the rest of the triangle still covered by fat and peritoneum. C2: The hepatocystic triangle is still largely intact and covered by peritoneum and fat, with no full-thickness windows created yet. C3: Only a narrow superficial peritoneal incision has been made along the gallbladder-liver junction, without lifting the lower gallbladder off the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage and structures are still obscured by peritoneum and fat.",
    "examples": [
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.988.",
     "Example 42_41150.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 95_36750.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.985.",
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 20_9975.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.985.",
     "Example 71_12925.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       136,
       545,
       938,
       861
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       156,
       199,
       891,
       560
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       75,
       491,
       218,
       824
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       638,
       177,
       764,
       307
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       792,
       414,
       997,
       624
      ],
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 33.0,
     "best": 1.0,
     "hits": 34
    },
    "liver": {
     "first": 0.0,
     "last": 33.0,
     "best": 1.0,
     "hits": 34
    },
    "fat": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 33.0,
     "best": 0.9,
     "hits": 8
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
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
    "cvs_evidence": "C1: Two distinct tubular structures are not yet clearly isolated, as the hepatocystic triangle is still covered in fibrofatty tissue. C2: The hepatocystic triangle is not cleared, with the hook just beginning to dissect through the superficial layers and no full-thickness windows visible. C3: While peritoneal scoring has begun along the upper gallbladder margin, the lower part of the gallbladder remains attached to the liver bed without full exposure of the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in the early stages and the cystic duct and artery are still obscured by fat and connective tissue.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 11_24650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 4_36825.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 71_12550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 95_37750.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       580,
       470,
       846,
       831
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       564,
       164,
       694,
       318
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       73,
       507,
       194,
       819
      ],
      "label": "grasper",
      "confidence": 0.9
     },
     {
      "box_2d": [
       133,
       211,
       629,
       563
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       141,
       558,
       680,
       861
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       725,
       218,
       995,
       584
      ],
      "label": "liver",
      "confidence": 0.88
     },
     {
      "box_2d": [
       561,
       262,
       996,
       752
      ],
      "label": "cystic_duct",
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 34.0,
     "best": 1.0,
     "hits": 35
    },
    "liver": {
     "first": 0.0,
     "last": 34.0,
     "best": 1.0,
     "hits": 35
    },
    "fat": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 34.0,
     "best": 0.9,
     "hits": 9
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
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
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Dissection is in an early stage and two distinct tubular structures connected to the gallbladder are not yet isolated. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: Only a shallow peritoneal incision has been made along the liver border, and the lower gallbladder is not yet separated to expose the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle has not been dissected to reveal the cystic duct, cystic artery, or cystic plate.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 71_12550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       128,
       252,
       856,
       561
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       124,
       562,
       886,
       861
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       534,
       164,
       672,
       346
      ],
      "label": "grasper",
      "confidence": 0.93
     },
     {
      "box_2d": [
       763,
       462,
       1000,
       713
      ],
      "label": "hook",
      "confidence": 0.92
     },
     {
      "box_2d": [
       80,
       524,
       205,
       803
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
     "last": 35.0,
     "best": 1.0,
     "hits": 36
    },
    "liver": {
     "first": 0.0,
     "last": 35.0,
     "best": 1.0,
     "hits": 36
    },
    "fat": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 35.0,
     "best": 0.9,
     "hits": 10
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are dissected or visible entering the gallbladder yet. C2: The hepatocystic triangle is still covered by intact peritoneum and fat, with no windows created. C3: The gallbladder remains attached to the liver bed with only superficial peritoneal scoring just beginning.",
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
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the cystic duct and artery are still completely covered by peritoneum and fat.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 64_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 95_36750.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 71_12925.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 57_35900.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.986.",
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       133,
       343,
       861,
       576
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       146,
       159,
       993,
       857
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       611,
       184,
       818,
       463
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       763,
       484,
       998,
       726
      ],
      "label": "hook",
      "confidence": 0.93
     },
     {
      "box_2d": [
       107,
       555,
       218,
       825
      ],
      "label": "grasper",
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
     "hits": 37
    },
    "liver": {
     "first": 0.0,
     "last": 36.0,
     "best": 1.0,
     "hits": 37
    },
    "fat": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 36.0,
     "best": 0.9,
     "hits": 11
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
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
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or visible entering the gallbladder; the peritoneum is just beginning to be incised. C2: The hepatocystic triangle is completely covered by intact peritoneum and fat with no windows dissected. C3: The gallbladder remains fully attached to the liver bed with no exposure of the cystic plate.",
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
    "reason_if_not": "Dissection has just started; the hepatocystic triangle is still covered by peritoneum and fat, obscuring the cystic duct and artery.",
    "examples": [
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 71_12425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 95_36625.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 64_37450.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 117_26250.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 71_14175.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       127,
       336,
       879,
       618
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       140,
       158,
       997,
       856
      ],
      "confidence": 0.93
     },
     {
      "label": "grasper",
      "box_2d": [
       636,
       183,
       775,
       492
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       735,
       488,
       995,
       740
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 37.0,
     "best": 1.0,
     "hits": 38
    },
    "liver": {
     "first": 0.0,
     "last": 37.0,
     "best": 1.0,
     "hits": 38
    },
    "fat": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 37.0,
     "best": 0.9,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
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
     "c1": 0.02,
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: The cystic duct and cystic artery are still covered by fat and connective tissue and are not dissected as two distinct tubular structures. C2: The hepatocystic triangle is not cleared and no full-thickness windows are visible. C3: The peritoneum is just being incised along the liver bed and the lower third of the gallbladder is not yet mobilized off the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; ductal and arterial structures remain obscured by fat and peritoneum.",
    "examples": [
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.992.",
     "Example 19_17475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.991.",
     "Example 95_37750.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.991.",
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.991.",
     "Example 95_36625.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.991.",
     "Example 95_31000.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.991."
    ],
    "boxes": [
     {
      "box_2d": [
       95,
       546,
       836,
       860
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       105,
       192,
       888,
       564
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       537,
       161,
       647,
       319
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       665,
       456,
       982,
       777
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
     "best": 1.0,
     "hits": 39
    },
    "liver": {
     "first": 0.0,
     "last": 38.0,
     "best": 1.0,
     "hits": 39
    },
    "fat": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 37.0,
     "best": 0.9,
     "hits": 12
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 38.0,
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
   "t": 39.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or clearly visible entering the gallbladder yet. C2: The hepatocystic triangle is still covered by peritoneum and fatty connective tissue with no full-thickness windows created. C3: Early dissection along the medial aspect of the gallbladder has begun, but the lower part of the gallbladder is not fully separated from the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just started; the cystic duct and cystic artery are still embedded in fat and peritoneum.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.991.",
     "Example 36_6825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.988.",
     "Example 71_12925.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990."
    ],
    "boxes": [
     {
      "box_2d": [
       79,
       547,
       913,
       860
      ],
      "confidence": 0.95,
      "label": "liver"
     },
     {
      "box_2d": [
       98,
       206,
       835,
       564
      ],
      "confidence": 0.93,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       691,
       412,
       997,
       747
      ],
      "confidence": 0.95,
      "label": "hook"
     },
     {
      "box_2d": [
       538,
       163,
       682,
       321
      ],
      "confidence": 0.93,
      "label": "grasper"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 39.0,
     "best": 1.0,
     "hits": 40
    },
    "liver": {
     "first": 0.0,
     "last": 39.0,
     "best": 1.0,
     "hits": 40
    },
    "fat": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 39.0,
     "best": 0.9,
     "hits": 13
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 38.0,
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
   "t": 40.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.15
    },
    "cvs_evidence": "C1: No distinct tubular structures (cystic duct or artery) are isolated or clearly visible entering the gallbladder yet. C2: The hepatocystic triangle is still filled with fat and connective tissue with no full-thickness windows created. C3: Initial scoring of the peritoneum along the cystic plate is visible, but the lower part of the gallbladder is not yet separated from the liver bed.",
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
    "reason_if_not": "Dissection is in an early stage; fat and connective tissue still obscure the cystic duct and cystic artery.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 42_33775.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 95_36750.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 71_13300.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.986.",
     "Example 71_12925.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       77,
       559,
       832,
       861
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       665,
       186,
       997,
       544
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       89,
       208,
       777,
       563
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       608,
       405,
       991,
       773
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       509,
       161,
       653,
       314
      ],
      "confidence": 0.97
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 40.0,
     "best": 1.0,
     "hits": 41
    },
    "liver": {
     "first": 0.0,
     "last": 40.0,
     "best": 1.0,
     "hits": 41
    },
    "fat": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 40.0,
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
   "t": 41.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only the early outline of the cystic duct is being dissected by the hook, and two distinct tubular structures entering the gallbladder are not yet visible. C2: The hepatocystic triangle is still filled with fat and connective tissue, with no full-thickness windows present. C3: While superficial scoring of the peritoneum along the liver bed has begun, the lower gallbladder is not yet lifted off the cystic plate.",
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
      "confidence": 0.6
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in an early stage and critical structures are still obscured by fat and connective tissue.",
    "examples": [
     "Example 71_12925.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.991.",
     "Example 71_12550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 95_36750.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.991.",
     "Example 95_37000.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.987.",
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.991."
    ],
    "boxes": [
     {
      "box_2d": [
       98,
       222,
       762,
       556
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       89,
       553,
       874,
       861
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       515,
       161,
       661,
       333
      ],
      "label": "grasper",
      "confidence": 0.92
     },
     {
      "box_2d": [
       668,
       401,
       1000,
       769
      ],
      "label": "irrigator",
      "confidence": 0.7
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 41.0,
     "best": 1.0,
     "hits": 42
    },
    "liver": {
     "first": 0.0,
     "last": 41.0,
     "best": 1.0,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 41.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 41.0,
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
   "t": 42.0,
   "label": {
    "cvs": {
     "c1": 0.1,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only one tubular structure (the cystic duct) is clearly isolated and hooked by the cautery, while a second tubular structure is not distinctly visible entering the gallbladder. C2: The hepatocystic triangle is still filled with fat and connective tissue, with no full-thickness windows cleared. C3: The gallbladder remains largely attached to the liver bed with fat obscuring the area, so the cystic plate is not exposed along the inferior margin.",
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; only one tubular structure is isolated and surrounding fat obscures the cystic artery and cystic plate.",
    "examples": [
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 57_35900.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.989.",
     "Example 57_36525.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 57_36275.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.986.",
     "Example 71_12925.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       108,
       165,
       1000,
       861
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       98,
       338,
       724,
       606
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       251,
       157,
       484,
       496
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       657,
       499,
       970,
       781
      ],
      "confidence": 0.97
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       410,
       440,
       771,
       559
      ],
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 42.0,
     "best": 1.0,
     "hits": 43
    },
    "liver": {
     "first": 0.0,
     "last": 42.0,
     "best": 1.0,
     "hits": 43
    },
    "fat": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 41.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 42.0,
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
   "t": 43.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Only one tubular structure (the cystic duct being hooked) is clearly visible; a second distinct tubular structure (cystic artery) is not yet dissected or visible. C2: The hepatocystic triangle is still filled with fat and connective tissue, with no full-thickness windows visible between duct, artery, and cystic plate. C3: A cautery line and some exposed cystic plate are seen along the liver bed, but the lower part of the gallbladder is not fully separated along its entire inferior margin.",
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
    "reason_if_not": "The hepatocystic triangle is not yet cleared of fat and connective tissue, and only one tubular structure is identified.",
    "examples": [
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 64_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 95_37750.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 71_12925.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       87,
       290,
       445,
       562
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       108,
       175,
       997,
       858
      ],
      "confidence": 0.95
     },
     {
      "label": "cystic_duct",
      "box_2d": [
       421,
       319,
       746,
       467
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       297,
       157,
       484,
       396
      ],
      "confidence": 0.97
     },
     {
      "label": "hook",
      "box_2d": [
       624,
       443,
       986,
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
     "last": 43.0,
     "best": 1.0,
     "hits": 44
    },
    "liver": {
     "first": 0.0,
     "last": 43.0,
     "best": 1.0,
     "hits": 44
    },
    "fat": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 43.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
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
     "c3": 0.1
    },
    "cvs_evidence": "C1: Dissection is in an early stage and two distinct tubular structures entering the gallbladder are not yet skeletonized or clearly identifiable. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: The lower portion of the gallbladder is still largely attached to the liver bed and covered by peritoneum and fat, so the cystic plate is not adequately exposed.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is still covered in fat and connective tissue prior to complete dissection of the cystic duct and artery.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 57_36275.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.988.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 71_13175.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.00). Similarity 0.989.",
     "Example 99_26800.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 71_13300.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       483,
       443,
       794,
       847
      ],
      "label": "hook"
     },
     {
      "box_2d": [
       270,
       157,
       453,
       336
      ],
      "label": "grasper"
     },
     {
      "box_2d": [
       45,
       226,
       433,
       568
      ],
      "label": "gallbladder"
     },
     {
      "box_2d": [
       70,
       546,
       608,
       859
      ],
      "label": "liver"
     },
     {
      "box_2d": [
       439,
       161,
       996,
       528
      ],
      "label": "liver"
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 44.0,
     "best": 1.0,
     "hits": 45
    },
    "liver": {
     "first": 0.0,
     "last": 44.0,
     "best": 1.0,
     "hits": 45
    },
    "fat": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
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
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 43.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
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
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures entering the gallbladder are not yet visible due to incomplete dissection and occlusion by the hook. C2: The hepatocystic triangle remains filled with fat and connective tissue with no full-thickness windows visible. C3: The lower gallbladder is still largely attached to the liver bed and covered by fat, with the hook obstructing the view of the cystic plate.",
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
      "name": "cystic_duct",
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and partial occlusion by the electrocautery hook prevent clear identification of the cystic duct and artery.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.991.",
     "Example 57_36275.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.989.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 99_26800.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 71_12925.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       13,
       205,
       475,
       550
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       309,
       159,
       478,
       307
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       410,
       421,
       749,
       861
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       471,
       163,
       996,
       567
      ],
      "confidence": 0.91
     },
     {
      "label": "liver",
      "box_2d": [
       53,
       526,
       451,
       856
      ],
      "confidence": 0.9
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 45.0,
     "best": 1.0,
     "hits": 45
    },
    "liver": {
     "first": 0.0,
     "last": 45.0,
     "best": 1.0,
     "hits": 45
    },
    "fat": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 45
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 45
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 43.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 45.0,
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
     "c1": 0.05,
     "c2": 0.02,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one main tubular bundle (likely the cystic duct) is visible, with the second structure obscured by fat and the hook instrument. C2: The hepatocystic triangle is still filled with adipose and connective tissue and no full-thickness windows are visible. C3: The gallbladder remains largely attached to the liver bed and the cystic plate is not clearly exposed along the inferior margin.",
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
    "examples": [
     "Example 96_75700.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 99_26800.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.990.",
     "Example 57_36150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.987.",
     "Example 57_36275.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.990.",
     "Example 99_28175.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.989.",
     "Example 60_40325.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       438,
       469,
       744,
       859
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       346,
       158,
       531,
       344
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       32,
       243,
       526,
       628
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       520,
       161,
       1000,
       604
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       563,
       462,
       856
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
     "best": 1.0,
     "hits": 46
    },
    "liver": {
     "first": 0.0,
     "last": 46.0,
     "best": 1.0,
     "hits": 46
    },
    "fat": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 46
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 46
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 43.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 46.0,
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
   "t": 47.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is in an early stage and two distinct tubular structures entering the gallbladder are not yet isolated. C2: The hepatocystic triangle is still filled with fat and connective tissue, with no full-thickness windows visible. C3: The lower part of the gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection; the hepatocystic triangle is still covered in fat and connective tissue.",
    "examples": [
     "Example 96_75700.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 57_36275.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.988.",
     "Example 57_34775.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 11_24650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 99_26800.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 4_27450.jpg: experts said C1 no (0.00), C2 no (0.33), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       33,
       222,
       452,
       574
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       363,
       157,
       546,
       336
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       421,
       465,
       719,
       860
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       549,
       170,
       996,
       616
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       27,
       532,
       442,
       858
      ],
      "confidence": 0.91
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 47.0,
     "best": 1.0,
     "hits": 47
    },
    "liver": {
     "first": 0.0,
     "last": 47.0,
     "best": 1.0,
     "hits": 47
    },
    "fat": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 47
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 43.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 46.0,
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
   "t": 48.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Only a single broad tissue pedicle (likely the cystic duct covered in fat/connective tissue) is visible, without two distinct tubular structures identified. C2: The hepatocystic triangle is still obscured by fat and connective tissue with no clear full-thickness windows between duct, artery, and cystic plate. C3: While some dissection along the liver bed is visible, the lower third of the gallbladder is not clearly separated across its entire inferior margin to expose the cystic plate.",
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle; only one main pedicle is visible and the cystic artery is not yet isolated from surrounding fat and connective tissue.",
    "examples": [
     "Example 71_14050.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 111_19750.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 111_25000.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 71_13800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 57_29275.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       59,
       229,
       992,
       719
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       84,
       169,
       1000,
       861
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       404,
       157,
       578,
       341
      ],
      "confidence": 0.96
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 48.0,
     "best": 1.0,
     "hits": 48
    },
    "liver": {
     "first": 0.0,
     "last": 48.0,
     "best": 1.0,
     "hits": 48
    },
    "fat": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 48
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 48.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 48.0,
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
   "t": 49.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Dissection is at an early stage and two distinct tubular structures are not yet isolated or clearly visible entering the gallbladder. C2: The hepatocystic triangle is still covered with fat and connective tissue with no full-thickness windows created. C3: The lower gallbladder remains attached to the liver bed and the cystic plate is not exposed.",
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
    "reason_if_not": "The hepatocystic triangle is still encased in fat and peritoneum, preventing identification of the cystic duct and artery.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.991.",
     "Example 71_12550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.989.",
     "Example 71_13300.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 95_37750.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.989.",
     "Example 71_13175.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.00). Similarity 0.990."
    ],
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       408,
       476,
       684,
       859
      ],
      "confidence": 0.99
     },
     {
      "label": "grasper",
      "box_2d": [
       419,
       156,
       529,
       291
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       66,
       162,
       999,
       739
      ],
      "confidence": 0.97
     },
     {
      "label": "liver",
      "box_2d": [
       43,
       544,
       870,
       860
      ],
      "confidence": 0.96
     },
     {
      "label": "liver",
      "box_2d": [
       587,
       182,
       1000,
       551
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 49.0,
     "best": 1.0,
     "hits": 49
    },
    "liver": {
     "first": 0.0,
     "last": 49.0,
     "best": 1.0,
     "hits": 49
    },
    "fat": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 49
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 48.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 48.0,
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
     "c2": 0.02,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the early outline of the cystic duct is partially visible beneath fat and connective tissue, and two distinct tubular structures are not yet isolated. C2: The hepatocystic triangle is still filled with adipose and fibrous tissue with no full-thickness windows created. C3: The lower part of the gallbladder remains attached to the liver bed with no exposed cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage; fat and connective tissue still obscure the cystic duct, cystic artery, and cystic plate.",
    "examples": [
     "Example 96_75700.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 57_36275.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.990.",
     "Example 57_34775.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 99_26800.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.990.",
     "Example 90_31375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 11_24650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       416,
       427,
       775,
       858
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       377,
       155,
       536,
       301
      ],
      "confidence": 0.94
     },
     {
      "label": "gallbladder",
      "box_2d": [
       20,
       187,
       425,
       575
      ],
      "confidence": 0.9
     },
     {
      "label": "liver",
      "box_2d": [
       67,
       564,
       503,
       859
      ],
      "confidence": 0.88
     },
     {
      "label": "liver",
      "box_2d": [
       534,
       174,
       990,
       598
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       136,
       475,
       459,
       614
      ],
      "confidence": 0.65
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
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 50
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 14
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 28.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 48.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 48.0,
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
     "c1": 0.15,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and a thinner upper strand near the hook are partially visible, but heavy surrounding fat prevents clearly identifying two distinct tubular structures entering the gallbladder. C2: The hepatocystic triangle remains filled with adipose and connective tissue with only a tiny initial opening near the hook tip rather than two full-thickness windows. C3: The inferior margin of the gallbladder is not lifted off the liver bed to expose the cystic plate.",
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
      "name": "cystic_duct",
      "confidence": 0.65
     },
     {
      "name": "cystic_artery",
      "confidence": 0.4
     },
     {
      "name": "hepatocystic_window",
      "confidence": 0.35
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete with abundant fat and connective tissue still obscuring the cystic structures and cystic plate.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 11_24650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 57_36150.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.988.",
     "Example 11_25025.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 99_26675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       46,
       239,
       531,
       605
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       36,
       540,
       614,
       862
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       583,
       170,
       892,
       621
      ],
      "label": "liver",
      "confidence": 0.88
     },
     {
      "box_2d": [
       423,
       156,
       582,
       349
      ],
      "label": "grasper",
      "confidence": 0.96
     },
     {
      "box_2d": [
       529,
       493,
       814,
       844
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
     "hits": 51
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 51
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 51.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 48.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 51.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 51.0,
     "best": 0.4,
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
   "t": 52.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular-like bands (likely cystic duct and cystic artery) are beginning to be delineated near the gallbladder neck, though fat and connective tissue still obscure their full circumference and entry. C2: A small fenestration is visible between the two structures, but the hepatocystic triangle is still largely filled with fat and connective tissue without clear full-thickness windows to the cystic plate. C3: The lower portion of the gallbladder remains attached to the liver bed, so the cystic plate is not sufficiently exposed.",
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
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
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
    "reason_if_not": "Incomplete dissection of the hepatocystic triangle and cystic plate; fat and connective tissue still obscure the full extent of the tubular structures.",
    "examples": [
     "Example 111_21625.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 64_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 3_16525.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.988.",
     "Example 57_36025.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.989.",
     "Example 57_35900.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (0.67). Similarity 0.989.",
     "Example 71_12425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       47,
       269,
       584,
       627
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       18,
       563,
       568,
       864
      ],
      "label": "liver",
      "confidence": 0.94
     },
     {
      "box_2d": [
       566,
       169,
       959,
       632
      ],
      "label": "liver",
      "confidence": 0.9
     },
     {
      "box_2d": [
       418,
       157,
       579,
       362
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       526,
       578,
       778,
       847
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
     "hits": 52
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 52
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 52.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 48.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 52.0,
     "best": 0.85,
     "hits": 5
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 52.0,
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
   "t": 53.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Only one main cord-like structure is being hooked, while the rest of the hepatocystic area remains covered in fat and connective tissue without two distinct tubular structures visible. C2: The hepatocystic triangle is still filled with adipose and connective tissue, with no clear full-thickness windows dissected yet. C3: The gallbladder neck and lower body remain closely attached to the liver bed and covered by fat, so the cystic plate is not adequately exposed.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage with significant overlying fat and connective tissue obscuring the ductal and arterial anatomy.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 57_36275.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.990.",
     "Example 76_56725.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 71_12925.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 99_26800.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.990.",
     "Example 11_25025.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       42,
       250,
       565,
       620
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       32,
       172,
       986,
       860
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       409,
       156,
       573,
       351
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       510,
       449,
       846,
       835
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
     "hits": 53
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 53
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 52.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 48.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 53.0,
     "best": 0.85,
     "hits": 5
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 52.0,
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
   "t": 54.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Only the early outline of the cystic duct is visible while the second tubular structure (cystic artery) is still buried in fat and connective tissue. C2: The hepatocystic triangle is still filled with adipose and connective tissue with no full-thickness windows cleared. C3: The lower gallbladder remains attached to the liver bed without exposure of the cystic plate.",
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; fat and connective tissue obscure the cystic artery and cystic plate.",
    "examples": [
     "Example 4_36825.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.989.",
     "Example 11_25025.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.992.",
     "Example 76_56725.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 71_12425.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.992.",
     "Example 99_26675.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.990.",
     "Example 76_50725.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.991."
    ],
    "boxes": [
     {
      "box_2d": [
       396,
       156,
       560,
       369
      ],
      "label": "grasper",
      "confidence": 0.95
     },
     {
      "box_2d": [
       515,
       496,
       783,
       844
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       55,
       272,
       517,
       585
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       51,
       579,
       588,
       861
      ],
      "label": "liver",
      "confidence": 0.92
     },
     {
      "box_2d": [
       555,
       174,
       943,
       636
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
     "hits": 54
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 54
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 52.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 48.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 5
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 52.0,
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
   "t": 55.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.25,
     "c3": 0.2
    },
    "cvs_evidence": "C1: A small window is created revealing two band-like structures, though they remain heavily encased in fat and connective tissue. C2: The hepatocystic triangle is still mostly covered by fat, with only one small partial-thickness or early window visible near the hook. C3: The lower gallbladder remains attached to the liver bed and the cystic plate is not yet exposed.",
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
      "name": "cystic_duct",
      "confidence": 0.7
     },
     {
      "name": "cystic_artery",
      "confidence": 0.55
     },
     {
      "name": "hepatocystic_window",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; fat and connective tissue obscure the structures and the cystic plate is not dissected.",
    "examples": [
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 57_36275.jpg: experts said C1 no (0.00), C2 no (0.33), C3 yes (1.00). Similarity 0.990.",
     "Example 57_36525.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.989.",
     "Example 111_21625.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 90_31375.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 64_31825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       75,
       263,
       609,
       625
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       63,
       180,
       992,
       863
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       418,
       155,
       584,
       367
      ],
      "label": "grasper",
      "confidence": 0.97
     },
     {
      "box_2d": [
       587,
       534,
       869,
       829
      ],
      "label": "irrigator",
      "confidence": 0.95
     },
     {
      "box_2d": [
       542,
       469,
       623,
       533
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
     "hits": 55
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 55
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 55.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 48.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 55.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 55.0,
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
   "t": 56.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "Two tubular structures separated by a small window are visible entering the gallbladder, supporting C1. A small full-thickness window is created between the two structures with the hook, though the upper window to the cystic plate is not fully cleared for C2. The lower gallbladder remains largely attached to the liver bed without full exposure of the cystic plate, so C3 is not achieved.",
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
      "confidence": 0.8
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
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with significant fat remaining and only a single small window visible.",
    "examples": [
     "Example 111_21625.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.987.",
     "Example 55_37450.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.33). Similarity 0.987.",
     "Example 41_475.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.986.",
     "Example 55_35825.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 4_35950.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       44,
       255,
       536,
       636
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       571,
       603,
       859
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       619,
       187,
       997,
       639
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       419,
       157,
       592,
       362
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       555,
       534,
       849,
       804
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       529,
       471,
       607,
       525
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": false,
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
     "hits": 56
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 56
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 56.0,
     "best": 0.8,
     "hits": 2
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 48.0,
     "best": 0.65,
     "hits": 0
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 56.0,
     "best": 0.85,
     "hits": 7
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 56.0,
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
   "t": 57.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.35,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, thinner cystic artery above) are seen entering the gallbladder neck with a small gap between them. C2: There is a small window between the duct and artery, but no clear full-thickness window between the artery and the cystic plate, as connective tissue still connects them. C3: The lower gallbladder is partially mobilized exposing the cystic plate behind, though dissection between the upper structure and plate is incomplete.",
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
      "name": "cystic_plate",
      "confidence": 0.75
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete clearance of the hepatocystic triangle between the cystic artery and cystic plate.",
    "examples": [
     "Example 111_21625.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.986.",
     "Example 55_37450.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.33). Similarity 0.987.",
     "Example 42_46525.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.986.",
     "Example 20_10225.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 83_66800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       25,
       230,
       479,
       560
      ],
      "confidence": 0.94
     },
     {
      "label": "liver",
      "box_2d": [
       24,
       552,
       763,
       862
      ],
      "confidence": 0.92
     },
     {
      "label": "grasper",
      "box_2d": [
       426,
       155,
       590,
       335
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       530,
       693,
       743,
       854
      ],
      "confidence": 0.93
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       507,
       444,
       591,
       495
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
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
     "last": 57.0,
     "best": 0.95,
     "hits": 57
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 57
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 57.0,
     "best": 0.8,
     "hits": 2
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 57.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 57.0,
     "best": 0.9,
     "hits": 8
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 57.0,
     "best": 0.8,
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
   "t": 58.0,
   "label": {
    "cvs": {
     "c1": 0.25,
     "c2": 0.1,
     "c3": 0.15
    },
    "cvs_evidence": "C1: One clear tubular structure (likely cystic duct) is visible at the bottom, while a second structure above it is still largely covered in fat and obscured by the hook. C2: The hepatocystic triangle is not cleared of fat and connective tissue, and only a tiny opening is being dissected by the hook without two full-thickness windows. C3: The peritoneum along the liver bed is only superficially scored, and the lower gallbladder is not separated to expose the cystic plate.",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete, with fat and connective tissue still covering the upper part of the triangle and the hook obscuring the view.",
    "examples": [
     "Example 71_13175.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.00). Similarity 0.990.",
     "Example 42_33775.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 95_36750.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 71_13300.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 95_36625.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       36,
       171,
       978,
       860
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       30,
       209,
       541,
       587
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       520,
       428,
       808,
       845
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       456,
       156,
       608,
       322
      ],
      "confidence": 0.94
     }
    ]
   },
   "can_confirm": false,
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
     "hits": 58
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 58
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 57.0,
     "best": 0.8,
     "hits": 2
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 57.0,
     "best": 0.75,
     "hits": 1
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 9
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 57.0,
     "best": 0.8,
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
   "t": 59.0,
   "label": {
    "cvs": {
     "c1": 0.75,
     "c2": 0.4,
     "c3": 0.3
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery/band above) are visible connecting to the gallbladder neck with the hook between them. C2: A window is visible between the lower and upper structures, though the upper window between the artery and cystic plate is still partially obscured by connective tissue and the hook. C3: The peritoneum along the liver bed is incised and some cystic plate is exposed, but the lower third of the gallbladder is not yet fully elevated off the liver bed.",
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
      "confidence": 0.75
     },
     {
      "name": "cystic_plate",
      "confidence": 0.7
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and mobilization of the lower gallbladder off the cystic plate are incomplete.",
    "examples": [
     "Example 95_37750.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.991.",
     "Example 60_33200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 95_37625.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.990.",
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.990.",
     "Example 95_31000.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       53,
       198,
       558,
       550
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       16,
       542,
       802,
       857
      ],
      "confidence": 0.98
     },
     {
      "label": "hook",
      "box_2d": [
       658,
       462,
       935,
       788
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       527,
       161,
       674,
       321
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
     "last": 59.0,
     "best": 0.95,
     "hits": 59
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 59
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 59.0,
     "best": 0.8,
     "hits": 3
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 59.0,
     "best": 0.75,
     "hits": 2
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 59.0,
     "best": 0.8,
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
   "t": 60.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.15,
     "c3": 0.25
    },
    "cvs_evidence": "C1: A lower tubular structure (likely cystic duct) and an upper band being dissected by the hook are visible, though fat still obscures clear tubular definition of the second structure. C2: A window is forming between the lower and upper structures, but the hepatocystic triangle is not yet fully cleared of connective tissue and lacks two full-thickness windows. C3: The cystic plate is partially visible above the hook, but the hook shaft and incomplete dissection prevent seeing the plate along the entire inferior gallbladder margin.",
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress and the upper structure/cystic plate are partially obscured by fat and the hook cautery.",
    "examples": [
     "Example 3_15650.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 36_6825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 4_36825.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 36_8700.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 4_36200.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (1.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "hook",
      "box_2d": [
       455,
       429,
       723,
       855
      ],
      "confidence": 0.98
     },
     {
      "label": "grasper",
      "box_2d": [
       473,
       156,
       611,
       298
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       63,
       187,
       506,
       558
      ],
      "confidence": 0.92
     },
     {
      "label": "liver",
      "box_2d": [
       14,
       536,
       508,
       858
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       626,
       175,
       989,
       578
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       499,
       396,
       646,
       475
      ],
      "confidence": 0.84
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
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 60
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 60.0,
     "best": 0.8,
     "hits": 4
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 60.0,
     "best": 0.75,
     "hits": 3
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 60.0,
     "best": 0.9,
     "hits": 11
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 60.0,
     "best": 0.8,
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
   "t": 61.0,
   "label": {
    "cvs": {
     "c1": 0.78,
     "c2": 0.45,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are visible entering the gallbladder with a clear window between them. C2: There is a clear full-thickness window between the duct and artery showing the liver behind, though the upper window between the artery and cystic plate is still being dissected by the hook. C3: The lower gallbladder is only partially separated from the liver bed, with connective tissue still bridging the space above the artery.",
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
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The upper hepatocystic window and cystic plate dissection are not yet complete.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 42_33775.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 109_19350.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 71_13300.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 99_27050.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       543,
       437,
       813,
       838
      ],
      "label": "hook",
      "confidence": 0.98
     },
     {
      "box_2d": [
       91,
       161,
       646,
       532
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       47,
       534,
       579,
       860
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       596,
       322,
       741,
       409
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
     "last": 61.0,
     "best": 0.95,
     "hits": 61
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 61
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 61.0,
     "best": 0.92,
     "hits": 5
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 61.0,
     "best": 0.75,
     "hits": 3
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 61.0,
     "best": 0.9,
     "hits": 12
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 61.0,
     "best": 0.88,
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
   "t": 62.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below and cystic artery above) are visible connected to the gallbladder with a window between them. C2: A full-thickness window is present between the duct and artery, but the space between the artery and the cystic plate is still being dissected by the hook and is not yet a full-thickness window. C3: The lower part of the gallbladder remains attached to the liver bed with only superficial scoring over the cystic plate.",
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "examples": [
     "Example 71_13175.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.00). Similarity 0.991.",
     "Example 42_33775.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.992.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.989.",
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 99_28300.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       18,
       532,
       731,
       863
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       78,
       163,
       630,
       527
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       602,
       441,
       894,
       814
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       587,
       331,
       731,
       414
      ],
      "confidence": 0.88
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       206,
       465,
       620,
       563
      ],
      "confidence": 0.72
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
     "last": 62.0,
     "best": 0.95,
     "hits": 62
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 62
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 62.0,
     "best": 0.92,
     "hits": 6
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 62.0,
     "best": 0.75,
     "hits": 3
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 62.0,
     "best": 0.9,
     "hits": 13
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 62.0,
     "best": 0.88,
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
   "t": 63.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.25,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder around the lower window. C2: There is one full-thickness window between the duct and artery, but the upper window between the artery and liver bed is still being dissected by the hook and is not full-thickness. C3: The lower gallbladder is still broadly attached to the liver bed with no second window exposing the cystic plate.",
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete.",
    "examples": [
     "Example 71_13175.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.00). Similarity 0.988.",
     "Example 99_28800.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (1.00). Similarity 0.988.",
     "Example 95_36750.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.988.",
     "Example 95_31125.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 95_38125.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.987.",
     "Example 60_40325.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       23,
       525,
       859,
       860
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       65,
       161,
       764,
       531
      ],
      "confidence": 0.92
     },
     {
      "label": "hook",
      "box_2d": [
       419,
       431,
       642,
       858
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       574,
       321,
       724,
       411
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
     "last": 63.0,
     "best": 0.95,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 63
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 63.0,
     "best": 0.92,
     "hits": 7
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 62.0,
     "best": 0.75,
     "hits": 3
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 63.0,
     "best": 0.9,
     "hits": 14
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 63.0,
     "best": 0.88,
     "hits": 6
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
     "c2": 0.2,
     "c3": 0.5
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder with a window between them. C2: Although there is a clear full-thickness window between the duct and artery, there is no full-thickness window between the artery and the cystic plate, as connective tissue still bridges that space. C3: The lower portion of the gallbladder is partially dissected off the cystic plate, showing a small area of cauterized liver bed, though the full inferior margin is not completely separated.",
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The window between the cystic artery and cystic plate is not yet open through the full thickness of the tissue.",
    "examples": [
     "Example 83_66300.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 20_10225.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.988.",
     "Example 117_25875.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.986.",
     "Example 83_66550.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 83_66800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 42_40525.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       18,
       544,
       769,
       858
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       63,
       173,
       684,
       542
      ],
      "label": "gallbladder",
      "confidence": 0.91
     },
     {
      "box_2d": [
       611,
       349,
       752,
       433
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     },
     {
      "box_2d": [
       737,
       663,
       857,
       811
      ],
      "label": "hook",
      "confidence": 0.77
     },
     {
      "box_2d": [
       655,
       179,
       710,
       262
      ],
      "label": "grasper",
      "confidence": 0.54
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 64.0,
     "best": 1.0,
     "hits": 64
    },
    "liver": {
     "first": 0.0,
     "last": 64.0,
     "best": 1.0,
     "hits": 64
    },
    "fat": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 64
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 64
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 8
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 64.0,
     "best": 0.8,
     "hits": 4
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 7
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
     "c1": 0.75,
     "c2": 0.35,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below and cystic artery above) are seen entering the gallbladder neck, separated by a window. C2: There is one clear full-thickness window between the duct and artery, but the space between the upper structure and the liver bed is still being dissected with the hook and does not yet show a clear second full-thickness window. C3: The lower part of the gallbladder remains largely attached to the liver bed with minimal exposure of the cystic plate.",
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and cystic plate is incomplete.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.988.",
     "Example 95_37750.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 19_17475.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 95_36625.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 42_33775.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       104,
       180,
       712,
       532
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       38,
       520,
       628,
       860
      ],
      "label": "liver",
      "confidence": 0.97
     },
     {
      "box_2d": [
       583,
       485,
       825,
       823
      ],
      "label": "hook",
      "confidence": 0.97
     },
     {
      "box_2d": [
       7,
       484,
       158,
       752
      ],
      "label": "grasper",
      "confidence": 0.74
     },
     {
      "box_2d": [
       672,
       321,
       816,
       408
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
     "last": 65.0,
     "best": 1.0,
     "hits": 65
    },
    "liver": {
     "first": 0.0,
     "last": 65.0,
     "best": 1.0,
     "hits": 65
    },
    "fat": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 65
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 65
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 9
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 64.0,
     "best": 0.8,
     "hits": 4
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 8
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
     "c1": 0.75,
     "c2": 0.45,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are visible entering the lower gallbladder. C2: A clear full-thickness window is seen between the two structures, and a smaller partial opening is developing between the upper structure and the liver bed, though connective tissue still bridges part of it. C3: The lower portion of the gallbladder is dissected away from the liver bed exposing a small patch of the cystic plate, though the separation does not extend far along the inferior margin yet.",
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
    "reason_if_not": "The upper window between the cystic artery and cystic plate is not yet fully cleared to confirm all three CVS criteria with certainty.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.991.",
     "Example 36_6825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 109_19350.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 71_13300.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.989.",
     "Example 71_12925.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       66,
       553,
       874,
       858
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       98,
       223,
       722,
       560
      ],
      "confidence": 0.93
     },
     {
      "label": "hook",
      "box_2d": [
       743,
       332,
       998,
       687
      ],
      "confidence": 0.97
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       648,
       376,
       775,
       462
      ],
      "confidence": 0.77
     },
     {
      "label": "grasper",
      "box_2d": [
       676,
       187,
       762,
       297
      ],
      "confidence": 0.74
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 66.0,
     "best": 1.0,
     "hits": 66
    },
    "liver": {
     "first": 0.0,
     "last": 66.0,
     "best": 1.0,
     "hits": 66
    },
    "fat": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 66
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 66
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 10
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 66.0,
     "best": 0.8,
     "hits": 5
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 9
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
     "c1": 0.78,
     "c2": 0.42,
     "c3": 0.25
    },
    "cvs_evidence": "Two distinct tubular structures (cystic duct and cystic artery) are visible entering the base of the gallbladder. There is a clear full-thickness window between the duct and artery, though the window between the artery and cystic plate is only partially dissected. The lower gallbladder remains largely attached to the liver bed with only a small portion of the cystic plate exposed.",
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
    "reason_if_not": "The hepatocystic triangle is not fully cleared behind the artery and the lower third of the gallbladder is not adequately separated from the cystic plate.",
    "examples": [
     "Example 42_47400.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.987.",
     "Example 20_10225.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 95_38625.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.985.",
     "Example 42_46775.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.986.",
     "Example 88_31700.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.985.",
     "Example 42_47275.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "box_2d": [
       79,
       540,
       885,
       860
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       108,
       178,
       773,
       584
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       648,
       345,
       789,
       435
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     },
     {
      "box_2d": [
       923,
       593,
       998,
       688
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
     "last": 67.0,
     "best": 1.0,
     "hits": 67
    },
    "liver": {
     "first": 0.0,
     "last": 67.0,
     "best": 1.0,
     "hits": 67
    },
    "fat": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 67
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 67
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 11
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 67.0,
     "best": 0.8,
     "hits": 5
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 10
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
     "c1": 0.78,
     "c2": 0.35,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below and cystic artery above) are seen entering the gallbladder with a clear window between them. C2: While there is a full-thickness window between the duct and artery, the space between the artery and the cystic plate is still covered by peritoneum and connective tissue being dissected by the hook. C3: The lower third of the gallbladder is not yet mobilized off the liver bed, and only a small portion of the cystic plate is beginning to be exposed.",
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
      "name": "fat",
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the upper hepatocystic triangle and mobilization of the lower gallbladder off the cystic plate are incomplete.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 42_33775.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.990.",
     "Example 71_13300.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 95_37750.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.990."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       59,
       527,
       876,
       858
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       89,
       166,
       672,
       539
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       555,
       550,
       755,
       847
      ],
      "confidence": 0.99
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       604,
       321,
       747,
       419
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 68.0,
     "best": 1.0,
     "hits": 68
    },
    "liver": {
     "first": 0.0,
     "last": 68.0,
     "best": 1.0,
     "hits": 68
    },
    "fat": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 68
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 68
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 12
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 67.0,
     "best": 0.8,
     "hits": 5
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 11
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
   "t": 69.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.25
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are clearly seen entering the lower gallbladder with a window between them. C2: There is one full-thickness window between the duct and artery, but the space between the artery and the cystic plate is not yet opened into a second window. C3: The gallbladder remains largely attached to the liver bed above the artery, with only minimal exposure of the cystic plate.",
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
      "name": "cystic_plate",
      "confidence": 0.55
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
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "examples": [
     "Example 42_47275.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.988.",
     "Example 107_51550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 111_21375.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.987.",
     "Example 19_46100.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 88_31700.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 42_47400.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       89,
       185,
       786,
       544
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       84,
       539,
       892,
       856
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       623,
       359,
       751,
       447
      ],
      "label": "hepatocystic_window",
      "confidence": 0.85
     },
     {
      "box_2d": [
       609,
       173,
       706,
       269
      ],
      "label": "grasper",
      "confidence": 0.9
     },
     {
      "box_2d": [
       907,
       543,
       998,
       688
      ],
      "label": "grasper",
      "confidence": 0.8
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 69.0,
     "best": 1.0,
     "hits": 69
    },
    "liver": {
     "first": 0.0,
     "last": 69.0,
     "best": 1.0,
     "hits": 69
    },
    "fat": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 69
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 69
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 13
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 69.0,
     "best": 0.8,
     "hits": 5
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 12
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
   "t": 70.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.6,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two distinct tubular structures (the cystic duct inferiorly and the cystic artery superiorly) are clearly skeletonized and seen entering the gallbladder. C2: A large full-thickness window is open between the cystic duct and cystic artery, while the space between the artery and cystic plate is partially dissected with some posterior tissue remaining. C3: The lower gallbladder is partially mobilized off the cystic plate anteriorly, though posterior attachments to the liver bed are still present.",
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
      "confidence": 0.8
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
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 42_40525.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 95_37750.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.987.",
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.987.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       58,
       508,
       850,
       855
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       94,
       163,
       755,
       526
      ],
      "confidence": 0.96
     },
     {
      "label": "hook",
      "box_2d": [
       744,
       616,
       921,
       783
      ],
      "confidence": 0.94
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       635,
       297,
       793,
       404
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       24,
       489,
       162,
       793
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 70.0,
     "best": 1.0,
     "hits": 70
    },
    "liver": {
     "first": 0.0,
     "last": 70.0,
     "best": 1.0,
     "hits": 70
    },
    "fat": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 70
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 70
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 14
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 70.0,
     "best": 0.8,
     "hits": 6
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 13
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
   "t": 71.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.65
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder neck with a window between them. C2: A full-thickness window is present between the duct and artery, though connective tissue still partially obscures the space between the artery and the cystic plate. C3: The lower third of the gallbladder is dissected off the liver bed, exposing the underlying cystic plate.",
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
     "Example 42_47400.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.988.",
     "Example 20_10225.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.986.",
     "Example 95_38500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.986.",
     "Example 42_47275.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.986.",
     "Example 95_38375.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.986."
    ],
    "boxes": [
     {
      "box_2d": [
       73,
       517,
       921,
       859
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       103,
       165,
       870,
       523
      ],
      "label": "gallbladder",
      "confidence": 0.91
     },
     {
      "box_2d": [
       671,
       309,
       809,
       410
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     },
     {
      "box_2d": [
       662,
       237,
       888,
       452
      ],
      "label": "cystic_duct",
      "confidence": 0.74
     },
     {
      "box_2d": [
       247,
       448,
       749,
       569
      ],
      "label": "cystic_plate",
      "confidence": 0.58
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 71.0,
     "best": 1.0,
     "hits": 71
    },
    "liver": {
     "first": 0.0,
     "last": 71.0,
     "best": 1.0,
     "hits": 71
    },
    "fat": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 71
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 71
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 15
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 71.0,
     "best": 0.8,
     "hits": 7
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 14
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
   "t": 72.0,
   "label": {
    "cvs": {
     "c1": 0.6,
     "c2": 0.45,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) are visible at the base of the gallbladder, separated by a window. C2: A full-thickness window is visible between the lower and upper tubular structures, though the tissue between the upper structure and the cystic plate is still being dissected by the hook. C3: The lower part of the gallbladder is partially lifted off the liver bed exposing some cystic plate, though dissection of the peritoneal reflection is still ongoing.",
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
    "reason_if_not": "Dissection between the cystic artery and cystic plate is incomplete, preventing full confirmation of the hepatocystic triangle.",
    "examples": [
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.990.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.988.",
     "Example 95_37125.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.989.",
     "Example 95_36875.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.990.",
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       116,
       500,
       853,
       862
      ],
      "label": "liver",
      "confidence": 0.98
     },
     {
      "box_2d": [
       146,
       165,
       665,
       504
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       689,
       463,
       963,
       761
      ],
      "label": "hook",
      "confidence": 0.95
     },
     {
      "box_2d": [
       47,
       470,
       206,
       821
      ],
      "label": "grasper",
      "confidence": 0.89
     },
     {
      "box_2d": [
       725,
       255,
       888,
       366
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
     "last": 72.0,
     "best": 1.0,
     "hits": 72
    },
    "liver": {
     "first": 0.0,
     "last": 72.0,
     "best": 1.0,
     "hits": 72
    },
    "fat": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 72
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 72
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 16
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 72.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 15
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
   "t": 73.0,
   "label": {
    "cvs": {
     "c1": 0.25,
     "c2": 0.25,
     "c3": 0.15
    },
    "cvs_evidence": "C1: One window is created in the lower hepatocystic triangle, defining two tissue bundles, though the upper bundle is still broad and attached to the cystic plate. C2: There is one full-thickness window visible at the bottom left, while the upper window is still being dissected by the hook and does not yet show a clear through-view. C3: The gallbladder remains largely attached to the liver bed, with only initial dissection along the peritoneal reflection.",
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
      "confidence": 0.6
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the upper hepatocystic triangle and separation from the cystic plate are incomplete.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 60_33200.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 95_36750.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.989.",
     "Example 20_9975.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       133,
       497,
       951,
       863
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       154,
       167,
       715,
       528
      ],
      "confidence": 0.94
     },
     {
      "label": "hook",
      "box_2d": [
       718,
       368,
       1000,
       712
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       73,
       464,
       216,
       828
      ],
      "confidence": 0.88
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       751,
       260,
       915,
       368
      ],
      "confidence": 0.76
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 73.0,
     "best": 1.0,
     "hits": 73
    },
    "liver": {
     "first": 0.0,
     "last": 73.0,
     "best": 1.0,
     "hits": 73
    },
    "fat": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 73
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 73
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 17
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 73.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 15
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
   "t": 74.0,
   "label": {
    "cvs": {
     "c1": 0.45,
     "c2": 0.15,
     "c3": 0.1
    },
    "cvs_evidence": "C1: A window is created between two apparent strands/structures near the base of the gallbladder, though they remain partially covered in fat and connective tissue. C2: There is one full-thickness window between the two strands, but the deeper space toward the cystic plate is still being dissected by the hook and is not cleared through. C3: The lower gallbladder remains attached to the liver bed with no exposed cystic plate along the inferior margin.",
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle and cystic plate is incomplete, with significant fat and connective tissue remaining around the structures.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 42_33775.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 95_36750.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 71_12925.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 95_36875.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 yes (0.67). Similarity 0.989.",
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.990."
    ],
    "boxes": [
     {
      "box_2d": [
       108,
       495,
       855,
       860
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       128,
       163,
       663,
       492
      ],
      "label": "gallbladder",
      "confidence": 0.91
     },
     {
      "box_2d": [
       679,
       429,
       976,
       761
      ],
      "label": "hook",
      "confidence": 0.94
     },
     {
      "box_2d": [
       36,
       458,
       189,
       805
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
     "last": 74.0,
     "best": 1.0,
     "hits": 74
    },
    "liver": {
     "first": 0.0,
     "last": 74.0,
     "best": 1.0,
     "hits": 74
    },
    "fat": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 74
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 74
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 18
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 73.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 15
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
   "t": 75.0,
   "label": {
    "cvs": {
     "c1": 0.65,
     "c2": 0.35,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) are visible at the bottom left separated by a window, running toward the gallbladder. C2: There is one clear full-thickness window between the duct and artery, while the upper space toward the cystic plate is partially dissected with only a tiny opening and remaining connective tissue. C3: The lower gallbladder is still largely attached to the liver bed by peritoneum and connective tissue rather than hanging off a fully exposed cystic plate.",
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
    "reason_if_not": "The upper hepatocystic triangle and cystic plate require further dissection to fully clear the posterior window and lift the lower gallbladder off the liver bed.",
    "examples": [
     "Example 74_9925.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.989.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.989.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 60_35950.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 20_9975.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989.",
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       95,
       499,
       959,
       859
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       114,
       163,
       1000,
       639
      ],
      "confidence": 0.95
     },
     {
      "label": "hook",
      "box_2d": [
       635,
       575,
       853,
       821
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       33,
       461,
       184,
       804
      ],
      "confidence": 0.76
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       711,
       260,
       866,
       369
      ],
      "confidence": 0.65
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 75.0,
     "best": 1.0,
     "hits": 75
    },
    "liver": {
     "first": 0.0,
     "last": 75.0,
     "best": 1.0,
     "hits": 75
    },
    "fat": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 75
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 75
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 19
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 73.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 16
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
     "c2": 0.4,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder neck with a window between them. C2: While there is a clear full-thickness window between the duct and the artery, the space above the artery toward the cystic plate is still filled with intact peritoneum and fat, so a second window is not yet created. C3: The peritoneum along the hepatocystic junction is still intact and the lower gallbladder is not separated from the liver bed to expose the cystic plate.",
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
      "confidence": 0.88
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
    "can_confirm_anatomy": false,
    "reason_if_not": "The upper portion of the hepatocystic triangle and the cystic plate have not yet been dissected free from the liver bed.",
    "examples": [
     "Example 42_47400.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.984.",
     "Example 107_51550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.984.",
     "Example 95_38250.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.984.",
     "Example 71_13800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.984.",
     "Example 95_38500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.984.",
     "Example 60_40450.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       77,
       497,
       946,
       852
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       98,
       162,
       706,
       506
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       655,
       303,
       791,
       401
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       76,
       480,
       181,
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
     "last": 76.0,
     "best": 1.0,
     "hits": 76
    },
    "liver": {
     "first": 0.0,
     "last": 76.0,
     "best": 1.0,
     "hits": 76
    },
    "fat": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 76
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 76
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 20
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 73.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 17
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
     "c1": 0.45,
     "c2": 0.2,
     "c3": 0.05
    },
    "cvs_evidence": "C1: One clear tubular structure (cystic duct) is visible with a window below it, and a second structure (cystic artery) is partially outlined above, though still attached to connective tissue. C2: There is one full-thickness window visible below the main structure, but the upper part of the hepatocystic triangle between the artery and the liver bed is still covered by intact peritoneum and fat. C3: The lower part of the gallbladder remains attached to the liver bed with no dissection exposing the cystic plate.",
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
      "confidence": 0.65
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
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not fully cleared of fat and connective tissue, and the gallbladder is not yet mobilized off the cystic plate.",
    "examples": [
     "Example 71_12800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.990.",
     "Example 74_9925.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.990.",
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.989.",
     "Example 36_6825.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       121,
       498,
       856,
       864
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       140,
       164,
       690,
       520
      ],
      "label": "gallbladder",
      "confidence": 0.92
     },
     {
      "box_2d": [
       702,
       457,
       986,
       756
      ],
      "label": "hook",
      "confidence": 0.96
     },
     {
      "box_2d": [
       56,
       462,
       203,
       815
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
     "last": 77.0,
     "best": 1.0,
     "hits": 77
    },
    "liver": {
     "first": 0.0,
     "last": 77.0,
     "best": 1.0,
     "hits": 77
    },
    "fat": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 77
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 77
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 21
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 73.0,
     "best": 0.8,
     "hits": 8
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 17
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
     "c3": 0.55
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are visible at the bottom left entering the gallbladder, separated by a clear window. C2: There is a clear full-thickness window between the duct and artery, though the window between the artery and the cystic plate is still partially filled with connective tissue being dissected by the hook. C3: The cystic plate is exposed along the medial aspect between the gallbladder and liver, though the very upper portion still has some attached tissue.",
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "examples": [
     "Example 95_37500.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 20_9975.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.988.",
     "Example 74_9925.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 109_20725.jpg: experts said C1 no (0.33), C2 no (0.33), C3 yes (1.00). Similarity 0.988.",
     "Example 71_13550.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       146,
       507,
       938,
       863
      ],
      "confidence": 0.95,
      "label": "liver"
     },
     {
      "box_2d": [
       168,
       178,
       996,
       550
      ],
      "confidence": 0.88,
      "label": "gallbladder"
     },
     {
      "box_2d": [
       803,
       456,
       1000,
       715
      ],
      "confidence": 0.96,
      "label": "hook"
     },
     {
      "box_2d": [
       85,
       477,
       233,
       824
      ],
      "confidence": 0.89,
      "label": "grasper"
     },
     {
      "box_2d": [
       744,
       287,
       896,
       396
      ],
      "confidence": 0.53,
      "label": "hepatocystic_window"
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 78.0,
     "best": 1.0,
     "hits": 78
    },
    "liver": {
     "first": 0.0,
     "last": 78.0,
     "best": 1.0,
     "hits": 78
    },
    "fat": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 78
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 78
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 22
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 78.0,
     "best": 0.8,
     "hits": 9
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 18
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
     "c1": 0.65,
     "c2": 0.2,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two tubular structures are discernible separated by a window in the lower hepatocystic triangle, though the upper structure is still partially covered by connective tissue. C2: There is one full-thickness window visible between the two structures at the bottom left, but the space between the upper structure and the cystic plate is still filled with fat and connective tissue. C3: The gallbladder remains largely attached to the liver bed with minimal exposure of the cystic plate.",
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection of the upper hepatocystic triangle and cystic plate prevents full confirmation of the Critical View of Safety.",
    "examples": [
     "Example 42_47400.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.986.",
     "Example 107_51550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.984.",
     "Example 95_38375.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.985.",
     "Example 42_47275.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.985.",
     "Example 95_38250.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.985.",
     "Example 71_13675.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       167,
       477,
       984,
       856
      ],
      "confidence": 0.95
     },
     {
      "label": "gallbladder",
      "box_2d": [
       168,
       162,
       990,
       560
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       725,
       258,
       868,
       355
      ],
      "confidence": 0.8
     },
     {
      "label": "grasper",
      "box_2d": [
       89,
       459,
       237,
       826
      ],
      "confidence": 0.75
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 79.0,
     "best": 1.0,
     "hits": 79
    },
    "liver": {
     "first": 0.0,
     "last": 79.0,
     "best": 1.0,
     "hits": 79
    },
    "fat": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 79
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 79
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 15
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 23
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 78.0,
     "best": 0.8,
     "hits": 9
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 19
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
     "c2": 0.4,
     "c3": 0.2
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct and cystic artery) are visible at the bottom of the frame connecting to the gallbladder, with a window between them. C2: There is one clear full-thickness window between the duct and artery, while the space between the artery and cystic plate is partially dissected but still covered by peritoneum/connective tissue. C3: The gallbladder is still largely attached to the liver bed with only minimal separation at the base, so a hanging gallbladder and full cystic plate are not yet achieved.",
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
      "name": "hepatocystic_window",
      "confidence": 0.95
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
    "reason_if_not": "The hepatocystic triangle above the cystic artery and the cystic plate are not yet fully dissected free of peritoneum and connective tissue.",
    "examples": [
     "Example 71_13675.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 42_40525.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 95_38250.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.986.",
     "Example 71_13800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 117_30250.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.984."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       152,
       499,
       988,
       859
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       217,
       178,
       996,
       606
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       89,
       467,
       232,
       831
      ],
      "confidence": 0.9
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       743,
       331,
       909,
       434
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 80.0,
     "best": 1.0,
     "hits": 80
    },
    "liver": {
     "first": 0.0,
     "last": 80.0,
     "best": 1.0,
     "hits": 80
    },
    "fat": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 80
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 80
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 80.0,
     "best": 0.9,
     "hits": 16
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 24
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 80.0,
     "best": 0.8,
     "hits": 9
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 20
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
     "c1": 0.85,
     "c2": 0.45,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are visible at the bottom of the hepatocystic triangle entering the gallbladder, separated by a clear window. C2: One full-thickness window is clearly visible between the two tubular structures, though the upper window between the medial structure and the cystic plate is not yet open. C3: The lower part of the gallbladder remains largely attached to the liver bed with connective tissue and fat, so the cystic plate is not fully exposed along the inferior margin.",
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
    "reason_if_not": "The hepatocystic triangle is not completely cleared above the cystic artery and the lower gallbladder is not yet mobilized off the cystic plate.",
    "examples": [
     "Example 95_38250.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 44_41975.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 117_30250.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.986.",
     "Example 3_16275.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.987.",
     "Example 74_11675.jpg: experts said C1 no (0.33), C2 no (0.00), C3 yes (0.67). Similarity 0.986.",
     "Example 71_13800.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       155,
       494,
       960,
       861
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       155,
       190,
       855,
       515
      ],
      "label": "gallbladder",
      "confidence": 0.94
     },
     {
      "box_2d": [
       66,
       492,
       240,
       832
      ],
      "label": "grasper",
      "confidence": 0.88
     },
     {
      "box_2d": [
       712,
       387,
       850,
       466
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
     "last": 81.0,
     "best": 1.0,
     "hits": 81
    },
    "liver": {
     "first": 0.0,
     "last": 81.0,
     "best": 1.0,
     "hits": 81
    },
    "fat": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 81
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 81
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 25
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 80.0,
     "best": 0.8,
     "hits": 9
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 21
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
     "c1": 0.65,
     "c2": 0.25,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two tubular structures (cystic duct below, cystic artery above) are seen entering the gallbladder with a clear window between them. C2: There is one full-thickness window between the duct and artery, but the upper part of the triangle between the artery and the cystic plate is not cleared and has no window. C3: The lower gallbladder remains attached to the liver bed with peritoneum still intact, so the cystic plate is not exposed.",
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
    "reason_if_not": "The hepatocystic triangle is not fully cleared above the cystic artery and the lower gallbladder is not dissected off the cystic plate.",
    "examples": [
     "Example 49_28600.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 71_12175.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 109_19100.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.987.",
     "Example 71_13675.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 3_15900.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 102_32875.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       136,
       508,
       948,
       860
      ],
      "confidence": 0.99
     },
     {
      "label": "gallbladder",
      "box_2d": [
       140,
       206,
       990,
       690
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       693,
       418,
       836,
       494
      ],
      "confidence": 0.81
     },
     {
      "label": "grasper",
      "box_2d": [
       75,
       496,
       222,
       808
      ],
      "confidence": 0.88
     },
     {
      "label": "grasper",
      "box_2d": [
       719,
       201,
       766,
       321
      ],
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 82.0,
     "best": 1.0,
     "hits": 82
    },
    "liver": {
     "first": 0.0,
     "last": 82.0,
     "best": 1.0,
     "hits": 82
    },
    "fat": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 82
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 82
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 26
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 80.0,
     "best": 0.8,
     "hits": 9
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 22
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
     "c1": 0.75,
     "c2": 0.45,
     "c3": 0.1
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are visible entering the base of the gallbladder with a clear window between them. C2: There is one full-thickness window visible between the two tubular structures, though a second window between the upper structure and the cystic plate is not yet open. C3: The gallbladder remains largely attached to the liver bed with the peritoneum intact along the hepatocystic junction, so the cystic plate is not yet exposed.",
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
      "confidence": 0.9
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The lower part of the gallbladder has not been separated from the cystic plate and the hepatocystic triangle is only partially cleared.",
    "examples": [
     "Example 42_46775.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 19_46100.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 95_38375.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 42_47400.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 95_38250.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 42_47275.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       152,
       192,
       792,
       516
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       136,
       499,
       955,
       861
      ],
      "confidence": 0.96
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       719,
       394,
       864,
       471
      ],
      "confidence": 0.77
     },
     {
      "label": "grasper",
      "box_2d": [
       63,
       491,
       209,
       813
      ],
      "confidence": 0.83
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 83.0,
     "best": 1.0,
     "hits": 83
    },
    "liver": {
     "first": 0.0,
     "last": 83.0,
     "best": 1.0,
     "hits": 83
    },
    "fat": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 83
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 83
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 27
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 80.0,
     "best": 0.8,
     "hits": 9
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 23
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
   "t": 84.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.55,
     "c3": 0.45
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct inferiorly and cystic artery superiorly) are clearly delineated entering the gallbladder with a full-thickness window between them. C2: One clear full-thickness window is visible between the duct and artery, though the window between the artery and the cystic plate is not fully opened through to the background. C3: The cystic plate is exposed behind the gallbladder neck, though fat and incomplete separation superiorly make full clearance borderline.",
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
    "examples": [
     "Example 42_47400.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 19_46100.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 95_38250.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 42_47275.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 95_38625.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       502,
       861,
       853
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       31,
       164,
       630,
       507
      ],
      "confidence": 0.95
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       569,
       360,
       724,
       453
      ],
      "confidence": 0.85
     },
     {
      "label": "grasper",
      "box_2d": [
       611,
       170,
       704,
       261
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 84.0,
     "best": 1.0,
     "hits": 84
    },
    "liver": {
     "first": 0.0,
     "last": 84.0,
     "best": 1.0,
     "hits": 84
    },
    "fat": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 84
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 84
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 28
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 84.0,
     "best": 0.8,
     "hits": 10
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 24
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
   "t": 85.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.4,
     "c3": 0.3
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct and cystic artery) are clearly visible entering the gallbladder, separated by a window. C2: There is one clear full-thickness window between the duct and artery, though the space between the artery and the cystic plate still has connective tissue bridging it without a clear second full-thickness window. C3: The cystic plate is partially exposed behind the artery, but the lower part of the gallbladder is not fully mobilized off the liver bed to create a clear hanging gallbladder view.",
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Incomplete dissection between the cystic artery and cystic plate prevents full confirmation of all three CVS criteria.",
    "examples": [
     "Example 42_47275.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 107_51550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.990.",
     "Example 117_30250.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.987.",
     "Example 42_47400.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 88_31700.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 yes (0.67). Similarity 0.987.",
     "Example 19_46100.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988."
    ],
    "boxes": [
     {
      "box_2d": [
       17,
       524,
       799,
       859
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       33,
       165,
       621,
       516
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       555,
       363,
       703,
       456
      ],
      "label": "hepatocystic_window",
      "confidence": 0.88
     },
     {
      "box_2d": [
       584,
       169,
       667,
       256
      ],
      "label": "grasper",
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 85.0,
     "best": 1.0,
     "hits": 85
    },
    "liver": {
     "first": 0.0,
     "last": 85.0,
     "best": 1.0,
     "hits": 85
    },
    "fat": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 85
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 85
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 29
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 85.0,
     "best": 0.8,
     "hits": 11
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 25
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
   "t": 86.0,
   "label": {
    "cvs": {
     "c1": 0.72,
     "c2": 0.42,
     "c3": 0.55
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct inferiorly and cystic artery superiorly) are dissected and seen entering the gallbladder neck, separated by a clear window. C2: There is one full-thickness window between the duct and artery through which background liver is visible, though a second window between the artery and the cystic plate is not fully opened. C3: The cystic plate is exposed on the liver bed behind the gallbladder neck, though separation along the entire inferior margin is borderline.",
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
    "examples": [
     "Example 42_47400.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.990.",
     "Example 20_10225.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.990.",
     "Example 95_38250.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.988.",
     "Example 42_47275.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.33). Similarity 0.989.",
     "Example 107_51550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 yes (0.67). Similarity 0.989."
    ],
    "boxes": [
     {
      "box_2d": [
       0,
       488,
       806,
       860
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       9,
       169,
       575,
       514
      ],
      "label": "gallbladder",
      "confidence": 0.93
     },
     {
      "box_2d": [
       140,
       446,
       638,
       579
      ],
      "label": "cystic_plate",
      "confidence": 0.77
     },
     {
      "box_2d": [
       535,
       361,
       674,
       460
      ],
      "label": "hepatocystic_window",
      "confidence": 0.83
     },
     {
      "box_2d": [
       549,
       165,
       626,
       257
      ],
      "label": "grasper",
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 86.0,
     "best": 1.0,
     "hits": 86
    },
    "liver": {
     "first": 0.0,
     "last": 86.0,
     "best": 1.0,
     "hits": 86
    },
    "fat": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 86
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 86
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 30
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 86.0,
     "best": 0.85,
     "hits": 12
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 26
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
   "t": 87.0,
   "label": {
    "cvs": {
     "c1": 0.9,
     "c2": 0.85,
     "c3": 0.85
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above) are clearly seen entering the lower gallbladder. C2: There is a full-thickness window visible between the cystic duct and artery, and a cleared space between the artery and the cystic plate where the dissector is positioned. C3: The lower third of the gallbladder is dissected off the liver bed, clearly exposing the cystic plate behind the cystic artery.",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "examples": [
     "Example 96_81950.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (0.67). Similarity 0.987.",
     "Example 52_25550.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 90_33500.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 33_22325.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.986.",
     "Example 76_55350.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (0.67). Similarity 0.986.",
     "Example 79_32850.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.33). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       4,
       175,
       608,
       514
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       0,
       501,
       766,
       836
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       238,
       472,
       479,
       860
      ],
      "confidence": 0.97
     },
     {
      "label": "grasper",
      "box_2d": [
       591,
       169,
       673,
       263
      ],
      "confidence": 0.72
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       565,
       364,
       679,
       458
      ],
      "confidence": 0.88
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 87.0,
     "best": 1.0,
     "hits": 87
    },
    "liver": {
     "first": 0.0,
     "last": 87.0,
     "best": 1.0,
     "hits": 87
    },
    "fat": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 87
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 87
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 31
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 87.0,
     "best": 0.9,
     "hits": 13
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 36
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 27
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
   "t": 88.0,
   "label": {
    "cvs": {
     "c1": 0.85,
     "c2": 0.85,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery above in the grasper jaws) are clearly seen entering the gallbladder. C2: A full-thickness window is visible between the cystic duct and cystic artery, and the grasper is passed behind the cystic artery demonstrating clearance to the cystic plate. C3: The lower part of the gallbladder is dissected off the liver bed, exposing the whitish cystic plate above the cystic artery.",
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
      "confidence": 0.88
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
     "Example 42_46525.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.989.",
     "Example 42_48650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 94_18750.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (0.67). Similarity 0.986.",
     "Example 28_24975.jpg: experts said C1 yes (1.00), C2 no (0.33), C3 no (0.33). Similarity 0.988.",
     "Example 111_25000.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "label": "liver",
      "box_2d": [
       0,
       483,
       597,
       859
      ],
      "confidence": 0.98
     },
     {
      "label": "gallbladder",
      "box_2d": [
       19,
       189,
       682,
       530
      ],
      "confidence": 0.96
     },
     {
      "label": "clipper",
      "box_2d": [
       508,
       439,
       798,
       847
      ],
      "confidence": 0.95
     },
     {
      "label": "grasper",
      "box_2d": [
       587,
       168,
       664,
       277
      ],
      "confidence": 0.72
     },
     {
      "label": "cystic_artery",
      "box_2d": [
       506,
       394,
       632,
       495
      ],
      "confidence": 0.75
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       569,
       381,
       680,
       471
      ],
      "confidence": 0.71
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 88.0,
     "best": 1.0,
     "hits": 88
    },
    "liver": {
     "first": 0.0,
     "last": 88.0,
     "best": 1.0,
     "hits": 88
    },
    "fat": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 88
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 88
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 81.0,
     "best": 0.9,
     "hits": 17
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 88.0,
     "best": 0.9,
     "hits": 14
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 28
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
     "on": true,
     "since": 86.0
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
     "since": 86.0
    }
   ]
  },
  {
   "t": 89.0,
   "label": {
    "cvs": {
     "c1": 0.05,
     "c2": 0.05,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two distinct tubular structures are not yet clearly isolated and visible entering the gallbladder due to surrounding fat and peritoneal attachments. C2: The hepatocystic triangle is still covered by connective tissue and fat, with no full-thickness windows visible. C3: The peritoneum along the gallbladder-liver junction is intact and the lower gallbladder is not yet separated to expose the cystic plate.",
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
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is at an early stage and the cystic duct and artery are still obscured by fat and connective tissue.",
    "examples": [
     "Example 71_14175.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 42_48650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 117_25875.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.988.",
     "Example 71_13425.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 117_22125.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (1.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "box_2d": [
       38,
       192,
       609,
       520
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       0,
       509,
       631,
       859
      ],
      "label": "liver",
      "confidence": 0.96
     },
     {
      "box_2d": [
       550,
       403,
       856,
       842
      ],
      "label": "irrigator",
      "confidence": 0.94
     },
     {
      "box_2d": [
       593,
       169,
       668,
       287
      ],
      "label": "grasper",
      "confidence": 0.73
     }
    ]
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 89.0,
     "best": 1.0,
     "hits": 89
    },
    "liver": {
     "first": 0.0,
     "last": 89.0,
     "best": 1.0,
     "hits": 89
    },
    "fat": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 89
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 89
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 88.0,
     "best": 0.9,
     "hits": 14
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 28
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
     "on": true,
     "since": 86.0
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
     "c2": 0.05,
     "c3": 0.1
    },
    "cvs_evidence": "C1: A large instrument shaft from the right occludes the hepatocystic triangle, so two distinct tubular structures entering the gallbladder cannot be seen. C2: The hepatocystic triangle is largely blocked by the instrument and remaining fat/connective tissue, with no clear full-thickness windows visible. C3: The gallbladder remains attached to the liver bed and the lower cystic plate is obscured by the instrument.",
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
     "grasper",
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "A large instrument shaft from the right side occludes the view of the hepatocystic triangle and cystic structures.",
    "examples": [
     "Example 71_14175.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 42_43400.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.33). Similarity 0.987.",
     "Example 42_46525.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.987.",
     "Example 42_48650.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 107_56425.jpg: experts said C1 no (0.00), C2 yes (0.67), C3 yes (1.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "box_2d": [
       49,
       208,
       577,
       541
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       7,
       523,
       575,
       863
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       684,
       189,
       930,
       591
      ],
      "label": "liver",
      "confidence": 0.9
     },
     {
      "box_2d": [
       517,
       398,
       837,
       851
      ],
      "label": "irrigator",
      "confidence": 0.88
     },
     {
      "box_2d": [
       564,
       166,
       681,
       299
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
     "last": 90.0,
     "best": 1.0,
     "hits": 89
    },
    "liver": {
     "first": 0.0,
     "last": 90.0,
     "best": 1.0,
     "hits": 89
    },
    "fat": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 89
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 89
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 32
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 88.0,
     "best": 0.9,
     "hits": 14
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 37
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 28
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
     "on": true,
     "since": 86.0
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
     "c2": 0.85,
     "c3": 0.75
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct anteriorly and cystic artery posteriorly) are clearly seen entering the gallbladder. C2: A clear full-thickness window is visible between the cystic duct and cystic artery, and dissection between the artery and cystic plate exposes the underlying liver bed. C3: The lower third of the gallbladder is dissected away from the liver bed, exposing the whitish-yellow cystic plate behind the structures.",
    "phase": "clipping_and_cutting",
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
     "clipper",
     "grasper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": true,
    "reason_if_not": "",
    "examples": [
     "Example 71_13925.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.990.",
     "Example 42_46650.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 no (0.33). Similarity 0.989.",
     "Example 42_46525.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.989.",
     "Example 71_14050.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 111_25000.jpg: experts said C1 yes (0.67), C2 yes (1.00), C3 yes (1.00). Similarity 0.987."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       68,
       179,
       649,
       521
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       27,
       516,
       855,
       846
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       490,
       617,
       803,
       856
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       638,
       178,
       712,
       263
      ],
      "confidence": 0.65
     },
     {
      "label": "cystic_plate",
      "box_2d": [
       211,
       478,
       737,
       599
      ],
      "confidence": 0.74
     },
     {
      "label": "hepatocystic_window",
      "box_2d": [
       608,
       360,
       741,
       451
      ],
      "confidence": 0.81
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 91.0,
     "best": 1.0,
     "hits": 90
    },
    "liver": {
     "first": 0.0,
     "last": 91.0,
     "best": 1.0,
     "hits": 90
    },
    "fat": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 90
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 89.0,
     "best": 0.9,
     "hits": 18
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 33
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 91.0,
     "best": 0.9,
     "hits": 15
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 38
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 29
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
     "on": true,
     "since": 86.0
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
     "c1": 0.85,
     "c2": 0.75,
     "c3": 0.15
    },
    "cvs_evidence": "C1: Two distinct tubular structures (cystic duct below, cystic artery being grasped by the dissector above) are clearly seen entering the gallbladder. C2: There is a clear full-thickness window between the duct and artery showing the liver behind, and the dissector is passing behind the artery demonstrating clearance above it. C3: The lower portion of the gallbladder remains largely attached to the liver bed with minimal exposure of the cystic plate.",
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
      "name": "abdominal_wall",
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
    "examples": [
     "Example 42_46525.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.988.",
     "Example 24_21850.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 117_22125.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (1.00). Similarity 0.986.",
     "Example 71_14175.jpg: experts said C1 yes (0.67), C2 no (0.00), C3 no (0.00). Similarity 0.987.",
     "Example 4_37450.jpg: experts said C1 yes (1.00), C2 yes (1.00), C3 yes (1.00). Similarity 0.985."
    ],
    "boxes": [
     {
      "label": "gallbladder",
      "box_2d": [
       49,
       188,
       634,
       533
      ],
      "confidence": 0.95
     },
     {
      "label": "liver",
      "box_2d": [
       10,
       508,
       688,
       860
      ],
      "confidence": 0.96
     },
     {
      "label": "grasper",
      "box_2d": [
       568,
       429,
       883,
       828
      ],
      "confidence": 0.94
     },
     {
      "label": "grasper",
      "box_2d": [
       619,
       173,
       706,
       281
      ],
      "confidence": 0.82
     },
     {
      "label": "grasper",
      "box_2d": [
       2,
       497,
       127,
       663
      ],
      "confidence": 0.77
     }
    ]
   },
   "can_confirm": true,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 92.0,
     "best": 1.0,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 92.0,
     "best": 1.0,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 91
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 92.0,
     "best": 0.9,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 34
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 91.0,
     "best": 0.9,
     "hits": 15
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 39
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 30
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
     "on": true,
     "since": 86.0
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
     "c2": 0.35,
     "c3": 0.05
    },
    "cvs_evidence": "C1: Two tubular structures (the lower cystic duct and upper cystic artery held in the grasper) are visible entering the gallbladder. C2: A window is visible between the lower structure and the upper structure, though the upper window to the cystic plate is not fully cleared and is partially obscured by the grasper. C3: The lower portion of the gallbladder remains attached to the liver bed with no dissected cystic plate window visible above the artery.",
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
    "reason_if_not": "The lower part of the gallbladder is not yet separated from the cystic plate, and the upper hepatocystic window is not fully dissected.",
    "examples": [
     "Example 38_50725.jpg: experts said C1 yes (0.67), C2 no (0.33), C3 no (0.00). Similarity 0.988.",
     "Example 24_16975.jpg: experts said C1 no (0.33), C2 no (0.00), C3 no (0.00). Similarity 0.989.",
     "Example 42_46525.jpg: experts said C1 yes (0.67), C2 yes (0.67), C3 no (0.33). Similarity 0.988.",
     "Example 24_21850.jpg: experts said C1 no (0.00), C2 no (0.00), C3 no (0.00). Similarity 0.988.",
     "Example 117_22125.jpg: experts said C1 no (0.33), C2 yes (0.67), C3 yes (1.00). Similarity 0.986."
    ],
    "boxes": [
     {
      "box_2d": [
       47,
       186,
       638,
       529
      ],
      "label": "gallbladder",
      "confidence": 0.95
     },
     {
      "box_2d": [
       10,
       512,
       687,
       856
      ],
      "label": "liver",
      "confidence": 0.95
     },
     {
      "box_2d": [
       570,
       429,
       881,
       827
      ],
      "label": "grasper",
      "confidence": 0.93
     },
     {
      "box_2d": [
       620,
       174,
       706,
       283
      ],
      "label": "grasper",
      "confidence": 0.72
     },
     {
      "box_2d": [
       0,
       500,
       127,
       648
      ],
      "label": "grasper",
      "confidence": 0.75
     },
     {
      "box_2d": [
       587,
       425,
       694,
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
     "best": 1.0,
     "hits": 92
    },
    "liver": {
     "first": 0.0,
     "last": 93.0,
     "best": 1.0,
     "hits": 92
    },
    "fat": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 92
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 92
    },
    "blood": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.6,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 6.0,
     "last": 92.0,
     "best": 0.9,
     "hits": 19
    },
    "hepatocystic_window": {
     "first": 25.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 35
    },
    "cystic_plate": {
     "first": 38.0,
     "last": 91.0,
     "best": 0.9,
     "hits": 15
    },
    "cystic_duct": {
     "first": 41.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 40
    },
    "cystic_artery": {
     "first": 51.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 31
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
     "on": true,
     "since": 86.0
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
  "C1": 0.8461538461538461,
  "C1_caught": [
   5,
   7
  ],
  "C2": 0.6153846153846154,
  "C2_caught": [
   1,
   6
  ],
  "C3": 0.6923076923076923,
  "C3_caught": [
   1,
   5
  ]
 },
 "rules": {
  "confirm_conf": 0.7,
  "confirm_frames": 2
 }
};
