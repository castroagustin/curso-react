import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CartProvider } from './contexts/CartContext';

const App = () => {

  const [data, setData] = useState(null);
  const [currentProd, setCurrentProd] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('');


  useEffect(() => {
    getData('JSON/booksData.json');
  }, [])


  const filterProds = (prods) => {
    return currentCategory === '' ? prods : prods.filter(prod => prod.category === currentCategory);
  }

  const getData = (dataSrc) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          fetch(dataSrc)
            .then(res => res.json())
            .then(res => {
              setData(res)
            })
        )
      }, 2000)
    })
  }

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar setCurrentCategory={setCurrentCategory} />
        <Routes>
          <Route path='/' element={<ItemListContainer data={filterProds(data)} setCurrentProd={setCurrentProd} />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer currentProd={currentProd} />} />
          <Route path='/categorias/:categoryName' element={<ItemListContainer data={filterProds(data)} setCurrentProd={setCurrentProd} />} />
        </Routes>

        {/* <ItemCount stock='15' initial='1' /> */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
