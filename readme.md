

# Handbag Haven - Online Store for Women's Handbags and Accessories

**Handbag Haven** is an e-commerce web application designed for selling handmade handbags and accessories for women. The project is built using **ASP.NET Core Web API** for the backend and **React** for the frontend. This application provides a seamless shopping experience for users, enabling them to browse the collection of handbags, view product details, and place orders online.

## Features

### Frontend (React):
- **Responsive Design**: A modern and mobile-friendly user interface built with React.
- **Product Listing**: Displays a catalog of handbags and accessories with images, descriptions, and prices.
- **Product Search & Filters**: Allows users to search for specific items and filter results based on various criteria.
- **Product Details**: Shows detailed information about each product, including images and descriptions.
- **Shopping Cart**: Users can add items to their cart, view the cart, and proceed to checkout.
- **User Authentication**: Registration and login functionality for customers.
- **Order Tracking**: Allows customers to view their past and current orders.

### Backend (ASP.NET Core Web API):
- **RESTful API**: Provides CRUD operations for products, orders, and users.
- **Database Integration**: Uses Entity Framework Core with a SQL Server database to store product data, customer orders, and user information.
- **Secure Authentication**: Implements JWT-based authentication for user login and registration.
- **Admin Panel**: API routes for adding, updating, and removing products (for admin users).
- **Order Processing**: Allows users to place orders, and admin users to manage them (view, update status).

## Technologies Used

### Frontend:
- **React**: JavaScript library for building the user interface.
- **Axios**: For making HTTP requests to the API.
- **React Router**: For routing between pages.
- **Bootstrap/Material UI**: For responsive and elegant UI design.

### Backend:
- **ASP.NET Core Web API**: The backend framework for building the RESTful API.
- **Entity Framework Core**: For interacting with the SQL Server database.
- **SQL Server**: The relational database used for storing data.
- **JWT (JSON Web Tokens)**: For secure authentication and authorization.
- **Swagger**: API documentation and testing.

## Installation and Setup

### Prerequisites:
- .NET SDK (version 6 or higher)
- Node.js (version 14 or higher)
- SQL Server (or any database compatible with Entity Framework Core)

### Backend Setup:
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/handbag-haven.git
   cd handbag-haven/HandbagHavenAPI
   ```
2. Install dependencies:
   ```bash
   dotnet restore
   ```
3. Configure the database connection in `appsettings.json`:
   ```json
   "ConnectionStrings": {
     "DefaultConnection": "Server=your_server;Database=HandbagHavenDB;Trusted_Connection=True;"
   }
   ```
4. Apply database migrations:
   ```bash
   dotnet ef database update
   ```
5. Run the API:
   ```bash
   dotnet run
   ```

### Frontend Setup:
1. Navigate to the React app directory:
   ```bash
   cd handbag-haven/frontend
   ```
2. Install the required packages:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

## API Documentation
The API documentation is available via **Swagger**. After starting the API, navigate to:
```
https://localhost:5001/swagger
```

Here, you'll find a complete list of available API endpoints for products, users, and orders.

## Future Enhancements
- **Payment Gateway Integration**: Integrate with a payment gateway like Stripe or PayPal.
- **Product Reviews**: Allow customers to leave reviews and ratings for products.
- **Wishlist Feature**: Allow users to add products to a wishlist for future purchase.
- **Multi-language Support**: Add support for multiple languages to expand the customer base.

## License
This project is open source and available under the MIT License.

