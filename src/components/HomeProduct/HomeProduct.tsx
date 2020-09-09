import React from 'react';
import './HomeProduct.css';

import { Rating } from '@material-ui/lab';

export interface Product {
  title: string;
  image?: string;
  price: number;
  rating: number;
}

interface Props {
  product: Product;
}

const HomeProduct: React.FC<Props> = ({ product }) => {
  const { title, image, price, rating } = product;

  return (
    <div className="homeProduct">
      <div className="homeProduct__info">
        <p>{title}</p>
        <p className="homeProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="homeProduct__rating">
          <Rating value={rating} precision={0.5} readOnly />
        </div>
      </div>

      <img src={image} alt="" className="homeProduct__img" />

      <button className="homeProduct__button">Add to Basket</button>
    </div>
  );
};

export default HomeProduct;
