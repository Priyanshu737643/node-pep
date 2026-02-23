import express from "express";
import authRoutes from "./routes/authRoutes.js";
import { middleware, authorize } from "./middlewares/auth.js";

const app = express();

app.use(express.json());

// Use auth routes
app.use("/auth", authRoutes);

// Protected route
app.get("/", middleware, (req, res) => {
  res.json({ message: "Welcome to home page" });
});

app.get("/users", middleware, authorize("admin", "manager"), (req, res) => {
  res.json({ message: "Users list" });
});

app.listen(8080, () => {
  console.log("Server started");
});
