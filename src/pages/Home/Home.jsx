import React from "react";
import "./home.scss";

import HomeNews from "../../components/HomeNews/HomeNews";
import HomeVideo from "../../components/HomeVideo/HomeVideo";
import HomeFeatures from "../../components/HomeFeatures/HomeFeatures";

const Home = () => {
  return (
    <>
      <section className="home">
        <HomeVideo />
      </section>

      <HomeNews />
      <HomeFeatures />
    </>
  );
};

export default Home;
