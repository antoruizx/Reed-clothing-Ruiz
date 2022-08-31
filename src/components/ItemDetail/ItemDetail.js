import React, { useContext, useState } from "react";
import { useCart, addToCart } from "../CartContext/CartContext";
import styled from "styled-components";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

// export const ItemDetail = ({
//   id,
//   name,
//   image,
//   description,
//   price,
// }) => {
//   const cart = useCart();

//   console.log(cart);

//   const addNewProduct = () => {
//     cart.addItem({ name: "Remera Electra", price: 10.0 });
//   };

export const ItemDetail = ({
    id,
    name,
    image,
    description,
    price,
  }) => {
  window.scrollTo(0,0)

  const { addToCart } = useContext(CartContext);

  const [purchaseCompleted, setPurchaseCompleted] = useState(false);

  const onAdd = (count) => {
    setPurchaseCompleted(true);
    // addToCart(props.item, count);

  };

  return (
    <Container>
      <div className="detail-row">
        <img src={image} alt={`${id}-${name}`} className="flex-col justify-content-center" />
        <section className="flex-col">
          <h1>{name}</h1>
          <p>{description}</p>
          <h2>${price}</h2>
          <div>
            {purchaseCompleted ? (
              <Link to="/cart" className="addCarrito">
                Ir a mi carrito
              </Link>
            ): (
              <ItemCount onAdd={onAdd}/>
            )}
          </div>
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
