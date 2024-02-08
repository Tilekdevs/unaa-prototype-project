import CloseIcon from '@mui/icons-material/Close'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FormControl from '@mui/material/FormControl'
import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import Modal from '@mui/material/Modal'
import OutlinedInput from '@mui/material/OutlinedInput'
import TextField from '@mui/material/TextField'
import * as React from 'react'

import './SignModal.scss'

const BasicModal = () => {
  const [open, setOpen] = React.useState(false)
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [showPassword, setShowPassword] = React.useState(false)
  const [error, setError] = React.useState('')

  const handleClickShowPassword = () => setShowPassword(show => !show)

  const handleMouseDownPassword = event => {
    event.preventDefault()
  }

  const handleUsernameChange = event => {
    setUsername(event.target.value)
    setError('')
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
    setError('')
  }

  const handleShowLoginForm = () => {
    setOpen(true)
    setError('Error In ShowLogin')
  }

  const isFormValid =
    (username.includes('@gmail.com') || username.includes('@mail.ru')) &&
    password !== ''

  const handleSubmit = async () => {
    if (!isFormValid) {
      setError('Неверный email. Пожалуйста проверьте поле ввода...')
      return
    }

    // Add your axios post request logic here

    // Mock example:
    setOpen(false)
    setUsername('')
    setPassword('')
    setError('')
  }

  const handleOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false)
    setUsername('')
    setPassword('')
    setError('')
  }

  return (
    <div className='MainSignFormModal'>
      <Button onClick={handleOpen} style={{ color: 'white' }}>
        Войти
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        BackdropProps={{
          onClick: event => {
            event.stopPropagation()
          },
        }}
      >
        <Box
          className={`style ${open ? 'open' : ''}`}
          onClick={event => event.stopPropagation()}
        >
          <div className='style__ModalButtonForm'>
            <h1>Регистрация</h1>
            <IconButton
              aria-label='close'
              onClick={handleClose}
              style={{
                position: 'absolute',
                top: '-150px',
                left: '280px',
                backgroundColor: 'transparent',
                color: 'black',
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <div className='MainSignModal'>
            <div className='ModalFormSign'>
              <div className='TextEmailForm'>
                <TextField
                  style={{
                    width: '390px',
                    borderRadius: '20px',
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '20px',
                    },
                  }}
                  className='EmailForm'
                  id='outlined-multiline-flexible'
                  label='Введите почту...'
                  maxRows={4}
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              {/* Password Form */}
              <FormControl
                sx={{ m: 1, width: '390px', borderRadius: '20px' }}
                variant='outlined'
              >
                <InputLabel htmlFor='outlined-adornment-password'>
                  Пароль
                </InputLabel>
                <OutlinedInput
                  id='outlined-adornment-password'
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={handlePasswordChange}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label='Password'
                />
              </FormControl>
              {/* Add any other form elements or buttons as needed */}
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default BasicModal
