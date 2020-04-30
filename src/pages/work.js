import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Ticker from "../components/ticker"

const workPage = () => (
  <Layout pageTitle="Work" color="grass-green">
   <div className="work">
<div className="work-intro">
I lead teams that bring products to life. As an empathic design practioner I care deeply about users, the people who serve them, and the needs of the business. 
</div>

<ul className="work-skills">
<li>key skills go here</li>
<li>key skills go here</li>
<li>key skills go here</li>
<li>key skills go here</li>
<li>key skills go here</li>
</ul>

<h2 className="work-section-headers work-helper-span-3">Key Roles and positions</h2>
<div className="work-section-intro">
Over the years I have held many formative roles. I draw from these expereinces every day. 
</div>

<div className="work-section-entry">
  This is an entry for the work grid.
</div>
<div className="work-section-entry">
  This is an entry for the work grid.
</div>
<div className="work-section-entry">
  This is an entry for the work grid.
</div>
<div className="work-section-entry">
  This is an entry for the work grid.
</div>

<h2 className="work-section-headers work-helper-span-4">Project highlights</h2>
<div className="work-section-intro">
I have created many successfull products and projects. These stand out to me.
</div>
<div className="work-section-entry">
  Google had just entered the chinese market and was censuring their search engine there. By comparing search results in the US and Chine one could theoretically infer exactely what the chinese government wanted to surpress. I pitched this idea to Amnesty International and we built irrepressible together as a campaign for their 40 year anniversary.
</div>
<div className="work-section-entry">
  Intrigued by modern web technolgoes and the mechanics of strategy gaming I created an online mutli player game you could play in your browser. At its hieight the game allegedly reduces productivity in various silicon valley startups and beyond. Eventually I sold it to Electronic Arts. 
</div>
<div className="work-section-entry">
  This is an entry for the work grid.
</div>
<div className="work-section-entry">
  This is an entry for the work grid.
</div>
<div className="work-section-entry">
  This is an entry for the work grid.
</div>
<div className="work-section-entry">
  This is an entry for the work grid.
</div>
</div>
  </Layout>
)

export default workPage
