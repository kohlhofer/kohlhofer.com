import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import refresh from "../images/refresh.svg"
import tape from "../images/tapeanim.gif"

export default ({ pageContext: { episode } }) => (
  <Layout pageTitle="Podcast" color="grey">
  <SEO title={episode.title} />
  <div className="episode"> 
  <h1 className="episode-podcast">Cool Podcast</h1>
<div className="episode-next"><Link to={"/podcast/"+episode.next} className="button">
  <img src={refresh} className="" alt="refresh icon" />
  next track</Link></div>
<div className="episode-previous"><Link to={"/podcast/"+episode.previous} className="button">
  <img src={refresh} className="" alt="refresh icon" />
  previous track</Link></div>
  <div className="episode-tape">
  <img src={tape} className="" alt="tape placeholder" width="400px" />
  <br />tape goes here</div>
  <div className="episode-details">
    <h2 className="episode-title">{episode.title}</h2>
    <p className="episode-description">{episode.description}</p>
  </div>
  </div>
  </Layout>
)
