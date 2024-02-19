import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as MuiSelect,
  Stack,
  TextField,
} from "@mui/material";
import "./RequestInspection.scss";
import map from '../../../assets/img/test.jpg'

const theme = createTheme({
  typography: {
    fontFamily: "Onest, sans-serif",
  },
});

const RequestInspection = () => {
  const [vehicle, setVehicle] = useState("");

  const handleChange = (event) => {
    setVehicle(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <section className="inspection">
        <div className="inspection__container">
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

          <div className="inspection__faq">
            <h2 className="inpesction__faq-title">Остались вопросы?</h2>
            <p className="inspection__faq-subtitle">Наш офис</p>
            <address className="inspection__faq-address">ул. Чокана Валиханова, 2а 720048, Бишкек, Кыргызстан</address>
            <p className="inspection__faq-number">0312 63-14-40</p>
            <p className="inspection__faq-number">0312 63-01-86</p>
            <p className="inspection__faq-email">unaa@unaa.srs.kg</p>
            <img src={map} alt="" className="inspection__faq-map" />
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};

export default RequestInspection;
