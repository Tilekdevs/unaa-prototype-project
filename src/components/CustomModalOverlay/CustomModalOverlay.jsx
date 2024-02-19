import React, { useEffect, useState } from "react";
import "./customModalOverlay.scss";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { SlCallIn } from "react-icons/sl";

const CustomModalOverlay = ({ closeModal, job }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  const handleBackgroundClick = () => {
    closeModal();
  };

  return (
    <>
      {job && (
        <>
          <div
            className={`modal ${isVisible ? "show" : ""}`}
            onClick={handleBackgroundClick}
          ></div>
          <div className={`modal__window ${isVisible ? "show" : ""}`}>
            <button className="modal__close-button" onClick={closeModal}>
              <AiOutlineClose />
            </button>
            <h2 className="modal__title">Свяжитесь с нами</h2>
            <p className="modal__subtitle">
              Позвоните по указанным номерам относительно интересующей вас
              вакансии.
            </p>
            <ul className="modal__list">
              <li className="modal__item-phone"><SlCallIn/>0312 63-14-40</li>
              <li className="modal__item-phone"><SlCallIn/>0312 63-01-86</li>
              <li className="modal__item-phone"><SlCallIn/>0312 63-39-31</li>
              <li className="modal__item-phone"><SlCallIn/>0312 63-23-63</li>
              <li className="modal__item-email"><AiOutlineMail/>unaa@unaa.srs.kg</li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default CustomModalOverlay;
