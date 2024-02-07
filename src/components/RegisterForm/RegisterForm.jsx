import React from "react";
import "./registerForm.scss";
import google from "../../assets/img/google.png";

const RegisterForm = () => {
  return (
    <form className="register">
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
    </form>
  );
};

export default RegisterForm;
