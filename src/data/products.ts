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
  features?: string[];
}

export const products: Product[] = [
  {
    slug: "LifeWiki",
    title: "lifewiki",
    description:
      "The world's first decentralized user-generated content creator DAO platform, enabling collaborative content creation and curation through blockchain technology",
    image: "/lifewiki.jpg",
    link: "/products/lifewiki",
    tags: ["Blockchain", "DAO", "Content Creation", "Web3", "Community"],
    profileImage: "/lifewiki-cart.jpg",
    websiteUrl: "https://www.lifewiki.xyz/",
    appStoreUrl: "https://apps.apple.com/us/app/lifewiki/id1635640563",
    features: [
      "Feature 1",
      "Feature 2",
      // ... more features
    ],
  },
  {
    slug: "Piney",
    title: "Piney",
    description:
      "AI-powered reading companion that helps you understand complex topics easier and faster.",
    image: "/piney.jpg",
    link: "/products/Piney",
    tags: [
      "AI",
      "Machine Learning",
      "Knowledge Management",
      "Productivity",
      "B2C",
    ],
    profileImage: "/Piney-cart.jpg",
    features: [
      "Feature 1",
      "Feature 2",
      // ... more features
    ],
  },
  {
    slug: "Coinmunity",
    title: "Coinmunity",
    description:
      "A B2C mobile cryptocurrency trading platform focused on simplifying the crypto adoption journey with integrated wallet features",
    image: "/coinmunity.jpg",
    link: "/products/coinmunity",
    tags: ["Crypto", "Mobile App", "Trading", "Blockchain", "Fintech"],
    profileImage: "/coin-cart.jpg",
    features: [
      "Feature 1",
      "Feature 2",
      // ... more features
    ],
  },
  {
    slug: "Cyber - Link3",
    title: "link3",
    description:
      "A B2C Web3 platform building on-chain for verified Web3 communities and content creators.",
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
    features: [
      "Feature 1",
      "Feature 2",
      // ... more features
    ],
  },
  //   {
  //     slug: "piney-mobile",
  //     title: "Piney Mobile",
  //     description:
  //       "An AI-driven B2C audio learning platform delivering personalized educational content through mobile devices",
  //     image: "/piney-mobile.jpg",
  //     link: "/products/piney-mobile",
  //     tags: ["Mobile App", "AI", "Audio Learning", "EdTech", "Personalization"],
  //     profileImage: "/piney-mobile.jpg",
  //   },
];
