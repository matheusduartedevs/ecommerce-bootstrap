import React from 'react'
import { Button, Card } from 'react-bootstrap'

const Produto = () => {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="src/images/RE4.jpg" />
    <Card.Body>
      <Card.Title>Jogo</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Compre</Button>
    </Card.Body>
  </Card>
  )
}

export default Produto