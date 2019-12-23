import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import brain from "../images/brain.svg"

const cvPage = () => (
  <Layout pageTitle="CV" color="purple">
    <div className="cvPage">
    <img src={brain} alt="old fashioned brain illlustration" />
    <a className="button" href="https://www.linkedin.com/in/kohlhofer">LinkedIn Profile</a>
</div>
  </Layout>
)

export default cvPage
