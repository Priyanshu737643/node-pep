import express from "express";
import jwt from "jsonwebtoken";
const app = express();
app.listen(8080, () => console.log("server running"));
const SECRET = "lpu";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzNDA1NSwiZXhwIjoxNzcxODM3NjU1fQ.7XkiYh40-yuBOQWw5qPSFw8Kws44TKLq_aaML6qYAsE";

//? Extracting token
const user = jwt.verify(token, SECRET);
console.log(user);
