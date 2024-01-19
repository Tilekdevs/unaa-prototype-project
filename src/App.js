import { Route, Routes } from 'react-router-dom';
import './App.css';
import PostsDetails from './components/Posts/PostsDetails/PostsDetails';
import Layout from './layout/Layout';
import AboutUs from './pages/AboutUs/AboutUs';
import Home from './pages/Home/Home';
import Posts from './pages/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={'/about'} element={<AboutUs />} />
          <Route path={'/news'} element={<Posts />} />
          <Route path={'/postsdetails'} element={<PostsDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
