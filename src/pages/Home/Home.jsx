import React from 'react'
import './home.scss'
import HomeSwiper from '../../components/HomeSwiper/HomeSwiper'
import HomeNews from '../../components/HomeNews/HomeNews'
import CalculatorServices from '../Services/Calculator/CalculatorServices'

const Home = () => {
	return (
		<section className='home'>
			<HomeSwiper />
			<HomeNews />
			<CalculatorServices />
		</section>
	)
}

export default Home
