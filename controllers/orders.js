import { Order, Product } from "../db/associations.js";
import OrderProduct from "../models/orderProduct.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const getOrders = async (req, res) => {
  //include: Product is used to include the products in the order
  const orders = await Order.findAll({ include: Product });
  const result = orders.map((order) => {
    return {
      id: order.id,
      userId: order.userId,
      products: order.products.map((product) => {
        return {
          productId: product.orderProduct.productId,
          quantity: product.orderProduct.quantity,
          name: product.name,
          price: product.price,
        };
      }),
      total: order.total,
    };
  });

  res.json(result);
};

export const createOrder = async (req, res) => {
  const products = req.body.products;
  const order = await Order.create(req.body);
  const orderProducts = products.map((product) => {
    return {
      orderId: order.id,
      productId: product.productId,
      quantity: product.quantity,
    };
  });
  // BulkCreate is used to insert multiple records at once into the OrderProduct table
  await OrderProduct.bulkCreate(orderProducts);

  res.status(201).json({
    id: order.id,
    userId: order.userId,
    products: orderProducts.map((product) => {
      return {
        productId: product.productId,
        quantity: product.quantity,
      };
    }),
    total: order.total,
  });
};

export const getOrderById = async (req, res) => {
  const id = req.params.id;
  //include: Product is used to include the products in the order
  const order = await Order.findByPk(id, { include: Product });
  if (!order) throw new ErrorResponse("Order not found", 404);

  // Mapping the order object to a new object
  const response = {
    id: order.id,
    userId: order.userId,
    products: order.products.map((product) => {
      return {
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: product.orderProduct.quantity,
      };
    }),
    total: order.total,
  };
  res.json(response);
};

export const updateOrder = async (req, res) => {
  const id = req.params.id;
  const products = req.body.products;
  const order = await Order.findByPk(id);
  if (!order) throw new ErrorResponse("Order not found", 404);
  order.update(req.body);

  // Remove existing products in the order before adding new ones
  await OrderProduct.destroy({ where: { orderId: id } });

  // Create new order products
  const orderProducts = products.map((product) => {
    return {
      orderId: order.id,
      productId: product.productId,
      quantity: product.quantity,
    };
  });

  // BulkCreate is used to insert multiple records at once into the OrderProduct table
  await OrderProduct.bulkCreate(orderProducts);

  res.json({ order, products });
};

export const deleteOrder = async (req, res) => {
  const id = req.params.id;
  const order = await Order.findByPk(id);
  if (!order) throw new ErrorResponse("Order not found", 404);
  await order.destroy();
  res.json("Order " + id + " deleted successfully");
};
