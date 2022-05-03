import axios from 'axios';
const host = 'http://localhost:3001';

const getBooks = async () => {
   const data = await axios.get(`${host}/attractions/book-store`);
   return data;
}

const getBookById = async (id) => {
   const data = await axios.get(`${host}/attractions/book-store/${id}`);
   return data;
}
export {
   getBooks,
   getBookById,
}