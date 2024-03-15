import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  Stack,
  TextField,
} from "@mui/material";
import useCityData from "../../hooks/useCityData";
import useDepartmentData from "../../hooks/useDepartmentData";
import { useSelector } from "react-redux";
import axios from 'axios';

const InspectionForm = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Onest, sans-serif",
    },
  });

  const [selectedCityId, setSelectedCityId] = useState("");
  const [selectedDepartmentId, setSelectedDepartmentId] = useState("");
  const city = useCityData();
  const department = useDepartmentData();
  const user = useSelector((state) => state.user.userData);

  const [formData, setFormData] = useState({
    category_id: {selectedCityId},
    nearest_department_id: {selectedDepartmentId},
    fullName: "",
    phoneNumber: "",
    email: "",
    carNumber: "",
    createdDate: new Date().toISOString(),
    isActive: true
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCityChange = (event) => {
    setSelectedCityId(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartmentId(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const requestData = {
        category_id: selectedCityId,
        nearest_department_id: selectedDepartmentId,
        full_name: formData.fullName,
        phone_number: formData.phoneNumber,
        email: formData.email,
        car_number: formData.carNumber,
        created_date: formData.createdDate,
        is_active: formData.isActive
      };
        
      console.log('RequestData:', requestData);
      const response = await axios.post('http://127.0.0.1:8000/api/online/create_appeal', requestData);
      console.log('Response:', response.data);
      
    } catch (error) {
      console.error('Error:', error);
      
    }
  };
  

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit} className="inspection__form">
        <h2 className="inspection__title">Оставьте заявку на осмотр</h2>
        <p className="inspection__subtitle">
          Наши сотрудники вскоре свяжутся с вами для уточнения деталей.
        </p>
        <Stack>
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel id="city-label">Область</InputLabel>
            <MuiSelect
              labelId="city-label"
              id="city-select"
              value={selectedCityId}
              onChange={handleCityChange}
              label="Ваш округ"
            >
              {city.map((item) => (
                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
              ))}
            </MuiSelect>
          </FormControl>
        </Stack>
        <Stack>
          <FormControl variant="outlined" sx={{ minWidth: 120 }}>
            <InputLabel id="department-label">Отделение</InputLabel>
            <MuiSelect
              labelId="department-label"
              id="department-select"
              value={selectedDepartmentId}
              onChange={handleDepartmentChange}
              label="Ваше отделение"
            >
              {department.map((item) => (
                <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
              ))}
            </MuiSelect>
          </FormControl>
        </Stack>
        <TextField
          className="inspection__input"
          placeholder="Ф.И.О."
          variant="outlined"
          label="Введите Ф.И.О."
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
        <TextField
          className="inspection__input"
          placeholder="+(996)"
          variant="outlined"
          label="Введите номер телефона"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <TextField
          className="inspection__input"
          placeholder="example@gmail.com"
          variant="outlined"
          label="Введите электронный адрес"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
          type="email"
        />
        <TextField
          className="inspection__input"
          variant="outlined"
          label="Ваш номер автомобиля"
          name="carNumber"
          value={formData.carNumber}
          onChange={handleInputChange}
          required
        />
       {
        user.username ? (
          <button type="submit" className="inspection__btn">Отправить</button>
        ) :
        (
          <button className="inspection__btn" disabled>Зарегистрируйтесь</button>
        )
       }
      </form>
    </ThemeProvider>
  );
};

export default InspectionForm;
