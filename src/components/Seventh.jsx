import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import FlagIcon from '@mui/icons-material/Flag';
import lastimg from '../images/lastimg.webp'

export default function seventh() {
    return (
        <div className='py-3'>
            <Container className='pb-4'>
                <Row>
                    <Col sm={1}><FlagIcon /> Russia</Col>
                    <Col sm={1}><FlagIcon /> Usa</Col>
                    <Col sm={1}><FlagIcon /> Turkey</Col>
                    <Col sm={1}><FlagIcon /> Italy</Col>
                    <Col sm={1}><FlagIcon /> Korea</Col>
                    <Col sm={1}><FlagIcon /> Canada</Col>
                    <Col sm={1}><FlagIcon /> India</Col>
                    <Col sm={1}><FlagIcon /> Japan</Col>
                    <Col sm={1}><FlagIcon /> Aus</Col>
                    {/* <Col sm={4}><FlagIcon /> Thailand <FlagIcon />  Malaysia <FlagIcon />  South Korea</Col> */}
                    {/* <Col sm={2}><FlagIcon /> Vietnam</Col> */}
                    {/* <Col sm={1}><FlagIcon /> Pakistan</Col> */}
                    <Col sm={2}> <a href="#" style={{textDecoration:'none' ,color:'blue'}}>More Region</a></Col>
                </Row>
            </Container>

            {/* <img src={lastimg} alt="" /> */}

                </div>
                )
}
