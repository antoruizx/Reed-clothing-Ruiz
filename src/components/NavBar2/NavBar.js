import React from "react";
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
    const categories = [
        { id: 'asfadd', address: '/', text: 'Todos los productos' },
        { id: '123asf', address: '/category/Pantalones', text: 'Pantalones' },
        { id: 'sgs3q3', address: '/category/Remeras', text: 'Remeras' },
        { id: 'gkl98s', address: '/category/Abrigos', text: 'Abrigos' },
    ];

    return (
        <section style={{ background: 'lightgray' }}>
            {categories.map((cat) => {
                return (
                    <NavLink 
                    to={cat.address} 
                    className={({ isActive }) => 
                    isActive ? 'links activeClass' : 'links'
                    }
                    key={cat.id}
                    >
                        {cat.text}
                    </NavLink>
                );
            })}
        </section>
    );
};




// import React, { useState } from 'react';
// import styled from 'styled-components';
// import BurgerButton from './BurgerButton';
// import logo from '../assets/img/Logo2.png';

// export function Navbar() {
//     const [clicked, setClicked] = useState(false)

//     const handleClick = () => {
//         // cuando esta true lo pasa a false y viceversa
//         setClicked(!clicked)
//     }

//     return (
//         <>
//             <NavContainer>
//                 <h2><img src={logo}/> <span>Reed Clothing</span></h2>
//                 <div clasName={`links ${clicked ? 'active' : ''}`}>
//                     <a href="/">Home</a>
//                     <a href="/">Shop</a>
//                     <a href="/">About</a>
//                     <a href="/">Contact</a>
//                     <a href="/">Blog</a>
//                 </div>
//                 <div className='burger'>
//                     <BurgerButton clicked={clicked} handleClick={handleClick} />
//                 </div>
//                 <BgDiv className={`initial ${clicked ? 'active' : ''}`} ></BgDiv>
//             </NavContainer>
//         </>
//     )
// }


// const NavContainer = styled.nav`
//     h2 {
//         color: white;
//         font-weight: 400;
//         span {
//             font-weight: bold;
//         }
//     }
//     padding: .4rem;
//     background-color: #333;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;

//     a {
//         color: white;
//         text-decoration: none;
//         margin-right: 1rem;
//     }

//     .links {
//         position: absolute;
//         top: -700px;
//         left: -2000px;
//         right: 0;
//         margin-left: auto;
//         margin-right: auto;
//         text-align: center;
//         transition: all .6s ease;
//         a {
//             color: white;
//             font-size: 2rem;
//             display: block;
//         }
//         @media(min-width: 768px) {
//             position: initial;
//             margin: 0;
//             a {
//                 font-size: 1rem;
//                 color: white;
//                 display: inline;
//             }
//         }
//     }

//     .links.active {
//         width: 100%;
//         display: block;
//         position: absolute;
//         margin-left: auto;
//         margin-right: auto;
//         top: 30%;
//         left: 0;
//         right: 0;
//         text-align: center;
//         a {
//             font-size: 2rem;
//             margin-top: 1rem;
//             color: white;
//         }
//     }

//     .burger {
//         @media(min-width: 768px) {
//             display: none;
//         }
//     }
// `   

// const BgDiv = styled.div `
//     background-color: #222;
//     position: absolute;
//     top: -700px;
//     left: -1000px;
//     width: 100%;
//     height: 100%;
//     z-index: -1;
//     transition: all .6s ease;

//     &.active {
//         border-radius: 0 0 80% 0;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//     }
    
// `   
