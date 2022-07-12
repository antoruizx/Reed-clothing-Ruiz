import { useState } from "react";
import '../Container/Container.css';
import CardList from "../CardList/CardList";

function Container () {
    const [cardsFetch, setCardsFetch] = useState([])

    const fetchCards = () => {
        fetch('data.json')
        .then((response) => response.json())
        .then((data) => setCardsFetch(data))
    }

    return(
        <div>
            <button onClick={fetchCards}>Ver productos</button>
            <CardList cards={cardsFetch} />
        </div>
    )
}

export default Container;