import './App.css';
import NavBar from './components/navbar/navbar';
import ItemList from './components/itemList/itemList';
import ItemCount from './components/itemCount/itemCount';

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
