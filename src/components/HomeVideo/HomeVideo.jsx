// HomeVideo.js
import React, { useEffect, useState } from "react";
import "../../pages/Home/home.scss";
import { useTranslation } from "react-i18next";
import HomeSearch from "../HomeSearch/HomeSearch";
import videobg from "../../assets/video/bg.mp4";

const HomeVideo = () => {
  const { t } = useTranslation();
  const [isMobileScreen, setIsMobileScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobileScreen(screenWidth <= 770);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className={`home__container ${isMobileScreen ? "static-bg" : ""}`}>
        {isMobileScreen ? null : (
          <div className="home__video-bg">
            <video autoPlay loop muted loading="lazy">
              <source src={videobg} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <div className="home__content">
          <h6 className="home__content-title">{t("title")}</h6>
          <p className="home__content-subtitle">{t("desc")}</p>
        </div>

        <HomeSearch />
      </div>
    </>
  );
};

export default HomeVideo;
