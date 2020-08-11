import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Cassette from "../components/cassette"
import "../css/tape-collection.scss"

const tapePage = () => (
  <Layout pageTitle="Tape Collection" color="tapes">
  <div className="tapePage">
    <div className="tapePage-intro">
<p>I support independent electronic musicians by buying and listening to their releases on cassette tapes. These illustrations of vintage tapes are for my own ongoing series <Link to="/podcast/1">Tannhäuser Gates</Link>.</p>
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
