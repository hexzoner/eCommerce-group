import { Order } from "../db/associations.js";

export const getOrders = async (req, res) => {
  res.json("get Orders");
};
export const createOrder = async (req, res) => {
  res.json("create Order");
};
export const getOrderById = async (req, res) => {
  res.json("get Order by id");
};
export const updateOrder = async (req, res) => {
  res.json("update Order");
};
export const deleteOrder = async (req, res) => {
  res.json("delete Order");
};
