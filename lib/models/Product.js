import mongoose from "mongoose";

const EMIPlanSchema = new mongoose.Schema(
  {
    tenureMonths: { type: Number, required: true },
    monthlyAmount: { type: Number, required: true },
    interestRate: { type: Number, required: true },
    cashback: { type: Number, default: 0 },
  },
  { _id: false }
);

const VariantSchema = new mongoose.Schema(
  {
    label: { type: String, required: true }, // e.g. "Silver, 256GB"
    color: { type: String },
    storage: { type: String },
    mrp: { type: Number, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    emiPlans: { type: [EMIPlanSchema], required: true },
  },
  { _id: false }
);

const ProductSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    variants: { type: [VariantSchema], required: true },
  },
  { timestamps: true }
);

export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);