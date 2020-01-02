import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoPlayer from "../components/videoPlayer"
import modularImage from "../images/modular.svg"
import refresh from "../images/refresh.svg"

export default ({ pageContext: { musicVideo } }) => (
  <Layout pageTitle="Music" color="grey">
  <SEO title={musicVideo.title} />
  
  <div className="music-wrapper">
  <div className="music">

  <div className="music-video">
  <VideoPlayer videoId={musicVideo.youTubeId} />
  </div>
  </div>
  </div>
  <div className="music-control">
  <p className="music-title">{musicVideo.title}</p>
<p><Link to={"/music/"+musicVideo.next} className="button">
  <img src={refresh} className="" alt="refresh icon" />
  Show another track</Link></p>
  </div>
  <div className="music">
  <div className="music-about">
  <p>You can find more of my music on <a href="https://www.youtube.com/channel/UC8MQAg5u5t1KpxdutBW40Yg">YouTube</a> and <a href="https://www.instagram.com/kohlhofer/">Instagram</a>. </p>
  <p><Link to="/contact/">Get in touch</Link> if you would like to use a track or make music together.</p>
  </div>
  <div className="music-about">
<p>My favourite instrument is the <a href="https://www.modulargrid.net/e/racks/view/1029090">modular synthesizer</a>, a source of constant sonic surprises and happy accidents.</p><p>I do not use a computer to make music.</p>
  </div>
  <div className="music-about">
  <p>Early on I rushed out two albums. You can still find them  under the project <a href="https://distrokid.com/hyperfollow/citizenkrag/5gU">Citizen Krag</a> on all major platforms.</p>
  </div>
  <div className="music-illustration">
  <img src={modularImage} className="musicIllustration" alt="illustration of a modular synthesizer" width="200px"/>
  </div>
  </div>
  </Layout>
)
