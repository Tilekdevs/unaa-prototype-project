import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link, useLocation } from "react-router-dom";
import navigationData from "../../utils/navigationData";
import "./navigation.scss";

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/').filter(Boolean);

  return (
    <div className="navigation">
      <div className="navigation__container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link className="navigation__link" to={"/"}>
            Главная
          </Link>
  
          {currentPath.map((segment, index) => (
            <Link
              key={index}
              className={`navigation__link ${index === currentPath.length - 1 ? 'active' : ''}`}
              to={`/${index === currentPath.length - 1 ? '' : segment}`}
            >
              {index === currentPath.length - 1
                ? navigationData.find(item => item.en === segment)?.ru || segment
                : navigationData.find(item => item.en === segment)?.ru || segment
              }
            </Link>
          ))}
        </Breadcrumbs>
      </div>
    </div>
  );
  
};

export default Navigation;






