import React, { useState } from "react";
import FormularioDatos from "./Formulario";
import ItemCard from "./ItemCard";
import "./ListaItemCard.css";

function ListaItemCard() {
  const [products, setProducts] = useState([]);

  const agregarItem = (item) => {
    console.log("Item agregado");
    console.log(item);
  };

  const eliminarItem = id => {
    const itemsActualizados = products.filter((product) => product.id != id);
    setProducts(itemsActualizados);
};

  return (
    <>
        <div className="items-lista-contenedor">
            {
                products.map((product) =>
                    <ItemCard 
                        texto={product.texto}
                        eliminarItem={eliminarItem}
                        id={product.id}
                    />
                )
            }
        </div>
    </>
  );
}

export default ListaItemCard;
