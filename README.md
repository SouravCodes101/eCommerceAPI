# eCommerce REST API

This is an eCommerce REST API built with Node.js, Express.js, and MongoDB. It provides a backend server for managing products, user authentication, orders, and more for an online store.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [Products](#products)
  - [Users](#users)
  - [Orders](#orders)
## Getting Started

### Prerequisites

- Node.js and npm should be installed on your machine.
- MongoDB should be set up and running locally or on a remote server. Make sure to configure your database connection in the `.env` file (see [Configuration](#configuration)).

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/eCommerce-REST-API.git

###Usage
##Authentication
The API supports user authentication and authorization. To access certain endpoints, you'll need to register and log in as a user. Admin users have additional privileges.
##Products
GET /api/products: Get a list of all products.
GET /api/products/:id: Get details of a specific product.
POST /api/products: Create a new product (admin only).
PUT /api/products/:id: Update a product (admin only).
DELETE /api/products/:id: Delete a product (admin only).
POST /api/products/:id/reviews: Add a review to a product (authenticated users only).
GET /api/products/top: Get top-rated products.
##Users
POST /api/users: Register a new user.
POST /api/users/login: Log in as a user.
GET /api/users/profile: Get the user's profile (authenticated).
PUT /api/users/profile: Update the user's profile (authenticated).
GET /api/users: Get a list of all users (admin only).
GET /api/users/:id: Get details of a specific user (admin only).
PUT /api/users/:id: Update a user's information (admin only).
DELETE /api/users/:id: Delete a user (admin only).
##Orders
POST /api/orders: Create a new order (authenticated).
GET /api/orders/myOrders: Get the user's own orders (authenticated).
GET /api/orders/:id: Get details of a specific order (authenticated).
PUT /api/orders/:id/pay: Update an order to mark it as paid (authenticated).
PUT /api/orders/:id/deliver: Update an order to mark it as delivered (admin only).
GET /api/orders: Get a list of all orders (admin only).
