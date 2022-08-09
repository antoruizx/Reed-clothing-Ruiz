import React from "react";
import "./App.css";

import { Navbar } from "./components/NavBar2/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./components/CartContext/CartContext";
import { Header } from "./components/Header/Header";


export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting={"HOME"} />} />
          <Route
            path="/category/:idcategoria"
            element={<ItemListContainer greeting={"FILTRADO"} />}
          />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
