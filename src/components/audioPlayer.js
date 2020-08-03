import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"


class AudioPlayer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false
    }
    this.playAudio = this.playAudio.bind(this);
    this.stopAudio = this.stopAudio.bind(this);
    //this.audioFile  = new Audio(this.props.file);
    this.audioEl = <audio className="audio-element" controls> <source src={this.props.file}></source> </audio>
  }



  componentDidMount() {
  }

  componentWillUnmount() {
  }

  playAudio() {
    ////this.audioFile.play();
  }

  stopAudio() {
    //this.audioFile.pause();
  }


  render() {
    return(
  <div className="audioPlayer">
<audio className="audio-element" controls> <source src={this.props.file}></source> </audio>
  </div>
    );
  }
}


export default AudioPlayer
