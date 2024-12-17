import Image from "next/image";
import { products } from "@/data/products";
import { ProductCard } from "../../components/product-card";

const DEFAULT_PRODUCT_IMAGE = "/android_logo.png";

export default function ProductsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto mb-8">
        <h1 className="text-4xl font-bold mb-4">Products</h1>
        <p className="text-muted-foreground text-lg">
          Explore our collection of products and projects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={{ ...product, image: product.profileImage }}
          />
        ))}
      </div>
    </main>
  );
}
