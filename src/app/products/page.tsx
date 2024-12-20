"use client";

import { products } from "@/data/products";
import { ProductCard } from "../../components/product-card";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  const router = useRouter();

  const handleProductClick = (title: string) => {
    router.push(`/products/${title}`);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.slug}
            onClick={() => handleProductClick(product.title)}
          >
            <ProductCard
              product={{ ...product, image: product.profileImage }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
