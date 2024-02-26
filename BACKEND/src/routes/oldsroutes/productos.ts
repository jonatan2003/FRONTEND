import { Router } from 'express';
import {
  createProducto,
  getProductos,
  getProductoById,
  updateProducto,
  deleteProducto,
} from '../../controllers/oldscontrollers/productos';

const ProductosRouter = Router();

ProductosRouter.post('/', createProducto); // Crear un nuevo producto
ProductosRouter.get('/', getProductos); // Obtener la lista de productos
ProductosRouter.get('/:idProducto', getProductoById); // Obtener un producto por ID
ProductosRouter.put('/:idProducto', updateProducto); // Actualizar un producto por ID
ProductosRouter.delete('/:idProducto', deleteProducto); // Eliminar un producto por ID

export default ProductosRouter;
