import React from "react";
import "./footer.scss";

import { MdPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";


const Footer = () => {
  return (
    <div>
      <div className="footer__top">
        <div className="footer__top-container">
        <div className="footer__top-phone">
          <div className="footer__top-logo">
          <MdPhone className="footer__top-icon"/>
          </div>
          <p className="footer__top-desc">0312 63-23-63</p>
        </div>

        <div className="footer__top-email">
        <div className="footer__top-logo">
          <MdOutlineMailOutline className="footer__top-icon" />
        </div>
        <p className="footer__top-desc">unaa@unaa.srs.kg</p>
      </div>

        <div className="footer__top-address">
          <div className="footer__top-logo">
          <RiMapPin2Line className="footer__top-icon"/>
          </div>
          <address className="footer__top-desc">ул. Чокана Валиханова, 2а 720048, Бишкек</address>
        </div>
        </div>       
      </div>

      <footer className="footer">
        <div className="footer__container">
          
          <div className="footer__links">
            <h3 className="footer__links-title">Государственные структуры</h3>

            <a href="https://president.kg/" className="footer__link">
              Сайт Президента КР
            </a>
            <a href="https://kenesh.kg/ru" className="footer__link">
              Жогорку Кенеш
            </a>
            <a href="https://portal.tunduk.kg/" className="footer__link">
              Портал электронных услуг
            </a>
            <a href="/" className="footer__link">
              Государственная регистрационная служба
            </a>
            <a href="https://tunduk.gov.kg/ru" className="footer__link">
              Система «ТҮНДҮК»
            </a>
          </div>

          <div className="footer__links">
            <h3 className="footer__links-title">Навигация</h3>

            <a href="/" className="footer__link">
              Главная
            </a>
            <a href="/about" className="footer__link">
              О нас
            </a>
            <a href="/news" className="footer__link">
              Новости
            </a>
            <a href="/information" className="footer__link">
              Информация
            </a>
            <a href="/jobs" className="footer__link">
              Вакансии
            </a>
            <a href="/camera" className="footer__link">
              Онлайн камеры
            </a>
          </div>

          <div className="footer__contacts">
            <h3 className="footer__contacts-title">Контакты</h3>
            <h5 className="footer__helpline">Телефоны доверия:</h5>
            <a href="/" className="footer__phone">0312 63-14-40</a>
            <a href="/" className="footer__phone">0312 63-01-86</a>
            <a href="/" className="footer__phone">0312 63-39-31</a>
            <a href="/" className="footer__phone">0312 63-23-63</a>

            <a href="/" className="footer__email">unaa@unaa.srs.kg</a>
            <address className="footer__address">
              ул. Чокана Валиханова, 2а 720048, Бишкек, Кыргызстан
            </address>
          </div>
        </div>

        <p className="footer__text">Государственное учреждение УНАА 2024</p>
      </footer>
    </div>
  );
};

export default Footer;

