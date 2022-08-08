import React from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import { useCart } from "../CartContext/CartContext";
import "./card-style.css";

export const Item = ({ id, name, category, image, price }) => {
  const cart = useCart();

  console.log(cart);

  const addNewProduct = () => {
    cart.addItem({ name: "Remera Electra", price: 10.0});
  };
  
  return (
    <Link to={`/item/${id}`}>
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={image} alt={name} className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{name}</h4>
          <h3 className="card-title">${price}</h3>
          <p className="card-text text-secondary">
            Categoría: {category}
          </p>
          <ItemCount />
          <Button onClick={addNewProduct} variant="primary" className="btn btn-outline">
            Agregar al carrito
          </Button>
        </div>
      </div>
    </Link>
  );
};
