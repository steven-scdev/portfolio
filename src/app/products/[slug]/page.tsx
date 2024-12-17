import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  // Find the product using the slug
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Product Header */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">{product.title}</h1>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {product.tags?.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed">
          {product.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          {product.websiteUrl && (
            <a
              href={product.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Visit Website</Button>
            </a>
          )}

          {product.appStoreUrl && (
            <a
              href={product.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Download on App Store</Button>
            </a>
          )}
        </div>
      </div>

      {/* Product Image/Screenshot */}
      <div className="mt-12 w-full h-[600px] relative rounded-lg overflow-hidden">
        {product.image && (
          <Image
            src={product.image}
            alt={`Screenshot of ${product.title}`}
            fill
            className="object-contain"
            priority
          />
        )}

        {/* Download Image Button */}
        {product.image && (
          <div className="absolute bottom-4 right-4">
            <a
              href={product.image}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                variant="secondary"
                className="flex items-center gap-2 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm"
              >
                <DownloadIcon className="h-4 w-4" />
                Download Image
              </Button>
            </a>
          </div>
        )}
      </div>

      {/* Additional Details */}
      {product.features && (
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold mb-6">Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
