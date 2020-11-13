import { CREATE } from '../constants/actionTypes';

export const register = (user = {}, action) => {
  switch (action.type) {
    case CREATE:
    return action.payload;
  }
}