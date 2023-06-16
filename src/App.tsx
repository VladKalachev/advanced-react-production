import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';

import "./index.scss";

const App = () => {
  return (
    <div>
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <Routes>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/' element={<MainPage />}/>
      </Routes>
    </div>
  )
}

export default App