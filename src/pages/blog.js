import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
    <div>
    {data.allMarkdownRemark.edges.map(({ node }, index) => (
<div>
      <h2> <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link> </h2>
      <p>{node.excerpt}
      <Link to={node.frontmatter.path}>continue</Link>
 </p>
      <p>Words: {node.wordCount.words}. Time to read: {node.timeToRead}, written {node.frontmatter.date}.</p>
      </div>
    ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
    query {
allMarkdownRemark {
    edges {
      node {
        frontmatter {
          path
          date(fromNow: true)
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


