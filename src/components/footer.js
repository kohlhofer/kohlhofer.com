import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"


const Footer = () => (
  <footer >
  <div className="footer-copyright">
    <p>This is my personal site. Opinions expressed are solely my own and do not express the views or opinions of my employer.</p>
    © 2000-{new Date().getFullYear()}, Alexander Kohlhofer.
  </div>
  <div className="footer-sitemap">
  <ul>
  <li><Link to="/work/">Product / Design</Link></li>
  <li><Link to="/music/1">Music</Link></li>
  <li><Link to="/blog">Blog</Link></li>
  <li><Link to="/cv/">Curriculum Vitae</Link></li>
  <li><Link to="/social/">Social Media</Link></li>
  <li><Link to="/contact/">Contact</Link></li>
  </ul>
  </div>
  <div className="footer-about">
  <p>Made with <a href="https://www.gatsbyjs.org" target="new">Gatsby.js</a> and is continuously deployed via <a href="https://www.netlify.com" target="new">Netlify</a>. You can <a href="https://github.com/kohlhofer/kohlhofer.com" target="new">look at its code</a> or learn more about it in <Link to="/blog/2019-static-site">this blog post</Link>. I enjoy all things software development but leave it to the professionals during the day.</p>
  <p>Icons are <a href="https://zesticons.com" target="new">Zest Pro</a>. Illustrations are mostly by myself or vintage/creative commons.</p>
  </div>
  </footer>
)

Footer.propTypes = {
}

Footer.defaultProps = {
}

export default Footer
