import { Router } from 'express';
import {
  
  getPrestamos,
  getPrestamosByClientId
 
} from '../../controllers/oldscontrollers/prestamos2';

const Prestamos2Router = Router();

Prestamos2Router.get('/', getPrestamos); // Obtener la lista de préstamos
Prestamos2Router.get('/:idCliente', getPrestamosByClientId); // Obtener un préstamo por ID

export default Prestamos2Router;
