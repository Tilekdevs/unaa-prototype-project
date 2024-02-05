import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../aboutUs.scss'

const Managments = () => {
	const [managementData, setManagementData] = useState([])

	useEffect(() => {
		const fetchManagementData = async () => {
			try {
				const response = await axios.get(
					'http://127.0.0.1:8000/api/about/management'
				)
				setManagementData(response.data)
			} catch (error) {
				console.error('Error fetching management data:', error)
			}
		}

		fetchManagementData()
	}, [])

	return (
		<div className='MainManagmentContainer'>
			{managementData.map((manager, index) => (
				<div className='card' key={index}>
					  <img className='card__img' src={`http://127.0.0.1:8000${manager.avatar}`} alt='' />
            <div className="info__container">
            <h2 className='title'>{manager.name}</h2>
					<p>{manager.description}</p>
            </div>
					
				</div>
			))}
		</div>
	)
}

export default Managments
