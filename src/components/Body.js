import { useEffect, useState } from 'react';
import './Body.css';
import Cards from './Card';
import Item from './Item'

function Body() {

    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('data.json') // Trae el Response completo
        .then((resp) => resp.json()) //Extrae la informacion a utilizar de dentro del Response
        .then((data) => setInfo(data)) 
        .catch () // Setear esa informacion en nuestro State
    }, [])

    return (
        <section className='body'>
            <div>
            <h2>Catalogo de productos</h2>
            <p>Elegi tus productos de esta lista:</p>
            </div>
            <div className='catalogo'>
                {info && info.map(i => <Cards product={i.name} price={i.price} />)}
            </div>
            <a href="/">Ver más</a>
        </section>
    );
  }

  export default Body;
