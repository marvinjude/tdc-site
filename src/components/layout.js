import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { IoLogoTwitter } from 'react-icons/io'
import { GoMarkGithub } from 'react-icons/go'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div style={{ width: '100%' }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {children}
        </div>
        <footer className="footer">
          <a href="https://www.twitter.com/tasuedDevComm">
            <IoLogoTwitter size="35px" color="black" />
          </a>
          <a href="https://www.github.com/tasuedDevCom">
            <GoMarkGithub size="35px" color="black" />
          </a>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
