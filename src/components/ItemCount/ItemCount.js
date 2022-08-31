import './ItemCount.css';
import { useState, useContext, useEffect } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';



export const ItemCount = ({ onAdd }) => {
    const initial = 1;
    const stock = 10;
    const [count, setCount] = useState(initial);

    useEffect(() => {
        console.log("[useEffect] el componente se monto");
    }, []);

    useEffect(() => {
        console.log("[useEffect] el estado cambio");
    }, [count]);

    const addHandler = () => {
        console.log("se esta sumando");
        setCount(count + 1);
    };

    const removeHandler = () => {
        console.log("se esta restando");
        if(count > 1) setCount(count - 1);
    };

    return (
        <>
            <div className='Itemcount'>
                <div className='ItemCount-add'>
                    <Button variant="outline-primary" size="sm" onClick= {removeHandler}>
                        {" "}
                        -{" "}
                    </Button>
                    <strong className='count'>{ count }</strong>
                    <Button className="addButton" 
                    variant="outline-primary" 
                    size="sm" 
                    onClick= {addHandler}
                    disabled={count === stock ? true : null }
                    >
                        {" "}
                        +{" "}
                    </Button>
                </div>
                <Button className="addCarrito" 
                variant="outline-primary" 
                size="sm" 
                onClick= {() => onAdd(count)}>
                        {" "}
                        Agregar al carrito{" "}
                    </Button>
            </div>
        </>
    );
};
