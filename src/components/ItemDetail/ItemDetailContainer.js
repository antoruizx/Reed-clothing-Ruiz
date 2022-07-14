import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import ProductsList from '../Products/ProductsList';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading ] = useState(true);
    const { idItem } = useParams({});

    useEffect ( () => {
        setIsLoading(true);
        //Le doy tiempo de 1000ms
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const myData = ProductsList.find((item) => item.id === '3');

                resolve(myData);
            }, 1000);
            });
            
            getItems.then((res) => {
                setProduct(res);
                setIsLoading(false);
            });
    }, []);

    return isLoading ? <h1>Loading...</h1> : <ItemDetail {...product} />;
};
