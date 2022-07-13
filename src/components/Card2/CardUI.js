import React from 'react';
// import { Link } from 'react-router-dom';
import img1 from '../assets/img/buzos.jpg';
import "../Card2/card-style.css";

const Card2 = props => {
    return(
        <div className='card text-center'>
            <div className='overflow'>
                <img src={img1} alt='Image 1' className='card-img-top'/>
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-text text-secondary'>Card Title</h4>
                <p className='card-text text-secondary'>
                    Lorem oandoiahsodfuba ahdfouiahsdb a oahfuoa aouashduiashd afaoihsdouiahof
                </p>
                {/* <Link to={'data.json'} className="btn btn-outline-sucess">Go Anywhere</Link> */}
                <a href='#' className='btn btn-outline-sucess'>Go Anywhere</a>
            </div>    
        </div>
    );
};

export default Card2;