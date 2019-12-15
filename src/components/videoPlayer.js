
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const VideoPlayer = ({ videoId }) => (
  <div className="videoPlayer"><iframe src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&showinfo=0&fs=1`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>
)

VideoPlayer.propTypes = {
  videoId: PropTypes.string,
}

VideoPlayer.defaultProps = {
  videoId: "7MWWRs_Nyj8",
}

export default VideoPlayer
