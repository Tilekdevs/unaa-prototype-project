import { Route, Routes } from 'react-router-dom';
import './App.css';
import NewsDetails from '../src/pages/News/NewsDetails/NewsDetails';
import Layout from './layout/Layout';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';
import News from './pages/News/News'
import Camera from "./pages/Camera/Camera"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={'/about'} element={<AboutUs />} />
<<<<<<< Updated upstream
          <Route path={'/news'} element={<Posts />} />
          <Route path={'/postsdetails'} element={<PostsDetails />} />
=======
          <Route path={'/news'} element={<News />} />
          <Route path={'/news/:id'} element={<NewsDetails />} />
          <Route path={'camera'} element={<Camera/>} />
>>>>>>> Stashed changes
        </Route>
      </Routes>
    </div>
  );
}

export default App;
