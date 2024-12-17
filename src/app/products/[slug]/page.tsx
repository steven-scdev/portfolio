import { products } from "@/data/products";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "../../../../components/ui/badge";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.link === `/products/${params.slug}`);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div className="aspect-video relative rounded-lg overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      </div>
    </div>
  );
}
