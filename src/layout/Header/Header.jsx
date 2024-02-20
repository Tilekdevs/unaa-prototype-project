import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.scss";
import logo from "../../assets/img/header-logо.jpg";
import { FaArrowDown } from "react-icons/fa";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

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
        <img src={logo} alt="Logo" className="header__container-img" />
        <h4 className="header__container-title">
          Государственное учреждение УНАА
        </h4>
      </div>

      <nav className="header__navigation">
        <ul className="header__navigation-list">
          <li className="header__navigation-item">
            <Link to="/">Главная</Link>
          </li>
          <li className="header__navigation-item">
            <Link to="/about">О нас</Link>
          </li>
          <li className="header__navigation-item">
            <Link to="/news">Новости</Link>
          </li>
          <li className="header__navigation-item">
            <Link to="/information">Информация</Link>
          </li>
          <li className="header__navigation-item">
            Сервисы <FaArrowDown />
            <ul className="header__dropdown">
              <li>
                <Link to="/calculator">Калькулятор</Link>
              </li>
              <li>
                <Link to="/request-for-inspection">Обращение на осмотр</Link>
              </li>
            </ul>
          </li>
          <li className="header__navigation-item">
            <Link to="/jobs">Вакансии</Link>
          </li>
          <li className="header__navigation-item">
            <Link to="/camera">Онлайн камеры</Link>
          </li>
        </ul>
      </nav>
      <BurgerMenu />
    </header>
  );
};

export default Header;
