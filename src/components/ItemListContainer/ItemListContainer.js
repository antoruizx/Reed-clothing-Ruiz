import React, { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { data } from '../Products/ProductsList';
import { useParams } from 'react-router-dom';
import "./ItemListContainer.css";

import { getFirestore, doc, getDocs, collection, query, where, limit } from "firebase/firestore"


export function ItemListContainer () {

    const [items, setItems] = useState([]);

        useEffect(() => {
            const db = getFirestore();

            const productsRef = query(collection(db, "products"), limit(20))

            getDocs(productsRef).then((snapshot) => {

                setItems(snapshot.docs.map((doc) => doc.data()))
            })
        }, [])

        return (
        <div className='container'>
            <ItemList items={items} />
        </div>
    );
};