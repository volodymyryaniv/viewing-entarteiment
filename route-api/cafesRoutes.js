import express from 'express';
import Cafes from '../schemas/cafeSchema.js';
const cafesRouter = express.Router();

cafesRouter.get('/attractions/cafes', async (req,res) => {
   const data = await Cafes.find()
   res.send(data);
})
cafesRouter.get('/attractions/cafes/:id',async (req,res) => {
   const data = await Cafes.findById(req.params.id)
   res.send(data);
})

export default cafesRouter;