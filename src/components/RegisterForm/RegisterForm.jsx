import React, { useState, useEffect, useCallback } from "react";
import "./registerForm.scss";
import google from "../../assets/img/google.png";
import { AiOutlineClose } from "react-icons/ai";
import LoginForm from "../LoginForm/LoginForm";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginAccount } from "../../redux/reducers/userSlice";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const RegisterForm = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [isRegistrationSuccess, setIsRegistrationSuccess] = useState(false); // Состояние для отслеживания успешной регистрации
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const handleCloseForm = useCallback(() => {
    onClose();
  }, [onClose]);

  const toggleForm = useCallback(() => {
    setShowLoginForm((prevShowLoginForm) => !prevShowLoginForm);
  }, []);

  const onSubmit = useCallback((data) => {
    axios
      .post(`http://127.0.0.1:8000/api/register/register`, data)
      .then((response) => {
        const userData = {
          username: data.username,
          password: data.password,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
        };
        console.log(response);
        dispatch(loginAccount(userData));
        setIsRegistrationSuccess(true); // Устанавливаем состояние успешной регистрации в true
        onClose();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dispatch, onClose]);

  const handleSnackbarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsRegistrationSuccess(false); // Закрываем Snackbar и сбрасываем состояние успешной регистрации
  };

  return (
    <>
      {showLoginForm ? (
        <LoginForm onClose={onClose} />
      ) : (
        <div className={`overlay ${isVisible ? "show" : ""}`}>
          <form
            className={`register ${isVisible ? "show" : ""}`}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
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
                    {...register("first_name", { required: true })}
                    type="text"
                    className={`register__input ${
                      errors.first_name ? "error" : ""
                    }`}
                    placeholder="Имя"
                  />
                  {errors.first_name && (
                    <span className="error-message">Это поле обязательно</span>
                  )}
                </div>
                <div className="register__form">
                  <p className="register__form-title">Фамилия</p>
                  <input
                    {...register("last_name", { required: true })}
                    type="text"
                    className={`register__input ${
                      errors.last_name ? "error" : ""
                    }`}
                    placeholder="Фамилия"
                  />
                  {errors.last_name && (
                    <span className="error-message">Это поле обязательно</span>
                  )}
                </div>
                <div className="register__form">
                  <p className="register__form-title">
                    Адрес электронной почты
                  </p>
                  <input
                    {...register("email", {
                      required: true,
                      pattern: /^\S+@\S+$/i,
                    })}
                    type="text"
                    className={`register__input ${errors.email ? "error" : ""}`}
                    placeholder="Почта"
                  />
                  {errors.email && (
                    <span className="error-message">
                      Введите корректный email адрес
                    </span>
                  )}
                </div>
                <div className="register__form">
                  <p className="register__form-title">Логин</p>
                  <input
                    {...register("username", { required: true })}
                    type="text"
                    className={`register__input ${
                      errors.username ? "error" : ""
                    }`}
                    placeholder="Логин"
                  />
                  {errors.username && (
                    <span className="error-message">Это поле обязательно</span>
                  )}
                </div>
                <div className="register__form">
                  <p className="register__form-title">Пароль</p>
                  <input
                    {...register("password", { required: true, minLength: 6 })}
                    type="password"
                    className={`register__input ${
                      errors.password ? "error" : ""
                    }`}
                    placeholder="Пароль"
                  />
                  {errors.password && (
                    <span className="error-message">
                      Пароль должен содержать минимум 6 символов
                    </span>
                  )}
                </div>
              </div>
              <div className="register__bottom">
                <button type="submit" className="register__btn">
                  Зарегистрироваться
                </button>
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
          <Snackbar
            open={isRegistrationSuccess}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
          >
            <MuiAlert
              elevation={6}
              variant="filled"
              onClose={handleSnackbarClose}
              severity="success"
            >
              Регистрация успешно завершена!
            </MuiAlert>
          </Snackbar>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
