import { Router } from 'express';
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../../controllers/oldscontrollers/usuarios';

const Usuariorouter = Router();

// Rutas para Usuarios
Usuariorouter.post('/', createUser); // Crear un nuevo usuario
Usuariorouter.get('/', getUsers); // Obtener la lista de usuarios
Usuariorouter.get('/:idUsuario', getUserById); // Obtener un usuario por ID
Usuariorouter.put('/:idUsuario', updateUser); // Actualizar un usuario por ID
Usuariorouter.delete('/:idUsuario', deleteUser); // Eliminar un usuario por ID

export default Usuariorouter;
