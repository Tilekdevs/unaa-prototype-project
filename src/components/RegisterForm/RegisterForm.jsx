import React, { useState } from "react";
import "./registerForm.scss";
import google from "../../assets/img/google.png";
import { IoCloseOutline } from "react-icons/io5";

const RegisterForm = ({ onClose }) => {
  const [showForm, setShowForm] = useState(true);

  const handleCloseForm = () => {
    setShowForm(false);
    onClose(); // Закрытие формы и удаление класса для body
  };

  return (
    <>
      {showForm && (
        <div className="overlay">
          <div className="register">
            <IoCloseOutline className="register__close" onClick={handleCloseForm} />
            <p className="register__title">Регистрация</p>
            <p className="register__subtitle">
              Зарегистрируйте аккаунт для входа в портал
            </p>
            <div className="register__container">
              <div className="register__top">
                <div className="register__form">
                  <p className="register__form-title">Адрес электронной почты</p>
                  <input required type="text" className="register__input" placeholder="Почта" />
                </div>
                <div className="register__form">
                  <p className="register__form-title">Пароль</p>
                  <input required type="text" className="register__input" placeholder="Пароль" />
                </div>
              </div>
              <button className="register__btn">Зарегистрироваться</button>
              <button className="register__google">
                Продолжить с 
                <img className="register__google-img" src={google} alt="" />
              </button>
              <p className="register__link">Уже есть аккаунт?</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
