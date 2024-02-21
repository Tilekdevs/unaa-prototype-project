import React, { useState, useEffect, useMemo } from "react";
import "../../pages/Home/home.scss";
import videobg from "../../assets/video/bg.mp4";
import { FaSearch } from "react-icons/fa";
import Fuse from "fuse.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomeVideo = () => {
  const [query, setQuery] = useState("");
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const urls = [
        "http://127.0.0.1:8000/api/news",
        "http://127.0.0.1:8000/api/job/jobs",
        "http://127.0.0.1:8000/api/about/contact",
        "http://127.0.0.1:8000/api/about/management",
      ];
      const requests = urls.map((url) => axios.get(url));
      const responses = await axios.all(requests);
      const data = responses.map((response) => response.data);
      setAllData(data.flat());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fuseOptions = useMemo(
    () => ({
      keys: [
        "title",
        "text",
        "published_date",
        "city",
        "note",
        "address",
        "phone",
        "time_job",
        "name",
        "description",
        "avatar",
      ],
      includeScore: true,
      threshold: 0.1,
      ignoreLocation: true,
      includeMatches: true,
      findAllMatches: true,
    }),
    []
  );

  const handleSearch = () => {
    if (query.trim() !== "") {
      const fuse = new Fuse(allData, fuseOptions);
      const searchResults = fuse.search(query);
      const filteredResults = searchResults.map((result) => result.item);
      navigate(`/search?query=${query}`, {
        state: { results: filteredResults },
      });
    }
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="home__video-bg">
        <video autoPlay loop muted loading="lazy">
          <source src={videobg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video__overlay"></div>
      </div>

      <div className="home__container">
        <div className="home__content">
          <h6 className="home__content-title">
            Государственное агентство по регистрации транспортных средств и
            водительского состава при Кабинете Министров Кыргызской Республики
          </h6>
          <p className="home__content-subtitle">
            Мы осуществляем деятельность в области регистрации и перерегистрации
            автотранспортных средств.
          </p>
        </div>

        <div className="home__bottom">
          <input
            value={query}
            onChange={handleQueryChange}
            className="home__bottom-input"
          />
          <FaSearch onClick={handleSearch} className="home__bottom-icon" />
        </div>
      </div>
    </>
  );
};

export default HomeVideo;
