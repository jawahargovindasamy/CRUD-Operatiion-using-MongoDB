# MONGODB CONNECTION

This is a simple Node.js application that connects to a MongoDB database and provides an API to create, read, update, and delete products.

## Installation

1. Clone the repository
2. Install the dependencies by running `npm install`
3. Create a `.env` file with the following variables:
	* `PORT`: The port number on which the application should run (default is 5000)
	* `MONGODB_URL`: The URL of the MongoDB database
4. Run the application by running `npm start`

## API Documentation

The API documentation can be found [here](https://documenter.getpostman.com/view/37421127/2sB2qf8yRp).

## Endpoints

### GET /products

Returns a list of all products in the database.

### GET /products/:id

Returns a single product by ID.

### POST /products

Creates a new product.

### PUT /products/:id

Updates a single product by ID.

### DELETE /products/:id

Deletes a single product by ID.


## Running the Application

To run the application, execute the following command:

```
npm start


