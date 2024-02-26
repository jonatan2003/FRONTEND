import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Detaventa = db.define('Detaventa', {
  idventa: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'Venta',
      key: 'idventa',
    },
  },
  idarticulo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
      model: 'Articulo',
      key: 'idarticulo',
    },
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Detaventa',
  tableName: 'detaventa',
});

export default Detaventa;
