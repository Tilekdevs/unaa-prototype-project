import React, {useState} from "react";
import "./header.scss";
import SignModal from './SignModal/SignInModal'
//assets
import { Avatar } from "@mui/material";
import { MdKeyboardArrowDown } from "react-icons/md";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BurgerMenu from "../../components/BurgerMenu/BurgerMenu";
import Logo from "../../assets/img/header-logo.jpg"
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
    <header className="header">
      <div className="header__logo">
        <img
          className="header__img"
          src={Logo}
          alt="Logo"
        />
        <a
          className="header__title"
          href="/"
        >
          Государственное учреждение УНАА
        </a>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li>
            <a
              className="header__nav-item"
              href="/"
            >
              Главная
            </a>
          </li>
          <li>
            <a
              className="header__nav-item"
              href="/about"
            >
              О нас
            </a>
          </li>
          <li>
            <a
              className="header__nav-item"
              href="/news"
            >
              Новости
            </a>
          </li>
          <li>
            <a
              className="header__nav-item"
              href="/about"
            >
              Сервисы
            </a>
          </li>
          <li>
            <a
              className="header__nav-item"
              href="/about"
            >
              Информация
            </a>
          </li>
          <li>
            <a
              className="header__nav-item"
              href="/about"
            >
              Вакансии
            </a>
          </li>
          <li>
            <a
              className="header__nav-item"
              href="/camera"
            >
              Онлайн Камеры
            </a>
          </li>
        </ul>
      </nav>
     <div className="header__right">
     <Button
        className="header__avatar"
        aria-describedby={id}
        onClick={handleClick}
      >
        <Avatar
          src="/broken-image.jpg"
          className="header__avatar-icon"
        />
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
              <li className="header__popover-item"><SignModal/></li>
           
            {/* <ul className="header__popover-list">
              <li className="header__popover-item">Регистрация</li>
            </ul>
            <ul className="header__popover-list">
              <li className="header__popover-item">Профиль</li>
            </ul>
            <ul className="header__popover-list">

              <li className="header__popover-item">Войти</li>
            </ul> */}
            </ul>
              <li className="header__popover-item">Выйти</li>

          </div>
        </Typography>
      </Popover>
      <BurgerMenu/>
     </div>   
    </header>
  );
};

export default Header;
