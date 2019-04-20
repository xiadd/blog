import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <Menu attached style={{ marginTop: 30 }}>
        <Container style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#333'
        }}>
          <a style={{ color: '#333' }} href="http://www.beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">苏ICP备16013364号 </a>
        </Container>
      </Menu>
    )
  }
}

export default Header