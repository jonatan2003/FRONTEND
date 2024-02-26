import { Request, Response } from 'express';
import Prestamo from '../models/prestamo';

export const createPrestamo = async (req: Request, res: Response) => {
  const { idcliente, idusuario, fechaPrestamo, fechaDevolucion, interes, estado, total, mora } = req.body;

  try {
    const nuevoPrestamo = await Prestamo.create({
      idcliente,
      idusuario,
      fechaPrestamo,
      fechaDevolucion,
      interes,
      estado,
      total,
      mora,
    });

    res.status(201).json(nuevoPrestamo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al crear el préstamo' });
  }
};

export const getPrestamoById = async (req: Request, res: Response) => {
  const { idPrestamo } = req.params;

  try {
    const prestamo = await Prestamo.findByPk(idPrestamo);

    if (!prestamo) {
      res.status(404).json({ msg: 'Préstamo no encontrado' });
    } else {
      res.json(prestamo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener el préstamo' });
  }
};

export const updatePrestamo = async (req: Request, res: Response) => {
  const { body } = req;
  const { idPrestamo } = req.params;

  try {
    const prestamo = await Prestamo.findByPk(idPrestamo);

    if (prestamo) {
      await prestamo.update(body);
      res.json({ msg: 'El préstamo fue actualizado con éxito' });
    } else {
      res.status(404).json({ msg: `No existe un préstamo con el id ${idPrestamo}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al actualizar el préstamo' });
  }
};

export const deletePrestamo = async (req: Request, res: Response) => {
  const { idPrestamo } = req.params;

  try {
    const prestamo = await Prestamo.findByPk(idPrestamo);

    if (!prestamo) {
      res.status(404).json({ msg: 'Préstamo no encontrado' });
    } else {
      await prestamo.destroy();
      res.json({ msg: 'Préstamo eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el préstamo' });
  }
};

export const getPrestamos = async (req: Request, res: Response) => {
  try {
    const prestamos = await Prestamo.findAll();
    res.json(prestamos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de préstamos' });
  }
};
