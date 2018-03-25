import React, { Component } from 'react'
import { Card, Loader } from 'semantic-ui-react'
import marked from 'marked'
import Prism from 'prismjs'
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism.css';
import { withRouter } from 'react-router-dom'
import { getIssue } from 'services/issue'
import './index.scss'

@withRouter
class Post extends Component {
  constructor () {
    super()
    this.state = {
      issue: {},
      loading: true
    }
  }

  async componentDidMount () {
    const { match } = this.props
    const id = match.params.id
    const issue = await getIssue(id)
    document.title = issue.data.title
    this.setState({
      issue: issue.data,
      loading: false
    })
  }
  
  componentDidUpdate () {
    Prism.highlightAll()
  }

  render () {
    const { issue } = this.state
    const html = issue.body && marked(issue.body)
    return (
      <Card fluid>
        <Card.Content>
          <Loader active={this.state.loading} inline='centered' />
          <Card.Header>
            {issue.title}
          </Card.Header>

          <Card.Meta>
            {issue.html_url && <a href={issue.html_url}>查看原文</a>}
          </Card.Meta>

          <Card.Description className="markdown" dangerouslySetInnerHTML={{__html: html}} />
        </Card.Content>
      </Card>
    )
  }
}

export default Post