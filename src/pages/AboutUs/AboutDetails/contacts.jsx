import React from 'react';
import "../aboutUs.scss"

const Contacts = ({ contact }) => {
  if (!contact || Object.keys(contact).length === 0) {
    return <p>Contact data is not available.</p>;
  }

  const handleCardClick = () => {
    // window.location.href = "https://2gis.kg/bishkek/firm/70000001019365883?m=74.677648%2C42.859405%2F17.71";
  };

  return (
    <div>
      <div className="card" onClick={handleCardClick}>
        <div className="info">
          <div className="title">
            <p className='title'>{` ${contact.title || 'Н/Д'}`}</p>
            <p className='address'>{`Адрес: ${contact.address || 'Н/Д'}`}</p>
            <p className=''>{`Тел:  ${contact.phone || 'Н/Д'}`}</p>
            <p className='time_job'>{`График работы: ${contact.time_job || 'Н/Д'}`}</p>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
