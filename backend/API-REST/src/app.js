import express from 'express';
import SelectionController from './app/controllers/selectionController.js';

const app = express();
app.use(express.json());


// ROTAS
app.post('/selections', SelectionController.store);
app.get('/selections', SelectionController.index);
app.get('/selections/:id', SelectionController.show);
app.put('/selections/:id', SelectionController.update);
app.delete('/selections/:id', SelectionController.delete);

export default app;
