//! Router

import express from "express";
const app = express();
app.listen(8080, () => console.log("Server running"));

const Router = express.Router();

//? localhost:8080/api/users/
http: Router.get("/", (req, res) => {
  res.send("Hello World");
});

Router.post("/", (req, res) => {
  res.send("This is post request");
});

app.use("/api/users", Router);
