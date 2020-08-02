import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import brain from "../images/brain.png"

const cvPage = () => (
  <Layout pageTitle="Curriculum Vitae" color="purple">
  <div className="cvPage">
  <img src={brain} width="350px" alt="old fashioned brain illlustration" />
  <a className="button" href="https://www.linkedin.com/in/kohlhofer">View on LinkedIn</a>
  </div>
  </Layout>
)

export default cvPage
