import {Container, Row} from 'react-bootstrap';
import Item from '../Item/Item';
import './ItemList.css';

function ItemlList({props}) {

    return (
        <Container fluid="md">
            <Row className="justify-content-md-center">
                {props.cards.map((card) => (
                        <Card 
                        name={card.name}
                        price={card.price}
                        description={card.description}
                        />
                ))}
            </Row>
        </Container>
          );
}

export default ItemlList;

// import './CardList.css';
// import Card2 from '../Card2/Card2';
// import '../Container/Container';

// function CardList(props) {
//     return(
//         <div className='cards-list'>
//             {props.cards.map((card)=> (
//                 <Card2
//                     name={card.name}
//                     price={card.price}
//                     description={card.description}
//                 />
//             ))}
//         </div>
//     )
// }

// export default CardList;