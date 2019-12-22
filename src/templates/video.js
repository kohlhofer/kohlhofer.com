import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoPlayer from "../components/videoPlayer"
import modularImage from "../images/modular.svg"
import refresh from "../images/refresh.svg"

export default ({ pageContext: { musicVideo } }) => (
  <Layout pageTitle="Music" color="blue">
    <SEO title={musicVideo.title} />
<div className="music">

<div className="music-video">
<p>
    <VideoPlayer videoId={musicVideo.youTubeId} />
</p>
<p><Link to={"/music/"+musicVideo.next} className="button">
<img src={refresh} className="" alt="refresh icon" />
Show another track</Link>
</p>
</div>
<div className="music-about">
 <p>I enjoy making electronic music without a computer. You can find the results on <a href="https://www.youtube.com/channel/UC8MQAg5u5t1KpxdutBW40Yg">YouTube</a> and <a href="https://www.instagram.com/kohlhofer/">Instagram</a>. </p>
<p>Among other things I use a modular synthesizer.</p>
</div>
<div className="music-illustration">
<img src={modularImage} className="musicIllustration" alt="illustration of a modular synthesizer" />
</div>
</div>
  </Layout>
)
