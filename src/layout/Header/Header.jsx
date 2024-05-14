import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/img/header-logo.jpg";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import HeaderNav from "../../components/HeaderNav/HeaderNav";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header ${
        scrolled || location.pathname !== "/" ? "scrolled" : ""
      }`}
    >
      <div className="header__container-logo">
        <img onClick={() => navigate('/')} src={logo} alt="Logo" className="header__container-img" />
      </div>

      <HeaderNav />
      <BurgerMenu />
    </header>
  );
};

export default Header;
