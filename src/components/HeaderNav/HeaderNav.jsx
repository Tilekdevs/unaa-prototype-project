import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowDown } from 'react-icons/fa'; 
import '../../layout/Header/header.scss';

const HeaderNav = () => {
  return (
    <nav className="header__navigation">
      <ul className="header__navigation-list">
        <li className="header__navigation-item">
          <Link to="/">Главная</Link>
        </li>
        <li className="header__navigation-item">
          <Link to="/about">О нас</Link>
        </li>
        <li className="header__navigation-item">
          <Link to="/news">Новости</Link>
        </li>
        <li className="header__navigation-item">
          <Link to="/information">Информация</Link>
        </li>
        <li className="header__navigation-item">
          Сервисы <FaArrowDown />
          <ul className="header__dropdown">
            <li>
              <Link to="/calculator">Калькулятор</Link>
            </li>
            <li>
              <Link to="/request-for-inspection">Обращение на осмотр</Link>
            </li>
          </ul>
        </li>
        <li className="header__navigation-item">
          <Link to="/jobs">Вакансии</Link>
        </li>
        <li className="header__navigation-item">
          <Link to="/camera">Онлайн камеры</Link>
        </li>
		<li className="header__navigation-item">
          <select className='header__navigation-select' name="" id="">
			<option className='header__navigation-option' value="">РУС</option>
			<option className='header__navigation-option' value="">КЫР</option>
		  </select>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
