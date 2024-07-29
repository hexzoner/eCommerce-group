import { Router } from "express";
import { getProducts, createProduct, getProductById, updateProduct, deleteProduct } from "../controllers/products.js";

const productRouter = Router();

productRouter.route("/").get(getProducts).post(createProduct);
productRouter.route("/:id").get(getProductById).put(updateProduct).delete(deleteProduct);

export default productRouter;
