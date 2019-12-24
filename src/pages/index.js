import React from "react"
import { Link } from "gatsby"
import Ticker from "../components/ticker"
import Layout from "../components/layout"

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
        <Ticker>
<span>lead the Design Team at <a href="https://cloudbees.com">CloudBees</a></span>
<span>was Head of Product at <a href="https://uservoice.com">UserVoice</a></span>
<span>created and later sold the online strategy game Weewar to Electronic Arts</span>
<span>co-founded payment orchestrator <a href="https://spreedly.com">Spreedly</a></span>
<span>created the anti censorship campaign <a href="https://www.amnesty.org.uk/press-releases/new-amnesty-45th-anniversary-campaign-tackles-internet-repression">Irrepressible</a> for Amnesty International</span>
<span>was Creative Director of Soda Creative in London, UK</span>
<span>started <a href="https://www.snk.de/en/">Schoene Neue Kinder</a> in Munich, Germany</span>
  </Ticker>
</div>
  </Layout>
)

export default IndexPage
