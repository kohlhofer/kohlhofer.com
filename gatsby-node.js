/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async ({ actions: { createPage } }) => {
  const musicVideos = [
    { title: "Jamuary2018 Day 8", youTubeId: "7MWWRs_Nyj8"},
    { title: "Patch with newly added XAOC Tallin and Zvex Instant Lo-Fi Junky", youTubeId: "RQ5jpYfPGdk"},
    { title: "Woke", youTubeId: "1PypZeYPYcI"}
  ]

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
}
