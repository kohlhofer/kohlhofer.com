import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageTitle="Welcome" color="index-back">
   <div className="index">
    <ul className="mainPoints">
        <li><Link to="/work/">Product / Design</Link></li>
	<li><Link to="/music/1">Music</Link></li>
	<li><Link to="/cv/">Curriculum Vitae</Link></li>
	<li><Link to="/social/">Social Media</Link></li>
	<li><Link to="/contact/">Contact</Link></li>
    </ul>
<ul className="lifeStats">
<li>leads the design team at <a href="https://cloudbees.com">CloudBees</a></li>
<li>was head of product at <a href="https://uservoice.com">UserVoice</a></li>
<li>created and later sold Weewar to Electronic Arts</li>
<li>co-founded <a href="https://spreedly.com">Spreedly</a></li>
<li>was creative director of soda in London, UK</li>
<li>started <a href="https://www.snk.de/en/">Schoene Neue Kinder</a> in Munich, Germany</li>
</ul>
</div>
  </Layout>
)

export default IndexPage
