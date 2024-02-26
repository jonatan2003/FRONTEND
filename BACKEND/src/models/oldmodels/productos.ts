import { DataTypes, Model } from 'sequelize';
import db from '../../db/connection';

class Productos extends Model {}
Productos.init({
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_hora: {
    type: DataTypes.DATE
  }
}, {
  sequelize: db,
  modelName: 'Productos',
  timestamps: false
});

export default Productos;
