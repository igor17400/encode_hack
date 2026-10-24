window.TIMELINE = {
 "video": "videos/endo198.mp4",
 "model": "gemini-4-argon",
 "every": 1.0,
 "frames": [
  {
   "t": 29.0,
   "label": {
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
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.7
     },
     {
      "name": "cystic_duct",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress; the cystic duct and cystic artery are not yet fully isolated from the surrounding fat and connective tissue.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 1
    },
    "liver": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.95,
     "hits": 1
    },
    "fat": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.9,
     "hits": 1
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.85,
     "hits": 1
    },
    "gi_tract": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.85,
     "hits": 1
    },
    "blood": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.7,
     "hits": 1
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 34.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.96
     },
     {
      "name": "liver",
      "confidence": 0.94
     },
     {
      "name": "fat",
      "confidence": 0.92
     },
     {
      "name": "connective_tissue",
      "confidence": 0.91
     },
     {
      "name": "blood",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.82
     },
     {
      "name": "gi_tract",
      "confidence": 0.78
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is only partially dissected; cystic duct and cystic artery are not yet clearly isolated and identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.96,
     "hits": 2
    },
    "liver": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.95,
     "hits": 2
    },
    "fat": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.92,
     "hits": 2
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.91,
     "hits": 2
    },
    "gi_tract": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 2
    },
    "blood": {
     "first": 29.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 2
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 34.0,
     "best": 0.82,
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
    "phase": "gallbladder_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.96
     },
     {
      "name": "gallbladder",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.94
     },
     {
      "name": "gi_tract",
      "confidence": 0.88
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.78
     },
     {
      "name": "blood",
      "confidence": 0.65
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "occluded",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle and ductal structures are not in view; the grasper shaft partially occludes the operative field while the hook dissects the gallbladder from the liver bed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.96,
     "hits": 2
    },
    "liver": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.96,
     "hits": 2
    },
    "fat": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.94,
     "hits": 2
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.91,
     "hits": 2
    },
    "gi_tract": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.88,
     "hits": 2
    },
    "blood": {
     "first": 29.0,
     "last": 39.0,
     "best": 0.85,
     "hits": 2
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 39.0,
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
   "t": 44.0,
   "label": {
    "phase": "gallbladder_dissection",
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
      "name": "gi_tract",
      "confidence": 0.92
     },
     {
      "name": "abdominal_wall",
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle and ductal structures are not in the field of view; the camera is focused on the dissection of the gallbladder from the liver bed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.96,
     "hits": 3
    },
    "liver": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.98,
     "hits": 3
    },
    "fat": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 3
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.91,
     "hits": 3
    },
    "gi_tract": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.92,
     "hits": 3
    },
    "blood": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.85,
     "hits": 3
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 44.0,
     "best": 0.9,
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
   "t": 49.0,
   "label": {
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
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress; cystic duct and cystic artery are not yet clearly isolated and identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.96,
     "hits": 4
    },
    "liver": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.98,
     "hits": 4
    },
    "fat": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 4
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.91,
     "hits": 4
    },
    "gi_tract": {
     "first": 29.0,
     "last": 44.0,
     "best": 0.92,
     "hits": 3
    },
    "blood": {
     "first": 29.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 4
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 49.0,
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
   "t": 54.0,
   "label": {
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
     },
     {
      "name": "blood",
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is ongoing; the cystic duct and cystic artery are not yet clearly isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.96,
     "hits": 5
    },
    "liver": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.98,
     "hits": 5
    },
    "fat": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 5
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.91,
     "hits": 5
    },
    "gi_tract": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.92,
     "hits": 3
    },
    "blood": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 5
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 54.0,
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
   "t": 59.0,
   "label": {
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
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is ongoing; the cystic duct and cystic artery are not yet clearly isolated and identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.96,
     "hits": 6
    },
    "liver": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.98,
     "hits": 6
    },
    "fat": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 6
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.91,
     "hits": 6
    },
    "gi_tract": {
     "first": 29.0,
     "last": 59.0,
     "best": 0.92,
     "hits": 4
    },
    "blood": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 5
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 59.0,
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
   "t": 64.0,
   "label": {
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
      "name": "abdominal_wall",
      "confidence": 0.8
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
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
    "reason_if_not": "The hepatocystic triangle is still covered in fat and connective tissue; the cystic duct and artery are not yet clearly isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.96,
     "hits": 7
    },
    "liver": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.98,
     "hits": 7
    },
    "fat": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 7
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.91,
     "hits": 7
    },
    "gi_tract": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.92,
     "hits": 4
    },
    "blood": {
     "first": 29.0,
     "last": 54.0,
     "best": 0.85,
     "hits": 5
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 64.0,
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
   "t": 69.0,
   "label": {
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress; cystic duct and artery are not yet clearly isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.96,
     "hits": 8
    },
    "liver": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.98,
     "hits": 8
    },
    "fat": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 8
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.91,
     "hits": 8
    },
    "gi_tract": {
     "first": 29.0,
     "last": 64.0,
     "best": 0.92,
     "hits": 4
    },
    "blood": {
     "first": 29.0,
     "last": 69.0,
     "best": 0.85,
     "hits": 5
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
     "best": 0.4,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 69.0,
     "best": 0.95,
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
   "t": 74.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.96
     },
     {
      "name": "liver",
      "confidence": 0.92
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
      "confidence": 0.72
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.88
     },
     {
      "name": "gi_tract",
      "confidence": 0.78
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is still obscured by fat and connective tissue; the cystic duct and cystic artery are not both clearly isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.96,
     "hits": 9
    },
    "liver": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.98,
     "hits": 9
    },
    "fat": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 9
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.91,
     "hits": 9
    },
    "gi_tract": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.92,
     "hits": 5
    },
    "blood": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.85,
     "hits": 6
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 74.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 74.0,
     "best": 0.95,
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
   "t": 79.0,
   "label": {
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
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
     },
     {
      "name": "blood",
      "confidence": 0.7
     },
     {
      "name": "cystic_duct",
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
    "reason_if_not": "The hepatocystic triangle is still filled with fat and connective tissue, and the cystic duct and artery are not yet skeletonized or clearly differentiated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.96,
     "hits": 10
    },
    "liver": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.98,
     "hits": 10
    },
    "fat": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 10
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.91,
     "hits": 10
    },
    "gi_tract": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.92,
     "hits": 6
    },
    "blood": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 7
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 79.0,
     "best": 0.95,
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
   "t": 84.0,
   "label": {
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
    "reason_if_not": "The hepatocystic triangle is still largely covered by peritoneum and fat; cystic duct and artery are not yet clearly isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.96,
     "hits": 11
    },
    "liver": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.98,
     "hits": 11
    },
    "fat": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 11
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.91,
     "hits": 11
    },
    "gi_tract": {
     "first": 29.0,
     "last": 84.0,
     "best": 0.92,
     "hits": 7
    },
    "blood": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 7
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 10
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
   "t": 89.0,
   "label": {
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
      "name": "abdominal_wall",
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
    "reason_if_not": "The hepatocystic triangle is still covered by peritoneum and fibrous tissue; the cystic duct and cystic artery are not yet clearly isolated and identified entering the gallbladder.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.96,
     "hits": 12
    },
    "liver": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 12
    },
    "fat": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 12
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.91,
     "hits": 12
    },
    "gi_tract": {
     "first": 29.0,
     "last": 89.0,
     "best": 0.92,
     "hits": 8
    },
    "blood": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 7
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 11
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
   "t": 94.0,
   "label": {
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection of the hepatocystic triangle has just begun; ductal and arterial structures remain obscured by peritoneum and fat.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.96,
     "hits": 13
    },
    "liver": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.98,
     "hits": 13
    },
    "fat": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 13
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.91,
     "hits": 13
    },
    "gi_tract": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.92,
     "hits": 8
    },
    "blood": {
     "first": 29.0,
     "last": 94.0,
     "best": 0.85,
     "hits": 8
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 12
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
   "t": 99.0,
   "label": {
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
      "name": "abdominal_wall",
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
    "reason_if_not": "The hepatocystic triangle is still covered in fat and connective tissue; individual structures like the cystic duct and artery are not yet clearly isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.96,
     "hits": 14
    },
    "liver": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.98,
     "hits": 14
    },
    "fat": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 14
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.91,
     "hits": 14
    },
    "gi_tract": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.92,
     "hits": 8
    },
    "blood": {
     "first": 29.0,
     "last": 99.0,
     "best": 0.85,
     "hits": 9
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 13
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
   "t": 104.0,
   "label": {
    "phase": "gallbladder_dissection",
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
    "reason_if_not": "The camera is focused on the gallbladder bed dissection; the hepatocystic triangle and ductal structures are not in view.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.96,
     "hits": 15
    },
    "liver": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.98,
     "hits": 15
    },
    "fat": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 15
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.91,
     "hits": 15
    },
    "gi_tract": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.92,
     "hits": 9
    },
    "blood": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.85,
     "hits": 9
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 79.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 13
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
   "t": 109.0,
   "label": {
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
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "blood",
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress; tubular structures are obscured by connective tissue and fat, so the critical view of safety is not yet achieved.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.96,
     "hits": 16
    },
    "liver": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.98,
     "hits": 16
    },
    "fat": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 16
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.91,
     "hits": 16
    },
    "gi_tract": {
     "first": 29.0,
     "last": 104.0,
     "best": 0.92,
     "hits": 9
    },
    "blood": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.9,
     "hits": 10
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 14
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
   "t": 114.0,
   "label": {
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
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "blood",
      "confidence": 0.7
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
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
    "reason_if_not": "Hepatocystic triangle is still covered in peritoneum and connective tissue; cystic duct and artery are not yet skeletonized or clearly identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.96,
     "hits": 17
    },
    "liver": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.98,
     "hits": 17
    },
    "fat": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 17
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.91,
     "hits": 17
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.92,
     "hits": 9
    },
    "blood": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.9,
     "hits": 11
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 15
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
   "t": 119.0,
   "label": {
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
      "name": "blood",
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
    "reason_if_not": "The hepatocystic triangle is still covered by peritoneal and fibrofatty tissue; cystic duct and cystic artery are not yet clearly isolated and identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.98,
     "hits": 18
    },
    "liver": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.98,
     "hits": 18
    },
    "fat": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 18
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.91,
     "hits": 18
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.92,
     "hits": 9
    },
    "blood": {
     "first": 29.0,
     "last": 119.0,
     "best": 0.9,
     "hits": 12
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 15
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
   "t": 124.0,
   "label": {
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
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is still covered in fibrofatty tissue; distinct tubular structures (cystic duct and artery) are not yet isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.98,
     "hits": 19
    },
    "liver": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.98,
     "hits": 19
    },
    "fat": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 19
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.91,
     "hits": 19
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.92,
     "hits": 9
    },
    "blood": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.9,
     "hits": 12
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 15
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
   "t": 129.0,
   "label": {
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
      "name": "abdominal_wall",
      "confidence": 0.95
     },
     {
      "name": "fat",
      "confidence": 0.85
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Critical view of safety criteria are not yet met; the cystic duct and cystic artery are not clearly isolated and visible entering the gallbladder.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.98,
     "hits": 20
    },
    "liver": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.98,
     "hits": 20
    },
    "fat": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 20
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 129.0,
     "best": 0.91,
     "hits": 20
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.92,
     "hits": 9
    },
    "blood": {
     "first": 29.0,
     "last": 124.0,
     "best": 0.9,
     "hits": 12
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 16
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
   "t": 134.0,
   "label": {
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
    "reason_if_not": "The hepatocystic triangle is still being dissected; peritoneal covering and connective tissue obscure the underlying ductal and arterial structures.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.98,
     "hits": 21
    },
    "liver": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.98,
     "hits": 21
    },
    "fat": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 21
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.91,
     "hits": 21
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.92,
     "hits": 9
    },
    "blood": {
     "first": 29.0,
     "last": 134.0,
     "best": 0.9,
     "hits": 13
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 109.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 17
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
   "t": 139.0,
   "label": {
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
      "name": "abdominal_wall",
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
      "confidence": 0.8
     },
     {
      "name": "cystic_duct",
      "confidence": 0.65
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still in progress; only one tubular structure is partially cleared, and the second structure (cystic artery) and cystic plate are not yet fully delineated to confirm the Critical View of Safety.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.98,
     "hits": 22
    },
    "liver": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.98,
     "hits": 22
    },
    "fat": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 22
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.91,
     "hits": 22
    },
    "gi_tract": {
     "first": 29.0,
     "last": 114.0,
     "best": 0.92,
     "hits": 9
    },
    "blood": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.9,
     "hits": 14
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 18
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
   "t": 144.0,
   "label": {
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
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.8
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
    "reason_if_not": "Dissection of the hepatocystic triangle is still early; ductal and arterial structures are not yet isolated or clearly visible.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.98,
     "hits": 23
    },
    "liver": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.98,
     "hits": 23
    },
    "fat": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 23
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.91,
     "hits": 23
    },
    "gi_tract": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.92,
     "hits": 10
    },
    "blood": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.9,
     "hits": 15
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.65,
     "hits": 0
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 18
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
   "t": 149.0,
   "label": {
    "phase": "clipping_and_cutting",
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
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
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
    "reason_if_not": "The hepatocystic triangle is not fully cleared of fat/tissue, the lower third of the gallbladder is not clearly separated from the liver bed, and the clip applier partially obscures the upper structure.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.98,
     "hits": 24
    },
    "liver": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.98,
     "hits": 24
    },
    "fat": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 24
    },
    "connective_tissue": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.91,
     "hits": 24
    },
    "gi_tract": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.92,
     "hits": 11
    },
    "blood": {
     "first": 29.0,
     "last": 144.0,
     "best": 0.9,
     "hits": 15
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 149.0,
     "best": 0.8,
     "hits": 1
    },
    "abdominal_wall": {
     "first": 34.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 19
    }
   },
   "duct_confirmed": false,
   "alert": {
    "t": 149.0,
    "message": "Clipping looks imminent but the cystic duct is not confirmed. Re-check the critical view of safety before clipping.",
    "evidence": "Confident cystic duct sightings in clear frames: 1/2"
   },
   "cvs_state": {
    "c1": {
     "on": false,
     "since": null
    },
    "c2": {
     "on": false,
     "since": null
    },
    "c3": {
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
  "C1": 0.76,
  "C1_caught": [
   0,
   6
  ],
  "C2": 0.76,
  "C2_caught": [
   0,
   6
  ],
  "C3": 0.92,
  "C3_caught": [
   0,
   2
  ]
 },
 "rules": {
  "confirm_conf": 0.7,
  "confirm_frames": 2
 }
};
