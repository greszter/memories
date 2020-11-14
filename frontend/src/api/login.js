import axios from 'axios';

const url = 'http://localhost:5000/login';

export const loginUser = (user) => axios.get(url, user);