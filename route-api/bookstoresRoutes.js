import express from 'express';
import BookStores from '../schemas/BookStoreSchema.js';
import postRating from './functions/postRating.js';
import postFeedback from './functions/postFeedback.js';
import deleteFeedback from './functions/deleteFeedback.js';
const bookStoresRouter = express.Router();

bookStoresRouter.get('/attractions/bookstores',async (req,res) => {
  const data = await BookStores.find()
  res.send(data);
});

bookStoresRouter.get('/attractions/bookstores/:id',async (req,res) => {
  const data = await BookStores.findById(req.params.id)
  res.send(data);
});

bookStoresRouter.post("/attractions/bookstores/:id", async (req, res) => {
  const bookstore = await postRating(BookStores, req.params.id, req.body.estimate);
  res.send(bookstore);
});

bookStoresRouter.post("/attractions/bookStores/:id/feedback", async (req, res) => {
const item = await postFeedback(BookStores, req.params.id, req.body);
res.send(item);
});

bookStoresRouter.delete("/attractions/bookStores/:id/feedback", async (req, res) => {
  const item = await deleteFeedback(BookStores, req.params.id, req.body.id);
  res.send(item);
});

export default bookStoresRouter;
