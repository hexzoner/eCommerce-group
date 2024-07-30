import { Router } from "express";
import { getUsers, createUser, getUserById, updateUser, deleteUser } from "../controllers/users.js";
import { asyncHandler } from "../middleware/errorHandler.js";

const userRouter = Router();

userRouter.route("/").get(asyncHandler(getUsers)).post(asyncHandler(createUser));
userRouter.route("/:id").get(asyncHandler(getUserById)).put(asyncHandler(updateUser)).delete(asyncHandler(deleteUser));

export default userRouter;
