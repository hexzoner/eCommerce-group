import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Order = sequelize.define("order", {
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
    unique: false,
    validate: {
      isFloat: { msg: "Total must be a float number" },
    },
  },
  products: {
    type: DataTypes.ARRAY(DataTypes.JSON),
    allowNull: false,
    unique: false,
    validate: {
      isArray: { msg: "products must be an array" },
    },
  },
});

export default Order;
