import React from "react";
import "./footerStyles.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="text-white py-4 bg-dark">
        <div className="container">
          <nav className="row">
            <Link
              to="/"
              className="col-12 col-md-3 d-flex align-items-center justify-content-center"
            >
              <img src="./Logo.png" className="mx-2" height="130" />
            </Link>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weigth-bold mb-2">REED</li>
              <li>
                En este espacio encontraras ropa sin género, porque aquí somos
                todos iguales 😎​
              </li>
            </ul>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weigth-bold mb-2">Enlaces</li>
              <li>
                <Link to="/" class="text-reset">
                  Trabaja con nosotros
                </Link>
              </li>
              <li>
                <Link to="/conocenos" class="text-reset">
                    Nuestra visión
                </Link>
              </li>
            </ul>
            <ul className="col-12 col-md-3 list-unstyled">
              <li className="font-weigth-bold mb-2">Síguenos</li>
              <li className="d-flex justify-content-between">
                <i class="bi bi-instagram"></i>
                <i class="bi bi-facebook"></i>
                <i class="bi bi-linkedin"></i>
                <i class="bi bi-youtube"></i>
              </li>
            </ul>
            <div className="container">
                <p className="text-center mb-0 mt-2">Realizado por Nadia Antonella Ruiz - 2022</p>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
