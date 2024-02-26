import { Request, Response } from 'express';
import Empleados from '../../models/empleados';

export const createEmpleado = async (req: Request, res: Response) => {
  // Obtener los datos del cuerpo de la solicitud
  const { nombre, apellido, dni, direccion, correo, telefono, sexo } = req.body;

  try {
    // Crear un nuevo empleado
    const nuevoEmpleado = await Empleados.create({
      nombre,
      apellido,
      dni,
      direccion,
      correo,
      telefono,
      sexo
    });

    res.status(201).json(nuevoEmpleado);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al crear el empleado' });
  }
};

export const getEmpleados = async (req: Request, res: Response) => {
  try {
    // Obtener todos los empleados
    const empleados = await Empleados.findAll();
    res.json(empleados);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de empleados' });
  }
};



export const getEmpleadoById = async (req: Request, res: Response) => {
  const { idEmpleado } = req.params;

  try {
    const empleado = await Empleados.findByPk(idEmpleado);

    if (!empleado) {
      res.status(404).json({ msg: 'Empleado no encontrado' });
    } else {
      res.json(empleado);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener el empleado' });
  }
};

export const updateEmpleado = async (req: Request, res: Response) => {
  const { body } = req;
  const { idEmpleado } = req.params;

  try {
    const empleado = await Empleados.findByPk(idEmpleado);

    if (empleado) {
      await empleado.update(body);
      res.json({ msg: 'El empleado fue actualizado con éxito' });
    } else {
      res.status(404).json({ msg: `No existe un empleado con el id ${idEmpleado}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al actualizar el empleado' });
  }
};

export const deleteEmpleado = async (req: Request, res: Response) => {
  const { idEmpleado } = req.params;

  try {
    const empleado = await Empleados.findByPk(idEmpleado);

    if (!empleado) {
      res.status(404).json({ msg: 'Empleado no encontrado' });
    } else {
      await empleado.destroy();
      res.json({ msg: 'Empleado eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el empleado' });
  }
};

