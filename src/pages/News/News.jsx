import React, { useState, useEffect } from 'react'
import Navigation from '../../components/Navigation/Navigation'
import "./news.scss"
import NewsCard from './NewsCard/NewsCard'
import axios from 'axios'

const News = () => {

  const [news, setNews] = useState([]);

  const getNews = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000/api/news')
      setNews(res.data)
    }
    catch (err) {
      console.log('Ошибка', err)
    }
  }

  useEffect(() => {
    getNews()
  }, [])

  return (
    <section className='news'>
        <h2 className="news__title">Новости</h2>
        <Navigation/>
        <div className="news__container">
        {news.map((newsItem) => (
          <NewsCard key={newsItem.id} newsItem={newsItem} />
        ))}    
        </div>
    </section>
  )
}

export default News;
