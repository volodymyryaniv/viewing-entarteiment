import express from 'express';
import History from '../schemas/historySchema.js';
const historyRouter = express.Router();

historyRouter.get('/history',async (req,res) => {
   const data = await History.find()
   res.send(data);
});

export default historyRouter;