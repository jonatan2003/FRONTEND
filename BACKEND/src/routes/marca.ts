import { Router } from 'express';
import {
  createMarca,
  getMarcas,
  getMarcaById,
  updateMarca,
  deleteMarca,
} from '../controllers/marca';

const MarcasRouter = Router();

MarcasRouter.post('/', createMarca); // Crear una nueva marca
MarcasRouter.get('/', getMarcas); // Obtener la lista de marcas
MarcasRouter.get('/:idMarca', getMarcaById); // Obtener una marca por ID
MarcasRouter.put('/:idMarca', updateMarca); // Actualizar una marca por ID
MarcasRouter.delete('/:idMarca', deleteMarca); // Eliminar una marca por ID

export default MarcasRouter;
