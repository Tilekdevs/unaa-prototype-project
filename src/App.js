import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import AboutUs from './pages/AboutUs/AboutUs'
import Camera from './pages/Camera/Camera'
import Home from './pages/Home/Home'
import Jobs from './pages/Jobs/Jobs'
import News from './pages/News/News'
import NewsDetails from './pages/News/NewsDetails/NewsDetails'
import CalculatorServices from './pages/Services/Calculator/CalculatorServices'
import RequestInspection from './pages/Services/RequestForInspection/RequestInspection.jsx'
import NotFound from './pages/NotFound/NotFound'
import Search from './pages/Search/Search.jsx'

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path={'/'} element={<Layout />}>
					<Route index element={<Home />} />
					<Route path={'/about'} element={<AboutUs />} />
					<Route path={'/news'} element={<News />} />
					<Route path={'/news/:id'} element={<NewsDetails />} />
					<Route path={'/calculator'} element={<CalculatorServices />} />
					<Route path={'/search'} element={<Search />} />
					<Route
						path={'/request-for-inspection'}
						element={<RequestInspection />}
					/>
					<Route path={'/camera'} element={<Camera />} />
					<Route path={'/jobs'} element={<Jobs />} />
					<Route path={'*'} element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
