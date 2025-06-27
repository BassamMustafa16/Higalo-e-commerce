"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import imagePaths from "@/constants/imagePaths";

interface Product {
  image: string;
  name: string;
}

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  const [isClicked, setIsClicked] = useState(false);
  const clickedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isClicked) return;

    function handleClickOutside(event: MouseEvent) {
      if (
        clickedRef.current &&
        !clickedRef.current.contains(event.target as Node)
      ) {
        setIsClicked(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isClicked]);

  return (
    <div className="relative flex-1 aspect-square">
      {/* Clicked Content */}
      <div
        ref={clickedRef}
        className={`absolute inset-0 flex flex-col gap-5 items-center justify-center bg-[#F5F5F5] h-full rounded-xl px-8 lg:px-4 transition-opacity duration-300 ${
          isClicked
            ? "opacity-100 z-20 pointer-events-auto"
            : "opacity-0 z-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-row gap-5 justify-between w-full">
          <div className="bg-black px-4 py-2 w-full flex flex-row justify-center rounded-xl">
            <Image
              src={`${imagePaths.icon}/favoriteOrange.svg`}
              width={30}
              height={18}
              alt="Favorite"
            />
          </div>
          <div className="bg-black px-4 py-2 rounded-xl w-full flex flex-row justify-center">
            <Image
              src={`${imagePaths.icon}/viewOrange.svg`}
              width={30}
              height={18}
              alt="Favorite"
            />{" "}
          </div>
        </div>
        <button
          className="w-full py-2 bg-orange text-white rounded-xl"
          type="button"
        >
          Add to Cart
        </button>
      </div>
      {/* Not Clicked Content */}
      <div
        onClick={() => setIsClicked(true)}
        className={`absolute inset-0 transition-opacity duration-300 ${
          isClicked
            ? "opacity-0 z-0 pointer-events-none"
            : "opacity-100 z-10 pointer-events-auto"
        }`}
      >
        <Image
          src={`${imagePaths.products}/${product.image}`}
          alt={product.name}
          fill
          sizes="100vw"
        />
      </div>
    </div>
  );
}
