import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const subcategoriesData = [
  { name: "Honey & Detox Tea", category: "Tea House" },
  { name: "Tea & Coffee Acc", category: "Tea House" },
  { name: "Loose Tea & Herbs", category: "Tea House" },
  { name: "Tiki", category: "Tea House" },
  { name: "For Girls", category: "Games & Toys" },
  { name: "Lego & Puzzle", category: "Games & Toys" },
  { name: "Educational Toys", category: "Games & Toys" },
  { name: "Others", category: "Games & Toys" },
];

async function main() {
  console.log("🌱 Seeding subcategories...");

  for (const sub of subcategoriesData) {
    const category = await prisma.category.findUnique({
      where: { name: sub.category },
    });

    if (!category) {
      console.error(`❌ Category '${sub.category}' not found`);
      continue;
    }

    const existing = await prisma.subcategory.findFirst({
      where: {
        name: sub.name,
        categoryId: category.id,
      },
    });

    if (!existing) {
      await prisma.subcategory.create({
        data: {
          name: sub.name,
          category: { connect: { id: category.id } },
        },
      });
      console.log(`✅ Created subcategory: ${sub.name} under ${sub.category}`);
    } else {
      console.log(`ℹ️ Skipped existing: ${sub.name}`);
    }
  }

  console.log("✅ Finished seeding subcategories.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
