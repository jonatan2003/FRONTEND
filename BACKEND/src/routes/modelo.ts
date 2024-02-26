import { Router } from 'express';
import {
  createModelo,
  getModelos,
  getModeloById,
  updateModelo,
  deleteModelo,
} from '../controllers/modelo';

const ModelosRouter = Router();

ModelosRouter.post('/', createModelo); // Crear un nuevo modelo
ModelosRouter.get('/', getModelos); // Obtener la lista de modelos
ModelosRouter.get('/:idModelo', getModeloById); // Obtener un modelo por ID
ModelosRouter.put('/:idModelo', updateModelo); // Actualizar un modelo por ID
ModelosRouter.delete('/:idModelo', deleteModelo); // Eliminar un modelo por ID

export default ModelosRouter;
