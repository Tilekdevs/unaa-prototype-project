import React from 'react';
import { Link } from 'react-scroll';
import "../aboutUs.scss"

const Contacts = ({ contact }) => {
  if (!contact || Object.keys(contact).length === 0) {
    return <p>Contact data is not available.</p>;
  }

  const handleCardClick = () => {
    // You can add any custom logic here if needed
  };

  return (
    <div>
      <Link
        to="contacts"  // Specify the same value as the id of the target element
        spy={true}
        smooth={true}
        offset={-70}  // Adjust the offset as needed
        duration={500}
      >
        <div className="card animated-card" onClick={handleCardClick}>
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
      </Link>
    </div>
  );
}

export default Contacts;
