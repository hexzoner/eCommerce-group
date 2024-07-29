import { DataTypes } from "sequelize";
import sequelize from "../db/index.js";

const Order = sequelize.define("order", {});

export default Order;
