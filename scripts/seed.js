// Run this with: node scripts/seed.js
require("dotenv").config({ path: ".env.local" });
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI;

const EMIPlanSchema = new mongoose.Schema(
  {
    tenureMonths: Number,
    monthlyAmount: Number,
    interestRate: Number,
    cashback: Number,
  },
  { _id: false }
);

const VariantSchema = new mongoose.Schema(
  {
    label: String,
    color: String,
    storage: String,
    mrp: Number,
    price: Number,
    image: String,
    emiPlans: [EMIPlanSchema],
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    slug: String,
    category: String,
    variants: [VariantSchema],
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema);

const products = [
  {
    name: "iPhone 17 Pro",
    slug: "iphone-17-pro",
    category: "Smartphones",
    variants: [
      {
        label: "Orange, 256GB",
        color: "Orange",
        storage: "256GB",
        mrp: 134900,
        price: 127400,
        image: "https://placehold.co/400x400/f97316/ffffff?text=iPhone+17+Pro+Orange",
        emiPlans: [
          { tenureMonths: 3, monthlyAmount: 44967, interestRate: 0, cashback: 7500 },
          { tenureMonths: 6, monthlyAmount: 22483, interestRate: 0, cashback: 7500 },
          { tenureMonths: 12, monthlyAmount: 11242, interestRate: 0, cashback: 7500 },
          { tenureMonths: 24, monthlyAmount: 5621, interestRate: 0, cashback: 7500 },
          { tenureMonths: 36, monthlyAmount: 4297, interestRate: 10.5, cashback: 7500 },
          { tenureMonths: 48, monthlyAmount: 3385, interestRate: 10.5, cashback: 7500 },
          { tenureMonths: 60, monthlyAmount: 2842, interestRate: 10.5, cashback: 7500 },
        ],
      },
      {
        label: "Silver, 512GB",
        color: "Silver",
        storage: "512GB",
        mrp: 154900,
        price: 147400,
        image: "https://placehold.co/400x400/e5e7eb/111827?text=iPhone+17+Pro+Silver",
        emiPlans: [
          { tenureMonths: 3, monthlyAmount: 51967, interestRate: 0, cashback: 7500 },
          { tenureMonths: 6, monthlyAmount: 25983, interestRate: 0, cashback: 7500 },
          { tenureMonths: 12, monthlyAmount: 12992, interestRate: 0, cashback: 7500 },
          { tenureMonths: 24, monthlyAmount: 6496, interestRate: 0, cashback: 7500 },
          { tenureMonths: 36, monthlyAmount: 4964, interestRate: 10.5, cashback: 7500 },
          { tenureMonths: 48, monthlyAmount: 3910, interestRate: 10.5, cashback: 7500 },
          { tenureMonths: 60, monthlyAmount: 3283, interestRate: 10.5, cashback: 7500 },
        ],
      },
    ],
  },
  {
    name: "Samsung Galaxy S24 Ultra",
    slug: "samsung-s24-ultra",
    category: "Smartphones",
    variants: [
      {
        label: "Titanium Black, 256GB",
        color: "Titanium Black",
        storage: "256GB",
        mrp: 129999,
        price: 119999,
        image: "https://placehold.co/400x400/1f2937/ffffff?text=S24+Ultra+Black",
        emiPlans: [
          { tenureMonths: 3, monthlyAmount: 40000, interestRate: 0, cashback: 6000 },
          { tenureMonths: 6, monthlyAmount: 20000, interestRate: 0, cashback: 6000 },
          { tenureMonths: 12, monthlyAmount: 10000, interestRate: 0, cashback: 6000 },
          { tenureMonths: 24, monthlyAmount: 5000, interestRate: 0, cashback: 6000 },
          { tenureMonths: 36, monthlyAmount: 3822, interestRate: 10.5, cashback: 6000 },
        ],
      },
      {
        label: "Titanium Gray, 512GB",
        color: "Titanium Gray",
        storage: "512GB",
        mrp: 144999,
        price: 134999,
        image: "https://placehold.co/400x400/6b7280/ffffff?text=S24+Ultra+Gray",
        emiPlans: [
          { tenureMonths: 3, monthlyAmount: 45000, interestRate: 0, cashback: 6500 },
          { tenureMonths: 6, monthlyAmount: 22500, interestRate: 0, cashback: 6500 },
          { tenureMonths: 12, monthlyAmount: 11250, interestRate: 0, cashback: 6500 },
          { tenureMonths: 24, monthlyAmount: 5625, interestRate: 0, cashback: 6500 },
          { tenureMonths: 36, monthlyAmount: 4300, interestRate: 10.5, cashback: 6500 },
        ],
      },
    ],
  },
  {
    name: "OnePlus 12",
    slug: "oneplus-12",
    category: "Smartphones",
    variants: [
      {
        label: "Flowy Emerald, 256GB",
        color: "Flowy Emerald",
        storage: "256GB",
        mrp: 69999,
        price: 64999,
        image: "https://placehold.co/400x400/10b981/ffffff?text=OnePlus+12+Emerald",
        emiPlans: [
          { tenureMonths: 3, monthlyAmount: 21667, interestRate: 0, cashback: 3000 },
          { tenureMonths: 6, monthlyAmount: 10833, interestRate: 0, cashback: 3000 },
          { tenureMonths: 12, monthlyAmount: 5417, interestRate: 0, cashback: 3000 },
          { tenureMonths: 24, monthlyAmount: 2708, interestRate: 0, cashback: 3000 },
        ],
      },
      {
        label: "Silky Black, 512GB",
        color: "Silky Black",
        storage: "512GB",
        mrp: 74999,
        price: 69999,
        image: "https://placehold.co/400x400/111827/ffffff?text=OnePlus+12+Black",
        emiPlans: [
          { tenureMonths: 3, monthlyAmount: 23333, interestRate: 0, cashback: 3200 },
          { tenureMonths: 6, monthlyAmount: 11667, interestRate: 0, cashback: 3200 },
          { tenureMonths: 12, monthlyAmount: 5833, interestRate: 0, cashback: 3200 },
          { tenureMonths: 24, monthlyAmount: 2917, interestRate: 0, cashback: 3200 },
        ],
      },
    ],
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");

    await Product.deleteMany({});
    console.log("Cleared existing products");

    await Product.insertMany(products);
    console.log(`Inserted ${products.length} products successfully!`);

    await mongoose.disconnect();
    console.log("Done. Disconnected.");
    process.exit(0);
  } catch (error) {
    console.error("Seeding error:", error);
    process.exit(1);
  }
}

seed();