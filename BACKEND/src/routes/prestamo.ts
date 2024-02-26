import { Router } from 'express';
import {
  createPrestamo,
  getPrestamos,
  getPrestamoById,
  updatePrestamo,
  deletePrestamo,
} from '../controllers/prestamo';

const PrestamosRouter = Router();

PrestamosRouter.post('/', createPrestamo); // Crear un nuevo préstamo
PrestamosRouter.get('/', getPrestamos); // Obtener la lista de préstamos
PrestamosRouter.get('/:idPrestamo', getPrestamoById); // Obtener un préstamo por ID
PrestamosRouter.put('/:idPrestamo', updatePrestamo); // Actualizar un préstamo por ID
PrestamosRouter.delete('/:idPrestamo', deletePrestamo); // Eliminar un préstamo por ID

export default PrestamosRouter;
