import SelectionController from './app/controllers/selectionController.js';
import { Router } from 'express';

const routes = Router();
// ROTAS
routes.post('/selections', SelectionController.store);
routes.get('/selections', SelectionController.index);
routes.get('/selections/:id', SelectionController.show);
routes.put('/selections/:id', SelectionController.update);
routes.delete('/selections/:id', SelectionController.delete);

export default routes;  