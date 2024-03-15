// Хук для получения связанных новостей(т.е Смотреть также) в компоненте NewsDetails. 

import { useState, useEffect } from "react";
import axios from "axios";

const useRelatedNews = (idToExclude) => {
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    const fetchRelatedNews = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/api/news" 
        );
        const filteredNews = response.data.filter(
          (item) => item.id !== idToExclude
        );
        setRelatedNews(filteredNews);
      } catch (error) {
        console.error("Error fetching related news:", error);
      }
    };

    fetchRelatedNews();

    return () => {};
  }, [idToExclude]);

  return relatedNews;
};

export default useRelatedNews;
