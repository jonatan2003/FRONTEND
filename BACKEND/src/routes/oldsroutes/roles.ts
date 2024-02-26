import { Router } from 'express';
import {
  createRol,
  getRoles,
  getRolById,
  updateRol,
  deleteRol,
} from '../../controllers/oldscontrollers/roles';

const RolesRouter = Router();

RolesRouter.post('/', createRol); // Crear un nuevo rol
RolesRouter.get('/', getRoles); // Obtener la lista de roles
RolesRouter.get('/:idRol', getRolById); // Obtener un rol por ID
RolesRouter.put('/:idRol', updateRol); // Actualizar un rol por ID
RolesRouter.delete('/:idRol', deleteRol); // Eliminar un rol por ID

export default RolesRouter;
