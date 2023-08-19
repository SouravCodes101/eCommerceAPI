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
## Endpoints

### Products

- **GET `/api/products`**: Retrieve a list of all available products.
- **GET `/api/products/:id`**: Fetch details of a specific product by its ID.
- **POST `/api/products`**: Create a new product (requires admin privileges).
- **PUT `/api/products/:id`**: Update product details (requires admin privileges).
- **DELETE `/api/products/:id`**: Delete a product from the system (requires admin privileges).
- **POST `/api/products/:id/reviews`**: Add a review to a product (authentication required).
- **GET `/api/products/top`**: Get a list of top-rated products.

### Users

- **POST `/api/users`**: Register a new user.
- **POST `/api/users/login`**: Log in as an existing user.
- **GET `/api/users/profile`**: Retrieve the user's profile (authentication required).
- **PUT `/api/users/profile`**: Update the user's profile information (authentication required).
- **GET `/api/users`**: Get a list of all users (admin privileges required).
- **GET `/api/users/:id`**: Retrieve details of a specific user (admin privileges required).
- **PUT `/api/users/:id`**: Update user information (admin privileges required).
- **DELETE `/api/users/:id`**: Delete a user account (admin privileges required).

### Orders

- **POST `/api/orders`**: Create a new order (authentication required).
- **GET `/api/orders/myOrders`**: Fetch a list of the user's own orders (authentication required).
- **GET `/api/orders/:id`**: Retrieve details of a specific order (authentication required).
- **PUT `/api/orders/:id/pay`**: Mark an order as paid (authentication required).
- **PUT `/api/orders/:id/deliver`**: Mark an order as delivered (admin privileges required).
- **GET `/api/orders`**: Get a list of all orders (admin privileges required).

## Authentication

- The API supports user authentication and authorization for certain endpoints.
- Users can register, log in, and manage their profiles.
- Admin users have additional privileges, including product management and user management.

## Usage

1. Clone this repository and navigate to the project directory.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the project root with your configuration options (see [Configuration](#configuration)).
4. Start the server using `npm start`.

## Configuration

Create a `.env` file in the project root with the following configuration options:

```env
PORT=5000
MONGO_URI=mongodb://localhost/your-database-name
JWT_SECRET=your-secret-key
PAYPAL_CLIENT_ID=your-paypal-client-id
