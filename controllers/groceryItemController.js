"use strict";
const Models = require("../models");

const getGroceryItems = (req, res) => {
  Models.GroceryItem.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createGroceryItems = (req, res) => {
  Models.GroceryItem.create(req.body)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateGroceryItems = (req, res) => {
  Models.GroceryItem.update(req.body, {
    where: { iditems: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteGroceryItems = (req, res) => {
  Models.GroceryItem.destroy({ where: { iditems: req.params.id } })
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
  updateGroceryItems,
  deleteGroceryItems,
};
