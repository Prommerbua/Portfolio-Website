import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { IconContext } from 'react-icons'
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { RiTwitchFill } from 'react-icons/ri'
import Link from 'next/link'
import { socials } from '../Data/Socials'

export const Footer = () => {
  return (
    <Container fluid className='d-flex flex-column footer p-0'>
      <Row className='justify-content-around m-0 p-2'>
        <Col className='d-flex justify-content-start'>
          <Link href='https://www.buymeacoffee.com/Prommerbua' target='_blank'>
            <img alt='Buy me a coffee' src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png" width="150"></img>
          </Link>
        </Col>
        <Col className='d-flex justify-content-end align-items-center footer-socials'>
          <IconContext.Provider value={{ size: '20' }}>
            {socials.map((social, index) => {
              return (
                <Col md="auto" className='' key={index}>
                  <Link className='footer-social-icon' href={social.url} target='_blank'>
                    {social.icon}
                  </Link>
                </Col>
              )
            })}
          </IconContext.Provider>
        </Col>
      </Row>
    </Container>
  )
}
