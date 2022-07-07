import { Card, CardImg, Button} from 'react-bootstrap';
import './Card.css';
import ItemCount from '../ItemCount/ItemCount';

function Cards(props) {
    return (
        <div className="cards-container">
            <div className="cards-container__div">
            <Card style={{ width:'18rem' }}>
                <CardImg variant="top" src='./Logo.png'/>
                <Card.Body>
                    <Card.Title>Producto{props.name}</Card.Title>
                    <Card.Text>Descripcion{props.description}</Card.Text>
                    <Card.Text>Precio: ${props.price}</Card.Text>
                    <ItemCount initial={1} stock={5}/>
                    {/* <Item /> */}
                    <Button variant="primary">Agregar al carrito</Button>
                </Card.Body>
            </Card>
            </div>

        </div>
        
    );
}

export default Cards;