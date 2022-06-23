import './ItemListContainer.css';
import { CardGroup, Card, Button, Container } from 'react-bootstrap';

function ItemListContainer() {
    return (
        <div>
            <Container>
            <CardGroup>
                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <Card.Title>Remera</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>Card subtitle</Card.Subtitle>
                        <Card.Text>
                            lorsdfjsdhufn ijsoidfjsidf soiffjsdif noifnho sjdofij
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                </Card>

                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <Card.Title>Pantalon</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>Card subtitle</Card.Subtitle>
                        <Card.Text>
                            lorsdfjsdhufn ijsoidfjsidf soiffjsdif noifnho sjdofij
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <Card.Title>Campera</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>Card subtitle</Card.Subtitle>
                        <Card.Text>
                            lorsdfjsdhufn ijsoidfjsidf soiffjsdif noifnho sjdofij
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <Card.Title>Tops</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>Card subtitle</Card.Subtitle>
                        <Card.Text>
                            lorsdfjsdhufn ijsoidfjsidf soiffjsdif noifnho sjdofij
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <Card.Title>Sombrero</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>Card subtitle</Card.Subtitle>
                        <Card.Text>
                            lorsdfjsdhufn ijsoidfjsidf soiffjsdif noifnho sjdofij
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                </Card>
                <Card style={{width: '10rem'}}>
                    <Card.Body>
                        <Card.Title>Gafas</Card.Title>
                        <Card.Subtitle className='mb-2 text-muted'>Card subtitle</Card.Subtitle>
                        <Card.Text>
                            lorsdfjsdhufn ijsoidfjsidf soiffjsdif noifnho sjdofij
                        </Card.Text>
                        <Button variant='primary'>Go somewhere</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            </Container>
            
        </div>
    
    );
}

export default ItemListContainer;