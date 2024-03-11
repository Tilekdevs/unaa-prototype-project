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

const InspectionForm = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Onest, sans-serif",
    },
  });

  const [selectedCity, setSelectedCity] = useState(""); 
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const city = useCityData();
  const department = useDepartmentData();

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <form action="" className="inspection__form">
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
              value={selectedCity}
              onChange={handleCityChange}
              label="Ваш округ"
            >
              {city.map((item) => (
                <MenuItem key={item.id} value={item.title}>
                  {item.title}
                </MenuItem>
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
              value={selectedDepartment}
              onChange={handleDepartmentChange}
              label="Ваше отделение"
            >
              {department.map((item) => (
                <MenuItem key={item.id} value={item.title}>
                  {item.title}
                </MenuItem>
              ))}
            </MuiSelect>
          </FormControl>
        </Stack>
        <TextField
          className="inspection__input"
          placeholder="Ф.И.О."
          variant="outlined"
          label="Введите Ф.И.О."
          required
        />
        <TextField
          className="inspection__input"
          placeholder="+(996)"
          variant="outlined"
          label="Введите номер телефона"
          required
        />
        <TextField
          className="inspection__input"
          placeholder="example@gmail.com"
          variant="outlined"
          label="Введите электронный адрес"
          required
          type="email"
        />
        <TextField
          className="inspection__input"
          variant="outlined"
          label="Ваш номер автомобиля"
          required
        />
        <button className="inspection__btn">Отправить</button>
      </form>
    </ThemeProvider>
  );
};

export default InspectionForm;
