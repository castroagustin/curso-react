import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { CartProvider } from './contexts/CartContext';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Cart from './components/Cart';

const App = () => {

  const [products, setProducts] = useState(null);

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, 'items');

    getDocs(itemsCollection).then(snapshot => {
      setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
  }, [])


  /*   const filterProds = (prods) => {
      return currentCategory === '' ? prods : prods.filter(prod => prod.category === currentCategory);
    } */

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer data={products} />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/categorias/:categoryName' element={<ItemListContainer data={products} />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>

        {/* <ItemCount stock='15' initial='1' /> */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
