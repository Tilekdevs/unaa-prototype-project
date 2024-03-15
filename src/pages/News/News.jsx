import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import "./news.scss";
import NewsCard from "./NewsCard/NewsCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import useNewsData from "../../hooks/NewsHooks/useNewsData";

const News = () => {
  const { newsData, totalPages, currentPage, setPage, getDisplayIndexes } =
    useNewsData();

  const { startIndex, endIndex } = getDisplayIndexes();

  return (
    <section className="news">
      <Navigation />
      <div className="news__container">
        {newsData.slice(startIndex, endIndex).map((newsItem) => (
          <NewsCard key={newsItem.id} newsItem={newsItem} />
        ))}
      </div>
      <Stack style={{ margin: "10px" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={(event, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
          component={Link}
        />
      </Stack>
    </section>
  );
};

export default News;
