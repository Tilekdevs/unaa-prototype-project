import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../layout/Header/header.scss";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { useTranslation } from "react-i18next";
import { MdKeyboardArrowDown } from "react-icons/md";

const HeaderNav = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

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
              scrolled || location.pathname !== "/" ? "scrolled" : ""
            }`}
          >
            <li>
              <Link to="/calculator">{t("service.calculator")} </Link>
            </li>
            <li>
              <Link to="/request-for-inspection">
                {t("service.inspection")}{" "}
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
          <LanguageSelect />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
