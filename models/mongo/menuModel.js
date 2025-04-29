import mongoose from "mongoose";

const MenuItemSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  description: String,
});

exports = mongoose.model("MenuItem", MenuItemSchema);
