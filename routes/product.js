const express = require("express");
const router = express.Router();
const productController = require("../controllers/product");

router.post("/add", productController.add);
router.post("/delete", productController.delete);
router.post("/update", productController.update);
router.get("/", productController.getAllProducts);
router.get("/:product", productController.getProduct);

module.exports = router;
