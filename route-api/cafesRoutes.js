import express from 'express';
import Cafes from '../schemas/cafeSchema.js';
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
   const { estimations } = await Cafes.findById(req.params.id);
   const rating =
     estimations.reduce(
       (accum, number) => accum + number,
       Number(req.body.estimate)
     ) /
     (estimations.length + 1);
   const cafe = await Cafes.findByIdAndUpdate(
     req.params.id,
     { $push: { estimations: Number(req.body.estimate) }, rating: rating },
     { new: true }
   );
   res.send(cafe);
 });
 

export default cafesRouter;