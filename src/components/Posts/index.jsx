import React from 'react'
import { Card } from 'semantic-ui-react'


const CardGroup = () => (
  <Card.Group>
    <Card fluid color='red' header='测试' meta="2017-1-18" description="这是一篇文章..." />
    <Card fluid color='green' header='测试' meta="2017-1-18" description="这是一篇文章..." />
  </Card.Group>
)

export default CardGroup