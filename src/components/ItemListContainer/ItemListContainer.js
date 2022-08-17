import React, { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
// import { data } from '../Products/ProductsList';
// import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";

import {
  getFirestore,
  doc,
  getDocs,
  collection,
  query,
  where,
  limit,
  addDoc,
  updateDoc,
  writeBatch
} from "firebase/firestore";

export function ItemListContainer() {
  const [items, setItems] = useState([]);
  const[nuevoProducto, setNuevoProducto] = useState([]);

//   const newProducts = () => {
//     const product = {
//       description: "Una descipcion",
//       price: "Un precio",
//       id: 3,
//       name: "Un nombre",
//     }

//     const db = getFirestore()

    // const batch = writeBatch(db)
    // const product = doc(db, "products", "codigoID")
    // const product2 = doc(db, "products", "codigoID2")

    // batch.update(product, { price: 2000 })
    // batch.set(product2, { id: "3"})

    // batch.commit()

    // const productsCollection = collection(db, "products")

    // addDoc(productsCollection, product).then(({ id }) => console.log(id))
    
    // updateDoc(product, { price: 2700 })
// }

    const newProducts = () => {
        fetch('data.json')
        .then((response) => response.json())
        .then((data) => setNuevoProducto(data))

        const db = getFirestore();
        const productsCollection = collection(db, "products")

        nuevoProducto.forEach((product) => {
           addDoc(productsCollection, product) 
        })
        
    }

  useEffect(() => {
    const db = getFirestore();

    const productsRef = query(collection(db, "products"), limit(20));

    getDocs(productsRef).then((snapshot) => {
      setItems(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="container">
        
        <ItemList items={items} />
        <button className="boton-vm" onClick={newProducts}>Ver más productos</button>
    </div>
  );
}
