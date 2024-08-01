import { Category } from "../db/associations.js";

export const getCategories = async (req, res) => {
  const categories = await Category.findAll({});
  res.json(categories);
};

export const createCategory = async (req, res) => {
  const {
    body: { name },
  } = req;
  if (!name) return res.status(400).json({ error: "Name is required" });
  const category = await Category.create({
    name,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.json(category);
};

export const getCategoryById = async (req, res) => {
  const {
    params: { id },
  } = req;
  const category = await Category.findByPk(id);
  if (!category) return res.status(404).json({ error: "User not found" });
  res.json(category);
};

export const updateCategory = async (req, res) => {
  const {
    body: { name },
    params: { id },
  } = req;
  if (!name || !id) return res.status(400).json({ error: "Name and Id are required" });
  const category = await Category.findByPk(id);
  if (!category) return res.status(404).json({ error: "Category not found" });
  await category.update({
    name,
    updatedAt: new Date(),
  });
  res.json(category);
};

export const deleteCategory = async (req, res) => {
  const {
    params: { id },
  } = req;
  const category = await Category.findByPk(id);
  if (!category) return res.status(404).json({ error: "Category not found" });

  const products = await category.getProducts();
  if (products.length) return res.status(403).json({ error: "Category not deleted" });

  await category.destroy();
  res.json({ message: "Category " + category.name + " deleted" });
};
