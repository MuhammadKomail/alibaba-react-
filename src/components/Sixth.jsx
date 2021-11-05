import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import card2 from '../images/card4.webp'
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
export default function sixth() {
    return (
        <div>
            <Container className='my-5'>
                <Row>
                    <Col sm={3}>
                        <Card border="" style={{ width: '18rem' }}>
                            <Card.Img src={card2} alt="Card image" style={{ height: '170px' }} />
                            <Card.ImgOverlay>

                                <Card.Text class='text-white pt-5 mt-3'>
                                    Trade Assurance is a free order protection service offered by Alibaba.com.
                                </Card.Text>
                            </Card.ImgOverlay>
                            <Card.Body>
                                {/* <Container> */}
                                <Row>
                                    <Col sm={10}><Card.Title>Trade Assurance</Card.Title></Col>
                                    <Col sm={2}><Card.Title><LocalAtmOutlinedIcon /></Card.Title></Col>

                                </Row>
                                {/* </Contaier> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card border="" style={{ width: '18rem' }}>
                            <Card.Img src={card2} alt="Card image" style={{ height: '170px' }} />
                            <Card.ImgOverlay>

                                <Card.Text class='text-white pt-5 mt-3'>
                                    Trade Assurance is a free order protection service offered by Alibaba.com.
                                </Card.Text>
                            </Card.ImgOverlay>
                            <Card.Body>
                                {/* <Container> */}
                                <Row>
                                    <Col sm={10}><Card.Title>Trade Assurance</Card.Title></Col>
                                    <Col sm={2}><Card.Title><LocalAtmOutlinedIcon /></Card.Title></Col>

                                </Row>
                                {/* </Contaier> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card border="" style={{ width: '18rem' }}>
                            <Card.Img src={card2} alt="Card image" style={{ height: '170px' }} />
                            <Card.ImgOverlay>

                                <Card.Text class='text-white pt-5 mt-3'>
                                    Trade Assurance is a free order protection service offered by Alibaba.com.
                                </Card.Text>
                            </Card.ImgOverlay>
                            <Card.Body>
                                {/* <Container> */}
                                <Row>
                                    <Col sm={10}><Card.Title>Trade Assurance</Card.Title></Col>
                                    <Col sm={2}><Card.Title><LocalAtmOutlinedIcon /></Card.Title></Col>

                                </Row>
                                {/* </Contaier> */}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card border="" style={{ width: '18rem' }}>
                            <Card.Img src={card2} alt="Card image" style={{ height: '170px' }} />
                            <Card.ImgOverlay>

                                <Card.Text class='text-white pt-5 mt-3'>
                                    Trade Assurance is a free order protection service offered by Alibaba.com.
                                </Card.Text>
                            </Card.ImgOverlay>
                            <Card.Body>
                                {/* <Container> */}
                                <Row>
                                    <Col sm={10}><Card.Title>Trade Assurance</Card.Title></Col>
                                    <Col sm={2}><Card.Title><LocalAtmOutlinedIcon /></Card.Title></Col>

                                </Row>
                                {/* </Contaier> */}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >
    )
}
