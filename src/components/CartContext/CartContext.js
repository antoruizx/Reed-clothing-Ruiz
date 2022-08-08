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

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(INITIAL_STATE);

    const addItem = (item) => {

        if(cart.addedItems.some((addedItem) => addedItem.name === item.name)) {
            // ya existe el item, hacer algo
            return;
        }

        const newAddedItems = cart.addedItems.map((product) => {
            if (product.name === "Remera Electra") return { ...product, quantity: 2 };
            
            return product;
        });

        setCart({ ...cart, addedItems: newAddedItems });
        
    };
};
