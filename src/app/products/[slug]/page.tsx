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
  const product = products.find(p => p.link === '/products/' + params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-8 max-w-[1400px] mx-auto">
      <div className="space-y-4 px-4">
        <h1 className="text-4xl font-bold">{product.title}</h1>
        <p className="text-muted-foreground leading-relaxed">
          {product.description}
        </p>
      </div>
      <div className="w-full h-screen relative">
        <Image
          src="/LifeWiki.jpg"
          alt={product.title}
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
