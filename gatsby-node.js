/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const episodes = [
    { title: "Episode #3", description: "Break", file: "/audio/break.mp3", cover: 1, background: 1},
    { title: "Episode #2", description: "Awaiting Drezno", file: "/audio/awaiting-drezno.mp3", cover: 2, background: 2}, 
    { title: "Episode #1", description: "Magentic Rainbow test", file: "/audio/magnetic-rainbow.mp3", cover: 3, background: 3}
  ]

  // Music podcast  
  count = episodes.length+1;
  episodes.forEach(episode => {
    count--;
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
      path: `/tg/${episode.path}/`,
      component: require.resolve("./src/templates/episode.js"),
      context: { episode },
    })
  })

  // Blog posts
  const result = await graphql(`
    {
      allMdx {
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
  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/post.js`),
    })
  })
}
