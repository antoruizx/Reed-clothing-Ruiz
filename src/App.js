import React from "react";
import "./App.css";

import { Navbar } from "./components/NavBar2/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/CartContext/CartContext";
import { Header } from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./Pages/Login/Login";


export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/categorias" element={<Navbar />} />
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:idcategoria"
            element={<ItemListContainer />}
          />
          <Route path="/item/:iditem" element={<ItemDetailContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
