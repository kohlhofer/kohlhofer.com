

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import trump from "../images/trump.svg"

const socialPage = () => (
  <Layout pageTitle="Social Media">
   <div className="social">
     <div className="social-active">
<h2>Actively engaged</h2>
	<ul>
          	<li>Chess.com</li>
        </ul>
     </div>
     <div className="social-passive">
<h2>Passive presence (write only)</h2>
	<ul>
<li>Instagram</li>
<li>Youtube</li>
<li>LinkedIn</li>
        </ul>
     </div>
     <div className="social-dead">
<h2>Stale or account deleted</h2>
	<ul>
<li>Facebook</li>
<li>Twitter</li>
<li>Flickr</li>
<li>Tumblr</li>
<li>Elo</li>
<li>Google+</li>
<li>Pinterrest</li>
<li>Good Reads</li>
        </ul>
     </div>
     <div className="social-illustration">
    <img src={trump} alt="bw photo of Donald Trum" />
     </div>
     <div className="social-about">
       <p>We spend most of our waking hours in an individualistic social media hallucination. Through that lens reality is no longer a shared experience. It is warped to re-inforce and exploit our biases. A vicious cycle that erodes our shared humanity.</p>
<p>Social medial is anything but social. </p>
<p>We may not escape Neil Stephenson’s Ameristan. But you can limit your own exposure to the poisonous hallucination. Opt out.</p>
     </div>
   </div>
  </Layout>
)

export default socialPage
