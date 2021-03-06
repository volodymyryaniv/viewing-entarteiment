import express from 'express';
import Cinemas from '../schemas/cinemaSchema.js';
import postRating from './functions/postRating.js';
import postFeedback from './functions/postFeedback.js';
import deleteFeedback from './functions/deleteFeedback.js';
const cinemasRouter = express.Router();

cinemasRouter.get('/attractions/cinemas', async (req,res) => {
  const data = await Cinemas.find()
  res.send(data);
});

cinemasRouter.get('/attractions/cinemas/:id',async (req,res) => {
  const data = await Cinemas.findById(req.params.id)
  res.send(data);
});

cinemasRouter.post("/attractions/cinemas/:id", async (req, res) => {
  const cinema = await postRating(Cinemas, req.params.id, req.body.estimate);
  res.send(cinema);
});

cinemasRouter.post("/attractions/cinemas/:id/feedback", async (req, res) => {
  const item = await postFeedback(Cinemas, req.params.id, req.body);
  res.send(item);
});

cinemasRouter.delete("/attractions/cinemas/:id/feedback", async (req, res) => {
  const item = await deleteFeedback(Cinemas, req.params.id, req.body.id);
  res.send(item);
});

export default cinemasRouter;
