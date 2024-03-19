// Хук для получения новостей из API, и их отображения на странице.

import { useState, useEffect } from 'react';
import axios from 'axios';


const useNewsData = () => {

    const [newsData, setNewsData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 25;

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `http://127.0.0.1:8000/api/news?page=${currentPage}`
                );
                setNewsData(response.data);
                setTotalPages(Math.ceil(response.data.length / itemsPerPage));
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        fetchData();
    }, [currentPage]); 

    
    const setPage = (page) => {
        setCurrentPage(page);
    };


    const getDisplayIndexes = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return { startIndex, endIndex };
    };

    
    return {
        newsData,
        totalPages,
        currentPage,
        setPage,
        getDisplayIndexes,
    };
};

export default useNewsData;
