import pkg from 'sequelize';
import { sequelize } from '../../config/db.postgres.js';

const { DataTypes } = pkg;

const OrderItem = sequelize.define("OrderItem", {
  itemName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  itemPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
}, {
  timestamps: true,
});

export default OrderItem;
