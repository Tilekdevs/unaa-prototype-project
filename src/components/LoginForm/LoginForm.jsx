import React from 'react';
import './loginForm.scss';
import { IoCloseOutline } from 'react-icons/io5';

const LoginForm = ({ onClose }) => {
  const handleCloseForm = () => {
    onClose();
  };

  return (
    <div className='overlay'>
      <div className='login'>
        <IoCloseOutline className='login__close' onClick={handleCloseForm} />
        <p className='login__title'>Вход в аккаунт</p>
        <p className='login__subtitle'>
          Войдите в свой аккаунт для доступа к порталу
        </p>
        <div className='login__container'>
          <div className='login__top'>
            <div className='login__form'>
              <p className='login__form-title'>Адрес электронной почты</p>
              <input
                required
                type='text'
                className='login__input'
                placeholder='Почта...'
              />
            </div>
            <div className='login__form'>
              <p className='login__form-title'>Пароль...</p>
              <input
                required
                type='password'
                className='login__input'
                placeholder='Пароль'
              />
            </div>
          </div>
          <button className='login__btn'>Войти</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
