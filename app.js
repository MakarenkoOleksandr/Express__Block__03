const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = require("express")();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 4040;

const categoryRoute = require("./routes/category");
const productRoute = require("./routes/product");

const CATEGORY_ROUTE = "/category";
const PRODUCTS_ROUTE = "/product";

(async function connecting() {
  try {
    await mongoose.connect(
      "mongodb+srv://majop11111:DHK8-tjYr.ptCwD@alex.az4k7cp.mongodb.net/"
    );
    console.log("Connected to the DB");
  } catch (error) {
    console.log(
      "ERROR: Seems like your DB is not running, please start it up !!!"
    );
  }
})();

mongoose.set("debug", true);

app.use(CATEGORY_ROUTE, categoryRoute);
app.use(PRODUCTS_ROUTE, productRoute);

app.listen(port, () => {});
