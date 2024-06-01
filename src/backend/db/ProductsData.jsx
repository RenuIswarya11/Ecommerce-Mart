import { v4 as uuid } from "uuid";

export const Products = [
  // Nutritional Supplements
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51A+zfC9oEL._SL1000_.jpg",
    name: "HealthyHey Nutrition Natural Vitamin B-Complex - from Quinoa Sprout - 90 Vegetable Capsules",
    price: 10,
    originalPrice: 15,
    category: "Nutritional Supplements",
    rating: 1.5,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51BuPqiRAWS._SL1200_.jpg",
    name: "Follihair New Nutraceutical Pack of 30N Tablets Bottle",
    price: 10,
    originalPrice: 15,
    category: "Nutritional Supplements",
    rating: 2.5,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81YaHjb+7zL._SL1500_.jpg",
    name: "Protinex Health Supplement And Nutritional Protein Mix For Adults-(Rich Chocolate Flavor, 400 Gms, Jar) with 25 Vital Nutrients to Support Strength",
    price: 10,
    originalPrice: 15,
    category: "Nutritional Supplements",
    rating: 4.5,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61QczXQV+CL._SL1500_.jpg",
    name: "Carbamide Forte Probiotics Supplement 2.75 Billion for Women & Men - 100 Veg Capsules",
    price: 10,
    originalPrice: 15,
    category: "Nutritional Supplements",
    rating: 3.5,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51f1QZLCS4L._SL1100_.jpg",
    name: "Centrum Women, World's No.1 Multivitamin with Biotin, Vitamin C & 21 vital Nutrients for Overall Health",
    price: 10,
    originalPrice: 15,
    category: "Nutritional Supplements",
    rating: 1.5,
    quantity: 1
  },
  // Add more products for Nutritional Supplements...






  // Organic and Natural Products
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61tqnWwoJwL._SL1438_.jpg",
    name: "Natural health products Indigo Powder (Indigofera Tinctoria)",
    price: 20,
    originalPrice: 25,
    category: "Organic and Natural Products",
    rating: 4.3,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81mDWFFuqqL._SL1500_.jpg",
    name: "Natural Health Products Amla Indian Gooseberry (Emblica Officinallis) Powder",
    price: 20,
    originalPrice: 25,
    category: "Organic and Natural Products",
    rating: 4.3,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61HuUzbtK8L.jpg",
    name: "Natural health products Mulethi Powder for Face Whitening & Eating",
    price: 20,
    originalPrice: 25,
    category: "Organic and Natural Products",
    rating: 4.3,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71vlW2P99SL._SL1500_.jpg",
    name: "Natural health products Hibiscus Powder for Hair Growth",
    price: 20,
    originalPrice: 25,
    category: "Organic and Natural Products",
    rating: 4.3,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71MTytpb6BL._SL1500_.jpg",
    name: "Natural health products Beetroot Powder for Face | Blood Turnip",
    price: 20,
    originalPrice: 25,
    category: "Organic and Natural Products",
    rating: 4.3,
    quantity: 1
  },
  // Add more products for Organic and Natural Products...

  // Fitness Equipment and Gear
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71KJilkgR3L._SL1500_.jpg",
    name: "HASHTAG FITNESS 10kg to 100kg gym equipment for home workout with steel plates",
    price: 30,
    originalPrice: 40,
    category: "Fitness Equipment and Gear",
    rating: 4.8,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71LzhDfznoL._SL1500_.jpg",
    name: "Amazon basics Multipurpose Push Up Bar for Biceps, Back, Shoulder and Triceps",
    price: 30,
    originalPrice: 40,
    category: "Fitness Equipment and Gear",
    rating: 4.8,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71Jc-KPzQHL._SL1500_.jpg",
    name: "FYA Automatic Rebound Abdominal Wheel Kit, Elbow Support Ab Roller Workout Equipment with Knee Pad",
    price: 30,
    originalPrice: 40,
    category: "Fitness Equipment and Gear",
    rating: 4.8,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61ciAxtDZaL._SL1500_.jpg",
    name: "Ab Roller Multi Angle Side Slip With Elbow Support For Strength Training",
    price: 30,
    originalPrice: 40,
    category: "Fitness Equipment and Gear",
    rating: 4.8,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61o-L7cUAWL._SL1080_.jpg",
    name: "Gamma Fitness Home Gym Machine FTS-101 Pro All Gym Stations in One Machine for Professional Workout",
    price: 30,
    originalPrice: 40,
    category: "Fitness Equipment and Gear",
    rating: 4.8,
    quantity: 1
  },
  // Add more products for Fitness Equipment and Gear...

  // Personal Care and Beauty
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61TFHHV9-wL._SL1100_.jpg",
    name: "PERSONAL TOUCH SKINCARE Juicy Coat Lip Balm",
    price: 15,
    originalPrice: 20,
    category: "Personal Care and Beauty",
    rating: 4.2,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51M6NqnqLBL._SL1500_.jpg",
    name: "PERSONAL TOUCH SKINCARE Cleansing Milk Facebath for Deep Pore Gentle Soft Deep Hydrating Cleanser Moisturizes",
    price: 15,
    originalPrice: 20,
    category: "Personal Care and Beauty",
    rating: 4.2,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61DLCk2j-yL._SL1500_.jpg",
    name: "Personal Touch Skincare Hydra Face Pore Minimising Wipes (30 Sheets)",
    price: 15,
    originalPrice: 20,
    category: "Personal Care and Beauty",
    rating: 4.2,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/613JuVshipL._SL1463_.jpg",
    name: "FUTURA MARKET Acrylic Amber Jar with Black Lid for Personal Care, Medicine keeping, Household use",
    price: 15,
    originalPrice: 20,
    category: "Personal Care and Beauty",
    rating: 4.2,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71MMmMsZ3ZL._SL1500_.jpg",
    name: "Nutracitta Vitamin C Powder (L-Ascorbic Acid) For Immunity Boosting, Serum Making, Anti Ageing Beauty Formulations",
    price: 15,
    originalPrice: 20,
    category: "Personal Care and Beauty",
    rating: 4.2,
    quantity: 1
  },
  // Add more products for Personal Care and Beauty...

  // Mindfulness and Meditation
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/818FJEgBVSL._SL1500_.jpg",
    name: "Mindfulness Made Simple: An Introduction to Finding Calm Through Mindfulness & Meditation",
    price: 25,
    originalPrice: 30,
    category: "Mindfulness and Meditation",
    rating: 4.6,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71OZjQOJ4LL._SL1500_.jpg",
    name: "The Headspace Guide to... Mindfulness & Meditation: As Seen on Netflix",
    price: 25,
    originalPrice: 30,
    category: "Mindfulness and Meditation",
    rating: 4.6,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71XbYRQW3DL._SL1500_.jpg",
    name: "The Miracle Of Mindfulness: The Classic Guide to Meditation by the World's Most Revered Master",
    price: 25,
    originalPrice: 30,
    category: "Mindfulness and Meditation",
    rating: 4.6,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61uwjZLREwS._SL1360_.jpg",
    name: "Mindfulness Meditation for Self-Healing: Beginner's Meditation Guide to Eliminate Stress, Anxiety and Depression",
    price: 25,
    originalPrice: 30,
    category: "Mindfulness and Meditation",
    rating: 4.6,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81LKmbFlvVL._SL1500_.jpg",
    name: "Mindfulness Meditation for Beginners: 50 Meditations to Practice Awareness, Acceptance, and Peace",
    price: 25,
    originalPrice: 30,
    category: "Mindfulness and Meditation",
    rating: 4.6,
    quantity: 1
  },
  
  // Add more products for Wellness Books and Resources...
];

