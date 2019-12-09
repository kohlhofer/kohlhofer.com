import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ul>
        <li><Link to="/work/">Work</Link></li>
	<li><Link to="/music/">Music</Link></li>
	<li><Link to="/cv/">Curriculum Vitae</Link></li>
	<li><Link to="/social/">Social</Link></li>
    </ul>
    <Image />
  </Layout>
)

export default IndexPage
