import axios from 'axios';
const host = 'http://localhost:3001';

const getList = async (path) => {
   const data = await axios.get(`${host}${path}`);
   return data;
}

const getItemById = async (pathWithId) => {
   const data = await axios.get(`${host}${pathWithId}`);
   return data;
}
export {
   getList,
   getItemById,
}