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
  const [nuevoProducto, setNuevoProducto] = useState([]);

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

    const productsRef = query(collection(db, "products"));

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
