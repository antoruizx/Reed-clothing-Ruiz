import React, { useState, useEffect, useParams } from 'react';
import Cards from '../ItemList/ItemList2';
import ProductsList from '../Products/ProductsList';

const ItemListContainer = ({ greeting }) => {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading]= useState(true);
    const { idcategoria } = useParams();

    useEffect( () => {
        const getItems = new Promise((resolve) => {
            setTimeout ( () => {
                const myData = idcategoria 
                ? ProductsList.filter((item) => item.category === idcategoria)
                : ProductsList;
                
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
                <Cards items={items} />
            </div>
    );
};

export default ItemListContainer;