import express from "express";
import { getUser, postUser } from "../controllers/userController.js";
const userRouter = express.Router();

// userRouter
userRouter.get("/", getUser);

userRouter.post("/", postUser);

export default userRouter;
