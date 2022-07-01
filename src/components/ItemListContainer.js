import { useState, useEffect } from "react";
import './ItemListContainer.css';
import { CardGroup, Card, Button, Container } from 'react-bootstrap';
import ItemCount from './ItemCount.js';
import ItemList from "./ItemList";
import Item from "./Item"

function ItemListContainer() {
    const [products, setProducts] = useState([])

    useEffect( () => {
        setTimeout (
            () => {
                fetch('public/data.json')
                    .then(resp => resp.json())
                    .then(data => setProducts(data))
            }, 3000)
    });

    return (
        <section>
            <div classsName="cards-container">
            <Container className="cards-container__div">
                <div>
                    <h1>Catalogo de productos</h1>
                    <a href="/">Ver más</a>
                </div>
                <div>
                    {products.map(
                        i => <Item name={i.name} description={i.description} stock={i.stock} price={i.price} /> 
                    )}
                </div>
               
            {/* <CardGroup>
                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <img src="./assets/img/1.jpg"></img>
                        <Card.Title>Remera</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>$2000</Card.Subtitle>
                        <Card.Text>
                            Esto es una descripción
                        </Card.Text>
                        <ItemCount/>
                        <Button variant='primary'>Agregar al carrito</Button>
                    </Card.Body>
                </Card>
               
               <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <img src="./assets/img/1.jpg"></img>
                        <Card.Title>Pantalon</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>$4500</Card.Subtitle>
                        <Card.Text>
                        Esto es una descripción
                        </Card.Text>
                        <ItemCount/>
                        <Button variant='primary'>Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                
                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <img src="./assets/img/1.jpg"></img>
                        <Card.Title>Campera</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>$5600</Card.Subtitle>
                        <Card.Text>
                        Esto es una descripción
                        </Card.Text>
                        <ItemCount/>
                        <Button variant='primary'>Agregar al carrito</Button>
                    </Card.Body>
                </Card>
                
                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <img src="./assets/img/1.jpg"></img>
                        <Card.Title>Tops</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>$1600</Card.Subtitle>
                        <Card.Text>
                        Esto es una descripción
                        </Card.Text>
                        <ItemCount/>
                        <Button variant='primary'>Agregar al carrito</Button>
                    </Card.Body>
                </Card>

                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <img src="./assets/img/1.jpg"></img>
                        <Card.Title>Sombrero</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>$3400</Card.Subtitle>
                        <Card.Text>
                        Esto es una descripción
                        </Card.Text>
                        <ItemCount/>
                        <Button variant='primary'>Agregar al carrito</Button>
                    </Card.Body>
                </Card>

                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <img src="./assets/img/1.jpg"></img>
                        <Card.Title>Gafas</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>$2300</Card.Subtitle>
                        <Card.Text>
                        Esto es una descripción
                        </Card.Text>
                        <ItemCount/>
                        <Button variant='primary'>Agregar al carrito</Button>
                    </Card.Body>
                </Card>
            </CardGroup> */}
            </Container>
            
        </div>
        </section>
        
    
    );
}

export default ItemListContainer;