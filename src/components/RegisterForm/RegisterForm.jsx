import React, { useState } from 'react';
import './registerForm.scss';
import google from '../../assets/img/google.png';
import { IoCloseOutline } from 'react-icons/io5';
import LoginForm from '../LoginForm/LoginForm'

const RegisterForm = ({ onClose }) => {
    const [showLoginForm, setShowLoginForm] = useState(false); 

    const handleCloseForm = () => {
        onClose();
    };

    const toggleForm = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <>
            {showLoginForm ? (
                <LoginForm onClose={onClose} /> 
            ) : (
                <div className='overlay'>
                    <div className='register'>
                        <IoCloseOutline
                            className='register__close'
                            onClick={handleCloseForm}
                        />
                        <p className='register__title'>Регистрация</p>
                        <p className='register__subtitle'>
                            Зарегистрируйте аккаунт для входа в портал
                        </p>
                        <div className='register__container'>
                            <div className='register__top'>
                                <div className='register__form'>
                                    <p className='register__form-title'>
                                        Адрес электронной почты
                                    </p>
                                    <input
                                        required
                                        type='text'
                                        className='register__input'
                                        placeholder='Почта...'
                                    />
                                </div>
                                <div className='register__form'>
                                    <p className='register__form-title'>Пароль...</p>
                                    <input
                                        required
                                        type='password'
                                        className='register__input'
                                        placeholder='Пароль'
                                    />
                                </div>
                            </div>
                            <button className='register__btn'>Зарегистрироваться</button>
                            <button className='register__google'>
                                Продолжить с
                                <img className='register__google-img' src={google} alt='' />
                            </button>
                            <p href="#" className='register__link' onClick={toggleForm}>
                                Уже есть аккаунт?
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default RegisterForm;
