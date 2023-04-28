import React, { useEffect } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import { Link, NavLink, useLocation, useParams } from 'react-router-dom'
import { Project } from '../Data/Projects'

interface ProjectNavigationProps {
    projects: Project[],
}

export const ProjectNavigation = (props: ProjectNavigationProps) => {
    const location = useLocation();
    const [currentProject, setCurrentProject] = React.useState(0);

    useEffect(() => {
        console.log(location);
        let path = location.pathname.split('/');
        let key = path[path.length - 1];
        const index = props.projects.findIndex(project => project.url === key);
        setCurrentProject(index);
    }, [location])

    return (
        <div className='project-nav-container' style={{ marginTop: 'auto' }}>
            <Navbar expand="sm" variant='dark' collapseOnSelect >
                <Container className='justify-content-end'>
                    <Navbar.Brand />
                    <Navbar.Collapse className="justify-content-end mt-1" id='navbarCollapse'>
                        <Nav className='project-nav'>
                            <Row className='m-0 flex-fill justify-content-between'>
                                <Col xs={12} sm='auto'>
                                    {currentProject > 0 &&
                                        <div style={{ display: 'inline-block' }}>
                                            <Nav.Link as={NavLink} to={props.projects[currentProject - 1].url} onClick={() => setCurrentProject(currentProject - 1)}>
                                                <span>
                                                    <MdOutlineArrowBackIos className='me-1' />{props.projects[currentProject - 1].name}
                                                </span>
                                            </Nav.Link>
                                        </div>
                                    }
                                </Col>
                                <Col xs={12} sm='auto'>
                                    <div style={{ display: 'inline-block' }}>
                                        <Nav.Link as={Link} to="/projects">
                                            <span>
                                                Overview
                                            </span>
                                        </Nav.Link>
                                    </div>
                                </Col>
                                <Col xs={12} sm='auto'>
                                    {currentProject < props.projects.length - 1 &&
                                        <div style={{ display: 'inline-block' }}>
                                            <Nav.Link as={NavLink} to={props.projects[currentProject + 1].url} onClick={() => setCurrentProject(currentProject + 1)}>
                                                <span>
                                                    {props.projects[currentProject + 1].name}<MdOutlineArrowForwardIos className='ms-1' />
                                                </span>
                                            </Nav.Link>
                                        </div>
                                    }
                                </Col>
                            </Row>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Toggle className='align-self-end'/>
                </Container>
            </Navbar>
        </div>
    )
}
