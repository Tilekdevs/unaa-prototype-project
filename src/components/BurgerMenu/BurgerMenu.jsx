import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./burgerMenu.scss";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { Lan } from "@mui/icons-material";

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setDropdownOpen(false); 
  };

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="burger-menu">
      <div className="burger-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <nav className={`menu ${isMenuOpen ? "show-menu" : ""}`}>
        <span className="close-icon" onClick={toggleMenu}>
          <FaTimes />
        </span>
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>
          <li>
            <Link to="/information">Информация</Link>
          </li>
          <li className={`dropdown ${isDropdownOpen ? "open" : ""}`} onClick={toggleDropdown}>
            <a href="#">Сервисы</a>
            <ul className="dropdown-menu">
              <li><Link to="/service1">Услуга 1</Link></li>
              <li><Link to="/service2">Услуга 2</Link></li>
             
            </ul>
          </li>
          <li>
            <Link to="/jobs">Вакансии</Link>
          </li>
          <li>
            <Link to="/camera">Онлайн Камеры</Link>
          </li>
        </ul>

        <div className="menu__bottom">
          <LanguageSelect/>
          <button className="menu__bottom-btn">Войти</button>
        </div>
      </nav>
    </div>
  );
};

export default BurgerMenu;
