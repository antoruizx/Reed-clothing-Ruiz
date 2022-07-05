import { React, useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './ItemDetailContainer.css'
import ItemDetail from './ItemDetail';

function ItemDetailContainer () {

    const [productFetch, setProductFetch, setInfoLoaded] = useState([])

    useEffect ( () => {
        //Le doy tiempo de 3000ms
        setTimeout ( 
            () => {
                // Leo el json
            fetch('data.json', 
                {
                    headers : 
                    {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                    }
                }
            )
                .then(resp => resp.json()) //da la resp
                .then(products => {
                    setProductFetch(products.filter( item => item.id === 1))
                    setInfoLoaded(true)})
                // .catch(err => console.log(err))
        }, 3000)
    },[]);
    
    return (
        <>
            <Container fluid>
                <Row xs="auto" md="auto" className="p-3 bg-light rounded-3 justify-content-center">
                    <Col>
                        {infoLoaded && <ItemDetail productDetail={productFetch}/>}
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ItemDetailContainer;