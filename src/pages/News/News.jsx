import React, { useState, useEffect } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import './news.scss';
import NewsCard from './NewsCard/NewsCard';
import axios from 'axios';

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/news');
        setNewsData(response.data);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="news">
      <h2 className="news__title">Новости</h2>
      <Navigation />
      <div className="news__container">
        {newsData.map((newsItem) => (
          <a key={newsItem.id} to={`/news/${newsItem.id}`}>
            <NewsCard newsItem={newsItem} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default News;

