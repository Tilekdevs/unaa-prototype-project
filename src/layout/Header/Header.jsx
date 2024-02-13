import React from 'react';
import './header.scss';
import Logo from '../../assets/img/header-logо.jpg';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import HeaderNav from '../../components/HeaderNav/HeaderNav';
import HeaderTop from './HeaderTop/HeaderTop';
import { FaRegUser } from 'react-icons/fa';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Header = () => {
  const [showForm, setShowForm] = React.useState(false);

  const openForm = () => {
    setShowForm(true);
    document.body.classList.add('dark-background');
  };

  const closeForm = () => {
    setShowForm(false);
    document.body.classList.remove('dark-background');
  };

  return (
    <>
      <HeaderTop />
      <header className={`header ${showForm ? 'dark-background' : ''}`}>
        <div className="header__logo">
          <img className="header__img" src={Logo} alt="Logo" />
          <a className="header__title" href="/">
            Государственное учреждение УНАА
          </a>
        </div>

        <HeaderNav />

        <div className="header__right">
          <button className="header__btn" onClick={openForm}>
            Войти <FaRegUser />
          </button>
          <BurgerMenu />
        </div>
      </header>

      {showForm && <RegisterForm onClose={closeForm} />}
    </>
  );
};

export default Header;