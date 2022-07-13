import React from 'react';
import { Link } from 'react-router-dom';

export const Item = ({ id, name, category, price }) => {
    return (
        <Link to={`/item/${id}`} >
            <div className={`item_card ${category}-category`}>
            <span>{name}</span>
            <span>Categoría: {category}</span>
            <span>
                <img src='/Logo.png' alt={name} className={'small-img'} />
            </span>
            <span>${price}</span>
        </div>
        </Link>
      );
};
