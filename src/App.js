
import './App.css';
import NavBarComp from './components/NavBarComp';
import Body from './components/Body';
import Welcome from './components/Welcome';


function App() {
  return (
    <div>
      <NavBarComp />
      <Welcome name="Antox"/>
      <Body/>
    </div>
  );
}

export default App;
