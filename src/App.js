import React from 'react';
import './App.css';

import { NavBarComp } from './components/NavBar/NavBarComp';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetail/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App () {

  return (
    <BrowserRouter>
      <NavBarComp />

      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'HOME'} />} />
        <Route path="/category/:idcategoria" element={<ItemDetailContainer greetig={'FILTRADO'} />} />
        <Route path="/item/:iditem" element={<ItemDetailContainer />} />
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
    </BrowserRouter>

  );
};
