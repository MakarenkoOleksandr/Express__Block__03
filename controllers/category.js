const Category = require("../models/category");
const Product = require("../models/product");

class CategoryController {
  async add(req, res) {
    const { category } = req.body;

    try {
      const existingCategory = await Category.findOne({ category });

      if (existingCategory) {
        res.send({ ok: true, data: `Category ${category} already exists` });
      } else {
        await Category.create({ category });
        res.send({ ok: true, data: `Category ${category} added successfully` });
      }
    } catch (error) {
      res.status(500).send({ ok: false, error });
    }
  }

  async delete(req, res) {
    const { category } = req.body;

    try {
      const deletedCategory = await Category.findOneAndDelete({ category });

      if (deletedCategory) {
        res.send({
          ok: true,
          data: `Category ${category} deleted successfully`,
        });
      } else {
        res.send({ ok: true, data: `Category ${category} doesn't exist` });
      }
    } catch (error) {
      res.status(500).send({ ok: false, error });
    }
  }

  async update(req, res) {
    const { old_category, new_category } = req.body;

    try {
      const updatedCategory = await Category.findOneAndUpdate(
        { category: old_category },
        { category: new_category },
        { new: true }
      );

      if (updatedCategory) {
        res.send({
          ok: true,
          data: `Category ${new_category} updated successfully`,
        });
      } else {
        res.send({ ok: true, data: `Category ${old_category} doesn't exist` });
      }
    } catch (error) {
      res.status(500).send({ ok: false, error });
    }
  }

  async getAllCategories(req, res) {
    try {
      const allCategories = await Category.find();
      res.send({ ok: true, data: allCategories });
    } catch (error) {
      res.status(500).send({ ok: false, error });
    }
  }

  async getCategory(req, res) {
    const { category } = req.params;

    try {
      const foundCategory = await Product.find({ category });

      if (foundCategory.length > 0) {
        res.send({ ok: true, data: foundCategory });
      } else {
        res.send({ ok: true, data: `Category ${category} doesn't exist` });
      }
    } catch (error) {
      res.status(500).send({ ok: false, error });
    }
  }
}

module.exports = new CategoryController();
