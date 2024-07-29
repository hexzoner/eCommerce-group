import { Router } from "express";
import { getCategories, createCategory, getCategoryById, updateCategory, deleteCategory } from "../controllers/categories.js";

const categoryRouter = Router();

categoryRouter.route("/").get(getCategories).post(createCategory);
categoryRouter.route("/:id").get(getCategoryById).put(updateCategory).delete(deleteCategory);

export default categoryRouter;
