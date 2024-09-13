"use strict";

const GroceryItem = require("./groceryItem");

async function init() {
  await GroceryItem.sync();
}

init();

module.exports = {
  GroceryItem,
};
