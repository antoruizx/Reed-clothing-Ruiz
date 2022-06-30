import { Card, CardImg, Button} from 'react-bootstrap';
import './Card.css';
import ItemCount from './ItemCount';

function Cards(props) {
    return (
        <Card style={{ width:'18rem' }}>
            <CardImg variant="top" src={props.img}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                {/* <Item /> */}
                <Button variant="primary">{props.price}</Button>
                <ItemCount initial={1} stock={5}/>
            </Card.Body>
        </Card>
    );
}

export default Cards;