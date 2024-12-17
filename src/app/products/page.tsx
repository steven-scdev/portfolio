import { products } from "@/data/products"
import { ProductCard } from "@/components/product-card"

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">My Products</h1>
        <p className="text-muted-foreground">
          A collection of products and projects I've built
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
} 