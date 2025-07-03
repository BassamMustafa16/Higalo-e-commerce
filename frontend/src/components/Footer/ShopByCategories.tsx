"use client";
import { useCategories } from "@/contexts/dataContext";
import Link from "next/link";
export default function ShopByCategory() {
  const { categories } = useCategories();
  return (
    <div className="flex flex-col gap-3 lg:col-span-2">
      <h3 className="text-orange font-semibold">Shop By Categories</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-white text-sm">
        {categories.map((category) => (
          <Link key={category.id} href={"/"}>
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
