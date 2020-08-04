import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SignupForm from "../components/signup-form"
import AudioPlayer from "../components/audioPlayer"
import SEO from "../components/seo"
import left from "../images/circled-left-arrow.svg"
import right from "../images/circled-right-arrow.svg"
import tape from "../images/tapeanim.gif"

export default ({ pageContext: { episode } }) => (
  <Layout pageTitle="Podcast" color="purple" hideFooter="true">
  <SEO title={episode.title} />
  <div className="episode"> 
  <div className="episode-intro">
    <h1>Cool Podcast</h1>
  </div>
<div className="episode-next">
  <Link to={"/podcast/"+episode.next} className="button"><img src={left} className="" alt="left arrow" /></Link></div>
<div className="episode-previous">
  <Link to={"/podcast/"+episode.previous} className="button"><img src={right} className="" alt="right arrow" /></Link></div>
  <div className="episode-tape">
  <img src={tape} className="" alt="tape placeholder" width="400px" />
  </div>
  <div className="episode-details">
    <h2 className="episode-title">{episode.title}</h2>
    <p className="episode-description">{episode.description}</p>
    <AudioPlayer file={episode.file}></AudioPlayer>
    <SignupForm/>
  </div>
  </div>
  </Layout>
)
