import React, { useState } from "react";
import "./header.scss";
import Logo from "../../assets/img/header-logo.jpg";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import HeaderTop from "./HeaderTop/HeaderTop";
import { FaRegUser } from "react-icons/fa";


const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
    <HeaderTop/>
    <header className="header">
      <div className="header__logo">
        <img className="header__img" src={Logo} alt="Logo" />
        <a className="header__title" href="/">
          Государственное учреждение УНАА
        </a>
      </div>

      <HeaderNav />

      <div className="header__right">
      
       <button className="header__btn">Войти <FaRegUser /></button>
        <BurgerMenu />
      </div>
    </header>
    </>
  );
};

export default Header;
