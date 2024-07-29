import { Product } from "../db/associations.js";

export const getProducts = async (req, res) => {
  res.json("get products");
};
export const createProduct = async (req, res) => {
  res.json("create product");
};
export const getProductById = async (req, res) => {
  res.json("get product by id");
};
export const updateProduct = async (req, res) => {
  res.json("update product");
};
export const deleteProduct = async (req, res) => {
  res.json("delete product");
};
