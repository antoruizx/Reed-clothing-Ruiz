import React, { Component } from 'react';
import {Container,Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class NavBarComp extends Component {
  render () {
    return (
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand href="#home">Reed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Know us</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Unisex</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Female
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Male</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                See more
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    )
  }
  }
