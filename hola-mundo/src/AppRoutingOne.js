import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/404/NotFoundPage'
import Aboutpage from './pages/about-faqs/Aboutpage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskPage from './pages/tasks/TaskPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';

const CustomRouteHome = ({message}) => {
  alert(message);
  return(<Navigate redirect to='/' />);
}

const CustomRouteLogin = ({message}) => {
  alert(message);
  return(<LoginPage />);
}

async function AppRoutingOne() {

  let logged = localStorage.getItem('credentials');

  useEffect(() => {
    logged =  localStorage.getItem('credentials');
  }, []);

  return (
    <Router>
      <div>
        <aside>
          <Link to='/'>| HOME |</Link>
          <Link to='/login'>| LOGIN |</Link>
          <Link to='/about'>| ABOUT |</Link>
          <Link to='/faqs'>| FAQS |</Link>
          <Link to='/any404'>| NotFound |</Link>
        </aside>
      </div>
      <Routes>
        <Route exact path="/" element={ <HomePage /> } />
        <Route path="/login" element={
          logged ?
          <CustomRouteHome message={'You are logged in. Redirecting to home ...'} />:
          <CustomRouteLogin message={'You must be logged in. Redirecting to login ...'} />          
        } />
        <Route path="/about" element={ <Aboutpage /> } />
        <Route path="/faqs" element={ <Aboutpage /> } />
        <Route path='/profile' element={
          logged ?
          <ProfilePage />:
          <CustomRouteLogin message={'You must be logged in. Redirecting to login ...'} />
        } />
        <Route path='/tasks' element={ <TaskPage /> } />
        <Route path='/task/:id' element={ <TaskDetailPage /> } />
        {/* 404 - Page No Found */}
        <Route path="/*" element={ <NotFoundPage /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutingOne;