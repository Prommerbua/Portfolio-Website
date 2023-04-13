import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import kotl from '../Assets/Images/kotl.png'

export const Projects = () => {

  const projects = [
    {
      name: 'Kotl',
      description: 'Project 1 description',
      url: '',
      image: kotl,
      component: '',
    },
    {
      name: 'Kotl',
      description: 'Project 1 description that is a bit longer than the others so that it can be used to test the responsiveness of the page',
      url: '',
      image: kotl,
      component: '',
    },
    {
      name: 'Kotl',
      description: 'Project 1 description',
      url: '',
      image: kotl,
      component: '',
    },

  ]

  return (
    <Container className='projects-main-container'>
      <h1>Projects</h1>

      <Row>
        {projects.map((project, index) => (
          <Col className='d-flex' key={index} md={4} sm={6} xs={12}>
            <Card className='project-box'>
              <img src={project.image} alt={project.name} className='project-image' />
              <h2 className='project-title'>{project.name}</h2>
              <p className='project-description'>{project.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
