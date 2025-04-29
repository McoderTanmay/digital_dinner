import pkg from 'sequelize';
import { sequelize } from '../../config/db.postgres.js';

const { DataTypes } = pkg;

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  phoneNumber: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
});

export default User;