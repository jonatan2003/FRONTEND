import { DataTypes } from 'sequelize';
import db from '../../db/connection';
import Roles from './roles'; // Importa el modelo de Clientes
import Empleados from '../empleados';


const Usuarios = db.define('Usuarios', {
  idempleado: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  usuario: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  idrol: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
 
}, {
  createdAt: false,
  updatedAt: false,

});

Usuarios.belongsTo(Roles, { foreignKey: 'idrol', as: 'Rol' }); // Relación co roles

Usuarios.belongsTo(Empleados, { foreignKey: 'idempleado', as: 'Empleado' });// Relación con empleados

export default Usuarios;
