import { Globe } from "lucide-react";
import Link from "next/link";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import Image from "next/image";

export default function Link3Product() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Product Header */}
      <div className="max-w-4xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold">Link3</h1>

        {/* Tags */}
        {/* <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">Web3</Badge>
          <Badge variant="secondary">Social</Badge>
          <Badge variant="secondary">Community</Badge>
        </div> */}

        {/* Description */}
        <p className="text-muted-foreground text-lg leading-relaxed">
          Link3 is one of the biggest Web3 platform for organizations and
          content creators to establish their digital profile on-chain.
        </p>

        {/* Action Buttons */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex flex-col items-center gap-6">
            <Link
              href="https://link3.to/"
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
            </Link>

            {/* Link3 Logo */}
            <div className="w-full h-[500px] relative mt-8">
              <Image
                src="/link3-cart.jpg"
                alt="Link3 Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add more sections here similar to LifeWiki if needed */}
    </main>
  );
}
