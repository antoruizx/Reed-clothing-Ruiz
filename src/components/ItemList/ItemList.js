import React from "react";
import { Item } from "../Item/Item";


export const ItemList = ({ items }) => {
  return (
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
        <div className="col-md-4">
            {items?.map((item) => (
              <Item {...item} key={item.id} />
            ))}
        </div>
      </div>
    </div>
  );
};

// / import React, { Component } from 'react';
// import Card2 from './CardUI';

// import img1 from '../assets/img/jean.jpg';
// import img2 from '../assets/img/buzo-blanco.jpg';
// import img3 from '../assets/img/buzo.jpg';
// import img4 from '../assets/img/buzoannie.jpg';
// import img5 from '../assets/img/camisas.jpg';
// import img6 from '../assets/img/conjunto.jpg';
// import img7 from '../assets/img/gafas.jpg';
// import img8 from '../assets/img/jeans-2.jpg';
// import img9 from '../assets/img/remera.jpg';
// import img10 from '../assets/img/remeras.jpg';

// class Cards extends Component {
//     render() {
//         return (
//             <div className="container-fluid d-flex justify-content-center">
//                 <div className="row">
//                     <div className="col-md-4">
//                         <Card2 imgsrc={img1} title="Jean Poison"/>
//                     </div>
//                     <div className="col-md-4">
//                         <Card2 imgsrc={img2} title="Buzo White Dream" />
//                     </div>
//                     <div className="col-md-4">
//                         <Card2 imgsrc={img3} title="Buzo Freedom"/>
//                     </div>
//                     <div className="col-md-4">
//                         <Card2 imgsrc={img4} title="Buzo Annie"/>
//                     </div>
//                     <div className="col-md-4">
//                         <Card2 imgsrc={img5} title="Camisa New Point"/>
//                     </div>
//                     <div className="col-md-4">
//                         <Card2 imgsrc={img6} title="Conjunto Stella"/>
//                     </div>
//                     <div className="col-md-4">
//                         <Card2 imgsrc={img7} title="Gafas Tentation"/>
//                     </div>
//                     <div className="col-md-4">
//                         <Card2 imgsrc={img8} title="Jean Cute Mom "/>
//                     </div>
//                     <div className="col-md-4">
//                         <Card2 imgsrc={img9} title="Remera Nice Basic"/>
//                     </div>
//                     <div className="col-md-4">
//                         <Card2 imgsrc={img10} title="Remera Pixels"/>
//                     </div>
//                 </div>
//             </div>
//         );
//     };
// };

// export default Cards;
