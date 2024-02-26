import { Request, Response } from 'express';
import Productos from '../../models/oldmodels/productos';

export const createProducto = async (req: Request, res: Response) => {
  const { descripcion, fecha_hora } = req.body;

  try {
    const nuevoProducto = await Productos.create({
      descripcion,
      fecha_hora
    });

    res.status(201).json(nuevoProducto);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al crear el producto' });
  }
};

export const getProductoById = async (req: Request, res: Response) => {
  const { idProducto } = req.params;

  try {
    const producto = await Productos.findByPk(idProducto);

    if (!producto) {
      res.status(404).json({ msg: 'Producto no encontrado' });
    } else {
      res.json(producto);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener el producto' });
  }
};

export const updateProducto = async (req: Request, res: Response) => {
  const { body } = req;
  const { idProducto } = req.params;

  try {
    const producto = await Productos.findByPk(idProducto);

    if (producto) {
      await producto.update(body);
      res.json({ msg: 'El producto fue actualizado con éxito' });
    } else {
      res.status(404).json({ msg: `No existe un producto con el id ${idProducto}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al actualizar el producto' });
  }
};

export const deleteProducto = async (req: Request, res: Response) => {
  const { idProducto } = req.params;

  try {
    const producto = await Productos.findByPk(idProducto);

    if (!producto) {
      res.status(404).json({ msg: 'Producto no encontrado' });
    } else {
      await producto.destroy();
      res.json({ msg: 'Producto eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el producto' });
  }
};

export const getProductos = async (req: Request, res: Response) => {
  try {
    const productos = await Productos.findAll();
    res.json(productos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de productos' });
  }
};
