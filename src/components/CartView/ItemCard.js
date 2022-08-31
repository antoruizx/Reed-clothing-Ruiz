import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

function ItemCard({ id, texto, eliminarItem }) {
    return (
        <div className="item-contenedor">
            <div className="item-texto">
                {texto}
            </div>
            <div className="item-contenedor-iconos"
                onClick={() => eliminarItem(id)}>
                <AiOutlineCloseCircle className="item-icono" />
            </div>
        </div>
    );
}

export default ItemCard;
