import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Detaprestamo = db.define('Detaprestamo', {
  idprestamo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
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
  modelName: 'Detaprestamo',
  tableName: 'detaprestamo',
});

export default Detaprestamo;
