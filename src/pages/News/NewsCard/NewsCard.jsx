import { format } from "date-fns";
import { ru } from "date-fns/locale";
import React from "react";
import { Link } from "react-router-dom";
import "./newsCard.scss";

const NewsCard = ({ newsItem }) => {
  const parsedDate = new Date(newsItem.published_date);
  const formattedDate = format(parsedDate, "d MMMM yyyy года", { locale: ru });

  const firstImage =
    newsItem.images.length > 0
      ? `http://127.0.0.1:8000${newsItem.images[0].image}`
      : null;

  const wordsInTitle = newsItem.title.split(' ');
  const trimmedTitle = wordsInTitle.slice(0, 20).join(' ');
  const displayTitle = wordsInTitle.length > 20 ? `${trimmedTitle}...` : trimmedTitle;

  if (firstImage) {
    const imgElement = new Image();
    imgElement.src = firstImage;
  }

  return (
    <div className="news__card">
      <div className="news__card-img">
        {firstImage && (
          <img
            className="news__img"
            src={firstImage}
            alt={`News: ${newsItem.title}`}
          />
        )}
      </div>
      <div className="news__card-info">
        <div className="news__card-date">
          <p className="day">{formattedDate && <span>{formattedDate}</span>}</p>
        </div>
        <h3>
          <Link
            style={{ textDecoration: "none" }}
            className="news__card-title"
            to={`/news/${newsItem.id}`}
          >
            {displayTitle}
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default NewsCard;
