import { Container, Row, Col, Collapse } from 'react-bootstrap'
import { AiFillFacebook, AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { RiTwitchFill } from 'react-icons/ri'
import { IconContext } from 'react-icons/lib';
import { socials } from '../Data/Socials';


export const Home = () => {
    return (
        <header className="App-header">
            <Container className='home-main-container'>
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
                        {/* <img src={profilePic} alt='Profile' className="profile-picture"></img> */}
                    </Col>
                </Row>
            </Container>

            <Container className='home-about-container my-4'>
                <Col className='d-flex flex-column align-items-center justify-content-center'>
                    <div className="my-3">
                        <h2 className="section-heading">Introducing myself!</h2>
                        <div className="section-text">
                            I am a passionate programmer with a strong background in
                            <strong> Computer Science (Bachelor's Degree) </strong>and
                            <strong> Game Engineering and Simulation (Master's Degree) </strong>.
                            <p className='mt-4'>
                                I have expertise in <strong>C++, C#,</strong> and <strong>Javascript/Typescript</strong> but also with <strong> Unity3D </strong>
                                and <strong>Unreal Engine</strong>.
                            </p>
                            <p className='mt-4'>
                                Please look around and feel free to contact me!

                            </p>
                        </div>
                    </div>
                </Col>
            </Container>
            <Container className='my-4'>
                <Row className='justify-content-center align-items-center'>
                    <h3>Connect with me on</h3>
                </Row>
                <Row className='justify-content-center socials'>
                    <IconContext.Provider value={{ size: '30' }}>
                        {socials.map((social, index) => (
                            <Col md="auto" sm="auto" xs="auto" key={index}>
                                <Link className='social-icon' to={social.url} target='_blank'>
                                    {social.icon}
                                </Link>
                            </Col>
                        ))}
                    </IconContext.Provider>
                </Row>
            </Container>
        </header>
    )
}
