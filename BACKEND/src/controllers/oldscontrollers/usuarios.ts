import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import Usuarios from '../../models/oldmodels/usuarios'; // Asegúrate de importar el modelo correcto
import Roles from '../../models/oldmodels/roles';

import Empleados from '../../models/empleados';

export const createUser = async (req: Request, res: Response) => {
  const {idempleado, usuario, password,idrol } = req.body;

  try {
    // Verifica si el usuario ya existe en la base de datos
    const existingUser = await Usuarios.findOne({ where: { usuario } });

    if (existingUser) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    // Hashea la contraseña antes de almacenarla en la base de datos
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Crea un nuevo usuario con la contraseña hasheada
    const newUser = await Usuarios.create({
      idempleado,
      usuario,
      password: hashedPassword,
      idrol,
      
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error, comuníquese con soporte' });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    // Obtener todos los usuarios con sus roles asociados
    const usuariosConRoles = await Usuarios.findAll({
      include: [
    
      { model: Empleados, as: 'Empleado' },
      { model: Roles, as: 'Rol' }
    
    ],
      
    });

    res.json(usuariosConRoles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de usuarios con roles' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  const { idUsuario } = req.params;

  try {
    const user = await Usuarios.findByPk(idUsuario);

    if (!user) {
      res.status(404).json({ msg: 'Usuario no encontrado' });
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener el usuario' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  const { body } = req;
  const { idUsuario } = req.params;

  try {
    const user = await Usuarios.findByPk(idUsuario);

    if (user) {
      await user.update(body);
      res.json({ msg: 'El usuario fue actualizado con éxito' });
    } else {
      res.status(404).json({ msg: `No existe un usuario con el id ${idUsuario}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error, comuníquese con soporte' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  const { idUsuario } = req.params;

  try {
    const user = await Usuarios.findByPk(idUsuario);

    if (!user) {
      res.status(404).json({ msg: 'Usuario no encontrado' });
    } else {
      await user.destroy();
      res.json({ msg: 'Usuario eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el usuario' });
  }
};

