/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import SEO from "./seo"
import "./normalize.scss"
import "./layout.scss"

const Layout = ({ children,pageTitle }) => {
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
    <div className="wrapper">
      <SEO title={pageTitle} />
      <Header siteTitle={data.site.siteMetadata.title} pageTitle={pageTitle} />
        <main className="content">{children}</main>
        <footer>
          © 2000 - {new Date().getFullYear()}, Alexander Kohlhofer. <Link to="/contact">Get in touch</Link>
        </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageTitle: PropTypes.string,
}


Layout.defaultProps = {
}

export default Layout
