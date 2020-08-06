import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import brain from "../images/brain.png"

const cvPage = () => (
  <Layout pageTitle="Curriculum Vitae" color="grey">
  <div className="cvPage">
  <div className="cvPage-illu">
    <img src={brain} width="350px" alt="old fashioned brain illlustration" />
    <a className="button" href="https://www.linkedin.com/in/kohlhofer">View on LinkedIn</a>
  </div>
  <div className="cvPage-cv">
  <ul>
  <li>Since 2019 I lead the design team at CloudBees.</li>
  <li><b>I led the product and design teams at UserVoice,</b> the leader in product feedback managment used by MSFT, Adobe, Google, Box, Cisco, etc. I oversaw the integration of enriched customer data and subsequent data analysis and segmentation capabilities to translate qualitative data into actionable realtime product insights at scale. An integrations strategy captured data from any customer facing teams (support, sales, success, etc) for full feedback coverage. Working with the other leaders we more than doubled ARR and more than trippled ASP during my tennure.</li>
  <li>Oversaw EA2D's integration with BioWare as interim Studio Manager with 35 direct and indirect reports at Electronic Arts.</li>
  <li><b>I created the award winning online multiplayer strategy game Weewar.</b> Electronic Arts aquired the game and its online community of players from me after less than 2 years. After this exit I relocated to San Francisco, CA to join Electronic Arts at their headqurters.</li>
  <li><b>Co-founded Spreedly.</b> The platform enables payments flexibility and redundancy by allowing customers to route transactions through virtually any combination of payment services without ever touching end-consumer card data. In 2019 spreedly closed its latest round at USD 75 millions.</li>
  <li>Successfully conceived, pitched and delivered a technology based anti-censorship campaign to Amnesty International.</li>
  <li>Moved from the US to London, UK to work at Soda Creative. The Bafta Award winning team operated at the intersection of Art, Education and Play. I spent 4 years growing and learning and eventually became Soda's Creative Director.</li>
  <li>
  <b>Founded Schöne neue Kinder Design Büro</b>. We managed to quickly attract a high profile client base. My co-founders are still active. At the time of writing this first company I helped start has over 100 employees and offices in multiple countries.  
  </li>
  </ul>
  </div>
  </div>
  </Layout>
)

export default cvPage
