import express from 'express';
import 'dotenv/config';
import singUpUser from './functions/singUpUser.js';
import singInUser from './functions/singInUser.js';
const authRouter = express.Router();

authRouter.post('/authorization/singup', async(req, res, next) => {
  try {
    const newUser = await singUpUser({...req.body});
    res.send(newUser);
  } catch (err) {
    return next(err);
  }
});

authRouter.post('/authorization/singin', async(req, res, next) => {
  try {
    const user = await singInUser({...req.body});
    res.send(user);
  } catch (err) {
    return next(err);
  }
});

export default authRouter;
