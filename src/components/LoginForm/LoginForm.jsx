import React, { useState, useCallback } from 'react';
import './loginForm.scss';
import { IoCloseOutline } from 'react-icons/io5';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginAccount } from '../../redux/reducers/userSlice';

const LoginForm = ({ onClose }) => {
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleLogin = useCallback(async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/login', loginData);
      console.log('Login response:', response.data);
  
      if (response.data.message === "Вход выполнен успешно") {

        dispatch(loginAccount({ username: loginData.username, password: loginData.password }));
        onClose(); 
        console.log('Login success:', response.data.message);
      } else {
        console.error('Login failed:', response.data.message);
        alert('Ошибка входа. Пожалуйста, проверьте введенные данные.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Ошибка входа. Пожалуйста, проверьте введенные данные.');
    }
  }, [dispatch, loginData.username, onClose]);
  const handleCloseForm = useCallback(() => {
    onClose();
  }, [onClose]);

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
              <p className='login__form-title'>Пароль</p>
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