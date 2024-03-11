import { useState, useEffect } from "react";
import axios from "axios";

const useCityData = () => {
  const [city, setCity] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/online/cities`
        );
        setCity(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных о городах:", error);
      }
    };
    fetchData();
  }, []);

  return city;
};

export default useCityData;