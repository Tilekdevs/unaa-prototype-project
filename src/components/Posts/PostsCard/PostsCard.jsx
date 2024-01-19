import React from "react";
import "./postsCard.scss";

const PostsCard = () => {
  return (
    <div className="posts__card">
      <div className="posts__card-img">
        <img
          className="posts__img"
          src="https://www.gov.kg/storage/2024/01/img/news/23841/23841_1705586042_md.jpeg"
          alt=""
        />
      </div>
      <div className="posts__card-info">
        <div className="posts__card-date">
          <p className="day">23</p>
          <h4 className="month">январь</h4>
          <p className="year">2024</p>
        </div>
        <h3 className="posts__card-title">
          Состоялся рабочий визит Главы Кабмина Акылбека Жапарова в Москву
        </h3>
      </div>
    </div>
  );
};

export default PostsCard;
