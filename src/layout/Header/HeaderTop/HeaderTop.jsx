import React, { useState, useEffect } from "react";
import Fuse from "fuse.js";
import axios from "axios";
import CustomModal from "../../../components/CustomModal/CustomModal";
import { FaSearch } from "react-icons/fa";
import whatsapp from "../../../assets/img/whatsapp.png";
import facebook from "../../../assets/img/facebook.png";

const HeaderTop = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/news")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    const fuseOptions = {
      keys: ["title", "text", "published_date"],
      includeScore: true,
      threshold: 0.4,
    };

    const fuse = new Fuse(data, fuseOptions);

    const searchResults = fuse.search(query);
    const filteredResults = searchResults.map((result) => result.item);
    setResults(filteredResults);
  }, [query, data]);

  const handleSearch = () => {
    setShowModal(true);
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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

        <CustomModal
          open={showModal}
          handleClose={handleCloseModal}
          results={results}
        />
      </div>
    </div>
  );
};

export default HeaderTop;
