import React from "react";
import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";
import "./Header.css";

export const Header = () => {
    return (
        <header className="header">
            <div>
                <h1 className="logo">
                    Reed
                </h1>
            </div>
            <div className="header-links">
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>    
                </ul>
                <ul>
                    <li>
                        <Link to="/categorias">Categorias</Link>
                    </li>    
                </ul>
                <ul>
                    <li>
                        <Link to="/conocenos">Conócenos</Link>
                    </li>    
                </ul>
                <ul>
                    <li>
                        <Link to="/login">Iniciar sesión</Link>
                    </li>    
                </ul>
                <ul>
                    <li>
                        <Link to="/cart"><CartWidget /></Link>
                    </li>    
                </ul>
            </div>
        </header>
    );
};
