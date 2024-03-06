import React from "react";
import "../aboutUs.scss";
import { MdWorkOutline } from "react-icons/md";

const Contacts = ({ data }) => {
  return (
    <>
      <div className="search__top">
        <div className="search__select">
          <select name="" id="" className="jobs__top-select">
            <option value="" className="jobs__top-option">
              Бишкек
            </option>
          </select>

          <select name="" id="" className="jobs__top-select">
            <option value="" className="jobs__top-option">
              Бишкек
            </option>
          </select>

          <select name="" id="" className="jobs__top-select">
            <option value="" className="jobs__top-option">
              Бишкек
            </option>
          </select>
        </div>

        <input type="text" placeholder="Поиск" className="search__input" />
      </div>
      <div className="MainCardItem">
        <div key={data.id} className="card">
          <div className="info">
            <MdWorkOutline className="icon" />
            <div className="title">
              <p className="place">г.Бишкек</p>
              <p className="MainTitle">{` ${data.title || "Н/Д"}`}</p>
              <p>{`${data.phone || "Н/Д"}`}</p>
            </div>
            <div className="address">
              <p>{`${data.address || "Н/Д"}`}</p>
            </div>
            <p className="date">{`${data.time_job || "Н/Д"}`}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contacts;
