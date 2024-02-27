import { Request, Response } from 'express';
import Pago from '../models/pago';

// Obtener todos los pagos
export const obtenerPagos = async (req: Request, res: Response): Promise<void> => {
  try {
    const pagos = await Pago.findAll();
    res.json(pagos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los pagos' });
  }
};

// Crear un nuevo pago
export const crearPago = async (req: Request, res: Response): Promise<void> => {
  try {
    const nuevoPago = await Pago.create(req.body);
    res.json(nuevoPago);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al crear el pago' });
  }
};

// Obtener un pago por ID
export const obtenerPagoPorId = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const pago = await Pago.findByPk(id);
    if (pago) {
      res.json(pago);
    } else {
      res.status(404).json({ mensaje: 'Pago no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener el pago' });
  }
};

// Actualizar un pago por ID
export const actualizarPago = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const [numFilasActualizadas, pagosActualizados] = await Pago.update(req.body, {
      where: { idpago: id },
      returning: true,
    });
    if (numFilasActualizadas > 0) {
      res.json(pagosActualizados[0]);
    } else {
      res.status(404).json({ mensaje: 'Pago no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al actualizar el pago' });
  }
};

// Eliminar un pago por ID
export const eliminarPago = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const numFilasEliminadas = await Pago.destroy({ where: { idpago: id } });
    if (numFilasEliminadas > 0) {
      res.json({ mensaje: 'Pago eliminado exitosamente' });
    } else {
      res.status(404).json({ mensaje: 'Pago no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al eliminar el pago' });
  }
};


