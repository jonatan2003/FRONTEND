import { Router } from 'express';
import {
createDetallePrestamo,
updateDetallePrestamo,
deleteDetallePrestamo,
getDetallePrestamoById,
getDetallesPrestamo
} from '../controllers/detaprestamo';

const DetaprestamosRouter = Router();

DetaprestamosRouter.post('/', createDetallePrestamo); // Crear un nuevo registro de detaprestamo
DetaprestamosRouter.get('/', getDetallesPrestamo); // Obtener la lista de registros de detaprestamo
DetaprestamosRouter.get('/:idDetaprestamo', getDetallePrestamoById); // Obtener un registro de detaprestamo por ID
DetaprestamosRouter.put('/:idDetaprestamo', updateDetallePrestamo); // Actualizar un registro de detaprestamo por ID
DetaprestamosRouter.delete('/:idDetaprestamo', deleteDetallePrestamo); // Eliminar un registro de detaprestamo por ID

export default DetaprestamosRouter;
