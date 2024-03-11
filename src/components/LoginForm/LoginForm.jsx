import React, { useState } from 'react';
import './loginForm.scss';
import { IoCloseOutline } from 'react-icons/io5';
import axios from 'axios';

const LoginForm = ({ onClose }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/login/login',
        loginData
      );
      console.log('Login success:', response.data);
      alert('Вход успешно выполнен!');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Ошибка входа. Пожалуйста, проверьте введенные данные.');
    }
  };

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
              <p className='login__form-title'>Логин</p>
              <input
                required
                type='text'
                className='login__input'
                placeholder='Логин'
                name='username'
                value={loginData.username}
                onChange={handleChange}
              />
            </div>
            <div className='login__form'>
              <p className='login__form-title'>Пароль...</p>
              <input
                required
                type='password'
                className='login__input'
                placeholder='Пароль'
                name='password'
                value={loginData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className='login__btn' onClick={handleLogin}>
            Войти
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
