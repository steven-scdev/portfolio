import Link from "next/link";
import Image from "next/image";
import { Product } from "@/data/products";
import { Badge } from "../../components/ui/badge";

interface ProductCardProps {
  product: Product;
}

function generatePastelColor(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = hash % 360;
  return `hsl(${h}, 70%, 90%)`; // Pastel color with fixed saturation and lightness
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={product.link}>
      <div className="group rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-2xl font-semibold">{product.title}</h3>
          <p className="text-muted-foreground">{product.description}</p>
          <div className="flex flex-wrap gap-2">
            {product.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                style={{
                  backgroundColor: generatePastelColor(tag),
                  padding: "0.5rem 1rem",
                  fontSize: "0.95rem",
                  color: "#000000",
                }}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
