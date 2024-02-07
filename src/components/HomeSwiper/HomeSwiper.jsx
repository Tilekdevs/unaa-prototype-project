import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import '../../pages/Home/home.scss';

const HomeSwiper = () => {
  return (
    <div className="mySwiper">
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false
      }}
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="swiper-container"
      >
        <SwiperSlide className="home__swiper">
          <img className='home__swiper-img' src="https://mtd.gov.kg/wp-content/themes/mtd-gov/img/slide-2.png" alt="" />
        </SwiperSlide>
     

        <SwiperSlide className="home__swiper">
        <img className='home__swiper-img' src="https://mtd.gov.kg/wp-content/themes/mtd-gov/img/slide-1.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeSwiper;
