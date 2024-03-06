import React, { useEffect, useState } from "react";
import { MdWorkOutline } from "react-icons/md";
import "../aboutUs.scss";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = () => {
    fetch("http://127.0.0.1:8000/api/about/contact")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch contacts");
        }
        return response.json();
      })
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  if (contacts.length === 0) {
    return <p>Contact data is not available.</p>;
  }

  return (
    <>
     <div className="row">
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
      {contacts.map((contact) => (
        <div key={contact.id}>
          <div className="MainCardItem">
            <div className="card">
              <div className="info">
                <MdWorkOutline className="icon" />
                <div className="title">
                  <p className="place">г.Бишкек</p>
                  <p className="MainTitle">{` ${contact.title || "Н/Д"}`}</p>
                  <p>{`${contact.phone || "Н/Д"}`}</p>
                </div>
                <div className="address">
                  <p>{`${contact.address || "Н/Д"}`}</p>
                </div>
                <p className="date">{`${contact.time_job || "Н/Д"}`}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
     </div>
    </>
  );
};

export default Contacts;
