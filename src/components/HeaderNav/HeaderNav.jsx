import React from 'react'
import '../../layout/Header/header.scss'

const HeaderNav = () => {
  return (
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
              href="/jobs"
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
  )
}

export default HeaderNav