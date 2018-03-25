import React, { Component } from 'react'
import PostGroup from 'components/Posts'
import { listIssues } from 'services/issue'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      posts: [],
      current: 1
    }
  }

  async componentDidMount () {
    const issues = await listIssues()
    this.setState({
      posts: issues.data
    })
  }
  render () {
    return <PostGroup dataset={this.state.posts} />
  }
}

export default Home