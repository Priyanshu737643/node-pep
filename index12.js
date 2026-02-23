//! Router

import express from "express";
const app = express();
app.listen(8080, () => console.log("Server running"));

const userRouter = express.Router();
const productRouter = express.Router();

//? localhost:8080/api/users/

// userRouter
userRouter.get("/", (req, res) => {
  res.send("Get request of User Router");
});

userRouter.post("/", (req, res) => {
  res.send("This is post request of user router");
});

// productRouter
productRouter.get("/", (req, res) => {
  res.send("Get request of Product Router");
});

productRouter.post("/", (req, res) => {
  res.send("This is post request of product router");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
