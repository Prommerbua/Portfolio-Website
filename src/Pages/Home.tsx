import React from 'react'
import { Container, Row, Col, Collapse } from 'react-bootstrap'
import profilePic from '../Assets/Images/profile-picture.jpg';
import { AiFillFacebook, AiFillGithub, AiOutlineInstagram, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons/lib';


export const Home = () => {
    return (
        <header className="App-header pt-5">
            <Container className='home-main-container my-2'>
                <Row>
                    <Col md={7} className="d-flex align-items-center">
                        <Collapse in appear timeout={1000}>
                            <div>
                                <Row className='mb-4'>
                                    <h3 className='d-flex justify-content-start'>Hi!</h3>
                                </Row>
                                <Row>
                                    <Col>
                                        <h1 className='home-title'>My name is Michael and I'm a game developer</h1>
                                    </Col>
                                </Row>
                            </div>
                        </Collapse>
                    </Col>
                    <Col md={5} className='d-flex align-items-center'>
                        <img src={profilePic} className="profile-picture"></img>
                    </Col>
                </Row>
            </Container>

            <Container className='home-about-container my-4'>
                <Col className='d-flex flex-column align-items-center justify-content-center'>
                    <div className="my-3">
                        <h2 className="section-heading">Introducing myself!</h2>
                        <p className="section-text">
                            I am a passionate programmer with a strong background in
                            <strong> Computer Science (Bachelor's Degree) </strong>and
                            <strong> Game Engineering and Simulation (Master's Degree) </strong>.
                            I have expertise in <strong>C++, C#, and Javascript/Typescript</strong>.
                        </p>
                    </div>
                </Col>
            </Container>
            <Container className='my-4'>

                <Row className='justify-content-center align-items-center'>
                    <h3>Connect with me on</h3>
                </Row>
                <Row className='justify-content-center socials'>
                    <IconContext.Provider value={{ size: '30' }}>
                        <Col md="auto">
                            <Link className='social-icon' to='https://github.com/Prommerbua' target='_blank'>
                                <AiFillGithub />
                            </Link>
                        </Col>
                        <Col md="auto">
                            <Link className='social-icon' to='https://www.linkedin.com/in/prommerbua/' target='_blank'>
                                <AiFillLinkedin />
                            </Link>
                        </Col>
                        <Col md="auto">
                            <Link className='social-icon' to='https://www.facebook.com/michi.prommer' target='_blank'>
                                <AiFillFacebook />
                            </Link>
                        </Col>
                        <Col md="auto">
                            <Link className='social-icon' to='https://www.instagram.com/prommerbua/' target='_blank'>
                                <AiFillInstagram />
                            </Link>
                        </Col>
                    </IconContext.Provider>
                </Row>
            </Container>
        </header>
    )
}
