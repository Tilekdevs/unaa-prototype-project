import React from "react";
import "./RequestInspection.scss";
import InspectionForm from '../../../components/InspectionForm/InspectionForm'



 const RequestInspection = () => {
  return (
      <section className="inspection">
        <div className="inspection__top">
          <div className="inspection__top-content">
            <h2 className="inspection__top-title">
              Оставьте заявку на осмотр вашего транспортного средства.
            </h2>
            <p className="inspection__top-text">
              Оставьте свои контактные данные в форме ниже, и наши сотрудники
              свяжутся с вами в самое ближайшее время.
            </p>
          </div>
        </div>

        <div className="inspection__container">
          <InspectionForm/>

          <div className="inspection__faq">
            <h2 className="inspection__faq-title">Остались вопросы?</h2>
            <p className="inspection__faq-subtitle">Наш офис</p>
            <address className="inspection__faq-address">
              Адрес: ул. Чокана Валиханова, 2а 720048, Бишкек, Кыргызстан
            </address>
            <p className="inspection__faq-number">Телефон: +996 (312) 63-14-40</p>
            <p className="inspection__faq-number">Телефон: +996 (312) 63-01-86</p>
            <p className="inspection__faq-email">
              Почта: <a href="unaa@unaa.srs.kg">unaa@unaa.srs.kg</a>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.5101418449035!2d74.67461947652285!3d42.86207560323755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb75d46433f89%3A0x32e6cc7f016533dc!2zItCj0L3QsNCwIiDQv9GA0Lgg0JzQktCUINCa0KA!5e0!3m2!1sru!2skg!4v1709025820559!5m2!1sru!2skg"
              width="600"
              title="Unaa"
              height="450"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="inspection__faq-map"
            ></iframe>
          </div>
        </div>
      </section>
  );
};

export default RequestInspection;
