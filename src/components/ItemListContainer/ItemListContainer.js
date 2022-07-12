import React, { useState, useEffect, useParams } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { data } from '../data/data';

export const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const { idcategoria } = useParams();

    useEffect( () => {
        const getItems = new Promise((resolve) => {
            setTimeout ( () => {
                const myData = idcategoria 
                ? data.filter((item) => item.category === idcategoria)
                : data;
                
            resolve(myData);
            }, 1000);
        });

        getItems
        .then((res) => {
            setItems(res);
        })
        .finally(() => setIsLoading (false));
    }, [idcategoria]);
    
    return isLoading ? (
        <h1>Cargando...</h1>
        ) : (
            <div>
                <h3 style={{ textAlign: 'center' }}>{greeting}</h3>
                <ItemList items={items} />
            </div>
    );
}
