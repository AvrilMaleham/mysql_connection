"use strict";
const Models = require("../models");

const getGroceryItems = (res) => {
  Models.GroceryItem.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createGroceryItems = (data, res) => {
  Models.GroceryItem.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};
module.exports = {
  getGroceryItems,
  createGroceryItems,
};
