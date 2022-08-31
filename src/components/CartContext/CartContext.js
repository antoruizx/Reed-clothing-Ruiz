
import { createContext, useState, useContext } from "react";

/*

    Pasos para crear el contexto:
    1- Generar el archivo CartContext
    2- Crear el contexto con el hook createContext() previamente importado de react
    3- Extraer el Provider(Componente fucional) de su contexto creado en el paso anterior con destructuring
    4- Crear la función CartProvider(Componente) que llevaría como props las funciones del ---
    5- La función CartProvider debe devolver el Provider(Componente) que llevaria las funciones como props
    6- Arrmar las funciones necesarias para el carrito
*/

export const CartContext = createContext ({})

const {Provider} = CartContext

// const ejemploCarrito = [
//     {
//         item: {
//             name: 'ropa',
//             precio: '$1000'
//             id: 1
//         },
//         quantity: 5
//     },
//     {
//         item: {
//             name: 'ropa',
//             precio: '$1000'
//             id: 2
//         },
//         quantity: 5
//     }
// ]

export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);
    
    const clearCart = () => {
        setCart([]);
    }

    const addToCart = (item, quantity) => {
        console.log(item)
        if(isInCart(item.id)) {//verificar si el producto existe en el carrito
            const newCart = [...cart] //hacemos copia del carrito con spread operator
            for(const element of newCart) {// busca que producto del carrito coincide con el producto qu estoy agregando
                if(element.item.id === item.id) {
                    element.quantity = element.quantity + quantity; // cuando se encuenta, le sumamos la cantidad
                }
            }
            setCart(newCart);
        } else {
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
    }
    const isInCart = (id) => {
        return cart.find((element) => element.item.id === id)
    }

    const removeFromCart = (id) => {
        const newCart = [...cart].filter(element => element.item.id !== id);
        setCart(newCart);
    }

    // const getQuantity = () => {
    // let cantidad = 0
    // cart.forEach((element) => cantidad = cantidad + element.quantity)
    //  return cantidad
    // }

    // const getTotal = () => {
    // let total = 0
    // cart.forEach((element) => {
    //  total = total + (element.quantity * element.item.price)
    //})
    // return total
    //}

    const context = {
        cart,
        clearCart,
        addToCart,
        removeFromCart
        //getQuantity,
        //getTotal
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
}












// export const CartContext = createContext();

// export const useCart = () => useContext(CartContext);

// const INITIAL_STATE = {
//     addedItems: [{ name: "Remera Electra", quantity: 1 }],
//     totalPrice: 0
// };

// export const { Provider } = CartContext 
//     const Carrito = [
//         {
//             item: {
//                 name: "ropa",
//                 price: "$1000"
//             },
//             quantity: 20
//         },
//         {
//             item: {
//                 name: "ropa",
//                 price: "$1000"
//             },
//             quantity: 20
//         },
//         {
//             item: {
//                 name: "ropa",
//                 price: "$1000"
//             },
//             quantity: 20
//         },
//         {
//             item: {
//                 name: "ropa",
//                 price: "$1000"
//             },
//             quantity: 20
//         },
//         {
//             item: {
//                 name: "ropa",
//                 price: "$1000"
//             },
//             quantity: 20
//         }
//     ]


// export const CartProvider = ({ defaultValue = [], children }) => {
//     const [cart, setCart] = useState(defaultValue);

//     const clearCart = () => {
//         setCart([]);
//     }

//     const addToCart = (item, quantity) => {
//         setCart(
//             [
//                 ...cart,
//                 {
//                     item: item,
//                     quantity: quantity
//                 }
//             ]
//         )
//     }

//     const context = {
//         clearCart,
//         addToCart
//     }
    
//     return (
//         <Provider value= {context}>
//             {children}
//         </Provider>
//     )
// }

