import { User } from "../db/associations.js";

export const getUsers = async (req, res) => {
  const users = await User.findAll();
  const results = users.map((user) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  });

  res.json(results);
};

export const createUser = async (req, res) => {
  const user = await User.create(req.body);

  res.json({ id: user.id, name: user.name, email: user.email });
};

export const getUserById = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json({ id: user.id, name: user.name, email: user.email });
};

export const updateUser = async (req, res) => {
  const {
    params: { id },
  } = req;

  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ error: "User not found" });
  await user.update(req.body);
  res.json({ id: user.id, name: user.name, email: user.email });
};

export const deleteUser = async (req, res) => {
  const {
    params: { id },
  } = req;
  const user = await User.findByPk(id);
  if (!user) return res.status(404).json({ error: "User not found" });
  await user.destroy();
  res.json({ message: "User " + id + " deleted successfully" });
};
