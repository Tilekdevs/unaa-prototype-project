import React from "react";
import "./customModalOverlay.scss";

const CustomModalOverlay = ({ closeModal }) => {
  const handleBackgroundClick = () => {
    closeModal();
  };

  return (
    <>
      <div className="modal" onClick={handleBackgroundClick}></div>
      <div className="modal__window">
        <button className="modal__close-button" onClick={closeModal}>
          X
        </button>
        <h2 className="modal__title">Свяжитесь с нами</h2>
        <p className="modal__subtitle">Позвоните по указанным номерам относительно интересующей вас вакансии.</p>
        <ul className="modal__list">
          <li className="modal__item">
            0312 63-14-40
          </li>
          <li className="modal__item">
            0312 63-01-86
          </li>
          <li className="modal__item">
            0312 63-39-31
          </li>
          <li className="modal__item">
            0312 63-23-63
          </li>
          <li className="modal__item">
            unaa@unaa.srs.kg
          </li>
        </ul>
      </div>
    </>
  );
};

export default CustomModalOverlay;
