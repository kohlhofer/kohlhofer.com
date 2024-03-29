/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//import { Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import Helmet from "react-helmet"
import SEO from "./seo"
import "../css/index.scss"


const Layout = ({ children,pageTitle,color, hideFooter }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  return (
    <div>
  <div className="grain" />
<Helmet
    bodyAttributes={{
        class: color
    }}
/>
    <SEO title={pageTitle} />
    <Header siteTitle={data.site.siteMetadata.title} pageTitle={pageTitle} />
    <main className="content">{children}</main>
    {!hideFooter? <Footer /> : ""}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
  footer: PropTypes.string,
  color: PropTypes.string
}


Layout.defaultProps = {
}

export default Layout
