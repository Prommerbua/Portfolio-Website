import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { projects } from '../../src/Data/Projects'
import Link from 'next/link'

const ProjectOverview = () => {

  return (
    <Container className='projects-main-container'>
      <h1>Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col className='d-flex' key={index} md={4} sm={6} xs={12}>
            <Card as={Link} href={project.url} className='project-box' >
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

export default ProjectOverview
