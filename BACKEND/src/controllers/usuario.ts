import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import Usuario from '../models/usuario';
import Empleado from '../models/empleados';

export const createUsuario = async (req: Request, res: Response) => {
  const { idempleado, usuario, password, permisos } = req.body;

  try {
    // Verifica si el usuario ya existe en la base de datos
    const existingUser = await Usuario.findOne({ where: { usuario } });

    if (existingUser) {
      return res.status(400).json({ msg: 'El usuario ya existe' });
    }

    // Hashea la contraseña antes de almacenarla en la base de datos
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Crea un nuevo usuario con la contraseña hasheada
    const nuevoUsuario = await Usuario.create({
      idempleado,
      usuario,
      password: hashedPassword,
      permisos,
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error, comuníquese con soporte' });
  }
};

export const getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await Usuario.findAll({
      include: [{ model: Empleado, as: 'Empleado' }],
    });

    res.json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de usuarios' });
  }
};

export const getUsuarioById = async (req: Request, res: Response) => {
  const { idUsuario } = req.params;

  try {
    const usuario = await Usuario.findByPk(idUsuario, {
      include: [{ model: Empleado, as: 'Empleado' }],
    });

    if (!usuario) {
      res.status(404).json({ msg: 'Usuario no encontrado' });
    } else {
      res.json(usuario);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener el usuario' });
  }
};

export const updateUsuario = async (req: Request, res: Response) => {
  const { body } = req;
  const { idUsuario } = req.params;

  try {
    const usuario = await Usuario.findByPk(idUsuario);

    if (usuario) {
      await usuario.update(body);
      res.json({ msg: 'El usuario fue actualizado con éxito' });
    } else {
      res.status(404).json({ msg: `No existe un usuario con el id ${idUsuario}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error, comuníquese con soporte' });
  }
};

export const deleteUsuario = async (req: Request, res: Response) => {
  const { idUsuario } = req.params;

  try {
    const usuario = await Usuario.findByPk(idUsuario);

    if (!usuario) {
      res.status(404).json({ msg: 'Usuario no encontrado' });
    } else {
      await usuario.destroy();
      res.json({ msg: 'Usuario eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el usuario' });
  }
};
