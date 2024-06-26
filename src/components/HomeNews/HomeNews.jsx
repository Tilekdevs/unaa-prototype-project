import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../pages/Home/home.scss';
import { useTranslation } from 'react-i18next';

const HomeNews = () => {
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const {t} = useTranslation();

  useEffect(() => {
    const getNews = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/news?_limit=8");
        setNews(res.data);
      } catch (err) {
        console.log('Error', err);
      }
    };

    getNews();
  }, []);

  return (
    <section className='home__news'>
      <h1 className="home__news-title">{t("homeNewsTitle")}</h1>
      
      {news.length > 0 &&
        <div className="home__news-container">
          {news.slice(0, 8).map((item, index) => (
            <NewsCard key={item.id} item={item} index={index} navigate={navigate} />
          ))}
        </div>
      }
    </section>
  );
};

const NewsCard = ({ item, index, navigate }) => {
  const [ref, inView] = useInView();
  const [animationPlayed, setAnimationPlayed] = useState(false);

  useEffect(() => {
    if (inView && !animationPlayed) { 
      setAnimationPlayed(true);
    }
  }, [inView, animationPlayed]);


  if (!item || !item.title) {
    return null;
  }

  const trimmedTitle = item.title.split(' ').slice(0, 20).join(' ');
  const displayTitle = item.title.split(' ').length > 20 ? `${trimmedTitle}...` : trimmedTitle;

  return (
    <motion.div
      ref={ref}
      className="home__news-card"
      initial={{ opacity: 0, y: 50 }}
      animate={animationPlayed ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img 
        className='home__news-img'
        src={item.images.length > 0 ? `http://127.0.0.1:8000${item.images[0].image}` : null} 
        alt="" 
      />
      <div className="home__news-info">
        <p className="home__news-date">{format(new Date(item.published_date), 'd MMMM yyyy года', { locale: ru })}</p>
        <h3 onClick={() => navigate(`/news/${item.id}`)} className="home__news-subtitle">{displayTitle}</h3>
      </div>
    </motion.div>
  );
};

export default HomeNews;
