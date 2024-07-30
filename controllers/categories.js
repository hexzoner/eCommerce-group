import { Category } from "../db/associations.js";

export const getCategories = async (req, res) => {
  const category = await Category.findAll();
  res.json(category);
};

export const createCategory = async (req, res) => {
  const {
    body: { name },
  } = req;

  if (!name) return res.status(400).json({ error: "Name is required" });
  const category = await Category.create(req.body);
  res.json(category);
};

export const getCategoryById = async (req, res) => {
  const {
    params: { id },
  } = req;
  const category = await Category.findByPk(id);
  if (!category) return res.status(404).json({ error: "Category not found" });
  res.json(category);
};

export const updateCategory = async (req, res) => {
  const {
    body: { name },
    params: { id },
  } = req;
  if (!name) return res.status(400).json({ error: "Name is required" });
  const category = await Category.findByPk(id);
  if (!category) return res.status(404).json({ error: "Category not found" });
  await category.update(req.body);
  res.json(category);
};

export const deleteCategory = async (req, res) => {
  const {
    params: { id },
  } = req;
  const category = await Category.findByPk(id);
  if (!category) return res.status(404).json({ error: "Category not found" });
  await category.destroy();
  res.json({ message: "Category " + id + " deleted" });
};
