import express from 'express';
import connect from './connectionMongoose.js';
import path from 'path';
import historyRouter from './route-api/historyRoutes.js';
import bookStoresRouter from './route-api/bookstoresRoutes.js'
import {fileURLToPath} from 'url';
import {PORT} from './consts.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connect();

const app = express();

app.use(historyRouter);
app.use(bookStoresRouter);

app.listen(PORT, () => console.log(`Server has been started on port ${PORT}`))
