import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, usematch } from 'react-router-dom';

// Pages
import NotFoundPage from './pages/404/NotFoundPage';
import LoginPage from './pages/auth/LoginPage';
import DashBoardPage from './pages/dashboard/DashBoard';
import RegisterPage from './pages/auth/RegisterPage';
import TaskListComponent from './components/container/task_list';

function AppRoutingFinal() {

  //TODO Change to value from sessionStorage(or something time)
  let loggedIn = false;

  return (
    <Router>
      {/* Routes */}
      <Routes>
        {/* Redirections to protect our routes */}
        <Route exac path='/' element=
          {
            loggedIn ?
            <Navigate redirect from='/' to='/dashboard' />:
            <Navigate redirect from='/' to='/login' />
          }
        />
        {/* LoginRoute */}
        <Route exac path='/login' element={ <LoginPage /> }/>
        {/* LoginRoute */}
        <Route exac path='/dashboard' element=
          {
            loggedIn ?
            <DashBoardPage/>:
            <Navigate redirect from='/' to='/login' />
          }
        />
        <Route exac path='/register' element={ <RegisterPage /> }/>
        <Route exac path='/task' element=
          {
            loggedIn ?
            <TaskListComponent></TaskListComponent>:
            <Navigate redirect from='/' to='/login' />
          }
        />
        <Route path='/*' element={ <NotFoundPage /> }/>
      </Routes>
    </Router>
  );
}

export default AppRoutingFinal;