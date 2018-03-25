import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'
import { withRouter } from 'react-router-dom'
import { getIssue } from 'services/issue'

@withRouter
class Post extends Component {
  constructor () {
    super()
    this.state = {
      issue: {}
    }
  }

  async componentDidMount () {
    const { match } = this.props
    const id = match.params.id
    const issue = await getIssue(id)
    this.setState({
      issue: issue.data
    })
  }

  render () {
    const { issue } = this.state
    return (
      <Card fluid>
        <Card.Content>
          <Card.Header>
            {issue.title}
          </Card.Header>

          <Card.Description>
            <ReactMarkdown 
              source={issue.body} 
            />
          </Card.Description>
        </Card.Content>
      </Card>
    )
  }
}

export default Post