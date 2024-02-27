import { Router } from 'express';
import * as pagoController from '../controllers/pago';

const PagoRouter = Router();

PagoRouter.post('/', pagoController.crearPago); // Crear un nuevo pago
PagoRouter.get('/', pagoController.obtenerPagos); // Obtener la lista de pagos
PagoRouter.get('/:idPago', pagoController.obtenerPagoPorId); // Obtener un pago por ID
PagoRouter.put('/:idPago', pagoController.actualizarPago); // Actualizar un pago por ID
PagoRouter.delete('/:idPago', pagoController.eliminarPago); // Eliminar un pago por ID

export default PagoRouter;
