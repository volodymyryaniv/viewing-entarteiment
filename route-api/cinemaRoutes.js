import express from 'express';
import Cinemas from '../schemas/cinemaSchema.js';
const cinemasRouter = express.Router();

cinemasRouter.get('/attractions/cinemas', async (req,res) => {
   const data = await Cinemas.find()
   res.send(data);
})
cinemasRouter.get('/attractions/cinemas/:id',async (req,res) => {
   const data = await Cinemas.findById(req.params.id)
   res.send(data);
})

export default cinemasRouter;