import React from 'react';
import cartPNG from '../../resources/icons/shopping-cart.png'
import "./CartIcon.css";

const CartIcon = () => {
  return <img src={cartPNG} alt='cartPNG' className='cartIcon'></img>
};

export default CartIcon;
