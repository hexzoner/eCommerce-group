import { Router } from "express";
import { getOrders, createOrder, getOrderById, updateOrder, deleteOrder } from "../controllers/orders.js";
import { asyncHandler } from "../middleware/errorHandler.js";

const orderRouter = Router();

orderRouter.route("/").get(asyncHandler(getOrders)).post(asyncHandler(createOrder));
orderRouter.route("/:id").get(asyncHandler(getOrderById)).put(asyncHandler(updateOrder)).delete(asyncHandler(deleteOrder));

export default orderRouter;
