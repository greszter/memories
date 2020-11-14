import { GET } from '../constants/actionTypes';

export const login = (user = {}, action) => {
  switch (action.type) {
    case GET:
    return action.payload;
  }
}