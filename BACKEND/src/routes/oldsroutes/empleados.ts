import { Router } from 'express';
import {
  createEmpleado,
  getEmpleados,
  getEmpleadoById,
  updateEmpleado,
  deleteEmpleado,
} from '../../controllers/oldscontrollers/empleados';

const EmpleadosRouter = Router();

EmpleadosRouter.post('/', createEmpleado); // Crear un nuevo empleado
EmpleadosRouter.get('/', getEmpleados); // Obtener la lista de empleados
EmpleadosRouter.get('/:idEmpleado', getEmpleadoById); // Obtener un empleado por ID
EmpleadosRouter.put('/:idEmpleado', updateEmpleado); // Actualizar un empleado por ID
EmpleadosRouter.delete('/:idEmpleado', deleteEmpleado); // Eliminar un empleado por ID

export default EmpleadosRouter;
