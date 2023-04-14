import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link } from 'react-router-dom'

interface ProjectNavigationProps {
    projects: string[]
}

export const ProjectNavigation = () => {



    return (
        <div className='project-nav-container' style={{ marginTop: 'auto' }}>
            <Navbar expand="sm" variant='dark'>
                <Container >
                    <Nav className='project-nav' >
                        <Nav.Link as={Link} to="#">
                            <span>
                                <MdOutlineArrowBackIos className='me-1' />Previous
                            </span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="#">
                            <span>
                                Overview
                            </span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="#">
                            <span>
                                Next<MdOutlineArrowForwardIos className='ms-1' />
                            </span>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
