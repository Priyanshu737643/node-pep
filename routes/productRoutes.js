import express from "express";
import getProduct from "../controllers/productController.js";
const productRouter = express.Router();

// productRouter
productRouter.get("/", getProduct);

productRouter.post("/", (req, res) => {
  res.send("This is post request of product router");
});

export default productRouter;
