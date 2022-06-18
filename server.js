import express from 'express';
import connect from './connectionMongoose.js';
import path from 'path';
import historyRouter from './route-api/historyRoutes.js';
import bookStoresRouter from './route-api/bookstoresRoutes.js';
import cafesRouter from './route-api/cafesRoutes.js';
import cinemasRouter from './route-api/cinemaRoutes.js';
import {fileURLToPath} from 'url';
import {PORT} from './consts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connect();

const app = express();
app.use(express.json());
app.use('*', (req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers',  'Content-Type');
  next();
})
app.use(historyRouter);
app.use(bookStoresRouter);
app.use(cafesRouter);
app.use(cinemasRouter);


app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
