import { Order, Product } from "../db/associations.js";
import OrderProduct from "../models/orderProduct.js";

export const getOrders = async (req, res) => {
  const orders = await Order.findAll({ include: Product });
  res.json(orders);
};

export const createOrder = async (req, res) => {
  const total = req.body.total;
  const products = req.body.products;

  if (!total) res.status(400).json("Total and products are required");
  if (!products || products.length === 0) res.status(400).json("Products are required to create an order");
  const order = await Order.create(req.body);

  const orderProducts = products.map((product) => {
    return {
      orderId: order.id,
      productId: product.productId,
      quantity: product.quantity,
    };
  });

  await OrderProduct.bulkCreate(orderProducts);

  res.status(201).json({ order, products });
};

export const getOrderById = async (req, res) => {
  const id = req.params.id;
  const order = await Order.findByPk(id);
  if (!order) res.status(404).json("Order not found");
  res.json(order);
};

export const updateOrder = async (req, res) => {
  const id = req.params.id;
  const total = req.body.total;
  if (!total) res.status(400).json("Total is required");

  const order = await Order.findByPk(id);
  if (!order) res.status(404).json("Order not found");

  order.update(req.body);
};

export const deleteOrder = async (req, res) => {
  const id = req.params.id;

  const order = await Order.findByPk(id);
  if (!order) res.status(404).json("Order not found");

  await order.destroy();
  res.json("Order " + id + " deleted");
};
