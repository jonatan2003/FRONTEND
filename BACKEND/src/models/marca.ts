import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Marca = db.define('Marca', {
  idmarca: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Marca',
  tableName: 'marca',
});

export default Marca;
