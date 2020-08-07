/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const episodes = [
    { title: "Episode #3", description: "Break", file: "/audio/break.mp3", bg: "purple"},
    { title: "Episode #2", description: "Awaiting Drezno", file: "/audio/awaiting-drezno.mp3", bg: "blue"}, { title: "Episode #1", description: "Magentic Rainbow test", file: "/audio/magnetic-rainbow.mp3", bg: "grass-green"}
  ]

  // Music podcast  
  count = 0;
  episodes.forEach(episode => {
    count++;
    episode.path = count;
    if (episodes.length > count) {
    	episode.previous = count + 1;
    } else {
    	episode.previous = 1;
    }
    if (count > 1) {
        episode.next = count - 1;
    } else {
        episode.next = episodes.length;
    }
    createPage({
      path: `/podcast/${episode.path}/`,
      component: require.resolve("./src/templates/episode.js"),
      context: { episode },
    })
  })

  // Blog posts
  const result = await graphql(`
    {
      allMarkdownRemark {
	edges {
	  node {
	    frontmatter {
	      path
	    }
	  }
	}
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/post.js`),
    })
  })
}
