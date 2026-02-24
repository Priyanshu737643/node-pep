import mongoose from "mongoose";
import express from "express";
const app = express();
app.listen(8080, console.log("server running"));

const dbConnect = async () => {
  await mongoose.connect("mongodb://localhost:27017/lpu26a");
};

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  role: { type: String },
});

//? it will create "users1" collection with userSchema structure
const userModel = await mongoose.model("users1", userSchema);
await dbConnect();

app.get("/", async (req, res) => {
  const result = await userModel.find();
  res.json(result);
});
