import "./newsCard.scss";

const NewsCard = ({newsItem}) => {

  return (
    <div className="news__card">
      <div className="news__card-img">
        <img
          className="news__img"
          src={`${newsItem.img}`}
          alt={newsItem.title}
        />
      </div>
      <div className="news__card-info">
        <div className="news__card-date">
          p.date 
          {/* <p className="day">{newsItem.day}</p>
          <h4 className="month">{newsItem.month}</h4>
          <p className="year">{newsItem.year}</p> */}
        </div>
        <h3 className="news__card-title">
          {newsItem.title}
        </h3>
      </div>
    </div>
  );
};

export default NewsCard;
