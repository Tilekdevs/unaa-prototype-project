import React from 'react';
import './home.scss';
import HomeSwiper from '../../components/HomeSwiper/HomeSwiper';
import HomeNews from '../../components/HomeNews/HomeNews';

const Home = () => {
  return (
    <section className="home">
      <HomeSwiper/>
      <HomeNews/>
    </section>
  );
};

export default Home;
