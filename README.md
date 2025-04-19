# Hyperlocal Store App

A full-stack web application that helps users browse nearby stores, view available fruits/vegetables, add items to a cart, and place orders seamlessly.

## Features

- View all nearby stores
- Browse products by store
- Add products to cart
- Update quantity in cart
- Place an order with your name
- Product search bar
- Order confirmation screen

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB
- **Frontend**: React.js + Tailwind CSS
- **Database**: MongoDB (Local or Atlas)

## Folder Structure

```
hyperlocal-store-assignment/
├── backend/        # Express server
├── frontend/       # React client
├── sample-data/    # JSON data for seeding MongoDB
```

## How to Run This Project

Clone the repository:
```bash
git clone https://github.com/livan116/hyperlocal-store.git
```
Navigate to the hyperlocal-store directory:
```bash
cd hyperlocal-store
```

### 1. Backend Setup

Make sure MongoDB is running locally or you have a cloud MongoDB URI.

```bash
cd backend
npm install
```

### Configure Environment

Create a `.env` file inside `backend/`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/hyperlocal-store
```

Replace with your MongoDB URI if using Atlas.

### Seed the Database

Before running the server, seed sample data (stores + products):

```bash
node seed/seed.js
```

You should see: `Database seeded!`

### Start Backend

```bash
npm start
```

The server will run on http://localhost:5000

### 2. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Frontend will run on http://localhost:5173

## Pages Overview

### Home Page - Store Listing

- Lists all stores
- Click to view their products

### Store Page - Products

- List of items (fruit/veg)
- Add items to cart
- Search bar to filter products

### Cart Page

- View all added items
- Increase/decrease quantity
- Enter name and place order

### Thank You Page

- Confirms order with your name
- Option to return to home

## Sample JSON Files

- `sample-data/stores.json`
- `sample-data/products.json`

These are loaded into MongoDB via the seeding script.

## Bonus Features

- Product search
- Quantity editing in cart
- Mobile responsive UI
- Clean, modern Tailwind styling

## Notes

- You can improve the styling or UI freely.
- Focus is on functionality and clean user flow.
- Works great on both desktop and mobile.
