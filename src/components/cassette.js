import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"
import tape from "../images/tape.svg"
import reel from "../images/reel.svg"
import "../css/cassette.scss"

class Cassette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false
    }
  }



  componentDidMount() {
  }

  componentWillUnmount() {
  }



  render() {
    return(
  <div className="tape">
  <h1 className="tape-label">TG / {this.props.label}</h1>
  <img src={tape} className="tape-cover" alt="tape" />
  <img src={reel} className="tape-reelA" alt="tape reel" />
  <img src={reel} className="tape-reelB" alt="tape reel" />
  </div>
    );
  }
}


export default Cassette
