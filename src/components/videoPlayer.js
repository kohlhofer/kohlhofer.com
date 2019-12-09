
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const VideoPlayer = ({ videoId }) => (
  <videoPlayer>
<iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </videoPlayer>
)

VideoPlayer.propTypes = {
  videoId: PropTypes.string,
}

VideoPlayer.defaultProps = {
  videoId: "7MWWRs_Nyj8",
}

export default VideoPlayer
