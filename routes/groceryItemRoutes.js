const express = require("express")
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
    Controllers.groceryItemController.getGroceryItems(res)
})

router.post("/create", (req, res) => {
    Controllers.groceryItemController.getGroceryItems(req.body, res)
})

module.exports = router;