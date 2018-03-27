import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { Label, Divider } from 'semantic-ui-react'
import { listLabels } from 'services/issue'
import './index.scss'

@withRouter
class Tags extends Component {

  constructor () {
    super()
    this.state = {
      labels: []
    }
  }

  async componentDidMount () {
    const labels = await listLabels()
    this.setState({
      labels: labels.data
    })
    console.log(labels.data)
  }

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
            <Link to={`/tags/${label.name}`} style={{marginRight: '.5rem'}}>
              <Label key={key} size="mini">{label.name}</Label>
            </Link>
          ))
        }
      </div>
    )
  }
}

export default Tags