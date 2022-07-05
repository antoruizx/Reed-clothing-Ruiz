import Card from 'react-bootstrap/Card';
// import logo from '/src/holis.png';
import ItemCount from './ItemCount'
import './Item.css'

function Item({producto}) {
    return (
        <Card
            bg={'primary'}
            key={producto.id}
            text={'white'}
            style={{ width: '15rem' }}
            className="mb-2 mx-2"
            >
                <Card.Header>
                    <div><Card.Img variant="top" className="imagenCard"/></div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{producto.nombre}</Card.Title>
                    <Card.Text>{producto.descripcion}</Card.Text>
                    <Card.Text>$ {producto.precio}</Card.Text>
                    <Card.Text>Stock: {producto.stock}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <ItemCount stock={producto.stock} initial={producto.initial}/>
                </Card.Footer>
        </Card>
      );
}

export default Item;