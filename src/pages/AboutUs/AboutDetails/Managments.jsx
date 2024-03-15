import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../aboutUs.scss'

const Managment = () => {
	const [managementData, setManagementData] = useState([])

	useEffect(() => {
		const fetchManagementData = async () => {
			try {
				const response = await axios.get(
					'http://127.0.0.1:8000/api/about/management'
				)
				console.log('Response data:', response.data)
				setManagementData(response.data)
			} catch (error) {
				console.error('Error fetching management data:', error)
			}
		}

		fetchManagementData()
	}, [])

	return (
		<section className='managment'>
			<div className="managment__container">
				<div className="managment__card">
					<img className='managment__img' src="" alt="" />
					<h3 className="managment__title">Managment 1</h3>
					<p className="managment__status">Руководитель</p>
				</div>

				<div className="managment__card">
					<img className='managment__img' src="" alt="" />
					<h3 className="managment__title">Managment 1</h3>
					<p className="managment__status">Руководитель</p>
				</div>

				<div className="managment__card">
					<img className='managment__img' src="" alt="" />
					<h3 className="managment__title">Managment 1</h3>
					<p className="managment__status">Руководитель</p>
				</div>
			</div>
		</section>
	)
}

export default Managment