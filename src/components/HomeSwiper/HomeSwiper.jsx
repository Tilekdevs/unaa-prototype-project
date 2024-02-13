import React, { useState, useEffect } from "react";
import axios from "axios";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/swiper-bundle.css";
import "../../pages/Home/home.scss";

const HomeSwiper = () => {

  const [swiper, setSwiper] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/slider");
        setSwiper(response.data);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchData();
  }, []);

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
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="swiper-container"
      >
        {
          swiper.map((slide) => (
            <SwiperSlide key={slide.id} className="home__swiper">
              <img
                className="home__swiper-img"
                src={`http://127.0.0.1:8000${slide.image}`}
                alt={slide.id}
              />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default HomeSwiper;
