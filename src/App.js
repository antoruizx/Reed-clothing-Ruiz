import React from "react";
import "./App.css";

import { NavBarComp } from "./components/NavBar/NavBarComp";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card2 from "./components/Card2/CardUI";
import Cards from "./components/Card2/Cards";

function App() {
  return (
    <>
    <Card2 />
    </>
    // <BrowserRouter>
    //   <NavBarComp />

    //   <Routes>
    //     <Route path="/" element={<ItemListContainer greeting={'HOME'} />} />
    //     <Route
    //       path="/category/:idcategoria"
    //       element={<ItemListContainer greetig={'FILTRADO'} />}
    //     />
    //     <Route path="/item/:iditem" element={<ItemDetailContainer />} />
    //     // {/* <Route path="*" element={<NotFound />}></Route> */}
    //     <Route path="*" element={<h1>No se encontro la ruta</h1>} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
