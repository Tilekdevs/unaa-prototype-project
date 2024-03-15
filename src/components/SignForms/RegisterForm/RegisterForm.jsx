import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import LoginForm from '../LoginForm/LoginForm'
import google from '../../../assets/img/google.png'
import './registerForm.scss'

const RegisterForm = ({ onClose }) => {
	const [isVisible, setIsVisible] = useState(false)
	const [showLoginForm, setShowLoginForm] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(true)
		}, 150)

		return () => clearTimeout(timer)
	}, [])

	const handleCloseForm = () => {
		onClose()
	}

	const toggleForm = () => {
		setShowLoginForm(!showLoginForm)
	}

	const renderLoginForm = () => <LoginForm onClose={onClose} />

	return (
		<>
			{showLoginForm ? (
				renderLoginForm()
			) : (
				<div className={`overlay ${isVisible ? 'show' : ''}`}>
					<form className={`register ${isVisible ? 'show' : ''}`}>
						<button className='register__close' onClick={handleCloseForm}>
							<AiOutlineClose />
						</button>
						<p className='register__title'>Регистрация</p>
						<p className='register__subtitle'>
							Зарегистрируйте аккаунт для входа в портал
						</p>
						<div className='register__container'>
							<div className='register__top'>
								{['Имя', 'Фамилия', 'Адрес электронной почты', 'Пароль'].map(
									(title, index) => (
										<div className='register__form' key={index}>
											<p className='register__form-title'>{title}</p>
											<input
												required
												type={index === 2 ? 'text' : 'password'}
												className='register__input'
												placeholder={title}
											/>
										</div>
									)
								)}
							</div>
							<div className='register__bottom'>
								<button className='register__btn'>Зарегистрироваться</button>
								<button className='register__google'>
									Продолжить с
									<img className='register__google-img' src={google} alt='' />
								</button>
								<p href='#' className='register__link' onClick={toggleForm}>
									Уже есть аккаунт?
								</p>
							</div>
						</div>
					</form>
				</div>
			)}
		</>
	)
}

export default RegisterForm
