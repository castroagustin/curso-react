import './App.css';
import NavBar from './components/NavBar';
import ItemCount from './components/ItemCount';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemDetailContainer />
      <ItemListContainer />
      <ItemCount stock='15' initial='1' />
    </div>
  );
}

export default App;
