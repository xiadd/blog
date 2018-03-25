import React, { Component } from 'react'
import './App.scss'
import CardGroup from 'components/Posts'
import Header from 'components/Header'
import { listIssues } from 'services/issue'

class App extends Component {

  constructor () {
    super()
    this.state = {
      posts: []
    }
  }

  async componentDidMount () {
    const issues = await listIssues()
    this.setState({
      posts: issues.data
    })
  }

  render () {
    return (
      <div>
        <Header />
        <div className="ui container" style={{marginTop: '2rem'}}>
          <CardGroup dataset={this.state.posts} />
        </div>
      </div>
    )
  }
}

export default App
