import './App.css';
import NavBar from './components/NavBar';
import ItemList from './components/ItemList';
import ItemCount from './components/ItemCount';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemList />
      <ItemCount stock='15' initial='1' />
    </div>
  );
}

export default App;
