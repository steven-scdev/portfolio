export interface Product {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags?: string[];
  link: string;
  profileImage: string;
  websiteUrl?: string;
  appStoreUrl?: string;
}

export const products: Product[] = [
  {
    slug: "lifewiki",
    title: "LifeWiki",
    description:
      "The world's first decentralized user-generated content creator DAO platform, enabling collaborative content creation and curation through blockchain technology",
    image: "/lifewiki.jpg",
    link: "/products/lifewiki",
    tags: ["Blockchain", "DAO", "Content Creation", "Web3", "Community"],
    profileImage: "/lifewiki-cart.jpg",
    websiteUrl: "https://www.lifewiki.xyz/",
    appStoreUrl: "https://apps.apple.com/us/app/lifewiki/id1635640563",
  },
  {
    slug: "link3",
    title: "Cyber - Link3",
    description:
      "A B2C blockchain platform building one of the largest verified Web3 communities, focusing on user engagement and community growth",
    image: "/link3-logo.jpg",
    link: "/products/link3",
    tags: [
      "Blockchain",
      "Web3",
      "Professionals",
      "Social Platform",
      "Onchain-Verification",
    ],
    profileImage: "/link3-cart.jpg",
  },
  {
    slug: "piney",
    title: "Piney",
    description:
      "An AI-powered B2C knowledge platform leveraging machine learning for enhanced productivity and information retrieval",
    image: "/piney.jpg",
    link: "/products/piney",
    tags: [
      "AI",
      "Machine Learning",
      "Knowledge Management",
      "Productivity",
      "B2C",
    ],
    profileImage: "/piney_logo.png",
  },
  {
    slug: "coinmunity",
    title: "Coinmunity",
    description:
      "A B2C mobile cryptocurrency trading platform focused on simplifying the crypto adoption journey with integrated wallet features",
    image: "/coinmunity.jpg",
    link: "/products/coinmunity",
    tags: ["Crypto", "Mobile App", "Trading", "Blockchain", "Fintech"],
    profileImage: "/coinmunity_logo.png",
  },
  {
    slug: "piney-mobile",
    title: "Piney Mobile",
    description:
      "An AI-driven B2C audio learning platform delivering personalized educational content through mobile devices",
    image: "/piney-mobile.jpg",
    link: "/products/piney-mobile",
    tags: ["Mobile App", "AI", "Audio Learning", "EdTech", "Personalization"],
    profileImage: "/piney_mobile_logo.png",
  },
];
