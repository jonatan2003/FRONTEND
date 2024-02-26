import { Request, Response } from 'express';
import Marca from '../models/marca';

export const createMarca = async (req: Request, res: Response) => {
  const { descripcion } = req.body;

  try {
    const nuevaMarca = await Marca.create({
      descripcion,
    });

    res.status(201).json(nuevaMarca);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al crear la marca' });
  }
};

export const getMarcaById = async (req: Request, res: Response) => {
  const { idMarca } = req.params;

  try {
    const marca = await Marca.findByPk(idMarca);

    if (!marca) {
      res.status(404).json({ msg: 'Marca no encontrada' });
    } else {
      res.json(marca);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la marca' });
  }
};

export const updateMarca = async (req: Request, res: Response) => {
  const { body } = req;
  const { idMarca } = req.params;

  try {
    const marca = await Marca.findByPk(idMarca);

    if (marca) {
      await marca.update(body);
      res.json({ msg: 'La marca fue actualizada con éxito' });
    } else {
      res.status(404).json({ msg: `No existe una marca con el id ${idMarca}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al actualizar la marca' });
  }
};

export const deleteMarca = async (req: Request, res: Response) => {
  const { idMarca } = req.params;

  try {
    const marca = await Marca.findByPk(idMarca);

    if (!marca) {
      res.status(404).json({ msg: 'Marca no encontrada' });
    } else {
      await marca.destroy();
      res.json({ msg: 'Marca eliminada con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar la marca' });
  }
};

export const getMarcas = async (req: Request, res: Response) => {
  try {
    const marcas = await Marca.findAll();
    res.json(marcas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de marcas' });
  }
};
