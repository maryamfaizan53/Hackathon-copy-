export interface Product {
  _id: string; // Unique identifier for the product
  name: string; // Name of the product
  description: string; // Detailed description of the product
  category: string; // Category the product belongs to (e.g., hoodie, jacket)
  discountPercent?: number; // Discount percentage (optional)
  price: number; // Price of the product
  colors: string[]; // Array of available colors
  sizes: string[]; // Array of available sizes
  imageUrl: string; // URL for the product image
  isNew?: boolean; // Flag to indicate if the product is new (optional)
}

  // New Arrivals Products
  export const newArrivalsProducts: Product[] = [
    // {
    //   id: 1,
    //   name: 'Hoodie For Mens',
    //   imageUrl: '/images/pic1.png',
    //   price: 120,
    //   rating: 5,
    // },
    // {
    //   id: 2,
    //   name: 'T-Shirts For Mens',
    //   imageUrl: '/images/pic2.png',
    //   price: 240,
    //   rating: 3,
    // },
    // {
    //   id: 3,
    //   name: 'Trousers For Women',
    //   imageUrl: '/images/pic3.png',
    //   price: 180,
    //   rating: 4,
    // },
    // {
    //   id: 4,
    //   name: 'Fits Bermuda T-Shirts',
    //   imageUrl: '/images/pic4.png',
    //   price: 130,
    //   rating: 5,
    // },
  ];
  
  // Top Selling Products
  export const topSellProducts: Product[] = [
    // {
    //   id: 5,
    //   name: 'Vertical Striped Shirt',
    //   imageUrl: '/images/pic5.png',
    //   price: 212,
    //   rating: 5,
    // },
    // {
    //   id: 6,
    //   name: 'Courage Graphic T-Shirt',
    //   imageUrl: '/images/pic6.png',
    //   price: 145,
    //   rating: 3,
    // },
    // {
    //   id: 7,
    //   name: 'Loose Fits Bermuda Shorts',
    //   imageUrl: '/images/pic7.png',
    //   price: 80,
    //   rating: 4,
    // },
    // {
    //   id: 8,
    //   name: 'Faded Skiny Jeans',
    //   imageUrl: '/images/pic8.png',
    //   price: 210,
    //   rating: 5,
    // },
  ];
  
  // All Products (for Items page, etc.)
  export const allProducts: Product[] = [
    // {
    //   id: 1,
    //   name: 'Hoodie For Mens',
    //   price: 212,
    //   rating: 5,
    //   description: "Stylish hoodie made for comfort and durability.",
    //   imageUrl: "/images/pic1.png",
    // },
    // {
    //   id: 2,
    //   name: 'T-Shirts For Mens',
    //   price: 145,
    //   rating: 3,
    //   description: "Casual t-shirt for everyday wear.",
    //   imageUrl: "/images/pic2.png",
    // },
    // {
    //   id: 3,
    //   name: 'Trousers For Women',
    //   price: 80,
    //   rating: 4,
    //   description: "Comfortable trousers perfect for daily use.",
    //   imageUrl: "/images/pic3.png",
    // },
    // {
    //   id: 4,
    //   name: 'Fits Bermuda T-Shirts',
    //   price: 210,
    //   rating: 5,
    //   description: "High-quality t-shirt for a relaxed fit.",
    //   imageUrl: "/images/pic4.png",
    // },
    // {
    //   id: 5,
    //   name: "Hoodie For Mens",
    //   price: 212,
    //   rating: 5,
    //   description: "Stylish hoodie made for comfort and durability.",
    //   imageUrl: "/images/pic5.png",
    // },
    // {
    //   id: 6,
    //   name: "T-Shirts For Mens",
    //   price: 145,
    //   rating: 3,
    //   description: "Casual t-shirt for everyday wear.",
    //   imageUrl: "/images/pic6.png",
    // },
    // {
    //   id: 7,
    //   name: "Loose Fits Bermuda Shorts",
    //   price: 80,
    //   rating: 4,
    //   description: "Comfortable shorts perfect for summer.",
    //   imageUrl: "/images/pic7.png",
    // },
    // {
    //   id: 8,
    //   name: "Faded Skiny Jeans",
    //   price: 210,
    //   rating: 5,
    //   description: "Durable jeans with a faded look.",
    //   imageUrl: "/images/pic8.png",
    // },
    // {
    //   id: 9,
    //   name: "Fits Bermuda T-Shirts",
    //   price: 189,
    //   rating: 5,
    //   description: "High-quality t-shirt for a relaxed fit.",
    //   imageUrl: "/images/pic9.png",
    // },
    // {
    //   id: 10,
    //   name: "Fits Bermuda T-Shirts",
    //   price: 110,
    //   rating: 5,
    //   description: "High-quality t-shirt for a relaxed fit.",
    //   imageUrl: "/images/pic10.png",
    // },
  ];



  ///jaldii kro na plz...
  