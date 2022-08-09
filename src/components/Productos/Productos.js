import React from "react";
import "../Productos/Productos.css";

export const Productos = ({ productItems}) => {
    return (
        <div className="products">
            {productItems.map((productItem) => (
                <div className="card">
                    <div>
                        <img
                            className="product-image"
                            src={productItem.img}
                            alt={productItem.name}
                        />
                    </div>

                    <div>
                        <h3 className="product.name">
                            {productItem.name}
                        </h3>
                    </div>

                    <div className="product-price">
                        ${productItem.price}
                    </div>

                    <div className="product-add-button">
                        <button className="product-add-button">Añadir al carrito</button>
                    </div>
                </div>
            ))}
        </div>
    );
};