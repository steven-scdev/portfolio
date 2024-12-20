import { products } from "@/data/products";
import { notFound } from "next/navigation";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";

// Import Next.js types

type Props = {
  params: { slug: string };
};

export default async function ProductPage({
  params,
}: Props & { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = products.find((p) => p.slug === resolvedParams.slug);

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
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.lifewiki.xyz/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-105"
            >
              <Button
                variant="secondary"
                className="bg-gradient-to-r from-purple-100 to-pink-100 hover:from-purple-200 hover:to-pink-200 
                  text-purple-700 font-medium px-6 py-2 rounded-full shadow-md 
                  hover:shadow-lg border-2 border-purple-200 transition-all duration-300"
              >
                ✨ Visit Website ✨
              </Button>
            </a>

            <a
              href="https://apps.apple.com/us/app/lifewiki/id1635640563"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-transform hover:scale-105"
            >
              <Button
                variant="secondary"
                className="bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 
                  text-purple-700 font-medium px-6 py-2 rounded-full shadow-md 
                  hover:shadow-lg border-2 border-purple-200 transition-all duration-300"
              >
                🌟 Download on App Store 🌟
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Product Image/Screenshot */}
      <div className="mt-12 w-full h-[600px] relative rounded-lg overflow-hidden">
        {product.image && (
          <>
            <Image
              src={product.image}
              alt={`Screenshot of ${product.title}`}
              fill
              className="object-contain cursor-pointer"
              priority
            />

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
          </>
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
