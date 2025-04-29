import pkg from 'sequelize';
import { sequelize } from '../../config/db.postgres.js';

const { DataTypes } = pkg;

const Order = sequelize.define("Order", {
  totalAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Placed", // e.g., "Placed", "Confirmed", "Ready", etc.
  },
}, {
  timestamps: true,
});

export default Order;
