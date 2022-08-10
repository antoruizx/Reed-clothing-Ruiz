import './ItemCount.css';
import { useState, useContext, useEffect } from "react";
import { CartContext } from '../CartContext/CartContext';
import { Button, Container, Row, Col } from 'react-bootstrap';



export const ItemCount = ({ onAdd }) => {
    const initial = 1;
    const stock = 5;
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
        if (count > 1);
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

// export function ItemCount ({ stock=5, initial=1 }) { 
//     const [num, setNum] = useState(initial);
//     const [disableBotonMas, setDisableBotonMas] = useState(false);
//     const [disableBotonMenos, setDisableBotonMenos] = useState(true);

//     const sumar = () => {
//         setDisableBotonMenos(false)
//         if (num === (stock-1)) {
//             setDisableBotonMas(true)
//         }
//         setNum(num + 1 )
//         // else {
//         //     alert(`El stock de este producto es de: ${stock} unidades!`)
//         // }
//     }

//     const restar = () => {
//         setDisableBotonMenos(false)
//         if(num === 1) {
//             setDisableBotonMenos(true)
//         }
//         setNum(num - 1 )
//     }

//     return (
//         <>
//             <Container fluid>
//                 <Row xs="auto" md="auto" className="rounded-3 justify-content-center">
//                     <>
//                     <Col><Button variant="outline-primary" size="sm" onClick={restar} disabled={disableBotonMenos}> - </Button></Col>
//                     <Col><p className="ItemCount">{num}</p></Col>
//                     <Col><Button variant="outline-primary" size="sm" onClick={sumar} disabled={disableBotonMas}> + </Button></Col>
//                     </>
                    
//                 </Row>
//             </Container>
//         </>
//     );
// };
