import React from "react";
import { Productos } from "../Productos/Productos";
import { Route, Routes } from "react-router-dom";

export const Routes0 = ({ productItems }) => {
    return ( 
    <div>
        <Routes>
            <Route path="/" exact>
                <Productos productItems={productItems} />
            </Route>
        </Routes>
    </div>
    );
};