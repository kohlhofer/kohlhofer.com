import React from "react"

import Layout from "../components/layout"
import brain from "../images/brain.png"
import "../css/cv-page.scss"

const cvPage = () => (
  <Layout pageTitle="Curriculum Vitae" color="grey">
  <div className="cvPage">
  <div className="cvPage-illu">
    <img src={brain} width="350px" alt="old fashioned brain illlustration" />
    <a className="button" href="https://www.linkedin.com/in/kohlhofer">View on LinkedIn</a>
  </div>
  <div className="cvPage-cv">
  <ol>
  <li>Since 2019 <b>I lead the design team at CloudBees</b></li>
  <li><b>I led the product and design teams at UserVoice,</b> the leader in customer feedback management trusted by MSFT, Adobe, Google, Box, Cisco, etc. I oversaw the evolution of the product by enriching customer data and adding subsequent data analysis and segmentation capabilities that are key for aggregating and translating huge amounts of qualitative data into actionable realtime product insights. Working with the other leaders we more than doubled ARR and more than tripled ASP during my tenure.</li>
  <li>At Electronic Arts I wore various hats while we grew the small studio EA2D from 6 to ~40 people. Eventually <b>I oversaw the integration into acclaimed BioWare as the interim Studio Manager</b> with 35 direct and indirect reports. Among other things I led the technology team that enabled EA to become a launch partner for Google's google+ gaming platform (This was exciting work even if ultimately doomed).</li>
  <li><b>Presented at Towards a Citizens Media Conference in Pakistan.</b></li>
  <li><b>I created the award winning online multiplayer strategy game Weewar.</b> Electronic Arts acquired the game and its online community of players from me after less than 2 years. After this exit I relocated to San Francisco, CA to join Electronic Arts at their headquarters.</li>
  <li>Helped facilitate a <b>TN2020 summit in Ireland.</b></li>
  <li><b>Co-founded Spreedly.</b> The platform enables payments flexibility and redundancy by allowing customers to route transactions through virtually any combination of payment services without ever touching end-consumer card data. In 2019 Spreedly closed its latest round at USD 75 millions.</li>
  <li>During my time with Soda Creative I conceived and successfully pitched and delivered <b>the technology based anti-censorship campaign Irrepressible for Amnesty International</b> in celebration of their 40th anniversary.</li>
  <li>I moved to London to work for <b>Soda Creative, the BAFTA award winning company behind soda constructor</b>. Eventually I took on the role of Creative Director working on countless projects, installations and educational initiatives for clients like the Tate Britain, the British Council, Imperial War Museums, Nesta, etc. I won a development award from the BBC at MIP in Cannes.</li>
  <li>
  <b>Founded Schöne neue Kinder Design Büro</b>. We managed to quickly attract a high profile client base. My co-founders are still active. At the time of writing (2020) the first company I helped start has over 100 employees and offices in multiple countries.  
  </li>
  </ol>
  </div>
  </div>
  </Layout>
)

export default cvPage
