

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Particles from 'react-particles-js'
import "../css/particles.scss"
import positive from "../images/grinning-face.svg"
import neutral from "../images/sleeping-face.svg"
import negative from "../images/frowning-face.svg"


function randomMargin() {
  var maxSpacing = 12;
  var spacing = Math.floor(Math.random()*maxSpacing);
  return {marginLeft: spacing + 'px'};
}


const socialPage = () => (
  <Layout pageTitle="Social Media" color="">
  
<Particles 
      className="particles"
      params={{
        "particles": {
          "number": {
            "value": 15,
            "density": {
              "enable": true,
              "value_area": 400
            }
          },
          "color": {
            "value": "#FF7A79"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 1,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 1,
              "opacity_min": 0.3,
              "sync": false
            }
          },
          "size": {
            "value": 3,
            "random": false,
            "anim": {
              "enable": false,
              "speed": 10,
              "size_min": 2,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#000",
            "opacity": 0.2,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 1,
            "direction": "top-right",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 800,
              "rotateY": 800
            }
          }
        },
	  "interactivity": {
	    "detect_on": "window",
	    "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 180,
              "line_linked": {
                "opacity": 0.2
              }
            },
            "bubble": {
              "distance": 180,
              "size": 8,
              "duration": 0.1,
              "opacity": 1,
              "speed": 0.5 
           },
            "repulse": {
              "distance": 180,
              "duration": 0.1 
            },
            "push": {
              "particles_nb": 1
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }}

    />

<div className="social">
  <div className="social-active">
  <img className="social-sentiment" src={positive} alt="check mark" />
  <ul>
  <li style={randomMargin()}><span><a href="https://www.instagram.com/kohlhofer/">Instagram</a></span></li>
  <li style={randomMargin()}><span><a href="https://www.chess.com/member/kohlhofer">Chess.com</a></span></li>
  </ul>
  </div>
  <div className="social-passive">
  <img className="social-sentiment" src={neutral} alt="neutral face" />
  <ul>
  <li style={randomMargin()}><span><a href="https://www.youtube.com/channel/UC8MQAg5u5t1KpxdutBW40Yg">Youtube</a></span></li>
  <li style={randomMargin()}><span><a href="https://www.linkedin.com/in/kohlhofer/">LinkedIn</a></span></li>
  <li style={randomMargin()}><span><a href="https://soundcloud.com/kohlhofer_music">Soundcloud</a></span></li>
  <li style={randomMargin()}><span><a href="https://dribbble.com/kohlhofer">Dribbble</a></span></li>
  </ul>
  </div>
  <div className="social-dead">
  <img className="social-sentiment" src={negative} alt="frowning face" />
  <ul>
  <li style={randomMargin()}><span>Facebook</span></li>
  <li style={randomMargin()}><span><a href="https://twitter.com/kohlhofer">Twitter</a></span></li>
  <li style={randomMargin()}><span>Flickr</span></li>
  <li style={randomMargin()}><span>Tumblr</span></li>
  <li style={randomMargin()}><span>Elo</span></li>
  <li style={randomMargin()}><span>Google+</span></li>
  <li style={randomMargin()}><span>Pinterrest</span></li>
  <li style={randomMargin()}><span>Good Reads</span></li>
  </ul>
  </div>
  </div>
  </Layout>
)

export default socialPage
