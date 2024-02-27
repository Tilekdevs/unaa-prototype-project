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

const InspectionForm = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Onest, sans-serif",
    },
  });

  const [vehicle, setVehicle] = useState("");

  const handleChange = (event) => {
    if (event.target) {
      setVehicle(event.target.value);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <form action="" className="inspection__form">
        <h2 className="inspection__title">Оставьте заявку на осмотр</h2>
        <p className="inspection__subtitle">
          Наши сотрудники вскоре свяжутся с вами для уточнения деталей.
        </p>
        <Stack>
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="vehicle-label">Ваш округ</InputLabel>
            <MuiSelect
              labelId="vehicle-label"
              id="vehicle-select"
              value={vehicle}
              onChange={handleChange}
              label="Ваш округ"
            >
              <MenuItem value="car">Бишкек</MenuItem>
            </MuiSelect>
          </FormControl>
        </Stack>
        <TextField
          className="inspection__input"
          placeholder="Ф.И.О."
          variant="standard"
          label="Введите Ф.И.О."
          required
        />
        <TextField
          className="inspection__input"
          placeholder="+(996)"
          variant="standard"
          label="Введите номер телефона"
          required
        />
        <TextField
          className="inspection__input"
          placeholder="example@gmail.com"
          variant="standard"
          label="Введите электронный адрес"
          required
        />
        <TextField
          className="inspection__input"
          variant="standard"
          label="Ваш номер автомобиля"
          required
        />
        <button className="inspection__btn">Отправить</button>
      </form>
    </ThemeProvider>
  );
};

export default InspectionForm;
