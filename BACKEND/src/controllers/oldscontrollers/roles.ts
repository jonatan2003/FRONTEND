import { Request, Response } from 'express';
import Roles from '../../models/oldmodels/roles';

export const createRol = async (req: Request, res: Response) => {
  const { nombre } = req.body;

  try {
    const nuevoRol = await Roles.create({
      nombre
    });

    res.status(201).json(nuevoRol);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al crear el rol' });
  }
};

export const getRolById = async (req: Request, res: Response) => {
  const { idRol } = req.params;

  try {
    const rol = await Roles.findByPk(idRol);

    if (!rol) {
      res.status(404).json({ msg: 'Rol no encontrado' });
    } else {
      res.json(rol);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener el rol' });
  }
};

export const updateRol = async (req: Request, res: Response) => {
  const { body } = req;
  const { idRol } = req.params;

  try {
    const rol = await Roles.findByPk(idRol);

    if (rol) {
      await rol.update(body);
      res.json({ msg: 'El rol fue actualizado con éxito' });
    } else {
      res.status(404).json({ msg: `No existe un rol con el id ${idRol}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al actualizar el rol' });
  }
};

export const deleteRol = async (req: Request, res: Response) => {
  const { idRol } = req.params;

  try {
    const rol = await Roles.findByPk(idRol);

    if (!rol) {
      res.status(404).json({ msg: 'Rol no encontrado' });
    } else {
      await rol.destroy();
      res.json({ msg: 'Rol eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el rol' });
  }
};

export const getRoles = async (req: Request, res: Response) => {
  try {
    const roles = await Roles.findAll();
    res.json(roles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de roles' });
  }
};
