import React from "react";
import { Link, useLocation } from "react-router-dom";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import he from "he"; 
import "./search.scss";

const truncateText = (text, wordCount) => {
  const words = text.split(" ");
  if (words.length <= wordCount) {
    return text;
  }
  return words.slice(0, wordCount).join(" ") + "...";
};

const formatDate = (dateString) => {
  const parsedDate = new Date(dateString);
  return format(parsedDate, "d MMMM yyyy года", { locale: ru });
};

const Search = () => {
  const location = useLocation();
  const { state } = location;
  const { t } = useTranslation();

  if (!state || !state.results || state.results.length === 0) {
    return (
      <div className="search__notfound">
        <h1 className="search__notfound-title">{t("notfound")}</h1>
      </div>
    );
  }

  const { results } = state;

  return (
    <section className="search">
      <div className="search__container">
        <h1 className="search__title">Результаты поиска</h1>
        {results.map((item, index) => (
          <div key={index} className="search__card">
            {item.published_date && (
              <>
                <h2 className="search__card-title">{item.title}</h2>
                <p className="search__card-date">
                  {formatDate(item.published_date)}
                </p>
                <p className="search__card-text">
                  {he.decode(item.text)} 
                </p>
                <Link to={`/news/${item.id}`} className="search__card-link">
                  Подробнее
                </Link>
              </>
            )}
            {item.city && (
              <>
                <h2 className="search__card-title">{item.title}</h2>
                <p className="search__card-text">Город: {he.decode(item.city)}</p>
                <p className="search__card-text">Примечание: {he.decode(item.note)}</p>
              </>
            )}
            {item.time_job && (
              <>
                <h2 className="search__card-title">{item.title}</h2>
                <p className="search__card-text">Адрес: {he.decode(item.address)}</p>
                <p className="search__card-text">Телефон: {he.decode(item.phone)}</p>
                <p className="search__card-text">График: {he.decode(item.time_job)}</p>
              </>
            )}
            {item.avatar && (
              <>
                <h2 className="search__card-title">{item.name}</h2>
                <p className="search__card-text">{he.decode(item.description)}</p>
              </>
            )}
            {item.city && (
              <p className="search__card-category">Категория: Вакансии</p>
            )}
            {item.time_job && (
              <p className="search__card-category">Категория: Контакты</p>
            )}
            {item.published_date && (
              <p className="search__card-category">Категория: Новости</p>
            )}
            {item.avatar && (
              <p className="search__card-category">Категория: Руководство</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Search;
