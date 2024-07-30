import { Router } from "express";
import { getCategories, createCategory, getCategoryById, updateCategory, deleteCategory } from "../controllers/categories.js";
import { asyncHandler } from "../middleware/errorHandler.js";

const categoryRouter = Router();

categoryRouter.route("/").get(asyncHandler(getCategories)).post(asyncHandler(createCategory));
categoryRouter.route("/:id").get(asyncHandler(getCategoryById)).put(asyncHandler(updateCategory)).delete(asyncHandler(deleteCategory));

export default categoryRouter;
