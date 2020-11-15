import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './pages/Register/Register';
import NavBar from './components/NavBar/NavBar';
import PostPage from './pages/PostPage/PostPage';
import Login from './pages/Login/Login';
import MainPage from './pages/Main/MainPage';

const App = () => {

  return (
    <Router maxwidth="lg">
      <NavBar />
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/posts'>
          <PostPage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path='/'>
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;