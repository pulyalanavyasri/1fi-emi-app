"use client";

import { useEffect, useState, use } from "react";

export default function ProductPage({ params }) {
  const { slug } = use(params);
  const [product, setProduct] = useState(null);
  const [variantIndex, setVariantIndex] = useState(0);
  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/products/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.product);
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </main>
    );
  }

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found.</p>
      </main>
    );
  }

  const variant = product.variants[variantIndex];
  const selectedPlan = variant.emiPlans[selectedPlanIndex];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-white rounded-2xl p-6 flex items-center justify-center">
          <img
            src={variant.image}
            alt={product.name}
            className="w-full max-w-sm rounded-xl"
          />
        </div>

        <div>
          <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">
            New
          </span>
          <h1 className="text-2xl font-bold text-gray-900 mt-1">
            {product.name}
          </h1>
          <p className="text-gray-500 mb-4">{variant.storage}</p>

          {product.variants.length > 1 && (
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">
                Choose a variant
              </p>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((v, i) => (
                  <button
                    key={v.label}
                    onClick={() => {
                      setVariantIndex(i);
                      setSelectedPlanIndex(0);
                    }}
                    className={`px-4 py-2 rounded-lg border text-sm ${
                      i === variantIndex
                        ? "border-gray-900 bg-gray-900 text-white"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">
              ₹{variant.price.toLocaleString("en-IN")}
            </span>
            <span className="text-lg text-gray-400 line-through ml-3">
              ₹{variant.mrp.toLocaleString("en-IN")}
            </span>
            <p className="text-sm text-gray-500 mt-1">
              EMI plans backed by mutual funds
            </p>
          </div>

          <div className="space-y-3 mb-6">
            {variant.emiPlans.map((plan, i) => (
              <button
                key={plan.tenureMonths}
                onClick={() => setSelectedPlanIndex(i)}
                className={`w-full text-left border rounded-xl p-4 flex justify-between items-center transition ${
                  i === selectedPlanIndex
                    ? "border-gray-900 ring-1 ring-gray-900 bg-gray-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div>
                  <p className="font-semibold text-gray-900">
                    ₹{plan.monthlyAmount.toLocaleString("en-IN")} x{" "}
                    {plan.tenureMonths} months
                  </p>
                  {plan.cashback > 0 && (
                    <p className="text-sm text-green-600 mt-1">
                      Additional cashback of ₹
                      {plan.cashback.toLocaleString("en-IN")}
                    </p>
                  )}
                </div>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  {plan.interestRate === 0
                    ? "0% interest"
                    : `${plan.interestRate}% interest`}
                </span>
              </button>
            ))}
          </div>

          <button
            onClick={() =>
              alert(
                `Proceeding with ${variant.label} — ₹${selectedPlan.monthlyAmount.toLocaleString(
                  "en-IN"
                )} x ${selectedPlan.tenureMonths} months`
              )
            }
            className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Proceed with this plan
          </button>
        </div>
      </div>
    </main>
  );
}