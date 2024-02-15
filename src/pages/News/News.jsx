import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navigation from '../../components/Navigation/Navigation'
import './news.scss'
import NewsCard from './NewsCard/NewsCard'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import axios from 'axios'

const News = () => {
	const [newsData, setNewsData] = useState([])
	const [totalPages, setTotalPages] = useState(1)
	const [currentPage, setCurrentPage] = useState(1)
	const itemsPerPage = 6

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					`http://127.0.0.1:8000/api/news?page=${currentPage}`
				)
				setNewsData(response.data)
				setTotalPages(Math.ceil(response.data.length / itemsPerPage))
			} catch (error) {
				console.error('Error fetching news data:', error)
			}
		}

		fetchData()
	}, [currentPage])

	const handlePageChange = (event, value) => {
		setCurrentPage(value)
	}

	const startIndex = (currentPage - 1) * itemsPerPage
	const endIndex = startIndex + itemsPerPage
	const displayedNewsData = newsData.slice(startIndex, endIndex)

	return (
		<section className='news'>
			<Navigation />
			<div className='news__container'>
				{displayedNewsData.map(newsItem => (
					<NewsCard key={newsItem.id} newsItem={newsItem} />
				))}
			</div>
			<Stack style={{ margin: '10px' }}>
				<Pagination
					count={totalPages}
					page={currentPage}
					onChange={handlePageChange}
					variant='outlined'
					shape='rounded'
					component={Link}
				/>
			</Stack>
		</section>
	)
}

export default News
