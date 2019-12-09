import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import VideoPlayer from "../components/videoPlayer"

const musicPage = () => (
  <Layout>
    <SEO title="Music" />
	<p>music page?</p>
    <VideoPlayer videoId="ev5zKEGVsmA" />
  </Layout>

)

export default musicPage
