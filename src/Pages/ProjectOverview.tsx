import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import kotl from '../Assets/Images/kotl.png'
import destruction from '../Assets/Images/destruction.gif'
import gamejam from '../Assets/Images/gamejam.gif'
import { Link, Outlet } from 'react-router-dom'

export const ProjectOverview = () => {

  const [currentProject, setCurrentProject] = React.useState(0)

  const projects = [
    {
      name: 'Keeper of the Library',
      description: 'Keeper of the Library is a 3D Adventure/Puzzle Game, where you play as a flying book with magical abilities. Use these to save your wizard from dark forces.',
      url: 'kotl',
      image: kotl,
    },
    {
      name: 'Voronoi Object Destruction',
      description: 'Implementation of two different algorithms in Unity for destroying objects in video games as the topic of my masters thesis.',
      url: 'voronoi',
      image: destruction,
    },
    {
      name: 'Private Game Jam',
      description: 'A 2D Plattformer/Bullet Hell game as a result of a private game jam',
      url: 'gamejam',
      image: gamejam,
    },

  ]

  return (
    <Container className='projects-main-container'>
      <h1>Projects</h1>
      <Row>
        {projects.map((project, index) => (
          <Col className='d-flex' key={index} md={4} sm={6} xs={12}>
            <Card as={Link} to={project.url} className='project-box'>
              <img src={project.image} alt={project.name} className='project-image' />
              <h2 className='project-title'>{project.name}</h2>
              <p className='project-description'>{project.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <Outlet />
    </Container>
  )
}
