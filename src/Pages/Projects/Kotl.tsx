import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import kotlBanner from '../../Assets/Images/kotl_banner.png'
import kotl1 from '../../Assets/Images/Kotl1.png'
import kotl2 from '../../Assets/Images/Kotl2.png'
import kotl3 from '../../Assets/Images/Kotl3.png'
import kotl4 from '../../Assets/Images/Kotl4.png'
import kotl5 from '../../Assets/Images/Kotl5.png'
import kotl6 from '../../Assets/Images/Kotl6.png'

import { Banner } from '../../Components/Banner'
import { Gallery, Item } from 'react-photoswipe-gallery'


export const Kotl = () => {

    const images = [
        {
            src: kotl1,
            alt: ''
        },
        {
            src: kotl2,
            alt: ''
        },
        {
            src: kotl3,
            alt: ''
        },
        {
            src: kotl4,
            alt: ''
        },
        {
            src: kotl5,
            alt: ''
        },
        {
            src: kotl6,
            alt: ''
        },
    ]

    const smallItemStyles: React.CSSProperties = {
        cursor: 'pointer',
        objectFit: 'cover',
        width: '100%',
        maxHeight: '100%',
    }

    return (
        <>
            <Banner imageUrl={kotlBanner} title='Keeper of the Library' />
            <Container className='kotl-container d-flex flex-column justify-content-evenly mt-5' style={{ gap: '2em' }}>
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
                <Row className='justify-content-between'>
                    <Col md={6}>
                        <h3>About</h3>
                        <p>
                            Keeper of the Library is a 3D Adventure/Puzzle Game, where you play as a flying book with magical abilities.
                            Use these to save your wizard from dark forces.
                        </p>
                        <p>
                            This student project was made by a team of 4 and developed with the Unity Engine.
                            It is the winner of best in class award of the fall semester of 2020.
                        </p>
                        <p className='mb-0'>
                            <strong><u><a href="https://michaelprommer.com/wp-content/uploads/2021/03/Kotl_Winner.pdf">Certificate</a></u></strong>
                        </p>
                    </Col>
                    <Col md={4} className='d-flex flex-column justify-content-start'>
                        <h3>Roles:</h3>
                        <ul className='p-0'>
                            <li>Game Design</li>
                            <li>Sound Design</li>
                            <li>Gameplay Programming</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button href='https://temp-name.itch.io/kotl-prototype' target='_blank'>Play Demo on itch.io</Button>
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col>
                        <Gallery>
                            <Row className='gallery'>
                                {images.map((image, index) => (
                                    <Col md={4} key={index} className='p-2 my-2'>
                                        <Item
                                            original={image.src}
                                            thumbnail={image.src}
                                            width="1920"
                                            height="1080"
                                        >
                                            {({ ref, open }) => (
                                                <img
                                                    style={smallItemStyles}
                                                    ref={ref as React.MutableRefObject<HTMLImageElement>} onClick={open} src={image.src} alt={image.alt} />
                                            )}
                                        </Item>
                                    </Col>
                                ))}
                            </Row>
                        </Gallery>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
