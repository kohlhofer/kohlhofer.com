import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Cassette from "../components/cassette"
import "../css/tape-collection.scss"

const tapePage = () => (
  <Layout pageTitle="Tape Designs" color="tapes">
  <div className="tapePage">
    <div className="tapePage-intro">
<p>I support small electronic artists by buying and listening to their releases on cassette tapes. And now I have a blast designing these tapes for my own <Link to="/podcast/1">Tannhäuser Gates</Link>.</p>
    </div>
    <div className="single-tape">
    <Cassette label="Awesome Mixtape #1" cover="1" />
    </div>
    <div className="single-tape">
    <Cassette label="Flying Airwolf" cover="2" />
    </div>
    <div className="single-tape">
    <Cassette label="MacGyver Paperclip" cover="3" />
    </div>
    <div className="single-tape">
    <Cassette label="KITT" cover="4" />
    </div>
    <div className="single-tape">
    <Cassette label="bionic limbs and implants" cover="5" />
    </div>
  </div>
  </Layout>
)

export default tapePage
