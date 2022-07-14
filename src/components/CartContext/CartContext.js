import { createContext, useState } from "react";

/*

    Pasos para crear el contexto:
    1- Generar el archivo CartContext
    2- Crear el contecto con el hook createContext() previamente importado de react
    3- Extraer el Provider(Componente fucional) de su contexto creado en el paso anterior con destructuring
    4- Crear la función CartProvider(Componente) que llevaría como props las funciones del ---
    5- La función CartProvider debe devolver el Provider(Componente) que llevaria las funciones como props
    6- Arrmar las funciones necesarias para el carrito
*/

export const CartContext = createContext({})

const (Provider) = CartContext


export const CartProvider = ({ defaultValue = [], children ) => {
    
}