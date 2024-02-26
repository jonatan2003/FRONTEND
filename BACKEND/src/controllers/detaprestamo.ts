// Controladores para el modelo Detalle de Préstamo (detaprestamo)
import { Request, Response } from 'express';
import DetallesPrestamo from '../models/detaprestamo';

export const createDetallePrestamo = async (req: Request, res: Response) => {
  const { idprestamo, cantidad, precio } = req.body;

  try {
    const nuevoDetallePrestamo = await DetallesPrestamo.create({
      idprestamo,
      cantidad,
      precio
    });

    res.status(201).json(nuevoDetallePrestamo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al crear el detalle de préstamo' });
  }
};

export const getDetallePrestamoById = async (req: Request, res: Response) => {
  const { idDetallePrestamo } = req.params;

  try {
    const detallePrestamo = await DetallesPrestamo.findByPk(idDetallePrestamo);

    if (!detallePrestamo) {
      res.status(404).json({ msg: 'Detalle de préstamo no encontrado' });
    } else {
      res.json(detallePrestamo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener el detalle de préstamo' });
  }
};

export const updateDetallePrestamo = async (req: Request, res: Response) => {
  const { body } = req;
  const { idDetallePrestamo } = req.params;

  try {
    const detallePrestamo = await DetallesPrestamo.findByPk(idDetallePrestamo);

    if (detallePrestamo) {
      await detallePrestamo.update(body);
      res.json({ msg: 'El detalle de préstamo fue actualizado con éxito' });
    } else {
      res.status(404).json({ msg: `No existe un detalle de préstamo con el id ${idDetallePrestamo}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al actualizar el detalle de préstamo' });
  }
};

export const deleteDetallePrestamo = async (req: Request, res: Response) => {
  const { idDetallePrestamo } = req.params;

  try {
    const detallePrestamo = await DetallesPrestamo.findByPk(idDetallePrestamo);

    if (!detallePrestamo) {
      res.status(404).json({ msg: 'Detalle de préstamo no encontrado' });
    } else {
      await detallePrestamo.destroy();
      res.json({ msg: 'Detalle de préstamo eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el detalle de préstamo' });
  }
};

export const getDetallesPrestamo = async (req: Request, res: Response) => {
  try {
    const detallesPrestamo = await DetallesPrestamo.findAll();
    res.json(detallesPrestamo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de detalles de préstamo' });
  }
};


