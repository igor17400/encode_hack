window.TIMELINE = {
 "video": "videos/endo198.mp4",
 "model": "gemini-3.8-flash",
 "every": 1.0,
 "frames": [
  {
   "t": 0.0,
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
      "name": "connective_tissue",
      "confidence": 0.9
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; cystic duct and cystic artery are not yet individually isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
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
    "connective_tissue": {
     "first": 0.0,
     "last": 0.0,
     "best": 0.9,
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
      "confidence": 0.88
     },
     {
      "name": "fat",
      "confidence": 0.82
     },
     {
      "name": "blood",
      "confidence": 0.65
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Early dissection of Calot's triangle; tubular structures are not isolated and the hepatocystic triangle is not cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
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
    "connective_tissue": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.9,
     "hits": 2
    },
    "fat": {
     "first": 0.0,
     "last": 1.0,
     "best": 0.82,
     "hits": 2
    },
    "blood": {
     "first": 0.0,
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
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Hepatocystic triangle is not fully cleared of fibrous tissue and fat; cystic duct and artery are not fully skeletonized; cystic plate not exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
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
     "best": 0.95,
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
     "best": 0.85,
     "hits": 3
    },
    "blood": {
     "first": 0.0,
     "last": 2.0,
     "best": 0.8,
     "hits": 2
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 2.0,
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
   "t": 3.0,
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; cystic duct and artery are not yet clearly isolated and exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
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
     "best": 0.95,
     "hits": 4
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.9,
     "hits": 4
    },
    "fat": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.85,
     "hits": 4
    },
    "blood": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 3.0,
     "best": 0.75,
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
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.92
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
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in early stages; cystic duct and cystic artery are not yet skeletonized or exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
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
     "best": 0.95,
     "hits": 5
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.9,
     "hits": 5
    },
    "fat": {
     "first": 0.0,
     "last": 4.0,
     "best": 0.85,
     "hits": 5
    },
    "blood": {
     "first": 0.0,
     "last": 3.0,
     "best": 0.8,
     "hits": 3
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 4.0,
     "best": 0.75,
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
      "name": "blood",
      "confidence": 0.75
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
    "reason_if_not": "Dissection is in progress; cystic duct and artery are not yet skeletonized and hepatocystic triangle is not cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.98,
     "hits": 6
    },
    "liver": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.95,
     "hits": 6
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 6
    },
    "fat": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.9,
     "hits": 6
    },
    "blood": {
     "first": 0.0,
     "last": 5.0,
     "best": 0.8,
     "hits": 4
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 5.0,
     "best": 0.75,
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
    "reason_if_not": "Calot's triangle is obscured by fat and connective tissue; cystic duct and cystic artery are not clearly visualized or isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.98,
     "hits": 7
    },
    "liver": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.95,
     "hits": 7
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 7
    },
    "fat": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.9,
     "hits": 7
    },
    "blood": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.8,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 5.0,
     "best": 0.75,
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
      "name": "fat",
      "confidence": 0.92
     },
     {
      "name": "connective_tissue",
      "confidence": 0.88
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
    "reason_if_not": "The hepatocystic triangle has not been fully cleared of fat and fibrous tissue; the cystic duct and artery are not yet isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.98,
     "hits": 8
    },
    "liver": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.98,
     "hits": 8
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.9,
     "hits": 8
    },
    "fat": {
     "first": 0.0,
     "last": 7.0,
     "best": 0.92,
     "hits": 8
    },
    "blood": {
     "first": 0.0,
     "last": 6.0,
     "best": 0.8,
     "hits": 5
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 5.0,
     "best": 0.75,
     "hits": 4
    },
    "gi_tract": {
     "first": 7.0,
     "last": 7.0,
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
   "t": 8.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.97
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.88
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
    "reason_if_not": "Calot's triangle dissection is in progress; cystic duct and cystic artery are not yet skeletonized and cystic plate is not cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.98,
     "hits": 9
    },
    "liver": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.98,
     "hits": 9
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.9,
     "hits": 9
    },
    "fat": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.92,
     "hits": 9
    },
    "blood": {
     "first": 0.0,
     "last": 8.0,
     "best": 0.8,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 5.0,
     "best": 0.75,
     "hits": 4
    },
    "gi_tract": {
     "first": 7.0,
     "last": 7.0,
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
      "name": "blood",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "glare",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle dissection is incomplete; cystic duct and artery are not yet individually isolated and identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.98,
     "hits": 9
    },
    "liver": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.98,
     "hits": 9
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
     "best": 0.92,
     "hits": 9
    },
    "blood": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.8,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 5.0,
     "best": 0.75,
     "hits": 4
    },
    "gi_tract": {
     "first": 7.0,
     "last": 7.0,
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
   "t": 10.0,
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
      "confidence": 0.92
     },
     {
      "name": "connective_tissue",
      "confidence": 0.88
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Hepatocystic triangle dissection is in early stages; cystic duct and cystic artery are not yet isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.98,
     "hits": 10
    },
    "liver": {
     "first": 0.0,
     "last": 10.0,
     "best": 0.98,
     "hits": 10
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
     "best": 0.92,
     "hits": 10
    },
    "blood": {
     "first": 0.0,
     "last": 9.0,
     "best": 0.8,
     "hits": 6
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 10.0,
     "best": 0.85,
     "hits": 5
    },
    "gi_tract": {
     "first": 7.0,
     "last": 10.0,
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
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.75
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
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
    "reason_if_not": "Dissection is in early stages; hepatocystic triangle is not fully cleared and the cystic duct and artery are not yet isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.98,
     "hits": 11
    },
    "liver": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.98,
     "hits": 11
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.9,
     "hits": 11
    },
    "fat": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.92,
     "hits": 11
    },
    "blood": {
     "first": 0.0,
     "last": 11.0,
     "best": 0.8,
     "hits": 7
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 11.0,
     "best": 0.85,
     "hits": 6
    },
    "gi_tract": {
     "first": 7.0,
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
      "name": "blood",
      "confidence": 0.8
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
    "reason_if_not": "The hepatocystic triangle is partially dissected; cystic duct and cystic artery are not yet clearly skeletonized and identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.98,
     "hits": 12
    },
    "liver": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.98,
     "hits": 12
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
     "best": 0.92,
     "hits": 12
    },
    "blood": {
     "first": 0.0,
     "last": 12.0,
     "best": 0.8,
     "hits": 8
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 12.0,
     "best": 0.85,
     "hits": 7
    },
    "gi_tract": {
     "first": 7.0,
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
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.96
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
    "reason_if_not": "Dissection is incomplete; cystic structures are not yet isolated and hepatocystic triangle is not fully cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.98,
     "hits": 13
    },
    "liver": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.98,
     "hits": 13
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
     "best": 0.95,
     "hits": 13
    },
    "blood": {
     "first": 0.0,
     "last": 13.0,
     "best": 0.8,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 13.0,
     "best": 0.85,
     "hits": 8
    },
    "gi_tract": {
     "first": 7.0,
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
   "t": 14.0,
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
      "name": "abdominal_wall",
      "confidence": 0.7
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle is only partially dissected; cystic duct and cystic artery are not yet clearly delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.98,
     "hits": 14
    },
    "liver": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.98,
     "hits": 14
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
     "best": 0.95,
     "hits": 14
    },
    "blood": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.8,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 14.0,
     "best": 0.85,
     "hits": 9
    },
    "gi_tract": {
     "first": 7.0,
     "last": 14.0,
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
   "t": 15.0,
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
      "name": "abdominal_wall",
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
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; cystic duct and cystic artery are not clearly skeletonized or identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.98,
     "hits": 15
    },
    "liver": {
     "first": 0.0,
     "last": 15.0,
     "best": 0.98,
     "hits": 15
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
     "best": 0.95,
     "hits": 15
    },
    "blood": {
     "first": 0.0,
     "last": 14.0,
     "best": 0.8,
     "hits": 9
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 15.0,
     "best": 0.85,
     "hits": 10
    },
    "gi_tract": {
     "first": 7.0,
     "last": 15.0,
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
   "t": 16.0,
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
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
    "reason_if_not": "Calot's triangle dissection is still early; cystic duct and artery have not been isolated and critical view is not attained.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.98,
     "hits": 16
    },
    "liver": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.98,
     "hits": 16
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.9,
     "hits": 16
    },
    "fat": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.95,
     "hits": 16
    },
    "blood": {
     "first": 0.0,
     "last": 16.0,
     "best": 0.8,
     "hits": 10
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 16.0,
     "best": 0.85,
     "hits": 11
    },
    "gi_tract": {
     "first": 7.0,
     "last": 16.0,
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
   "t": 17.0,
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
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; cystic duct and cystic artery are not clearly skeletonized or isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.98,
     "hits": 17
    },
    "liver": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.98,
     "hits": 17
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
     "best": 0.95,
     "hits": 17
    },
    "blood": {
     "first": 0.0,
     "last": 17.0,
     "best": 0.85,
     "hits": 11
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 17.0,
     "best": 0.85,
     "hits": 12
    },
    "gi_tract": {
     "first": 7.0,
     "last": 17.0,
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
   "t": 18.0,
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "blood",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is actively in progress; cystic structures are not yet isolated or fully identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.98,
     "hits": 18
    },
    "liver": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.98,
     "hits": 18
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
     "best": 0.95,
     "hits": 18
    },
    "blood": {
     "first": 0.0,
     "last": 18.0,
     "best": 0.85,
     "hits": 12
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 18.0,
     "best": 0.85,
     "hits": 13
    },
    "gi_tract": {
     "first": 7.0,
     "last": 18.0,
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
      "name": "blood",
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.75
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
    "reason_if_not": "Active dissection underway; cystic duct and artery are obscured by overlying connective tissue and fat.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.98,
     "hits": 19
    },
    "liver": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.98,
     "hits": 19
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
     "best": 0.95,
     "hits": 19
    },
    "blood": {
     "first": 0.0,
     "last": 19.0,
     "best": 0.85,
     "hits": 13
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 19.0,
     "best": 0.85,
     "hits": 14
    },
    "gi_tract": {
     "first": 7.0,
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
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.75
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
    "reason_if_not": "The hepatocystic triangle is not yet cleared; cystic duct and artery are obscured by overlying tissue.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.98,
     "hits": 20
    },
    "liver": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.98,
     "hits": 20
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
     "best": 0.95,
     "hits": 20
    },
    "blood": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 14
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 15
    },
    "gi_tract": {
     "first": 7.0,
     "last": 20.0,
     "best": 0.85,
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
   "t": 21.0,
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle is actively being dissected; cystic duct and artery are not yet skeletonized and the cystic plate is not exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.98,
     "hits": 21
    },
    "liver": {
     "first": 0.0,
     "last": 21.0,
     "best": 0.98,
     "hits": 21
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
     "best": 0.95,
     "hits": 21
    },
    "blood": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 14
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 21.0,
     "best": 0.85,
     "hits": 16
    },
    "gi_tract": {
     "first": 7.0,
     "last": 21.0,
     "best": 0.85,
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
   "t": 22.0,
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; cystic structures and cystic plate are not yet fully skeletonized or delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.98,
     "hits": 22
    },
    "liver": {
     "first": 0.0,
     "last": 22.0,
     "best": 0.98,
     "hits": 22
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
     "best": 0.95,
     "hits": 22
    },
    "blood": {
     "first": 0.0,
     "last": 20.0,
     "best": 0.85,
     "hits": 14
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 22.0,
     "best": 0.85,
     "hits": 17
    },
    "gi_tract": {
     "first": 7.0,
     "last": 22.0,
     "best": 0.85,
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
   "t": 23.0,
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
     },
     {
      "name": "gi_tract",
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is ongoing; Calot's triangle is not cleared of fat/fibrous tissue and the cystic duct and artery are not fully isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.98,
     "hits": 23
    },
    "liver": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.98,
     "hits": 23
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
     "best": 0.95,
     "hits": 23
    },
    "blood": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 15
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 18
    },
    "gi_tract": {
     "first": 7.0,
     "last": 23.0,
     "best": 0.85,
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
   "t": 24.0,
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
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; cystic duct and artery are not yet skeletonized or definitively identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.98,
     "hits": 24
    },
    "liver": {
     "first": 0.0,
     "last": 24.0,
     "best": 0.98,
     "hits": 24
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
     "best": 0.95,
     "hits": 24
    },
    "blood": {
     "first": 0.0,
     "last": 23.0,
     "best": 0.85,
     "hits": 15
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 24.0,
     "best": 0.85,
     "hits": 19
    },
    "gi_tract": {
     "first": 7.0,
     "last": 24.0,
     "best": 0.85,
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
   "t": 25.0,
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection is underway; Calot's triangle is not cleared and two distinct structures entering the gallbladder are not fully isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.98,
     "hits": 25
    },
    "liver": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.98,
     "hits": 25
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
     "best": 0.95,
     "hits": 25
    },
    "blood": {
     "first": 0.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 16
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 25.0,
     "best": 0.85,
     "hits": 20
    },
    "gi_tract": {
     "first": 7.0,
     "last": 25.0,
     "best": 0.85,
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
   "t": 26.0,
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
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.8
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection is in early stages; the hepatocystic triangle is not cleared and the cystic structures are not yet identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.98,
     "hits": 26
    },
    "liver": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.98,
     "hits": 26
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
     "best": 0.95,
     "hits": 26
    },
    "blood": {
     "first": 0.0,
     "last": 26.0,
     "best": 0.85,
     "hits": 17
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 26.0,
     "best": 0.85,
     "hits": 21
    },
    "gi_tract": {
     "first": 7.0,
     "last": 26.0,
     "best": 0.85,
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
   "t": 27.0,
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
     },
     {
      "name": "abdominal_wall",
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle dissection is in early stages; cystic duct and cystic artery are not yet clearly delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.98,
     "hits": 27
    },
    "liver": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.98,
     "hits": 27
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
     "best": 0.95,
     "hits": 27
    },
    "blood": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.85,
     "hits": 18
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 27.0,
     "best": 0.85,
     "hits": 22
    },
    "gi_tract": {
     "first": 7.0,
     "last": 27.0,
     "best": 0.85,
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
   "t": 28.0,
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
    "reason_if_not": "Calot's triangle dissection is in early stages; the hepatocystic triangle is not cleared and two distinct structures entering the gallbladder are not yet visualized.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.98,
     "hits": 28
    },
    "liver": {
     "first": 0.0,
     "last": 28.0,
     "best": 0.98,
     "hits": 28
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
     "hits": 28
    },
    "blood": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.85,
     "hits": 18
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 28.0,
     "best": 0.85,
     "hits": 23
    },
    "gi_tract": {
     "first": 7.0,
     "last": 28.0,
     "best": 0.85,
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
      "name": "cystic_duct",
      "confidence": 0.6
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Dissection is in progress; the hepatocystic triangle is not fully cleared and structures are not definitively isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.98,
     "hits": 29
    },
    "liver": {
     "first": 0.0,
     "last": 29.0,
     "best": 0.98,
     "hits": 29
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
     "hits": 29
    },
    "blood": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.85,
     "hits": 18
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 29.0,
     "best": 0.85,
     "hits": 24
    },
    "gi_tract": {
     "first": 7.0,
     "last": 29.0,
     "best": 0.85,
     "hits": 19
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 30.0,
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
    "reason_if_not": "Dissection in Calot's triangle is incomplete; the cystic duct and cystic artery are not yet isolated or definitively identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.98,
     "hits": 30
    },
    "liver": {
     "first": 0.0,
     "last": 30.0,
     "best": 0.98,
     "hits": 30
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
     "hits": 30
    },
    "blood": {
     "first": 0.0,
     "last": 27.0,
     "best": 0.85,
     "hits": 18
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 30.0,
     "best": 0.85,
     "hits": 25
    },
    "gi_tract": {
     "first": 7.0,
     "last": 30.0,
     "best": 0.85,
     "hits": 20
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 31.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "gallbladder",
      "confidence": 0.88
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
      "name": "abdominal_wall",
      "confidence": 0.75
     },
     {
      "name": "connective_tissue",
      "confidence": 0.7
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle dissection is still in progress; structures are not fully dissected to achieve the Critical View of Safety.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.98,
     "hits": 31
    },
    "liver": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.98,
     "hits": 31
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
     "hits": 31
    },
    "blood": {
     "first": 0.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 18
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 26
    },
    "gi_tract": {
     "first": 7.0,
     "last": 31.0,
     "best": 0.85,
     "hits": 21
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 32.0,
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
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
    "reason_if_not": "Dissection is incomplete; cystic duct, cystic artery, and cystic plate are not yet fully isolated or clearly exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.98,
     "hits": 32
    },
    "liver": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.98,
     "hits": 32
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
     "hits": 32
    },
    "blood": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.85,
     "hits": 19
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 32.0,
     "best": 0.85,
     "hits": 27
    },
    "gi_tract": {
     "first": 7.0,
     "last": 32.0,
     "best": 0.85,
     "hits": 22
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 33.0,
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection is ongoing; the cystic duct and cystic artery are not yet completely isolated and exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.98,
     "hits": 33
    },
    "liver": {
     "first": 0.0,
     "last": 33.0,
     "best": 0.98,
     "hits": 33
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
     "hits": 33
    },
    "blood": {
     "first": 0.0,
     "last": 32.0,
     "best": 0.85,
     "hits": 19
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 33.0,
     "best": 0.85,
     "hits": 28
    },
    "gi_tract": {
     "first": 7.0,
     "last": 32.0,
     "best": 0.85,
     "hits": 22
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 34.0,
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
    "reason_if_not": "Calot's triangle dissection is in progress; cystic duct and artery are not yet individually isolated and identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.98,
     "hits": 34
    },
    "liver": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.98,
     "hits": 34
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
     "hits": 34
    },
    "blood": {
     "first": 0.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 19
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 29
    },
    "gi_tract": {
     "first": 7.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 23
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 35.0,
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Calot's triangle is actively being dissected; cystic duct and artery are not yet completely skeletonized and identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.98,
     "hits": 35
    },
    "liver": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.98,
     "hits": 35
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
     "hits": 35
    },
    "blood": {
     "first": 0.0,
     "last": 35.0,
     "best": 0.85,
     "hits": 19
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 35.0,
     "best": 0.85,
     "hits": 30
    },
    "gi_tract": {
     "first": 7.0,
     "last": 34.0,
     "best": 0.85,
     "hits": 23
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 36.0,
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
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; cystic structures are not yet skeletonized and the cystic plate is not fully exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.98,
     "hits": 36
    },
    "liver": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.98,
     "hits": 36
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.9,
     "hits": 36
    },
    "fat": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.95,
     "hits": 36
    },
    "blood": {
     "first": 0.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 20
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 31
    },
    "gi_tract": {
     "first": 7.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 24
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 37.0,
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
      "name": "blood",
      "confidence": 0.75
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
    "reason_if_not": "Dissection is ongoing; cystic duct and cystic artery are not clearly skeletonized and visualized entering the gallbladder.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.98,
     "hits": 37
    },
    "liver": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.98,
     "hits": 37
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.9,
     "hits": 37
    },
    "fat": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.95,
     "hits": 37
    },
    "blood": {
     "first": 0.0,
     "last": 37.0,
     "best": 0.85,
     "hits": 21
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 37.0,
     "best": 0.85,
     "hits": 32
    },
    "gi_tract": {
     "first": 7.0,
     "last": 36.0,
     "best": 0.85,
     "hits": 24
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 38.0,
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
      "name": "abdominal_wall",
      "confidence": 0.8
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
    "reason_if_not": "Hepatocystic triangle dissection is incomplete; cystic duct and cystic artery are not fully dissected and clearly demarcated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.98,
     "hits": 38
    },
    "liver": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.98,
     "hits": 38
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.9,
     "hits": 38
    },
    "fat": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.95,
     "hits": 38
    },
    "blood": {
     "first": 0.0,
     "last": 38.0,
     "best": 0.85,
     "hits": 22
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 38.0,
     "best": 0.85,
     "hits": 33
    },
    "gi_tract": {
     "first": 7.0,
     "last": 38.0,
     "best": 0.85,
     "hits": 25
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 39.0,
   "label": {
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
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "The hepatocystic triangle is currently being dissected; cystic structures are not yet fully skeletonized or delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.98,
     "hits": 39
    },
    "liver": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.98,
     "hits": 39
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.9,
     "hits": 39
    },
    "fat": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.95,
     "hits": 39
    },
    "blood": {
     "first": 0.0,
     "last": 39.0,
     "best": 0.85,
     "hits": 23
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 39.0,
     "best": 0.85,
     "hits": 34
    },
    "gi_tract": {
     "first": 7.0,
     "last": 39.0,
     "best": 0.9,
     "hits": 26
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 40.0,
   "label": {
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
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
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
    "reason_if_not": "Calot's triangle dissection is in early stages; cystic duct and cystic artery are not clearly skeletonized or identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.98,
     "hits": 40
    },
    "liver": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.98,
     "hits": 40
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 40
    },
    "fat": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.95,
     "hits": 40
    },
    "blood": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.85,
     "hits": 24
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 40.0,
     "best": 0.85,
     "hits": 35
    },
    "gi_tract": {
     "first": 7.0,
     "last": 40.0,
     "best": 0.9,
     "hits": 27
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 41.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "abdominal_wall",
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
      "confidence": 0.8
     },
     {
      "name": "blood",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "hook",
     "irrigator"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle dissection is incomplete; cystic structures and cystic plate are not clearly isolated or identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 40.0,
     "best": 0.98,
     "hits": 40
    },
    "liver": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.98,
     "hits": 41
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 41
    },
    "fat": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.95,
     "hits": 41
    },
    "blood": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.85,
     "hits": 25
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 41.0,
     "best": 0.85,
     "hits": 36
    },
    "gi_tract": {
     "first": 7.0,
     "last": 41.0,
     "best": 0.9,
     "hits": 28
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "gallbladder",
      "confidence": 0.7
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Calot's triangle is not yet sufficiently dissected; cystic duct and artery are not clearly visualized or isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.98,
     "hits": 41
    },
    "liver": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.98,
     "hits": 42
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 42
    },
    "fat": {
     "first": 0.0,
     "last": 42.0,
     "best": 0.95,
     "hits": 42
    },
    "blood": {
     "first": 0.0,
     "last": 41.0,
     "best": 0.85,
     "hits": 25
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 42.0,
     "best": 0.85,
     "hits": 37
    },
    "gi_tract": {
     "first": 7.0,
     "last": 42.0,
     "best": 0.9,
     "hits": 29
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 43.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "gallbladder",
      "confidence": 0.88
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
      "name": "abdominal_wall",
      "confidence": 0.8
     },
     {
      "name": "blood",
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
    "reason_if_not": "Calot's triangle dissection is ongoing; cystic structures and the cystic plate are not yet fully cleared or identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.98,
     "hits": 42
    },
    "liver": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.98,
     "hits": 43
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 43
    },
    "fat": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.95,
     "hits": 43
    },
    "blood": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.85,
     "hits": 26
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 43.0,
     "best": 0.85,
     "hits": 38
    },
    "gi_tract": {
     "first": 7.0,
     "last": 43.0,
     "best": 0.9,
     "hits": 30
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 44.0,
   "label": {
    "phase": "preparation",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.85
     },
     {
      "name": "connective_tissue",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "hook",
     "irrigator"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle and cystic duct/artery are not exposed or identified in this view.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.98,
     "hits": 42
    },
    "liver": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.98,
     "hits": 44
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.9,
     "hits": 44
    },
    "fat": {
     "first": 0.0,
     "last": 44.0,
     "best": 0.95,
     "hits": 44
    },
    "blood": {
     "first": 0.0,
     "last": 43.0,
     "best": 0.85,
     "hits": 26
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 44.0,
     "best": 0.9,
     "hits": 39
    },
    "gi_tract": {
     "first": 7.0,
     "last": 44.0,
     "best": 0.9,
     "hits": 31
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 45.0,
   "label": {
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
      "confidence": 0.75
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "hook",
     "irrigator"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle is not fully dissected; cystic duct and artery are not isolated or clearly visualized.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.98,
     "hits": 43
    },
    "liver": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.98,
     "hits": 45
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.9,
     "hits": 45
    },
    "fat": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.95,
     "hits": 45
    },
    "blood": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 27
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 45.0,
     "best": 0.9,
     "hits": 40
    },
    "gi_tract": {
     "first": 7.0,
     "last": 45.0,
     "best": 0.9,
     "hits": 32
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 46.0,
   "label": {
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
      "confidence": 0.88
     },
     {
      "name": "gi_tract",
      "confidence": 0.92
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "hook",
     "grasper",
     "irrigator"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle is still being actively dissected; cystic structures are not fully skeletonized and cystic plate is not cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.98,
     "hits": 44
    },
    "liver": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.98,
     "hits": 46
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.9,
     "hits": 46
    },
    "fat": {
     "first": 0.0,
     "last": 46.0,
     "best": 0.95,
     "hits": 46
    },
    "blood": {
     "first": 0.0,
     "last": 45.0,
     "best": 0.85,
     "hits": 27
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 46.0,
     "best": 0.9,
     "hits": 41
    },
    "gi_tract": {
     "first": 7.0,
     "last": 46.0,
     "best": 0.92,
     "hits": 33
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 47.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.98
     },
     {
      "name": "gallbladder",
      "confidence": 0.92
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.88
     },
     {
      "name": "blood",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.82
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.78
     }
    ],
    "instruments": [
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Active dissection within the hepatocystic triangle with pooling blood and incomplete skeletonization of the cystic duct and artery.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.98,
     "hits": 45
    },
    "liver": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.98,
     "hits": 47
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 47
    },
    "fat": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.95,
     "hits": 47
    },
    "blood": {
     "first": 0.0,
     "last": 47.0,
     "best": 0.85,
     "hits": 28
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 47.0,
     "best": 0.9,
     "hits": 42
    },
    "gi_tract": {
     "first": 7.0,
     "last": 47.0,
     "best": 0.92,
     "hits": 34
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 48.0,
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
    "reason_if_not": "Dissection is actively ongoing; hepatocystic triangle is not fully cleared and the cystic duct and artery are not yet individually isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.98,
     "hits": 46
    },
    "liver": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.98,
     "hits": 48
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.9,
     "hits": 48
    },
    "fat": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.95,
     "hits": 48
    },
    "blood": {
     "first": 0.0,
     "last": 48.0,
     "best": 0.85,
     "hits": 29
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 48.0,
     "best": 0.9,
     "hits": 43
    },
    "gi_tract": {
     "first": 7.0,
     "last": 48.0,
     "best": 0.92,
     "hits": 35
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 49.0,
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
      "confidence": 0.92
     },
     {
      "name": "fat",
      "confidence": 0.88
     },
     {
      "name": "blood",
      "confidence": 0.75
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in early stages; cystic structures are not yet isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.98,
     "hits": 47
    },
    "liver": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.98,
     "hits": 49
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.92,
     "hits": 49
    },
    "fat": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.95,
     "hits": 49
    },
    "blood": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 30
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 49.0,
     "best": 0.9,
     "hits": 44
    },
    "gi_tract": {
     "first": 7.0,
     "last": 49.0,
     "best": 0.92,
     "hits": 36
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 50.0,
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
      "confidence": 0.92
     },
     {
      "name": "fat",
      "confidence": 0.88
     },
     {
      "name": "abdominal_wall",
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; cystic duct and cystic artery are not clearly isolated and cystic plate is not exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.98,
     "hits": 48
    },
    "liver": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.98,
     "hits": 50
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.92,
     "hits": 50
    },
    "fat": {
     "first": 0.0,
     "last": 50.0,
     "best": 0.95,
     "hits": 50
    },
    "blood": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 30
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 50.0,
     "best": 0.9,
     "hits": 45
    },
    "gi_tract": {
     "first": 7.0,
     "last": 50.0,
     "best": 0.92,
     "hits": 37
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 51.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.92
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.88
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
    "reason_if_not": "Calot's triangle is partially dissected; cystic duct and artery are not yet clearly delineated, and hepatocystic triangle is not fully cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.98,
     "hits": 49
    },
    "liver": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.98,
     "hits": 51
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.92,
     "hits": 51
    },
    "fat": {
     "first": 0.0,
     "last": 51.0,
     "best": 0.95,
     "hits": 51
    },
    "blood": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 30
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 46
    },
    "gi_tract": {
     "first": 7.0,
     "last": 51.0,
     "best": 0.92,
     "hits": 38
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 52.0,
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
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Hepatocystic triangle dissection is incomplete; the cystic duct and artery are not yet clearly skeletonized and isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.98,
     "hits": 50
    },
    "liver": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.98,
     "hits": 52
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.92,
     "hits": 52
    },
    "fat": {
     "first": 0.0,
     "last": 52.0,
     "best": 0.95,
     "hits": 52
    },
    "blood": {
     "first": 0.0,
     "last": 49.0,
     "best": 0.85,
     "hits": 30
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 46
    },
    "gi_tract": {
     "first": 7.0,
     "last": 52.0,
     "best": 0.92,
     "hits": 39
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 53.0,
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
    "reason_if_not": "Calot's triangle dissection is actively ongoing; structures are not yet fully skeletonized or delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.98,
     "hits": 51
    },
    "liver": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.98,
     "hits": 53
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.92,
     "hits": 53
    },
    "fat": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.95,
     "hits": 53
    },
    "blood": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.85,
     "hits": 31
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 51.0,
     "best": 0.9,
     "hits": 46
    },
    "gi_tract": {
     "first": 7.0,
     "last": 53.0,
     "best": 0.92,
     "hits": 40
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 54.0,
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
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Calot's triangle dissection is still in progress; cystic structures and the cystic plate are not fully skeletonized or separated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.98,
     "hits": 52
    },
    "liver": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.98,
     "hits": 54
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.92,
     "hits": 54
    },
    "fat": {
     "first": 0.0,
     "last": 54.0,
     "best": 0.95,
     "hits": 54
    },
    "blood": {
     "first": 0.0,
     "last": 53.0,
     "best": 0.85,
     "hits": 31
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 47
    },
    "gi_tract": {
     "first": 7.0,
     "last": 54.0,
     "best": 0.92,
     "hits": 41
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 55.0,
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
      "name": "connective_tissue",
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
    "reason_if_not": "Calot's triangle dissection is still in progress; cystic duct and cystic artery are not clearly skeletonized or isolated, and the cystic plate is not yet exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.98,
     "hits": 53
    },
    "liver": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.98,
     "hits": 55
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.92,
     "hits": 55
    },
    "fat": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.95,
     "hits": 55
    },
    "blood": {
     "first": 0.0,
     "last": 55.0,
     "best": 0.85,
     "hits": 32
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 54.0,
     "best": 0.9,
     "hits": 47
    },
    "gi_tract": {
     "first": 7.0,
     "last": 55.0,
     "best": 0.92,
     "hits": 42
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 56.0,
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
      "name": "abdominal_wall",
      "confidence": 0.75
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
    "reason_if_not": "Dissection within the hepatocystic triangle is ongoing; cystic structures and the cystic plate are not yet fully skeletonized or delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.98,
     "hits": 54
    },
    "liver": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.98,
     "hits": 56
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.92,
     "hits": 56
    },
    "fat": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.95,
     "hits": 56
    },
    "blood": {
     "first": 0.0,
     "last": 56.0,
     "best": 0.85,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 56.0,
     "best": 0.9,
     "hits": 48
    },
    "gi_tract": {
     "first": 7.0,
     "last": 56.0,
     "best": 0.92,
     "hits": 43
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 57.0,
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; the cystic duct, artery, and cystic plate are not yet fully skeletonized or separated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.98,
     "hits": 55
    },
    "liver": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.98,
     "hits": 57
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.92,
     "hits": 57
    },
    "fat": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.95,
     "hits": 57
    },
    "blood": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 57.0,
     "best": 0.9,
     "hits": 49
    },
    "gi_tract": {
     "first": 7.0,
     "last": 57.0,
     "best": 0.92,
     "hits": 44
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 58.0,
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
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "fat",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; cystic duct and artery are not yet clearly skeletonized and isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.98,
     "hits": 56
    },
    "liver": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.98,
     "hits": 58
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.92,
     "hits": 58
    },
    "fat": {
     "first": 0.0,
     "last": 58.0,
     "best": 0.95,
     "hits": 58
    },
    "blood": {
     "first": 0.0,
     "last": 57.0,
     "best": 0.85,
     "hits": 33
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 58.0,
     "best": 0.9,
     "hits": 50
    },
    "gi_tract": {
     "first": 7.0,
     "last": 58.0,
     "best": 0.92,
     "hits": 45
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "blood",
      "confidence": 0.75
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is ongoing; cystic duct and artery are not yet completely skeletonized or isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.98,
     "hits": 57
    },
    "liver": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.98,
     "hits": 59
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.92,
     "hits": 59
    },
    "fat": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.95,
     "hits": 59
    },
    "blood": {
     "first": 0.0,
     "last": 59.0,
     "best": 0.85,
     "hits": 34
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 50
    },
    "gi_tract": {
     "first": 7.0,
     "last": 59.0,
     "best": 0.92,
     "hits": 46
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 60.0,
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
      "name": "gi_tract",
      "confidence": 0.7
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "smoke",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle dissection is in progress; cystic duct and artery are not yet skeletonized and critical view of safety has not been achieved.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.98,
     "hits": 57
    },
    "liver": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.98,
     "hits": 59
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.92,
     "hits": 59
    },
    "fat": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.95,
     "hits": 59
    },
    "blood": {
     "first": 0.0,
     "last": 60.0,
     "best": 0.85,
     "hits": 34
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 59.0,
     "best": 0.9,
     "hits": 50
    },
    "gi_tract": {
     "first": 7.0,
     "last": 60.0,
     "best": 0.92,
     "hits": 46
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 61.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.96
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.92
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
      "name": "blood",
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
    "reason_if_not": "Active dissection of Calot's triangle; cystic duct and cystic artery are not yet isolated or fully visible.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.98,
     "hits": 58
    },
    "liver": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.98,
     "hits": 60
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.92,
     "hits": 60
    },
    "fat": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.95,
     "hits": 60
    },
    "blood": {
     "first": 0.0,
     "last": 61.0,
     "best": 0.85,
     "hits": 35
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 61.0,
     "best": 0.92,
     "hits": 51
    },
    "gi_tract": {
     "first": 7.0,
     "last": 61.0,
     "best": 0.92,
     "hits": 47
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 29.0,
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
   "t": 62.0,
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
      "confidence": 0.88
     },
     {
      "name": "cystic_duct",
      "confidence": 0.75
     },
     {
      "name": "gi_tract",
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is currently ongoing; the cystic duct and artery have not been fully skeletonized and the cystic plate is not adequately exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.98,
     "hits": 59
    },
    "liver": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.98,
     "hits": 61
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.92,
     "hits": 61
    },
    "fat": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.95,
     "hits": 61
    },
    "blood": {
     "first": 0.0,
     "last": 62.0,
     "best": 0.85,
     "hits": 36
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 61.0,
     "best": 0.92,
     "hits": 51
    },
    "gi_tract": {
     "first": 7.0,
     "last": 62.0,
     "best": 0.92,
     "hits": 48
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 63.0,
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
    "reason_if_not": "Calot's triangle dissection is incomplete; cystic structures and cystic plate are not yet fully exposed or clearly identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.98,
     "hits": 60
    },
    "liver": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.98,
     "hits": 62
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.92,
     "hits": 62
    },
    "fat": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.95,
     "hits": 62
    },
    "blood": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.85,
     "hits": 37
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 61.0,
     "best": 0.92,
     "hits": 51
    },
    "gi_tract": {
     "first": 7.0,
     "last": 63.0,
     "best": 0.92,
     "hits": 49
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 64.0,
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle is still being dissected; cystic duct and cystic artery are not yet fully skeletonized or definitively identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.98,
     "hits": 61
    },
    "liver": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.98,
     "hits": 63
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.92,
     "hits": 63
    },
    "fat": {
     "first": 0.0,
     "last": 64.0,
     "best": 0.95,
     "hits": 63
    },
    "blood": {
     "first": 0.0,
     "last": 63.0,
     "best": 0.85,
     "hits": 37
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 64.0,
     "best": 0.92,
     "hits": 52
    },
    "gi_tract": {
     "first": 7.0,
     "last": 64.0,
     "best": 0.92,
     "hits": 50
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 65.0,
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
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
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
    "reason_if_not": "Calot's triangle dissection is actively in progress; cystic duct and cystic artery are not yet completely skeletonized and critical view of safety has not been achieved.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.98,
     "hits": 62
    },
    "liver": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.98,
     "hits": 64
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.92,
     "hits": 64
    },
    "fat": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.95,
     "hits": 64
    },
    "blood": {
     "first": 0.0,
     "last": 65.0,
     "best": 0.85,
     "hits": 38
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 65.0,
     "best": 0.92,
     "hits": 53
    },
    "gi_tract": {
     "first": 7.0,
     "last": 65.0,
     "best": 0.92,
     "hits": 51
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 66.0,
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
     },
     {
      "name": "gi_tract",
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; cystic duct and artery are not yet clearly delineated and isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.98,
     "hits": 63
    },
    "liver": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.98,
     "hits": 65
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.92,
     "hits": 65
    },
    "fat": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.95,
     "hits": 65
    },
    "blood": {
     "first": 0.0,
     "last": 66.0,
     "best": 0.85,
     "hits": 39
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 66.0,
     "best": 0.92,
     "hits": 54
    },
    "gi_tract": {
     "first": 7.0,
     "last": 66.0,
     "best": 0.92,
     "hits": 52
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 67.0,
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
      "name": "abdominal_wall",
      "confidence": 0.75
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
    "reason_if_not": "Dissection is ongoing; cystic structures are not yet fully isolated or skeletonized, and the hepatocystic triangle is not fully cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.98,
     "hits": 64
    },
    "liver": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.98,
     "hits": 66
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.92,
     "hits": 66
    },
    "fat": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.95,
     "hits": 66
    },
    "blood": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 40
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 67.0,
     "best": 0.92,
     "hits": 55
    },
    "gi_tract": {
     "first": 7.0,
     "last": 67.0,
     "best": 0.92,
     "hits": 53
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 68.0,
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; cystic duct and cystic artery are not yet isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.98,
     "hits": 65
    },
    "liver": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.98,
     "hits": 67
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.92,
     "hits": 67
    },
    "fat": {
     "first": 0.0,
     "last": 68.0,
     "best": 0.95,
     "hits": 67
    },
    "blood": {
     "first": 0.0,
     "last": 67.0,
     "best": 0.85,
     "hits": 40
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 68.0,
     "best": 0.92,
     "hits": 56
    },
    "gi_tract": {
     "first": 7.0,
     "last": 68.0,
     "best": 0.92,
     "hits": 54
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
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
    "reason_if_not": "Calot's triangle dissection is in early stages; cystic duct and cystic artery are not yet completely dissected or skeletonized.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.98,
     "hits": 66
    },
    "liver": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.98,
     "hits": 68
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.92,
     "hits": 68
    },
    "fat": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.95,
     "hits": 68
    },
    "blood": {
     "first": 0.0,
     "last": 69.0,
     "best": 0.85,
     "hits": 41
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 69.0,
     "best": 0.92,
     "hits": 57
    },
    "gi_tract": {
     "first": 7.0,
     "last": 69.0,
     "best": 0.92,
     "hits": 55
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 70.0,
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
      "name": "gi_tract",
      "confidence": 0.7
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
    "reason_if_not": "Calot's triangle dissection is still in progress; cystic structures and the cystic plate are not yet fully exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 67
    },
    "liver": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.98,
     "hits": 69
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.92,
     "hits": 69
    },
    "fat": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.95,
     "hits": 69
    },
    "blood": {
     "first": 0.0,
     "last": 70.0,
     "best": 0.85,
     "hits": 42
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 70.0,
     "best": 0.92,
     "hits": 58
    },
    "gi_tract": {
     "first": 7.0,
     "last": 70.0,
     "best": 0.92,
     "hits": 56
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 71.0,
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
      "name": "abdominal_wall",
      "confidence": 0.8
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is still underway; cystic duct and artery are not definitively isolated and the cystic plate is not fully visualized.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.98,
     "hits": 68
    },
    "liver": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.98,
     "hits": 70
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.92,
     "hits": 70
    },
    "fat": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.95,
     "hits": 70
    },
    "blood": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.85,
     "hits": 42
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 71.0,
     "best": 0.92,
     "hits": 59
    },
    "gi_tract": {
     "first": 7.0,
     "last": 71.0,
     "best": 0.92,
     "hits": 57
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 72.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.92
     },
     {
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.88
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is ongoing; cystic structures and cystic plate are not yet fully cleared and identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.98,
     "hits": 69
    },
    "liver": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.98,
     "hits": 71
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.92,
     "hits": 71
    },
    "fat": {
     "first": 0.0,
     "last": 72.0,
     "best": 0.95,
     "hits": 71
    },
    "blood": {
     "first": 0.0,
     "last": 71.0,
     "best": 0.85,
     "hits": 42
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 72.0,
     "best": 0.92,
     "hits": 60
    },
    "gi_tract": {
     "first": 7.0,
     "last": 72.0,
     "best": 0.92,
     "hits": 58
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 73.0,
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
      "name": "connective_tissue",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; cystic duct and artery are not fully isolated or visualized entering the gallbladder.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.98,
     "hits": 70
    },
    "liver": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.98,
     "hits": 72
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.92,
     "hits": 72
    },
    "fat": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.95,
     "hits": 72
    },
    "blood": {
     "first": 0.0,
     "last": 73.0,
     "best": 0.85,
     "hits": 43
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 73.0,
     "best": 0.92,
     "hits": 61
    },
    "gi_tract": {
     "first": 7.0,
     "last": 73.0,
     "best": 0.92,
     "hits": 59
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 74.0,
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
      "name": "connective_tissue",
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
      "name": "abdominal_wall",
      "confidence": 0.8
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
    "reason_if_not": "Calot's triangle dissection is in progress; cystic structures and cystic plate are not yet fully cleared and exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.98,
     "hits": 71
    },
    "liver": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.98,
     "hits": 73
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.92,
     "hits": 73
    },
    "fat": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.95,
     "hits": 73
    },
    "blood": {
     "first": 0.0,
     "last": 74.0,
     "best": 0.85,
     "hits": 44
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 74.0,
     "best": 0.92,
     "hits": 62
    },
    "gi_tract": {
     "first": 7.0,
     "last": 74.0,
     "best": 0.92,
     "hits": 60
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 75.0,
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Dissection is ongoing; the hepatocystic triangle is not fully cleared, and the cystic duct and cystic artery are not definitively isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.98,
     "hits": 72
    },
    "liver": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.98,
     "hits": 74
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.92,
     "hits": 74
    },
    "fat": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.95,
     "hits": 74
    },
    "blood": {
     "first": 0.0,
     "last": 75.0,
     "best": 0.85,
     "hits": 45
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 75.0,
     "best": 0.92,
     "hits": 63
    },
    "gi_tract": {
     "first": 7.0,
     "last": 75.0,
     "best": 0.92,
     "hits": 61
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 76.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.93
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
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.82
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
    "reason_if_not": "Dissection of the hepatocystic triangle is ongoing; cystic duct and artery are not yet clearly skeletonized and isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.98,
     "hits": 73
    },
    "liver": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.98,
     "hits": 75
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.92,
     "hits": 75
    },
    "fat": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.95,
     "hits": 75
    },
    "blood": {
     "first": 0.0,
     "last": 76.0,
     "best": 0.85,
     "hits": 46
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 76.0,
     "best": 0.92,
     "hits": 64
    },
    "gi_tract": {
     "first": 7.0,
     "last": 76.0,
     "best": 0.92,
     "hits": 62
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 77.0,
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection is ongoing; hepatocystic triangle is not fully cleared and the two target structures are not yet definitively isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.98,
     "hits": 74
    },
    "liver": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.98,
     "hits": 76
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.92,
     "hits": 76
    },
    "fat": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.95,
     "hits": 76
    },
    "blood": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 77.0,
     "best": 0.92,
     "hits": 65
    },
    "gi_tract": {
     "first": 7.0,
     "last": 77.0,
     "best": 0.92,
     "hits": 63
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 78.0,
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
    "reason_if_not": "Calot's triangle dissection is still in progress; cystic duct and cystic artery are not yet definitively isolated and identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 75
    },
    "liver": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.98,
     "hits": 77
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.92,
     "hits": 77
    },
    "fat": {
     "first": 0.0,
     "last": 78.0,
     "best": 0.95,
     "hits": 77
    },
    "blood": {
     "first": 0.0,
     "last": 77.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 78.0,
     "best": 0.92,
     "hits": 66
    },
    "gi_tract": {
     "first": 7.0,
     "last": 78.0,
     "best": 0.92,
     "hits": 64
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.8
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; cystic duct and artery are not fully dissected or clearly visualized.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.98,
     "hits": 76
    },
    "liver": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.98,
     "hits": 78
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.92,
     "hits": 78
    },
    "fat": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.95,
     "hits": 78
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 79.0,
     "best": 0.92,
     "hits": 67
    },
    "gi_tract": {
     "first": 7.0,
     "last": 79.0,
     "best": 0.92,
     "hits": 65
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 80.0,
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
    "reason_if_not": "Calot's triangle dissection is in early stages; cystic structures and the cystic plate are not yet clearly delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.98,
     "hits": 77
    },
    "liver": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.98,
     "hits": 79
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.92,
     "hits": 79
    },
    "fat": {
     "first": 0.0,
     "last": 80.0,
     "best": 0.95,
     "hits": 79
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 80.0,
     "best": 0.92,
     "hits": 68
    },
    "gi_tract": {
     "first": 7.0,
     "last": 80.0,
     "best": 0.92,
     "hits": 66
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 81.0,
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; critical view of safety criteria are not yet achieved.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.98,
     "hits": 78
    },
    "liver": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.98,
     "hits": 80
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.92,
     "hits": 80
    },
    "fat": {
     "first": 0.0,
     "last": 81.0,
     "best": 0.95,
     "hits": 80
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 81.0,
     "best": 0.92,
     "hits": 69
    },
    "gi_tract": {
     "first": 7.0,
     "last": 81.0,
     "best": 0.92,
     "hits": 67
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 82.0,
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
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.85
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; cystic duct and cystic artery are not yet clearly delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.98,
     "hits": 79
    },
    "liver": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.98,
     "hits": 81
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.92,
     "hits": 81
    },
    "fat": {
     "first": 0.0,
     "last": 82.0,
     "best": 0.95,
     "hits": 81
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 82.0,
     "best": 0.92,
     "hits": 70
    },
    "gi_tract": {
     "first": 7.0,
     "last": 82.0,
     "best": 0.92,
     "hits": 68
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 83.0,
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
    "reason_if_not": "Dissection is actively in progress; cystic structures and the cystic plate are not yet fully mobilized or cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.98,
     "hits": 80
    },
    "liver": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.98,
     "hits": 82
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.92,
     "hits": 82
    },
    "fat": {
     "first": 0.0,
     "last": 83.0,
     "best": 0.95,
     "hits": 82
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 83.0,
     "best": 0.92,
     "hits": 71
    },
    "gi_tract": {
     "first": 7.0,
     "last": 83.0,
     "best": 0.92,
     "hits": 69
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
    "reason_if_not": "Calot's triangle dissection is in progress; cystic duct and cystic artery are not yet skeletonized and the cystic plate is not exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.98,
     "hits": 81
    },
    "liver": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.98,
     "hits": 83
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.92,
     "hits": 83
    },
    "fat": {
     "first": 0.0,
     "last": 84.0,
     "best": 0.95,
     "hits": 83
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 84.0,
     "best": 0.92,
     "hits": 72
    },
    "gi_tract": {
     "first": 7.0,
     "last": 84.0,
     "best": 0.92,
     "hits": 70
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 85.0,
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
      "confidence": 0.85
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
     }
    ],
    "instruments": [
     "grasper",
     "hook"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is ongoing; the cystic duct and cystic artery are not yet isolated, and Calot's triangle is not cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 82
    },
    "liver": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.98,
     "hits": 84
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.92,
     "hits": 84
    },
    "fat": {
     "first": 0.0,
     "last": 85.0,
     "best": 0.95,
     "hits": 84
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 85.0,
     "best": 0.92,
     "hits": 73
    },
    "gi_tract": {
     "first": 7.0,
     "last": 85.0,
     "best": 0.92,
     "hits": 71
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 86.0,
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Calot's triangle is actively being dissected; cystic duct and artery are not isolated or fully exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.98,
     "hits": 83
    },
    "liver": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.98,
     "hits": 85
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.92,
     "hits": 85
    },
    "fat": {
     "first": 0.0,
     "last": 86.0,
     "best": 0.95,
     "hits": 85
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 86.0,
     "best": 0.92,
     "hits": 74
    },
    "gi_tract": {
     "first": 7.0,
     "last": 86.0,
     "best": 0.92,
     "hits": 72
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 87.0,
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; cystic structures and cystic plate are not yet fully exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.98,
     "hits": 84
    },
    "liver": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.98,
     "hits": 86
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.92,
     "hits": 86
    },
    "fat": {
     "first": 0.0,
     "last": 87.0,
     "best": 0.95,
     "hits": 86
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 87.0,
     "best": 0.92,
     "hits": 75
    },
    "gi_tract": {
     "first": 7.0,
     "last": 87.0,
     "best": 0.92,
     "hits": 73
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 88.0,
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
    "reason_if_not": "Calot's triangle dissection is actively in progress; cystic structures and the cystic plate are not yet fully exposed or clearly identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.98,
     "hits": 85
    },
    "liver": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.98,
     "hits": 87
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.92,
     "hits": 87
    },
    "fat": {
     "first": 0.0,
     "last": 88.0,
     "best": 0.95,
     "hits": 87
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 88.0,
     "best": 0.92,
     "hits": 76
    },
    "gi_tract": {
     "first": 7.0,
     "last": 88.0,
     "best": 0.92,
     "hits": 74
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is ongoing; cystic structures and the cystic plate are not yet fully exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 86
    },
    "liver": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.98,
     "hits": 88
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.92,
     "hits": 88
    },
    "fat": {
     "first": 0.0,
     "last": 89.0,
     "best": 0.95,
     "hits": 88
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 89.0,
     "best": 0.92,
     "hits": 77
    },
    "gi_tract": {
     "first": 7.0,
     "last": 89.0,
     "best": 0.92,
     "hits": 75
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 90.0,
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
      "name": "abdominal_wall",
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
    "reason_if_not": "The hepatocystic triangle is actively being dissected; cystic duct and cystic artery are not yet clearly delineated or isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.98,
     "hits": 87
    },
    "liver": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.98,
     "hits": 89
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.92,
     "hits": 89
    },
    "fat": {
     "first": 0.0,
     "last": 90.0,
     "best": 0.95,
     "hits": 89
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 90.0,
     "best": 0.92,
     "hits": 78
    },
    "gi_tract": {
     "first": 7.0,
     "last": 90.0,
     "best": 0.92,
     "hits": 76
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 91.0,
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in progress; the cystic structures are not yet fully isolated and critical view of safety has not been achieved.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.98,
     "hits": 88
    },
    "liver": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.98,
     "hits": 90
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.92,
     "hits": 90
    },
    "fat": {
     "first": 0.0,
     "last": 91.0,
     "best": 0.95,
     "hits": 90
    },
    "blood": {
     "first": 0.0,
     "last": 79.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 91.0,
     "best": 0.92,
     "hits": 79
    },
    "gi_tract": {
     "first": 7.0,
     "last": 91.0,
     "best": 0.92,
     "hits": 77
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 92.0,
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
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; cystic structures and the cystic plate are not yet fully skeletonized or exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.98,
     "hits": 89
    },
    "liver": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.98,
     "hits": 91
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.92,
     "hits": 91
    },
    "fat": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.95,
     "hits": 91
    },
    "blood": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 92.0,
     "best": 0.92,
     "hits": 80
    },
    "gi_tract": {
     "first": 7.0,
     "last": 92.0,
     "best": 0.92,
     "hits": 78
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 93.0,
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection in Calot's triangle is ongoing; the cystic duct and artery are not yet clearly delineated and skeletonized.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.98,
     "hits": 90
    },
    "liver": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.98,
     "hits": 92
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.92,
     "hits": 92
    },
    "fat": {
     "first": 0.0,
     "last": 93.0,
     "best": 0.95,
     "hits": 92
    },
    "blood": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 93.0,
     "best": 0.92,
     "hits": 81
    },
    "gi_tract": {
     "first": 7.0,
     "last": 93.0,
     "best": 0.92,
     "hits": 79
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 94.0,
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is ongoing; the hepatocystic triangle is not cleared and the cystic duct and artery are not yet individually isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.98,
     "hits": 91
    },
    "liver": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.98,
     "hits": 93
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.92,
     "hits": 93
    },
    "fat": {
     "first": 0.0,
     "last": 94.0,
     "best": 0.95,
     "hits": 93
    },
    "blood": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 94.0,
     "best": 0.92,
     "hits": 82
    },
    "gi_tract": {
     "first": 7.0,
     "last": 94.0,
     "best": 0.92,
     "hits": 80
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 62.0,
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
   "t": 95.0,
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
      "name": "gi_tract",
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
    "reason_if_not": "Calot's triangle dissection is still in progress; cystic duct and artery are not fully dissected and isolated to meet Critical View of Safety criteria.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.98,
     "hits": 92
    },
    "liver": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.98,
     "hits": 94
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.92,
     "hits": 94
    },
    "fat": {
     "first": 0.0,
     "last": 95.0,
     "best": 0.95,
     "hits": 94
    },
    "blood": {
     "first": 0.0,
     "last": 92.0,
     "best": 0.85,
     "hits": 47
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 95.0,
     "best": 0.92,
     "hits": 83
    },
    "gi_tract": {
     "first": 7.0,
     "last": 95.0,
     "best": 0.92,
     "hits": 81
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 96.0,
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; cystic duct and artery are not yet fully isolated and critical view of safety is not achieved.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.98,
     "hits": 93
    },
    "liver": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.98,
     "hits": 95
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.92,
     "hits": 95
    },
    "fat": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.95,
     "hits": 95
    },
    "blood": {
     "first": 0.0,
     "last": 96.0,
     "best": 0.85,
     "hits": 48
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 96.0,
     "best": 0.92,
     "hits": 84
    },
    "gi_tract": {
     "first": 7.0,
     "last": 96.0,
     "best": 0.92,
     "hits": 82
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 97.0,
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is ongoing; cystic duct and cystic artery are not yet fully isolated and skeletonized.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.98,
     "hits": 94
    },
    "liver": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.98,
     "hits": 96
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.92,
     "hits": 96
    },
    "fat": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.95,
     "hits": 96
    },
    "blood": {
     "first": 0.0,
     "last": 97.0,
     "best": 0.85,
     "hits": 49
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 97.0,
     "best": 0.92,
     "hits": 85
    },
    "gi_tract": {
     "first": 7.0,
     "last": 97.0,
     "best": 0.92,
     "hits": 83
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 98.0,
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; cystic structures are not fully skeletonized and cystic plate is not cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.98,
     "hits": 95
    },
    "liver": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.98,
     "hits": 97
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.92,
     "hits": 97
    },
    "fat": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.95,
     "hits": 97
    },
    "blood": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.85,
     "hits": 50
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 98.0,
     "best": 0.92,
     "hits": 86
    },
    "gi_tract": {
     "first": 7.0,
     "last": 98.0,
     "best": 0.92,
     "hits": 84
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 99.0,
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection is ongoing; cystic duct and cystic artery are not fully skeletonized or definitively identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.98,
     "hits": 96
    },
    "liver": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.98,
     "hits": 98
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.92,
     "hits": 98
    },
    "fat": {
     "first": 0.0,
     "last": 99.0,
     "best": 0.95,
     "hits": 98
    },
    "blood": {
     "first": 0.0,
     "last": 98.0,
     "best": 0.85,
     "hits": 50
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 99.0,
     "best": 0.92,
     "hits": 87
    },
    "gi_tract": {
     "first": 7.0,
     "last": 99.0,
     "best": 0.92,
     "hits": 85
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 100.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "gallbladder",
      "confidence": 0.75
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "connective_tissue",
      "confidence": 0.75
     },
     {
      "name": "blood",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "hook",
     "irrigator",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle dissection is incomplete; critical structures are obscured by tissue, blood, and instruments.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.98,
     "hits": 97
    },
    "liver": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.98,
     "hits": 99
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.92,
     "hits": 99
    },
    "fat": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.95,
     "hits": 99
    },
    "blood": {
     "first": 0.0,
     "last": 100.0,
     "best": 0.85,
     "hits": 51
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 100.0,
     "best": 0.92,
     "hits": 88
    },
    "gi_tract": {
     "first": 7.0,
     "last": 100.0,
     "best": 0.92,
     "hits": 86
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 101.0,
   "label": {
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
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Dissection is incomplete; cystic duct, cystic artery, and cystic plate are not clearly isolated or identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.98,
     "hits": 98
    },
    "liver": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.98,
     "hits": 100
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.92,
     "hits": 100
    },
    "fat": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.95,
     "hits": 100
    },
    "blood": {
     "first": 0.0,
     "last": 101.0,
     "best": 0.85,
     "hits": 52
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 101.0,
     "best": 0.92,
     "hits": 89
    },
    "gi_tract": {
     "first": 7.0,
     "last": 101.0,
     "best": 0.92,
     "hits": 87
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 102.0,
   "label": {
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
      "confidence": 0.9
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
    "reason_if_not": "Dissection is ongoing; hepatocystic triangle is not fully cleared and cystic structures are not clearly identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.98,
     "hits": 99
    },
    "liver": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.98,
     "hits": 101
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.92,
     "hits": 101
    },
    "fat": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.95,
     "hits": 101
    },
    "blood": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.85,
     "hits": 53
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 102.0,
     "best": 0.92,
     "hits": 90
    },
    "gi_tract": {
     "first": 7.0,
     "last": 101.0,
     "best": 0.92,
     "hits": 87
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 103.0,
   "label": {
    "phase": "cleaning",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
     },
     {
      "name": "fat",
      "confidence": 0.75
     },
     {
      "name": "blood",
      "confidence": 0.85
     }
    ],
    "instruments": [
     "grasper",
     "irrigator"
    ],
    "clip_applier_visible": false,
    "view_quality": "glare",
    "can_confirm_anatomy": false,
    "reason_if_not": "Cystic duct, cystic artery, and Calot's triangle are not exposed or visualized in this field of view.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.98,
     "hits": 99
    },
    "liver": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.98,
     "hits": 101
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 102.0,
     "best": 0.92,
     "hits": 101
    },
    "fat": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.95,
     "hits": 101
    },
    "blood": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.85,
     "hits": 53
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 103.0,
     "best": 0.92,
     "hits": 90
    },
    "gi_tract": {
     "first": 7.0,
     "last": 103.0,
     "best": 0.92,
     "hits": 87
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 104.0,
   "label": {
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
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle is actively being dissected; cystic duct and artery are not yet clearly dissected or isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.98,
     "hits": 100
    },
    "liver": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.98,
     "hits": 102
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.92,
     "hits": 102
    },
    "fat": {
     "first": 0.0,
     "last": 104.0,
     "best": 0.95,
     "hits": 102
    },
    "blood": {
     "first": 0.0,
     "last": 103.0,
     "best": 0.85,
     "hits": 53
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 104.0,
     "best": 0.92,
     "hits": 91
    },
    "gi_tract": {
     "first": 7.0,
     "last": 104.0,
     "best": 0.92,
     "hits": 88
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 105.0,
   "label": {
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
      "name": "gi_tract",
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
      "name": "abdominal_wall",
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot triangle dissection is ongoing; cystic duct and cystic artery are not yet clearly delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.98,
     "hits": 101
    },
    "liver": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.98,
     "hits": 103
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.92,
     "hits": 103
    },
    "fat": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.95,
     "hits": 103
    },
    "blood": {
     "first": 0.0,
     "last": 105.0,
     "best": 0.85,
     "hits": 53
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 105.0,
     "best": 0.92,
     "hits": 92
    },
    "gi_tract": {
     "first": 7.0,
     "last": 105.0,
     "best": 0.92,
     "hits": 89
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 106.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "liver",
      "confidence": 0.95
     },
     {
      "name": "gallbladder",
      "confidence": 0.6
     },
     {
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.75
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.7
     },
     {
      "name": "blood",
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
    "reason_if_not": "Dissection is ongoing; Calot's triangle is not cleared and cystic structures are not fully exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.98,
     "hits": 101
    },
    "liver": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.98,
     "hits": 104
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.92,
     "hits": 104
    },
    "fat": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.95,
     "hits": 104
    },
    "blood": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.85,
     "hits": 53
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 106.0,
     "best": 0.92,
     "hits": 93
    },
    "gi_tract": {
     "first": 7.0,
     "last": 106.0,
     "best": 0.92,
     "hits": 90
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 107.0,
   "label": {
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
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.8
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
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
    "reason_if_not": "Dissection is in early stages; cystic duct, cystic artery, and the hepatocystic triangle are not yet exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.98,
     "hits": 102
    },
    "liver": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.98,
     "hits": 105
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.92,
     "hits": 105
    },
    "fat": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 105
    },
    "blood": {
     "first": 0.0,
     "last": 106.0,
     "best": 0.85,
     "hits": 53
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 107.0,
     "best": 0.92,
     "hits": 94
    },
    "gi_tract": {
     "first": 7.0,
     "last": 107.0,
     "best": 0.92,
     "hits": 91
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 108.0,
   "label": {
    "phase": "gallbladder_dissection",
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
      "name": "abdominal_wall",
      "confidence": 0.9
     },
     {
      "name": "connective_tissue",
      "confidence": 0.8
     },
     {
      "name": "blood",
      "confidence": 0.75
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Calot's triangle structures (cystic duct and cystic artery) are not in view during liver bed dissection.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.98,
     "hits": 103
    },
    "liver": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.98,
     "hits": 106
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.92,
     "hits": 106
    },
    "fat": {
     "first": 0.0,
     "last": 107.0,
     "best": 0.95,
     "hits": 105
    },
    "blood": {
     "first": 0.0,
     "last": 108.0,
     "best": 0.85,
     "hits": 54
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 108.0,
     "best": 0.92,
     "hits": 95
    },
    "gi_tract": {
     "first": 7.0,
     "last": 108.0,
     "best": 0.92,
     "hits": 92
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 109.0,
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
    "reason_if_not": "Calot's triangle is partially dissected; cystic duct and artery are not fully skeletonized, and the critical view of safety is not yet achieved.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.98,
     "hits": 104
    },
    "liver": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.98,
     "hits": 107
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.92,
     "hits": 107
    },
    "fat": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.95,
     "hits": 106
    },
    "blood": {
     "first": 0.0,
     "last": 109.0,
     "best": 0.85,
     "hits": 55
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 109.0,
     "best": 0.92,
     "hits": 96
    },
    "gi_tract": {
     "first": 7.0,
     "last": 108.0,
     "best": 0.92,
     "hits": 92
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 110.0,
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.75
     },
     {
      "name": "blood",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; cystic duct and artery are not yet clearly skeletonized and the cystic plate is not exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.98,
     "hits": 105
    },
    "liver": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.98,
     "hits": 108
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.92,
     "hits": 108
    },
    "fat": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.95,
     "hits": 107
    },
    "blood": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 56
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 109.0,
     "best": 0.92,
     "hits": 96
    },
    "gi_tract": {
     "first": 7.0,
     "last": 108.0,
     "best": 0.92,
     "hits": 92
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 111.0,
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
    "reason_if_not": "The cystic duct and cystic artery are not yet fully skeletonized or delineated, and dissection of the hepatocystic triangle is ongoing.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.98,
     "hits": 106
    },
    "liver": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.98,
     "hits": 109
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.92,
     "hits": 109
    },
    "fat": {
     "first": 0.0,
     "last": 111.0,
     "best": 0.95,
     "hits": 108
    },
    "blood": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 56
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 111.0,
     "best": 0.92,
     "hits": 97
    },
    "gi_tract": {
     "first": 7.0,
     "last": 111.0,
     "best": 0.92,
     "hits": 93
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 112.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.92
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete and the cystic structures are not yet fully isolated or clearly identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.98,
     "hits": 107
    },
    "liver": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.98,
     "hits": 110
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.92,
     "hits": 110
    },
    "fat": {
     "first": 0.0,
     "last": 112.0,
     "best": 0.95,
     "hits": 109
    },
    "blood": {
     "first": 0.0,
     "last": 110.0,
     "best": 0.85,
     "hits": 56
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 112.0,
     "best": 0.92,
     "hits": 98
    },
    "gi_tract": {
     "first": 7.0,
     "last": 112.0,
     "best": 0.92,
     "hits": 94
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 113.0,
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
    "reason_if_not": "Calot's triangle dissection is still in progress; cystic duct and artery are not yet clearly skeletonized and isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.98,
     "hits": 108
    },
    "liver": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.98,
     "hits": 111
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.92,
     "hits": 111
    },
    "fat": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.95,
     "hits": 110
    },
    "blood": {
     "first": 0.0,
     "last": 113.0,
     "best": 0.85,
     "hits": 57
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 112.0,
     "best": 0.92,
     "hits": 98
    },
    "gi_tract": {
     "first": 7.0,
     "last": 113.0,
     "best": 0.92,
     "hits": 95
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
      "confidence": 0.8
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
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
    "reason_if_not": "Dissection of the hepatocystic triangle is currently underway; cystic structures are not yet fully isolated and critical view of safety has not been achieved.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.98,
     "hits": 109
    },
    "liver": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.98,
     "hits": 112
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.92,
     "hits": 112
    },
    "fat": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.95,
     "hits": 111
    },
    "blood": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.85,
     "hits": 58
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 114.0,
     "best": 0.92,
     "hits": 99
    },
    "gi_tract": {
     "first": 7.0,
     "last": 114.0,
     "best": 0.92,
     "hits": 96
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 115.0,
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is ongoing; hepatocystic triangle is not fully cleared and the cystic duct and artery are not yet individually isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.98,
     "hits": 110
    },
    "liver": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.98,
     "hits": 113
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.92,
     "hits": 113
    },
    "fat": {
     "first": 0.0,
     "last": 115.0,
     "best": 0.95,
     "hits": 112
    },
    "blood": {
     "first": 0.0,
     "last": 114.0,
     "best": 0.85,
     "hits": 58
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 115.0,
     "best": 0.92,
     "hits": 100
    },
    "gi_tract": {
     "first": 7.0,
     "last": 115.0,
     "best": 0.92,
     "hits": 97
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 116.0,
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
     },
     {
      "name": "blood",
      "confidence": 0.75
     },
     {
      "name": "gi_tract",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; the cystic duct and cystic artery are not yet clearly delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.98,
     "hits": 111
    },
    "liver": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.98,
     "hits": 114
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 114
    },
    "fat": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.95,
     "hits": 113
    },
    "blood": {
     "first": 0.0,
     "last": 116.0,
     "best": 0.85,
     "hits": 59
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 101
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 117.0,
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "fat",
      "confidence": 0.8
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
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is currently underway; cystic structures are not yet fully mobilized or cleared for definitive identification.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.98,
     "hits": 112
    },
    "liver": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.98,
     "hits": 115
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.92,
     "hits": 115
    },
    "fat": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.95,
     "hits": 114
    },
    "blood": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.85,
     "hits": 60
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 117.0,
     "best": 0.92,
     "hits": 102
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 118.0,
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
    "reason_if_not": "Dissection is in early stages; cystic duct and cystic artery are not yet individually skeletonized or identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.98,
     "hits": 113
    },
    "liver": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.98,
     "hits": 116
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.92,
     "hits": 116
    },
    "fat": {
     "first": 0.0,
     "last": 118.0,
     "best": 0.95,
     "hits": 115
    },
    "blood": {
     "first": 0.0,
     "last": 117.0,
     "best": 0.85,
     "hits": 60
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 118.0,
     "best": 0.92,
     "hits": 103
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 119.0,
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
     },
     {
      "name": "blood",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; cystic duct and artery are not yet clearly isolated and identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.98,
     "hits": 114
    },
    "liver": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.98,
     "hits": 117
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.92,
     "hits": 117
    },
    "fat": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.95,
     "hits": 116
    },
    "blood": {
     "first": 0.0,
     "last": 119.0,
     "best": 0.85,
     "hits": 61
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 119.0,
     "best": 0.92,
     "hits": 104
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 120.0,
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
    "reason_if_not": "Dissection of the hepatocystic triangle is actively ongoing; cystic structures and the cystic plate are not yet fully exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.98,
     "hits": 115
    },
    "liver": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.98,
     "hits": 118
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.92,
     "hits": 118
    },
    "fat": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.95,
     "hits": 117
    },
    "blood": {
     "first": 0.0,
     "last": 120.0,
     "best": 0.85,
     "hits": 62
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 120.0,
     "best": 0.92,
     "hits": 105
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 121.0,
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
    "reason_if_not": "Dissection of the hepatocystic triangle is actively ongoing; cystic structures are not yet individually isolated and identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.98,
     "hits": 116
    },
    "liver": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.98,
     "hits": 119
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.92,
     "hits": 119
    },
    "fat": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.95,
     "hits": 118
    },
    "blood": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.85,
     "hits": 63
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 121.0,
     "best": 0.92,
     "hits": 106
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 122.0,
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Calot's triangle dissection is in progress; cystic duct and artery are not yet individually isolated and identified entering the gallbladder.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.98,
     "hits": 117
    },
    "liver": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.98,
     "hits": 120
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.92,
     "hits": 120
    },
    "fat": {
     "first": 0.0,
     "last": 122.0,
     "best": 0.95,
     "hits": 119
    },
    "blood": {
     "first": 0.0,
     "last": 121.0,
     "best": 0.85,
     "hits": 63
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 122.0,
     "best": 0.92,
     "hits": 107
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 123.0,
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
     },
     {
      "name": "blood",
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
    "reason_if_not": "Cystic duct and cystic artery are not yet individually skeletonized and isolated from surrounding connective tissue.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.98,
     "hits": 118
    },
    "liver": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.98,
     "hits": 121
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.92,
     "hits": 121
    },
    "fat": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.95,
     "hits": 120
    },
    "blood": {
     "first": 0.0,
     "last": 123.0,
     "best": 0.85,
     "hits": 64
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 123.0,
     "best": 0.92,
     "hits": 108
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 124.0,
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; cystic structures are not yet fully skeletonized or isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.98,
     "hits": 119
    },
    "liver": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.98,
     "hits": 122
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.92,
     "hits": 122
    },
    "fat": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.95,
     "hits": 121
    },
    "blood": {
     "first": 0.0,
     "last": 124.0,
     "best": 0.85,
     "hits": 65
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 124.0,
     "best": 0.92,
     "hits": 108
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 125.0,
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete; cystic duct and artery are not yet clearly delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.98,
     "hits": 120
    },
    "liver": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.98,
     "hits": 123
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.92,
     "hits": 123
    },
    "fat": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.95,
     "hits": 122
    },
    "blood": {
     "first": 0.0,
     "last": 125.0,
     "best": 0.85,
     "hits": 66
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 124.0,
     "best": 0.92,
     "hits": 108
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 126.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.92
     },
     {
      "name": "connective_tissue",
      "confidence": 0.88
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
    "reason_if_not": "Hepatocystic triangle is not fully dissected; cystic duct and artery are not clearly visualized or isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.98,
     "hits": 121
    },
    "liver": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.98,
     "hits": 124
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.92,
     "hits": 124
    },
    "fat": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.95,
     "hits": 123
    },
    "blood": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.85,
     "hits": 67
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 126.0,
     "best": 0.92,
     "hits": 109
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 127.0,
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
    "reason_if_not": "Calot's triangle dissection is incomplete; critical structures remain covered by peritoneum and connective tissue.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.98,
     "hits": 122
    },
    "liver": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.98,
     "hits": 125
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.92,
     "hits": 125
    },
    "fat": {
     "first": 0.0,
     "last": 127.0,
     "best": 0.95,
     "hits": 124
    },
    "blood": {
     "first": 0.0,
     "last": 126.0,
     "best": 0.85,
     "hits": 67
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 126.0,
     "best": 0.92,
     "hits": 109
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 128.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.92
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
     },
     {
      "name": "blood",
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
    "reason_if_not": "Early dissection stage; cystic duct and artery are not isolated, and the hepatocystic triangle is not cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.98,
     "hits": 123
    },
    "liver": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.98,
     "hits": 126
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.92,
     "hits": 126
    },
    "fat": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.95,
     "hits": 125
    },
    "blood": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.85,
     "hits": 67
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 128.0,
     "best": 0.92,
     "hits": 110
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 129.0,
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
    "reason_if_not": "Calot's triangle dissection is ongoing; the cystic duct and artery are not yet fully isolated and identified entering the gallbladder.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.98,
     "hits": 124
    },
    "liver": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.98,
     "hits": 127
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.92,
     "hits": 127
    },
    "fat": {
     "first": 0.0,
     "last": 129.0,
     "best": 0.95,
     "hits": 126
    },
    "blood": {
     "first": 0.0,
     "last": 128.0,
     "best": 0.85,
     "hits": 67
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 129.0,
     "best": 0.92,
     "hits": 111
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 130.0,
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
     },
     {
      "name": "blood",
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
    "reason_if_not": "Calot's triangle dissection is still in progress; cystic duct and artery are not yet clearly delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.98,
     "hits": 125
    },
    "liver": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.98,
     "hits": 128
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.92,
     "hits": 128
    },
    "fat": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.95,
     "hits": 127
    },
    "blood": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.85,
     "hits": 68
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 130.0,
     "best": 0.92,
     "hits": 112
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 131.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.92
     },
     {
      "name": "connective_tissue",
      "confidence": 0.88
     },
     {
      "name": "fat",
      "confidence": 0.75
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
    "reason_if_not": "Calot's triangle is incompletely dissected; cystic duct and cystic artery are not yet clearly delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.98,
     "hits": 126
    },
    "liver": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.98,
     "hits": 129
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.92,
     "hits": 129
    },
    "fat": {
     "first": 0.0,
     "last": 131.0,
     "best": 0.95,
     "hits": 128
    },
    "blood": {
     "first": 0.0,
     "last": 130.0,
     "best": 0.85,
     "hits": 68
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 131.0,
     "best": 0.92,
     "hits": 113
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 132.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.95
     },
     {
      "name": "liver",
      "confidence": 0.93
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is ongoing; cystic duct and artery are not yet skeletonized or definitively identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.98,
     "hits": 127
    },
    "liver": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.98,
     "hits": 130
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.92,
     "hits": 130
    },
    "fat": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.95,
     "hits": 129
    },
    "blood": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.85,
     "hits": 69
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 131.0,
     "best": 0.92,
     "hits": 113
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 133.0,
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
     "hook",
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is ongoing; Calot's triangle is not cleared and cystic structures are not yet individually isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.98,
     "hits": 128
    },
    "liver": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.98,
     "hits": 131
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.92,
     "hits": 131
    },
    "fat": {
     "first": 0.0,
     "last": 133.0,
     "best": 0.95,
     "hits": 130
    },
    "blood": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.85,
     "hits": 69
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 133.0,
     "best": 0.92,
     "hits": 114
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 134.0,
   "label": {
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
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "fat",
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
    "reason_if_not": "Calot's triangle dissection is incomplete; cystic duct and artery are not yet clearly delineated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.98,
     "hits": 128
    },
    "liver": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.98,
     "hits": 131
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.92,
     "hits": 131
    },
    "fat": {
     "first": 0.0,
     "last": 134.0,
     "best": 0.95,
     "hits": 130
    },
    "blood": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.85,
     "hits": 69
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 134.0,
     "best": 0.92,
     "hits": 114
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 95.0,
     "best": 0.75,
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
   "t": 135.0,
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
    "reason_if_not": "Calot's triangle is currently being dissected; the cystic duct and artery are not fully skeletonized, and the cystic plate is not yet exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.98,
     "hits": 129
    },
    "liver": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.98,
     "hits": 132
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.92,
     "hits": 132
    },
    "fat": {
     "first": 0.0,
     "last": 135.0,
     "best": 0.95,
     "hits": 131
    },
    "blood": {
     "first": 0.0,
     "last": 132.0,
     "best": 0.85,
     "hits": 69
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 135.0,
     "best": 0.92,
     "hits": 115
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 135.0,
     "best": 0.75,
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
   "t": 136.0,
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
      "name": "connective_tissue",
      "confidence": 0.9
     },
     {
      "name": "abdominal_wall",
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle has not been fully cleared of fibrous tissue and fat, and the cystic structures are not yet fully skeletonized.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.98,
     "hits": 130
    },
    "liver": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.98,
     "hits": 133
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.92,
     "hits": 133
    },
    "fat": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.95,
     "hits": 132
    },
    "blood": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.85,
     "hits": 70
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 136.0,
     "best": 0.92,
     "hits": 116
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 135.0,
     "best": 0.75,
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
   "t": 137.0,
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is incomplete; cystic structures are not yet fully skeletonized and the hepatocystic triangle is not fully cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.98,
     "hits": 131
    },
    "liver": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.98,
     "hits": 134
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.92,
     "hits": 134
    },
    "fat": {
     "first": 0.0,
     "last": 137.0,
     "best": 0.95,
     "hits": 133
    },
    "blood": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.85,
     "hits": 70
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 137.0,
     "best": 0.92,
     "hits": 117
    },
    "gi_tract": {
     "first": 7.0,
     "last": 116.0,
     "best": 0.92,
     "hits": 98
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 135.0,
     "best": 0.75,
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
   "t": 138.0,
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
    "reason_if_not": "Calot's triangle dissection is ongoing; cystic duct and artery are not yet clearly skeletonized and isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.98,
     "hits": 132
    },
    "liver": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.98,
     "hits": 135
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.92,
     "hits": 135
    },
    "fat": {
     "first": 0.0,
     "last": 138.0,
     "best": 0.95,
     "hits": 134
    },
    "blood": {
     "first": 0.0,
     "last": 136.0,
     "best": 0.85,
     "hits": 70
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 138.0,
     "best": 0.92,
     "hits": 118
    },
    "gi_tract": {
     "first": 7.0,
     "last": 138.0,
     "best": 0.92,
     "hits": 99
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 135.0,
     "best": 0.75,
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
      "confidence": 0.75
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
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
    "reason_if_not": "Dissection is incomplete; hepatocystic triangle is not fully cleared of peritoneal and connective tissue, and cystic structures are not definitively isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.98,
     "hits": 133
    },
    "liver": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.98,
     "hits": 136
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.92,
     "hits": 136
    },
    "fat": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.95,
     "hits": 135
    },
    "blood": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.85,
     "hits": 71
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 139.0,
     "best": 0.92,
     "hits": 119
    },
    "gi_tract": {
     "first": 7.0,
     "last": 139.0,
     "best": 0.92,
     "hits": 100
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.75,
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
   "t": 140.0,
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
    "reason_if_not": "Dissection is incomplete; cystic duct and cystic artery are not fully isolated and the critical view of safety has not been achieved.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.98,
     "hits": 134
    },
    "liver": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.98,
     "hits": 137
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.92,
     "hits": 137
    },
    "fat": {
     "first": 0.0,
     "last": 140.0,
     "best": 0.95,
     "hits": 136
    },
    "blood": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.85,
     "hits": 71
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 140.0,
     "best": 0.92,
     "hits": 120
    },
    "gi_tract": {
     "first": 7.0,
     "last": 140.0,
     "best": 0.92,
     "hits": 101
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 139.0,
     "best": 0.75,
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
   "t": 141.0,
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Calot's triangle is partially dissected; cystic artery and duct are not yet fully isolated and identified, and CVS criteria are not met.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.98,
     "hits": 135
    },
    "liver": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.98,
     "hits": 138
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.92,
     "hits": 138
    },
    "fat": {
     "first": 0.0,
     "last": 141.0,
     "best": 0.95,
     "hits": 137
    },
    "blood": {
     "first": 0.0,
     "last": 139.0,
     "best": 0.85,
     "hits": 71
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 141.0,
     "best": 0.92,
     "hits": 121
    },
    "gi_tract": {
     "first": 7.0,
     "last": 141.0,
     "best": 0.92,
     "hits": 102
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
   "t": 142.0,
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
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
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
    "reason_if_not": "Hepatocystic triangle is still being dissected; cystic duct and artery are not fully isolated or definitively identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.98,
     "hits": 136
    },
    "liver": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.98,
     "hits": 139
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.92,
     "hits": 139
    },
    "fat": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.95,
     "hits": 138
    },
    "blood": {
     "first": 0.0,
     "last": 142.0,
     "best": 0.85,
     "hits": 72
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 142.0,
     "best": 0.92,
     "hits": 122
    },
    "gi_tract": {
     "first": 7.0,
     "last": 142.0,
     "best": 0.92,
     "hits": 103
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
   "t": 143.0,
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
      "confidence": 0.9
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
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is incomplete; the cystic duct and artery have not been skeletonized, and the hepatocystic triangle is not fully cleared.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.98,
     "hits": 137
    },
    "liver": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.98,
     "hits": 140
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.92,
     "hits": 140
    },
    "fat": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.95,
     "hits": 139
    },
    "blood": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.85,
     "hits": 72
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 142.0,
     "best": 0.92,
     "hits": 122
    },
    "gi_tract": {
     "first": 7.0,
     "last": 143.0,
     "best": 0.92,
     "hits": 104
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
   "t": 144.0,
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
      "name": "abdominal_wall",
      "confidence": 0.8
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
    "reason_if_not": "Calot's triangle dissection is incomplete; cystic duct and artery are not yet skeletonized or clearly distinguished.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.98,
     "hits": 138
    },
    "liver": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.98,
     "hits": 141
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.92,
     "hits": 141
    },
    "fat": {
     "first": 0.0,
     "last": 144.0,
     "best": 0.95,
     "hits": 140
    },
    "blood": {
     "first": 0.0,
     "last": 143.0,
     "best": 0.85,
     "hits": 72
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 144.0,
     "best": 0.92,
     "hits": 123
    },
    "gi_tract": {
     "first": 7.0,
     "last": 144.0,
     "best": 0.92,
     "hits": 105
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
   "t": 145.0,
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
      "name": "connective_tissue",
      "confidence": 0.85
     },
     {
      "name": "fat",
      "confidence": 0.9
     },
     {
      "name": "blood",
      "confidence": 0.75
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress and key anatomical structures are not yet fully isolated or identified.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.98,
     "hits": 139
    },
    "liver": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.98,
     "hits": 142
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.92,
     "hits": 142
    },
    "fat": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.95,
     "hits": 141
    },
    "blood": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 73
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 145.0,
     "best": 0.92,
     "hits": 124
    },
    "gi_tract": {
     "first": 7.0,
     "last": 145.0,
     "best": 0.92,
     "hits": 106
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
   "t": 146.0,
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
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper",
     "scissors"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is ongoing; hepatocystic triangle is not fully cleared and the cystic duct and artery are not yet definitively isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.98,
     "hits": 140
    },
    "liver": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.98,
     "hits": 143
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.92,
     "hits": 143
    },
    "fat": {
     "first": 0.0,
     "last": 146.0,
     "best": 0.95,
     "hits": 142
    },
    "blood": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 73
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 146.0,
     "best": 0.92,
     "hits": 125
    },
    "gi_tract": {
     "first": 7.0,
     "last": 146.0,
     "best": 0.92,
     "hits": 107
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
   "t": 147.0,
   "label": {
    "phase": "clipping_and_cutting",
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
      "name": "gi_tract",
      "confidence": 0.8
     },
     {
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is incomplete and the critical view of safety has not been fully established.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.98,
     "hits": 141
    },
    "liver": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.98,
     "hits": 144
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.92,
     "hits": 144
    },
    "fat": {
     "first": 0.0,
     "last": 147.0,
     "best": 0.95,
     "hits": 143
    },
    "blood": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 73
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 147.0,
     "best": 0.92,
     "hits": 126
    },
    "gi_tract": {
     "first": 7.0,
     "last": 147.0,
     "best": 0.92,
     "hits": 108
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
   "t": 148.0,
   "label": {
    "phase": "clipping_and_cutting",
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
      "name": "abdominal_wall",
      "confidence": 0.8
     }
    ],
    "instruments": [
     "grasper",
     "clipper"
    ],
    "clip_applier_visible": true,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "The hepatocystic triangle is not fully cleared of fat and fibrous tissue, the cystic plate is not exposed, and two distinct structures entering the gallbladder are not fully skeletonized.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.98,
     "hits": 142
    },
    "liver": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.98,
     "hits": 145
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.92,
     "hits": 145
    },
    "fat": {
     "first": 0.0,
     "last": 148.0,
     "best": 0.95,
     "hits": 144
    },
    "blood": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 73
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 148.0,
     "best": 0.92,
     "hits": 127
    },
    "gi_tract": {
     "first": 7.0,
     "last": 147.0,
     "best": 0.92,
     "hits": 108
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
   "t": 149.0,
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
      "name": "abdominal_wall",
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
    "reason_if_not": "Dissection of the hepatocystic triangle is in progress; cystic structures and cystic plate are not yet fully cleared or exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.98,
     "hits": 143
    },
    "liver": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.98,
     "hits": 146
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.92,
     "hits": 146
    },
    "fat": {
     "first": 0.0,
     "last": 149.0,
     "best": 0.95,
     "hits": 145
    },
    "blood": {
     "first": 0.0,
     "last": 145.0,
     "best": 0.85,
     "hits": 73
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 149.0,
     "best": 0.92,
     "hits": 128
    },
    "gi_tract": {
     "first": 7.0,
     "last": 149.0,
     "best": 0.92,
     "hits": 109
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
   "t": 150.0,
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
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
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
    "reason_if_not": "Calot's triangle is still covered by peritoneum and connective tissue; cystic duct and cystic artery are not yet isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.98,
     "hits": 144
    },
    "liver": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.98,
     "hits": 147
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.92,
     "hits": 147
    },
    "fat": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.95,
     "hits": 146
    },
    "blood": {
     "first": 0.0,
     "last": 150.0,
     "best": 0.85,
     "hits": 74
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 150.0,
     "best": 0.92,
     "hits": 129
    },
    "gi_tract": {
     "first": 7.0,
     "last": 150.0,
     "best": 0.92,
     "hits": 110
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
   "t": 151.0,
   "label": {
    "phase": "calot_triangle_dissection",
    "visible_structures": [
     {
      "name": "gallbladder",
      "confidence": 0.98
     },
     {
      "name": "liver",
      "confidence": 0.96
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
      "confidence": 0.85
     },
     {
      "name": "gi_tract",
      "confidence": 0.8
     },
     {
      "name": "blood",
      "confidence": 0.65
     }
    ],
    "instruments": [
     "grasper",
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection of the hepatocystic triangle is currently ongoing; the cystic duct and cystic artery are not yet individually isolated and the cystic plate is not fully exposed.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.98,
     "hits": 145
    },
    "liver": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.98,
     "hits": 148
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.92,
     "hits": 148
    },
    "fat": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.95,
     "hits": 147
    },
    "blood": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.85,
     "hits": 74
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 151.0,
     "best": 0.92,
     "hits": 130
    },
    "gi_tract": {
     "first": 7.0,
     "last": 151.0,
     "best": 0.92,
     "hits": 111
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
   "t": 152.0,
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
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.8
     },
     {
      "name": "gi_tract",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper",
     "scissors"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Hepatocystic triangle dissection is incomplete; cystic duct and artery are not fully dissected and isolated.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.98,
     "hits": 146
    },
    "liver": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.98,
     "hits": 149
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.92,
     "hits": 149
    },
    "fat": {
     "first": 0.0,
     "last": 152.0,
     "best": 0.95,
     "hits": 148
    },
    "blood": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.85,
     "hits": 74
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 152.0,
     "best": 0.92,
     "hits": 131
    },
    "gi_tract": {
     "first": 7.0,
     "last": 152.0,
     "best": 0.92,
     "hits": 112
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
   "t": 153.0,
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
      "confidence": 0.88
     },
     {
      "name": "gi_tract",
      "confidence": 0.85
     },
     {
      "name": "abdominal_wall",
      "confidence": 0.75
     }
    ],
    "instruments": [
     "grasper",
     "other"
    ],
    "clip_applier_visible": false,
    "view_quality": "clear",
    "can_confirm_anatomy": false,
    "reason_if_not": "Dissection is in progress; the cystic duct and artery are not yet skeletonized and critical view of safety has not been achieved.",
    "cvs": {
     "c1": false,
     "c2": false,
     "c3": false
    }
   },
   "can_confirm": false,
   "state": {
    "gallbladder": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.98,
     "hits": 147
    },
    "liver": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.98,
     "hits": 150
    },
    "connective_tissue": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.92,
     "hits": 150
    },
    "fat": {
     "first": 0.0,
     "last": 153.0,
     "best": 0.95,
     "hits": 149
    },
    "blood": {
     "first": 0.0,
     "last": 151.0,
     "best": 0.85,
     "hits": 74
    },
    "abdominal_wall": {
     "first": 2.0,
     "last": 153.0,
     "best": 0.92,
     "hits": 132
    },
    "gi_tract": {
     "first": 7.0,
     "last": 153.0,
     "best": 0.92,
     "hits": 113
    },
    "cystic_duct": {
     "first": 29.0,
     "last": 141.0,
     "best": 0.75,
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
