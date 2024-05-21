
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Shop } from './pages/Shop'
import { ShopCategory } from './pages/ShopCategory'
import { Product } from './pages/Product'
import { Cart } from './pages/Cart'
import { LoginPage } from './pages/LoginPage'
import { Footer } from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'



function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>
          <Route path='/niños' element={<ShopCategory banner={kids_banner} category="niños"/>}></Route>
          <Route path='/niñas' element={<ShopCategory banner={women_banner} category="niñas"/>}></Route>
          <Route path='/accesorios' element={<ShopCategory banner={men_banner} category="accesorios"/>}></Route>
          <Route path='product' element={<Product/>}/>
            <Route path='productId' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginPage/>}/>

        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
