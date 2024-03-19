import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./burgerMenu.scss";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { FaRegUser } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const {t} = useTranslation();

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

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
      
          <LanguageSelect />
          <span className="close-icon" onClick={toggleMenu}>
            <FaTimes />
          </span>
      

        <ul>
          <li>
            <Link to="/">{t("home")}</Link>
          </li>
          <li>
            <Link to="/about">{t("about")}</Link>
          </li>
          <li>
            <Link to="/news">{t("news")}</Link>
          </li>
          <li>
            <Link to="/information">{t("info")}</Link>
          </li>
          <li
            className={`dropdown ${isDropdownOpen ? "open" : ""}`}
            onClick={toggleDropdown}
          >
            <p className="service-text">{t("service.main")}</p>
            <ul className="dropdown-menu">
              <li>
                <Link to="/service1">{t("calculator")}</Link>
              </li>
              <li>
                <Link to="/service2">{t("inspection")}</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/jobs">{t("jobs")}</Link>
          </li>
          <li>
            <Link to="/camera">{t("camera")}</Link>
          </li>
        </ul>

        <div className="menu__bottom">
          <button className="menu__bottom-btn">{t("login")} <FaRegUser /></button>
        </div>
      </nav>
    </div>
  );
};

export default BurgerMenu;
