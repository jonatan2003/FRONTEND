import { Router } from 'express';
import {
  createArticulo,
  getArticulos,
  getArticuloById,
  updateArticulo,
  deleteArticulo,
} from '../controllers/articulo';

const ArticulosRouter = Router();

ArticulosRouter.post('/', createArticulo); // Crear un nuevo artículo
ArticulosRouter.get('/', getArticulos); // Obtener la lista de artículos
ArticulosRouter.get('/:idArticulo', getArticuloById); // Obtener un artículo por ID
ArticulosRouter.put('/:idArticulo', updateArticulo); // Actualizar un artículo por ID
ArticulosRouter.delete('/:idArticulo', deleteArticulo); // Eliminar un artículo por ID

export default ArticulosRouter;
