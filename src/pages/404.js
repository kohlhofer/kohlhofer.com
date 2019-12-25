import React from "react"
import { Link } from "gatsby"
import confused from "../images/confused.png"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
  <SEO title="404: Not found" />
  <h1>Page not found</h1>
  <p><Link
  to="/"
  >
  Return to home page
  </Link></p>
  <p>
  <img width="400" src={confused} alt="illustration of a man scratching his head" />
  </p>
  </Layout>
)

export default NotFoundPage
