"use strict";

const GroceryItem = require("./grocery-item");

async function init() {
  await GroceryItem.sync();
}

init();

module.exports = {
  GroceryItem,
};
