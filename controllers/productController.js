import express from "express";

const getProduct = (req, res) => {
  res.send("Get request of Product Router");
};

const postProduct = (req, res) => {
  res.send("This is post request of product router");
};

export { getProduct, postProduct };
