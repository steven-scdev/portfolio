"use client";

import { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { DownloadIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function PineyPage() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Hardcoded product data for Piney
  const product = {
    title: "Piney",
    tags: ["AI", "Productivity", "Note-taking"],
    description:
      "Your AI-powered reading companion that helps you understand complex topics easier and faster.",
    image: "/piney-screenshot.png", // Make sure to add your image to the public folder
    features: [
      "AI-powered reading companion",

      // Add more features as needed
    ],
  };

  return (
    <main className="container mx-auto px-4 py-8">
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
              href="https://www.piney.xyz/"
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

            {/* <a
              href="https://apps.apple.com/us/app/piney/id1635640563"
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
            </a> */}
          </div>
        </div>
      </div>
      {/* Rest of the component remains the same as [slug]/page.tsx */}
      {/* // ... Image section, features section, etc. */}
    </main>
  );
}
