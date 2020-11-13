import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { register } from './reducers/register';
import { posts } from './reducers/posts';

function root(state = {}, action) {
  return {
    register: register(state.register, action),
    posts: posts(state.posts, action),
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  root,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };