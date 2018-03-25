import React from 'react'
import { Card, Label, Popup } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const CardGroup = function ({ dataset }) {

  const posts = dataset.map((post, index) => {
    const labels = post.labels.map((label, _index) => (
      <Popup
        trigger={
          <Label 
            size="mini" 
            style={{ background: '#' + label.color, cursor: 'pointer'}} 
            circular
            empty
          />
        }
        key={_index}
        content={label.name}
        position='top center'
      />
      
    ))
    return (
      <Card fluid key={index}>
        <Card.Content>
          <Card.Header>
            <Link to={`/post/${post.number}`} style={{ color: '#444', textDecoration: 'none' }}>
              {post.title} 
            </Link>
          </Card.Header>

          <Card.Meta>
            {labels}
          </Card.Meta>
          <Card.Meta>
            写于 {moment(post.created_at).format('YYYY-MM-DD')} 更新于 {moment(post.updated_at).format('YYYY-MM-DD')}
          </Card.Meta>
        </Card.Content>
      </Card>
    )
  })
  return (
    <Card.Group>
      {posts}
    </Card.Group>
  )
}

export default CardGroup