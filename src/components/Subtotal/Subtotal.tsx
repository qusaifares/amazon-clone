import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

interface Props {}

const Subtotal: React.FC<Props> = () => {
  const basket = [0, 0];
  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value: number) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type='checkbox' /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        fixedDecimalScale={true}
        value={12.9}
        displayType={'text'}
        thousandSeparator={true}
        prefix='$'
      />

      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Subtotal;
