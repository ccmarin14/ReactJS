import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import Aboutpage from './pages/about-faqs/Aboutpage';

function AppRoutingOne() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <Aboutpage /> } />
        <Route path="/faqs" element={ <Aboutpage /> } />
        {/* 404 - Page No Found */}
        <Route path="/*" element={ <NotFoundPage /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutingOne;