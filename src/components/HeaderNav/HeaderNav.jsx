import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../layout/Header/header.scss";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineUser } from "react-icons/hi2";
import RegisterForm from "../RegisterForm/RegisterForm";
import { GrLanguage } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { logOutAccount } from "../../redux/reducers/userSlice";

const HeaderNav = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [showForm, setShowForm] = useState(false);
  const user = useSelector((state) => state.user.userData);
  const dispatch = useDispatch();

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleLogout = () => {
    dispatch(logOutAccount());
  };

  return (
    <nav className="header__navigation">
      <ul className="header__navigation-list">
        <li className="header__navigation-item">
          <Link to="/">{t("home")}</Link>
        </li>
        <li className="header__navigation-item">
          <Link to="/about">{t("about")}</Link>
        </li>
        <li className="header__navigation-item">
          <Link to="/news">{t("news")}</Link>
        </li>
        <li className="header__navigation-item">
          <Link to="/information">{t("info")}</Link>
        </li>
        <li className="header__navigation-item">
          {t("service.main")} <MdKeyboardArrowDown />
          <ul
            className={`header__dropdown ${
              location.pathname !== "/" ? "scrolled" : ""
            }`}
          >
            <li>
              <Link to="/calculator">{t("service.calculator")}</Link>
            </li>
            <li>
              <Link to="/request-for-inspection">
                {t("service.inspection")}
              </Link>
            </li>
          </ul>
        </li>
        <li className="header__navigation-item">
          <Link to="/jobs">{t("jobs")}</Link>
        </li>
        <li className="header__navigation-item">
          <Link to="/camera">{t("camera")}</Link>
        </li>
        <li className="header__navigation-item">
          <GrLanguage />
          <LanguageSelect />
        </li>
        <li className="header__navigation-item">
          {user.username ? (
            <Link to="/" onClick={handleLogout}>
              Выйти
            </Link>
          ) : (
            <HiOutlineUser className="user__icon" onClick={toggleForm} />
          )}
        </li>
      </ul>
      {showForm && <RegisterForm onClose={toggleForm} />}
    </nav>
  );
};

export default HeaderNav;
