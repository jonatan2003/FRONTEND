import { Request, Response } from 'express';
import Prestamos from '../../models/oldmodels/prestamos';
import Clientes from '../../models/cliente';
import Empleados from '../../models/empleados';
import Productos from '../../models/oldmodels/productos';


export const createPrestamo = async (req: Request, res: Response) => {
  // Obtener los datos del cuerpo de la solicitud
  const { idcliente, idproducto, idempleado, monto, fecha_empeno, fecha_limite } = req.body;

  try {
    // Crear un nuevo préstamo
    const nuevoPrestamo = await Prestamos.create({
      idcliente,
      idproducto,
      idempleado,
      monto,
      fecha_empeno,
      fecha_limite
    });

    res.status(201).json(nuevoPrestamo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al crear el préstamo' });
  }
};

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
  
  export const updatePrestamo = async (req: Request, res: Response) => {
    const { body } = req;
    const { idPrestamo } = req.params;
  
    try {
      const prestamo = await Prestamos.findByPk(idPrestamo);
  
      if (prestamo) {
        await prestamo.update(body);
        res.json({ msg: 'El préstamo fue actualizado con éxito' });
      } else {
        res.status(404).json({ msg: `No existe un préstamo con el id ${idPrestamo}` });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Ocurrió un error al actualizar el préstamo' });
    }
  };
  
  export const deletePrestamo = async (req: Request, res: Response) => {
    const { idPrestamo } = req.params;
  
    try {
      const prestamo = await Prestamos.findByPk(idPrestamo);
  
      if (!prestamo) {
        res.status(404).json({ msg: 'Préstamo no encontrado' });
      } else {
        await prestamo.destroy();
        res.json({ msg: 'Préstamo eliminado con éxito' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ msg: 'Error al eliminar el préstamo' });
    }
  };
  