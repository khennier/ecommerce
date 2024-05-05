
import './App.css';
import { NavBar } from './components/navbar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop'


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Shop/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
