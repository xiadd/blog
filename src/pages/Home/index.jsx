import React, { Component } from 'react'
import PostGroup from 'components/Posts'
import { listIssues } from 'services/issue'
import { Loader } from 'semantic-ui-react'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      posts: [],
      current: 1,
      loading: true
    }
  }

  async componentDidMount () {
    const issues = await listIssues()
    this.setState({
      posts: issues.data,
      loading: false
    })
  }
  render () {
    return (
      <div>
        <Loader active={this.state.loading} inline='centered' />
        <PostGroup dataset={this.state.posts} />
      </div>
    )
  }
}

export default Home