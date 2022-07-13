import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function CartWidget () {
    return (
        <div className='icons'>
            <a href="#" className='icons'>
                <FontAwesomeIcon icon={faCartShopping}/>
            </a>
            <span classsName='cantItem'>5</span>
        </div>
    );
}

export default CartWidget;