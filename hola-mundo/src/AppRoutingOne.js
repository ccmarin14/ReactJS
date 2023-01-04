import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import Aboutpage from './pages/about-faqs/Aboutpage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/any404'>| NotFound |</Link>
        </aside>
      </div>
      <Routes>
        <Route exact path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <Aboutpage /> } />
        <Route path="/faqs" element={ <Aboutpage /> } />
        <Route path='/profile' element={ <ProfilePage /> }></Route>
        <Route path='/tasks' element={ <TaskPage /> }></Route>
        <Route path='/task/:id' element={ <TaskDetailPage /> }></Route>
        {/* 404 - Page No Found */}
        <Route path="/*" element={ <NotFoundPage /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutingOne;