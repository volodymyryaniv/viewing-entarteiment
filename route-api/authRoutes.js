import express from 'express';
import 'dotenv/config';
import singUpUser from './functions/singUpUser.js';
import singInUser from './functions/singInUser.js';
const authRouter = express.Router();

authRouter.post('/authorization/singup', async(req, res) => {
  try {
    const newUser = await singUpUser({...req.body});
    res.send(newUser);
  } catch (err) {
    res.sendStatus(400).json({message: err.message});
  }
});

authRouter.post('/authorization/singin', async(req, res) => {
  try {
    const user = await singInUser({...req.body});
    res.send(user);
  } catch (err) {
    res.sendStatus(400).json({message: err.message});
  }
});

export default authRouter;
