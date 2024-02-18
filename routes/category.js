const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/category");

router.post("/add", categoryController.add);
router.post("/delete", categoryController.delete);
router.post("/update", categoryController.update);
router.get("/categories", categoryController.getAllCategories);
router.get("/:category", categoryController.getCategory);

module.exports = router;
