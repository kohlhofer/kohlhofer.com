/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ actions: { createPage }, graphql }) => {
  const musicVideos = [
    { title: "Jamuary2018 Day 8", youTubeId: "7MWWRs_Nyj8"},
    { title: "Patch with newly added XAOC Tallin and Zvex Instant Lo-Fi Junky", youTubeId: "RQ5jpYfPGdk"},
    { title: "Woke", youTubeId: "1PypZeYPYcI"},
    { title: "Iconic Genes", youTubeId: "_dkO3dsNYdw"},
    { title: "Delta Eurorack Patch", youTubeId: "3yvZve8e9do"},
    { title: "Steady State Lost", youTubeId: "X82w64tnqlk"},
    { title: "1974", youTubeId: "ev5zKEGVsmA"},
    { title: "Krell Train (a generative modular synth patch)", youTubeId: "AHxWRgoGI-w"},
    { title: "Magnetic", youTubeId: "JKPPnTaV6Bo"},
    { title: "Last day (12/31/2017)", youTubeId: "dOJfqd_Fqg0"}
  ]

  // Music videos  
  count = 0;
  musicVideos.forEach(musicVideo => {
    count++;
    musicVideo.path = count;
    if (musicVideos.length > count) {
    	musicVideo.next = count + 1;
    } else {
    	musicVideo.next = 1;
    }
    createPage({
      path: `/music/${musicVideo.path}/`,
      component: require.resolve("./src/templates/video.js"),
      context: { musicVideo },
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
