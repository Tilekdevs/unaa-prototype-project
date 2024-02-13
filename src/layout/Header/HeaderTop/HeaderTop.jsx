import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js'; 
import axios from 'axios';

const HeaderTop = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);
  const [showResults, setShowResults] = useState(false); // Состояние для отображения результатов

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/news')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    const fuseOptions = {
      keys: ['title', 'text', 'published_date'],
      includeScore: true,
      threshold: 0.4,
    };
    
    const fuse = new Fuse(data, fuseOptions);
    
    const searchResults = fuse.search(query);
    const filteredResults = searchResults.map(result => result.item);
    setResults(filteredResults);
  }, [query, data]);  

  const handleSearch = () => {
    setShowResults(true); // Показываем результаты поиска при нажатии на кнопку
  };

  const handleQueryChange = (e) => {
    setQuery(e.target.value); // Обновляем значение запроса
    setShowResults(false); // Сбрасываем состояние showResults, чтобы скрыть результаты
  };

  return (
    <div>
      <input 
        value={query}
        onChange={handleQueryChange}
      />
      <button onClick={handleSearch}>Search</button> 
      
      {showResults && ( 
        <ul>
          {results && results.length > 0 ? (
            results.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))
          ) : (
            <li>No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default HeaderTop;
