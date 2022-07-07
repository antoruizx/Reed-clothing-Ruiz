import './App.css';
import NavBarComp from './components/NavBar/NavBarComp';
import Body from './components/Body/Body';
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import { Routes, Route } from "react-router-dom";
import Container from "./components/Container/Container";
import Detail from "./components/Detail/Detail"
// import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className='cuerpo'>
      <NavBarComp />
      <hr></hr>
      <Routes>
        <Route exact path="/" element={<Container />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route exact path="/producto/:characterId" element={<Detail />}></Route>
        {/* <Route path="*" element={<NotFound />}></Route> */}
      </Routes>
      <hr></hr>
      <Body />
    </div>
  );
}

export default App;
