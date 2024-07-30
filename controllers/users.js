import { User } from "../db/associations.js";

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};

export const createUser = async (req, res) => {
  const {
    body: { email, name, password },
  } = req;
  if (!email || !name || !password) return res.status(400).json({ error: "Email, name and password are required" });
  const user = await User.create(req.body);
  res.json(user);
};

export const getUserById = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
};

export const updateUser = async (req, res) => {
  const {
    body: { email, name, password },
    params: { id },
  } = req;
  if (!email || !name || !password) return res.status(400).json({ error: "Email, name and password are required" });
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ error: "User not found" });
  await user.update(req.body);
  res.json(user);
};

export const deleteUser = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ error: "User not found" });
  await user.destroy();
  res.json({ message: "User " + id + " deleted" });
};
