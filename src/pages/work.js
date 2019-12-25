import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Ticker from "../components/ticker"

const workPage = () => (
  <Layout pageTitle="Work" color="grass-green">
  <Ticker>
  <span className="fade">lead the design team at <a href="https://cloudbees.com">CloudBees</a></span>
  <span className="fade">was head of product at <a href="https://uservoice.com">UserVoice</a></span>
  <span className="fade">created and later sold Weewar to Electronic Arts</span>
  <span className="fade">co-founded <a href="https://spreedly.com">Spreedly</a></span>
  <span className="fade">was creative director of soda in London, UK</span>
  <span className="fade">started <a href="https://www.snk.de/en/">Schoene Neue Kinder</a> in Munich, Germany</span>
  </Ticker>
  </Layout>
)

export default workPage
