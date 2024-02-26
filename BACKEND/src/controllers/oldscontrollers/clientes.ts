import { Request, Response } from 'express';
import Clientes from '../../models/cliente';

export const createCliente = async (req: Request, res: Response) => {
  const { nombre, apellido, dni, direccion, sexo } = req.body;

  try {
    const nuevoCliente = await Clientes.create({
      nombre,
      apellido,
      dni,
      direccion,
      sexo
    });

    res.status(201).json(nuevoCliente);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al crear el cliente' });
  }
};

export const getClienteById = async (req: Request, res: Response) => {
  const { idCliente } = req.params;

  try {
    const cliente = await Clientes.findByPk(idCliente);

    if (!cliente) {
      res.status(404).json({ msg: 'Cliente no encontrado' });
    } else {
      res.json(cliente);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener el cliente' });
  }
};

export const updateCliente = async (req: Request, res: Response) => {
  const { body } = req;
  const { idCliente } = req.params;

  try {
    const cliente = await Clientes.findByPk(idCliente);

    if (cliente) {
      await cliente.update(body);
      res.json({ msg: 'El cliente fue actualizado con éxito' });
    } else {
      res.status(404).json({ msg: `No existe un cliente con el id ${idCliente}` });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Ocurrió un error al actualizar el cliente' });
  }
};

export const deleteCliente = async (req: Request, res: Response) => {
  const { idCliente } = req.params;

  try {
    const cliente = await Clientes.findByPk(idCliente);

    if (!cliente) {
      res.status(404).json({ msg: 'Cliente no encontrado' });
    } else {
      await cliente.destroy();
      res.json({ msg: 'Cliente eliminado con éxito' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al eliminar el cliente' });
  }
};

export const getClientes = async (req: Request, res: Response) => {
  try {
    const clientes = await Clientes.findAll();
    res.json(clientes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al obtener la lista de clientes' });
  }
};
