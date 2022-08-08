import React from "react";
import { NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
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
      <CartWidget/>
    </header>
    
  );
};
