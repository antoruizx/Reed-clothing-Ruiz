import { Card, CardImg, Button} from 'react-bootstrap';
import './Card.css';
import ItemCount from './ItemCount';

function Cards(props) {
    return (
        <div className="cards-container">
            <div className="cards-container__div">
            <Card style={{ width:'18rem' }}>
                <CardImg variant="top" src='./Logo.png'/>
                <Card.Body>
                    <Card.Title>Producto{props.name}</Card.Title>
                    <Card.Text>{props.description}Esto es una descripción</Card.Text>
                    <Card.Text>{props.price}</Card.Text>
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