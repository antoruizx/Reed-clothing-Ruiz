import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { data } from '../data/data';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});

    useEffect ( () => {
        //Le doy tiempo de 3000ms
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const myData = data.find((item) => item.id === '3');

                resolve(myData);
            }, 1000);
            });
            
            getItems.then((res) => {
                setProduct(res);
            });
    }, []);

    return <ItemDetail {...product} />;
};
