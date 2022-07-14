import React, { useState } from "react";
import Card2 from "../Items2/Item2";

import img1 from '../assets/img/jean.jpg';
import img2 from '../assets/img/buzo-blanco.jpg';
import img3 from '../assets/img/buzo.jpg';
import img4 from '../assets/img/buzoannie.jpg';
import img5 from '../assets/img/camisas.jpg';
import img6 from '../assets/img/conjunto.jpg';
import img7 from '../assets/img/gafas.jpg';
import img8 from '../assets/img/jeans-2.jpg';
import img9 from '../assets/img/remera.jpg';
import img10 from '../assets/img/remeras.jpg';


const ProductsList = () => {
  const [products, setProducts] = useState ([
      {
        id: 1,
        name: "Remera Electra",
        category: "Remeras",
        image: {img1},
        description: "Remera roja unisex",
        price: 2500,
      },
      {
        id: 2,
        name: "Jean Mom and Dad",
        category: "Pantalones",
        image: {img2},
        description: "Pantalon jean oversize unisex",
        price: 4700,
      },
      {
        id: 3,
        name: "Buzo green star",
        category: "Abrigos",
        image: {img3},
        description: "Buzo oversize unisex varios colores",
        price: 3500,
      },
      {
        id: 4,
        name: "Piluso Dexter",
        category: "Gorros",
        image: {img4},
        description: "Gorro piluso bicolor",
        price: 1500,
      },
      {
        id: 5,
        name: "Buzos Clicka",
        category: "Abrigos",
        image: {img5},
        description: "Buzos de hilo mujer",
        price: 2700,
      },
      {
        id: 6,
        name: "Buzos Clicka",
        category: "Abrigos",
        image: {img6},
        description: "Buzos de hilo mujer",
        price: 2700,
      },
      {
        id: 7,
        name: "Buzos Clicka",
        category: "Abrigos",
        image: {img7},
        description: "Buzos de hilo mujer",
        price: 2700,
      },
      {
        id: 8,
        name: "Buzos Clicka",
        category: "Abrigos",
        image: {img8},
        description: "Buzos de hilo mujer",
        price: 2700,
      },
      {
        id: 9,
        name: "Buzos Clicka",
        category: "Abrigos",
        image: {img9},
        description: "Buzos de hilo mujer",
        price: 2700,
      },
      {
        id: 10,
        name: "Buzos Clicka",
        category: "Abrigos",
        image: {img10},
        description: "Buzos de hilo mujer",
        price: 2700,
      },
    ]);

    return <div className="row">
      {products.map((product) => {
        return (
          <Card2 
            key={product.id} 
            name={product.name} 
            img={product.img} 
            price={product.price} />
        );
      })}
    </div>;
};

export default ProductsList;