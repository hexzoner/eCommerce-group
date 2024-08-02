products task to be done:

GET /products: Retrieve a list of products, optionally filtered by category ID

// Response
[
{
"id": 1,
"name": "Product 1",
"description": "Description of product 1",
"price": 19.99,
"categoryId": 1
},
{
"id": 2,
"name": "Product 2",
"description": "Description of product 2",
"price": 29.99,
"categoryId": 2
}
]
// Should also be possible send a request like GET /products?categoryId=1 to only get products of a given category

POST /products: Create a new product - done

// Request
{
"name": "Product 1",
"description": "Description of product 1",
"price": 19.99,
"categoryId": 1
}

// Response
{
"id": 1,
"name": "Product 1",
"description": "Description of product 1",
"price": 19.99,
"categoryId": 1
}

GET /products/{id}: Retrieve a specific product by ID - done

// Response
{
"id": 1,
"name": "Product 1",
"description": "Description of product 1",
"price": 19.99,
"categoryId": 1
}

PUT /products/{id}: Update a specific product by ID - done

// Request
{
"name": "Updated Product 1",
"description": "Updated description of product 1",
"price": 21.99,
"categoryId": 1
}

// Response
{
"id": 1,
"name": "Updated Product 1",
"description": "Updated description of product 1",
"price": 21.99,
"categoryId": 1
}

DELETE /products/{id}: Delete a specific product by ID - done

// Response
{
"message": "Product deleted successfully"
}

joi validation
