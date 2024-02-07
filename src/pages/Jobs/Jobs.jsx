import React from 'react'
import './jobs.scss'
import Navigation from '../../components/Navigation/Navigation'
import RegisterForm from '../../components/RegisterForm/RegisterForm'


const Jobs = () => {
  return (
    <section className='jobs'>  
     <RegisterForm/>
    <Navigation/>  
        <div className="jobs__container">
            <div className="jobs__card">
                <h2 className="jobs__title">Оператор</h2>
                <p className="jobs__location">Бишкек</p>
                <p className="jobs__exp">Требуемый опыт работы: 2 года</p>
                <p className="jobs__schedule">Полный день</p>
                <button className="jobs__btn">Откликнуться</button>
            </div>
            <div className="jobs__card">
                <h2 className="jobs__title">Оператор</h2>
                <p className="jobs__location">Бишкек</p>
                <p className="jobs__exp">Требуемый опыт работы: 2 года</p>
                <p className="jobs__schedule">Полный день</p>
                <button className="jobs__btn">Откликнуться</button>
            </div>
            <div className="jobs__card">
                <h2 className="jobs__title">Оператор</h2>
                <p className="jobs__location">Бишкек</p>
                <p className="jobs__exp">Требуемый опыт работы: 2 года</p>
                <p className="jobs__schedule">Полный день</p>
                <button className="jobs__btn">Откликнуться</button>
            </div>
            <div className="jobs__card">
                <h2 className="jobs__title">Оператор</h2>
                <p className="jobs__location">Бишкек</p>
                <p className="jobs__exp">Требуемый опыт работы: 2 года</p>
                <p className="jobs__schedule">Полный день</p>
                <button className="jobs__btn">Откликнуться</button>
            </div>  
        </div>
    </section>
  )
}

export default Jobs