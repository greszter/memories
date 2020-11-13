import axios from 'axios';

const url = 'http://localhost:5000/register';

export const createUser = (newUser) => axios.post(url, newUser);

