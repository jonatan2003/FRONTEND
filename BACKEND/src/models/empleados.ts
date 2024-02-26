// Empleado.js
import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Empleado = db.define('Empleado', {
  idempleado: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  dni: {
    type: DataTypes.CHAR(8),
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Empleados',
  tableName: 'empleado',
});

export default Empleado;
