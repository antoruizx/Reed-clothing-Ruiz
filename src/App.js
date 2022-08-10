import React from "react";
import "./App.css";

import { Navbar } from "./components/NavBar2/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext/CartContext";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:idcategoria"
            element={<ItemListContainer />}
          />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
