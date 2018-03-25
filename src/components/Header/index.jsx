import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'

class Header extends Component {
  render () {
    return (
      <Menu attached inverted>
        <Container>
          <Menu.Item as='a' header>
            xiadd的博客
          </Menu.Item>
          <Menu.Item as='a'>首页</Menu.Item>
          <Menu.Item as='a'>归档</Menu.Item>
          <Menu.Item as='a'>关于</Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Header