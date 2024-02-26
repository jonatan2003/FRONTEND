import { DataTypes } from 'sequelize';
import db from '../db/connection';

const DetallePrestamo = db.define('DetallePrestamo', {
  iddetaprestamo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idprestamo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idarticulo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  saldo_prestamo: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  saldo_pagar: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  saldo_pagado: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'DetallePrestamo',
  tableName: 'detaprestamo',
});

export default DetallePrestamo;
