import axios from 'axios';
const host = 'http://localhost:3001';

export const removeFeedback = async (path, id) => {
  const data = await axios.delete(`${host}${path}/feedback`, {data: {id}});
  return data;
};
