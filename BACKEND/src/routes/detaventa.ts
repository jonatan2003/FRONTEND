import { Router } from 'express';
import {
  createDetalleVenta,
  getDetallesVenta,
  getDetalleVentaById,
  deleteDetalleVenta,
  updateDetalleVenta
} from '../controllers/detaventa';

const DetaventasRouter = Router();

DetaventasRouter.post('/', createDetalleVenta); // Crear un nuevo registro de detaventa
DetaventasRouter.get('/', getDetallesVenta); // Obtener la lista de registros de detaventa
DetaventasRouter.get('/:idDetaventa', getDetalleVentaById); // Obtener un registro de detaventa por ID
DetaventasRouter.put('/:idDetaventa', updateDetalleVenta); // Actualizar un registro de detaventa por ID
DetaventasRouter.delete('/:idDetaventa', deleteDetalleVenta); // Eliminar un registro de detaventa por ID

export default DetaventasRouter;
