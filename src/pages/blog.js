import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout pageTitle="Blog" color="paper-alt">
    <ul className="blog-entries">
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
      <li className="blog-entry">
      <div className="blog-entry-meta">
	{node.frontmatter.date}
      </div>
      <div className="blog-entry-title">
      <Link  className="blog-entry-link" to={node.frontmatter.path}>
	{node.frontmatter.title}
      </Link>
      </div>
      </li>
    ))}
    </ul>
    </Layout>
  )
}

export const query = graphql`
    query {
allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
    edges {
      node {
        frontmatter {
          path
        date(formatString: "MMMM DD, YYYY")
          title
        }
        timeToRead
        wordCount {
          words
        }
        excerpt(format: PLAIN, pruneLength: 20)
        id
      }
    }
  }
    }
`


