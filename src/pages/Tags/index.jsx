import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Label, Divider } from 'semantic-ui-react'
import './index.scss'

@withRouter
class Tags extends Component {
  render () {
    const { match } = this.props
    return (
      <div className="post-tags ui center aligned">
        <Label as='a' color='teal' tag>{match.params.tag}</Label>
        <Divider horizontal>全部标签</Divider>
      </div>
    )
  }
}

export default Tags