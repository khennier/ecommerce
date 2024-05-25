import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../assets/cart_cross_icon.png';

const CartItems = () => {
  const { all_product, cartItems, addToCart, removeFromCart, decreaseQuantity } = useContext(ShopContext);

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Producto</p>
        <p>Título</p>
        <p>Precio</p>
        <p>Cantidad</p>
        <p>Total</p>
        <p>Remover</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id} className="cartitems-format">
              <img src={e.image} alt={e.name} className='cartitem-product-icon' />
              <p>{e.name}</p>
              <p>${e.new_price.toFixed(2)}</p>
              <div className='cartitems-quantity'>
                <button onClick={() => decreaseQuantity(e.id)}>-</button>
                <span>{cartItems[e.id]}</span>
                <button onClick={() => addToCart(e.id)}>+</button>
              </div>
              <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
              <img src={remove_icon} onClick={() => { removeFromCart(e.id); }} alt="Remove item" className='cartitem-remove-icon' />
            </div>
          );
        }
        return null; // Ensure we don't render anything if the condition is not met
      })}
    </div>
  );
}

export default CartItems;
