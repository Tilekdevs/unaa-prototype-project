import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import './newsCard.scss';

const NewsCard = ({ newsItem }) => {
  const parsedDate = new Date(newsItem.published_date);
  const formattedDate = format(parsedDate, 'd MMMM yyyy года', { locale: ru });

  return (
    <div className="news__card">
      <div className="news__card-img">
        <img
          className="news__img"
          src={newsItem.image}
          alt={newsItem.title}
        />
      </div>
      <div className="news__card-info">
        <div className='news__card-date'>
          <p className='day' to={`/news/${newsItem.id}`}>
            <p>{formattedDate}</p>
          </p>
        </div>
        <h3> 
          <Link style={{textDecoration: 'none'}} className='news__card-title' to={`/news/${newsItem.id}`}>
            {newsItem.title}
          </Link> 
        </h3>
      </div>
    </div>
  );
};

export default NewsCard;

