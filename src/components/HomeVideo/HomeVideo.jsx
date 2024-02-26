import React from "react";
import "../../pages/Home/home.scss";
import videobg from "../../assets/video/bg.mp4";
import { useTranslation } from "react-i18next";
import HomeSearch from "../HomeSearch/HomeSearch";

const HomeVideo = () => {
  
  const { t } = useTranslation();

  return (
    <>
      <div className="home__video-bg">
        <video autoPlay loop muted loading="lazy">
          <source src={videobg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video__overlay"></div>
      </div>

      <div className="home__container">
        <div className="home__content">
          <h6 className="home__content-title">
            {t("title")}
          </h6>
          <p className="home__content-subtitle">
            {t("desc")}
          </p>
        </div>

       <HomeSearch/>
      </div>
    </>
  );
};

export default HomeVideo;
