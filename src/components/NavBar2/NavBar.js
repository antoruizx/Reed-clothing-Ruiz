import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

export const Navbar = () => {
  const categories = [
    { id: "asfadd", address: "/", text: "Todos los productos" },
    { id: "123asf", address: "/category/Pantalones", text: "Pantalones" },
    { id: "sgs3q3", address: "/category/Remeras", text: "Remeras" },
    { id: "gkl98s", address: "/category/Abrigos", text: "Abrigos" },
  ];

  return (
        <header>
      <img class="logo" src="/assets/img/Logo2.png" alt="logo" />
      <nav>
        <ul class="nav__links">
            {categories.map((cat) => {
            return (
                <NavLink
                  to={cat.address}
                  className={({ isActive }) =>
                    isActive ? "links activeClass" : "links"
                  }
                  key={cat.id}
                >
                  {cat.text}
                </NavLink>
            );
          })}
        </ul>
      </nav>
      <a class="cta" href="#"><button>Contacto</button></a>
    </header>
    
  );
};

// import React from "react";
// import { Link, Outlet } from "react-router-dom";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

// export const Navbar = () => {
//   const categories = [
//     { id: "asfadd", address: "/", text: "Todos los productos" },
//     { id: "123asf", address: "/category/Pantalones", text: "Pantalones" },
//     { id: "sgs3q3", address: "/category/Remeras", text: "Remeras" },
//     { id: "gkl98s", address: "/category/Abrigos", text: "Abrigos" },
//   ];

//   return (
//     <>
//       <Navbar className="navBg" bg="light" expand="lg">
//         <Container>
//           <Navbar.Brand as={Link} to="/">
//             Reed
//           </Navbar.Brand>
//           <NavbarToggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             {categories.map((cat) => {
//               return (
//                 <Nav.Link
//                   as={Link}
//                   to={cat.address}
//                   className={({ isActive }) =>
//                     isActive ? "links activeClass" : "links"
//                   }
//                   key={cat.id}
//                 >
//                   {cat.text}
//                 </Nav.Link>
//               );
//             })}
//           </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>

//       <section>
//         <Outlet></Outlet>
//       </section>
//     </>
//   );
// };
