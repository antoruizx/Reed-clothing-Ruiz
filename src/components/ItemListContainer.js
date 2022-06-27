import './ItemListContainer.css';
import { CardGroup, Card, Button, Container } from 'react-bootstrap';
import ItemCount from './ItemCount.js';

function ItemListContainer() {
    return (
        <div>
            <Container>
            <CardGroup>
                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <img src="./assets/img/1.jpg"></img>
                        <Card.Title>Remera</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>$2100</Card.Subtitle>
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
            </CardGroup>
            </Container>
            
        </div>
    
    );
}

export default ItemListContainer;