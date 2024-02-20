import React, { useRef, useEffect } from "react";
import "./home.scss";
import videobg from "../../assets/video/video.mp4";

const Home = () => {
  const videoRef = useRef(null);
  const videoRefCopy = useRef(null); 

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1 
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    if (videoRefCopy.current) { 
      observer.observe(videoRefCopy.current);
    }
  
    return () => {
      if (videoRefCopy.current) { 
        observer.unobserve(videoRefCopy.current);
      }
    };
  }, []);

  useEffect(() => {
    videoRefCopy.current = videoRef.current;
  }, []); 

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.load();
      }
    });
  };

  return (
    <section className="home">
      <div className="home__video-bg">
        <video ref={videoRef} autoPlay loop muted loading="lazy">
          <source src={videobg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video__overlay"></div>
      </div>
      <div className="home__container">
        <div className="home__content">
          <h1 className="home__content-title">
            Государственное учреждение УНАА
          </h1>
          <p className="home__content-subtitle">
            Мы осуществляем деятельность в области регистрации и перерегистрации
            автотранспортных средств.
          </p>
        </div>

        <div className="home__bottom">
          <h2>Дополнительный контент</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
