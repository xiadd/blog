import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Label, Divider } from 'semantic-ui-react'
import { listLabels, listIssues } from 'services/issue'
import PostGroup from 'components/Posts'
import './index.scss'

@withRouter
class Tags extends Component {

  constructor () {
    super()
    this.state = {
      labels: [],
      issues: []
    }
  }

  async componentDidMount () {
    const labels = await listLabels()
    const { match } = this.props
    if (!labels.data.length) return
    this.setState({
      labels: labels.data
    })
    const issues = await listIssues({ labels: match.params.tag })
    this.setState({
      issues: issues.data
    })
  }

  // shouldComponentUpdate (prevProps) {
  //   if (!this.state.labels.length || !this.state.issues.length) {
  //     return true
  //   }
  //   if (prevProps.match.params.tag === this.props.match.params.tag) {
  //     return false
  //   }
  // }

  // async componentDidUpdate () {
  //   const { match } = this.props
  //   const issues = await listIssues({ labels: match.params.tag })
  //   this.setState({
  //     issues: issues.data
  //   })
  // }

  render () {
    const { match } = this.props
    return (
      <div className="post-tags ui center aligned">
        <div className="current-tag">
          <Label as='a' color='teal' tag>{match.params.tag}</Label>
        </div>
        <Divider horizontal>全部标签</Divider>
        {
          this.state.labels.map((label, key) => (
            <Link to={`/tags/${label.name}`} key={key} style={{marginRight: '.5rem'}}>
              <Label key={key} size="mini">{label.name}</Label>
            </Link>
          ))
        }

        <div className="tag-posts-group">
          <PostGroup dataset={this.state.issues} />
        </div>
      </div>
    )
  }
}

export default Tags