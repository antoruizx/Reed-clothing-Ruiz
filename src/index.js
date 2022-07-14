import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Cards from './components/Items2/ItemList2';
import NavBarComp from './components/NavBar/NavBarComp';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsList from './components/Products/ProductsList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <NavBarComp />
        <ProductsList />
        <Routes>
          <Route exact path="/" component={App} />
          <Route path="/item/:iditem" component={ItemDetailContainer} />
          <Route path="/category/:idcategoria" component={ItemListContainer}/>
        </Routes>
        
      </Router>  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
