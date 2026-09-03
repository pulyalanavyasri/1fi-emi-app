# 1Fi EMI Product App

A full-stack web app that displays products with dynamic EMI plans backed by mutual funds, built for the 1Fi SDE1 assignment.

**Live demo:** https://1fi-emi-app-five.vercel.app

## Tech Stack

- **Frontend:** Next.js (App Router), React, Tailwind CSS
- **Backend:** Next.js API Routes
- **Database:** MongoDB Atlas with Mongoose

## Setup and Run Instructions

1. Clone the repo:

git clone https://github.com/pulyalanavyasri/1fi-emi-app.git
cd 1fi-emi-app


2. Install dependencies:

npm install


3. Create a `.env.local` file in the root with your MongoDB connection string:

MONGODB_URI=your_mongodb_connection_string


4. Seed the database with sample products:

node scripts/seed.js


5. Run the development server:

npm run dev


6. Open [http://localhost:3000](http://localhost:3000)

## API Endpoints

### `GET /api/products`

Returns a list of all products with basic info.

**Example response:**
```json
{
  "products": [
    {
      "_id": "6a98e6db49bbdcb47b4d126c",
      "name": "iPhone 17 Pro",
      "slug": "iphone-17-pro",
      "category": "Smartphones",
      "variants": [
        {
          "label": "Orange, 256GB",
          "mrp": 134900,
          "price": 127400,
          "image": "https://placehold.co/400x400/f97316/ffffff?text=iPhone+17+Pro+Orange"
        }
      ]
    }
  ]
}
```

### `GET /api/products/:slug`

Returns full details for a single product, including all variants and EMI plans.

**Example response:**
```json
{
  "product": {
    "name": "iPhone 17 Pro",
    "slug": "iphone-17-pro",
    "category": "Smartphones",
    "variants": [
      {
        "label": "Orange, 256GB",
        "color": "Orange",
        "storage": "256GB",
        "mrp": 134900,
        "price": 127400,
        "image": "https://placehold.co/400x400/f97316/ffffff?text=iPhone+17+Pro+Orange",
        "emiPlans": [
          {
            "tenureMonths": 3,
            "monthlyAmount": 44967,
            "interestRate": 0,
            "cashback": 7500
          }
        ]
      }
    ]
  }
}
```

## Database Schema

**Product**
- `name` (String, required)
- `slug` (String, required, unique)
- `category` (String, required)
- `variants` (Array of Variant, required)

**Variant** (embedded in Product)
- `label` (String, required)
- `color` (String)
- `storage` (String)
- `mrp` (Number, required)
- `price` (Number, required)
- `image` (String, required)
- `emiPlans` (Array of EMIPlan, required)

**EMIPlan** (embedded in Variant)
- `tenureMonths` (Number, required)
- `monthlyAmount` (Number, required)
- `interestRate` (Number, required)
- `cashback` (Number, default 0)

## Features

- Dynamic product listing page pulling live data from MongoDB
- Product detail pages with unique URLs (`/products/:slug`)
- Variant selection (color/storage) that updates price, image, and EMI plans
- Selectable EMI plans with tenure, monthly amount, interest rate, and cashback
- 3 products, each with 2 variants
