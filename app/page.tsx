import Link from "next/link";

async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  const data = await res.json();
  return data.products;
}

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Shop on EMI — 0% Interest
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: any) => {
          const firstVariant = product.variants[0];
          return (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5 flex flex-col"
            >
              <img
                src={firstVariant.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <h2 className="text-lg font-semibold text-gray-900">
                {product.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {firstVariant.label}
              </p>
              <div className="mt-auto">
                <span className="text-xl font-bold text-gray-900">
                  ₹{firstVariant.price.toLocaleString("en-IN")}
                </span>
                <span className="text-sm text-gray-400 line-through ml-2">
                  ₹{firstVariant.mrp.toLocaleString("en-IN")}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}