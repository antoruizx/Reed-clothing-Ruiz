import { useEffect, useState }  from "react";
import Card from './Card';


function ItemList() {
    const [info, setProducts] = useState([])

    useEffect( () => {
        setTimeout (
            () => {
                fetch('products.json')
                    .then((resp) => resp.json())
                    .then((data) => setProducts(data))
            }, 3000
        )
    }, [] );

    console.log(info)

    return(
        <div>
            {info && info.map(i => <Card name={i.name} price={i.price} />)}
        </div>
    );
}

export default ItemList;