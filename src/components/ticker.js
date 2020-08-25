//import PropTypes from "prop-types"
import React, { Component } from "react"



function returnRandomChild(children) {
  return children[Math.floor(Math.random() * children.length)];
}

class Ticker extends Component {
  constructor() {
    super()
    this.state = {
      anim: false,
      currentItem: 0,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.refreshTicker(), 4000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  refreshTicker() {
    var current = this.state.currentItem;
    current++;
    if (current >= this.props.children.length) {
      current = 0;
    }
    this.setState({ anim: !this.state.anim, currentItem: current });
  }

  render() {
    const children = this.props.children
    return(
      <ticker>
      <div className="ticker-label">Hi, my name is Alex and I &hellip;</div>
      <div className={'ticker-message ticker-fade' + this.state.anim}>{children[this.state.currentItem]}</div>
      </ticker>
    );
  }
}


export default Ticker
