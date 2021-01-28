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
          "text": "&lt;&lt; insert video embed or link to open a 3D animation in a separate tab/window &gt;&gt;"
        },
        {
          "yaw": -1.702117933734959,
          "pitch": 0.18743239644242138,
          "title": "A Clinician's Toolbox",
          "text": "&lt;&lt; informative text hotspot about the common tools used during the scan/treatment. embed images of the mesh face covering used in scans? &gt;&gt;"
        }
      ]
    },
    {
      "id": "1-main-office",
      "name": "Main Office",
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
          "text": "&lt;&lt; image embed of clinic head, as well as a brief text bio and what role they will have in a patient's future treatments &gt;&gt;"
        },
        {
          "yaw": 0.7889182169055147,
          "pitch": 0.35946432010989504,
          "title": "Don't Be Afraid to Ask for Help",
          "text": "&lt;&lt; embed video of real treatment patients talking about their experiences, and possibly links to an outside site that could help a patient seek mental health resources &gt;&gt;"
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
          "text": "&lt;&lt; what to expect when waiting to meet with your clinician! possible hyperlinks links to sites on how to best deal with anxiety &gt;&gt;"
        },
        {
          "yaw": -2.3642521079196186,
          "pitch": 0.04827677217545201,
          "title": "Leaving? What comes next?",
          "text": "&lt;&lt; hyperlink leading back to main site (exiting tour), as well as a possible video embed of radiation therapy patients talking about their experience &gt;&gt;"
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
