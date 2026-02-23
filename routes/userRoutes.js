import express from "express";
import getUser from "../controllers/userController.js";
const userRouter = express.Router();

// userRouter
userRouter.get("/", getUser);

userRouter.post("/", (req, res) => {
  res.send("This is post request of user router");
});

export default userRouter;
