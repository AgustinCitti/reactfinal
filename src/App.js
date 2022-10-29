
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Router} from "react-router-dom";
import ContactoPage from './components/Contacto/Contacto';
import Products from './components/Producto/Products';
import {CartProvider} from './Context/CartContext';
import CartContainer from './components/CartContainer/CartContainer';


function App() {
  
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>}></Route>
            <Route path='/productos' element={<Products/>}></Route>
            <Route path='/contacto' element={<ContactoPage/>}></Route>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}></Route>
            <Route path='/item/:productId' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<CartContainer/>}></Route>
          </Routes>
          {/*<ItemDetailContainer/>*/}
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
