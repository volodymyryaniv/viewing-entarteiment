import axios from 'axios';
import { v4 } from 'uuid';
const host = 'http://localhost:3001';

export const updateRating = async (value, path) => {
  const data = await axios.post(`${host}${path}`, {
    estimate: value
  })
  return data;
}

export const updateFeedbacks = async (value, path) => {
  const data = await axios.post(`${host}${path}/feedback`, {
    id: v4(),
    ...value,
  })
  return data;
}
