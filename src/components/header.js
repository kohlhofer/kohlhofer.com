import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import contactIcon from "../images/message.svg"
import socialIcon from "../images/cloud.svg"


function getPath(pageTitle) {
  if (pageTitle != 'Welcome') {
    return <span><span className="header-path">→</span> {pageTitle}</span>;
  }
}

const Header = ({ siteTitle, pageTitle }) => (
  <header
  >
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
{getPath(pageTitle)}
<div className="header-right">
        <Link to="/contact" >
<img src={contactIcon} alt="speach bubbles" />
</Link>
        <Link to="/social" >
<img src={socialIcon} alt="sad face" />
</Link>
</div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  pageTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `site not set`,
  pageTitle: ``,
}

export default Header
