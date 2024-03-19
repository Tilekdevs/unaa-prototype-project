import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { CiCalendarDate } from "react-icons/ci";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import "./newsDetails.scss";
import he from "he";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import NavigationComponent from "../../../components/Navigation/Navigation";
import useRelatedNews from "../../../hooks/NewsHooks/useRelatedNews";

const NewsDetails = () => {
  const { id } = useParams();
  const [newsItem, setNewsItem] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);
  const relatedNews = useRelatedNews();
  const navigate = useNavigate();

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

  console.log(relatedNews);

  return (
    <>
      <div className="news__info">
        <div className="news__details">
          <NavigationComponent />
          <div className="news__details-top">
            <div className="news__details-title">
              {he.decode(newsItem.title)}
            </div>
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
                {he
                  .decode(newsItem.text)
                  .split("\n")
                  .map((paragraph, index) => (
                    <div
                      key={index}
                      className="news__details-paragraph"
                      dangerouslySetInnerHTML={{ __html: paragraph }}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="news__right">
          <h1 className="news__right-title">Смотрите также</h1>
          <div className="news__right-container">
          {relatedNews
            .filter((relatedNewsItem) => relatedNewsItem.id !== newsItem.id)
            .slice(0, 4)
            .map((relatedNewsItem) => {
              const trimmedTitle = relatedNewsItem.title.split(' ').slice(0, 20).join(' ');
              const displayTitle = relatedNewsItem.title.split(' ').length > 20 ? `${trimmedTitle}...` : trimmedTitle;
              return (
                <div
                  key={relatedNewsItem.id} 
                  className="news__right-extra"
                  onClick={() => navigate(`/news/${relatedNewsItem.id}`)}
                >
                  {relatedNewsItem.published_date && (
                    <span className="news__right-extra-date">
                      {format(
                        new Date(relatedNewsItem.published_date),
                        "d MMMM yyyy года",
                        { locale: ru }
                      )}
                    </span>
                  )}
                  <div className="news__right-extra-title">
                    {he.decode(displayTitle)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsDetails;
