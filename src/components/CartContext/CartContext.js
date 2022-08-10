
import { createContext, useState, useContext} from "react";

/*

    Pasos para crear el contexto:
    1- Generar el archivo CartContext
    2- Crear el contexto con el hook createContext() previamente importado de react
    3- Extraer el Provider(Componente fucional) de su contexto creado en el paso anterior con destructuring
    4- Crear la función CartProvider(Componente) que llevaría como props las funciones del ---
    5- La función CartProvider debe devolver el Provider(Componente) que llevaria las funciones como props
    6- Arrmar las funciones necesarias para el carrito
*/

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = {
    addedItems: [{ name: "Remera Electra", quantity: 1 }],
    totalPrice: 0
};

export const { Provider } = CartContext 
    const Carrito = [
        {
            item: {
                name: "ropa",
                price: "$1000"
            },
            quantity: 20
        },
        {
            item: {
                name: "ropa",
                price: "$1000"
            },
            quantity: 20
        },
        {
            item: {
                name: "ropa",
                price: "$1000"
            },
            quantity: 20
        },
        {
            item: {
                name: "ropa",
                price: "$1000"
            },
            quantity: 20
        },
        {
            item: {
                name: "ropa",
                price: "$1000"
            },
            quantity: 20
        }
    ]


export const CartProvider = ({ defaultValue = [], children }) => {
    const [cart, setCart] = useState(defaultValue);

    const clearCart = () => {
        setCart([]);
    }

    const addToCart = (item, quantity) => {
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

    const context = {
        clearCart,
        addToCart
    }
    
    return (
        <Provider value= {context}>
            {children}
        </Provider>
    )
}



//////////////////////////////////////////////////////////////
// import React, {createContext, useState} from 'react';
// import getFirestore from '../FirebaseSettings';
// import firebase from "firebase/app";

// const CartContext = createContext();

// function CartContextProvider({children}){

//     //Llamado al Context de productos: 
//     const [products, setProducts] = useState([]);

//     //Elementos del comprador de la orden: 
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [confirmEmail, setConfirmEmail] = useState("");
//     const [phone, setPhone] = useState("");
//     const [compra,setCompra] = useState("");

//     //Funciones del Carrito de Compras 


//     //Agregar productos al carrito de compras: 

//     const addProduct = (datos, number) => {
    
//     const existing = products.find((p) => p.id === datos.id);

//     if (existing) {
//         // Sumo al existente
//         existing.number += number;
//         // Crea un array nuevo
//         } else {
//         setProducts([...products, { ...datos, number }]);    
//         }
//     };

//     //Borrar productos del carrito al hacer click en "X"

//     const delProduct = (id) => {
//         products.splice(
//         products.findIndex((p) => p.id === id),
//         1
//         );
//         setProducts([...products]);
//     };

//     const clearCart = () => {
//         setProducts([]);
//     }

//     //Suma de total de productos y costo total

//     const productsCount = () => {
//         return products.reduce((total, p) => (total += p.number), 0);
//     };
    
//     const getGrandTotal = () => {
//         return products.reduce((total , p) => (total += p.price * p.number), 0);
//     };

//     //Funciones para armar órdenes de compra en Firebase

//     const manejarCompra = (e) => {
//         e.preventDefault();

//         const date = firebase.firestore.Timestamp.fromDate(new Date())

//         const buyerData = {
//             buyer : {
//                 name, 
//                 phone, 
//                 email, 
//                 confirmEmail
//             }, 

//             items: products, 
//             date: date.toDate(),
//             total: getGrandTotal()
//         }

//         setCompra(buyerData);

//         const db = getFirestore();
//         const OrderCollection = db.collection("orders");
//         OrderCollection.add(buyerData)

//         .then((res) => {
//             OrderCollection.doc(res.id)
//             .get()
            
//             .then((querySnapshot) =>{
//                 if(!querySnapshot.exists){
//                     console.log("No existe")
//                 } else {
//                     setCompra({
//                         id: querySnapshot.id, 
//                         ...querySnapshot.data()
//                     })
//                 }
//             })
//             .catch(error => console.log(error))
//         })
//     }

//     return(
//         <CartContext.Provider value={{ products, addProduct, delProduct, clearCart, productsCount, getGrandTotal, setName, name, setPhone, phone, email, setEmail, setConfirmEmail, confirmEmail, manejarCompra, compra }}>
//             {children}
//         </CartContext.Provider>
//     )

// }

// export default CartContext;
// export {CartContextProvider};
