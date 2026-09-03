import { NextResponse } from "next/server";
import connectDB from "../../../lib/mongodb";
import Product from "../../../lib/models/Product";

export async function GET() {
  try {
    await connectDB();
    const products = await Product.find({}).select(
      "name slug category variants.label variants.price variants.mrp variants.image"
    );
    return NextResponse.json({ products });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}