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
    references: {
      model: 'Cliente',
      key: 'idcliente',
    },
  },
  idusuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuario',
      key: 'idusuario',
    },
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
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  mora: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Prestamo',
  tableName: 'prestamo',
});

export default Prestamo;
