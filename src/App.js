
import './App.css';
import NavBarComp from './components/NavBarComp';
import Body from './components/Body';
import Welcome from './components/Welcome';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div>
      <NavBarComp />
      <Welcome name="Antox"/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
