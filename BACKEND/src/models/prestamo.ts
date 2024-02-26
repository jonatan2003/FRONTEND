import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Prestamo = db.define('Prestamo', {
  idprestamo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idcliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idusuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fechaPrestamo: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechaDevolucion: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  interes: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  mora: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00,
  },
}, {
  timestamps: false,
  modelName: 'Prestamo',
  tableName: 'prestamo',
});

export default Prestamo;
