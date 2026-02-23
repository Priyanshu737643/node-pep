import express from "express";
const app = express();
app.listen(8080, () => console.log("Server running"));

//? http://localhost:8080/img.jpg
// app.use(express.static("images"));

//? http://localhost:8080/images/img.jpg
// app.use("/images", express.static("images"));

//? http://localhost:8080/public/img/img.jpg
app.use("/public", express.static("public"));
