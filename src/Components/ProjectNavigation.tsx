import React, { useEffect } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link, useLocation } from 'react-router-dom'
import { Project } from '../Data/Projects'

interface ProjectNavigationProps {
    projects: Project[],
}

export const ProjectNavigation = (props: ProjectNavigationProps) => {
    const { state } = useLocation();
    const [currentProject, setCurrentProject] = React.useState(0);

    useEffect(() => {
        const currentProject = state?.currentProject;
        if (currentProject) {
            const index = props.projects.findIndex(project => project.url === currentProject);
            setCurrentProject(index);
        }
    }, [state])



    return (
        <div className='project-nav-container' style={{ marginTop: 'auto' }}>
            <Navbar expand="sm" variant='dark'>
                <Container fluid>
                    <Nav className='project-nav' >
                        <Col>
                            {currentProject > 0 &&
                                <Nav.Link as={Link} to={props.projects[currentProject - 1].url} onClick={() => setCurrentProject(currentProject - 1)}>
                                    <span>
                                        <MdOutlineArrowBackIos className='me-1' />{props.projects[currentProject - 1].name}
                                    </span>
                                </Nav.Link>
                            }
                        </Col>
                        <Col>
                            <Nav.Link as={Link} to="/projects">
                                <span>
                                    Overview
                                </span>
                            </Nav.Link>
                        </Col>
                        <Col>
                            {currentProject < props.projects.length - 1 &&
                                <Nav.Link as={Link} to={props.projects[currentProject + 1].url} onClick={() => setCurrentProject(currentProject + 1)}>
                                    <span>
                                        {props.projects[currentProject + 1].name}<MdOutlineArrowForwardIos className='ms-1' />
                                    </span>
                                </Nav.Link>
                            }
                        </Col>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
