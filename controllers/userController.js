import express from "express";
import users from "../models/userModel.js";
users;

const getUser = (req, res) => {
  // res.send("Get request of User Router");
  res.send({ users });
};

const postUser = (req, res) => {
  res.send("This is post request of user router");
};

export { getUser, postUser };
