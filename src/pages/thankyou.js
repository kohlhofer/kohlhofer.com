import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const contactPage = () => (
  <Layout pageTitle="Message sent" color="blue">
  <div className="contact">
  <div className="contact-thankyou">
  <p>Thank you for your email.</p>
  <p>
  <Link
  to="/"
  >
  Return to home page
  </Link>
  </p>
  </div>
  </div>  
  </Layout>
)

export default contactPage
