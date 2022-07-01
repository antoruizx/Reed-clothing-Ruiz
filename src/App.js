import Item from "./components/Item"
import './App.css';
import NavBarComp from './components/NavBarComp';
import Body from './components/Body';
import Welcome from './components/Welcome';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
// import Card from "./components/Card"

function App() {
  return (
    <div className='cuerpo'>
      <NavBarComp />
      {/* <Welcome name="Antox"/> */}
      <Body>
      {/* <ItemListContainer initial="1" stock={6}/> */}
      </Body>
      {/* <Card/> */}
    </div>
  );
}

export default App;
