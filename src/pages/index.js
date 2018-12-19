import React from 'react'
import { navigate } from 'gatsby'

class IndexPage extends React.Component {
  componentDidMount() {
    navigate('/conf/the-complete-developer')
  }

  render() {
    return <></>
  }
}

export default IndexPage
