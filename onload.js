window.onload = function() {
        particlesJS("part", {
          "particles": {
            "number": {
              "value": 50
            },
            "move" : {
                "speed" : 0
            },
            "size" : {
              "value" : 10  
            },
            "line_linked" : {
              "width": 7,
              distance: 70
            },
            "opacity" : {
                "value" : 1,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            }
          },
          "interactivity" : {
              "detect_on" : "canvas",
              "events" : {
                  "onhover": {
                     "enable": true,
                     "mode": "grab"
                   },
                  "onclick": {
                     "enable": true,
                     "mode": "bubble"
                   }
              },
              "modes":{
                  "bubble":{
                      "distance": 200,
                      "size": 40,
                      "duration": 0.4
                  }
              }
          }
        });
      }
