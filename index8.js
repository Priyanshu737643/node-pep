import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("server running");
});

//? Middleware
// const greet = (req,res,next) => {
//   console.log("Hello World");
//   next();
// }
// app.use(greet);

//? Middleware
app.use(express.json()); //? convert: json => js object

let users = [
  {
    id: 1,
    name: "John",
    email: "john@gmail.com",
    role: "student",
  },
  {
    id: 2,
    name: "Cathy",
    email: "cathy@gmail.com",
    role: "student",
  },
  {
    id: 3,
    name: "Admin",
    email: "admin@gmail.com",
    role: "admin",
  },
];

//! GET
//? http://localhost:8080/
app.get("/", (req, res) => {
  res.json(users);
});

//! POST
//? http://localhost:8080/
app.post("/", (req, res) => {
  // console.log(req.body);
  const user = req.body;
  users.push(user);
  res.json(users);
});

//! DELETE
//? http://localhost:8080/1
app.delete("/:id", (req, res) => {
  users = users.filter((user) => user.id !== Number(req.params.id));
  res.json(users);
});

//! GET
//? http://localhost:8080/1
app.get("/:id", (req, res) => {
  const user = users.find((user) => user.id === Number(req.params.id));
  if (user) {
    res.send(user);
  }
});
