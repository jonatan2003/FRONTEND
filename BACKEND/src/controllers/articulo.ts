// Controladores para el modelo Articulo
import { Request, Response } from 'express';
import Articulos from '../models/articulo';

export const createArticulo = async (req: Request, res: Response) => {
  const { idmarca, idmodelo, descripcion } = req.body;

  try {
    const nuevoArticulo = await Articulos.create({
      idmarca,
      idmodelo,
      descripcion
    });

    res.status(201).json(nuevoArticulo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al crear el artículo' });
  }
};

export const getArticuloById = async (req: Request, res: Response) => {
  const { idArticulo } = req.params;

  try {
    const articulo = await Articulos.findByPk(idArticulo);

    if (!articulo) {
      res.status(404).json({ msg: 'Artículo no encontrado' });
    } else {
      res.json(articulo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener el artículo' });
  }
};

export const updateArticulo = async (req: Request, res: Response) => {
  const { body } = req;
  const { idArticulo } = req.params;

  try {
    const articulo = await Articulos.findByPk(idArticulo);

    if (articulo) {
      await articulo.update(body);
      res.json({ msg: 'El artículo fue actualizado con éxito' });
    } else {
      res.status(404).json({ msg: `No existe un artículo con el id ${idArticulo}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al actualizar el artículo' });
  }
};

export const deleteArticulo = async (req: Request, res: Response) => {
  const { idArticulo } = req.params;

  try {
    const articulo = await Articulos.findByPk(idArticulo);

    if (!articulo) {
      res.status(404).json({ msg: 'Artículo no encontrado' });
    } else {
      await articulo.destroy();
      res.json({ msg: 'Artículo eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el artículo' });
  }
};

export const getArticulos = async (req: Request, res: Response) => {
  try {
    const articulos = await Articulos.findAll();
    res.json(articulos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de artículos' });
  }
};
