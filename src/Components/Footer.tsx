import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export const Footer = () => {
  return (
    <Container fluid className='footer p-0'>
        <Row className='justify-content-around p-2'>
          <Col className='d-flex justify-content-center align-items-center'>
            Design inspiration from ...
          </Col>
          <Col className='d-flex justify-content-center align-items-center'>
            Socials
          </Col>
          <Col className='d-flex justify-content-center'>
            <a href='https://www.buymeacoffee.com/Prommerbua'>
              <img alt='Buy me a coffee' src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" width="150"></img>
            </a>
          </Col>
        </Row>
      </Container>
  )
}
