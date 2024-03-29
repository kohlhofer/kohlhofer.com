module.exports = {
  siteMetadata: {
    title: `A. Kohlhofer`,
    description: `Personal site of Alexander Kohlhofer. All rights reserved.`,
    author: `Alexander Kohlhofer`,
    siteUrl: `https://kohlhofer.com`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
	icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
	// CommonMark mode (default: true)
	commonmark: true,
	// Footnotes mode (default: true)
	footnotes: true,
	// Pedantic mode (default: true)
	pedantic: true,
	// GitHub Flavored Markdown mode (default: true)
	gfm: true,
	// Plugins configs
	gatsbyRemarkPlugins: [],
        extensions: [`.md`, `.mdx`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
	name: `content`,
	path: `${__dirname}/src/content`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
