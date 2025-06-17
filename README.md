# Lead Manager Backend

A simple RESTful API for managing sales leads, built with Node.js, Express, and MongoDB.

## Features

- Add new leads with name, email, and status
- Fetch all leads, sorted by creation date
- Status field supports: New, Engaged, Proposal Sent, Closed-Won, Closed-Lost

## Approach

This API is designed with a clear separation of concerns:

- **Models**: The [`Lead`](src/models/Lead.js) model defines the schema for leads using Mongoose, ensuring data validation and integrity.
- **Repositories**: The [`leadRepository`](src/repositories/leadRepository.js) module encapsulates all database operations, providing clean async functions for creating and retrieving leads.
- **Routes**: The [`leadRoutes`](src/routes/leadRoutes.js) module defines RESTful endpoints for lead operations, handling HTTP requests and responses.
- **Configuration**: The [`db.js`](src/config/db.js) file manages MongoDB connection using environment variables for security and flexibility.
- **Server**: The [`server.js`](src/server.js) file initializes the Express app, sets up middleware, and mounts the routes.

This modular structure makes the codebase easy to maintain, extend, and test.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB Atlas account (or local MongoDB instance)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/lead-manager-backend.git
   cd lead-manager-backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure environment variables:

   Create a `.env` file in the root directory (already present in this repo):

   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the server:
   ```sh
   npm run dev
   ```
   or
   ```sh
   npm start
   ```

## API Endpoints

- `POST /leads`  
  Create a new lead.  
  **Body:** `{ "name": "John Doe", "email": "john@example.com", "status": "New" }`

- `GET /leads`  
  Retrieve all leads.

## License

ISC

---

**Author:** [Your Name]