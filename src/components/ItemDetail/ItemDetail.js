import React from "react";
import { useCart } from "../CartContext/CartContext";
import { Button } from "react-bootstrap";
import styled from 'styled-components';


export const ItemDetail = ({
  id,
  name,
  category,
  image,
  description,
  price,
}) => {
  const cart = useCart();

  console.log(cart);

  const addNewProduct = () => {
    cart.addItem({ name: "Remera Electra", price: 10.0 });
  };
  return (
    <Container>
    <div className="detail-row">
      <img src={image} alt={`${id}-${name}`} className="flex-col" />
      <section className="flex-col">
        <h1>{name}</h1>
        <p>{description}</p>
        <h2>${price}</h2>
        <Button
          onClick={addNewProduct}
          variant="primary"
          className="btn btn-outline"
        >
          Agregar al carrito
        </Button>
      </section>
    </div>
    </Container>
  );
};

const Container = styled.div`
    box-shadow: 0px 0px 20px -8px rgba(0, 0, 0, 0.27);
    border-radius: 8px;
    width: 100%;
    max-width: 250px;
    overflow: hideen;
    

    img {
        width: 100%;
    }
`;