import React from 'react'
import { Card, Label, Popup } from 'semantic-ui-react'
import moment from 'moment'

const CardGroup = function ({ dataset }) {

  const posts = dataset.map((post, index) => {
    const labels = post.labels.map((label, _index) => (
      <Popup
        trigger={
          <Label 
            size="mini" 
            style={{ background: '#' + label.color, cursor: 'pointer'}} 
            key={_index}
            circular
            empty
          />
        }
        content={label.name}
        position='top center'
      />
      
    ))
    return (
      <Card fluid key={index}>
        <Card.Content>
          <Card.Header>
            {post.title} 
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