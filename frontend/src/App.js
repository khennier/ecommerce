
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop'
import { ShopCategory } from './pages/ShopCategory'
import { Product } from './pages/Product'
import { Cart } from './pages/Cart'
import { LoginPage } from './pages/LoginPage'



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/niños' element={<ShopCategory category="niños"/>}></Route>
          <Route path='/niñas' element={<ShopCategory category="niñas"/>}></Route>
          <Route path='/accesorios' element={<ShopCategory category="accesorios"/>}></Route>
          <Route path='product' element={<Product/>}/>
            <Route path='productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginPage/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
