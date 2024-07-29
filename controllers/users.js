import { User } from "../db/associations.js";

export const getUsers = async (req, res) => {
  res.json("get users");
};
export const createUser = async (req, res) => {
  res.json("create user");
};
export const getUserById = async (req, res) => {
  res.json("get user by id");
};
export const updateUser = async (req, res) => {
  res.json("update user");
};
export const deleteUser = async (req, res) => {
  res.json("delete user");
};
