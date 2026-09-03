import { NextResponse } from "next/server";
import connectDB from "../../../../lib/mongodb";
import Product from "../../../../lib/models/Product";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { slug } = await params;
    const product = await Product.findOne({ slug });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json({ product });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 }
    );
  }
}