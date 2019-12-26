import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout pageTitle="Blog">
    <p>A blog written by me... </p>
    <h2>Blog Posts</h2>
    <ul>
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
<li>
      <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>, Time to read: {node.timeToRead}, {node.frontmatter.date}
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


