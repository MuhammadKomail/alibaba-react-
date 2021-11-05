import React from 'react'
import card2 from '../images/card2.jpg';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

export default function Fifth() {
    return (
        <div className='py-3'>
            <Container>
                <Row>
                    <Col sm={3}>
                        <Card className='card1 justify-content-md-center' style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={card2} height='200px' />
                            <Card.Body>
                                <Card.Text>
                                    Stainless Steel Restaurant Kitchen Storage Rack/Rack Four Shelves
                                </Card.Text>
                                <Card.Title>
                                    USD $600.00
                                </Card.Title>
                                <Card.Text>
                                    1 piece Min order
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }} className='card1 justify-content-md-center'>
                            <Card.Img variant="top" src={card2} height='200px' />
                            <Card.Body>
                                <Card.Text>
                                    Stainless Steel Restaurant Kitchen Storage Rack/Rack Four Shelves
                                </Card.Text>
                                <Card.Title>
                                    USD $600.00
                                </Card.Title>
                                <Card.Text>
                                    1 piece Min order
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }} className='card1 justify-content-md-center'>
                            <Card.Img variant="top" src={card2} height='200px' />
                            <Card.Body>
                                <Card.Text>
                                    Stainless Steel Restaurant Kitchen Storage Rack/Rack Four Shelves
                                </Card.Text>
                                <Card.Title>
                                    USD $600.00
                                </Card.Title>
                                <Card.Text>
                                    1 piece Min order
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={3}>
                        <Card style={{ width: '18rem' }} className='card1 justify-content-md-center'>
                            <Card.Img variant="top" src={card2} height='200px' />
                            <Card.Body>
                                <Card.Text>
                                    Stainless Steel Restaurant Kitchen Storage Rack/Rack Four Shelves
                                </Card.Text>
                                <Card.Title>
                                    USD $600.00
                                </Card.Title>
                                <Card.Text>
                                    1 piece Min order
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>


        </div>
    )
}
