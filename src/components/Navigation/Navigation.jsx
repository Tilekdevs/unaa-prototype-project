import React from "react";
import { Link, useLocation } from "react-router-dom";
import navigationData from "../../utils/navigationData";
import "./navigation.scss";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').filter(Boolean);

  return (
    <div className="navigation">
      <div className="navigation__container">
        <Link className="navigation__link" to={"/"}>
          Главная {'/ '}
        </Link>

        {currentPath.map((segment, index) => (
          <span key={index}>
            {'  '}
            {'  '}
            <Link
              className={`navigation__link ${index === currentPath.length - 1 ? 'active' : ''}`}
              to={`/${index === currentPath.length - 1 ? '' : segment}`}
            >
              {index === currentPath.length - 1
                ? navigationData.find(item => item.en === segment)?.ru || segment
                : navigationData.find(item => item.en === segment)?.ru || segment
              }
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navigation;






