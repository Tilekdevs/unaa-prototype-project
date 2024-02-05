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
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="swiper-container"
      >
        <SwiperSlide className="home__swiper">
          <img className='home__swiper-img' src="https://www.pixground.com/sunset-over-the-sea-ai-generated-4k-wallpaper/?download-img=2k" alt="" />
        </SwiperSlide>
     

        <SwiperSlide className="home__swiper">
        <img className='home__swiper-img' src="https://lh3.googleusercontent.com/proxy/mpt2K7pP66tXxaAo4nn5k2kztIUQqJep3PvOvit8x3dI9LrtB8VqTMj1qdPZtiWqcV62G4AGZSpfm20FczOyp2CjM4YIG55N6RbG-9RKWJG2__PrJAhzADNYckJl" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeSwiper;
