// BurgerMenu.js

import React, { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import { IoMdClose } from 'react-icons/io'
import { HiMenuAlt3 } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import RegisterForm from '../RegisterForm/RegisterForm'
import './burgerMenu.scss'
import { FaAngleDown } from 'react-icons/fa'

const BurgerMenu = () => {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const [isDropdownOpen, setDropdownOpen] = useState(false)
	const [isModalOpen, setModalOpen] = useState(false)

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen)
	}

	const toggleDropdown = () => {
		setDropdownOpen(!isDropdownOpen)
	}

	const toggleModal = () => {
		setModalOpen(!isModalOpen)
		closeMenu()
	}

	const closeMenu = () => {
		setMenuOpen(false)
	}

	return (
		<div className='burger-menu'>
			<div className='burger-icon' onClick={toggleMenu}>
				<HiMenuAlt3 />
			</div>

			{isMenuOpen && <div className='overlay' onClick={closeMenu}></div>}

			<Menu
				isOpen={isMenuOpen}
				onStateChange={state => {
					if (state.isOpen !== isMenuOpen) {
						setMenuOpen(state.isOpen)
					}
				}}
				customBurgerIcon={false}
				customCrossIcon={false}
				width={'300px'}
				right
				styles={{
					bmBurgerButton: {
						display: 'none',
					},
					bmCrossButton: {
						height: '24px',
						width: '24px',
					},
					bmCross: {
						background: '#bdc3c7',
					},
					bmMenu: {
						background: '#1e88e5',
						padding: '2.5em 1.5em 0',
						fontSize: '1.15em',
					},
					bmMenuWrap: {
						top: '0px',
						zIndex: '6000',
						right: '-1px',
					},
					bmMorphShape: {
						fill: '#373a47',
					},
					bmItemList: {
						color: '#ffffff',
						padding: '0.8em',
					},
					bmOverlay: {
						background: 'rgba(0, 0, 0, 0.3)',
					},
				}}
			>
				<div className='close-icon' onClick={closeMenu}>
					<IoMdClose />
				</div>
				<ul className='menu-items'>
					<li onClick={toggleModal}>
						<Link to='/'>Войти/Регистрация</Link>
					</li>
					<li onClick={closeMenu}>
						<Link to='/'>Главная</Link>
					</li>
					<li onClick={closeMenu}>
						<Link to='/about'>О нас</Link>
					</li>
					<li onClick={closeMenu}>
						<Link to='/news'>Новости</Link>
					</li>
					<li
						onClick={e => {
							e.stopPropagation()
							toggleDropdown()
						}}
						className={isDropdownOpen ? 'open' : ''}
					>
						<p className='burger__menu-title'>
							Сервисы <FaAngleDown />
						</p>
						{isDropdownOpen && (
							<ul className='dropdown-menu'>
								<li>
									<Link to='/calculator'>Калькулятор</Link>
								</li>
								<li>
									<Link to='/request-for-inspection'>Форма обращения</Link>
								</li>
							</ul>
						)}
					</li>
					<li onClick={closeMenu}>
						<Link to='/contacts'>Информация</Link>
					</li>
					<li onClick={closeMenu}>
						<Link to='/jobs'>Вакансии</Link>
					</li>
					<li onClick={closeMenu}>
						<Link to='/camera'>Онлайн Камеры</Link>
					</li>
				</ul>
			</Menu>
			{isModalOpen && <RegisterForm onClose={toggleModal} />}
		</div>
	)
}

export default BurgerMenu
