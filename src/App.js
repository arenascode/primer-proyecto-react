import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting='Categorias' />
      <ItemCount/>
      <Hero/>
    </div>
  );
}

export default App;
