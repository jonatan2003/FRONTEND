import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Pago = db.define('Pago', {
  idpago: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idprestamo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  fecha_Pago: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Pagos',
  tableName: 'pagos',
});

export default Pago;
