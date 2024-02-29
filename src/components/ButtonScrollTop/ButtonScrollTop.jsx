import React, { useState, useEffect } from 'react';
import './buttonScrollTop.scss';
import { FaArrowUp } from "react-icons/fa";

const ButtonScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button className={`button-scroll-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default ButtonScrollTop;
