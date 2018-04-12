import React, { Component } from 'react'
import PostGroup from 'components/Posts'
import { listIssues } from 'services/issue'
import { Loader } from 'semantic-ui-react'
import './index.scss'

class Home extends Component {
  constructor () {
    super()
    this.state = {
      posts: [],
      current: 1,
      loading: true,
      moreLoading: false,
      pagination: {}
    }
  }

  async componentDidMount () {
    document.title = '首页'
    const issues = await listIssues({ per_page: 10 })
    this.setState({
      posts: issues.data,
      loading: false,
      pagination: issues.pagination
    })
  }

  loadMore = async () => {
    await this.setState((prevState) => {
      prevState.current = prevState.current + 1
      prevState.moreLoading = true
      return prevState
    })
    const issues = await listIssues({ per_page: 10, page: this.state.current })
    this.setState((prevState) => {
      prevState.posts = prevState.posts.concat(issues.data)
      prevState.moreLoading = false
      prevState.pagination = issues.pagination
      return prevState
    })
  }

  render () {
    return (
      <div>
        <Loader active={this.state.loading} inline='centered' />
        <PostGroup dataset={this.state.posts} />
        <div className="load-more" style={{ display: this.state.loading ? 'none': 'block' }}>
          <Loader active={this.state.moreLoading} inline='centered' size='mini' />
          {
            !this.state.moreLoading && !!this.state.pagination.last && <a onClick={this.loadMore}>加载更多</a>
          }
          { !!!this.state.pagination.last && <span style={{ color: '#aaa' }}>#止步#</span>}
        </div>
      </div>
    )
  }
}

export default Home