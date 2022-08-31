import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./card-style.css";

export const Item = ({ id, name, img, price, description }) => {
  
  return (
    <Link className="link" to={`/item/${id}`}>
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={img} alt={name} className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{name}</h4>
          <h3 className="card-title">${price}</h3>
          <p className="card-text text-secondary">{description}</p>
          <Button variant="primary" className="btn btn-outline">
            Ver detalles
          </Button>
        </div>
      </div>
    </Link>
  );
};
