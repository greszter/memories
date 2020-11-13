import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Register from './Pages/Register/Register';
import NavBar from './components/NavBar/NavBar';
import PostPage from './Pages/PostPage/PostPage';

const App = () => {

  return (
    <Router maxwidth="lg">
      <NavBar />
      <Switch>
        <Route path='/login'>

        </Route>
        <Route path='/posts'>
          <PostPage />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;