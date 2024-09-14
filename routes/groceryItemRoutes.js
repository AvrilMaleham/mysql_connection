const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.groceryItemController.getGroceryItems(req, res);
});

router.post("/create", (req, res) => {
  Controllers.groceryItemController.createGroceryItems(req, res);
});

router.put("/:id", (req, res) => {
  Controllers.groceryItemController.updateGroceryItems(req, res);
});

router.delete("/:id", (req, res) => {
  Controllers.groceryItemController.deleteGroceryItems(req, res);
});

module.exports = router;
