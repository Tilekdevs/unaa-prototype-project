import React from 'react'
import '../../aboutUs.scss'

const Contacts = ({ data }) => {
	return (
		<div className='MainCardItem'>
			<div key={data.id} className='card'>
				<div className='info'>
					<div className='title'>
						<h2 className='MainTitle'>{` ${data.title || 'Н/Д'}`}</h2>
						<p className='address'>{`Адрес: ${
							data.address || 'Н/Д'
						}`}</p>
						<p className='phone'>{`Тел:  ${data.phone || 'Н/Д'}`}</p>
						<p className='time_job'>{`График работы: ${
							data.time_job || 'Н/Д'
						}`}</p>
						<br />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts
