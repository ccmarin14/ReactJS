import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, usematch } from 'react-router-dom';
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

function AppRoutingOne() {

  let logged = false;

  let taskList = [
    {
      id: 1,
      name: 'Task 1',
      description: 'My first task'
    },
    {
      id: 2,
      name: 'Task 2',
      description: 'My second task'
    }
  ]

  useEffect(() => {
    logged = localStorage.getItem('credentials');
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
          <Link to='/task/1'>| TASKONE |</Link>
          <Link to='/task/2'>| TASKTWO |</Link>
        </aside>
      </div>
      <main>
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
          <Route 
            exact 
            path='/task/:id'
            element={<TaskDetailPage task={taskList}/>}
          >
          </Route>
          {/* 404 - Page No Found */}
          <Route path="/*" element={ <NotFoundPage /> } />
        </Routes>
        </main>
      </Router>
  );
}

export default AppRoutingOne;