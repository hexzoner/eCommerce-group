import { Router } from "express";
import { getProducts, createProduct, getProductById, updateProduct, deleteProduct } from "../controllers/products.js";
import { asyncHandler } from "../middleware/errorHandler.js";

const productRouter = Router();

productRouter.route("/").get(asyncHandler(getProducts)).post(asyncHandler(createProduct));
productRouter.route("/:id").get(asyncHandler(getProductById)).put(asyncHandler(updateProduct)).delete(asyncHandler(deleteProduct));

export default productRouter;
