import { useState } from "react";
import '../Container/Container.css';
import CardList from "../CardList/CardList";
import { Card, CardImg, Button} from 'react-bootstrap';

function Container () {
    const [cardsFetch, setCardsFetch] = useState([])

    const fetchCards = () => {
        fetch('data.json')
        .then((response) => response.json())
        .then((data) => setCardsFetch(data))
    }

    return(
        <div>
            <Button variant="primary" onClick={fetchCards}>Ver productos</Button>
            <CardList cards={cardsFetch} />
        </div>
    )
}

export default Container;