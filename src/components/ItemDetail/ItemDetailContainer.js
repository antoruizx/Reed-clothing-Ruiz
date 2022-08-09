import React, { useState, useEffect } from 'react';
import { ItemDetail } from './ItemDetail';
import { data } from '../Products/ProductsList';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    // const [isLoading, setIsLoading ] = useState(true);
    const { iditem } = useParams({});

    useEffect ( () => {
        // setIsLoading(true);
        //Le doy tiempo de 1000ms
        const getItems = new Promise((resolve) => {
            setTimeout(() => {
                const myData = data.find((item) => item.id === iditem);

                resolve(myData);
            }, 1000);
            });
            
            getItems.then((res) => {
                setProduct(res);
                // setIsLoading(false);
            });
    }, []);

    return <ItemDetail {...product} />;
};

