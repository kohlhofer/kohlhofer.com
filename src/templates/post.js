import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, timeToRead } = markdownRemark
  return (
  <Layout pageTitle="Blog post" color="blue-green">
  <SEO title={frontmatter.title} />
    <div className="blog-post">
      <h1 className="blog-post-title">{frontmatter.title}</h1>
    <div className="blog-post-meta">
      <div>{frontmatter.date}</div>
      <div>{timeToRead} minutes read</div>
</div>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    <div className="blog-post-author">
      <div>From Alexander Kohlhofer's <Link to="/blog">random journal</Link> about technology, design, music, and other things.</div>
<div><Link className="button" to="/blog">More articles</Link></div>
</div>
    </div>
</Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
	date(formatString: "MMMM DD, YYYY")
	path
	title
	}
	timeToRead
	wordCount {
	  words
	}
	id
    }
  }
`
