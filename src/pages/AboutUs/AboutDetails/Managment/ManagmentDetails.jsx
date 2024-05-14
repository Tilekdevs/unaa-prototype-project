import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './managment.scss'

const ManagmentDetails = () => {
	const { id } = useParams() 
	const [managementDetailsData, setManagementDetailsData] = useState(null)

	useEffect(() => {
		const fetchManagementData = async () => {
			try {
				const response = await axios.get(
					`http://127.0.0.1:8000/api/about/management/${id}`
				)
				console.log('Response data:', response.data)
				setManagementDetailsData(response.data)
			} catch (error) {
				console.error('Error fetching management data:', error)
			}
		}

		fetchManagementData()
	}, [id]) // Обновляем эффект при изменении id

	return (
		<div className='MainManagmentDetails'>
			<div className='container'>
				{managementDetailsData && (
					<div className='managment__details'>
						<img
							className='managment__img'
							src={managementDetailsData.image}
							alt=' '
						/>
						<h3 className='managment__title'>{managementDetailsData.name}</h3>
						<p>{managementDetailsData.description}</p>
					</div>
				)}
			</div>
		</div>
	)
}

export default ManagmentDetails
