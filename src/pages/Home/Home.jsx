import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; 

import './home.scss';

const Home = () => {
  return (
    <section className="home">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="home__swiper" style={{ backgroundImage: 'url(https://gu-unaa.kg/images/banner1.jpg)' }}>
          <div className="slide__content">
            <h1 className='slide__title'>Государственное учреждение УНАА</h1>
            <p className='slide__desc'>Государственное учреждение "УНАА" осуществляет деятельность в области регистрации, перерегистрации автомототранспортных средства.</p>
          </div>
        </SwiperSlide>

        <SwiperSlide className="home__swiper" style={{ backgroundImage: 'url(https://gu-unaa.kg/images/banner1.jpg)' }}>
          <div className="slide__content">
            <h1 className='slide__title'>Государственное учреждение УНАА</h1>
            <p className='slide__desc'>Государственное учреждение "УНАА" осуществляет деятельность в области регистрации, перерегистрации автомототранспортных средства.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Home;
