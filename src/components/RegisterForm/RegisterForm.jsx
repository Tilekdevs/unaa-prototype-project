import React, { useState, useEffect } from "react";
import "./registerForm.scss";
import google from "../../assets/img/google.png";
import { AiOutlineClose } from "react-icons/ai";
import LoginForm from "../LoginForm/LoginForm";

const RegisterForm = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

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
        <div className={`overlay ${isVisible ? "show" : ""}`}>
          <form className={`register ${isVisible ? "show" : ""}`}>
            <button className="register__close" onClick={handleCloseForm}>
              <AiOutlineClose />
            </button>
            <p className="register__title">Регистрация</p>
            <p className="register__subtitle">
              Зарегистрируйте аккаунт для входа в портал
            </p>
            <div className="register__container">
              <div className="register__top">
                <div className="register__form">
                  <p className="register__form-title">Имя</p>
                  <input
                    required
                    type="text"
                    className="register__input"
                    placeholder="Имя"
                  />
                </div>
                <div className="register__form">
                  <p className="register__form-title">Фамилия</p>
                  <input
                    required
                    type="text"
                    className="register__input"
                    placeholder="Фамилия"
                  />
                </div>
                <div className="register__form">
                  <p className="register__form-title">
                    Адрес электронной почты
                  </p>
                  <input
                    required
                    type="text"
                    className="register__input"
                    placeholder="Почта"
                  />
                </div>
                <div className="register__form">
                  <p className="register__form-title">Пароль</p>
                  <input
                    required
                    type="password"
                    className="register__input"
                    placeholder="Пароль"
                  />
                </div>
              </div>
              <div className="register__bottom">
                <button className="register__btn">Зарегистрироваться</button>
                <button className="register__google">
                  Продолжить с
                  <img className="register__google-img" src={google} alt="" />
                </button>
                <p href="#" className="register__link" onClick={toggleForm}>
                  Уже есть аккаунт?
                </p>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default RegisterForm;