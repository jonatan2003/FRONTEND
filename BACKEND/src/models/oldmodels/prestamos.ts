import { DataTypes, Model } from 'sequelize';
import db from '../../db/connection';
import Clientes from '../cliente'; // Importa el modelo de Clientes
import Empleados from '../empleados'; // Importa el modelo de Empleados
import Productos from './productos'; // Importa el modelo de Productos

class Prestamos extends Model {}
Prestamos.init({
  idcliente: {
    type: DataTypes.INTEGER,
    allowNull: true // Ajustar según la lógica de tu aplicación
  },
  idproducto: {
    type: DataTypes.INTEGER,
    allowNull: true // Ajustar según la lógica de tu aplicación
  },
  idempleado: {
    type: DataTypes.INTEGER,
    allowNull: true // Ajustar según la lógica de tu aplicación
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  fecha_empeno: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fecha_limite: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  sequelize: db,
  modelName: 'Prestamos',
  timestamps: false
});

Prestamos.belongsTo(Clientes, { foreignKey: 'idcliente', as: 'Cliente' }); // Relación con Clientes
Prestamos.belongsTo(Empleados, { foreignKey: 'idempleado', as: 'Empleado' }); // Relación con Empleados
Prestamos.belongsTo(Productos, { foreignKey: 'idproducto', as: 'Producto' }); // Relación con Productos


export default Prestamos;
