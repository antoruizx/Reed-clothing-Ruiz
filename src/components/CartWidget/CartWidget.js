import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export function CartWidget () {
    return (
        <div className='icons'>
            <Link to="/cart" className='icons'>
                <FontAwesomeIcon icon={faCartShopping}/>
            </Link>
        </div>
    );
};