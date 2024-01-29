// NewsDetails.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CiCalendarDate } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@mui/material";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import Navigation from "../../../components/Navigation/Navigation";
import './newsDetails.scss'

const NewsDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/news/${id}`);
        setNewsItem(response.data);

        const parsedDate = new Date(response.data.published_date);
        const formattedDate = format(parsedDate, 'd MMMM yyyy года', { locale: ru });
        setFormattedDate(formattedDate);
      } catch (error) {
        console.error('Error fetching news item:', error);
      }
    };

    fetchNewsItem();

    return () => {
    };
  }, [id]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="news__details">
      <Navigation />
      <div className="news__details-top">
        <div className="news__details-title">{newsItem.title}</div>
        <div className="news__details-date">
          <CiCalendarDate className="news__details-icon" />
          {formattedDate && <span>{formattedDate}</span>}
        </div>
      </div>
      <div className="news__details-info">
        <div className="news__details-image">
          <img
            className="news__details-image-img"
            src={newsItem.image}
            alt=''
          />
        </div>
        <div className="news__details-desc">
          <p className="news__details-desc-desc">{newsItem.text}</p>
        </div>
      </div>
      <div className="news__details-bottom">
        <div className="news__details-socials">
          <FaFacebook className="news__details-socials-icon facebook" />
          <FaWhatsapp className="news__details-socials-icon whatsapp" />
        </div>
        <Button className="news__details-bottom-btn" variant="contained">
          Далее
        </Button>
      </div>
    </div>
  );
};

export default NewsDetails;
