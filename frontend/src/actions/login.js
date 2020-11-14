import { GET } from '../constants/actionTypes';
import * as api from '../api/login';

export const loginUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(user)
    dispatch({ type: GET, payload: data });
  } catch (error) {
    console.log(error);
  }
}