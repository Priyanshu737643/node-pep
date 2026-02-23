import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();
const secretKey = "mysecretkey";

const users = [];

// Signup
router.post("/signup", (req, res) => {
  const body = req.body;

  const hashedPassword = bcrypt.hashSync(body.password, 10);
  body.password = hashedPassword;

  users.push(body);

  res.json({ message: "User registered successfully" });
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ email: user.email, role: user.role }, secretKey, {
    expiresIn: "1h",
  });

  res.json({
    message: "Login successful",
    token,
  });
});

export default router;
