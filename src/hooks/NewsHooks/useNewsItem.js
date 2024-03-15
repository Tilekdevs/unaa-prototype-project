// Хук для получения определенной новости по её  ID 

import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

const useNewsItem = (id) => {
  const [newsItem, setNewsItem] = useState(null);
  const [formattedDate, setFormattedDate] = useState(null);

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

  return { newsItem, formattedDate };
};

export default useNewsItem;
