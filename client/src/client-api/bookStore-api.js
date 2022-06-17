import axios from 'axios';
const host = 'http://localhost:3001';

const getBooks = async (path) => {
   const data = await axios.get(`${host}${path}`);
   return data;
}

const getBookById = async (pathWithId) => {
   const data = await axios.get(`${host}${pathWithId}`);
   return data;
}
export {
   getBooks,
   getBookById,
}