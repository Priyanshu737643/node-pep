import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server started");
});

app.get("/:x/:y", (req, res) => {
  let num1 = parseInt(req.params.x);
  let num2 = parseInt(req.params.y);
  let result = num1 + num2;
  res.send(result);
});

app.get("/x/:x/y/:y/z/:z", (req, res) => {
  let num1 = parseInt(req.params.x);
  let num2 = parseInt(req.params.y);
  let num3 = parseInt(req.params.z);
  let result = num1 + num2 + num3;
  res.send(result);
});

app.get("/:a/:b/:c/:d", (req, res) => {
  res.send("Hello Student");
});