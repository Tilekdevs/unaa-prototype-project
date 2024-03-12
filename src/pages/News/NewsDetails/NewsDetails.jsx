import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CiCalendarDate } from "react-icons/ci";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import "./newsDetails.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import NavigationComponent from "../../../components/Navigation/Navigation";

const NewsDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/news/${id}`
        );
        setNewsItem(response.data);

        const parsedDate = new Date(response.data.published_date);
        const formattedDate = format(parsedDate, "d MMMM yyyy года", {
          locale: ru,
        });
        setFormattedDate(formattedDate);
      } catch (error) {
        console.error("Error fetching news item:", error);
      }
    };

    fetchNewsItem();

    return () => {};
  }, [id]);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="news__details">
      <NavigationComponent />
      <div className="news__details-top">
        <div className="news__details-title">{newsItem.title}</div>
        <div className="news__details-date">
          <CiCalendarDate className="news__details-icon" />
          {formattedDate && <span>{formattedDate}</span>}
        </div>
      </div>
      <div className="news__details-info">
        <div className="news__details-image">
          <Swiper
            spaceBetween={30}
            navigation={{
              clickable: true,
            }}
            modules={[Navigation]}
            className="news__swiper"
          >
            {newsItem.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`http://127.0.0.1:8000${image.image}`}
                  alt={`Slide ${index}`}
                  className="news__swiper-img"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="news__details-desc">
          <div className="news__details-desc-desc">
            {newsItem.text.split("\n").map((paragraph, index) => (
              <div key={index} className="news__details-paragraph">
                {paragraph}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
