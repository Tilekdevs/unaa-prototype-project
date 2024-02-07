import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Link } from 'react-router-dom';

const HomeNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/news");
        setNews(res.data);
      } catch (err) {
        console.log('Error', err);
      }
    };

    getNews();
  }, []);

  return (
    <section className='home__news'>
      <h1 className="home__news-title">Последние новости</h1>
      <div className="home__news-container">
        {news.map((item) => (
          <div className="home__news-card" key={item.id}>
            <img className='home__news-img' src={item.images.length > 0 ? `http://127.0.0.1:8000${item.images[0].image}` : null} alt="" />
            <p className="home__news-date">{format(new Date(item.published_date), 'd MMMM yyyy года', { locale: ru })}</p>
            <h3 className="home__news-subtitle">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeNews;
