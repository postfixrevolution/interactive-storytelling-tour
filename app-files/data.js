var APP_DATA = {
  "scenes": [
    {
      "id": "0-treatment-room",
      "name": "Treatment Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1902,
      "initialViewParameters": {
        "yaw": -2.3274940103943393,
        "pitch": 0.016330611164081077,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.037426276940229,
          "pitch": 0.09043829404255277,
          "rotation": 0,
          "target": "2-waiting-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.012303464702160483,
          "pitch": 0.5239960189343211,
          "title": "CT Scan Simulation",
          "text": "<img src=\"resources/ct-scan.gif\"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>",
          "type": "info",
          "id": "info1"
        },
        {
          "yaw": -1.702117933734959,
          "pitch": 0.18743239644242138,
          "title": " ",
          "text": "<img src=\"resources/medication-storage.jpg\">A Clinician's Toolbox",
          "type": "hoverspot",
          "id": "hoverspot1"
        }
      ]
    },
    {
      "id": "1-main-office",
      "name": "Consultation Office",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.5463060371243085,
        "pitch": 0.18884816167574847,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8648156440724648,
          "pitch": 0.07105754366093109,
          "rotation": 0,
          "target": "2-waiting-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.804102775247479,
          "pitch": 0.3204577413052636,
          "title": "Meet the Team",
          "text": "<img class=\"icon\" src=\"resources/dr-roa.png\"></br>The team here at UCI Medical Center is here to answer any questions you may have about your treatment.",
          "type": "expand",
          "id": "expand1"
        },
        {
          "yaw": 0.7889182169055147,
          "pitch": 0.35946432010989504,
          "title": "Are Your Loved Ones in Need of Support?",
          "text": "<iframe src=\"https://www.youtube.com/embed/d0mFtYPJwhc\"></iframe><p class=\"blockquote\">The simplest thing you can do for your loved ones is to support them, wholly and unconditionally.</p>",
          "type": "hint",
          "id": "hint1"
        }
      ]
    },
    {
      "id": "2-waiting-room",
      "name": "Waiting Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -1.6476293394912886,
        "pitch": 0.007841294239005592,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9615262662922177,
          "pitch": 0.051545958892871724,
          "rotation": 6.283185307179586,
          "target": "0-treatment-room"
        },
        {
          "yaw": -1.127461621207301,
          "pitch": 0.015412397388264054,
          "rotation": 0,
          "target": "1-main-office"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4547174815219517,
          "pitch": 0.12301661058173252,
          "title": "Pre-Appointment Nerves?",
          "text": "Don't forget to: <p class=\"checklist\"><input type=\"checkbox\" name = \"checkin\"> <label for=\"checkin\">Check in at the front desk</label><br><input type=\"checkbox\" name = \"breathe\"> <label for=\"breathe\">Take a deep breath</label><br><input type=\"checkbox\" name = \"wait\"> <label for=\"wait\">Find a seat to wait at</label></p>You're not alone!",
          "type": "info",
          "id": "info2"
        },
        {
          "yaw": -2.3642521079196186,
          "pitch": 0.04827677217545201,
          "title": "Leaving? What comes next?",
          "text": "<iframe width=\"270\" height=\"auto\" src=\"https://www.youtube.com/embed/1IT8O-GlW2U\"></iframe><p class=\"blockquote-modal\">Hear more from people who have experienced what you're going through.</p><p>Or, <a href=\"https://www.ucihealth.org/\" target=\"_blank\" class=\"modal-link\">return to our site to keep exploring. →</a>",
          "type": "info",
          "id": "info3"
        }
      ]
    }
  ],
  "name": "Interactive Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
