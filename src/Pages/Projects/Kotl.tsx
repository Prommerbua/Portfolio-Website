import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

export const Kotl = () => {
    return (
        <Container className='d-flex flex-column justify-content-evenly mt-3' style={{gap: '1em'}}>
            {/* <Banner /> */}
            <Row >
                <div>
                    <iframe
                        width="50%"
                        style={{ aspectRatio: '16 / 9' }}
                        src="https://www.youtube.com/embed/DBmV8SEITzg"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
                </div>
            </Row>
            <Row>
                <Col>
                    <h3>About</h3>
                    <p>
                        Keeper of the Library is a 3D Adventure/Puzzle Game, where you play as a flying book with magical abilities.
                        Use these to save your wizard from dark forces.
                    </p>
                    <p>
                        This student project was made by a team of 4 and developed with the Unity Engine.
                        It is the winner of best in class award of the fall semester of 2020.
                    </p>

                    <strong><u><a href="https://michaelprommer.com/wp-content/uploads/2021/03/Kotl_Winner.pdf">Certificate</a></u></strong>
                </Col>
                <Col>
                    <h3>Roles:</h3>
                    <ul>
                        <li>Game Design</li>
                        <li>Sound Design</li>
                        <li>Gameplay Programming</li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button  href='https://temp-name.itch.io/kotl-prototype'>Play Demo on itch.io</Button>
                </Col>
            </Row>
            <Row>
                {/* Image Gallery */}
            </Row>
        </Container>
    )
}
