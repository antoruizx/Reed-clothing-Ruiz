import React from "react";
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount/ItemCount";
import { Button } from "react-bootstrap";
import "./card-style.css";

// export const Item = ({ id, name, category, image, price }) => {
//   return (
//     <Link to={`/item/${id}`}>
//       <div className="card text-center shadow">
//         <div className="member-card"></div>
//         <div />

//         <div className="overflow thumb-lg member-thumb mx-auto">
//           <img src={image} alt={name} className="card-img-top" />
//         </div>

//         <div className="card-box text-dark">
//           <span className="card-title">{name}</span>
//           <span className="card-text text-secondary">
//             Categoría: {category}
//           </span>
//           <span className="card-text text-secondary">${price}</span>
//           <ItemCount />
//           <Button href="#" variant="primary">Agregar al carrito</Button>
//         </div>
//       </div>
//     </Link>
//   );
// };

export const Item = ({ id, name, category, image, price }) => {
  return (
    <Link to={`/item/${id}`}>
      <div className="card text-center shadow">
        <div className="overflow">
          <img src={image} alt={name} className="card-img-top" />
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{name}</h4>
          <h3 className="card-title">${price}</h3>
          <p className="card-text text-secondary">
            Categoría: {category}
          </p>
          <ItemCount />
          <Button href="#" variant="primary" className="btn btn-outline">
            Agregar al carrito
          </Button>
        </div>
      </div>
    </Link>
  );
};
