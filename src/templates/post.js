import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SignupForm from "../components/signup-form"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Template({ data }) {
  const { mdx } = data // data.markdownRemark holds your post data
  const { frontmatter, body, timeToRead } = mdx
  return (
  <Layout pageTitle="Blog post" color={frontmatter.background || "paper"}>
  <SEO title={frontmatter.title} />
    <div className="blog-post">
      <h1 className="blog-post-title">{frontmatter.title}</h1>
    <p className="blog-post-meta">
      <div>{frontmatter.date}</div>
      <div>{timeToRead} minutes read</div>
</p>
      <div className="blog-post-content">
        <MDXRenderer>{body}</MDXRenderer>
    </div>
    <div className="blog-post-author">
      <div>From Alexander Kohlhofer's <Link to="/blog">blog</Link> about technology, design, music, ...</div>
<div><Link className="button" to="/blog">More articles</Link></div>
</div>
  <div className="blog-subscribe"> 
  <SignupForm/>
  </div>
    </div>
</Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      frontmatter {
	date(formatString: "MMMM DD, YYYY")
	path
	title
        background
	}
	timeToRead
	wordCount {
	  words
	}
	id
        body
    }
  }
`
