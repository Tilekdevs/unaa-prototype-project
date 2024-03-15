import React from 'react'
import { IoCloseOutline } from 'react-icons/io5'
import './loginForm.scss'

const LoginForm = ({ onClose }) => {
	const handleCloseForm = () => {
		onClose()
	}

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
						{['Адрес электронной почты', 'Пароль'].map((title, index) => (
							<div className='login__form' key={index}>
								<p className='login__form-title'>{title}</p>
								<input
									required
									type={index === 0 ? 'text' : 'password'}
									className='login__input'
									placeholder={index === 0 ? 'Почта...' : 'Пароль'}
								/>
							</div>
						))}
					</div>
					<button className='login__btn'>Войти</button>
				</div>
			</div>
		</div>
	)
}

export default LoginForm
