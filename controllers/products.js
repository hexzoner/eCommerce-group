import { Product, Category } from "../db/associations.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

function formatedProduct(product) {
  return {
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    categoryId: product.categoryId,
  };
}

export const getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

export const createProduct = async (req, res) => {
  const {
    body: { name, description, price },
  } = req;
  const product = await Product.create(req.body);
  res.json(product);
};

export const getProductById = async (req, res) => {
  const {
    params: { id },
  } = req;
  const product = await Product.findByPk(id);
  res.json(product);
};
export const updateProduct = async (req, res) => {
  const {
    body: { name, description, price },
    params: { id },
  } = req;
  const product = await Product.findByPk(id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  await product.update(req.body);
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const {
    params: { id },
  } = req;
  const product = await Product.findByPk(id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  await product.destroy();
  res.json({ message: `Product with id: ${id} was deleted` });
};
