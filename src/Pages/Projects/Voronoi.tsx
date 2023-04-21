import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Banner } from '../../Components/Banner'
import voronoiBanner from '../../Assets/Images/Voronoi/VoronoiBanner.png'
import thesis from '../../Assets/Files/Masterarbeit.pdf'
import voronoi1 from '../../Assets/Images/Voronoi/3dDelaunay.png'
import voronoi2 from '../../Assets/Images/Voronoi/3dVoronoi.png'
import voronoi3 from '../../Assets/Images/Voronoi/DelaunayVoronoiSelf-1024x1004.png'
import voronoi4 from '../../Assets/Images/Voronoi/prefactureAll.png'
import { Gallery, Item } from 'react-photoswipe-gallery'



export const Voronoi = () => {
    const images: any[] = [
        {
            src: voronoi3,
            width: 1024,
            height: 1004,

        },
        {
            src: voronoi1,
            width: 982,
            height: 436,
        },
        {
            src: voronoi2,
            width: 959,
            height: 418,
        },
        {
            src: voronoi4,
            width: 615,
            height: 496,
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
            <Banner imageUrl={voronoiBanner} title='Voronoi Object Destruction' />
            <Container className='kotl-container d-flex flex-column justify-content-evenly mt-5' style={{ gap: '2em' }}>
                <Row className='justify-content-between'>
                    <Col>
                        <h2 className='text-center'>About</h2>
                        <p>
                            In this project two methods for destroying object in video games were implemented in Unity as part of my master thesis.
                            The goal of the thesis is to give an overview of currently used methods and to give an insight into the implementation.
                            Additionally these algorithmes are compared in criteria such as performance, quality and complexity.
                        </p>
                        <p>
                            The following methods were implemented:

                        </p>
                        <ul>
                            <li>- Swapping with prefractured object</li>
                            <li>- Voronoi diagram based destruction</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Prefractured</h3>
                        <p>
                            The prefractured method is a simple but very effective method for most cases.
                            Basically you create a fractured counterpart of your asset and replace it during runtime when fracturing occurs.
                        </p>
                    </Col>
                    <Col>
                        <h3>Voronoi diagram based</h3>
                        <p>
                            This is a more complex method to implement but has the possibility for a higher quality if implemented correctly.
                            This is because of the generation of the fragments during runtime.
                            Therefore you can create the fragments based of an impact point from a projectile and create more realistic results.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button href='https://github.com/Prommerbua/ShatteringTool' target='_blank'>Github Repository</Button>
                    </Col>
                    <Col>
                        <Button href={thesis} target='_blank'>Thesis.pdf (German)</Button>
                    </Col>
                </Row>
                <Row className='mb-3 gallery'>
                    <Col>
                        <Gallery>
                            <Row className='gallery'>
                                {images.map((image, index) => (
                                    <Col md={3} key={index} className='p-2 my-2'>
                                        <Item
                                            original={image.src}
                                            thumbnail={image.src}
                                            width={image.width}
                                            height={image.height}
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
