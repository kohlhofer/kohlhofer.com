//import { Link } from "gatsby"
//import PropTypes from "prop-types"
import React, { Component } from "react"
import reel from "../images/reel.svg"
import "../css/cassette.scss"

const covers = require.context('../images/tapes/', true);
// tape covers are stored in a foder and all follow the same conventions. A functions below pick a randomf one each time the component is used. The "grears" are rendered seperately and animated via css. THey are stored in the parent folder.

class Cassette extends Component {
  constructor(props) {
    super(props)
    this.state = {
      play: false
    }
  }

  getCover(id) {
    if (id) {
      return covers(`./${id}.svg`);
    } else {
    let random = Math.floor(Math.random()*4+1);
      return covers(`./${random}.svg`);
    }
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }



  render() {
    return(
  <div className="tape">
  <h1 className="tape-label">{this.props.label}</h1>
  <img src={this.getCover(this.props.cover)} className="tape-cover" alt="tape" />
  <img src={reel} className="tape-reelA" alt="tape reel" />
  <img src={reel} className="tape-reelB" alt="tape reel" />
  </div>
    );
  }
}


export default Cassette
