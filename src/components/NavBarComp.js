import React, { Component } from 'react';
import {Container,Navbar,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

function NavBarComp() {
  return (
    <div>
      <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand href="#home">Reed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Conócenos</Nav.Link>
              <NavDropdown title="Nuestros productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Unisex</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Femenino</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Masculino</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Ver más</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
      </Navbar>
    </div>
  )
}

export default NavBarComp;