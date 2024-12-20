"use client";

import Image from "next/image";
import { products } from "@/data/products";
import { ProductCard } from "../../components/product-card";
import { useRouter } from "next/navigation";

const DEFAULT_PRODUCT_IMAGE = "/android_logo.png";

export default function ProductsPage() {
  const router = useRouter();

  const handleProductClick = (slug: string) => {
    if (slug === "lifewiki") {
      router.push("/products/lifewiki");
    } else if (slug === "link3") {
      router.push("/products/link3");
    } else if (slug === "piney") {
      router.push("/products/Piney");
    } else if (slug === "coinmunity") {
      router.push("/products/Coinmunity");
    } else {
      router.push(`/products/${slug}`);
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Products</h1>
        <p className="text-muted-foreground text-lg">
          Explore our collection of products and projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.slug}
            onClick={() => handleProductClick(product.slug)}
          >
            <ProductCard
              product={{ ...product, image: product.profileImage }}
              imageSize={{ width: 300, height: 300 }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
