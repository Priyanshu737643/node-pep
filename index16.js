import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { authorize, middleware } from "./middlewares/auth.js";
const secretKey = "mysecretkey";

const app = express();
app.listen(8080, () => {
  console.log("server is starting");
});

app.use(express.json());

const users = [];

// signup
app.post("/signup", (req, res) => {
  const body = req.body;
  //? hash password
  const hasPassword = bcrypt.hashSync(body.password, 10);
  body.password = hasPassword;
  //? push hash password
  users.push(body);
  res.json(users);
});

// login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  //? check same email
  const user = users.find((u) => u.email === email);
  //? check same password
  const ckPassword = await bcrypt.compare(password, user.password);
  if (ckPassword)
    res.json({
      message: "login successful",
      //? create token
      token: jwt.sign(user, secretKey, { expiresIn: "1h" }),
    });
  else res.status(401).json({ message: "invalid credentials" });
});

// root
app.get("/", middleware, (req, res) => {
  res.json({ message: "welcome to home page" });
});

// users
app.get("/users", middleware, authorize("admin", "manager"), (req, res) => {
  res.json(users);
});
