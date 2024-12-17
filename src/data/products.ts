export interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link: string;
  profileImage: string;
}

export const products: Product[] = [
  {
    slug: "lifewiki",
    title: "LifeWiki",
    description: "Your personal life management app",
    image: "/LifeWiki.jpg",
    link: "/products/lifewiki",
    tags: ["iOS", "Mobile App", "Productivity"],
    profileImage: "/android_logo.png",
  },
  // ... more products
];
