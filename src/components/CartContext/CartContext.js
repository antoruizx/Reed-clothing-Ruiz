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

const {Provider} = CartContext
    // const ejemploCarrito = [
    //     {

    //     }
    // ]

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart,setCart] = useState(defaultValue);

    const clearCart = () {
        setCart([]);
    }

    const addToCart = (item, quantity) => {
        console.log(item)
        if(isInCart(item.id))
            const newCart = [...cart] 
                for(const element of newCart) {
                    if(element.item.id === item.id) {
                        element.quantity = element.quantity + quantity;
                    }
                }
                setCart(newCart); 
        } else{
            setCart(
                [
                    ...cart,
                    {
                        item: item,
                        quantity: quantity
                    }
                ]
            )
        }
};

const isInCart = (id) => {
    return cart.find((element) => element.item.id === id)
}

const removeFromCart = (id) => {
    const newCart = [...cart].filter(element => element.item.id !== id)
}

const context = {
    cart,
    clearCart,
    addToCart
}