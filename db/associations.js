import User from "../models/user.js";
import Order from "../models/order.js";
import Product from "../models/product.js";
import Category from "../models/category.js";

// 1 to Many
// Foreign key userId is created in Order
User.hasMany(Order);

// Many to Many
Product.belongsToMany(Order, { through: "products-orders" });

// 1 to Many
// Foreign categoryId is created in Product
Category.hasMany(Product);

export { User, Order, Product, Category };
