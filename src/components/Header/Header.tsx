import React from 'react';
import './Header.css';
import { Search, ShoppingCart } from '@material-ui/icons';

import { Link } from 'react-router-dom';

import logo from '../../amazonLogo.svg';

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo} alt="" />
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <Search className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionTop">Hello Guest</span>
          <span className="header__optionBottom">Sign In</span>
        </div>

        <div className="header__option">
          <span className="header__optionTop">Returns</span>
          <span className="header__optionBottom">& Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionTop">Your</span>
          <span className="header__optionBottom">Prime</span>
        </div>

        <Link to="/cart" className="header__optionCart">
          <ShoppingCart />
          <span className="header__optionBottom header__cartCount">3</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
