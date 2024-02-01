import React, { useState, useEffect } from "react";
import "./header.scss";
import SignModal from "./SignModal/SignInModal";
import Logo from "../../assets/img/header-logo.jpg";
import { Avatar } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
import KG from "../../assets/img/kg.png";
import RU from "../../assets/img/ru.png";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <header className='header'>
      <div className="header__logo">
        <img className="header__img" src={Logo} alt="Logo" />
        <a className="header__title" href="/">
          Государственное учреждение УНАА
        </a>
      </div>

      <HeaderNav />

      <div className="header__right">
        <Button
          className="header__avatar"
          aria-describedby={id}
          onClick={handleClick}
        >
          <Avatar src="/broken-image.jpg" className="header__avatar-icon" />
          <MdKeyboardArrowDown />
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          {/* <Typography sx={{ p: 2 }}>
            <div className="header__popover">
              <div className="header__popover-list">
                <li className="header__popover-item">
                  <SignModal />
                </li>
                <li className="header__popover-item">Выйти</li>
                <li className="header__popover-item">
                  <img src={KG} alt="" />
                </li>
                <li className="header__popover-item">
                  <img src={RU} alt="" />
                </li>
              </div>
            </div>
          </Typography> */}
        </Popover>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
