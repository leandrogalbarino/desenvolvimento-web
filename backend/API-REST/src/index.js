import express from 'express';
import routes from './routes.js';

const app = express();
// usar o router;
app.use(express.json());

app.use(routes);

export default app;
