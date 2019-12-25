

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import trump from "../images/trump.svg"
import positive from "../images/neutral-face.svg"
import neutral from "../images/sleeping-face.svg"
import negative from "../images/frowning-face.svg"


function randomMargin() {
  var maxSpacing = 15;
  var spacing = Math.floor(Math.random()*maxSpacing);
  return {marginLeft: spacing + 'px'};
}


const socialPage = () => (
  <Layout pageTitle="Social Media" color="social-back">
  <div className="social">
  <div className="social-active">
  <img className="social-sentiment" src={positive} alt="check mark" />
  <h2>Actively engaged:</h2>
  <ul>
  <li style={randomMargin()}><span><a href="https://www.chess.com/member/kohlhofer">Chess.com</a></span></li>
  </ul>
  </div>
  <div className="social-passive">
  <img className="social-sentiment" src={neutral} alt="neutral face" />
  <h2>Sporadic use:</h2>
  <ul>
  <li style={randomMargin()}><span><a href="https://www.instagram.com/kohlhofer/">Instagram</a></span></li>
  <li style={randomMargin()}><span><a href="https://www.youtube.com/channel/UC8MQAg5u5t1KpxdutBW40Yg">Youtube</a></span></li>
  <li style={randomMargin()}><span><a href="https://www.linkedin.com/in/kohlhofer/">LinkedIn</a></span></li>
  <li style={randomMargin()}><span><a href="https://dribbble.com/kohlhofer">Dribbble</a></span></li>
  </ul>
  </div>
  <div className="social-dead">
  <img className="social-sentiment" src={negative} alt="frowning face" />
  <h2>Stale or account deleted:</h2>
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
  <div className="social-illustration">
  <img src={trump} alt="bw photo of Donald Trum" />
  </div>
  <div className="social-about">
  <p>It feels like we are spending more and more time in an individualistic social media hallucination. Through that lens reality is no longer a shared experience. Instead it is warped to re-inforce and exploit our biases.</p>
  <p>I try to limit my own exposure to the poisonous hallucination.</p>
  </div>
  </div>
  </Layout>
)

export default socialPage
