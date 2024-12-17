export interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link: string;
}

export const products: Product[] = [
  {
    slug: "lifewiki",
    title: "LifeWiki",
    description: "Your personal life management app",
    image: "/LifeWiki.jpg",
    link: "/products/lifewiki",
    tags: ["iOS", "Mobile App", "Productivity"],
  },
  // ... more products
];
