"use client";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import imagePaths from "@/constants/imagePaths";
import { Product } from "@/types/db";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from "@/contexts/AuthContext";
import { addFavorite, removeFavorite } from "@/lib/favorite";

interface ProductImageProps {
  product: Product;
}

export default function ProductImage({ product }: ProductImageProps) {
  const [favorited, setFavorited] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const clickedRef = useRef<HTMLDivElement>(null);

  const { favorites, setFavorites } = useAuth();

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

  useEffect(() => {
    const isFavorited = favorites.some(
      (favorite) => favorite?.product?.id === product.id
    );
    setFavorited(isFavorited);
  }, [favorites, product.id]);

  const handleFavoriteClick = async (productId: string) => {
    // Handle Remove Favorite
    if (favorited) {
      try {
        const res = await removeFavorite(productId);
        if (res?.status === 200) {
          setFavorites(favorites.filter((fav) => fav.product.id !== productId));
        }
      } catch (err) {
        console.log(err);
      }

      // Handle Add Favorite
    } else {
      try {
        const res = await addFavorite(productId);
        if (res?.status === 201) {
          setFavorites([res.data, ...favorites]);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

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
        onClick={(e) => {
          if (e.target === e.currentTarget) setIsClicked(false);
        }}
      >
        <div className="flex flex-row gap-5 justify-between w-full">
          <button
            className="bg-black h-12 py-3 px4 flex-1 w-full flex justify-center items-center rounded-xl"
            onClick={() => handleFavoriteClick(product.id)}
          >
            <FontAwesomeIcon
              icon={[`${favorited ? "fas" : "far"}`, "heart"]}
              className="text-orange h-full w-auto"
              style={{ height: "100%" }}
            />
          </button>
          <button className="bg-black h-12 py-2 px4 flex-1 w-full flex justify-center items-center rounded-xl">
            <Link href={`/product/${product.id}`}>
              <Image
                src={`${imagePaths.icon}/viewOrange.svg`}
                width={30}
                height={18}
                alt="Favorite"
              />{" "}
            </Link>
          </button>
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
          src={`${imagePaths.products}/${product.images.mainImage}`}
          alt={product.name}
          fill
          sizes="100vw"
        />
      </div>
    </div>
  );
}
