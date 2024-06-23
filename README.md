

# Coffee Shop Finder

Coffee Shop Finder is a web application that allows users to search for, explore, and interact with coffee shops. The application features a dynamic and visually appealing interface built with React.js, a robust backend with Node.js, data storage managed by MongoDB, and deployment on AWS.

## Features

- Search for coffee shops by name.
- View details and products of each coffee shop.
- Filter products by categories: Coffee, Drinks, Food.
- Dynamic and responsive UI.

## Setup and Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js and npm: [Download and install Node.js](https://nodejs.org/)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/try/download/community)

### Backend Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/coffee-shop-finder.git
   cd coffee-shop-finder
   ```

2. **Install backend dependencies:**

   ```sh
   cd backend
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the `backend` directory and add your MongoDB connection string:

   ```env
   MONGODB_URI=mongodb://localhost:27017/coffeeshop
   ```

4. **Start the backend server:**

   ```sh
   node start
   ```

   The backend server will run on `http://localhost:5000`.

### Frontend Setup

1. **Install frontend dependencies:**

   ```sh
   cd ../frontend
   npm install
   ```

2. **Start the frontend server:**

   ```sh
   npm run dev
   ```

   The frontend server will run on `http://localhost:3000`.

## Configuration

### API Endpoints

- **GET /api/coffeeshops**: Retrieve all coffee shops.
- **POST /api/coffeeshops/:shopId/products**: Add a product to a coffee shop.
- **GET /api/coffeeshops/:id**: Retrieve details of a specific coffee shop.

### Environment Variables

Ensure the following environment variables are set in your `.env` file:

- `MONGODB_URI`: Your MongoDB connection string.

## Usage Instructions

1. **Search for Coffee Shops:**

   Use the search bar on the Hero section to search for coffee shops by name. The list of coffee shops will update dynamically based on your search query.

2. **View Coffee Shop Details:**

   Click on any coffee shop from the list to view detailed information about the shop, including its products.

3. **Filter Products:**

   In the coffee shop details page, use the category tabs to filter products by Coffee, Drinks, and Food.



## Contact

For any inquiries, please contact [kunalprashant77@gmail.com](mailto:kunalprashant77@gmail.com).
