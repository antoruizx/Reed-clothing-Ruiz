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
                        <Link to="/">Home</Link>
                    </li>    
                </ul>
                <ul>
                    <li>
                        <Link to="/signup">Signup</Link>
                    </li>    
                </ul>
                <ul>
                    <li>
                       <CartWidget />
                    </li>    
                </ul>
            </div>
        </header>
    );
};
