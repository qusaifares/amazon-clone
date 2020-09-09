import React from 'react';
import './Home.css';

import HomeProduct from '../HomeProduct/HomeProduct';

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <div className='home'>
      <div className='home__container'>
        <img
          src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
          alt='hero'
          className='home__image'
        />
      </div>
      <div className='home__row'>
        <HomeProduct />
        <HomeProduct />
      </div>
    </div>
  );
};

export default Home;
