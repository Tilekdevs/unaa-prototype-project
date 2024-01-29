import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import TextField from '@mui/material/TextField';
import './SignModal.scss';

const BasicModal = () => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setError('');
  };

  const handleShowLoginForm = () => {
    setShowLoginForm(true);
    setError('Error In ShowLogin')
  };

  const isFormValid = (username.includes('@gmail.com') || username.includes('@mail.ru')) && password !== '';


  const handleSubmit = async () => {
    if (!isFormValid) {
      setError('Неверный email. Пожалуйста проверьте поле ввода...');
      return;
    }

    axios
      .post('https://65ae32431dfbae409a743551.mockapi.io/email/v1/Email', {
        email: username,
        password,
  })
  .then((response) => {
    console.log('API Response:', response.data);

    if (response.data.email) {
      console.log('Регистрация выполнена');
      setUsername('');
      setPassword('');
      setError('');
      handleClose();
    } else {
      console.error('Error during registration:', response.data);
      setError('Ошибка во время регистрации. Попробуйте еще раз.');
    }
  })
  .catch((error) => {
    console.error('Error during registration:', error.response);
    setError('Ошибка во время регистрации. Попробуйте еще раз.');
  });

}


  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div className='MainSignFormModal'>
      <Button onClick={handleOpen}>Войти</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={`style ${open ? 'open' : ''}`}>
          <h3>Регистрация</h3>
          <TextField
            id="standard-multiline-flexible"
            label="Электронная почта"
            multiline
            maxRows={4}
            variant="standard"
            value={username}
            onChange={handleUsernameChange}
          />
          <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
            <InputLabel htmlFor="standard-adornment-password">Пароль</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              style={{ width: '18ch' }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              />
              <button style={{border: "none", backgroundColor: "white",cursor: "pointer"}}>Забыли пароль</button>
            <div className='style__ModalButtonForm'>
              <Button onClick={handleSubmit} style={{position: "relative", top: "80px"}}>Зарегистрироваться</Button>
            </div>
            {error && <p className='style__error' style={{ color: 'red', position: "relative", top: "-30px" }}>{error}</p>}
          </FormControl>
            <div className='SignInModalForm'>
              <div>
                <Button style={{width: "100px", height: "350px", borderRadius: "45px", color: "white"}}>Войти</Button>
              </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
};

export default BasicModal;
