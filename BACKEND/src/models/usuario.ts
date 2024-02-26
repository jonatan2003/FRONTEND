import { DataTypes } from 'sequelize';
import db from '../db/connection';
import Empleado from './empleados'; // Asegúrate de importar el modelo correcto

const Usuario = db.define('Usuario', {
  idusuario: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  idempleado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true, // Asegura que un empleado tenga un único usuario
  },
  usuario: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // Asegura que el nombre de usuario sea único
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  permisos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  modelName: 'Usuario',
  tableName: 'usuario',
});

// Establece la relación con Empleado
Usuario.belongsTo(Empleado, { foreignKey: 'idempleado', as: 'Empleado' });

export default Usuario;