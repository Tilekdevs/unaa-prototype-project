import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './CalculatorServices.scss'
import SetkaTS from '../../../assets/img/setkaKR.png'

const CalculatorServices = () => {
	const [carType, setCarType] = useState('Легковое')
	const [engineVolume, setEngineVolume] = useState('')
	const [year, setYear] = useState('')
	const [engineType, setEngineType] = useState('')
	const [status, setStatus] = useState('')
	const [insuranceCost, setInsuranceCost] = useState(null)
	const [tariffsForCars, setTariffsForCars] = useState([])

	useEffect(() => {
		const fetchTariffs = async () => {
			try {
				const response = await axios.get(
					'http://127.0.0.1:8000/api/service/calculator'
				)
				const tariffs = response.data
				const filteredTariffs = tariffs.filter(
					tariff =>
						tariff.car.car === carType &&
						(!year || tariff.year.year.includes(year)) &&
						(!engineType || tariff.engine.engine === engineType) &&
						(!status || tariff.status.status === status)
				)
				const groupedTariffs = groupByEngineVolume(filteredTariffs)
				setTariffsForCars(groupedTariffs)
			} catch (error) {
				console.error('Error fetching tariffs:', error)
			}
		}

		fetchTariffs()
	}, [carType, year, engineType, status])

	const groupByEngineVolume = tariffs => {
		return tariffs.reduce((acc, tariff) => {
			const volume = formattedVolume(tariff.volume.volume)
			if (!acc[volume]) {
				acc[volume] = []
			}
			acc[volume].push(tariff)
			return acc
		}, {})
	}

	const formattedVolume = volume => {
		const match = volume.match(/\d+/g)
		if (match && match.length === 1) {
			return `до ${match[0]} см. куб. и ниже`
		} else if (match && match.length === 2) {
			return `с ${match[0]} до ${match[1]} см. куб.`
		} else {
			return ''
		}
	}

	const calculateInsurance = () => {
		if (engineVolume && tariffsForCars[engineVolume]) {
			const selectedTariff = tariffsForCars[engineVolume].find(
				tariff => tariff.volume.volume === engineVolume
			)
			if (selectedTariff) {
				setInsuranceCost(selectedTariff.sum)
			} else {
				setInsuranceCost('Тариф не найден')
			}
		} else {
			setInsuranceCost('Выберите объем двигателя')
		}
	}

	return (
		<div className='MainCalculatorContainer'>
			<h2>Калькулятор оформления ТС</h2>
			<div className='VehicleRegistration'>
				<div>
					<label htmlFor='carType'>Тип автомобиля:</label>
					<select id='carType' onChange={e => setCarType(e.target.value)}>
						<option value='Легковое'>Легковое</option>
					</select>
				</div>
				<div>
					<label htmlFor='engineVolume'>Объем двигателя:</label>
					<select
						id='engineVolume'
						onChange={e => setEngineVolume(e.target.value)}
					>
						<option value=''>Выберите объем</option>
						{Object.keys(tariffsForCars).map(volume => (
							<option key={volume} value={volume}>
								{volume}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor='year'>Год выпуска:</label>
					<select id='year' onChange={e => setYear(e.target.value)}>
						<option value=''>Выберите год</option>
						<option value='2023'>2023</option>
					</select>
				</div>
				<div>
					<label htmlFor='engineType'>Тип двигателя:</label>
					<select id='engineType' onChange={e => setEngineType(e.target.value)}>
						<option value=''>Выберите тип двигателя</option>
						<option value='Бензин / Дизель / Газ'>Бензин / Дизель / Газ</option>
					</select>
				</div>
				<div>
					<label htmlFor='status'>Статус:</label>
					<select id='status' onChange={e => setStatus(e.target.value)}>
						<option value=''>Выберите статус</option>
						<option value='Первичное'>Первичное</option>
					</select>
				</div>
			</div>
			<button onClick={calculateInsurance}>Рассчитать страховку</button>
			<div>
				<h3>Стоимость страховки:</h3>
				<p>
					{insuranceCost} <a href={SetkaTS}>см. по сетке</a>
				</p>
			</div>
		</div>
	)
}

export default CalculatorServices
