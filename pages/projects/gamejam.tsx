import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Gallery, Item } from 'react-photoswipe-gallery'
import { Banner } from '../../src/Components/Banner'
import { ProjectNavigation } from '../../src/Components/ProjectNavigation'


const Gamejam = () => {

    const images: any[] = [
        {
            src: '/Images/Gamejam/gamejam1.png',
            width: 1024,
            height: 569,

        },
        {
            src: '/Images/Gamejam/gamejam2.png',
            width: 1024,
            height: 571,
        },
        {
            src: '/Images/Gamejam/gamejam3.png',
            width: 1024,
            height: 567,
        },
        {
            src: '/Images/Gamejam/gamejam4.png',
            width: 1024,
            height: 571,
        },
    ]

    return (
        <>
            <Banner imageUrl='Images/Gamejam/gamejamBanner.png' title='Private Gamejam'
                style={{ backgroundPosition: '100% 44%' }}
            />
            <Container className='kotl-container d-flex flex-column justify-content-evenly mt-5' style={{ gap: '2em' }}>
                <Row className='justify-content-between'>
                    <Col>
                        <h2 className='text-center'>About</h2>
                        <p>
                            This game is a 2D Plattformer/Bullet Hell implemented in Unity and is the result of a private game jam with a team of four.
                            After the gamejam we decided to continue working on this project and therefore it is currently under development.
                        </p>
                    </Col>
                </Row>
                <Row className='mb-3 gallery'>
                    <Col>
                        <Gallery>
                            <Row className='gallery'>
                                {images.map((image, index) => (
                                    <Col md={4} key={index} className='p-2 my-2'>
                                        <Item
                                            original={image.src}
                                            thumbnail={image.src}
                                            width={image.width}
                                            height={image.height}
                                        >
                                            {({ ref, open }) => (
                                                <img
                                                    className='gallery-image'
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

export default Gamejam