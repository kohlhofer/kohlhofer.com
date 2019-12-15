import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideoPlayer from "../components/videoPlayer"
import modularImage from "../images/modular.svg"

export default ({ pageContext: { musicVideo } }) => (
  <Layout pageTitle="Music">
    <SEO title={musicVideo.title} />
<div className="video">
    <VideoPlayer videoId={musicVideo.youTubeId} />
</div>
<div className="videoByLine">
<Link to={"/music/"+musicVideo.next} >Show another track</Link>
<img src={modularImage} className="musicIllustration" alt="illustration of a modular synthesizer" />
</div>
  </Layout>
)
