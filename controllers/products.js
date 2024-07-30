import { Product, Category } from "../db/associations.js";

export const getProducts = async (req, res) => {
  const products = await Product.findAll({ include: Category });
  res.json(products);
};

export const createProduct = async (req, res) => {
  const {
    body: { name, description, price },
  } = req;

  if (!name || !description || !price) res.status(400).json({ error: "Name, description and price are required" });
  const product = await Product.create(req.body);
  res.json(product);
};

export const getProductById = async (req, res) => {
  const id = req.params.id;

  const product = await Product.findByPk(id, { include: Category });
  if (!product) res.status(404).json({ error: "Product not found." });

  res.json(product);
};

export const updateProduct = async (req, res) => {
  const {
    body: { description, name, price },
    params: { id },
  } = req;
  if (!description || !name || !price) return res.status(400).json({ error: "Description, name and price are required" });
  const product = await Product.findByPk(id);
  if (!product) return res.status(404).json({ error: "product not found" });
  await product.update(req.body);
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await Product.findByPk(id);
  if (!product) res.status(404).json({ error: "Product not found" });
  await product.destroy();
  res.json("Product " + id + " was deleted");
};
