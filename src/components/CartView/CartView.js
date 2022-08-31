import React from "react";
import "./CartView.css";
import ItemCard from "./ItemCard";
import FormularioDatos from "./Formulario"; 
import ListaItemCard from "./ListaItemCard";

export function CartView({ texto }) {
    return (
        <div className="aplicacion-tareas">
            <div className="logo-reed-contenedor">
                <img 
                    src="./Logo.png"
                    className="logo-reed" />
            </div>
            <div className="lista-de-compras">
                <h1>Lista de compras</h1>
                <ListaItemCard />
            </div>
            <div className="form-datos">
                <h1>Completa tus datos</h1>
                <FormularioDatos />
            </div>
        </div>
    )
};