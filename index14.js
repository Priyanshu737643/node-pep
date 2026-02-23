import express from "express";
import jwt from "jsonwebtoken";
const app = express();
const SECRET = "lpu";
app.listen(8080, () => console.log("server running"));

const user = {
  name: "John",
  email: "john@gmail.com",
  role: "student",
};

// token = detail of user in encrypted form
// SECRET = can be accessed by that token only
//? Creating token
const token = jwt.sign(user, SECRET, { expiresIn: "1h" });
console.log(token);


