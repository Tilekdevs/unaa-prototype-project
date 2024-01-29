import React from 'react'
import '../../aboutUs.scss'

const Contacts = ({ data }) => {
	return (
		<div className='MainCardItem'>
			<div key={data.id} className='card'>
				<div className='info'>
					<div className='title'>
						<p className='title'>{` ${data.title || 'Н/Д'}`}</p>
						<a href='' className='address'>{`Адрес: ${
							data.address || 'Н/Д'
						}`}</a>
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
