import React from "react";
import {  FaSearch } from "react-icons/fa";
import whatsapp from '../../../assets/img/whatsapp.png'
import facebook from '../../../assets/img/facebook.png'

const HeaderTop = () => {
  return (
    <div className="header__top">
      <div className="header__top-icons">
        <img className="header__top-social" src={facebook} alt="" />
        <img className="header__top-social" src={whatsapp} alt="" />
      </div>

      <div className="header__top-search">
        <input placeholder="Поиск" type="text" className="header__top-input" />
        <FaSearch className="header__top-icon" />
      </div>
    </div>
  );
};


export default HeaderTop;
