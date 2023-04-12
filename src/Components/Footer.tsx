import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <Container fluid className='d-flex flex-column footer p-0'>
      <Row className='justify-content-around p-2'>
        {/* <Col className='d-flex justify-content-center align-items-center'>
            Design inspiration from<a href='https://github.com/soumyajit4419/Portfolio' className='ms-1'>Soumyajit4419</a>
          </Col> */}
        <Col className='d-flex justify-content-center'>
          <Link to='https://www.buymeacoffee.com/Prommerbua' target='_blank'>
            <img alt='Buy me a coffee' src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" width="150"></img>
          </Link>
        </Col>
        <Col className='d-flex justify-content-center align-items-center'>
          <IconContext.Provider value={{ size: '20' }}>
            <Col md="auto" className='me-3'>
              <Link className='footer-social-icon' to='https://github.com/Prommerbua' target='_blank'>
                <AiFillGithub />
              </Link>
            </Col>
            <Col md="auto" className='me-3'>
              <Link className='footer-social-icon' to='https://www.linkedin.com/in/prommerbua/' target='_blank'>
                <AiFillLinkedin />
              </Link>
            </Col>
            <Col md="auto" className='me-3'>
              <Link className='footer-social-icon' to='https://www.facebook.com/michi.prommer' target='_blank'>
                <AiFillFacebook />
              </Link>
            </Col>
            <Col md="auto">
              <Link className='footer-social-icon' to='https://www.instagram.com/prommerbua/' target='_blank'>
                <AiFillInstagram />
              </Link>
            </Col>
          </IconContext.Provider>
        </Col>
      </Row>
    </Container>
  )
}
