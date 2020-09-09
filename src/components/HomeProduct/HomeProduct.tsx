import React from 'react';
import './HomeProduct.css';

import { StarRate } from '@material-ui/icons';

interface Props {}

const HomeProduct: React.FC<Props> = (props) => {
  return (
    <div className='homeProduct'>
      <div className='homeProduct__info'>
        <p>The lean startup</p>
        <p className='homeProduct__price'>
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className='homeProduct__rating'>
          <StarRate />
          <StarRate />
          <StarRate />
        </div>
      </div>

      <img
        src='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'
        alt=''
        className='homeProduct__img'
      />

      <button className='homeProduct__button'>Add to Basket</button>
    </div>
  );
};

export default HomeProduct;
