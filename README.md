# ProductHub Backend

ProductHub is a backend API for a product management and shopping application built with **Node.js, Express.js, and MongoDB**.

The application supports two roles: **Customer** and **Seller**.

## Features

### Customer

* Register and login
* View available products
* View product details
* Add products to cart
* Update and remove cart items
* Purchase products

### Seller

* Register and login
* Add products
* Edit and update products
* Delete products
* View products
* Purchase products like a customer

## Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcrypt.js
* Express Validator

## Backend Workflow

```text
Client
  ↓
Express Routes
  ↓
Middleware
  ↓
Controllers
  ↓
Mongoose
  ↓
MongoDB
  ↓
JSON Response
```

## Authentication

The backend uses **JWT-based authentication** and **bcrypt** for password hashing.

During registration:

```text
Register
  ↓
Validate Input
  ↓
Check User
  ↓
Hash Password
  ↓
Save User
  ↓
Generate JWT
```

During login, the submitted password is compared with the stored hash and a JWT access token is generated after successful authentication.

User roles are included in the JWT and are used for authorization.

## Product Management

Sellers can:

* Create products
* View products
* Edit products
* Update products
* Delete products

Customers and sellers can both browse and purchase products.

## Cart and Purchase

Authenticated users can add products to their cart, update quantities, remove items, and purchase products.

Sellers can also use the cart and purchase products.

## Validation and Error Handling

The backend uses **Express Validator** for request validation and a custom error-handling mechanism for API errors.

## Environment Variables

Sensitive configuration is stored in `.env`:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_TOKEN_EXPIRY=1d
```

The `.env` file is excluded from Git using `.gitignore`.

## Running Locally

```bash
npm install
npm run dev
```

Create a `.env` file with the required environment variables before starting the server.

## Author

**Rinufathima**

GitHub: https://github.com/rinufathima-doc
