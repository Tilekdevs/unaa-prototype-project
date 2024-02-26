import React from 'react'
import './notFound.scss'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFound = () => {

    const navigate = useNavigate()

    const {t} = useTranslation();

  return (
    <div className='notfound'>
        <div className="notfound__container">
            <h2 className="notfound__title">404</h2>
            <p className="notfound__subtitle">{t("notfound")}</p>
            <button onClick={() => navigate('/')} className="notfound__btn">{t("home")}</button>
        </div>
    </div>
  )
}

export default NotFound