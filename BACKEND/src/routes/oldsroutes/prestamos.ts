import { Router } from 'express';
import {
  createPrestamo,
  getPrestamos,
  getPrestamosByClientId,
  updatePrestamo,
  deletePrestamo,
} from '../../controllers/oldscontrollers/prestamos';

const PrestamosRouter = Router();

PrestamosRouter.post('/', createPrestamo); // Crear un nuevo préstamo
PrestamosRouter.get('/', getPrestamos); // Obtener la lista de préstamos
PrestamosRouter.get('/:idCliente', getPrestamosByClientId); // Obtener un préstamo por ID
PrestamosRouter.put('/:idPrestamo', updatePrestamo); // Actualizar un préstamo por ID
PrestamosRouter.delete('/:idPrestamo', deletePrestamo); // Eliminar un préstamo por ID

export default PrestamosRouter;
