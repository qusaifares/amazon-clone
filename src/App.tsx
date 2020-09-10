import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

import { Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
