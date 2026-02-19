import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("server running");
});

app.get("/", (req, res) => {
  const user = {
    name: "John",
    email: "john@gmail.com",
    role: "student",
  };
  res.json(user);
});

