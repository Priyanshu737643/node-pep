import express from "express";

const getUser = (req, res) => {
  res.send("Get request of User Router");
};

export default getUser;
