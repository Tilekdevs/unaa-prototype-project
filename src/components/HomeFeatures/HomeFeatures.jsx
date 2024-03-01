import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaIdCard } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import { IoMdInformationCircle } from "react-icons/io";
import { MdPersonSearch } from "react-icons/md";
import { PiCarDuotone } from "react-icons/pi";
import "./homeFeatures.scss";

const features = [
  {
    icon: <FaIdCard />,
    title: "Онлайн сервис Carcheck",
    description:
      "All packages are published under MIT license, you can use Mantine in any project",
  },
  {
    icon: <IoMdInformationCircle />,
    title: "Проверка штрафов",
    description:
      "Build type safe applications, all components and hooks export types",
  },
  {
    icon: <MdPersonSearch />,
    title: "Поиск владельца ТС",
    description:
      "With new :focus-visible selector focus ring will appear only when user navigates with keyboard",
  },
  {
    icon: <PiCarDuotone />,
    title: "Получение выписки по ТС",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
  {
    icon: <FaCalculator />,
    title: "Калькулятор оформления ТС",
    description:
      "Customize colors, spacing, shadows, fonts and many other settings with global theme object",
  },
];

const HomeFeatures = () => {
  const [slidesPerView, setSlidesPerView] = useState(3); 

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); 
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2); 
      } else {
        setSlidesPerView(3); 
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="wrapper__container">
        <div className="wrapper__left">
          <h1 className="head">Наши услуги</h1>
          <p className="text">
            Наше агентство предоставляет вам возможность получить выписку по ТС,
            проверить штрафы, узнать владельца ТС и многое другое.
          </p>
        </div>
        <div className="wrapper__right">
          <Swiper
            className="swiper"
            spaceBetween={20}
            slidesPerView={slidesPerView}
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            centeredSlides={true}
          >
            {features.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className="feature">
                  <div className="feature__icon">{feature.icon}</div>
                  <h3 className="feature__title">{feature.title}</h3>
                  <p className="feature__description">{feature.description}</p>
                  <div className="feature__dimmer"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
