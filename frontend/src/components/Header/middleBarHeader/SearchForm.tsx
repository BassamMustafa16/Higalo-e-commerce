"use client";

import imagePaths from "@/constants/imagePaths";
import Image from "next/image";
import DropdownCategory from "./DropdownCategory";
import categories from "@/constants/categories";
import { useState } from "react";

export default function SearchForm() {
  const [isShowCategories, setIsShowCategories] = useState(false);


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form
      className="flex flex-row gap-1 flex-3 max-w-xl"
      onSubmit={handleSubmit}
    >
      <div className="relative flex-4">
        {/* Search Input */}
        <input
          type="text"
          name="name"
          placeholder="What are you looking for?"
          className="p-2 bg-white rounded-lg outline-none text-sm w-full"
        ></input>
        {/* Category Button */}
        <button
          type="button"
          className="hidden absolute md:flex flex-row gap-4 justify-between items-center top-0 right-0 h-full px-4 rounded-lg bg-[#F5F5F5] text-[#555555] text-sm cursor-pointer"
          onClick={() => setIsShowCategories(!isShowCategories)}
        >
          Category
          <Image
            width={10}
            height={6}
            src={`${imagePaths.icon}/arrow.svg`}
            alt="dropdown arrow"
            className={`${
              isShowCategories && "rotate-x-180"
            } translate-y-1/2 transition-transform duration-300 `}
          />
        </button>
        {/* Categories dropdown Content */}
        <div
          className={`${
            isShowCategories
              ? "max-h-80 overflow-auto py-2"
              : "max-h-0 overflow-hidden"
          } absolute right-0 bg-white text-black px-5 z-10 rounded-lg transition-all duration-300 shadow-[0px_5px_5px_#858585]`}
        >
          <ul className="">
            <li className="p-2 cursor-pointer">All products</li>
            {categories.map((category) => (
              <DropdownCategory key={category.id} category={category} />
            ))}
          </ul>
        </div>
      </div>
      <button
        type="submit"
        className="bg-orange rounded-lg px-4 py-1 text-white border-orange outline-orange flex-1 cursor-pointer"
      >
        Search
      </button>
    </form>
  );
}
