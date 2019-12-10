/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

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
    <div>
      <SEO title={pageTitle} />
      <Header siteTitle={data.site.siteMetadata.title} pageTitle={pageTitle} />
      <div
      >
        <main>{children}</main>
        <footer>
          © 2000 - {new Date().getFullYear()}, Alexander Kohlhofer
        </footer>
      </div>
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
