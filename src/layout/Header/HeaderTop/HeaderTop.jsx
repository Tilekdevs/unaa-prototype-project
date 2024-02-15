import React, { useState, useEffect, useMemo } from "react";
import Fuse from "fuse.js";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { FaSearch } from "react-icons/fa";
import whatsapp from "../../../assets/img/whatsapp.png";
import facebook from "../../../assets/img/facebook.png";

const HeaderTop = () => {
  const [query, setQuery] = useState("");
  const [allData, setAllData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const urls = [
        'http://127.0.0.1:8000/api/news',
        'http://127.0.0.1:8000/api/job/jobs',
        'http://127.0.0.1:8000/api/about/contact',
        'http://127.0.0.1:8000/api/about/management'
      ];
      const requests = urls.map(url => axios.get(url));
      const responses = await axios.all(requests);
      const data = responses.map(response => response.data);
      setAllData(data.flat());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fuseOptions = useMemo(() => ({
    keys: ["title", "text", "published_date", "city", "note", "address", "phone", "time_job", "name", "description", "avatar"], 
    includeScore: true,
    threshold: 0.4,
  }), []);

  const handleSearch = () => {
    if (query.trim() !== "") {
      const fuse = new Fuse(allData, fuseOptions);
      const searchResults = fuse.search(query);
      const filteredResults = searchResults.map((result) => result.item);
      navigate(`/search?query=${query}`, { state: { results: filteredResults } });
    }
  };
  
  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="header__top">
      <div className="header__top-icons">
        <img className="header__top-social" src={facebook} alt="" />
        <img className="header__top-social" src={whatsapp} alt="" />
      </div>

      <div className="header__top-search">
        <input
          value={query}
          onChange={handleQueryChange}
          className="header__top-input"
        />
        <FaSearch onClick={handleSearch} className="header__top-icon" />
      </div>
    </div>    
  );
};

export default HeaderTop;
