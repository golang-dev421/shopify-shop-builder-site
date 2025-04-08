
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Desk Lamp",
    price: 59.99,
    description: "A sleek, adjustable desk lamp with touch controls and multiple lighting modes. Perfect for your home office or bedside table.",
    image: "/placeholder.svg",
    category: "lighting",
    featured: true
  },
  {
    id: 2,
    name: "Modern Coffee Table",
    price: 249.99,
    description: "Elegant coffee table with tempered glass top and solid wood legs. Adds a touch of sophistication to any living room.",
    image: "/placeholder.svg",
    category: "furniture",
    featured: true
  },
  {
    id: 3,
    name: "Ceramic Flower Vase",
    price: 34.99,
    description: "Hand-crafted ceramic vase with a beautiful matte finish. Available in three natural earth tones.",
    image: "/placeholder.svg",
    category: "decor",
    featured: true
  },
  {
    id: 4,
    name: "Woven Throw Blanket",
    price: 79.99,
    description: "Soft, lightweight throw blanket made from 100% organic cotton. Perfect for cool evenings or as a decorative accent.",
    image: "/placeholder.svg",
    category: "textiles",
    featured: false
  },
  {
    id: 5,
    name: "Wall Art Print",
    price: 45.99,
    description: "Contemporary abstract print on museum-quality paper. Comes unframed and in multiple size options.",
    image: "/placeholder.svg",
    category: "decor",
    featured: true
  },
  {
    id: 6,
    name: "Wooden Serving Board",
    price: 39.99,
    description: "Handcrafted acacia wood serving board, perfect for cheese, appetizers, or as a decorative piece.",
    image: "/placeholder.svg",
    category: "kitchen",
    featured: false
  },
  {
    id: 7,
    name: "Scented Soy Candle",
    price: 24.99,
    description: "Long-lasting soy candle with essential oils in a reusable glass container. Available in various scents.",
    image: "/placeholder.svg",
    category: "decor",
    featured: false
  },
  {
    id: 8,
    name: "Leather Lounge Chair",
    price: 599.99,
    description: "Mid-century inspired lounge chair with genuine leather upholstery and solid walnut frame.",
    image: "/placeholder.svg",
    category: "furniture",
    featured: true
  }
];

export const categories = [
  { id: "all", name: "All Products" },
  { id: "furniture", name: "Furniture" },
  { id: "lighting", name: "Lighting" },
  { id: "decor", name: "Home Decor" },
  { id: "textiles", name: "Textiles" },
  { id: "kitchen", name: "Kitchen" }
];
