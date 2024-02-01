import React, { useState } from "react";
import "./header.scss";
import SignModal from "./SignModal/SignInModal";
import Logo from "../../assets/img/header-logo.jpg";
import { Avatar } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import HeaderNav from "../../components/HeaderNav/HeaderNav";
// import { IoMdClose } from "react-icons/io";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { slide as Menu } from "react-burger-menu";

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
    <>
      <HeaderTop />
      <header className="header">
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
            <Typography sx={{ p: 2 }}>
              <div className="header__popover">
                <ul className="header__popover-list">
                  <li className="header__popover-item">
                    <SignModal />
                  </li>
                  <li className="header__popover-item">Выйти</li>
                </ul>
              </div>
            </Typography>
          </Popover>
          <BurgerMenu />
        </div>
      </header>
    </>
  );
};

export default Header;
