import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import "./burgerMenu.scss";

const BurgerMenu = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="burger-menu">
      <div className="burger-icon" onClick={toggleMenu}>
        <HiMenuAlt3 />
      </div>

      {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}

      <Menu
        isOpen={isMenuOpen}
        onStateChange={(state) => {
          if (state.isOpen !== isMenuOpen) {
            setMenuOpen(state.isOpen);
          }
        }}
        customBurgerIcon={false}
        customCrossIcon={false}
        width={"300px"}
        right
        styles={{
          bmBurgerButton: {
            display: "none",
          },
          bmCrossButton: {
            height: "24px",
            width: "24px",
          },
          bmCross: {
            background: "#bdc3c7",
          },
          bmMenu: {
            background: "#1e88e5",
            padding: "2.5em 1.5em 0",
            fontSize: "1.15em",
          },
          bmMenuWrap:{
            top: "0px",
            zIndex: "6000",
            right: "-1px",
          },
          bmMorphShape: {
            fill: "#373a47",
          },
          bmItemList: {
            color: "#ffffff",
            padding: "0.8em",
          },
          bmOverlay: {
            background: "rgba(0, 0, 0, 0.3)",
          },
        }}
      >
        <div className="close-icon" onClick={closeMenu}>
          <IoMdClose />
        </div>
        <ul className="menu-items">
          <li onClick={closeMenu}>
            <a href="/">Главная</a>
          </li>
          <li onClick={closeMenu}>
            <a href="/about">О нас</a>
          </li>
          <li onClick={closeMenu}>
            <a href="/news">Новости</a>
          </li>
          <li onClick={closeMenu}>
            <a href="/contacts">Сервисы</a>
          </li>
          <li onClick={closeMenu}>
            <a href="/contacts">Информация</a>
          </li>
          <li onClick={closeMenu}>
            <a href="/jobs">Вакансии</a>
          </li>
          <li onClick={closeMenu}>
            <a href="/camera">Онлайн Камеры</a>
          </li>
        </ul>

        
      </Menu>
    </div>
  );
};

export default BurgerMenu;
