import "./newsCard.scss";

const NewsCard = ({newsItem}) => {

  return (
    <div className="news__card">
      <div className="news__card-img">
        <img
          className="news__img"
          src={newsItem.img}
          alt="Img"
        />
      </div>
      <div className="news__card-info">
        <div className="news__card-date">
          <p className="day">23</p>
          <h4 className="month">январь</h4>
          <p className="year">2024</p>
        </div>
        <h3 className="news__card-title">
          {newsItem.title}
        </h3>
      </div>
    </div>
  );
};

export default NewsCard;
