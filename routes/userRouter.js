import express from "express";
const userRouter = express.Router();

// userRouter
userRouter.get("/", (req, res) => {
  res.send("Get request of User Router");
});

userRouter.post("/", (req, res) => {
  res.send("This is post request of user router");
});

export default userRouter;
