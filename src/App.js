
import './App.css';
import NavBarComp from './components/NavBarComp';
import Body from './components/Body';
import Welcome from './components/Welcome';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';

function App() {
  return (
    <div className='cuerpo'>
      <NavBarComp />
      <Welcome name="Antox"/>
      <ItemListContainer initial="0" stock="20"/>
    </div>
  );
}

export default App;
