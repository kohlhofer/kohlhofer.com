import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import contactIcon from "../images/contact-icon.svg"
import socialIcon from "../images/social-icon.svg"

const Header = ({ siteTitle, pageTitle }) => (
  <header
  >
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
{pageTitle != '' && ` →`} {pageTitle}
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
