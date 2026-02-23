import express from "express";

const getUser = (req, res) => {
  res.send("Get request of User Router");
};

const postUser = (req, res) => {
  res.send("This is post request of user router");
};

export { getUser, postUser };
