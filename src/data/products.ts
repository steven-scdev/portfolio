import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "lifewiki",
    title: "LifeWiki",
    description:
      "A mobile application for life management and organization, featuring a clean and modern design with intuitive user interfaces.",
    image: "/LifeWiki.jpg",
    link: "/products/lifewiki",
    tags: ["Mobile App", "UI/UX", "Design System"],
  },
  {
    id: "1",
    title: "Project One",
    description: "A brief description of project one",
    image: "/images/project1.png",
    link: "/products/project-one",
    tags: ["Next.js", "React", "TypeScript"],
    featured: true,
  },
  // Add more products here
];
