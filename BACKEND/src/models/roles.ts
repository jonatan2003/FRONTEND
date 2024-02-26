import { DataTypes } from 'sequelize';
import db from '../db/connection';


const Roles = db.define('Roles', {

 nombre: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
 
 
}, {
  createdAt: false,
  updatedAt: false,
  tableName: 'roles',

});



export default Roles;
