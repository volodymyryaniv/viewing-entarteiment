import axios from 'axios';
import { v4 } from 'uuid';
const host = 'http://localhost:3001';

export const updateRating = async (path, value) => {
  const data = await axios.post(`${host}${path}`, {
    estimate: value
  })
  return data;
}

export const updateFeedbacks = async (path, value) => {
  const data = await axios.post(`${host}${path}/feedback`, {
    id: v4(),
    ...value,
  })
  return data;
}
