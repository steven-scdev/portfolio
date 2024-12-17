import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { Badge } from "../../components/ui/badge";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={product.link}>
      <div className="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all">
        <div className="w-full h-screen relative">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-semibold">{product.title}</h3>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
