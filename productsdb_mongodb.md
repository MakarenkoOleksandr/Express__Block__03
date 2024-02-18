## EXERCISE / Products MongoDB

- Refactor the previous exercise, except the DB will not be an array but an actual database (use mongo atlas or local mongo).

> Mongo: mongodb+srv://<username>:<password>@<database_name>.iclbz.gcp.mongodb.net/<collection_name>?retryWrites=true&w=majority
> Local Mongo: mongodb://localhost:27017/

> Note: for local Mongo you need to install mongo in your computer
> `https://www.mongodb.com/try/download/community`

- In this exercise we are going to divide the categories and products into two different collections (the models are already pre-made for you)

- You need to create two more folders: 'routes' and 'controllers'

- To pass the test make sure you name the controller files inside 'controllers' folder exactly this:

  - 'product.js'
  - 'category.js'

- Follow example on the curriculum (Block 3) for implementing MVC pattern.

# API:

| Method | URL                  | Action                                      |
| ------ | -------------------- | ------------------------------------------- |
| POST   | /category/add        | Add a new category to DB                    |
| POST   | /category/delete     | Remove category from DB                     |
| POST   | /category/update     | Update category                             |
| GET    | /category/categories | Get all categories                          |
| GET    | /product/            | display all categories with all products    |
| GET    | /category/:category  | Get all products from one category          |
| POST   | /product/add         | Add new product to DB                       |
| POST   | /product/delete      | Delete product from DB                      |
| POST   | /product/update      | Update name                                 |
| GET    | /product/:product    | Get one product by passing name in the body |

> You can import file `Express Products MongoDB B3E1.postman_collection.json` into Postman (Postman -> File -> Import) to get the collection of requests for this exercise we have created if you do not want to type them manually.

# Example of usage:

> POST http://localhost:4040/category/add
> Request's body object: { category: 'hats' }
> Response: { ok: true, data: 'Category hats added successfully' }

> POST http://localhost:4040/category/add
> Request's body object: { category: 'hats' }
> Response: { ok: true, data: 'Category hats already exists' }

> POST http://localhost:4040/category/add
> Request's body object: { category: "jackets" }
> Response: { ok: true, data: 'Category jackets added successfully' }

> GET http://localhost:4040/category/categories
> Response: { ok: true, data: [ { category: hats }, { category: jackets } ] }

> POST http://localhost:4040/product/add
> Request's body object: { category: "hats", product: { name: "cowboy hat", price: "10", color: "black", description: "best hat in town" } }
> Response: { ok: true, data: 'product cowboy hat added successfully' }

> POST http://localhost:4040/product/add
> Request's body object: { category: "hats", product: { name: "cowboy hat", price: "10", color: "black", description: "best hat in town" } }
> Response: { ok: true, data: 'product cowboy hat already exists' }

> GET http://localhost:4040/product/cowboy%20hat
> Response: { ok: true, data: { name: "cowboy hat", price: 10, color: "black", description: "best hat in town", category: "hats" } }

> GET http://localhost:4040/product/banana
> Response: { ok: true, data: "Product banana doesn't exist" }

> GET http://localhost:4040/category/hats
> Response: { ok: true, data: [ { name: 'cowboy hat', price: '10', color: 'black', description: 'best hat in town', category: "hats" } ] }

> GET http://localhost:4040/category/banana
> Response: { ok: true, data: "Category banana doesn't exist" }

> GET http://localhost:4040/product/ ( should return all the products in all databases )
> Response: { ok: true, data: [ { name: 'cowboy hat', price: 10, color: 'black', description: 'best hat in town', category: 'hats' } ] }

> POST http://localhost:4040/product/update
> Request's body object: old_product: { name: 'cowboy hat' }, new_product: { name: 'astronaut hat' }
> Response: { ok: true, data: 'product astronaut hat updated successfully' }

> POST http://localhost:4040/product/update
> Request's body object: old_product: { name: 'cowboy hat' }, new_product: { name: 'astronaut hat' }
> Response: { ok: true, data: "product cowboy hat doesn't exist" }

> POST http://localhost:4040/product/delete
> Request's body object: product: { name: 'astronaut hat' }
> Response: { ok: true, data: 'product astronaut hat deleted successfully' }

> POST http://localhost:4040/product/delete
> Request's body object: product: { name: 'astronaut hat' }
> Response: { ok: true, data: "product astronaut doesn't exist" }

> POST http://localhost:4040/category/update
> Request's body object: { new_category: "vests", old_category: "hats" }
> Response: { ok: true, data: 'Category vests updated successfully' }

> POST http://localhost:4040/category/update
> Request's body object: { new_category: "vests", old_category: "hats" }
> Response: { ok: true, data: "Category hats doesn't exist" }

> POST http://localhost:4040/category/delete
> Request's body object: { category: "vests" }
> Response: { ok: true, data: 'Category vests deleted successfully' }

> POST http://localhost:4040/category/delete
> Request's body object: { category: "jackets" }
> Response: { ok: true, data: 'Category jackets deleted successfully' }

> POST http://localhost:4040/category/delete
> Request's body object: { category: "hats" }
> Response: { ok: true, data: "Category hats doesn't exist" }

**_Your solution goes to the current folder_**
