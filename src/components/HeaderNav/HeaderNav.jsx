import React from 'react'
import { Link } from 'react-router-dom'
import '../../layout/Header/header.scss'
import Services from '../../pages/Services/Services'

const HeaderNav = () => {
	return (
		<nav className='header__nav'>
			<ul className='header__nav-list'>
				<li>
					<Link className='header__nav-item' to='/'>
						Главная
					</Link>
				</li>
				<li>
					<Link className='header__nav-item' to='/about'>
						О нас
					</Link>
				</li>
				<li>
					<Link className='header__nav-item' to='/news'>
						Новости
					</Link>
				</li>
				<li>
					<Link className='header__nav-item'>
						<Services />
					</Link>
				</li>
				<li>
					<Link className='header__nav-item' to='/information'>
						Информация
					</Link>
				</li>
				<li>
					<Link className='header__nav-item' to='/jobs'>
						Вакансии
					</Link>
				</li>
				<li>
					<Link className='header__nav-item' to='/camera'>
						Онлайн Камеры
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderNav
