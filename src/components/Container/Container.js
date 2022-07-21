// import { useState } from "react";
// import '../Container/Container.css';
// import ItemList from "../ItemList/ItemList2";
// import { Button } from "react-bootstrap";

// export function Container () {
//     const [cardsFetch, setCardsFetch] = useState([])

//     const fetchCards = () => {
//         fetch('./Products/ProductList.js')
//         .then((response) => response.json())
//         .then((data) => setCardsFetch(data))
//     }

//     return(
//         <div>
//             <Button variant="primary" onClick={fetchCards}>Ver detalles</Button>
//             <ItemList2 cards={cardsFetch} />
//         </div>
//     );
// };