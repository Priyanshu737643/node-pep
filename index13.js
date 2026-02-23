import express from "express";
import bcrypt from "bcrypt";
const app = express();
app.listen(8080, () => console.log("server running"));

app.use(express.json());

const users = [];

// signup
app.post("/signup", async (req, res) => {
  const body = req.body;
  const hashPassword = await bcrypt.hash(body.password, 10);
  body.password = hashPassword;
  users.push(body);
  res.json(users);
});

//* Login Success, if Password is wrong also
// login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const found = users.find((user) => user.email === email);
  if (found) {
    const chkPassword = bcrypt.compare(password, found.password);
    if (chkPassword) {
      res.status(200).json({ message: "Login Success" });
    } else {
      res.status(401).json({ message: "Invalid Password" });
    }
  } else {
    res.status(401).json({ message: "User Not Found" });
  }
});

// users
app.get("/users", (req, res) => {
  res.json(users);
});
