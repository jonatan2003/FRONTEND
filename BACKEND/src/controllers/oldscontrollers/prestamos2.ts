import { Request, Response } from 'express';
import Prestamos from '../../models/oldmodels/prestamos';
import Clientes from '../../models/cliente';
import Empleados from '../../models/empleados';
import Productos from '../../models/oldmodels/productos';


export const getPrestamos = async (req: Request, res: Response) => {
  try {
    // Obtener todos los préstamos con datos de clientes, empleados y productos asociados
    const prestamos = await Prestamos.findAll({
      include: [
        { model: Clientes, as: 'Cliente' },
        { model: Empleados, as: 'Empleado' },
        { model: Productos, as: 'Producto' }
      ]
    });
    res.json(prestamos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de préstamos' });
  }
};
export const getPrestamosByClientId = async (req: Request, res: Response) => {
    const { idCliente } = req.params;
  
    try {
      // Obtener los préstamos del cliente por su ID de cliente con datos de clientes, empleados y productos asociados
      const prestamosCliente = await Prestamos.findAll({
        where: { idcliente: idCliente }, // Condición para buscar por ID del cliente
        include: [
          { model: Clientes, as: 'Cliente' },
          { model: Empleados, as: 'Empleado' },
          { model: Productos, as: 'Producto' }
        ]
      });
  
      if (prestamosCliente.length === 0) {
        res.status(404).json({ msg: 'El cliente no tiene préstamos asociados' });
      } else {
        res.json(prestamosCliente);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error al obtener los préstamos del cliente' });
    }
  };