import express from 'express';
import Cafes from '../schemas/cafeSchema.js';
import postRating from './functions/postRating.js';
import postFeedback from './functions/postFeedback.js';
const cafesRouter = express.Router();

cafesRouter.get('/attractions/cafes', async (req,res) => {
   const data = await Cafes.find()
   res.send(data);
})
cafesRouter.get('/attractions/cafes/:id',async (req,res) => {
   const data = await Cafes.findById(req.params.id);
   res.send(data);
})
cafesRouter.post("/attractions/cafes/:id", async (req, res) => {
   const cafe = await postRating(Cafes, req.params.id, req.body.estimate);
   res.send(cafe);
 });
cafesRouter.post("/attractions/cafes/:id/addfeedback", async (req, res) => {
   const item = await postFeedback(Cafes, req.params.id, req.body);
   res.send(item);
});
 

export default cafesRouter;
