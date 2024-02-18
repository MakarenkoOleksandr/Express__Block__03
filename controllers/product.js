const Product = require("../models/product");

class ProductController {
  async add(req, res) {
    const { category, product } = req.body;

    try {
      const existingProduct = await Product.findOne({
        name: product.name,
        category: category,
      });

      if (existingProduct) {
        res.send({ ok: true, data: `Product ${product.name} already exists` });
      } else {
        await Product.create({ ...product, category });
        res.send({
          ok: true,
          data: `Product ${product.name} added successfully`,
        });
      }
    } catch (error) {
      res.status(500).send({ ok: false, error });
    }
  }

  async delete(req, res) {
    const { product } = req.body;

    try {
      const deletedProduct = await Product.findOneAndDelete({
        name: product.name,
      });

      if (deletedProduct) {
        res.send({
          ok: true,
          data: `Product ${product.name} deleted successfully`,
        });
      } else {
        res.send({ ok: true, data: `Product ${product.name} doesn't exist` });
      }
    } catch (error) {
      res.status(500).send({ ok: false, error });
    }
  }

  async update(req, res) {
    const { old_product, new_product } = req.body;

    try {
      const updatedProduct = await Product.findOneAndUpdate(
        { name: old_product.name },
        { ...new_product },
        { new: true }
      );

      if (updatedProduct) {
        res.send({
          ok: true,
          data: `Product ${new_product.name} updated successfully`,
        });
      } else {
        res.send({
          ok: true,
          data: `Product ${old_product.name} doesn't exist`,
        });
      }
    } catch (error) {
      res.status(500).send({ ok: false, error });
    }
  }

  async getAllProducts(req, res) {
    try {
      const allProducts = await Product.find();
      res.send({ ok: true, data: allProducts });
    } catch (error) {
      res.status(500).send({ ok: false, error });
    }
  }

  async getProduct(req, res) {
    const { product } = req.params;

    try {
      const foundProduct = await Product.findOne({ name: product });

      if (foundProduct) {
        res.send({ ok: true, data: foundProduct });
      } else {
        res.send({ ok: true, data: `Product ${product} doesn't exist` });
      }
    } catch (error) {
      res.status(500).send({ ok: false, error });
    }
  }
}

module.exports = new ProductController();
