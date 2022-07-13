import { Card, Button} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
// import { Link } from 'react-router-dom';
import "../Card2/card-style.css";

const Card2 = props => {
    return(
        <div className='card text-center shadow'>
            <div className='overflow'>
                <img src={props.imgsrc} alt='Image 1' className='card-img-top'/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'>{props.title}</h4>
                <p className='card-text text-secondary'>
                    Lorem oandoiahsodfuba ahdfouiahsdb a oahfuoa aouashduiashd afaoihsdouiahof
                </p>
                {/* <Link to={'data.json'} className="btn btn-outline-sucess">Go Anywhere</Link> */}
                <ItemCount initial={1} stock={5}/>
                    {/* <Item /> */}
                    <Button variant="primary">Agregar al carrito</Button>
            </div>    
        </div>
    );
};

export default Card2;