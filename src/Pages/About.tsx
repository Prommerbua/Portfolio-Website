import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import profilePic from '../Assets/Images/profile-picture2.jpg'
import { CgCPlusPlus } from 'react-icons/cg'
import { FaBirthdayCake, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export const About = () => {
  return (
    <Container className='about-main-container'>
      <Row className='about-header'>
        <Col md={7} className='about-text'>
          <p>Hi, I am</p>
          <p>
            <h1>Michael Prommer</h1>
          </p>
          <p>I am currently working as a <strong>BIM Developer</strong> in Vienna, Austria at Pde Integrale Planung GmbH, creating plugins for <i>Autodesk Revit</i>.</p>
          <p>When I'm not coding, I enjoy spending my free time playing video games and golfing.</p>
          <ul className='ms-0 p-0'>
            <li className='d-flex align-items-center'>
              <FaBirthdayCake className='me-2' /> 08th December, 1996
            </li>
            <li className='d-flex align-items-center'>
              <FaEnvelope className='me-2' /> <a href='mailto:michael.prommer@outlook.de'>michael.prommer@outlook.de</a>
            </li>
            <li className='d-flex align-items-center'>
              <FaMapMarkerAlt className='me-2' /> St. Pölten, Austria
            </li>
          </ul>
        </Col>
        <Col md={5}>
          <img src={profilePic} alt='Profile' className="about-image"></img>
        </Col>
      </Row>
      <Row className='about-skills'>
        <Col>
          <h2>Skillset</h2>
          <Row className='skill-row'>
            <Col xs={6} sm={3} md={2}>
              <div className='skill-box'>
                <CgCPlusPlus />
              </div>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <div className='skill-box'>
                <CgCPlusPlus />
              </div>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <div className='skill-box'>
                <CgCPlusPlus />
              </div>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <div className='skill-box'>
                <CgCPlusPlus />
              </div>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <div className='skill-box'>
                <CgCPlusPlus />
              </div>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <div className='skill-box'>
                <CgCPlusPlus />
              </div>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <div className='skill-box'>
                <CgCPlusPlus />
              </div>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <div className='skill-box'>
                <CgCPlusPlus />
              </div>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <div className='skill-box'>
                <CgCPlusPlus />
              </div>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <div className='skill-box'>
                <CgCPlusPlus />
              </div>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <div className='skill-box'>
                <CgCPlusPlus />
              </div>
            </Col>
            <Col xs={6} sm={3} md={2}>
              <div className='skill-box'>
                <CgCPlusPlus />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
