import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Venta = db.define('Venta', {
  idventa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idarticulo: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Articulo',
      key: 'idarticulo',
    },
  },
  fechaVenta: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comprador: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Venta',
  tableName: 'venta',
});

export default Venta;
