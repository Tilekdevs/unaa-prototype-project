import React, { Component } from 'react'
import axios from 'axios'
import './CalculatorServices.scss'

class CalculatorServices extends Component {
	constructor(props) {
		super(props)
		this.state = {
			carOptions: [],
			selectedCar: null,
			volumeOptions: [],
			selectedVolume: null,
			yearOptions: [],
			selectedYear: null,
			engineOptions: [],
			selectedEngine: null,
			statusOptions: [],
			selectedStatus: null,
			insuranceCost: null,
		}
	}

	componentDidMount() {
		this.fetchOptions('car')
		this.fetchOptions('volume')
		this.fetchOptions('year')
		this.fetchOptions('engine')
		this.fetchOptions('status')
	}

	fetchOptions = optionType => {
		axios
			.get(`http://127.0.0.1:8000/api/service/calculator`)
			.then(response => {
				const options = response.data.map(item => item[optionType][optionType])
				const stateKey = `selected${
					optionType.charAt(0).toUpperCase() + optionType.slice(1)
				}`
				this.setState({
					[`${optionType}Options`]: options,
					[stateKey]: options[0],
				})
			})
			.catch(error =>
				console.error(`Error fetching ${optionType} options:`, error)
			)
	}

	handleInputChange = (event, optionType) => {
		const stateKey = `selected${
			optionType.charAt(0).toUpperCase() + optionType.slice(1)
		}`
		this.setState({ [stateKey]: event.target.value })
	}

	calculateInsurance = () => {
		const {
			selectedCar,
			selectedVolume,
			selectedYear,
			selectedEngine,
			selectedStatus,
		} = this.state;
	
		axios
			.get('http://127.0.0.1:8000/api/service/calculator', {
				params: {
					car: selectedCar,
					volume: selectedVolume,
					year: selectedYear,
					engine: selectedEngine,
					status: selectedStatus,
				},
			})
			.then(response => {
				const matchingOption = response.data.find(option => (
					option.car.car === selectedCar &&
					option.volume.volume === selectedVolume &&
					option.year.year === selectedYear &&
					option.engine.engine === selectedEngine &&
					option.status.status === selectedStatus
				));
	
				const insuranceCost = matchingOption ? matchingOption.sum : null;
				this.setState({ insuranceCost });
			})
			.catch(error => console.error('Error calculating insurance:', error));
	};

	render() {
		const {
			carOptions,
			selectedCar,
			volumeOptions,
			selectedVolume,
			yearOptions,
			selectedYear,
			engineOptions,
			selectedEngine,
			statusOptions,
			selectedStatus,
			insuranceCost,
		} = this.state

		return (
			<div className='MainCalculatorContainer'>
				<h2>Calculator Services</h2>
				<div className='VehicleRegistration'>
					<div>
						<label>Тип авто:</label>
						<select
							onChange={e => this.handleInputChange(e, 'car')}
							value={selectedCar}
						>
							{carOptions.map((option, index) => (
								<option key={index} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
					<div>
						<label>Объем:</label>
						<select
							onChange={e => this.handleInputChange(e, 'volume')}
							value={selectedVolume}
						>
							{volumeOptions.map((option, index) => (
								<option key={index} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
					<div>
						<label>Год:</label>
						<select
							onChange={e => this.handleInputChange(e, 'year')}
							value={selectedYear}
						>
							{yearOptions.map((option, index) => (
								<option key={index} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
					<div>
						<label>Тип двигателя:</label>
						<select
							onChange={e => this.handleInputChange(e, 'engine')}
							value={selectedEngine}
						>
							{engineOptions.map((option, index) => (
								<option key={index} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
					<div>
						<label>Статус оформления:</label>
						<select
							onChange={e => this.handleInputChange(e, 'status')}
							value={selectedStatus}
						>
							{statusOptions.map((option, index) => (
								<option key={index} value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
				</div>
				<button onClick={this.calculateInsurance}>Рассчитать страховку</button>
				<div style={{ marginTop: '20px' }}>
					<h3>Стоимость страховки:</h3>
					<p>{insuranceCost !== null ? `${insuranceCost} Сом` : ''}</p>
				</div>
			</div>
		)
	}
}

export default CalculatorServices
