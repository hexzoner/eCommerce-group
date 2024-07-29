import { Category } from "../db/associations.js";

export const getCategories = async (req, res) => {
  res.json("get Categories");
};
export const createCategory = async (req, res) => {
  res.json("create Category");
};
export const getCategoryById = async (req, res) => {
  res.json("get Category by id");
};
export const updateCategory = async (req, res) => {
  res.json("update Category");
};
export const deleteCategory = async (req, res) => {
  res.json("delete Category");
};
