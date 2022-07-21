import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from '../CartWidget/CartWidget';
import Welcome from '../Welcome/Welcome';
import { Link, NavLink } from 'react';
import logo from '../assets/img/Logo2.png';

const NavBarComp = () => {
  // const categories = [
  //   { id: 'aabbcc', address: '/', text: 'Todos los productos'},
  //   { id: 'ddeeff', address: '/category/remeras', text: 'Remeras'},
  //   { id: 'gghhii', address: '/category/pantalones', text: 'Pantalones'},
  //   { id: 'jjkkll', address: '/category/abrigos', text: 'Abrigos'},
  // ];
  return (
    // <section style={{ background: 'lightgray' }}>
    //   {categories.map((cat) => {
    //     return (
    //       <NavLink to={cat.address} 
    //       className={({ isActive }) => 
    //         isActive ? 'links activeClass' : 'links'}
    //       key={cat.id}
    //       >
    //         {cat.text}
    //       </NavLink>
    //       );
    //   })}
    // </section>
    <section className='header'>
      <Navbar  bg="dark" variant={"dark"} expand="lg">
      <Container >
        <Navbar.Brand as={Link} to="/home">
        <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} activeClassName='active' to="/inicio">Inicio</Nav.Link>
            <Nav.Link activeClassName='active' to="/conocenos">Conócenos</Nav.Link>
              <NavDropdown activeClassName='active' title="Nuestros productos" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/unisex">Unisex</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/femenino">Femenino</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/masculino">Masculino</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/vermas">Ver más</NavDropdown.Item>
              </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Welcome name="Antox"/>
        <hr></hr>
        <CartWidget/>
      </Container>
      </Navbar>
    </section>
  );
};

export default NavBarComp;