import React from 'react';
import ReactDOM from 'react-dom/client'; // Corregir la importación de ReactDOM
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ShopContextProvider from './Context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
);

reportWebVitals();
