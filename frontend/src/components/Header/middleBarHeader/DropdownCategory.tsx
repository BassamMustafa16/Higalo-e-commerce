import Image from "next/image";
import imagePaths from "@/constants/imagePaths";
import { useState } from "react";

interface Category {
  name: string;
  // add other properties if needed
}

interface DropdownCategoryProps {
  category: Category;
}

export default function DropdownCategory({ category }: DropdownCategoryProps) {
  const [isShowSubcategory, setIsShowSubcategory] = useState(false);

  const dummySubcategories = [
    { id: 1, name: "Honey & Detox Tea", category: "Tea House" },
    { id: 2, name: "Tea & Coffee Acc", category: "Tea House" },
    { id: 3, name: "Loose Tea & Herbs", category: "Tea House" },
    { id: 4, name: "Tiki", category: "Tea House" },
    { id: 5, name: "For Girls", category: "Games & Toys" },
    { id: 6, name: "Lego & Puzzle", category: "Games & Toys" },
    { id: 7, name: "Educational Toys", category: "Games & Toys" },
    { id: 8, name: "Others", category: "Games & Toys" },
  ];
  return (
    <li className="p-2 flex flex-col cursor-pointer">
      <div
        className="flex flex-row gap-5 justify-between"
        onClick={() => setIsShowSubcategory(!isShowSubcategory)}
      >
        {category.name}
        <Image
          width={10}
          height={6}
          src={`${imagePaths.icon}/arrow.svg`}
          alt="Dropdown arrow"
          className={`${
            isShowSubcategory && "rotate-x-180"
          } transition-transform duration-300`}
        />
      </div>

      <ul
        className={`${
          isShowSubcategory ? "max-h-40 mt-2" : "max-h-0"
        } overflow-hidden transition-all duration-300 `}
      >
        {dummySubcategories
          .filter((subcategory) => subcategory.category === category.name)
          .map((subcategory) => (
            <li key={subcategory.id} className="px-4 py-1">
              {subcategory.name}
            </li>
          ))}
      </ul>
    </li>
  );
}
