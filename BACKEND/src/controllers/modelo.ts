import { Request, Response } from 'express';
import Modelo from '../models/modelo';

export const createModelo = async (req: Request, res: Response) => {
  const { descripcion } = req.body;

  try {
    const nuevoModelo = await Modelo.create({
      descripcion,
    });

    res.status(201).json(nuevoModelo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al crear el modelo' });
  }
};

export const getModeloById = async (req: Request, res: Response) => {
  const { idModelo } = req.params;

  try {
    const modelo = await Modelo.findByPk(idModelo);

    if (!modelo) {
      res.status(404).json({ msg: 'Modelo no encontrado' });
    } else {
      res.json(modelo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener el modelo' });
  }
};

export const updateModelo = async (req: Request, res: Response) => {
  const { body } = req;
  const { idModelo } = req.params;

  try {
    const modelo = await Modelo.findByPk(idModelo);

    if (modelo) {
      await modelo.update(body);
      res.json({ msg: 'El modelo fue actualizado con éxito' });
    } else {
      res.status(404).json({ msg: `No existe un modelo con el id ${idModelo}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al actualizar el modelo' });
  }
};

export const deleteModelo = async (req: Request, res: Response) => {
  const { idModelo } = req.params;

  try {
    const modelo = await Modelo.findByPk(idModelo);

    if (!modelo) {
      res.status(404).json({ msg: 'Modelo no encontrado' });
    } else {
      await modelo.destroy();
      res.json({ msg: 'Modelo eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el modelo' });
  }
};

export const getModelos = async (req: Request, res: Response) => {
  try {
    const modelos = await Modelo.findAll();
    res.json(modelos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de modelos' });
  }
};
