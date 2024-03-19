import React, { useState, useCallback } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginAccount } from '../../redux/reducers/userSlice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const LoginForm = ({ onClose }) => {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handleLogin = useCallback(async () => {
    try {
      const updatedLoginData = { ...loginData };
      const response = await axios.post('http://127.0.0.1:8000/api/login/login', updatedLoginData);
      console.log('Login response:', response.data);

      if (response.data.message === "Вход выполнен успешно") {
        dispatch(loginAccount({ username: updatedLoginData.username }));
        onClose();
        setIsLoginSuccess(true); // Установка состояния в true при успешном входе
        console.log('Login success:', response.data.message);
      } else {
        console.error('Login failed:', response.data.message);
        alert('Ошибка входа. Пожалуйста, проверьте введенные данные.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Ошибка входа. Пожалуйста, проверьте введенные данные.');
    } finally {
      setLoginData({ username: '', password: '' });
    }
  }, [dispatch, loginData, onClose]);

  const handleCloseSnackbar = useCallback((event, reason) => {
    if (reason !== 'clickaway') {
      setIsLoginSuccess(false);
    }
  }, []);

  return (
    <div className='overlay'>
      <div className='login'>
        <IoCloseOutline className='login__close' onClick={onClose} />
        <p className='login__title'>Вход в аккаунт</p>
        <p className='login__subtitle'>Войдите в свой аккаунт для доступа к порталу</p>
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
          <button className='login__btn' onClick={handleLogin}>Войти</button>
        </div>
      </div>
      <Snackbar
        open={isLoginSuccess}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} variant='filled' severity="success" sx={{ width: '100%' }}>
          Вход выполнен успешно!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default LoginForm;
