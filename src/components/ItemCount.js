import './ItemCount.css';
import { useState } from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';


function ItemCount ({ stock=5, initial=1 }) { 
    const [num, setNum] = useState(initial);
    const [disableBotonMas, setDisableBotonMas] = useState(false);
    const [disableBotonMenos, setDisableBotonMenos] = useState(true);

    const sumar = () => {
        setDisableBotonMenos(false)
        if (num === (stock-1)) {
            setDisableBotonMas(true)
        }
        setNum(num + 1 )
        // else {
        //     alert(`El stock de este producto es de: ${stock} unidades!`)
        // }
    }

    const restar = () => {
        setDisableBotonMenos(false)
        if(num === 1) {
            setDisableBotonMenos(true)
        }
        setNum(num - 1 )
    }

    return (
        <>
            <Container fluid>
                <Row xs="auto" md="auto" className="rounded-3 justify-content-center">
                    <p> {stock} unidades disponibles!</p>
                    <Col><Button variant="outline-primary" size="sm" onClick={restar} disabled={disableBotonMenos}> - </Button></Col>
                    <Col><p className="ItemCount">{num}</p></Col>
                    <Col><Button variant="outline-primary" size="sm" onClick={sumar} disabled={disableBotonMas}> + </Button></Col>
                </Row>
            </Container>
        </>
    )
}

export default ItemCount;