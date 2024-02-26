import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import Fuse from "fuse.js";
import { useNavigate } from "react-router-dom";
import "../../pages/Home/home.scss";
import { useTranslation } from "react-i18next";

const HomeSearch = () => {
  const [query, setQuery] = useState("");
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const { t } = useTranslation();

  return (
    <div className="home__bottom">
      <input
        value={query}
        onChange={handleQueryChange}
        onKeyPress={handleKeyPress}
        className="home__bottom-input"
        placeholder={t("search")}
      />
      <FaSearch onClick={handleSearch} className="home__bottom-icon" />
    </div>
  );
};

export default HomeSearch;
