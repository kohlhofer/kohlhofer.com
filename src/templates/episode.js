import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SignupForm from "../components/signup-form"
import AudioPlayer from "../components/audioPlayer"
import SEO from "../components/seo"
import left from "../images/circled-left-arrow.svg"
import right from "../images/circled-right-arrow.svg"
import tape from "../images/tape.svg"
import reel from "../images/reel.svg"


export default ({ pageContext: { episode } }) => (
  <Layout pageTitle="Taint of Vitalism" color={episode.bg} hideFooter="true">
  <SEO title={episode.title} />
  <div className="episode"> 
  <div className="episode-intro">
    <h1>Taint of Vitalism</h1>
    <p>This is the thing...</p>
  </div>
<div className="episode-next">
  <Link to={"/podcast/"+episode.next} className="button"><img src={left} className="" alt="left arrow" /></Link></div>
<div className="episode-previous">
  <Link to={"/podcast/"+episode.previous} className="button"><img src={right} className="" alt="right arrow" /></Link></div>
  <div className="episode-tape">
  <div className="tape">
  <h2 className="tape-label">ToV / {episode.title}</h2>
  <img src={tape} className="tape-cover" alt="tape" />
  <img src={reel} className="tape-reelA" alt="tape reel" />
  <img src={reel} className="tape-reelB" alt="tape reel" />
  </div>
  </div>
  <div className="episode-details">
    <p className="episode-description">{episode.description}</p>
    <AudioPlayer file={episode.file}></AudioPlayer>
    <SignupForm/>
  </div>
  </div>
  </Layout>
)
