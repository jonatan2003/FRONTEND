import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Venta = db.define('Venta', {
  idventa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idprestamo: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  fechaVenta: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  comprador: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Venta',
  tableName: 'venta',
});

export default Venta;
