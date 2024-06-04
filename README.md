# StoreFleet - Instant Product Delivery Service

StoreFleet is an instant product delivery service, akin to Blinkit, Zepto, and Swiggy. It aims to become a leading competitor by providing instant delivery not only for food and groceries but also for various products such as smartphones and other categories. As a team member, your role is to implement new features, resolve existing bugs, and enhance the project's functionality.

## Objectives

### Code Analysis and Debugging

Thoroughly analyze the project's source code, understand the flow of each route, and identify and debug existing issues and errors.

### Implement Welcome Email Feature with Nodemailer

Automatically send a welcome email with HTML content, including the company's brand logo, to users upon successful registration.

### Handle Duplicate Key Error in MongoDB

Ensure that only one registration with a unique email address is allowed and provide clear error messages.

### Use Mongoose Middleware for Password Hashing

Automatically hash user passwords using bcrypt via Mongoose Middleware before saving user documents.

### Implement Forget Password and Reset Feature

Allow users to reset their passwords using a token-based approach with a time limit.

### Fix Bug in Securing Admin Routes

Ensure that only users with 'admin' roles can access secured routes.

### Implement Route and Controller for Updating User Roles by Admin

Allow users with 'admin' roles to update the roles of other users.

### Execute Product Filtering, Search Capabilities, and Pagination

Implement search, filtration, and pagination functionalities to enhance data retrieval and user experience.

### Fix Review Delete Feature and Rating Update

Restrict users to deleting only their own reviews and update product ratings accordingly.

### Implement Controller and Repository for Placing Orders

Create a controller and implement repository functions to handle the order placement process.

## Setup Instructions

1. Clone the project repository.
2. Install project dependencies using `npm install`.
3. Set up the MongoDB database (e.g., MongoDB Atlas).
4. Update environment variables as needed.
5. Start the server using `npm start`.

## Routes and Endpoints

For detailed information on routes and endpoints, please refer to the provided Postman link.

## Contributing

Contributions are welcome! Please feel free to submit pull requests for bug fixes, feature enhancements, or documentation improvements.
