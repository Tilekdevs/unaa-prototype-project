import React from "react";
import "./newsDetails.scss";
import Navigation from "../../../components/Navigation/Navigation";
import { CiCalendarDate } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@mui/material";

const NewsDetails = () => {
  return (
    <div className="news__details">
      <Navigation />
      <div className="news__details-top">
        <div className="news__details-title">
          Состоялся рабочий визит Главы Кабмина Акылбека Жапарова в Москву
        </div>
        <div className="news__details-date">
          <CiCalendarDate className="news__details-icon" />
          <p className="news__details-day">23</p>
          <h4 className="news__details-month">январь</h4>
          <p className="news__details-year">2024</p>
        </div>
      </div>

      <div className="news__details-info">
        <div className="news__details-image">
          <img
            className="news__details-image-img"
            src="https://www.gov.kg/storage/media/gallery/23841/65a92d6f526df.jpeg"
            alt=""
          />
        </div>

        <div className="news__details-desc">
          <p className="news__details-desc-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            porro incidunt velit? Modi culpa illum aspernatur veniam debitis
            laboriosam autem incidunt, similique facere magni consectetur nam
            eius cum vel alias deleniti maiores rerum molestias, id labore
            quibusdam quaerat voluptates? Rerum sapiente, dolore magni rem ea
            necessitatibus voluptate deleniti maiores omnis qui dolores eaque ex
            non natus amet, accusantium molestiae cumque dolorum officia. Rerum
            corrupti ad nemo? Laboriosam quo, rem distinctio omnis atque aperiam
            aspernatur, itaque at nihil perferendis ratione corrupti eum sed
            molestias perspiciatis, facilis placeat eveniet. Accusantium fuga
            voluptatum temporibus repudiandae inventore consequatur hic et!
            Tenetur officia dolor rerum alias vel perspiciatis perferendis fugit
            inventore optio veniam exercitationem necessitatibus ipsam,
            reprehenderit delectus dicta nihil eum fuga laudantium doloribus
            distinctio cupiditate tempora porro nesciunt voluptates. Vel
            repellat quidem quia. Nemo laborum ad aut et veniam, mollitia fugit
            a. Eius, ut magnam sint quisquam eveniet officiis repellat
            perspiciatis, maxime aperiam at quibusdam error quod, rem
            voluptatum. Repellat consequatur ullam nesciunt officia.
          </p>
        </div>
      </div>

      <div className="news__details-bottom">
        <div className="news__details-socials">
          <FaFacebook className="news__details-socials-icon facebook" />
          <FaWhatsapp className="news__details-socials-icon whatsapp" />
        </div>
        <Button
          className="news__details-bottom-btn"
          variant="contained"
        >
          Далее
        </Button>
      </div>
    </div>
  );
};

export default NewsDetails;
