import React from "react";
import { Link } from "react-router-dom";
import navigationData from "../../utils/navigationData";
import "./navigation.scss";

// Комопнент навигации (ГЛАВНАЯ/Новости либо ГЛАВНАЯ/О нас)

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation__container">
        <Link
          className="navigation__link"
          to={"/"}
        >
          Главная {'> '}
        </Link>

        {navigationData.map((item, index) => (
          <span key={index}>
            {"  "}
            {"  "}
            <Link
              className="navigation__link"
              to={`${item.en}`}
            >
              {item.ru}
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
