import { Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import React from 'react';
import { Link } from 'react-router-dom';
import "./card-style.css";
import img from '../assets/img/buzoannie.jpg';

export const Card2 = ({ id, name, category, price }) => {
    return(
        <Link to={`/item/${id}`}>
            <div class="col-lg-4">
            <div className='card text-center shadow'>
                <div className='overflow'>
                    <img src={img} alt='Image 1' className='card-img-top'/>
                </div>
                <div className='card-body text-dark'>
                    <h3 className='card-title'>{name}</h3>
                    <h4 className='card-text text-secondary'>${price}</h4>
                    <p className='card-text text-secondary'>
                    Lorem oandoiahsodfuba ahdfouiahsdb a oahfuoa aouashduiashd afaoihsdouiahof
                    </p>
                    <Button variant="primary">Ver detalles</Button>
                    {/* <Link to={'data.json'} className="btn btn-outline-sucess">Go Anywhere</Link> */}
                    <ItemCount initial={1} stock={5}/>
                    <Button variant="primary">Agregar al carrito</Button>
                </div>    
            </div>

            </div>
            
        </Link>
    );
};

export default Card2;