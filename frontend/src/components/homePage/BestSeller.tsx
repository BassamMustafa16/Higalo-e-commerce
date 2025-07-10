"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { Product } from "@/types/db";
import Loader from "../loaders/Loader";
import ProductCard from "./ProductCard";
import { useAuth } from "@/contexts/AuthContext";

export default function BestSeller() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchBestSellers() {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products/best-sellers`
        );
        if (res.status === 200) setProducts(Array.from(res.data));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchBestSellers();
  }, [products]);

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-5 bg-[#F7F7F7]">
      {/* Loading */}
      {loading && <Loader />}

      {/* Heading */}
      <div>
        <h2 className="text-darkBlue md:text-xl lg:text-2xl font-semibold">
          Best Sellers of The Month
        </h2>
      </div>
      {/* Content */}
      <div className="mt-5 grid grid-cols-1 lg:grid-cols-2 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
