import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3001';
axios.defaults.headers.common['authorization'] = `Bearer ${localStorage.getItem('accessToken')}`;

export const registerUser = async (userData) => {
  return await axios.post(`/authorization/singup`, userData);
};

export const loginUser = async (userData) => {
  return await axios.post(`/authorization/singin`, userData);
};

export const getCurrentUser = async () => {
  return await axios.get(`/authorization/singin/current`);
};