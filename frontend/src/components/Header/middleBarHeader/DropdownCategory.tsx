import Image from "next/image";
import imagePaths from "@/constants/imagePaths";
import { useState } from "react";
import { useCategories } from "@/contexts/dataContext";

interface Category {
  id: string;
  name: string;
  // add other properties if needed
}

interface DropdownCategoryProps {
  category: Category;
}

export default function DropdownCategory({ category }: DropdownCategoryProps) {
  const { subcategories } = useCategories();
  console.log(subcategories);
  const [isShowSubcategory, setIsShowSubcategory] = useState(false);

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
        {subcategories
          .filter((subcategory) => subcategory.categoryId === category.id)
          .map((subcategory) => (
            <li key={subcategory.id} className="px-4 py-1">
              {subcategory.name}
            </li>
          ))}
      </ul>
    </li>
  );
}
