import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import Welcome from '../Welcome/Welcome';

export const NavBarComp = () => {
  // const categories = [
  //   { id: 'aabbcc', address: '/', text: 'Todos los productos'},
  //   { id: 'ddeeff', address: '/category/remeras', text: 'Remeras'},
  //   { id: 'gghhii', address: '/category/buzo', text: 'Pantalones'},
  //   { id: 'jjkkll', address: '/category/abrigos', text: 'Abrigos'},
  // ]
  return (
    <header className='header'>
      <Navbar bg="dark" variant={"dark"} expand="lg">
      <Container>
        <Navbar.Brand href="/home">Reed</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link activeClassName='active' href="/inicio">Inicio</Nav.Link>
            <Nav.Link activeClassName='active' href="/conocenos">Conócenos</Nav.Link>
              <NavDropdown activeClassName='active' title="Nuestros productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="/unisex">Unisex</NavDropdown.Item>
                <NavDropdown.Item href="/femenino">Femenino</NavDropdown.Item>
                <NavDropdown.Item href="/masculino">Masculino</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/vermas">Ver más</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Welcome name="Antox"/>
        <hr></hr>
        <CartWidget/>
      </Container>
      </Navbar>
    </header>
  )
}

export default NavBarComp;