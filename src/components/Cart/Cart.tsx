import React from 'react';
import './Cart.css';

import Subtotal from '../Subtotal/Subtotal';

interface Props {}

const Cart: React.FC<Props> = () => {
  return (
    <div className='cart'>
      <div className='cart__left'>
        <img
          src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg'
          alt='Advertisement'
          className='cart__ad'
        />

        <div>
          <h2 className='cart__title'>Your Shopping Cart</h2>
        </div>
      </div>

      <div className='cart__right'>
        <Subtotal />
      </div>
    </div>
  );
};

export default Cart;
