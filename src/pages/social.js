

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import trump from "../images/trump.svg"
import positive from "../images/neutral-face.svg"
import neutral from "../images/sleeping-face.svg"
import negative from "../images/frowning-face.svg"

const socialPage = () => (
  <Layout pageTitle="Social Media" color="purple">
   <div className="social">
     <div className="social-active">
    <img className="social-sentiment" src={positive} alt="check mark" />
<h2>Actively engaged</h2>
	<ul>
          	<li><a href="https://www.chess.com/member/kohlhofer">Chess.com</a></li>
        </ul>
     </div>
     <div className="social-passive">
    <img className="social-sentiment" src={neutral} alt="neutral face" />
<h2>Sporadic use</h2>
	<ul>
<li><a href="https://www.instagram.com/kohlhofer/">Instagram</a></li>
<li><a href="https://www.youtube.com/channel/UC8MQAg5u5t1KpxdutBW40Yg">Youtube</a></li>
<li><a href="https://www.linkedin.com/in/kohlhofer/">LinkedIn</a></li>
<li><a href="https://dribbble.com/kohlhofer">Dribbble</a></li>
        </ul>
     </div>
     <div className="social-dead">
    <img className="social-sentiment" src={negative} alt="frowning face" />
<h2>Stale or account deleted</h2>
	<ul>
<li className="strike">Facebook</li>
<li><a href="https://twitter.com/kohlhofer">Twitter</a></li>
<li className="strike">Flickr</li>
<li className="strike">Tumblr</li>
<li className="strike">Elo</li>
<li className="strike">Google+</li>
<li className="strike">Pinterrest</li>
<li className="strike">Good Reads</li>
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
