import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SignupForm from "../components/signup-form"
import AudioPlayer from "../components/audioPlayer"
import Cassette from "../components/cassette"
import SEO from "../components/seo"
import left from "../images/left-chevron.svg"
import right from "../images/right-chevron.svg"
import "../css/music-page.scss"


export default ({ pageContext: { episode } }) => (
  <Layout pageTitle={"Tannhäuser Gates #"+ episode.path} color={"tape"+episode.background} hideFooter="true">
  <SEO title={episode.title} />
  <div className="episode"> 
  <div className="episode-intro">
    <p>Tannhäuser Gates is a series of mixes featuring electronic and experimental music. Listen right here or get it on youTube, iTunes, or your favorite podcast outlet.</p>
  </div>
  <div className="episode-tape">
    <Cassette label={"TG / " + episode.title} cover={episode.cover} />
  </div>
  <div className="episode-details">
    <p className="episode-description">{episode.description}</p>
    <AudioPlayer file={episode.file}></AudioPlayer>
  </div>
<div className="episode-next">
  <Link to={"/podcast/"+episode.next}><img src={left} className="" alt="left arrow" /></Link></div>
<div className="episode-previous">
  <Link to={"/podcast/"+episode.previous}><img src={right} className="" alt="right arrow" /></Link></div>
  <div className="subscribe"> 
  <SignupForm/>
  </div>
  </div>
  </Layout>
)
