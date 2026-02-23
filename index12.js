//! Router

import express from "express";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
const app = express();
app.listen(8080, () => console.log("Server running"));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
