// Controladores para el modelo Detalle de Venta (detaventa)
import { Request, Response } from 'express';
import DetallesVenta from '../models/detaventa';

export const createDetalleVenta = async (req: Request, res: Response) => {
  const { idventa, idarticulo, cantidad, precio } = req.body;

  try {
    const nuevoDetalleVenta = await DetallesVenta.create({
      idventa,
      idarticulo,
      cantidad,
      precio
    });

    res.status(201).json(nuevoDetalleVenta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al crear el detalle de venta' });
  }
};

export const getDetalleVentaById = async (req: Request, res: Response) => {
  const { idDetalleVenta } = req.params;

  try {
    const detalleVenta = await DetallesVenta.findByPk(idDetalleVenta);

    if (!detalleVenta) {
      res.status(404).json({ msg: 'Detalle de venta no encontrado' });
    } else {
      res.json(detalleVenta);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener el detalle de venta' });
  }
};

export const updateDetalleVenta = async (req: Request, res: Response) => {
  const { body } = req;
  const { idDetalleVenta } = req.params;

  try {
    const detalleVenta = await DetallesVenta.findByPk(idDetalleVenta);

    if (detalleVenta) {
      await detalleVenta.update(body);
      res.json({ msg: 'El detalle de venta fue actualizado con éxito' });
    } else {
      res.status(404).json({ msg: `No existe un detalle de venta con el id ${idDetalleVenta}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al actualizar el detalle de venta' });
  }
};

export const deleteDetalleVenta = async (req: Request, res: Response) => {
  const { idDetalleVenta } = req.params;

  try {
    const detalleVenta = await DetallesVenta.findByPk(idDetalleVenta);

    if (!detalleVenta) {
      res.status(404).json({ msg: 'Detalle de venta no encontrado' });
    } else {
      await detalleVenta.destroy();
      res.json({ msg: 'Detalle de venta eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el detalle de venta' });
  }
};

export const getDetallesVenta = async (req: Request, res: Response) => {
  try {
    const detallesVenta = await DetallesVenta.findAll();
    res.json(detallesVenta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de detalles de venta' });
  }
};
