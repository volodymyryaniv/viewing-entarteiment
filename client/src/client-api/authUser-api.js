import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';

export const registerUser = async (userData) => {
  const newUser = await axios.post(`/authorization/singup`, userData);
  return newUser;
};

export const loginUser = async (userData) => {
  const user = await axios.post(`/authorization/singin`, userData);
  return user;
};