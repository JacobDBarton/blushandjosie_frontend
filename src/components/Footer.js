import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className='footer'>Copyright &copy; Blush & Josie</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer