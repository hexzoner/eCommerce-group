import { Product } from "../db/associations.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

export const getProducts = async (req, res) => {
  const categoryId = req.query.categoryId; // Get the categoryId from the query parameter
  if (categoryId) {
    // Use Sequelize to filter products by categoryId
    const products = await Product.findAll({
      where: {
        categoryId: categoryId,
      },
    });
    if (products.length === 0) {
      // If no products found with the given categoryId, send back a message
      res.json({ message: `categoryId: ${categoryId} doesn't exists` });
    } else {
      const results = products.map((prd) => {
        return {
          id: prd.id,
          name: prd.name,
          description: prd.description,
          price: prd.price,
          categoryId: prd.categoryId,
        };
      });
      res.json(results);
    }
  } else {
    // If no categoryId is provided, return all products
    const products = await Product.findAll();
    const results = products.map((prd) => {
      return {
        id: prd.id,
        name: prd.name,
        description: prd.description,
        price: prd.price,
        categoryId: prd.categoryId,
      };
    });
    res.json(results);
  }
};

export const createProduct = async (req, res) => {
  const {
    body: { name, description, price },
  } = req;
  const product = await Product.create(req.body);
  res.json({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    categoryId: product.categoryId,
  });
};

export const getProductById = async (req, res) => {
  const {
    params: { id },
  } = req;
  const product = await Product.findByPk(id);
  if (product !== null) {
    res.json(product);
  } else {
    res.json({ message: `product with id: ${id} doesn't exist` });
  }
};
export const updateProduct = async (req, res) => {
  const {
    body: { name, description, price },
    params: { id },
  } = req;
  const product = await Product.findByPk(id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  await product.update(req.body);
  res.json({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    categoryId: product.categoryId,
  });
};

export const deleteProduct = async (req, res) => {
  const {
    params: { id },
  } = req;
  const product = await Product.findByPk(id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  await product.destroy();
  res.json({ message: "Product deleted successfully" });
};
