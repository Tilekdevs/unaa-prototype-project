import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import AboutUs from './pages/AboutUs/AboutUs'
import Camera from './pages/Camera/Camera'
import Home from './pages/Home/Home'
import Jobs from './pages/Jobs/Jobs'
import News from './pages/News/News'
import NewsDetails from './pages/News/NewsDetails/NewsDetails'
import NotFound from './pages/NotFound/NotFound'
import Information from './pages/Information/Information.jsx'
import CalculatorServices from './pages/Services/Calculator/CalculatorServices'
import RequestInspection from './pages/Services/RequestForInspection/RequestInspection.jsx'
import Search from './pages/Search/Search.jsx'
import Services from './pages/Services/Services.jsx'
import Managment from './pages/AboutUs/AboutDetails/Managment/Managment.jsx'
import ManagmentDetails from './pages/AboutUs/AboutDetails/Managment/ManagmentDetails.jsx'

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
					<Route path={'/information'} element={<Information />} />
					<Route path={'/search'} element={<Search />} />
					<Route path={'/services'} element={<Services />} />
					<Route
						path={'/request-for-inspection'}
						element={<RequestInspection />}
					/>
					<Route path={'/camera'} element={<Camera />} />
					<Route path={'/jobs'} element={<Jobs />} />
					<Route path={'/management/:id'} element={<ManagmentDetails />} />
					<Route path={'*'} element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
