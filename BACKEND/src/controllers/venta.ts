import { Request, Response } from 'express';
import Venta from '../models/venta';

export const createVenta = async (req: Request, res: Response) => {
  const { idarticulo, fechaVenta, precio, comprador } = req.body;

  try {
    const nuevaVenta = await Venta.create({
      idarticulo,
      fechaVenta,
      precio,
      comprador,
    });

    res.status(201).json(nuevaVenta);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al crear la venta' });
  }
};

export const getVentaById = async (req: Request, res: Response) => {
  const { idVenta } = req.params;

  try {
    const venta = await Venta.findByPk(idVenta);

    if (!venta) {
      res.status(404).json({ msg: 'Venta no encontrada' });
    } else {
      res.json(venta);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la venta' });
  }
};

export const updateVenta = async (req: Request, res: Response) => {
  const { body } = req;
  const { idVenta } = req.params;

  try {
    const venta = await Venta.findByPk(idVenta);

    if (venta) {
      await venta.update(body);
      res.json({ msg: 'La venta fue actualizada con éxito' });
    } else {
      res.status(404).json({ msg: `No existe una venta con el id ${idVenta}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al actualizar la venta' });
  }
};

export const deleteVenta = async (req: Request, res: Response) => {
  const { idVenta } = req.params;

  try {
    const venta = await Venta.findByPk(idVenta);

    if (!venta) {
      res.status(404).json({ msg: 'Venta no encontrada' });
    } else {
      await venta.destroy();
      res.json({ msg: 'Venta eliminada con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar la venta' });
  }
};

export const getVentas = async (req: Request, res: Response) => {
  try {
    const ventas = await Venta.findAll();
    res.json(ventas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de ventas' });
  }
};
