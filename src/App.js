import './App.css';
import NavBar from './components/navbar/navbar';
import ItemList from './components/itemList/itemList';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemList />
    </div>
  );
}

export default App;
