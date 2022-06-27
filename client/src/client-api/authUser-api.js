import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';

export const registerUser = async (userData) => {
  return await axios.post(`/authorization/singup`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`/authorization/singin`, userData);
};

export const getCurrentUser = async (token) => {
  return await axios.post(`/authorization/singin/current`, { token });
};