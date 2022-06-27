import express from 'express';
import connect from './connectionMongoose.js';
import path from 'path';
import authRouter from './route-api/authRoutes.js';
import historyRouter from './route-api/historyRoutes.js';
import bookStoresRouter from './route-api/bookstoresRoutes.js';
import cafesRouter from './route-api/cafesRoutes.js';
import cinemasRouter from './route-api/cinemaRoutes.js';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connect();

const app = express();
app.use(express.json());
app.use('*', (req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers',  'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'DELETE');
  next();
})
app.use(historyRouter);
app.use(bookStoresRouter);
app.use(cafesRouter);
app.use(cinemasRouter);
app.use(authRouter);
app.use((error,req,res,next) => {
  res.status(400).json({message: error.message})
})

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
