import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
  >
      <div>
        <Link
          to="/"
        >
          {siteTitle}
        </Link>
        <Link
          to="/contact"
        >
        Contact
        </Link>
        <Link
          to="/social"
        >
Social
        </Link>
      </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
