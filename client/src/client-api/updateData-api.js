import axios from 'axios';
const host = 'http://localhost:3001';

export const updateRating = async (value, path) => {
  const data = await axios.post(`${host}${path}`, {
    estimate: value
  })
  return data;
}