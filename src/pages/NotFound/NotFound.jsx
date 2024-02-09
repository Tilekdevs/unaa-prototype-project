import React from 'react'
import './notFound.scss'
import { useNavigate } from 'react-router-dom';

const NotFound = () => {

    const navigate = useNavigate()

  return (
    <div className='notfound'>
        <div className="notfound__container">
            <h2 className="notfound__title">404</h2>
            <p className="notfound__subtitle">Данная страница не найдена</p>
            <button onClick={() => navigate('/')} className="notfound__btn">Главная</button>
        </div>
    </div>
  )
}

export default NotFound