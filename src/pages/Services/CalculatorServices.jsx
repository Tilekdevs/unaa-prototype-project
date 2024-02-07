import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CalculatorServices = () => {
  const [carType, setCarType] = useState(null);
  const [engineVolume, setEngineVolume] = useState(null);
  const [year, setYear] = useState(null);
  const [insuranceCost, setInsuranceCost] = useState(null);
  const [tariffs, setTariffs] = useState([]);

  useEffect(() => {
    const fetchTariffs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/service/calculator');
        setTariffs(response.data);
      } catch (error) {
        console.error('Error fetching tariffs:', error);
      }
    };

    fetchTariffs();
  }, []);

  const calculateInsurance = () => {
    if (carType && engineVolume && year) {
      const selectedTariff = tariffs.find(item => 
        item.car.id === carType &&
        item.volume.id === engineVolume &&
        item.year.id === year
      );
      if (selectedTariff) {
        setInsuranceCost(selectedTariff.sum);
      } else {
        setInsuranceCost('Тариф не найден');
      }
    } else {
      setInsuranceCost('Выберите все параметры');
    }
  };

  return (
    <div className='calculator'>
      <h2>Калькулятор страхования</h2>
      <div>
        <label htmlFor='carType'>Тип автомобиля:</label>
        <select id='carType' onChange={e => setCarType(parseInt(e.target.value))}>
          <option value=''>Выберите тип</option>
          {tariffs.map((tariff, index) => (
            <option key={`car-${tariff.car.id}-${index}`} value={tariff.car.id}>{tariff.car.car}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor='engineVolume'>Объем двигателя:</label>
        <select id='engineVolume' onChange={e => setEngineVolume(parseInt(e.target.value))}>
          <option value=''>Выберите объем</option>
          {tariffs.map((tariff, index) => (
            <option key={`volume-${tariff.volume.id}-${index}`} value={tariff.volume.id}>{tariff.volume.volume}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor='year'>Год выпуска:</label>
        <select id='year' onChange={e => setYear(parseInt(e.target.value))}>
          <option value=''>Выберите год</option>
          {tariffs.map((tariff, index) => (
            <option key={`year-${tariff.year.id}-${index}`} value={tariff.year.id}>{tariff.year.year}</option>
          ))}
        </select>
      </div>
      <button onClick={calculateInsurance}>Рассчитать страховку</button>
      <div>
        <h3>Стоимость страховки:</h3>
        <p>{insuranceCost}</p>
      </div>
    </div>
  );
};

export default CalculatorServices;
