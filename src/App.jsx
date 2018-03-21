import React, { Component } from 'react'
import './App.scss'
import CardGroup from './components/Posts'
import { Container, Menu } from 'semantic-ui-react'

class App extends Component {
  render () {
    return (
      <div>
        <Menu attached inverted>
          <Container>
            <Menu.Item as='a' header>
              xiadd的博客
            </Menu.Item>
            <Menu.Item as='a'>首页</Menu.Item>
            <Menu.Item as='a'>关于</Menu.Item>
            <Menu.Item as='a'>归档</Menu.Item>
          </Container>
        </Menu>
        <div className="ui container" style={{marginTop: '2rem'}}>
          <CardGroup />
        </div>
      </div>
    )
  }
}

export default App
