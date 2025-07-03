import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const products = [
  {
    name: "Portable Neck Fan",
    price: 10.0,
    image: "Portable Neck Fan.png",
    ribbon: "New",
    category: "Health & Personal Care",
    discount: false,
    originalPrice: null,
    percentage: null,
    description: "The portable fan have two wind head, Can feel more powerful airflow.",
    inventory: 100,
    itemsSold: 5,
  },
  {
    name: "Cup Holder",
    price: 12.0,
    image: "Cup Holder.png",
    ribbon: "New",
    category: "Tea House",
    discount: false,
    originalPrice: null,
    percentage: null,
    description: "Incredible mug \n Capacity: 400ml.",
    inventory: 50,
    itemsSold: 10,
  },
  {
    name: "Kids Bottle",
    price: 7.0,
    image: "Kids Bottle.png",
    ribbon: "Favorite",
    category: "Kids & Babies",
    discount: false,
    originalPrice: null,
    percentage: null,
    description: "Bottle with silicone \n size: 17.5 x 8.5 cm",
    inventory: 20,
    itemsSold: 12,
  },
  {
    name: "Aroma Fragrance Diffuser",
    price: 7.0,
    image: "Aroma Fragrance Diffuser.png",
    ribbon: "",
    category: "Aroma",
    discount: false,
    originalPrice: null,
    percentage: null,
    description: "Aroma Fragrance Diffuser (20 ml)\nSet of 4 pcs including fragrances of : lavender , rose , ocean , jasmine",
    inventory: 0,
    itemsSold: 2,
  },
  {
    name: "Chinease Tea Cup",
    price: 12.0,
    image: "Chinease Tea Cup.png",
    ribbon: "New",
    category: "Tea House",
    discount: false,
    originalPrice: null,
    percentage: null,
    description: "CHINESE TEA CUP\nSIZE: 7.8 X 8 X 7 CM",
    inventory: 15,
    itemsSold: 20,
  },
  {
    name: "Heat Pad",
    price: 1.0,
    image: "Heat Pad.png",
    ribbon: "Favorite",
    category: "Home Accessories",
    discount: false,
    originalPrice: null,
    percentage: null,
    description: "ceramic\n16cm x 16cm",
    inventory: 10,
    itemsSold: 18,
  },
  {
    name: "Foam Blocks",
    price: 12.0,
    image: "Foam Blocks.png",
    ribbon: "",
    category: "Games & Toys",
    discount: true,
    originalPrice: 14.11,
    percentage: 15,
    description: "FOAM BLOCKS\n47pcs",
    inventory: 10,
    itemsSold: 1,
  },
  {
    name: "Caffine Cup Holder",
    price: 7.0,
    image: "Caffine Cup Holder.png",
    ribbon: "",
    category: "Tea House",
    discount: false,
    originalPrice: null,
    percentage: null,
    description: "Incredible mug\nCapacity: 400ml.",
    inventory: 0,
    itemsSold: 0,
  },
  {
    name: "Silicon Kids Bottle",
    price: 7.0,
    image: "Silicon Kids Bottle.png",
    ribbon: "",
    category: "Kids & Babies",
    discount: false,
    originalPrice: null,
    percentage: null,
    description: "Bottle with silicones\nize: 17.5 x 8.5 cm",
    inventory: 0,
    itemsSold: 30,
  },
]

async function main() {
  console.log(`🌱 Seeding ${products.length} products...`)
  for (const product of products) {
    await prisma.product.create({ data: product })
  }
  console.log(`✅ Seeding finished.`)
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
