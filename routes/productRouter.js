import express from "express";
const productRouter = express.Router();

// productRouter
productRouter.get("/", (req, res) => {
  res.send("Get request of Product Router");
});

productRouter.post("/", (req, res) => {
  res.send("This is post request of product router");
});

export default productRouter;
