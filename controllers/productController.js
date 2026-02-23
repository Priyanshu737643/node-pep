import express from "express";
import products from "../models/productModel.js";
products;

const getProduct = (req, res) => {
  // res.send("Get request of Product Router");
  res.send({ products });
};

const postProduct = (req, res) => {
  res.send("This is post request of product router");
};

export { getProduct, postProduct };
