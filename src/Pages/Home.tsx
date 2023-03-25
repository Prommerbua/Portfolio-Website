import React from 'react'
import { Container, Row, Col, Collapse } from 'react-bootstrap'
import profilePic from '../Assets/Images/profile-picture.jpg';


export const Home = () => {
    return (
        <header className="App-header">
            <Container className='home-main-container'>
                <Row>
                    <Col md={7}>
                        <Collapse in appear timeout={1000}>
                            <div>
                                <Row className='mb-4'>
                                    <h4 className='d-flex justify-content-start'>Hi!</h4>
                                </Row>
                                <Row>
                                    <Col>
                                        <h1 className='home-title'>My name is Michael and I'm a game developer</h1>
                                    </Col>
                                </Row>
                            </div>
                        </Collapse>
                    </Col>
                    <Col md={5}>
                        <img src={profilePic} className="profile-picture"></img>
                    </Col>
                </Row>
            </Container>

            <Container className='home-about-container'>
                <Row className='justify-content-center align-items-center'>
                    <Col md={7}>
                        <Row>
                            {/* <h4>Hi!</h4> */}
                        </Row>
                        <Row>
                            <p>
                                {/* <h1>My name is Michael</h1> */}
                            </p>
                            <p>
                                {/* <h1>and I'm a game developer</h1> */}
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row className='justify-content-center align-items-center'>
                    <h3>Connect with me on</h3>
                </Row>
                <Row>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <a href='https://www.linkedin.com/in/michael-prommer-0b0b3b1b3/'>
                            LinkedIn
                        </a>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <a href='https://www.linkedin.com/in/michael-prommer-0b0b3b1b3/'>
                        </a>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <a href='https://www.linkedin.com/in/michael-prommer-0b0b3b1b3/'>
                        </a>
                    </Col>
                    <Col className='d-flex justify-content-center align-items-center'>
                        <a href='https://www.linkedin.com/in/michael-prommer-0b0b3b1b3/'>
                        </a>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}
