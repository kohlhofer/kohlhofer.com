import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../css/footer.scss"


const Footer = () => (
  <footer >
  <div className="footer-container">
  <div className="footer-sitemap">
    <h3>Navigation</h3>
  <ul>
  <li><Link to="/podcast/1">Tannhäuser Gates</Link></li>
  <li><Link to="/blog">Blog</Link></li>
  <li><Link to="/cv/">Curriculum Vitae</Link></li>
  <li><Link to="/social/">Social Media</Link></li>
  <li><Link to="/contact/">Contact</Link></li>
  </ul>
  </div>
  <div className="footer-about">
    <h3>About this site</h3>
  <p>Illustrations are mostly by myself (e.g. the <Link to="/tape-collection/">tape collection</Link>) or vintage/creative commons. Icons are <a href="https://zesticons.com" target="new">Zest Pro</a>.</p>
  <p>Made with <a href="https://www.gatsbyjs.org" target="new">Gatsby.js</a> and continuously deployed via <a href="https://www.netlify.com" target="new">Netlify</a>. You can <a href="https://github.com/kohlhofer/kohlhofer.com" target="new">look at the code</a>.</p>
  </div>
  <div className="footer-copyright">
    <h3>Small print</h3>
    <p>This is my personal site. Opinions expressed are solely my own and do not express the views of others.</p>
    © 2000-{new Date().getFullYear()}, Alexander Kohlhofer.
  </div>
  </div>
  </footer>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer
