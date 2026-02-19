import express from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server started");
});

app.get("/:n1/:n2", (req, res) => {
  let num1 = parseInt(req.params.n1);
  let num2 = parseInt(req.params.n2);
  let result = num1 + num2;
  res.send(result);
});
