import React from 'react';

export const Item = ({ id, name, category, image, price }) => {
    return (
        <div className={`item_card ${category}-category`}>
            <span>{name}</span>
            <span>Categoría: {category}</span>
            <span>
                {/* <img src={img} alt={name} className={'small-img'} /> */}
            </span>
            <span>${price}</span>
        </div>
      );
};
