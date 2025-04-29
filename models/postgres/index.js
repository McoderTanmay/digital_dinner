import { sequelize } from "../../config/db.postgres.js";

import User from "./userModel.js";
import Order from "./orderModel.js";
import OrderItem from "./orderItemsModel.js";

User.hasMany(Order, { onDelete: "CASCADE" });
Order.belongsTo(User);

Order.hasMany(OrderItem, { onDelete: "CASCADE" });
OrderItem.belongsTo(Order);

const syncModels = async () => {
    await sequelize.sync({ alter: true });
};

export {
    User,
    Order,
    OrderItem,
    sequelize,
    syncModels,
};