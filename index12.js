//! Router

import express from "express";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRouter.js";
const app = express();
app.listen(8080, () => console.log("Server running"));

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
