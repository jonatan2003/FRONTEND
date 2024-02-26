import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Cliente = db.define('Cliente', {
  idcliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
  dni: {
    type: DataTypes.CHAR(8),
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Cliente',
  tableName: 'cliente',
});

export default Cliente;
