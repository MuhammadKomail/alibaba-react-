import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Button,Nav,Container,NavDropdown,Form,FormControl } from 'react-bootstrap';
import logo from '../images/logo.png'
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function header() {
  return (
    <div>
      <Navbar expand="lg">
  <Container fluid>
    <Navbar.Brand href="#"><img src={logo} width='150px' alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          style={{width:'100%',borderRadius:'100px',borderColor:'#FF6A00 '}}
        />
        <Button style={{backgroundColor:'#FF6A00',color:'white',borderRadius:'40px',outline:'none',margin:0,paddingRight:'30px',paddingLeft:'30px'}}>Search</Button>
      </Form>

        </Nav.Link>
      </Nav>

      <Form className="d-flex">
      <Nav.Link href="#action2" style={{color:'black'}}> 
      <SmsOutlinedIcon/>
      </Nav.Link>
      <Nav.Link href="#action2" style={{color:'black'}}>
     <LocalAtmOutlinedIcon /> 
      </Nav.Link>
      <Nav.Link href="#action2" style={{color:'black'}}>
      <ShoppingCartOutlinedIcon />
      </Nav.Link>

      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}
