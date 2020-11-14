import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './Pages/Register/Register';
import NavBar from './components/NavBar/NavBar';
import PostPage from './Pages/PostPage/PostPage';
import Login from './Pages/Login/Login';
import MainPage from './Pages/Main/MainPage';

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