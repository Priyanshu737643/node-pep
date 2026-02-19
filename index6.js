//! Query String

import express from "express";
const app = express();
app.listen(8080);

//? http://localhost:8080/?name=john&age=21
app.get("/", (req, res) => {
  res.send("Hello " + req.query.name + " " + req.query.age);
});
