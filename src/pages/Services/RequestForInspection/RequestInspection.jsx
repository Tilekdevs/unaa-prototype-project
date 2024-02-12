import React, { useState } from 'react'
import './RequestInspection.scss'

const RequestInspection = () => {
	const [selectedOption, setSelectedOption] = useState('')
	const [branches, setBranches] = useState([])
	const [phoneNumber, setPhoneNumber] = useState('')
	const [carNumber, setCarNumber] = useState('')
	const [carInfo, setCarInfo] = useState({ brand: '', model: '', year: '' })
	const [carBrand, setCarBrand] = useState('')
	const [carModel, setCarModel] = useState('')
	const [carYear, setCarYear] = useState('')

	const handleOptionChange = e => {
		const selectedOption = e.target.value
		setSelectedOption(selectedOption)
		const branchesForOption = getBranchesForOption(selectedOption)

		setBranches(branchesForOption)
	}

	const getBranchesForOption = option => {
		const dummyBranches = {
			Osh: ['Branch 1 - Osh', 'Branch 2 - Osh', 'Branch 3 - Osh'],
			Bishkek: [
				'Branch 1 - Bishkek',
				'Branch 2 - Bishkek',
				'Branch 3 - Bishkek',
			],
			Chuy: ['Branch 1 - Chuy', 'Branch 2 - Chuy', 'Branch 3 - Chuy'],
			Naryn: ['Branch 1 - Naryn', 'Branch 2 - Naryn', 'Branch 3 - Naryn'],
			IssykKul: [
				'Branch 1 - Issyk-Kul',
				'Branch 2 - Issyk-Kul',
				'Branch 3 - Issyk-Kul',
			],
			Talas: ['Branch 1 - Talas', 'Branch 2 - Talas', 'Branch 3 - Talas'],
			'Jalal-Abad': [
				'Branch 1 - Jalal-Abad',
				'Branch 2 - Jalal-Abad',
				'Branch 3 - Jalal-Abad',
			],
			Batken: ['Branch 1 - Batken', 'Branch 2 - Batken', 'Branch 3 - Batken'],
		}

		return dummyBranches[option] || []
	}

	const handleSubmit = e => {
		e.preventDefault()

		// Perform the submission logic here
		console.log('Form submitted:', {
			selectedOption,
			phoneNumber,
			carNumber,
			carInfo,
			branches,
		})
	}

	return (
		<div className='MainRequestInspectionContainer'>
			<div className='container'>
				<form className='request-inspection-form' onSubmit={handleSubmit}>
					<label htmlFor='option'>Выберите регион или отделение:</label>
					<select
						id='option'
						name='option'
						value={selectedOption}
						onChange={handleOptionChange}
					>
						<option value='' disabled>
							Выберите регион или отделение
						</option>
						<option value='Osh'>Ош</option>
						<option value='Bishkek'>Бишкек</option>
						<option value='Chuy'>Чуй</option>
						<option value='Naryn'>Нарын</option>
						<option value='IssykKul'>Иссык-Куль</option>
						<option value='Talas'>Талас</option>
						<option value='Jalal-Abad'>Джалал-Абад</option>
						<option value='Batken'>Баткен</option>
					</select>

					{branches.length > 0 && (
						<>
							<label htmlFor='branch'>Ближайшие отделения:</label>
							<select id='branch' name='branch'>
								{branches.map((branch, index) => (
									<option key={index} value={branch}>
										{branch}
									</option>
								))}
							</select>
						</>
					)}

					<label htmlFor='phoneNumber'>Номер телефона:</label>
					<input
						type='tel'
						id='phoneNumber'
						name='phoneNumber'
						placeholder='+996-700-000-000 либо 0700-00-000'
						value={phoneNumber}
						onChange={e => setPhoneNumber(e.target.value)}
					/>

					<label htmlFor='carInfo'>Марка и модель авто:</label>
					<div className='car-info'>
						<select
							id='carBrand'
							name='carBrand'
							value={carInfo.brand}
							onChange={e => setCarInfo({ ...carInfo, brand: e.target.value })}
						>
							<option value='' disabled>
								Выберите марку авто
							</option>
							<option value='Toyota'>Toyota</option>
							<option value='Honda'>Honda</option>
							<option value='Ford'>Ford</option>
						</select>

						<input
							type='text'
							id='carModel'
							name='carModel'
							placeholder='Модель авто...'
							value={carInfo.model}
							onChange={e => setCarInfo({ ...carInfo, model: e.target.value })}
						/>
					</div>

					<label htmlFor='carYear'>Год производства авто:</label>
					<input
						type='text'
						id='carYear'
						name='carYear'
						placeholder='Год производства...'
						value={carInfo.year}
						onChange={e => setCarInfo({ ...carInfo, year: e.target.value })}
					/>

					<label htmlFor='name'>ФИО:</label>
					<input type='text' id='name' name='name' placeholder='ФИО...' />

					<label htmlFor='message'>Сообщение:</label>
					<textarea
						id='message'
						name='message'
						rows='4'
						placeholder='Сообщение...'
					></textarea>

					<button type='submit'>Отправить</button>
				</form>
			</div>
		</div>
	)
}

export default RequestInspection
