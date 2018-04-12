import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Header extends Component {
  render () {
    return (
      <Menu attached inverted>
        <Container>
          <Menu.Item header>
            <Link to="/">xiadd的博客</Link>
          </Menu.Item>
          <Menu.Item><Link to="/">首页</Link></Menu.Item>
          <Menu.Item><Link to="/archives">归档</Link></Menu.Item>
          <Menu.Item><Link to="/tags/javascript">标签</Link></Menu.Item>
          <Menu.Item><Link to="/about">关于</Link></Menu.Item>
        </Container>
      </Menu>
    )
  }
}

export default Header