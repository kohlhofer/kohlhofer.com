import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SignupForm from "../components/signup-form"
import AudioPlayer from "../components/audioPlayer"
import SEO from "../components/seo"
import left from "../images/left-chevron.svg"
import right from "../images/right-chevron.svg"
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
  </div>
<div className="episode-next">
  <Link to={"/podcast/"+episode.next}><img src={left} className="" alt="left arrow" /></Link></div>
<div className="episode-previous">
  <Link to={"/podcast/"+episode.previous}><img src={right} className="" alt="right arrow" /></Link></div>
    <SignupForm/>
  </div>
  </Layout>
)
