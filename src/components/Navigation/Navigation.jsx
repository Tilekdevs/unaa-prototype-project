import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useLocation } from "react-router-dom";
import translations from "../../utils/lang/translations"; 
import "./navigation.scss";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').filter(Boolean);
  const { translation: navTranslations } = translations[localStorage.getItem("selectedLanguage") || "ru"];

  return (
    <div className="navigation">
      <div className="navigation__container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link className="navigation__link" to={"/"}>
            {navTranslations["home"]}
          </Link>
  
          {currentPath.map((segment, index) => (
            <Link
              key={index}
              className={`navigation__link ${index === currentPath.length - 1 ? 'active' : ''}`}
              to={`/${index === currentPath.length - 1 ? '' : segment}`}
            >
              {navTranslations[segment] || segment}
            </Link>
          ))}
        </Breadcrumbs>
      </div>
    </div>
  );
};

export default Navigation;
