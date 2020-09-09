import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';

const App: React.FC = () => {
  return (
    <div className='app'>
      <Header />
      <Home />
    </div>
  );
};

export default App;
