import { Router } from "express";
import { getOrders, createOrder, getOrderById, updateOrder, deleteOrder } from "../controllers/orders.js";

const orderRouter = Router();

orderRouter.route("/").get(getOrders).post(createOrder);
orderRouter.route("/:id").get(getOrderById).put(updateOrder).delete(deleteOrder);

export default orderRouter;
