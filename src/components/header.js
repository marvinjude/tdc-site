import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="header">
    TDC
    <div className="links">
      <a className="btn" role="button" href="http://bit.ly/tdc-meetup">
        {' '}
        REGISTER
      </a>
    </div>
  </div>
)

export default Header
